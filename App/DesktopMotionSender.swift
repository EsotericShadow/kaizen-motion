import Combine
import Foundation
import MotionCore
import Network

struct DesktopMotionPeer: Identifiable, Equatable {
    let id: String
    let name: String
    fileprivate let endpoint: NWEndpoint

    static func == (lhs: Self, rhs: Self) -> Bool { lhs.id == rhs.id }
}

enum DesktopMotionConnectionState: Equatable {
    case idle
    case browsing
    case connecting(String)
    case connected(String)
    case waiting(String)
    case failed(String)
}

/// Sends processed musical events, never audio or raw Core Motion samples.
/// All Network.framework work stays on its private queue.
final class DesktopMotionSender: ObservableObject, @unchecked Sendable {
    @Published private(set) var peers: [DesktopMotionPeer] = []
    @Published private(set) var state: DesktopMotionConnectionState = .idle
    /// Smoothed network round-trip time. This excludes sensor and DAW buffer latency.
    @Published private(set) var roundTripMilliseconds: Double?
    /// Smoothed absolute RTT variation, useful for comparing candidate routes.
    @Published private(set) var jitterMilliseconds: Double?

    private let queue = DispatchQueue(label: "com.kaizendsp.motion.desktop-sender", qos: .userInteractive)
    private var browser: NWBrowser?
    private var connection: NWConnection?
    private var heartbeatTimer: DispatchSourceTimer?
    private var clockProbeTimer: DispatchSourceTimer?
    private var pendingClockProbes: [UInt32: UInt64] = [:]
    private var clockToken: UInt32 = 0
    private var smoothedRTTMilliseconds: Double?
    private var smoothedJitterMilliseconds: Double?
    private var sessionID = UInt32.random(in: 1...UInt32.max)
    private var sequence: UInt32 = 0
    private var linkHealth = MotionLinkHealth()
    private var publishedLinkHealth: MotionLinkHealth.State = .disconnected
    private var connectedPeerName: String?
    private var performanceInstrument: UInt8 = 0
    private var performanceArmed = true
    private var performanceVoice: UInt8 = 0
    private var autoReconnectName: String?

    /// A previously explicit selection authorizes resuming this same Mac.
    func resumePreferredMac() {
        queue.async { [weak self] in
            guard let self,
                  let name = UserDefaults.standard.string(forKey: "Motion.preferredMac") else { return }
            if self.connection != nil,
               self.linkHealth.state(at: DispatchTime.now().uptimeNanoseconds) != .timedOut { return }
            self.connection?.cancel()
            self.connection = nil
            self.stopHeartbeat()
            self.stopClockProbes()
            self.browser?.cancel()
            self.browser = nil
            self.autoReconnectName = name
            self.startBrowsing()
        }
    }

    func setPerformanceState(instrument: MotionInstrument, armed: Bool, voice: MotionThereminVoice = .classic) {
        queue.async { [weak self] in
            guard let self else { return }
            let changed = self.performanceInstrument != UInt8(instrument.rawValue) || self.performanceArmed != armed || self.performanceVoice != UInt8(voice.rawValue)
            self.performanceInstrument = UInt8(instrument.rawValue)
            self.performanceArmed = armed
            self.performanceVoice = UInt8(voice.rawValue)
            if changed { self.sendPerformanceState() }
        }
    }

    private func sendPerformanceState() {
        guard connection != nil else { return }
        if ProcessInfo.processInfo.environment["KAIZEN_MOTION_DIAGNOSTICS"] == "1" {
            print("Motion state sent: instrument=\(performanceInstrument) armed=\(performanceArmed)")
        }
        send(MotionRealtimePacket(sessionID: sessionID, sequence: nextSequence(),
                                  senderUptimeNanoseconds: DispatchTime.now().uptimeNanoseconds,
                                  message: .performanceState(instrument: performanceInstrument, armed: performanceArmed, voice: performanceVoice)))
    }

