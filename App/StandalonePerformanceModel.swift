import Combine
import Foundation
import MotionCore

final class StandalonePerformanceModel: ObservableObject, @unchecked Sendable {
    let store = MotionUIStateStore()
    let desktop = DesktopMotionSender()

    @Published var instrument: MotionInstrument = .shaker {
        didSet { refreshConfiguration(resetBaseNote: true) }
    }
    @Published var sensitivity = 0.62 {
        didSet { refreshConfiguration() }
    }
    @Published var armed = true {
        didSet { refreshConfiguration() }
    }
    @Published var thereminVoice = MotionThereminVoice(rawValue: UserDefaults.standard.integer(forKey: "Motion.thereminVoice")) ?? .classic {
        didSet {
            UserDefaults.standard.set(thereminVoice.rawValue, forKey: "Motion.thereminVoice")
            refreshConfiguration()
        }
    }
    @Published var thereminPaused = false {
        didSet { audio.pauseTheremin(thereminPaused); refreshConfiguration() }
    }
    @Published private(set) var audioStatus: StandaloneAudioStatus = .stopped
    @Published var chamberGeometry = MotionChamberGeometry(
        widthMM: UserDefaults.standard.object(forKey: "Motion.chamberWidth") as? Double ?? 36,
        heightMM: UserDefaults.standard.object(forKey: "Motion.chamberHeight") as? Double ?? 36,
        ballDiameterMM: UserDefaults.standard.object(forKey: "Motion.ballDiameter") as? Double ?? 1.2,
        yTiltSensitivity: UserDefaults.standard.object(forKey: "Motion.yTiltSensitivity") as? Double ?? 1.6,
        invertY: UserDefaults.standard.object(forKey: "Motion.invertY") as? Bool ?? true,
        shape: MotionChamberShape(rawValue: UserDefaults.standard.integer(forKey: "Motion.chamberShape")) ?? .box,
        depthMM: UserDefaults.standard.object(forKey: "Motion.chamberDepth") as? Double ?? 24,
        grainCount: UserDefaults.standard.object(forKey: "Motion.grainCount") as? Int ?? 48
    ) {
        didSet {
            refreshConfiguration()
            UserDefaults.standard.set(chamberGeometry.depthMM, forKey: "Motion.chamberDepth")
            UserDefaults.standard.set(chamberGeometry.grainCount, forKey: "Motion.grainCount")
            UserDefaults.standard.set(chamberGeometry.widthMM, forKey: "Motion.chamberWidth")
            UserDefaults.standard.set(chamberGeometry.heightMM, forKey: "Motion.chamberHeight")
            UserDefaults.standard.set(chamberGeometry.ballDiameterMM, forKey: "Motion.ballDiameter")
            UserDefaults.standard.set(chamberGeometry.yTiltSensitivity, forKey: "Motion.yTiltSensitivity")
            UserDefaults.standard.set(chamberGeometry.invertY, forKey: "Motion.invertY")
            UserDefaults.standard.set(chamberGeometry.shape.rawValue, forKey: "Motion.chamberShape")
        }
    }

    private let capture = MotionCapture()
    private let analyzer = MotionAnalyzerBox()
    func chimeraSceneJSON() -> String? { audio.chimeraSceneJSON() }
    private lazy var audio = StandaloneAudioEngine { [weak self] status in
        DispatchQueue.main.async {
            self?.audioStatus = status
        }
    }
    private var baseNote = MotionInstrument.shaker.defaultBaseNote
    private var started = false
    #if DEBUG && targetEnvironment(simulator)
    private var chamberFixture: DispatchSourceTimer?
    #endif

