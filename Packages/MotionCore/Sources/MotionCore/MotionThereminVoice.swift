import Foundation

public enum MotionThereminVoice: Int, CaseIterable, Identifiable, Sendable {
    case classic = 0, chimera = 1
    public var id: Int { rawValue }
    public var name: String { self == .classic ? "Classic" : "CHIMERA" }
    public func frequency(position: Double) -> Float {
        Float(110 * pow(2, max(0, min(1, position)) * (self == .classic ? 4 : 3)))
    }
    // Translation normal to the screen controls vocal effort. Neutral is audible;
    // the native source smooths pressure, so sensor noise cannot step the airway.
    public static func breath(accelerationZ: Double) -> Float {
        guard accelerationZ.isFinite else { return 0.55 }
        return Float(max(0, min(1, 0.55 - accelerationZ * 0.65)))
    }
}
