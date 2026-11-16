// Local listening probe, separate from the product. Receives real CoreMIDI input.
// Shaker notes 70...75 use the phone's preview synthesis; other notes use GM drums.
import AVFoundation
import MotionCore
import CoreMIDI
import CoreAudio
import Darwin

setbuf(stdout, nil)
let verifyGraph = CommandLine.arguments.contains("--verify-graph")
var restoreAudioBuffer: (() -> Void)?
let engine = AVAudioEngine()
let outputFlag = CommandLine.arguments.firstIndex(of: "--output-name")
let requestedOutput: String? = outputFlag.flatMap { index in
    CommandLine.arguments.indices.contains(index + 1) ? CommandLine.arguments[index + 1] : nil
} ?? (CommandLine.arguments.contains("--built-in") ? "Mac mini Speakers" : nil)
if let requestedOutput {
    var address = AudioObjectPropertyAddress(mSelector: kAudioHardwarePropertyDevices,
        mScope: kAudioObjectPropertyScopeGlobal, mElement: kAudioObjectPropertyElementMain)
    var size: UInt32 = 0
    guard AudioObjectGetPropertyDataSize(AudioObjectID(kAudioObjectSystemObject), &address, 0, nil, &size) == noErr else {
        fatalError("Cannot enumerate audio outputs")
    }
    var devices = [AudioDeviceID](repeating: 0, count: Int(size) / MemoryLayout<AudioDeviceID>.size)
    guard AudioObjectGetPropertyData(AudioObjectID(kAudioObjectSystemObject), &address, 0, nil, &size, &devices) == noErr else {
        fatalError("Cannot read audio outputs")
    }
    var selected: AudioDeviceID?
    for device in devices {
        var nameAddress = AudioObjectPropertyAddress(mSelector: kAudioObjectPropertyName,
            mScope: kAudioObjectPropertyScopeGlobal, mElement: kAudioObjectPropertyElementMain)
        var name: Unmanaged<CFString>?
        var nameSize = UInt32(MemoryLayout<Unmanaged<CFString>?>.size)
        if AudioObjectGetPropertyData(device, &nameAddress, 0, nil, &nameSize, &name) == noErr,
           let name = name?.takeRetainedValue(),
           name as String == requestedOutput { selected = device }
    }
    guard let selected else { fatalError("Audio output not found: \(requestedOutput)") }
    if CommandLine.arguments.contains("--low-latency") {
        var address = AudioObjectPropertyAddress(mSelector: kAudioDevicePropertyBufferFrameSize,
            mScope: kAudioObjectPropertyScopeGlobal, mElement: kAudioObjectPropertyElementMain)
        var previous: UInt32 = 0
        var size = UInt32(MemoryLayout<UInt32>.size)
        if AudioObjectGetPropertyData(selected, &address, 0, nil, &size, &previous) == noErr {
            var rangeAddress = AudioObjectPropertyAddress(mSelector: kAudioDevicePropertyBufferFrameSizeRange,
                mScope: kAudioObjectPropertyScopeGlobal, mElement: kAudioObjectPropertyElementMain)
            var range = AudioValueRange()
            var rangeSize = UInt32(MemoryLayout<AudioValueRange>.size)
            if AudioObjectGetPropertyData(selected, &rangeAddress, 0, nil, &rangeSize, &range) == noErr {
                var requested = UInt32(max(range.mMinimum, min(range.mMaximum, 128)))
                if AudioObjectSetPropertyData(selected, &address, 0, nil, size, &requested) == noErr {
                    print("AUDIO BUFFER: \(requested) frames (previous \(previous)); restore on stop")
                    let oldValue = previous
                    restoreAudioBuffer = {
                        var value = oldValue
                        var restoreAddress = AudioObjectPropertyAddress(mSelector: kAudioDevicePropertyBufferFrameSize,
                            mScope: kAudioObjectPropertyScopeGlobal, mElement: kAudioObjectPropertyElementMain)
                        _ = AudioObjectSetPropertyData(selected, &restoreAddress, 0, nil, size, &value)
                    }
                }
            }
        }
    }
    try engine.outputNode.auAudioUnit.setDeviceID(selected)
    print("OUTPUT: \(requestedOutput) (requested=\(selected), actual=\(engine.outputNode.auAudioUnit.deviceID))")
    for element in 0...2 {
        var volumeAddress = AudioObjectPropertyAddress(mSelector: kAudioDevicePropertyVolumeScalar,
            mScope: kAudioDevicePropertyScopeOutput, mElement: UInt32(element))
        var volume: Float32 = 0
        var volumeSize = UInt32(MemoryLayout<Float32>.size)
        if AudioObjectGetPropertyData(selected, &volumeAddress, 0, nil, &volumeSize, &volume) == noErr {
            print("SPEAKER volume element=\(element): \(volume)")
        }
        var muteAddress = AudioObjectPropertyAddress(mSelector: kAudioDevicePropertyMute,
            mScope: kAudioDevicePropertyScopeOutput, mElement: UInt32(element))
        var mute: UInt32 = 0
        var muteSize = UInt32(MemoryLayout<UInt32>.size)
        if AudioObjectGetPropertyData(selected, &muteAddress, 0, nil, &muteSize, &mute) == noErr {
            print("SPEAKER mute element=\(element): \(mute)")
        }
    }
}
let sampler = AVAudioUnitSampler()
engine.attach(sampler)
engine.connect(sampler, to: engine.mainMixerNode, format: nil)
engine.mainMixerNode.outputVolume = 0.65
let testPlayer = AVAudioPlayerNode()
let testFormat = AVAudioFormat(standardFormatWithSampleRate: 48_000, channels: 1)!
let shaker = MotionShakerRenderer(sampleRate: 48_000)
let shakerSource = AVAudioSourceNode(format: testFormat) { silence, _, frameCount, list -> OSStatus in
            silence.pointee = false
    let buffers = UnsafeMutableAudioBufferListPointer(list)
    guard let output = buffers.first?.mData?.assumingMemoryBound(to: Float.self) else { return noErr }
    shaker.render(into: output, frameCount: frameCount)
    return noErr
}
engine.attach(shakerSource)
engine.connect(shakerSource, to: engine.mainMixerNode, format: testFormat)
let chimera = MotionChimeraVoice(sampleRate: 48_000)
let theremin = MotionContinuousTone(sampleRate: 48_000)
let thereminSource = AVAudioSourceNode(format: testFormat) { silence, _, count, list -> OSStatus in
    silence.pointee = false
    guard let output = UnsafeMutableAudioBufferListPointer(list).first?.mData?.assumingMemoryBound(to: Float.self) else { return noErr }
    theremin.render(into: output, frameCount: count)
    return noErr
}
engine.attach(thereminSource)
engine.connect(thereminSource, to: engine.mainMixerNode, format: testFormat)
let vocalSource = AVAudioSourceNode(format: testFormat) { silence, _, count, list -> OSStatus in
    silence.pointee = false
    guard let output = UnsafeMutableAudioBufferListPointer(list).first?.mData?.assumingMemoryBound(to: Float.self) else { return noErr }
    chimera.render(into: output, frameCount: count)
    return noErr
}
engine.attach(vocalSource)
engine.connect(vocalSource, to: engine.mainMixerNode, format: testFormat)
let testTone = AVAudioPCMBuffer(pcmFormat: testFormat, frameCapacity: 24_000)!
testTone.frameLength = 24_000
for frame in 0..<24_000 {
    let envelope = min(1, Float(min(frame, 23_999 - frame)) / 480)
    testTone.floatChannelData![0][frame] = 0.3 * envelope * sin(Float(frame) * 2 * .pi * 660 / 48_000)
}
engine.attach(testPlayer)
engine.connect(testPlayer, to: engine.mainMixerNode, format: testFormat)
try sampler.loadSoundBankInstrument(
    at: URL(fileURLWithPath: "/System/Library/Components/CoreAudio.component/Contents/Resources/gs_instruments.dls"),
    program: 0, bankMSB: UInt8(kAUSampler_DefaultPercussionBankMSB), bankLSB: 0)
