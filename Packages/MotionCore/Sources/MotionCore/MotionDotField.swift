import Foundation

/// The twelve local display channels of the performance glass.
///
/// The dot field is a visualization only: it is derived on the device from the same
/// `MotionFeatureFrame` the analyzer consumes and is never encoded, queued or transmitted.
/// Raw values give the order in which dots are revealed as the count grows from 1 to 12.
public enum MotionDotChannel: Int, CaseIterable, Sendable {
    case composite = 0
    case accelerationX
    case accelerationY
    case accelerationZ
    case gyroX
    case gyroY
    case gyroZ
    case roll
    case pitch
    case yaw
    case jerk
    case velocity

    /// Cell in the 4 x 3 field. Columns: overall (composite, jerk, velocity), then the device X,
    /// Y and Z axes. Rows: acceleration, rotation rate, attitude. Pitch turns about X and roll
    /// about Y, so each axis column holds that axis's acceleration, rotation rate and angle.
    public var cell: (column: Int, row: Int) {
        switch self {
        case .composite: (0, 0)
        case .accelerationX: (1, 0)
        case .accelerationY: (2, 0)
        case .accelerationZ: (3, 0)
        case .jerk: (0, 1)
        case .gyroX: (1, 1)
        case .gyroY: (2, 1)
        case .gyroZ: (3, 1)
        case .velocity: (0, 2)
        case .pitch: (1, 2)
        case .roll: (2, 2)
        case .yaw: (3, 2)
        }
    }

    public var shortLabel: String {
        switch self {
        case .composite: "ALL"
        case .accelerationX: "ACC X"
        case .accelerationY: "ACC Y"
        case .accelerationZ: "ACC Z"
        case .gyroX: "GYRO X"
        case .gyroY: "GYRO Y"
        case .gyroZ: "GYRO Z"
        case .roll: "ROLL"
        case .pitch: "PITCH"
        case .yaw: "YAW"
        case .jerk: "JERK"
        case .velocity: "VEL"
        }
    }

    public var spokenName: String {
        switch self {
        case .composite: "composite motion"
        case .accelerationX: "acceleration X"
        case .accelerationY: "acceleration Y"
        case .accelerationZ: "acceleration Z"
        case .gyroX: "rotation rate X"
        case .gyroY: "rotation rate Y"
        case .gyroZ: "rotation rate Z"
        case .roll: "roll"
        case .pitch: "pitch"
        case .yaw: "yaw"
        case .jerk: "jerk"
        case .velocity: "note velocity"
        }
    }
}

/// One dot's measured state, normalized for drawing.
public struct MotionDotSample: Equatable, Sendable {
    public var channel: MotionDotChannel
    /// Displacement from the dot's home in screen orientation (+x right, +y down), each -1...1.
    public var dx: Double
    public var dy: Double
    /// Magnitude of the channel, 0...1 (drives size and glow).
    public var level: Double
    /// Toward (+) or away from (-) the viewer, -1...1. Only acceleration Z uses depth.
    public var depth: Double

    public init(channel: MotionDotChannel, dx: Double = 0, dy: Double = 0, level: Double = 0, depth: Double = 0) {
        self.channel = channel
        self.dx = dx
        self.dy = dy
        self.level = level
        self.depth = depth
    }
}

/// Attitude captured when the performer presses CENTRE, matching the analyzer's zero.
public struct MotionAttitudeReference: Equatable, Sendable {
    public var roll: Double
    public var pitch: Double
    public var yaw: Double

    public init(roll: Double = 0, pitch: Double = 0, yaw: Double = 0) {
        self.roll = roll
        self.pitch = pitch
        self.yaw = yaw
    }

    public init(frame: MotionFeatureFrame) {
        self.init(roll: frame.roll, pitch: frame.pitch, yaw: frame.yaw)
    }
}

public enum MotionDotField {
    public static let countRange = 1...12
    /// A fresh install shows exactly one dot, the composite; the performer adds more (up to 12).
    public static let defaultCount = 1

    public static func clampedCount(_ count: Int) -> Int {
        min(countRange.upperBound, max(countRange.lowerBound, count))
    }

    /// Channels shown for a dot count, in reveal order.
    public static func channels(count: Int) -> [MotionDotChannel] {
        Array(MotionDotChannel.allCases.prefix(clampedCount(count)))
    }