    /// First browse follows an explicit action; a saved choice may resume on activation.
    func startBrowsing() {
        queue.async { [weak self] in
            guard let self, self.browser == nil else { return }
            self.publish(.browsing)
            let parameters = NWParameters.udp
            parameters.includePeerToPeer = true
            parameters.serviceClass = .interactiveVoice
            let browser = NWBrowser(
                for: .bonjour(type: "_kaizen-motion._udp", domain: nil),
                using: parameters
            )
            browser.stateUpdateHandler = { [weak self, weak browser] state in
                guard let self, let browser, browser === self.browser else { return }
                switch state {
                case let .waiting(error): self.publish(.waiting(error.localizedDescription))
                case let .failed(error):
                    self.browser = nil
                    DispatchQueue.main.async { self.peers = [] }
                    self.publish(.failed(error.localizedDescription))
                case .cancelled:
                    self.browser = nil
                    DispatchQueue.main.async { self.peers = [] }
                    self.publish(.idle)
                default: break
                }
            }
            browser.browseResultsChangedHandler = { [weak self] results, _ in
                let peers = results.map { result -> DesktopMotionPeer in
                    let name: String
                    if case let .service(serviceName, _, _, _) = result.endpoint {
                        name = serviceName
                    } else {
                        name = String(describing: result.endpoint)
                    }
                    return DesktopMotionPeer(
                        id: String(describing: result.endpoint),
                        name: name,
                        endpoint: result.endpoint
                    )
                }
                .sorted { $0.name.localizedCaseInsensitiveCompare($1.name) == .orderedAscending }
                DispatchQueue.main.async { self?.peers = peers }
                if let name = self?.autoReconnectName,
                   let peer = peers.first(where: { $0.name == name }) {
                    self?.autoReconnectName = nil
                    self?.connect(to: peer)
                }
            }
            self.browser = browser
            browser.start(queue: self.queue)
        }
    }

    func connect(to peer: DesktopMotionPeer) {
        queue.async { [weak self] in
            guard let self else { return }
            self.autoReconnectName = nil
            UserDefaults.standard.set(peer.name, forKey: "Motion.preferredMac")
            self.connection?.cancel()
            self.stopHeartbeat()
            self.stopClockProbes()
            self.sessionID = UInt32.random(in: 1...UInt32.max)
            self.sequence = 0
            self.connectedPeerName = peer.name
            self.linkHealth.reset()
            self.publishedLinkHealth = .disconnected
            self.clearPublishedMetrics()
            self.publish(.connecting(peer.name))

            let parameters = NWParameters.udp
            parameters.includePeerToPeer = true
            parameters.serviceClass = .interactiveVoice
            let connection = NWConnection(to: peer.endpoint, using: parameters)
            connection.stateUpdateHandler = { [weak self, weak connection] state in
                guard let self, let connection, connection === self.connection else { return }
                switch state {
                case .ready:
                    // UDP ready confirms a local route, not that the Mac is alive.
                    self.linkHealth.begin(at: DispatchTime.now().uptimeNanoseconds)
                    self.publishedLinkHealth = .awaitingReply
                    self.publish(.connecting(peer.name))
                    self.sendPerformanceState()
                    self.startHeartbeat()
                    self.startClockProbes()
                    self.receive(on: connection)
                case let .waiting(error):
                    self.publish(.waiting(error.localizedDescription))
                case let .failed(error):
                    self.connection = nil
                    self.publish(.failed(error.localizedDescription))
                    self.stopHeartbeat()
                    self.stopClockProbes()
                    self.linkHealth.reset()
                    self.clearPublishedMetrics()
                case .cancelled:
                    self.connection = nil
                    self.publish(.idle)
                    self.stopHeartbeat()
                    self.stopClockProbes()
                    self.linkHealth.reset()
                    self.clearPublishedMetrics()
                default:
                    break
                }
            }
            self.connection = connection
            connection.start(queue: self.queue)
        }
    }

