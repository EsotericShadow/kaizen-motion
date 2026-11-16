#if os(macOS)
import AudioToolbox
import CoreMIDI
import Foundation
import MotionCore
import Network

private enum BridgeError: Error, CustomStringConvertible {
    case coreMIDI(String, OSStatus)
    case invalidPort(String)

    var description: String {
        switch self {
        case let .coreMIDI(operation, status):
            "\(operation) failed with CoreMIDI status \(status)"
        case let .invalidPort(value):
            "Invalid UDP port: \(value)"
        }
    }
}

private final class VirtualMIDISource: @unchecked Sendable {
    private var client = MIDIClientRef()
    private var source = MIDIEndpointRef()
    private let lock = NSLock()

    init() throws {
        var status = MIDIClientCreateWithBlock("Kaizen Motion Bridge" as CFString, &client) { _ in }
        guard status == noErr else { throw BridgeError.coreMIDI("MIDIClientCreateWithBlock", status) }

        status = MIDISourceCreateWithProtocol(
            client,
            "Kaizen Motion" as CFString,
            MIDIProtocolID._1_0,
            &source
        )
        guard status == noErr else { throw BridgeError.coreMIDI("MIDISourceCreateWithProtocol", status) }
    }

    deinit {
        if source != 0 { MIDIEndpointDispose(source) }
        if client != 0 { MIDIClientDispose(client) }
    }

    func transient(note: UInt8, velocity: UInt8, channel: UInt8, durationMilliseconds: UInt16) {
        let now = AudioGetCurrentHostTime()
        let duration = AudioConvertNanosToHostTime(UInt64(durationMilliseconds) * 1_000_000)
        send([
            (now, midi1(status: 0x90, channel: channel, data1: note, data2: velocity)),
            (now &+ duration, midi1(status: 0x80, channel: channel, data1: note, data2: 0))
        ])
    }

    func controlChange(controller: UInt8, value: UInt8, channel: UInt8) {
        // A virtual source supplies host-clock timestamps, including immediate CCs.
        send([(AudioGetCurrentHostTime(), midi1(status: 0xB0, channel: channel, data1: controller, data2: value))])
    }

    func allNotesOff() {
        let now = AudioGetCurrentHostTime()
        send((0..<16).map { channel in
            (now, midi1(status: 0xB0, channel: UInt8(channel), data1: 123, data2: 0))
        })
    }

    private func send(_ events: [(MIDITimeStamp, UInt32)]) {
        lock.lock()
        defer { lock.unlock() }

        var list = MIDIEventList()
        withUnsafeMutablePointer(to: &list) { listPointer in
            var packet = MIDIEventListInit(listPointer, MIDIProtocolID._1_0)
            for (timestamp, word) in events {
                var mutableWord = word
                packet = withUnsafePointer(to: &mutableWord) { wordPointer in
                    MIDIEventListAdd(
                        listPointer,
                        MemoryLayout<MIDIEventList>.size,
                        packet,
                        timestamp,
                        1,
                        wordPointer
                    )
                }
            }
            let status = MIDIReceivedEventList(source, listPointer)
            if status != noErr {
                fputs("MIDIReceivedEventList failed with CoreMIDI status \(status)\n", stderr)
            }
        }
    }

    private func midi1(status: UInt8, channel: UInt8, data1: UInt8, data2: UInt8) -> UInt32 {
        let statusByte = UInt32(status | min(channel, 15))
        return (0x2 << 28)
            | (statusByte << 16)
            | (UInt32(min(data1, 127)) << 8)
            | UInt32(min(data2, 127))
    }
}

private final class MotionBridge: @unchecked Sendable {
    private struct PendingClockProbe {
        let sessionID: UInt32
        let sentAtNanoseconds: UInt64
    }

    private struct ClockEstimate {
        let bestRoundTripNanoseconds: UInt64
        let macMinusPhoneNanoseconds: Int64
    }

    private static let maximumTransientAgeNanoseconds: Int64 = 120_000_000