    /// Response gain from the sensitivity control (0...1), so the display follows the same
    /// feel as the trigger thresholds: 0.6 at minimum, about 1.1 at the 0.62 default, 1.4 at maximum.
    public static func gain(sensitivity: Double) -> Double {
        0.6 + 0.8 * min(1, max(0, sensitivity))
    }

    /// Acceleration magnitude as a 0...1 global energy (drives field-wide glow and scale).
    public static func globalEnergy(_ frame: MotionFeatureFrame, sensitivity: Double) -> Double {
        tanh(max(0, frame.accelerationMagnitude) * gain(sensitivity: sensitivity) / 1.2)
    }

    /// All twelve channels for a frame. Angles are taken relative to `reference` like the tilt CCs.
    public static func samples(
        frame: MotionFeatureFrame,
        reference: MotionAttitudeReference = .init(),
        noteVelocity: UInt8,
        sensitivity: Double
    ) -> [MotionDotSample] {
        let g = gain(sensitivity: sensitivity)
        let acceleration = frame.acceleration
        let rotation = frame.rotationRate

        func signed(_ value: Double, scale: Double) -> Double {
            tanh(value * g / scale)
        }

        // Composite: overall energy from acceleration, rotation and jerk; the dot leans toward
        // the in-plane direction of acceleration.
        let energy = tanh(
            g * (0.60 * frame.accelerationMagnitude / 0.9
                + 0.25 * rotation.magnitude / 4.0
                + 0.15 * max(0, frame.jerk) / 25.0)
        )
        let planar = hypot(acceleration.x, acceleration.y)
        let compositeDX = planar > 1e-9 ? acceleration.x / planar * energy * 0.8 : 0
        let compositeDY = planar > 1e-9 ? -acceleration.y / planar * energy * 0.8 : 0

        let accelerationX = signed(acceleration.x, scale: 0.8)
        let accelerationY = signed(acceleration.y, scale: 0.8)
        let accelerationZ = signed(acceleration.z, scale: 0.8)
        let gyroX = signed(rotation.x, scale: 4.0)
        let gyroY = signed(rotation.y, scale: 4.0)
        let gyroZ = signed(rotation.z, scale: 4.0)
        // Same ranges as the TILT X / TILT Y controllers: +/- 90 degrees from CENTRE.
        let roll = clamp(wrapped(frame.roll - reference.roll) / (.pi / 2))
        let pitch = clamp(wrapped(frame.pitch - reference.pitch) / (.pi / 2))
        let yaw = wrapped(frame.yaw - reference.yaw)
        let jerk = 1 - exp(-max(0, frame.jerk) * g / 20.0)
        let velocity = Double(min(noteVelocity, 127)) / 127.0

        // Rotation about Z (in the screen plane) moves the dot along a small arc through its
        // home: counter-clockwise device rotation carries the dot counter-clockwise.
        let spinAngle = -gyroZ * .pi / 2
        let yawAngle = -yaw

        return [
            MotionDotSample(channel: .composite, dx: compositeDX, dy: compositeDY, level: energy),
            MotionDotSample(channel: .accelerationX, dx: accelerationX, level: abs(accelerationX)),
            MotionDotSample(channel: .accelerationY, dy: -accelerationY, level: abs(accelerationY)),
            MotionDotSample(channel: .accelerationZ, level: abs(accelerationZ), depth: accelerationZ),
            MotionDotSample(channel: .gyroX, dy: -gyroX, level: abs(gyroX)),
            MotionDotSample(channel: .gyroY, dx: gyroY, level: abs(gyroY)),
            MotionDotSample(
                channel: .gyroZ,
                dx: sin(spinAngle) * 0.9,
                dy: (1 - cos(spinAngle)) * 0.9,
                level: abs(gyroZ)
            ),
            MotionDotSample(channel: .roll, dx: roll, level: abs(roll)),
            MotionDotSample(channel: .pitch, dy: -pitch, level: abs(pitch)),
            MotionDotSample(
                channel: .yaw,
                dx: sin(yawAngle) * 0.5,
                dy: (1 - cos(yawAngle)) * 0.5,
                level: abs(yaw) / .pi
            ),
            MotionDotSample(channel: .jerk, dy: -0.35 * jerk, level: jerk),
            MotionDotSample(channel: .velocity, level: velocity)
        ]
    }

    private static func clamp(_ value: Double) -> Double {
        min(1, max(-1, value))
    }

    private static func wrapped(_ angle: Double) -> Double {
        var value = angle
        while value > .pi { value -= 2 * .pi }
        while value < -.pi { value += 2 * .pi }
        return value
    }
}