let queue = DispatchQueue(label: "com.kaizendsp.motion.listening-probe", qos: .userInteractive)
var previewInstrument = 0
var previewArmed = false
var previewVoice = MotionThereminVoice.classic
var breathValue: UInt8 = 70
var pitchValue: UInt8 = 64
var vowelValue: UInt8 = 64
var lastToneGate = false
func updateTheremin() {
    let gate = previewInstrument == 5 && previewArmed
    if gate != lastToneGate { print("THEREMIN AUDIO \(gate ? "ON" : "OFF") pitch=\(pitchValue) vowel=\(vowelValue)"); lastToneGate = gate }
    if previewInstrument == 5 && previewArmed && previewVoice == .classic {
        theremin.setVowel(position: Float(vowelValue) / 127)
        theremin.set(frequency: Float(110 * pow(2, Double(pitchValue) / 127 * 4)), gain: 0.62)
    } else {
        theremin.setVowel(position: nil)
        theremin.set(frequency: 440, gain: 0)
    }
    if previewInstrument == 5 && previewArmed && previewVoice == .chimera {
        chimera.set(frequency: previewVoice.frequency(position: Double(pitchValue) / 127),
                    vowel: Float(vowelValue) / 127, breath: Float(breathValue) / 127, gain: 0.6)
    } else { chimera.mute() }
}
let previewObserver = DistributedNotificationCenter.default().addObserver(forName: .init(MotionPreviewIPC.state), object: nil, queue: nil) { notification in
    if verifyGraph { return }
    guard let instrument = notification.userInfo?["instrument"] as? Int,
          let armed = notification.userInfo?["armed"] as? Bool,
          (0...5).contains(instrument) else { return }
    queue.async {
        if instrument != previewInstrument || !armed {
            shaker.panic()
            sampler.sendController(123, withValue: 0, onChannel: 9)
            print("PHONE INSTRUMENT: \(MotionInstrument(rawValue: instrument)?.name ?? "Unknown")")
        }
        previewVoice = MotionThereminVoice(rawValue: notification.userInfo?["voice"] as? Int ?? 0) ?? .classic
        previewInstrument = instrument
        previewArmed = armed
        updateTheremin()
    }
}
var meterTimer: DispatchSourceTimer?
if CommandLine.arguments.contains("--meter") {
    let timer = DispatchSource.makeTimerSource(queue: queue)
    timer.schedule(deadline: .now() + 1, repeating: .seconds(1))
    timer.setEventHandler {
        print("LIVE DSP mode=\(previewInstrument) armed=\(previewArmed) Theremin=\(theremin.takePeak()) Shaker=\(shaker.takePeak()) CHIMERA=\(chimera.takePeak()) voice=\(previewVoice.name)")
    }
    timer.resume()
    meterTimer = timer
}
if verifyGraph {
    try engine.enableManualRenderingMode(.offline, format: AVAudioFormat(standardFormatWithSampleRate: 48_000, channels: 2)!, maximumFrameCount: 512)
}
try engine.start()
if verifyGraph {
    let buffer = AVAudioPCMBuffer(pcmFormat: engine.manualRenderingFormat, frameCapacity: 512)!
    func renderPeak(blocks: Int) throws -> Float {
        var peak: Float = 0
        for _ in 0..<blocks {
            let status = try engine.renderOffline(512, to: buffer)
            guard status == .success, let channels = buffer.floatChannelData else { continue }
            for channel in 0..<Int(buffer.format.channelCount) {
                for frame in 0..<Int(buffer.frameLength) { peak = max(peak, abs(channels[channel][frame])) }
            }
        }
        return peak
    }
    theremin.setVowel(position: 0.5)
    theremin.set(frequency: 220, gain: 0.62)
    let tonePeak = try renderPeak(blocks: 24)
    theremin.set(frequency: 220, gain: 0)
    _ = try renderPeak(blocks: 24)
    shaker.setEnergy(0.6)
    let shakerPeak = try renderPeak(blocks: 24)
    shaker.panic()
    chimera.set(frequency: 220, vowel: 0.5, breath: 0.55, gain: 0.6)
    let vocalPeak = try renderPeak(blocks: 200)
    chimera.mute()
    engine.stop()
    guard tonePeak > 0.005 && shakerPeak > 0.001 && vocalPeak > 0.002 else {
        print("FAIL audio graph: Theremin=\(tonePeak), Shaker=\(shakerPeak)")
        exit(1)
    }
    print("PASS audio graph: Theremin=\(tonePeak), Shaker=\(shakerPeak), CHIMERA=\(vocalPeak); local offline render, no phone/output proof")
    exit(0)
}

