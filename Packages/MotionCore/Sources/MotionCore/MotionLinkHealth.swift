/// Evidence of a responsive peer, independent of UDP's local socket-ready state.
/// The owner calls this only on its networking queue, never an audio callback.
public struct MotionLinkHealth: Sendable {
    public enum State: Equatable, Sendable {
        case disconnected
        case awaitingReply
        case responsive
        case timedOut
    }

    public static let timeoutNanoseconds: UInt64 = 3_000_000_000
    private var startedAt: UInt64?
    private var lastReplyAt: UInt64?

    public init() {}

    public mutating func begin(at now: UInt64) {
        startedAt = now
        lastReplyAt = nil
    }

    public mutating func recordReply(at now: UInt64) {
        guard let startedAt, now >= startedAt else { return }
        lastReplyAt = now
    }

    public mutating func reset() {
        startedAt = nil
        lastReplyAt = nil
    }

    public func state(at now: UInt64) -> State {
        guard let startedAt else { return .disconnected }
        let reference = lastReplyAt ?? startedAt
        guard now >= reference else { return .timedOut }
        guard now - reference < Self.timeoutNanoseconds else { return .timedOut }
        return lastReplyAt == nil ? .awaitingReply : .responsive
    }
}
