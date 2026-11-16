import AVFoundation
import AudioToolbox
import CoreMIDI
import Foundation
import MotionCore

public final class MotionMIDIAudioUnit: AUAudioUnit, @unchecked Sendable {
    let uiStore = MotionUIStateStore()

    private let adapter = MotionMIDIRenderAdapter()
    private let capture = MotionCapture()
    private let analyzer = MotionAnalyzerBox()
    private var outputBus: AUAudioUnitBus!
    private var outputBusArray: AUAudioUnitBusArray!
    private var parameterValues: [AUParameterAddress: AUValue] = [:]
    private let parameterLock = NSLock()
    private var motionRunning = false

    @objc override public init(
        componentDescription: AudioComponentDescription,
        options: AudioComponentInstantiationOptions = []
    ) throws {
        try super.init(componentDescription: componentDescription, options: options)
        let format = AVAudioFormat(standardFormatWithSampleRate: 44_100, channels: 2)!
        outputBus = try AUAudioUnitBus(format: format)
        outputBus.maximumChannelCount = 2
        outputBusArray = AUAudioUnitBusArray(audioUnit: self, busType: .output, busses: [outputBus])
        setupParameterTree()
        adapter.initialize(withSampleRate: format.sampleRate)
    }

    public override var outputBusses: AUAudioUnitBusArray { outputBusArray }
    public override var midiOutputNames: [String] { ["Motion"] }
    public override var audioUnitMIDIProtocol: MIDIProtocolID { MIDIProtocolID._1_0 }

    public override var maximumFramesToRender: AUAudioFrameCount {
        get { adapter.maximumFramesToRender }
        set { adapter.maximumFramesToRender = newValue }
    }

    public override var shouldBypassEffect: Bool {
        get { adapter.isBypassed }
        set { adapter.isBypassed = newValue }
    }

    public override var internalRenderBlock: AUInternalRenderBlock {
        adapter.internalRenderBlock()
    }

    public override func allocateRenderResources() throws {
        adapter.setMIDIOutputEventListBlock(midiOutputEventListBlock)
        adapter.initialize(withSampleRate: outputBus.format.sampleRate)
        try super.allocateRenderResources()
        startMotionIfNeeded()
    }

    public override func deallocateRenderResources() {
        capture.stop()
        motionRunning = false
        adapter.deinitialize()
        DispatchQueue.main.async { [weak self] in self?.uiStore.status = .stopped }
        super.deallocateRenderResources()
    }

    public override func reset() {
        analyzer.reset()
        adapter.reset()
        super.reset()
    }

    public override var fullState: [String: Any]? {
        get {
            var result: [String: Any] = [:]
            for parameter in parameterTree?.allParameters ?? [] {
                result[parameter.identifier] = parameter.value
            }
            return result
        }
        set {
            guard let newValue else { return }
            for parameter in parameterTree?.allParameters ?? [] {
                if let number = newValue[parameter.identifier] as? NSNumber {
                    parameter.value = number.floatValue
                }
            }
        }
    }

    func value(for address: MotionParameterAddress) -> AUValue {
        parameterLock.lock()
        defer { parameterLock.unlock() }
        return parameterValues[address.rawValue] ?? 0
    }

    func setValue(_ value: AUValue, for address: MotionParameterAddress) {
        parameterTree?.parameter(withAddress: address.rawValue)?.setValue(value, originator: nil)
    }

    func setInstrument(_ instrument: MotionInstrument) {
        setValue(AUValue(instrument.rawValue), for: .instrument)
        setValue(AUValue(instrument.defaultBaseNote), for: .baseNote)
    }

    func calibrate() {
        analyzer.calibrate(to: uiStore.latestFrame)
    }

    func demoPulse() {
        let now = ProcessInfo.processInfo.systemUptime
        let frame = MotionFeatureFrame(
            timestamp: now,
            acceleration: .init(x: uiStore.triggerCount.isMultiple(of: 2) ? 1.8 : -1.8, y: 0.1, z: 0.2),
            rotationRate: .init(x: 1.4, y: 0.3, z: 0.2),
            roll: 0.28,
            pitch: -0.16,
            accelerationMagnitude: 1.8,
            jerk: 26
        )
        handle(frame, isSynthetic: true)
    }