    private let queue = DispatchQueue(label: "com.kaizendsp.motion.desktop-bridge", qos: .userInteractive)
    private let listener: NWListener
    private let midi: VirtualMIDISource
    private var lastSequenceBySession: [UInt32: UInt32] = [:]
    private var lastEventTimeBySession: [UInt32: ContinuousClock.Instant] = [:]
    private var connections: [ObjectIdentifier: NWConnection] = [:]
    private var lastClockProbeBySession: [UInt32: UInt64] = [:]
    private var pendingClockProbes: [UInt32: PendingClockProbe] = [:]
    private var clockEstimateBySession: [UInt32: ClockEstimate] = [:]
    private var clockToken: UInt32 = 0
    private var previewInstrument: UInt8 = 0
    private var previewArmed = false
    private var previewVoice: UInt8 = 0
    private var previewObserver: NSObjectProtocol?
    private var previewSequenceBySession: [UInt32: UInt32] = [:]
    private var previewSession: UInt32?
    private let stateDiagnostics = ProcessInfo.processInfo.environment["KAIZEN_MOTION_DIAGNOSTICS"] == "1"
    private var heartbeatTimer: DispatchSourceTimer?
    private let verbose = ProcessInfo.processInfo.environment["KAIZEN_MOTION_BRIDGE_VERBOSE"] == "1"
    private let noteDiagnostics = ProcessInfo.processInfo.environment["KAIZEN_MOTION_BRIDGE_NOTES"] == "1"

    init(port: NWEndpoint.Port) throws {
        midi = try VirtualMIDISource()
        let parameters = NWParameters.udp
        parameters.includePeerToPeer = true
        parameters.serviceClass = .interactiveVoice
        listener = try NWListener(using: parameters, on: port)
        listener.service = NWListener.Service(name: "Kaizen Motion", type: "_kaizen-motion._udp")
    }

    func start() {
        previewObserver = DistributedNotificationCenter.default().addObserver(forName: .init(MotionPreviewIPC.request), object: nil, queue: nil) { [weak self] _ in
            self?.queue.async { [weak self] in self?.publishPreviewState() }
        }
        listener.stateUpdateHandler = { state in
            switch state {
            case .ready:
                let port = self.listener.port?.rawValue ?? 0
                print("Kaizen Motion Bridge ready on UDP \(port); CoreMIDI source: Kaizen Motion")
            case let .waiting(error):
                fputs("Bridge waiting: \(error)\n", stderr)
            case let .failed(error):
                fputs("Bridge failed: \(error)\n", stderr)
                exit(2)
            case .cancelled:
                exit(0)
            default:
                break
            }
        }
        listener.newConnectionHandler = { [weak self] connection in
            self?.accept(connection)
        }
        listener.start(queue: queue)
        startHeartbeatWatchdog()
    }

    private func accept(_ connection: NWConnection) {
        let identifier = ObjectIdentifier(connection)
        connections[identifier] = connection
        connection.stateUpdateHandler = { [weak self, weak connection] state in
            guard let self, let connection else { return }
            if case .failed = state { self.connections.removeValue(forKey: ObjectIdentifier(connection)) }
            if case .cancelled = state { self.connections.removeValue(forKey: ObjectIdentifier(connection)) }
        }
        connection.start(queue: queue)
        receive(on: connection)
    }

    private func receive(on connection: NWConnection) {
        connection.receiveMessage { [weak self, weak connection] data, _, _, error in
            guard let self, let connection else { return }
            if let data, let packet = MotionRealtimePacket(decoding: data) {
                self.handle(packet, on: connection)
            }
            if error == nil {
                self.receive(on: connection)
            } else {
                self.connections.removeValue(forKey: ObjectIdentifier(connection))
            }
        }
    }

