import Testing
@testable import MotionCore

struct MotionLinkHealthTests {
    @Test func socketReadyAloneIsNotAResponsivePeer() {
        var health = MotionLinkHealth()
        #expect(health.state(at: 0) == .disconnected)
        health.begin(at: 100)
        #expect(health.state(at: 101) == .awaitingReply)
        #expect(health.state(at: 100 + MotionLinkHealth.timeoutNanoseconds) == .timedOut)
    }

    @Test func repliesKeepLinkAliveAndSilenceExpiresIt() {
        var health = MotionLinkHealth()
        health.begin(at: 0)
        health.recordReply(at: 1_000_000_000)
        #expect(health.state(at: 3_999_999_999) == .responsive)
        #expect(health.state(at: 4_000_000_000) == .timedOut)
        health.recordReply(at: 4_000_000_001)
        #expect(health.state(at: 4_000_000_001) == .responsive)
    }

    @Test func reconnectRequiresNewEvidence() {
        var health = MotionLinkHealth()
        health.begin(at: 100)
        health.recordReply(at: 200)
        health.begin(at: 300)
        #expect(health.state(at: 300) == .awaitingReply)
        health.recordReply(at: 200)
        #expect(health.state(at: 300) == .awaitingReply)
        health.reset()
        health.recordReply(at: 400)
        #expect(health.state(at: 400) == .disconnected)
    }

    @Test func unexpectedBackwardClockDoesNotUnderflow() {
        var health = MotionLinkHealth()
        health.begin(at: 100)
        #expect(health.state(at: 99) == .timedOut)
    }
}