    func start() {
        guard !started else { return }
        started = true
        #if DEBUG && targetEnvironment(simulator)
        if ProcessInfo.processInfo.arguments.contains("-KMShakerFixture") || ProcessInfo.processInfo.arguments.contains("-KMThereminFixture") {
            if ProcessInfo.processInfo.arguments.contains("-KMThereminFixture") { instrument = .thereminFX }
            if ProcessInfo.processInfo.arguments.contains("-KMChimeraFixture") { thereminVoice = .chimera }
            if ProcessInfo.processInfo.arguments.contains("-KMPausedFixture") { thereminPaused = true }
            if ProcessInfo.processInfo.arguments.contains("-KMCircleFixture") { chamberGeometry.shape = .circle }
            if ProcessInfo.processInfo.arguments.contains("-KMOvalFixture") {
                chamberGeometry.shape = .oval; chamberGeometry.widthMM = 68; chamberGeometry.heightMM = 32
            }
            audio.start()
            refreshConfiguration()
            store.status = .unavailable
            let begin = ProcessInfo.processInfo.systemUptime
            let timer = DispatchSource.makeTimerSource(queue: .main)
            timer.schedule(deadline: .now(), repeating: .milliseconds(10))
            timer.setEventHandler { [weak self] in
                let now = ProcessInfo.processInfo.systemUptime
                let t = now - begin
                self?.handle(.init(timestamp: now, acceleration: .init(x: sin(t * 12) * 1.8, y: cos(t * 9) * 1.2),
                                   roll: sin(t * 2) * 0.3, pitch: cos(t * 2) * 0.2))
            }
            chamberFixture = timer
            timer.resume()
            return
        }
        #endif
        audio.start()
        refreshConfiguration()
        desktop.resumePreferredMac()
        capture.start { [weak self] frame in
            self?.handle(frame)
        } onStatus: { [weak self] status in
            DispatchQueue.main.async {
                self?.store.status = status
            }
        }
    }

    func stop() {
        started = false
        #if DEBUG && targetEnvironment(simulator)
        chamberFixture?.cancel()
        chamberFixture = nil
        #endif
        capture.stop()
        audio.stop()
        desktop.stop()
        store.status = .stopped
    }

    func calibrate() {
        analyzer.calibrate(to: store.latestFrame)
        audio.calibrateTheremin(to: store.latestFrame)
    }

    func demoPulse() {
        let now = ProcessInfo.processInfo.systemUptime
        let direction = store.triggerCount.isMultiple(of: 2) ? 1.7 : -1.7
        let frame = MotionFeatureFrame(
            timestamp: now,
            acceleration: .init(x: direction, y: 0.2, z: 0.1),
            rotationRate: .init(x: 1.2, y: 0.4, z: 0.2),
            roll: direction > 0 ? 0.34 : -0.34,
            pitch: 0.18,
            accelerationMagnitude: abs(direction),
            jerk: 24
        )
        handle(frame, forcePreview: true)
    }

    private func refreshConfiguration(resetBaseNote: Bool = false) {
        if resetBaseNote { baseNote = instrument.defaultBaseNote }
        desktop.setPerformanceState(instrument: instrument, armed: armed && !(instrument == .thereminFX && thereminPaused), voice: thereminVoice)
        analyzer.updateConfiguration(MotionMappingConfiguration(
            instrument: instrument,
            sensitivity: sensitivity,
            baseNote: baseNote,
            armed: armed,
            chamberGeometry: chamberGeometry,
            thereminVoice: thereminVoice
        ))
    }

    private func handle(_ frame: MotionFeatureFrame, forcePreview: Bool = false) {
        var events = analyzer.process(frame)
        let configuration = analyzer.configurationSnapshot()
        let shakerState = analyzer.shakerSnapshot()

        if forcePreview && configuration.instrument == .thereminFX {
            events.append(.controlChange(
                timestamp: frame.timestamp,
                controller: configuration.tiltXController,
                value: frame.acceleration.x > 0 ? 92 : 38,
                channel: configuration.midiChannel
            ))
        }
        if forcePreview && configuration.instrument == .shaker && configuration.armed {
            // TEST is an explicit audition of one wall; physical output remains collision-driven.
            events.removeAll { if case .note = $0 { return true }; return false }
            let right = frame.acceleration.x > 0
            events.append(.note(timestamp: frame.timestamp, note: UInt8(clamping: Int(configuration.baseNote) + (right ? 1 : 0)),
                                velocity: 99, channel: configuration.midiChannel,
                                direction: right ? .xPositive : .xNegative, duration: configuration.noteLength))
        }

        audio.handle(events: events, instrument: configuration.instrument, frame: frame, voice: configuration.thereminVoice,
                     armed: configuration.armed && !(configuration.instrument == .thereminFX && thereminPaused))
        desktop.send(events: events)
        store.submit(frame: frame, events: events, isSynthetic: forcePreview,
                                shakerPosition: configuration.instrument == .shaker ? shakerState.position : nil,
                                shakerGrains: shakerState.grains, shakerImpacts: shakerState.impacts)
    }
}
