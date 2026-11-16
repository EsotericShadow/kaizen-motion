import MotionChimeraNative

/// Jameson Hodge's native CHIMERA airway engine. One control writer / one render
/// reader. Construction and vowel calibration happen before the source node runs.
public final class MotionChimeraVoice: @unchecked Sendable {
    private let state: OpaquePointer
    public init(sampleRate: Double) {
        guard let state = KMChimeraCreate(sampleRate) else { preconditionFailure("Invalid CHIMERA sample rate") }
        self.state = state
    }
    deinit { KMChimeraDestroy(state) }
    public func set(frequency: Float, vowel: Float, breath: Float, gain: Float) {
        KMChimeraSet(state, frequency, vowel, breath, gain)
    }
    public func mute() { set(frequency: 311, vowel: 0.5, breath: 0.55, gain: 0) }
    /// Main/UI caller only. Geometry is computed on a separate mirror, outside audio.
    public func sceneJSON() -> String? {
        var bytes = [UInt8](repeating: 0, count: 262_144)
        let count = KMChimeraCopySceneJSON(state, &bytes, UInt32(bytes.count))
        guard count > 0, count <= bytes.count else { return nil }
        return String(decoding: bytes.prefix(Int(count)), as: UTF8.self)
    }
    public func takePeak() -> Float { KMChimeraTakePeak(state) }
    public func render(into output: UnsafeMutablePointer<Float>, frameCount: UInt32) {
        KMChimeraRender(state, output, frameCount)
    }
}