    private func setupParameterTree() {
        let tree = MotionMIDIParameters.makeTree()
        parameterTree = tree
        for parameter in tree.allParameters {
            parameterValues[parameter.address] = parameter.value
        }

        tree.implementorValueObserver = { [weak self] parameter, value in
            guard let self else { return }
            self.parameterLock.lock()
            self.parameterValues[parameter.address] = value
            self.parameterLock.unlock()
            self.updateAnalyzerConfiguration()
        }
        tree.implementorValueProvider = { [weak self] parameter in
            guard let self else { return parameter.value }
            self.parameterLock.lock()
            defer { self.parameterLock.unlock() }
            return self.parameterValues[parameter.address] ?? parameter.value
        }
        updateAnalyzerConfiguration()
    }

    private func updateAnalyzerConfiguration() {
        let instrument = MotionInstrument(rawValue: Int(value(for: .instrument).rounded())) ?? .shaker
        analyzer.updateConfiguration(MotionMappingConfiguration(
            instrument: instrument,
            sensitivity: Double(value(for: .sensitivity)),
            baseNote: UInt8(clamping: Int(value(for: .baseNote).rounded())),
            noteLength: Double(value(for: .noteLengthMilliseconds)) / 1_000,
            minimumTriggerInterval: Double(value(for: .retriggerMilliseconds)) / 1_000,
            midiChannel: UInt8(clamping: max(0, Int(value(for: .midiChannel).rounded()) - 1)),
            tiltXController: UInt8(clamping: Int(value(for: .tiltXController).rounded())),
            tiltYController: UInt8(clamping: Int(value(for: .tiltYController).rounded())),
            rotationController: UInt8(clamping: Int(value(for: .rotationController).rounded())),
            armed: value(for: .armed) >= 0.5,
            chamberGeometry: .init(widthMM: Double(value(for: .chamberWidth)),
                                   heightMM: Double(value(for: .chamberHeight)),
                                   ballDiameterMM: Double(value(for: .ballDiameter)),
                                   yTiltSensitivity: Double(value(for: .yTiltSensitivity)),
                                   invertY: value(for: .invertY) >= 0.5,
                                   shape: MotionChamberShape(rawValue: Int(value(for: .chamberShape).rounded())) ?? .box, depthMM: Double(value(for: .chamberDepth)), grainCount: Int(value(for: .grainCount)))
        ))
    }

    private func startMotionIfNeeded() {
        guard !motionRunning else { return }
        motionRunning = true
        capture.start { [weak self] frame in
            self?.handle(frame)
        } onStatus: { [weak self] status in
            DispatchQueue.main.async { self?.uiStore.status = status }
        }
    }

    private func handle(_ frame: MotionFeatureFrame, isSynthetic: Bool = false) {
        var events = analyzer.process(frame)
        let configuration = analyzer.configurationSnapshot()
        let shakerState = analyzer.shakerSnapshot()
        if isSynthetic && configuration.instrument == .shaker && configuration.armed {
            events.removeAll { if case .note = $0 { return true }; return false }
            let right = frame.acceleration.x > 0
            events.append(.note(timestamp: frame.timestamp,
                                note: UInt8(clamping: Int(configuration.baseNote) + (right ? 1 : 0)),
                                velocity: 99, channel: configuration.midiChannel,
                                direction: right ? .xPositive : .xNegative, duration: configuration.noteLength))
        }
        for event in events {
            switch event {
            case let .note(_, note, velocity, channel, _, duration):
                adapter.enqueueNote(note, velocity: velocity, channel: channel, durationSeconds: duration)
            case let .controlChange(_, controller, value, channel):
                adapter.enqueueControlChange(controller, value: value, channel: channel)
            }
        }
        uiStore.submit(frame: frame, events: events, isSynthetic: isSynthetic,
                                  shakerPosition: configuration.instrument == .shaker ? shakerState.position : nil,
                                  shakerGrains: shakerState.grains, shakerImpacts: shakerState.impacts)
    }
}
