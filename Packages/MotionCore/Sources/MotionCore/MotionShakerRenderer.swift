import MotionToneDSP

/// Bounded SPSC collision queue and continuously rendered stochastic wall resonances.
public final class MotionShakerRenderer: @unchecked Sendable {
    private let state: OpaquePointer
    public init(sampleRate: Double) {
        guard let state = KMShakerCreate(sampleRate) else { preconditionFailure("Invalid shaker sample rate") }
        self.state = state
    }
    deinit { KMShakerDestroy(state) }
    @discardableResult public func trigger(velocity: UInt8) -> Bool { KMShakerTrigger(state, velocity) != 0 }
    @discardableResult public func trigger(velocity: UInt8, wall: UInt8) -> Bool {
        KMShakerTriggerWall(state, velocity, wall) != 0
    }
    @discardableResult public func trigger(velocity: UInt8, instrument: MotionInstrument, direction: MotionDirection) -> Bool {
        KMShakerTriggerInstrument(state, velocity, UInt8(instrument.rawValue), UInt8(direction.rawValue)) != 0
    }
    public func setEnergy(_ value: Float) { KMShakerSetEnergy(state, value) }
    public func panic() { KMShakerPanic(state) }
    public func takePeak() -> Float { KMShakerTakePeak(state) }
    public func render(into output: UnsafeMutablePointer<Float>, frameCount: UInt32) {
        KMShakerRender(state, output, frameCount)
    }
}
