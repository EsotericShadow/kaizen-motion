import Foundation

/// Two tilt components relative to the current grip, without portrait Euler-angle singularities.
public struct MotionGripTilt: Sendable {
    private var horizontal = MotionVector()
    private var vertical = MotionVector()
    public private(set) var isCentered = false
    public init() {}
    public mutating func reset() { isCentered = false }
    public mutating func center(on gravity: MotionVector) {
        let magnitude = gravity.magnitude
        guard magnitude.isFinite, magnitude > 0.5, magnitude < 1.5 else { isCentered = false; return }
        let g = MotionVector(x: gravity.x / magnitude, y: gravity.y / magnitude, z: gravity.z / magnitude)
        var tangent = MotionVector(x: 1 - g.x * g.x, y: -g.x * g.y, z: -g.x * g.z)
        if tangent.magnitude < 0.1 { tangent = .init(x: -g.y * g.x, y: 1 - g.y * g.y, z: -g.y * g.z) }
        let length = tangent.magnitude
        horizontal = .init(x: tangent.x / length, y: tangent.y / length, z: tangent.z / length)
        vertical = .init(x: g.y * horizontal.z - g.z * horizontal.y,
                         y: g.z * horizontal.x - g.x * horizontal.z,
                         z: g.x * horizontal.y - g.y * horizontal.x)
        isCentered = true
    }
    public mutating func project(_ gravity: MotionVector) -> MotionVector {
        if !isCentered { center(on: gravity) }
        let length = gravity.magnitude
        guard isCentered, length.isFinite, length > 0.5, length < 1.5 else { return .init() }
        return .init(x: (gravity.x * horizontal.x + gravity.y * horizontal.y + gravity.z * horizontal.z) / length,
                     y: (gravity.x * vertical.x + gravity.y * vertical.y + gravity.z * vertical.z) / length)
    }
    /// Inverted by physical-device feedback: toward/away shares the chamber's Y direction.
    public static func vowelPosition(verticalTilt: Double) -> Float {
        Float(max(0, min(1, 0.5 - verticalTilt))) // Full sweep across approximately ±30 degrees.
    }
}
