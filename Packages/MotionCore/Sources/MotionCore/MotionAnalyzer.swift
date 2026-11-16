import Foundation

public struct MotionAnalyzer: Sendable {
    public var configuration: MotionMappingConfiguration

    private var isAboveThreshold = false
    private var shakeEnergy = MotionShakeEnergy()
    private var rattleEnergy = 0.0
    private var shakerChamber = MotionShakerChamber()
    public private(set) var shakerImpacts: [MotionShakerChamber.Impact] = []
    public var shakerGrains: [MotionVector] { shakerChamber.grainPositions }
    public var shakerPosition: MotionVector { shakerChamber.ballPosition }
    private var lastTriggerTime = -Double.greatestFiniteMagnitude
    private var lastControlTime = -Double.greatestFiniteMagnitude
    private var strokeVector = MotionVector()
    private var selectedDirection: MotionDirection?
    private var previousGestureTime: Double?
    private var rotationTravel = 0.0
    private var rotationSign = 0.0
    private var lastControllerValues: [UInt8] = [64, 64, 0]
    private var rollZero = 0.0
    private var pitchZero = 0.0
    private var yawZero = 0.0
    private var thereminGrip = MotionGripTilt()
    private var lastInstrument: MotionInstrument?
    private var lastVoice: MotionThereminVoice?

    public init(configuration: MotionMappingConfiguration = .init()) {
        self.configuration = configuration
    }

    public mutating func reset() {
        isAboveThreshold = false
        shakeEnergy = MotionShakeEnergy()
        rattleEnergy = 0
        shakerChamber.reset()
        thereminGrip.reset()
        lastInstrument = nil
        lastVoice = nil
        lastTriggerTime = -Double.greatestFiniteMagnitude
        lastControlTime = -Double.greatestFiniteMagnitude
        strokeVector = .init()
        selectedDirection = nil
        previousGestureTime = nil
        rotationTravel = 0
        rotationSign = 0
        lastControllerValues = [64, 64, 0]
    }

    public mutating func calibrate(to frame: MotionFeatureFrame) {
        rollZero = frame.roll
        pitchZero = frame.pitch
        yawZero = frame.yaw
        lastControllerValues = [64, 64, 0]
        shakeEnergy = MotionShakeEnergy()
        rattleEnergy = 0
        shakerChamber.reset()
        thereminGrip.center(on: frame.gravity)
    }

