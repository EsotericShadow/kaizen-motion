import AVFoundation
import Foundation
import MotionCore

enum StandaloneAudioStatus: Equatable, Sendable {
    case stopped
    case starting
    case interrupted
    case running(sampleRate: Double, bufferMilliseconds: Double, route: String)
    case failed(String)

    var isRunning: Bool {
        if case .running = self { return true }
        return false
    }
}

final class StandaloneAudioEngine: @unchecked Sendable {
    private let engine = AVAudioEngine()
    private let controlQueue = DispatchQueue(label: "com.kaizendsp.motion.preview-audio", qos: .userInteractive)
    private let statusHandler: @Sendable (StandaloneAudioStatus) -> Void
    private let thereminTone = MotionContinuousTone(sampleRate: 48_000)
    func chimeraSceneJSON() -> String? { chimera.sceneJSON() }
    private let chimera = MotionChimeraVoice(sampleRate: 48_000)
    private let shaker = MotionShakerRenderer(sampleRate: 48_000)
    private var thereminRollZero = 0.0
    private var thereminPitchZero = 0.0
    private var thereminGrip = MotionGripTilt()
    private var thereminActive = false
    private var thereminSoundPaused = false
    private var lastPercussionInstrument: MotionInstrument?
    private var wantsToRun = false
    private var isPrepared = false
    private var nodesConfigured = false
    private var notificationTokens: [NSObjectProtocol] = []
    private let format = AVAudioFormat(standardFormatWithSampleRate: 48_000, channels: 1)!

    init(statusHandler: @escaping @Sendable (StandaloneAudioStatus) -> Void = { _ in }) {
        self.statusHandler = statusHandler
        installAudioObservers()
    }

    deinit {
        for token in notificationTokens {
            NotificationCenter.default.removeObserver(token)
        }
    }

    func start() {
        controlQueue.async { [weak self] in
            guard let self else { return }
            self.wantsToRun = true
            self.prepareAndStartIfNeeded()
        }
    }

    func stop() {
        controlQueue.async { [weak self] in
            guard let self else { return }
            self.wantsToRun = false
            self.thereminTone.set(frequency: 440, gain: 0)
            self.chimera.mute()
            self.shaker.panic()
            self.engine.stop()
            #if os(iOS)
            try? AVAudioSession.sharedInstance().setActive(false, options: .notifyOthersOnDeactivation)
            #endif
            self.publish(.stopped)
        }
    }

    func calibrateTheremin(to frame: MotionFeatureFrame) {
        controlQueue.async { [weak self] in
            self?.thereminRollZero = frame.roll
            self?.thereminPitchZero = frame.pitch
            self?.thereminGrip.center(on: frame.gravity)
        }
    }

    func pauseTheremin(_ paused: Bool) {
        controlQueue.async { [weak self] in
            guard let self else { return }
            self.thereminSoundPaused = paused
            if paused { self.thereminTone.set(frequency: 440, gain: 0); self.chimera.mute() }
        }
    }

    func handle(events: [MotionOutputEvent], instrument: MotionInstrument, frame: MotionFeatureFrame, voice: MotionThereminVoice = .classic, armed: Bool) {
        controlQueue.async { [weak self] in
            guard let self else { return }
            if !armed || instrument == .thereminFX || self.lastPercussionInstrument != instrument { self.shaker.panic() }
            self.lastPercussionInstrument = instrument
            if instrument == .thereminFX {
                if !self.thereminActive { self.thereminGrip.center(on: frame.gravity) }
                self.thereminActive = true
                let roll = atan2(sin(frame.roll - self.thereminRollZero), cos(frame.roll - self.thereminRollZero))
                let pitch = atan2(sin(frame.pitch - self.thereminPitchZero), cos(frame.pitch - self.thereminPitchZero))
                let position = max(0, min(1, (roll + .pi / 2) / .pi))
                let tilt = self.thereminGrip.project(frame.gravity)
                let vertical = frame.gravity.magnitude > 0.5 ? tilt.y : sin(pitch)
                self.thereminTone.setVowel(position: MotionGripTilt.vowelPosition(verticalTilt: vertical))
                let sounds = armed && !self.thereminSoundPaused
                self.thereminTone.set(frequency: Float(110 * pow(2, position * 4)), gain: sounds && voice == .classic ? 0.62 : 0)
                self.chimera.set(frequency: MotionThereminVoice.chimera.frequency(position: position),
                                 vowel: MotionGripTilt.vowelPosition(verticalTilt: vertical),
                                 breath: MotionThereminVoice.breath(accelerationZ: frame.acceleration.z),
                                 gain: sounds && voice == .chimera ? 0.6 : 0)
            } else {
                self.thereminActive = false
                self.chimera.mute()
                self.thereminTone.setVowel(position: nil)
                self.thereminTone.set(frequency: 440, gain: 0)
            }
            guard self.engine.isRunning else {
                self.prepareAndStartIfNeeded()
                return
            }
            for event in events {
                switch event {
                case let .note(_, _, velocity, _, direction, _):
                    if instrument == .shaker {
                        break // Continuous measured effort drives the recorded rattle.
                    } else {
                        self.shaker.trigger(velocity: velocity, instrument: instrument, direction: direction)
                    }
                case let .controlChange(_, controller, value, _):
                    if instrument == .shaker && controller == 11 { self.shaker.setEnergy(Float(value) / 127) }
                }
            }
        }
    }

