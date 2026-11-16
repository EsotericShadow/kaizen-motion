import Foundation
import Testing
@testable import MotionCore

struct MotionContinuousRattleTests {
    @Test func measuredXYZEffortRejectsIdleNoiseAndDecaysToZero() {
        for axis in [MotionVector(x: 1), MotionVector(y: 1), MotionVector(z: 1)] {
            var energy = MotionShakeEnergy()
            #expect(energy.process(.init(timestamp: 0, acceleration: axis)) > 0.9)
            for i in 1...200 {
                _ = energy.process(.init(timestamp: Double(i) * 0.01, acceleration: .init(x: 0.015, y: -0.008, z: 0.01)))
            }
            #expect(energy.value == 0)
        }
    }
    @Test func sustainedRattleHasSoundAndStopsWithoutWallRetriggers() {
        let voice = MotionShakerRenderer(sampleRate: 48_000)
        func render(_ n: Int) -> [Float] {
            var out = [Float](repeating: 0, count: n)
            out.withUnsafeMutableBufferPointer { voice.render(into: $0.baseAddress!, frameCount: UInt32(n)) }
            return out
        }
        #expect(render(128).allSatisfy { $0 == 0 })
        voice.setEnergy(0.6)
        let sound = render(48_000)
        #expect(sound.allSatisfy { $0.isFinite && abs($0) <= 0.95 })
        #expect(sound.reduce(0.0) { $0 + Double($1 * $1) } > 1)
        voice.setEnergy(0)
        _ = render(96_000)
        #expect(render(128).allSatisfy { $0 == 0 })
    }
    @Test func headGeometryFollowsNativeArticulators() throws {
        let voice = MotionChimeraVoice(sampleRate: 48_000)
        func snapshot(_ vowel: Float) throws -> [String: Any] {
            voice.set(frequency: 220, vowel: vowel, breath: 0.6, gain: 0.6)
            var samples = [Float](repeating: 0, count: 24_000)
            samples.withUnsafeMutableBufferPointer { voice.render(into: $0.baseAddress!, frameCount: 24_000) }
            let json = try #require(voice.sceneJSON())
            return try #require(JSONSerialization.jsonObject(with: Data(json.utf8)) as? [String: Any])
        }
        let oo = try snapshot(0), ee = try snapshot(1)
        let a = try #require(oo["artic"] as? [String: Double])
        let b = try #require(ee["artic"] as? [String: Double])
        #expect(a["lipWidth"] != b["lipWidth"])
        #expect((oo["frame"] as? [String: Any])?["tongue"] != nil)
        #expect(ee["restFrame"] != nil)
    }
}
