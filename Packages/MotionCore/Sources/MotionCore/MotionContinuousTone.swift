import MotionToneDSP

/// One control writer and one render reader. Rendering allocates and locks nothing.
public final class MotionContinuousTone: @unchecked Sendable {
    private let state: OpaquePointer

    public init(sampleRate: Double) {
        guard let state = KMToneCreate(sampleRate) else { preconditionFailure("Invalid tone sample rate") }
        self.state = state
    }

    deinit { KMToneDestroy(state) }

    public func set(frequency: Float, gain: Float) { KMToneSet(state, frequency, gain) }
    public func setVowel(position: Float?) { KMToneSetVowel(state, position ?? -1) }
    public func takePeak() -> Float { KMToneTakePeak(state) }

    /// Called only by one render thread; output must contain at least frameCount floats.
    public func render(into output: UnsafeMutablePointer<Float>, frameCount: UInt32) {
        KMToneRender(state, output, frameCount)
    }
}