var client = MIDIClientRef()
var port = MIDIPortRef()
func checked(_ status: OSStatus, _ action: String) {
    guard status == noErr else { fatalError("\(action): \(status)") }
}
checked(MIDIClientCreateWithBlock("Motion phone listening probe" as CFString, &client) { _ in }, "MIDI client")
checked(MIDIInputPortCreateWithProtocol(client, "Phone test input" as CFString, ._1_0, &port) { list, _ in
    do {
        var current = UnsafeRawPointer(list)
            .advanced(by: MemoryLayout<MIDIEventList>.offset(of: \.packet)!)
            .assumingMemoryBound(to: MIDIEventPacket.self)
        for _ in 0..<list.pointee.numPackets {
            let event = current.pointee
            withUnsafePointer(to: event.words) { tuple in
                tuple.withMemoryRebound(to: UInt32.self, capacity: Int(event.wordCount)) { words in
                    for i in 0..<Int(event.wordCount) {
                        let word = words[i]
                        guard word >> 28 == 2 else { continue }
                        let status = UInt8((word >> 16) & 0xF0)
                        let data1 = UInt8((word >> 8) & 0x7F)
                        let data2 = UInt8(word & 0x7F)
                        let timestamp = event.timeStamp
                        queue.async {
                            if status == 0x90 && data2 > 0 {
                                if ProcessInfo.processInfo.environment["KAIZEN_MOTION_DIAGNOSTICS"] == "1" {
                                    print("PHONE NOTE note=\(data1) velocity=\(data2) hostTime=\(timestamp)")
                                }
                                if previewArmed, let instrument = MotionInstrument(rawValue: previewInstrument), instrument != .thereminFX {
                                    let offset = max(0, Int(data1) - Int(instrument.defaultBaseNote))
                                    if instrument == .shaker {
                                        // Continuous CC11 drives Shaker audio; contacts remain MIDI.
                                    } else {
                                        let direction: MotionDirection
                                        if instrument == .handDrum {
                                            direction = [.zPositive, .zNegative, .xPositive, .xNegative, .yPositive, .yNegative][min(5, offset)]
                                        } else { direction = offset.isMultiple(of: 2) ? .xPositive : .xNegative }
                                        shaker.trigger(velocity: data2, instrument: instrument, direction: direction)
                                    }
                                }
                            } else if status == 0x80 || (status == 0x90 && data2 == 0) {
                                // The bridge may supply note-off ahead of its host timestamp.
                                let now = AudioGetCurrentHostTime()
                                let delay = timestamp > now ? Double(AudioConvertHostTimeToNanos(timestamp - now)) / 1e9 : 0
                                queue.asyncAfter(deadline: .now() + min(delay, 2)) {
                                    sampler.stopNote(data1, onChannel: 9)
                                }
                            } else if status == 0xB0 && data1 == 123 {
                                sampler.sendController(123, withValue: 0, onChannel: 9)
                                shaker.panic()
                                previewArmed = false
                                updateTheremin()
                            } else if status == 0xB0 {
                                if data1 == 74 { pitchValue = data2 }
                                if data1 == 71 { vowelValue = data2 }
                                if data1 == 11 {
                                    breathValue = data2
                                    if previewInstrument == MotionInstrument.shaker.rawValue && previewArmed { shaker.setEnergy(Float(data2) / 127) }
                                }
                                updateTheremin()
                            }
                        }
                    }
                }
            }
            current = UnsafePointer(MIDIEventPacketNext(current))
        }
    }
}, "MIDI input")
let sources = (0..<MIDIGetNumberOfSources()).map { MIDIGetSource($0) }.filter { source in
    var name: Unmanaged<CFString>?
    guard MIDIObjectGetStringProperty(source, kMIDIPropertyName, &name) == noErr,
          let value = name?.takeRetainedValue() else { return false }
    return value as String == "Kaizen Motion"
}
guard sources.count == 1 else { fatalError("Expected one Kaizen Motion source; found \(sources.count)") }
checked(MIDIPortConnectSource(port, sources[0], nil), "Connect source")
DistributedNotificationCenter.default().postNotificationName(.init(MotionPreviewIPC.request), object: nil, userInfo: nil, deliverImmediately: true)
print("READY: real Kaizen Motion MIDI → Mac percussion, gain 65%. Ctrl-C stops this probe.")
if CommandLine.arguments.contains("--sound-check") {
    print("LOCAL SOUND CHECK: synthetic shaker, snare, hi-hat; not phone MIDI evidence.")
    for index in 0..<3 {
        queue.asyncAfter(deadline: .now() + 1 + Double(index) * 0.4) {
            let note: UInt8 = [70, 38, 42][index]
            sampler.startNote(note, withVelocity: 120, onChannel: 9)
            queue.asyncAfter(deadline: .now() + 0.25) { sampler.stopNote(note, onChannel: 9) }
        }
    }
    queue.asyncAfter(deadline: .now() + 2.5) {
        print("LOCAL SOUND CHECK: 660 Hz tone")
        testPlayer.scheduleBuffer(testTone)
        testPlayer.play()
    }
}
let stopSignals = [SIGINT, SIGTERM].map { number -> DispatchSourceSignal in
    signal(number, SIG_IGN)
    let source = DispatchSource.makeSignalSource(signal: number, queue: .global())
    source.setEventHandler {
        engine.stop()
        restoreAudioBuffer?()
        exit(0)
    }
    source.resume()
    return source
}
RunLoop.main.run()
