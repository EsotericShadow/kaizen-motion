import Foundation

public struct MotionVector: Equatable, Sendable {
    public var x: Double
    public var y: Double
    public var z: Double

    public init(x: Double = 0, y: Double = 0, z: Double = 0) {
        self.x = x
        self.y = y
        self.z = z
    }

    public var magnitude: Double {
        sqrt((x * x) + (y * y) + (z * z))
    }

    public var dominantDirection: MotionDirection {
        let values = [(abs(x), x >= 0 ? MotionDirection.xPositive : .xNegative),
                      (abs(y), y >= 0 ? MotionDirection.yPositive : .yNegative),
                      (abs(z), z >= 0 ? MotionDirection.zPositive : .zNegative)]
        return values.max(by: { $0.0 < $1.0 })?.1 ?? .zPositive
    }
}

public enum MotionDirection: Int, CaseIterable, Sendable {
    case xPositive = 0
    case xNegative = 1
    case yPositive = 2
    case yNegative = 3
    case zPositive = 4
    case zNegative = 5

    public var shortLabel: String {
        switch self {
        case .xPositive: "+X"
        case .xNegative: "-X"
        case .yPositive: "+Y"
        case .yNegative: "-Y"
        case .zPositive: "+Z"
        case .zNegative: "-Z"
        }
    }
}

public enum MotionInstrument: Int, CaseIterable, Identifiable, Sendable {
    case shaker = 0
    case tambourine
    case maraca
    case cabasa
    case handDrum
    case thereminFX

    public var id: Int { rawValue }

    public var name: String {
        switch self {
        case .shaker: "Shaker"
        case .tambourine: "Tambourine"
        case .maraca: "Maraca"
        case .cabasa: "Cabasa"
        case .handDrum: "Hand Drum"
        case .thereminFX: "Theremin / FX"
        }
    }

    public var symbolName: String {
        switch self {
        case .shaker: "waveform.path"
        case .tambourine: "circle.hexagongrid"
        case .maraca: "metronome"
        case .cabasa: "rotate.3d"
        case .handDrum: "hand.tap"
        case .thereminFX: "move.3d"
        }
    }

    public var instruction: String {
        switch self {
        case .shaker: "Shake loose grains in three dimensions. Front, back and shell contacts make the rattle."
        case .tambourine: "Each stroke follows your hand; reversing direction changes the articulation."
        case .maraca: "Shake back and forth. Each stroke excites a fresh grain cloud."
        case .cabasa: "Roll and rotate the phone to create a continuous scraping pattern."
        case .handDrum: "Short, decisive strikes choose drum articulations by direction."
        case .thereminFX: "Tilt and rotate to perform three continuous MIDI controls."
        }
    }

    public var defaultBaseNote: UInt8 {
        switch self {
        case .shaker: 70
        case .tambourine: 54
        case .maraca: 70
        case .cabasa: 69
        case .handDrum: 36
        case .thereminFX: 60
        }
    }
}

public struct MotionFeatureFrame: Equatable, Sendable {
    public var timestamp: TimeInterval
    public var acceleration: MotionVector
    public var rotationRate: MotionVector
    public var roll: Double
    public var pitch: Double
    public var yaw: Double
    public var accelerationMagnitude: Double
    public var jerk: Double
    public var gravity: MotionVector

    public init(
        timestamp: TimeInterval,
        acceleration: MotionVector,
        rotationRate: MotionVector = .init(),
        roll: Double = 0,
        pitch: Double = 0,
        yaw: Double = 0,
        accelerationMagnitude: Double? = nil,
        jerk: Double = 0,
        gravity: MotionVector = .init()
    ) {
        self.timestamp = timestamp
        self.acceleration = acceleration
        self.rotationRate = rotationRate
        self.roll = roll
        self.pitch = pitch
        self.yaw = yaw
        self.accelerationMagnitude = accelerationMagnitude ?? acceleration.magnitude
        self.jerk = jerk
        self.gravity = gravity
    }
}

public struct MotionFeatureExtractor: Sendable {
    private var previousTimestamp: TimeInterval?
    private var previousMagnitude = 0.0
    private var smoothedAcceleration = MotionVector()

    public init() {}

    public mutating func reset() {
        previousTimestamp = nil
        previousMagnitude = 0
        smoothedAcceleration = .init()
    }

    public mutating func process(
        timestamp: TimeInterval,
        userAcceleration: MotionVector,
        rotationRate: MotionVector,
        roll: Double,
        pitch: Double,
        yaw: Double,
        gravity: MotionVector = .init()
    ) -> MotionFeatureFrame {
        let smoothing = previousTimestamp == nil ? 1.0 : 0.34
        smoothedAcceleration.x += (userAcceleration.x - smoothedAcceleration.x) * smoothing
        smoothedAcceleration.y += (userAcceleration.y - smoothedAcceleration.y) * smoothing
        smoothedAcceleration.z += (userAcceleration.z - smoothedAcceleration.z) * smoothing

        let magnitude = smoothedAcceleration.magnitude
        let deltaTime = max(1.0 / 240.0, min(0.1, timestamp - (previousTimestamp ?? timestamp)))
        let jerk = previousTimestamp == nil ? 0 : abs(magnitude - previousMagnitude) / deltaTime

        previousTimestamp = timestamp
        previousMagnitude = magnitude

        return MotionFeatureFrame(
            timestamp: timestamp,
            acceleration: smoothedAcceleration,
            rotationRate: rotationRate,
            roll: roll,
            pitch: pitch,
            yaw: yaw,
            accelerationMagnitude: magnitude,
            jerk: jerk,
            gravity: gravity
        )
    }
}

public struct MotionMappingConfiguration: Equatable, Sendable {
    public var instrument: MotionInstrument
    public var sensitivity: Double
    public var baseNote: UInt8
    public var noteLength: TimeInterval
    public var minimumTriggerInterval: TimeInterval
    public var midiChannel: UInt8
    public var tiltXController: UInt8
    public var tiltYController: UInt8
    public var rotationController: UInt8
    public var armed: Bool
    public var thereminVoice: MotionThereminVoice
    public var chamberGeometry: MotionChamberGeometry

    public init(
        instrument: MotionInstrument = .shaker,
        sensitivity: Double = 0.62,
        baseNote: UInt8? = nil,
        noteLength: TimeInterval = 0.075,
        minimumTriggerInterval: TimeInterval = 0.055,
        midiChannel: UInt8 = 0,
        tiltXController: UInt8 = 74,
        tiltYController: UInt8 = 71,
        rotationController: UInt8 = 1,
        armed: Bool = true,
        chamberGeometry: MotionChamberGeometry = .init(),
        thereminVoice: MotionThereminVoice = .classic
    ) {
        self.instrument = instrument
        self.sensitivity = sensitivity
        self.baseNote = baseNote ?? instrument.defaultBaseNote
        self.noteLength = noteLength
        self.minimumTriggerInterval = minimumTriggerInterval
        self.midiChannel = midiChannel
        self.tiltXController = tiltXController
        self.tiltYController = tiltYController
        self.rotationController = rotationController
        self.armed = armed
        self.thereminVoice = thereminVoice
        self.chamberGeometry = chamberGeometry.validated
    }
}

public enum MotionOutputEvent: Equatable, Sendable {
    case note(
        timestamp: TimeInterval,
        note: UInt8,
        velocity: UInt8,
        channel: UInt8,
        direction: MotionDirection,
        duration: TimeInterval
    )
    case controlChange(timestamp: TimeInterval, controller: UInt8, value: UInt8, channel: UInt8)
}
