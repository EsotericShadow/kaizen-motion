import Foundation

/// Continuous measured XYZ effort; sensor noise cannot sustain the rattle.
struct MotionShakeEnergy: Sendable {
    private var lastTime: Double?
    private(set) var value = 0.0
    mutating func process(_ frame: MotionFeatureFrame) -> Double {
        let dt = min(0.05, max(0.001, frame.timestamp - (lastTime ?? frame.timestamp - 0.01)))
        lastTime = frame.timestamp
        let effort = max(0, frame.acceleration.magnitude - 0.035) * 1.8
            + max(0, frame.rotationRate.magnitude - 0.15) * 0.08
        value = max(min(1, effort), value * exp(-dt / 0.06))
        if value < 0.004 { value = 0 }
        return value
    }
}
