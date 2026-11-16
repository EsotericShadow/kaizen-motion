import Foundation
import Testing
@testable import MotionCore

struct MotionChimeraTests {
    @Test func nativeCBridgeProducesVoiceAndPauseResumeWorks() {
        let voice = MotionChimeraVoice(sampleRate: 48_000)
        func render(_ count: Int) -> [Float] {
            var samples = [Float](repeating: 0, count: count)
            samples.withUnsafeMutableBufferPointer { voice.render(into: $0.baseAddress!, frameCount: UInt32(count)) }
            return samples
        }
        #expect(render(128).allSatisfy { $0 == 0 })
        voice.set(frequency: 220, vowel: 0.5, breath: 0.55, gain: 0.6)
        let singing = render(24_000)
        #expect(singing.allSatisfy { $0.isFinite && abs($0) <= 0.9 })
        #expect(singing.reduce(0.0) { $0 + Double($1 * $1) } > 0.1)
        #expect(voice.takePeak() > 0.002)
        voice.mute()
        _ = render(24_000)
        #expect(render(128).allSatisfy { $0 == 0 })
        voice.set(frequency: 220, vowel: 1, breath: 0.8, gain: 0.6)
        #expect(render(24_000).contains { abs($0) > 0.001 })
    }
    @Test func selectedVoiceTravelsInStateAndInvalidVoiceIsRejected() {
        let packet = MotionRealtimePacket(sessionID: 1, sequence: 2, senderUptimeNanoseconds: 3,
                                           message: .performanceState(instrument: 5, armed: true, voice: 1))
        #expect(MotionRealtimePacket(decoding: packet.encoded()) == packet)
        var bytes = [UInt8](packet.encoded()); bytes[26] = 2
        #expect(MotionRealtimePacket(decoding: Data(bytes)) == nil)
        bytes[26] = 0
        #expect(MotionRealtimePacket(decoding: Data(bytes))?.message == .performanceState(instrument: 5, armed: true))
    }
    @Test func voiceSwitchPreservesVowelReferenceAndZProducesExpression() {
        var analyzer = MotionAnalyzer(configuration: .init(instrument: .thereminFX))
        _ = analyzer.process(.init(timestamp: 0, acceleration: .init(), gravity: .init(y: -1)))
        let tilt = MotionVector(y: -0.8, z: 0.6)
        let before = analyzer.process(.init(timestamp: 0.02, acceleration: .init(), gravity: tilt))
        func cc(_ events: [MotionOutputEvent], _ controller: UInt8) -> UInt8? {
            events.compactMap { if case let .controlChange(_, c, v, _) = $0, c == controller { return v }; return nil }.last
        }
        analyzer.configuration.thereminVoice = .chimera
        let after = analyzer.process(.init(timestamp: 0.04, acceleration: .init(z: -0.5), gravity: tilt))
        #expect(cc(before, 71) == cc(after, 71))
        #expect((cc(after, 11) ?? 0) > 70)
        #expect(cc(after, 1) == nil)
        #expect(MotionThereminVoice.classic.frequency(position: 0.5) == 440)
        #expect(MotionThereminVoice.classic.frequency(position: 1) == 1760)
        #expect(MotionThereminVoice.chimera.frequency(position: 1) == 880)
    }
}