    public mutating func process(_ frame: MotionFeatureFrame) -> [MotionOutputEvent] {
        shakerImpacts = []
        if lastInstrument != configuration.instrument || lastVoice != configuration.thereminVoice {
            if lastInstrument != configuration.instrument { thereminGrip.center(on: frame.gravity) }
            lastInstrument = configuration.instrument
            lastVoice = configuration.thereminVoice
            lastControllerValues = [255, 255, 255]
            isAboveThreshold = false
            selectedDirection = nil
            strokeVector = .init()
            previousGestureTime = nil
            rotationTravel = 0
            rotationSign = 0
            lastTriggerTime = -Double.greatestFiniteMagnitude
        }
        guard configuration.armed else {
            isAboveThreshold = false
            shakeEnergy = MotionShakeEnergy()
            rattleEnergy = 0
            shakerChamber.reset()
            previousGestureTime = nil
            rotationTravel = 0
            return []
        }

        rattleEnergy = configuration.instrument == .shaker ? shakeEnergy.process(frame) : 0
        var events = continuousControllerEvents(frame)
        if configuration.instrument == .thereminFX {
            return events
        }

        let sensitivity = clamped(configuration.sensitivity, 0, 1)
        let threshold = 0.92 - (sensitivity * 0.60)
        let strength = max(frame.accelerationMagnitude, min(3.5, frame.jerk / 15.0) * 0.55)
        let cooldownElapsed = frame.timestamp - lastTriggerTime >= configuration.minimumTriggerInterval

        let elapsed = previousGestureTime.map { frame.timestamp - $0 } ?? 0.01
        previousGestureTime = frame.timestamp
        if elapsed <= 0 || elapsed > 0.1 {
            isAboveThreshold = false
            strokeVector = .init()
            rotationTravel = 0
        }
        let dt = max(0, min(0.025, elapsed))
        let mix = 1 - exp(-dt / 0.008)
        strokeVector = .init(x: strokeVector.x + mix * (frame.acceleration.x - strokeVector.x),
                             y: strokeVector.y + mix * (frame.acceleration.y - strokeVector.y),
                             z: strokeVector.z + mix * (frame.acceleration.z - strokeVector.z))

        switch configuration.instrument {
        case .maraca:
            appendStroke(frame, threshold: threshold * 0.72, strength: strength,
                         cooldownElapsed: cooldownElapsed, events: &events)

        case .cabasa:
            // Physical angular distance, not a timer: slower rolling spaces the teeth
            // farther apart in time, stopping the hand stops new events immediately.
            let rate = frame.rotationRate
            let axis = rate.dominantDirection
            let component: Double
            switch axis {
            case .xPositive, .xNegative: component = rate.x
            case .yPositive, .yNegative: component = rate.y
            case .zPositive, .zNegative: component = rate.z
            }
            let sign = component >= 0 ? 1.0 : -1.0
            if abs(component) < 0.2 { rotationTravel = 0 }
            else {
                if sign != rotationSign { rotationTravel = 0 }
                rotationSign = sign
                rotationTravel += abs(component) * dt
                let toothSpacing = 0.24 - sensitivity * 0.10
                if rotationTravel >= toothSpacing && cooldownElapsed {
                    rotationTravel.formTruncatingRemainder(dividingBy: toothSpacing)
                    selectedDirection = axis
                    events.append(noteEvent(frame, strength: threshold + min(1, abs(component) / 7) * 2, threshold: threshold, direction: axis))
                    lastTriggerTime = frame.timestamp
                }
            }

        case .shaker:
            shakerImpacts = shakerChamber.process(frame, sensitivity: sensitivity, geometry: configuration.chamberGeometry)
            for impact in shakerImpacts {
                events.append(.note(
                    timestamp: impact.timestamp,
                    note: UInt8(clamping: Int(configuration.baseNote) + impact.wall.rawValue),
                    velocity: impact.velocity,
                    channel: min(configuration.midiChannel, 15),
                    direction: impact.wall.direction,
                    duration: max(0.02, min(configuration.noteLength, 1.0))
                ))
            }

        case .tambourine, .handDrum:
            appendStroke(frame, threshold: threshold, strength: strength,
                         cooldownElapsed: cooldownElapsed, events: &events)

        case .thereminFX:
            break
        }

        return events
    }

    private mutating func appendStroke(_ frame: MotionFeatureFrame, threshold: Double, strength: Double,
                                       cooldownElapsed: Bool, events: inout [MotionOutputEvent]) {
        let magnitude = frame.accelerationMagnitude
        let previous = selectedDirection.map { unitVector($0) } ?? .init()
        let projection = strokeVector.x * previous.x + strokeVector.y * previous.y + strokeVector.z * previous.z
        let reversal = isAboveThreshold && projection < -threshold * 0.8
        if magnitude < threshold * 0.42 { isAboveThreshold = false }
        guard magnitude >= threshold, (!isAboveThreshold || reversal), cooldownElapsed else { return }
        var direction = strokeVector.dominantDirection
        // Keep the learned stroke axis through small off-axis movement. Sign still
        // follows the actual stroke; intentional axis changes need 25% dominance.
        if let selectedDirection {
            let axisValue: Double
            switch selectedDirection {
            case .xPositive, .xNegative: axisValue = strokeVector.x
            case .yPositive, .yNegative: axisValue = strokeVector.y
            case .zPositive, .zNegative: axisValue = strokeVector.z
            }
            let maximum = max(abs(strokeVector.x), abs(strokeVector.y), abs(strokeVector.z))
            if abs(axisValue) * 1.25 >= maximum {
                let base = selectedDirection.rawValue / 2 * 2
                direction = MotionDirection(rawValue: base + (axisValue >= 0 ? 0 : 1))!
            }
        }
        selectedDirection = direction
        events.append(noteEvent(frame, strength: strength, threshold: threshold, direction: direction))
        lastTriggerTime = frame.timestamp
        isAboveThreshold = true
    }

    private func unitVector(_ direction: MotionDirection) -> MotionVector {
        switch direction {
        case .xPositive: .init(x: 1)
        case .xNegative: .init(x: -1)
        case .yPositive: .init(y: 1)
        case .yNegative: .init(y: -1)
        case .zPositive: .init(z: 1)
        case .zNegative: .init(z: -1)
        }
    }

