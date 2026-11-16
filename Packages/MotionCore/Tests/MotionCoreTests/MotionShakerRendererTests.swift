import Testing
@testable import MotionCore

struct MotionShakerRendererTests {
    @Test func repeatedIdenticalImpactsHaveFreshExcitationAndDenseHitsRemainBounded() {
        let shaker = MotionShakerRenderer(sampleRate: 48_000)
        shaker.trigger(velocity: 100, wall: 0)
        let first = render(shaker, count: 1_024)
        _ = render(shaker, count: 48_000)
        shaker.trigger(velocity: 100, wall: 0)
        let second = render(shaker, count: 1_024)
        let cross = zip(first, second).reduce(0.0) { $0 + Double($1.0 * $1.1) }
        let e1 = first.reduce(0.0) { $0 + Double($1 * $1) }
        let e2 = second.reduce(0.0) { $0 + Double($1 * $1) }
        #expect(abs(cross) / (e1 * e2).squareRoot() < 0.5)
        for index in 0..<64 { #expect(shaker.trigger(velocity: 127, wall: UInt8(index % 4))) }
        #expect(render(shaker, count: 48_000).allSatisfy { $0.isFinite && abs($0) <= 0.95 })
    }

    @Test func crossingAWallSectorCannotSwitchShakerMaterial() {
        let left = MotionShakerRenderer(sampleRate: 48_000)
        let top = MotionShakerRenderer(sampleRate: 48_000)
        left.trigger(velocity: 90, wall: 0)
        top.trigger(velocity: 90, wall: 2)
        #expect(render(left, count: 4_800) == render(top, count: 4_800))
    }

    @Test func percussionFamiliesRenderFreshBoundedSoundAndDrumDirectionChangesTimbre() {
        for instrument in [MotionInstrument.tambourine, .maraca, .cabasa, .handDrum] {
            let sound = MotionShakerRenderer(sampleRate: 48_000)
            sound.trigger(velocity: 100, instrument: instrument, direction: .zPositive)
            let first = render(sound, count: 24_000)
            #expect(first.allSatisfy { $0.isFinite && abs($0) <= 0.95 })
            #expect(first.reduce(0.0) { $0 + Double($1 * $1) } > 0.1)
            sound.trigger(velocity: 100, instrument: instrument, direction: .zPositive)
            #expect(first != render(sound, count: 24_000))
        }
        let centre = MotionShakerRenderer(sampleRate: 48_000)
        let edge = MotionShakerRenderer(sampleRate: 48_000)
        centre.trigger(velocity: 100, instrument: .handDrum, direction: .zPositive)
        edge.trigger(velocity: 100, instrument: .handDrum, direction: .xPositive)
        #expect(render(centre, count: 4_800) != render(edge, count: 4_800))
    }

    private func render(_ shaker: MotionShakerRenderer, count: Int) -> [Float] {
        var samples = [Float](repeating: 0, count: count)
        samples.withUnsafeMutableBufferPointer { shaker.render(into: $0.baseAddress!, frameCount: UInt32(count)) }
        return samples
    }

    @Test func triggerStartsInTheNextRenderBlockAndReturnsToSilence() {
        let shaker = MotionShakerRenderer(sampleRate: 48_000)
        #expect(render(shaker, count: 128).allSatisfy { $0 == 0 })
        #expect(shaker.trigger(velocity: 100))
        let onset = render(shaker, count: 128)
        #expect(onset.prefix(32).contains { abs($0) > 0.001 })
        _ = render(shaker, count: 48_000)
        #expect(render(shaker, count: 128).allSatisfy { $0 == 0 })
    }

    @Test func queueIsBoundedAndPanicClearsQueuedAndPlayingSounds() {
        let shaker = MotionShakerRenderer(sampleRate: 48_000)
        for _ in 0..<256 { #expect(shaker.trigger(velocity: 80)) }
        #expect(!shaker.trigger(velocity: 80))
        shaker.panic()
        #expect(render(shaker, count: 128).allSatisfy { $0 == 0 })
        #expect(shaker.trigger(velocity: 80))
        #expect(render(shaker, count: 128).contains { $0 != 0 })
        shaker.panic()
        #expect(render(shaker, count: 128).allSatisfy { $0 == 0 })
    }

    @Test func firstHitAfterInstrumentChangeSurvivesPendingPanic() {
        let sound = MotionShakerRenderer(sampleRate: 48_000)
        sound.trigger(velocity: 100)
        sound.panic()
        sound.trigger(velocity: 100, instrument: .handDrum, direction: .zPositive)
        let first = render(sound, count: 128)
        #expect(first.contains { abs($0) > 0.001 })
    }

    @Test func splittingRenderBlocksDoesNotRestartSamples() {
        let one = MotionShakerRenderer(sampleRate: 48_000)
        let split = MotionShakerRenderer(sampleRate: 48_000)
        one.trigger(velocity: 100)
        split.trigger(velocity: 100)
        #expect(render(one, count: 1_024) == render(split, count: 128) + render(split, count: 896))
    }

    @Test func harderStrokesProduceMoreEnergy() {
        let gentle = MotionShakerRenderer(sampleRate: 48_000)
        let hard = MotionShakerRenderer(sampleRate: 48_000)
        gentle.trigger(velocity: 32)
        hard.trigger(velocity: 127)
        let quiet = render(gentle, count: 6_240).reduce(0.0) { $0 + Double($1 * $1) }
        let loud = render(hard, count: 6_240).reduce(0.0) { $0 + Double($1 * $1) }
        #expect(loud > quiet * 8)
    }
}
