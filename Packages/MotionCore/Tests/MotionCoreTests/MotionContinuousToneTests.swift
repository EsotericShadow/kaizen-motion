import Testing
import Foundation
@testable import MotionCore

struct MotionContinuousToneTests {
    @Test func vowelToneCanPauseToSilenceAndResumeSmoothly() {
        let tone = MotionContinuousTone(sampleRate: 48_000)
        tone.setVowel(position: 0.7)
        tone.set(frequency: 440, gain: 0.62)
        _ = render(tone, count: 4_800)
        tone.set(frequency: 440, gain: 0)
        let paused = render(tone, count: 9_600)
        #expect(paused.suffix(480).allSatisfy { abs($0) < 0.00001 })
        tone.set(frequency: 440, gain: 0.62)
        let resumed = render(tone, count: 4_800)
        #expect(abs(resumed[0]) < 0.005)
        #expect(resumed.allSatisfy { $0.isFinite && abs($0) < 0.95 })
        #expect(resumed.suffix(2_400).contains { abs($0) > 0.02 })
    }
    @Test func vowelSweepChangesSpectrumWithoutSilenceOrPhaseRestart() {
        let tone = MotionContinuousTone(sampleRate: 48_000)
        tone.set(frequency: 220, gain: 0.62)
        tone.setVowel(position: 0)
        let oo = render(tone, count: 12_000)
        tone.setVowel(position: 1)
        let ee = render(tone, count: 12_000)
        #expect(oo.allSatisfy { $0.isFinite && abs($0) < 0.95 })
        #expect(ee.allSatisfy { $0.isFinite && abs($0) < 0.95 })
        #expect(abs(ee[0] - oo.last!) < 0.08)
        func harmonicEnergy(_ samples: ArraySlice<Float>, harmonic: Int) -> Double {
            var real = 0.0, imaginary = 0.0
            for (index, sample) in samples.enumerated() {
                let phase = Double(index) * 2 * Double.pi * 220 * Double(harmonic) / 48_000
                real += Double(sample) * cos(phase)
                imaginary += Double(sample) * sin(phase)
            }
            return real * real + imaginary * imaginary
        }
        let ooRatio = harmonicEnergy(oo.suffix(4_800), harmonic: 10) / harmonicEnergy(oo.suffix(4_800), harmonic: 4)
        let eeRatio = harmonicEnergy(ee.suffix(4_800), harmonic: 10) / harmonicEnergy(ee.suffix(4_800), harmonic: 4)
        #expect(eeRatio > ooRatio * 2)
    }
    private func render(_ tone: MotionContinuousTone, count: Int) -> [Float] {
        var samples = [Float](repeating: 0, count: count)
        samples.withUnsafeMutableBufferPointer { tone.render(into: $0.baseAddress!, frameCount: UInt32(count)) }
        return samples
    }

    @Test func phaseContinuesAcrossRenderBlocks() {
        let one = MotionContinuousTone(sampleRate: 48_000)
        let split = MotionContinuousTone(sampleRate: 48_000)
        one.set(frequency: 440, gain: 0.8)
        split.set(frequency: 440, gain: 0.8)
        let expected = render(one, count: 4_096)
        let actual = render(split, count: 1_024) + render(split, count: 3_072)
        #expect(expected == actual)
        #expect(actual.contains { abs($0) > 0.1 })
    }

    @Test func muteFadesToSilenceAndInvalidControlValuesRemainFinite() {
        let tone = MotionContinuousTone(sampleRate: 48_000)
        tone.set(frequency: 440, gain: 1)
        _ = render(tone, count: 4_800)
        tone.set(frequency: .nan, gain: .infinity)
        let tail = render(tone, count: 9_600)
        #expect(tail.allSatisfy { $0.isFinite && abs($0) < 0.27 })
        #expect(tail.suffix(480).allSatisfy { abs($0) < 0.00001 })
    }

    @Test func pitchChangeIsSmoothedWithoutRestartingTheWaveform() {
        let tone = MotionContinuousTone(sampleRate: 48_000)
        tone.set(frequency: 220, gain: 1)
        let before = render(tone, count: 4_800)
        tone.set(frequency: 880, gain: 1)
        let after = render(tone, count: 9_600)
        #expect(abs(after[0] - before.last!) < 0.02)
        let stable = Array(after.suffix(4_800))
        let crossings = zip(stable, stable.dropFirst()).filter { $0 <= 0 && $1 > 0 }.count
        #expect((87...89).contains(crossings))
    }
}