    func send(events: [MotionOutputEvent]) {
        guard !events.isEmpty else { return }
        queue.async { [weak self] in
            guard let self, self.connection != nil else { return }
            for event in events {
                guard let packet = MotionRealtimePacket(
                    sessionID: self.sessionID,
                    sequence: self.nextSequence(),
                    event: event
                ) else { continue }
                self.send(packet)
            }
        }
    }

    func stop(forgetPeer: Bool = false) {
        queue.async { [weak self] in
            guard let self else { return }
            self.autoReconnectName = nil
            if forgetPeer { UserDefaults.standard.removeObject(forKey: "Motion.preferredMac") }
            let connection = self.connection
            self.connection = nil
            if let connection {
                let panic = MotionRealtimePacket(
                    sessionID: self.sessionID,
                    sequence: self.nextSequence(),
                    senderUptimeNanoseconds: DispatchTime.now().uptimeNanoseconds,
                    message: .panic
                )
                // Give the receiver one final chance to clear held notes. The connection is no
                // longer active from the sender's perspective, so its cancellation and send
                // completion cannot overwrite the explicit idle state below.
                connection.send(content: panic.encoded(), completion: .contentProcessed { [weak connection] _ in
                    connection?.cancel()
                })
            }
            self.stopHeartbeat()
            self.stopClockProbes()
            self.linkHealth.reset()
            self.publishedLinkHealth = .disconnected
            self.connectedPeerName = nil
            self.browser?.cancel()
            self.browser = nil
            DispatchQueue.main.async {
                self.peers = []
                self.state = .idle
                self.roundTripMilliseconds = nil
                self.jitterMilliseconds = nil
            }
        }
    }

    private func send(_ packet: MotionRealtimePacket) {
        guard let connection else { return }
        connection.send(content: packet.encoded(), completion: .contentProcessed { [weak self, weak connection] error in
            guard let self, let connection, connection === self.connection else { return }
            if let error { self.publish(.waiting(error.localizedDescription)) }
        })
    }

    private func nextSequence() -> UInt32 {
        defer { sequence &+= 1 }
        return sequence
    }

    private func startHeartbeat() {
        stopHeartbeat()
        let timer = DispatchSource.makeTimerSource(queue: queue)
        timer.schedule(deadline: .now(), repeating: .milliseconds(200))
        timer.setEventHandler { [weak self] in
            guard let self else { return }
            self.publishLinkHealth(at: DispatchTime.now().uptimeNanoseconds)
            self.send(MotionRealtimePacket(
                sessionID: self.sessionID,
                sequence: self.nextSequence(),
                senderUptimeNanoseconds: DispatchTime.now().uptimeNanoseconds,
                message: .heartbeat(lastReceivedSequence: 0)
            ))
        }
        timer.resume()
        heartbeatTimer = timer
    }

    private func stopHeartbeat() {
        heartbeatTimer?.cancel()
        heartbeatTimer = nil
    }

    private func startClockProbes() {
        stopClockProbes()
        let timer = DispatchSource.makeTimerSource(queue: queue)
        timer.schedule(deadline: .now(), repeating: .seconds(1))
        timer.setEventHandler { [weak self] in self?.sendClockProbe() }
        timer.resume()
        clockProbeTimer = timer
    }

    private func stopClockProbes() {
        clockProbeTimer?.cancel()
        clockProbeTimer = nil
        pendingClockProbes.removeAll(keepingCapacity: true)
        smoothedRTTMilliseconds = nil
        smoothedJitterMilliseconds = nil
    }