    private func startEngineIfNeeded() {
        guard wantsToRun else { return }
        guard isPrepared else {
            prepareAndStartIfNeeded()
            return
        }
        configureNodesIfNeeded()
        if engine.isRunning {
            publishRunningStatus()
            return
        }

        publish(.starting)
        do {
            #if os(iOS)
            let session = AVAudioSession.sharedInstance()
            try session.setCategory(.playback, mode: .default, options: [.mixWithOthers])
            try session.setPreferredSampleRate(format.sampleRate)
            try session.setPreferredIOBufferDuration(0.005)
            try session.setActive(true)
            #endif

            engine.prepare()
            try engine.start()
            publishRunningStatus()
        } catch {
            publish(.failed(error.localizedDescription))
        }
    }

    // All percussion is synthesized by the persistent source node. There are no
    // sample layers to prepare or player voices to restart for each gesture.
    private func prepareAndStartIfNeeded() {
        guard wantsToRun else { return }
        isPrepared = true
        startEngineIfNeeded()
    }

    private func configureNodesIfNeeded() {
        guard !nodesConfigured else { return }
        nodesConfigured = true

        let tone = thereminTone
        let source = AVAudioSourceNode(format: format) { silence, _, frameCount, audioBufferList -> OSStatus in
            silence.pointee = false
            let buffers = UnsafeMutableAudioBufferListPointer(audioBufferList)
            guard let output = buffers.first?.mData?.assumingMemoryBound(to: Float.self) else { return noErr }
            tone.render(into: output, frameCount: frameCount)
            return noErr
        }
        engine.attach(source)
        engine.connect(source, to: engine.mainMixerNode, format: format)

        let shaker = self.shaker
        let shakerSource = AVAudioSourceNode(format: format) { silence, _, frameCount, list -> OSStatus in
            silence.pointee = false
            let buffers = UnsafeMutableAudioBufferListPointer(list)
            guard let output = buffers.first?.mData?.assumingMemoryBound(to: Float.self) else { return noErr }
            shaker.render(into: output, frameCount: frameCount)
            return noErr
        }
        engine.attach(shakerSource)
        engine.connect(shakerSource, to: engine.mainMixerNode, format: format)

        let chimera = self.chimera
        let vocalSource = AVAudioSourceNode(format: format) { silence, _, count, list -> OSStatus in
            silence.pointee = false
            guard let output = UnsafeMutableAudioBufferListPointer(list).first?.mData?.assumingMemoryBound(to: Float.self) else { return noErr }
            chimera.render(into: output, frameCount: count)
            return noErr
        }
        engine.attach(vocalSource)
        engine.connect(vocalSource, to: engine.mainMixerNode, format: format)

        engine.mainMixerNode.outputVolume = 0.78
    }

    private func restartEngine() {
        guard wantsToRun else { return }
        engine.stop()
        startEngineIfNeeded()
    }

    private func installAudioObservers() {
        let center = NotificationCenter.default

        #if os(iOS)
        notificationTokens.append(center.addObserver(
            forName: AVAudioSession.interruptionNotification,
            object: AVAudioSession.sharedInstance(),
            queue: nil
        ) { [weak self] notification in
            self?.controlQueue.async { [weak self] in
                self?.handleInterruption(notification)
            }
        })

        notificationTokens.append(center.addObserver(
            forName: AVAudioSession.routeChangeNotification,
            object: AVAudioSession.sharedInstance(),
            queue: nil
        ) { [weak self] _ in
            self?.controlQueue.async { [weak self] in
                self?.restartEngine()
            }
        })
        #endif

        notificationTokens.append(center.addObserver(
            forName: .AVAudioEngineConfigurationChange,
            object: engine,
            queue: nil
        ) { [weak self] _ in
            self?.controlQueue.async { [weak self] in
                self?.restartEngine()
            }
        })
    }

    #if os(iOS)
    private func handleInterruption(_ notification: Notification) {
        guard let rawType = (notification.userInfo?[AVAudioSessionInterruptionTypeKey] as? NSNumber)?.uintValue,
              let type = AVAudioSession.InterruptionType(rawValue: rawType) else { return }

        switch type {
        case .began:
                engine.stop()
            publish(.interrupted)
        case .ended:
            startEngineIfNeeded()
        @unknown default:
            break
        }
    }
    #endif

    private func publishRunningStatus() {
        #if os(iOS)
        let session = AVAudioSession.sharedInstance()
        let route = session.currentRoute.outputs.map(\.portName).joined(separator: ", ")
        publish(.running(
            sampleRate: session.sampleRate,
            bufferMilliseconds: session.ioBufferDuration * 1_000,
            route: route.isEmpty ? "iPhone" : route
        ))
        #else
        publish(.running(sampleRate: format.sampleRate, bufferMilliseconds: 5, route: "Default output"))
        #endif
    }

    private func publish(_ status: StandaloneAudioStatus) {
        statusHandler(status)
    }

}