    private func handle(_ packet: MotionRealtimePacket, on connection: NWConnection) {
        // State is a separate stream from musical events. A newer note/clock packet
        // must not discard the most recent mode/mute state if UDP arrives out of order.
        if case let .performanceState(instrument, armed, voice) = packet.message {
            if let previous = previewSequenceBySession[packet.sessionID], !isNewer(packet.sequence, than: previous) { return }
            previewSequenceBySession[packet.sessionID] = packet.sequence
            previewSession = packet.sessionID
            lastEventTimeBySession[packet.sessionID] = ContinuousClock.now
            previewInstrument = instrument
            previewArmed = armed
            previewVoice = voice
            if stateDiagnostics { print("Motion state received: instrument=\(instrument) armed=\(armed) sequence=\(packet.sequence)") }
            publishPreviewState()
            return
        }
        if let previous = lastSequenceBySession[packet.sessionID], !isNewer(packet.sequence, than: previous) {
            return
        }
        lastSequenceBySession[packet.sessionID] = packet.sequence
        lastEventTimeBySession[packet.sessionID] = ContinuousClock.now
        let arrivedAt = DispatchTime.now().uptimeNanoseconds
        if verbose {
            print("received session=\(packet.sessionID) sequence=\(packet.sequence) message=\(packet.message)")
        }

        switch packet.message {
        case let .performanceState(instrument, armed, voice):
            _ = (instrument, armed, voice) // Handled before musical sequence filtering.
        case let .transient(note, velocity, channel, _, durationMilliseconds):
            if noteDiagnostics { print("phone transient note=\(note) velocity=\(velocity) sensorNs=\(packet.senderUptimeNanoseconds)") }
            guard !isStaleTransient(packet, arrivedAt: arrivedAt) else {
                if verbose || noteDiagnostics { print("dropped stale transient sequence=\(packet.sequence)") }
                return
            }
            midi.transient(
                note: note,
                velocity: velocity,
                channel: channel,
                durationMilliseconds: durationMilliseconds
            )
        case let .controlChange(controller, value, channel):
            midi.controlChange(controller: controller, value: value, channel: channel)
        case .panic:
            midi.allNotesOff()
        case let .clockProbe(token):
            let repliedAt = DispatchTime.now().uptimeNanoseconds
            let processingMicroseconds = UInt32(clamping: Int((repliedAt - arrivedAt) / 1_000))
            let reply = MotionRealtimePacket(
                sessionID: packet.sessionID,
                sequence: packet.sequence,
                senderUptimeNanoseconds: repliedAt,
                message: .clockReply(
                    token: token,
                    processingMicroseconds: processingMicroseconds
                )
            )
            connection.send(content: reply.encoded(), completion: .contentProcessed { error in
                if let error { fputs("Clock reply failed: \(error)\n", stderr) }
            })
        case .heartbeat:
            sendClockProbeIfNeeded(to: packet.sessionID, on: connection, now: arrivedAt)
        case let .clockReply(token, processingMicroseconds):
            receiveClockReply(
                packet,
                token: token,
                processingMicroseconds: processingMicroseconds,
                arrivedAt: arrivedAt
            )
        }
    }

    private func publishPreviewState() {
        DistributedNotificationCenter.default().postNotificationName(.init(MotionPreviewIPC.state), object: nil,
            userInfo: ["instrument": Int(previewInstrument), "armed": previewArmed, "voice": Int(previewVoice)], deliverImmediately: true)
    }

    private func sendClockProbeIfNeeded(
        to sessionID: UInt32,
        on connection: NWConnection,
        now: UInt64
    ) {
        let lastProbe = lastClockProbeBySession[sessionID] ?? 0
        guard now >= lastProbe, now - lastProbe >= 1_000_000_000 else { return }
        lastClockProbeBySession[sessionID] = now
        clockToken &+= 1
        let token = clockToken
        pendingClockProbes[token] = PendingClockProbe(
            sessionID: sessionID,
            sentAtNanoseconds: now
        )
        let probe = MotionRealtimePacket(
            sessionID: sessionID,
            sequence: token,
            senderUptimeNanoseconds: now,
            message: .clockProbe(token: token)
        )
        connection.send(content: probe.encoded(), completion: .contentProcessed { error in
            if let error { fputs("Clock probe failed: \(error)\n", stderr) }
        })
    }