    private func sendClockProbe() {
        guard connection != nil else { return }
        sendPerformanceState()
        clockToken &+= 1
        let sentAt = DispatchTime.now().uptimeNanoseconds
        pendingClockProbes[clockToken] = sentAt

        // Bound retained probes if a route disappears without a state callback.
        if pendingClockProbes.count > 8,
           let oldest = pendingClockProbes.keys.min() {
            pendingClockProbes.removeValue(forKey: oldest)
        }

        send(MotionRealtimePacket(
            sessionID: sessionID,
            sequence: nextSequence(),
            senderUptimeNanoseconds: sentAt,
            message: .clockProbe(token: clockToken)
        ))
    }

    private func receive(on connection: NWConnection) {
        connection.receiveMessage { [weak self, weak connection] data, _, _, error in
            guard let self, let connection, connection === self.connection else { return }
            if let data,
               let packet = MotionRealtimePacket(decoding: data),
               packet.sessionID == self.sessionID {
                switch packet.message {
                case let .clockReply(token, processingMicroseconds):
                    self.receiveClockReply(
                        token: token,
                        processingMicroseconds: processingMicroseconds
                    )
                case let .clockProbe(token):
                    self.replyToClockProbe(token: token)
                default:
                    break
                }
            }
            if error == nil {
                self.receive(on: connection)
            }
        }
    }

    private func receiveClockReply(token: UInt32, processingMicroseconds: UInt32) {
        guard let sentAt = pendingClockProbes.removeValue(forKey: token) else { return }
        let receivedAt = DispatchTime.now().uptimeNanoseconds
        guard receivedAt >= sentAt else { return }
        let elapsed = receivedAt - sentAt
        let bridgeProcessing = UInt64(processingMicroseconds) * 1_000
        guard elapsed < MotionLinkHealth.timeoutNanoseconds, bridgeProcessing <= elapsed else { return }
        self.linkHealth.recordReply(at: receivedAt)
        self.publishLinkHealth(at: receivedAt)
        let networkNanoseconds = elapsed - bridgeProcessing
        let sample = Double(networkNanoseconds) / 1_000_000

        let priorRTT = smoothedRTTMilliseconds
        let nextRTT = priorRTT.map { $0 * 0.8 + sample * 0.2 } ?? sample
        let variation = priorRTT.map { abs(sample - $0) } ?? 0
        let nextJitter = smoothedJitterMilliseconds.map { $0 * 0.75 + variation * 0.25 } ?? variation
        smoothedRTTMilliseconds = nextRTT
        smoothedJitterMilliseconds = nextJitter

        DispatchQueue.main.async { [weak self] in
            self?.roundTripMilliseconds = nextRTT
            self?.jitterMilliseconds = nextJitter
        }
    }

    private func replyToClockProbe(token: UInt32) {
        let receivedAt = DispatchTime.now().uptimeNanoseconds
        let repliedAt = DispatchTime.now().uptimeNanoseconds
        let processingMicroseconds = UInt32(clamping: Int((repliedAt - receivedAt) / 1_000))
        send(MotionRealtimePacket(
            sessionID: sessionID,
            sequence: nextSequence(),
            senderUptimeNanoseconds: repliedAt,
            message: .clockReply(
                token: token,
                processingMicroseconds: processingMicroseconds
            )
        ))
    }

    private func publish(_ next: DesktopMotionConnectionState) {
        DispatchQueue.main.async { [weak self] in self?.state = next }
    }

    private func clearPublishedMetrics() {
        DispatchQueue.main.async { [weak self] in
            self?.roundTripMilliseconds = nil
            self?.jitterMilliseconds = nil
        }
    }

    private func publishLinkHealth(at now: UInt64) {
        let health = linkHealth.state(at: now)
        guard health != publishedLinkHealth else { return }
        publishedLinkHealth = health
        switch health {
        case .responsive:
            if let name = connectedPeerName { publish(.connected(name)) }
        case .timedOut:
            smoothedRTTMilliseconds = nil
            smoothedJitterMilliseconds = nil
            clearPublishedMetrics()
            publish(.waiting("Mac is not responding. Check Motion Bridge and your Wi-Fi."))
        case .awaitingReply, .disconnected:
            break
        }
    }
}
