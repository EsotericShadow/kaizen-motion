import Combine
import Foundation
import MotionCore

struct MotionWallPulse {
    let impact: MotionShakerChamber.Impact
    let started: Date
}
struct MotionShakerDisplay {
    var grains: [MotionVector] = []
    var position = MotionVector()
    var trail: [MotionVector] = []
    var pulses: [MotionWallPulse] = []
}

final class MotionUIStateStore: ObservableObject {
    @Published private(set) var latestFrame = MotionFeatureFrame(timestamp: 0, acceleration: .init())
    @Published private(set) var lastVelocity: UInt8 = 0
    @Published private(set) var lastDirection: MotionDirection = .zPositive
    @Published private(set) var triggerCount = 0
    @Published private(set) var controllerValues: [UInt8] = [64, 64, 0]
    @Published var status: MotionCaptureStatus = .stopped
    @Published private(set) var shakerDisplay = MotionShakerDisplay()

    private struct Pending {
        var frame: MotionFeatureFrame
        var events: [MotionOutputEvent]
        var noteCount: Int
        var synthetic: Bool
        var position: MotionVector?
        var grains: [MotionVector]
        var impacts: [MotionShakerChamber.Impact]
    }
    // Sensor-side publication only. Never accessed from an audio callback.
    private let publicationLock = NSLock()
    private var pending: Pending?
    private var publicationScheduled = false

    func submit(frame: MotionFeatureFrame, events: [MotionOutputEvent], isSynthetic: Bool = false,
                shakerPosition: MotionVector? = nil, shakerGrains: [MotionVector] = [],
                shakerImpacts: [MotionShakerChamber.Impact] = []) {
        publicationLock.lock()
        let previous = pending
        let count = events.reduce(0) { value, event in if case .note = event { return value + 1 }; return value }
        // Keep the newest measured state, bounded telemetry and one contact/surface.
        // A busy screen can never build a FIFO of obsolete grain positions.
        var impacts = previous?.impacts ?? []
        for impact in shakerImpacts {
            impacts.removeAll { $0.wall == impact.wall }
            impacts.append(impact)
        }
        pending = Pending(frame: frame, events: Array(((previous?.events ?? []) + events).suffix(64)),
                          noteCount: (previous?.noteCount ?? 0) + count, synthetic: isSynthetic,
                          position: shakerPosition, grains: shakerGrains, impacts: impacts)
        let shouldSchedule = !publicationScheduled
        publicationScheduled = true
        publicationLock.unlock()
        if shouldSchedule {
            DispatchQueue.main.asyncAfter(deadline: .now() + .milliseconds(16)) { [weak self] in self?.publishPending() }
        }
    }

    private func publishPending() {
        publicationLock.lock()
        let value = pending
        pending = nil
        publicationScheduled = false
        publicationLock.unlock()
        guard let value else { return }
        receive(frame: value.frame, events: value.events, isSynthetic: value.synthetic,
                shakerPosition: value.position, shakerGrains: value.grains, shakerImpacts: value.impacts,
                noteCount: value.noteCount)
    }

    func clearChamberHistory() {
        var display = shakerDisplay
        display.trail = []
        display.pulses = []
        shakerDisplay = display
    }

    func receive(frame: MotionFeatureFrame, events: [MotionOutputEvent], isSynthetic: Bool = false,
                 shakerPosition: MotionVector? = nil, shakerGrains: [MotionVector] = [], shakerImpacts: [MotionShakerChamber.Impact] = [], noteCount: Int? = nil) {
        if !isSynthetic {
            latestFrame = frame
        }
        if let shakerPosition, !isSynthetic {
            let now = Date()
            var display = shakerDisplay
            display.position = shakerPosition
            display.grains = shakerGrains
            display.trail = Array((display.trail + [shakerPosition]).suffix(10))
            display.pulses.removeAll { now.timeIntervalSince($0.started) >= 0.65 }
            for impact in shakerImpacts {
                display.pulses.removeAll { $0.impact.wall == impact.wall }
                display.pulses.append(MotionWallPulse(impact: impact, started: now.addingTimeInterval(min(0, impact.timestamp - frame.timestamp))))
            }
            shakerDisplay = display
        }

        for event in events {
            switch event {
            case let .note(_, _, velocity, _, direction, _):
                lastDirection = direction
                lastVelocity = velocity
                if noteCount == nil { triggerCount &+= 1 }
            case let .controlChange(_, controller, value, _):
                guard !isSynthetic else { continue }
                switch controller {
                case 74: controllerValues[0] = value
                case 71: controllerValues[1] = value
                case 1, 11: controllerValues[2] = value
                default: break
                }
            }
        }
        if let noteCount { triggerCount &+= noteCount }
    }
}