    private mutating func noteEvent(
        _ frame: MotionFeatureFrame,
        strength: Double,
        threshold: Double,
        direction: MotionDirection
    ) -> MotionOutputEvent {
        let normalized = normalizedStrength(strength, threshold: threshold)
        let velocity = UInt8(clamping: Int(24 + (103 * sqrt(normalized))))
        let note = noteNumber(for: direction)
        return .note(
            timestamp: frame.timestamp,
            note: note,
            velocity: velocity,
            channel: min(configuration.midiChannel, 15),
            direction: direction,
            duration: max(0.02, min(configuration.noteLength, 1.0))
        )
    }

    private func noteNumber(for direction: MotionDirection) -> UInt8 {
        let base = Int(configuration.baseNote)
        let offset: Int
        switch configuration.instrument {
        case .shaker:
            offset = direction.rawValue
        case .tambourine:
            offset = direction.rawValue.isMultiple(of: 2) ? 0 : 1
        case .maraca:
            offset = direction.rawValue.isMultiple(of: 2) ? 0 : 1
        case .cabasa:
            offset = direction == .zPositive || direction == .zNegative ? 1 : 0
        case .handDrum:
            switch direction {
            case .zPositive, .zNegative: offset = direction == .zPositive ? 0 : 1
            case .xPositive, .xNegative: offset = direction == .xPositive ? 2 : 3
            case .yPositive, .yNegative: offset = direction == .yPositive ? 4 : 5
            }
        case .thereminFX:
            offset = 0
        }
        return UInt8(clamping: base + offset)
    }

    private mutating func continuousControllerEvents(_ frame: MotionFeatureFrame) -> [MotionOutputEvent] {
        let controlInterval = (configuration.instrument == .thereminFX || configuration.instrument == .shaker) ? 1.0 / 100.0 : 1.0 / 30.0
        guard frame.timestamp - lastControlTime >= controlInterval else { return [] }

        let roll = wrappedAngle(frame.roll - rollZero)
        let pitch = wrappedAngle(frame.pitch - pitchZero)
        _ = wrappedAngle(frame.yaw - yawZero)
        let rotation = frame.rotationRate.magnitude

        var values = [
            midiValue(roll, range: -.pi / 2 ... .pi / 2),
            midiValue(pitch, range: -.pi / 2 ... .pi / 2),
            UInt8(clamping: Int(clamped(rotation / 6.0, 0, 1) * 127.0))
        ]
        if configuration.instrument == .thereminFX && frame.gravity.magnitude > 0.5 {
            let vertical = thereminGrip.project(frame.gravity).y
            values[1] = UInt8(clamping: Int((MotionGripTilt.vowelPosition(verticalTilt: vertical) * 127).rounded()))
        }
        var controllers = [configuration.tiltXController, configuration.tiltYController, configuration.rotationController]
        if configuration.instrument == .thereminFX && configuration.thereminVoice == .chimera {
            controllers[2] = 11 // Expression; Classic retains its original rotation CC.
            values[2] = UInt8((MotionThereminVoice.breath(accelerationZ: frame.acceleration.z) * 127).rounded())
        }

        if configuration.instrument == .shaker {
            controllers[2] = 11
            values[2] = UInt8((rattleEnergy * 127).rounded())
        }
        var events: [MotionOutputEvent] = []
        let minimumChange = (configuration.instrument == .thereminFX || configuration.instrument == .shaker) ? 1 : 2
        for index in 0..<values.count where abs(Int(values[index]) - Int(lastControllerValues[index])) >= minimumChange {
            events.append(.controlChange(
                timestamp: frame.timestamp,
                controller: min(controllers[index], 127),
                value: values[index],
                channel: min(configuration.midiChannel, 15)
            ))
            lastControllerValues[index] = values[index]
        }

        lastControlTime = frame.timestamp
        return events
    }

    private func normalizedStrength(_ strength: Double, threshold: Double) -> Double {
        clamped((strength - threshold) / max(0.1, 2.7 - threshold), 0, 1)
    }

    private func midiValue(_ value: Double, range: ClosedRange<Double>) -> UInt8 {
        let normalized = clamped((value - range.lowerBound) / (range.upperBound - range.lowerBound), 0, 1)
        return UInt8(clamping: Int((normalized * 127.0).rounded()))
    }

    private func wrappedAngle(_ angle: Double) -> Double {
        var value = angle
        while value > .pi { value -= 2 * .pi }
        while value < -.pi { value += 2 * .pi }
        return value
    }

    private func clamped(_ value: Double, _ lower: Double, _ upper: Double) -> Double {
        min(upper, max(lower, value))
    }
}