    private func receiveClockReply(
        _ packet: MotionRealtimePacket,
        token: UInt32,
        processingMicroseconds: UInt32,
        arrivedAt: UInt64
    ) {
        guard let pending = pendingClockProbes.removeValue(forKey: token),
              pending.sessionID == packet.sessionID else { return }

        let t1 = Int64(clamping: pending.sentAtNanoseconds)
        let t4 = Int64(clamping: arrivedAt)
        let t3 = Int64(clamping: packet.senderUptimeNanoseconds)
        let processing = Int64(processingMicroseconds) * 1_000
        let t2 = max(0, t3 - processing)
        let roundTrip = max(0, (t4 - t1) - (t3 - t2))
        guard roundTrip <= 250_000_000 else { return }

        let phoneMinusMac = ((t2 - t1) + (t3 - t4)) / 2
        let estimate = ClockEstimate(
            bestRoundTripNanoseconds: UInt64(roundTrip),
            macMinusPhoneNanoseconds: -phoneMinusMac
        )
        if let previous = clockEstimateBySession[packet.sessionID],
           previous.bestRoundTripNanoseconds <= estimate.bestRoundTripNanoseconds {
            return
        }
        clockEstimateBySession[packet.sessionID] = estimate
        if verbose {
            let milliseconds = Double(estimate.bestRoundTripNanoseconds) / 1_000_000
            print(String(format: "clock session=%u RTT=%.3f ms", packet.sessionID, milliseconds))
        }
    }

    private func isStaleTransient(_ packet: MotionRealtimePacket, arrivedAt: UInt64) -> Bool {
        guard packet.senderUptimeNanoseconds > 0,
              let estimate = clockEstimateBySession[packet.sessionID] else { return false }
        let mappedEventTime = Int64(clamping: packet.senderUptimeNanoseconds)
            + estimate.macMinusPhoneNanoseconds
        let age = Int64(clamping: arrivedAt) - mappedEventTime
        if noteDiagnostics { print("transient mapped age=\(Double(age) / 1_000_000) ms") }
        return age > Self.maximumTransientAgeNanoseconds
    }

    private func isNewer(_ candidate: UInt32, than previous: UInt32) -> Bool {
        Int32(bitPattern: candidate &- previous) > 0
    }

    private func startHeartbeatWatchdog() {
        let timer = DispatchSource.makeTimerSource(queue: queue)
        timer.schedule(deadline: .now() + .milliseconds(250), repeating: .milliseconds(250))
        timer.setEventHandler { [weak self] in
            guard let self else { return }
            let now = ContinuousClock.now
            let expired = self.lastEventTimeBySession.compactMap { session, instant in
                instant.duration(to: now) > .milliseconds(500) ? session : nil
            }
            let previewExpired = self.previewSession.map { expired.contains($0) } ?? false
            let anySessionRemains = self.lastEventTimeBySession.keys.contains { !expired.contains($0) }
            if !expired.isEmpty && (!anySessionRemains || previewExpired) {
                self.midi.allNotesOff()
            }
            if previewExpired {
                self.previewArmed = false
                self.previewSession = nil
                self.publishPreviewState()
            }
            for session in expired {
                self.lastEventTimeBySession.removeValue(forKey: session)
                self.lastSequenceBySession.removeValue(forKey: session)
                self.lastClockProbeBySession.removeValue(forKey: session)
                self.clockEstimateBySession.removeValue(forKey: session)
                self.previewSequenceBySession.removeValue(forKey: session)
            }
            self.pendingClockProbes = self.pendingClockProbes.filter {
                !expired.contains($0.value.sessionID)
            }
        }
        timer.resume()
        heartbeatTimer = timer
    }
}

private func requestedPort() throws -> NWEndpoint.Port {
    guard let portFlag = CommandLine.arguments.firstIndex(of: "--port") else {
        return NWEndpoint.Port(rawValue: 39_091)!
    }
    let valueIndex = CommandLine.arguments.index(after: portFlag)
    guard CommandLine.arguments.indices.contains(valueIndex),
          let rawValue = UInt16(CommandLine.arguments[valueIndex]),
          let port = NWEndpoint.Port(rawValue: rawValue) else {
        throw BridgeError.invalidPort(CommandLine.arguments.indices.contains(valueIndex) ? CommandLine.arguments[valueIndex] : "missing")
    }
    return port
}

do {
    let bridge = try MotionBridge(port: requestedPort())
    bridge.start()
    dispatchMain()
} catch {
    fputs("Kaizen Motion Bridge could not start: \(error)\n", stderr)
    exit(1)
}
#else
fatalError("KaizenMotionBridge is a macOS-only executable")
#endif
