import Testing
@testable import MotionCore

struct MotionAnalyzerTests {
    @Test func restingPhoneRemainsQuietAtDefaultSensitivity() {
        var analyzer = MotionAnalyzer()
        for index in 0..<100 {
            #expect(noteNumber(in: analyzer.process(frame(time: Double(index) * 0.01, x: 0.001, jerk: 1))) == nil)
        }
    }

    @Test func shakerEmitsOnlyTheFourWallNotesFromActualContacts() {
        for (x, y, expectedNote) in [(1.0, 0.0, 70), (-1.0, 0.0, 71), (0.0, -1.0, 72), (0.0, 1.0, 73)] {
            var analyzer = MotionAnalyzer(configuration: .init(chamberGeometry: .init(grainCount: 1)))
            var notes: [UInt8] = []
            for index in 0..<30 {
                let events = analyzer.process(frame(time: Double(index) * 0.01, x: x, y: y, jerk: 10))
                notes += events.compactMap { if case let .note(_, note, _, _, _, _) = $0 { return note }; return nil }
            }
            #expect(!notes.isEmpty)
            #expect(notes.allSatisfy { $0 == UInt8(expectedNote) })
        }
    }

    @Test func largerMotionCreatesStrongerWallImpacts() {
        func peak(_ acceleration: Double) -> UInt8 {
            var analyzer = MotionAnalyzer()
            var peak: UInt8 = 0
            for index in 0..<30 {
                for event in analyzer.process(frame(time: Double(index) * 0.01, x: acceleration, jerk: 0)) {
                    if case let .note(_, _, velocity, _, _, _) = event { peak = max(peak, velocity) }
                }
            }
            return peak
        }
        let gentle = peak(0.38)
        #expect(gentle > 0)
        #expect(peak(2.2) > gentle)
    }

    @Test func disarmedAnalyzerEmitsNothing() {
        var configuration = MotionMappingConfiguration()
        configuration.armed = false
        var analyzer = MotionAnalyzer(configuration: configuration)

        let events = analyzer.process(strongFrame(time: 0))

        #expect(events.isEmpty)
    }

    @Test func cooldownPreventsDoubleTrigger() {
        var analyzer = MotionAnalyzer(configuration: .init(instrument: .handDrum, sensitivity: 0.8, minimumTriggerInterval: 0.1))
        let first = analyzer.process(strongFrame(time: 0.1))
        _ = analyzer.process(frame(time: 0.12, x: 0.01, jerk: 0))
        let tooSoon = analyzer.process(strongFrame(time: 0.15))

        #expect(noteNumber(in: first) != nil)
        #expect(noteNumber(in: tooSoon) == nil)
    }

    @Test func thereminProducesControllersWithoutNotes() {
        var analyzer = MotionAnalyzer(configuration: .init(instrument: .thereminFX))
        let events = analyzer.process(MotionFeatureFrame(
            timestamp: 0.1,
            acceleration: .init(),
            rotationRate: .init(x: 2, y: 0, z: 0),
            roll: .pi / 3,
            pitch: -.pi / 4,
            jerk: 0
        ))

        #expect(events.count >= 2)
        #expect(events.allSatisfy {
            if case .controlChange = $0 { return true }
            return false
        })
    }

    @Test func maracaFollowsStrokeReversalsInsteadOfRepeatingOnATimer() {
        var analyzer = MotionAnalyzer(configuration: .init(instrument: .maraca, sensitivity: 0.8, minimumTriggerInterval: 0.03))
        var heldNotes = 0
        for index in 0..<20 {
            heldNotes += analyzer.process(frame(time: Double(index) * 0.01, x: 1.7, jerk: 12)).filter { if case .note = $0 { true } else { false } }.count
        }
        #expect(heldNotes == 1)
        #expect(noteNumber(in: analyzer.process(frame(time: 0.21, x: -1.7, jerk: 12))) == 71)
    }

    @Test func tambourineArticulationFollowsDirectionNotHitCounter() {
        var analyzer = MotionAnalyzer(configuration: .init(instrument: .tambourine))
        let first = noteNumber(in: analyzer.process(frame(time: 0, x: 1.8, jerk: 0)))
        _ = analyzer.process(frame(time: 0.04, x: 0, jerk: 0))
        let repeatHit = noteNumber(in: analyzer.process(frame(time: 0.08, x: 1.8, jerk: 0)))
        let reverse = noteNumber(in: analyzer.process(frame(time: 0.16, x: -1.8, jerk: 0)))
        #expect(first == 54 && repeatHit == first && reverse == 55)
    }

    @Test func drumDirectionIsStableNearDiagonalButAllowsIntentionalAxisChange() {
        var analyzer = MotionAnalyzer(configuration: .init(instrument: .handDrum))
        #expect(noteNumber(in: analyzer.process(frame(time: 0, x: 1.4, y: 1.3, jerk: 0))) == 38)
        _ = analyzer.process(frame(time: 0.04, jerk: 0))
        #expect(noteNumber(in: analyzer.process(frame(time: 0.08, x: 1.3, y: 1.4, jerk: 0))) == 38)
        _ = analyzer.process(frame(time: 0.12, jerk: 0))
        #expect(noteNumber(in: analyzer.process(frame(time: 0.16, x: 0.3, y: 1.7, jerk: 0))) == 40)
    }

    @Test func cabasaRequiresAngularTravelAndCannotRepeatAtRest() {
        var analyzer = MotionAnalyzer(configuration: .init(instrument: .cabasa, minimumTriggerInterval: 0.01))
        var notes = 0
        for index in 0..<100 {
            let t = Double(index) * 0.01
            notes += analyzer.process(.init(timestamp: t, acceleration: .init(), rotationRate: .init(z: 2))).filter { if case .note = $0 { true } else { false } }.count
        }
        #expect(notes >= 8 && notes <= 14)
        for index in 100..<140 {
            #expect(noteNumber(in: analyzer.process(frame(time: Double(index) * 0.01, jerk: 0))) == nil)
        }
    }

    private func frame(time: Double, x: Double = 0, y: Double = 0, z: Double = 0, jerk: Double) -> MotionFeatureFrame {
        MotionFeatureFrame(
            timestamp: time,
            acceleration: .init(x: x, y: y, z: z),
            accelerationMagnitude: MotionVector(x: x, y: y, z: z).magnitude,
            jerk: jerk
        )
    }

    private func strongFrame(time: Double) -> MotionFeatureFrame {
        frame(time: time, x: 1.8, jerk: 24)
    }

    private func noteVelocity(in events: [MotionOutputEvent]) -> UInt8? {
        for event in events {
            if case let .note(_, _, velocity, _, _, _) = event { return velocity }
        }
        return nil
    }

    private func noteNumber(in events: [MotionOutputEvent]) -> UInt8? {
        for event in events {
            if case let .note(_, note, _, _, _, _) = event { return note }
        }
        return nil
    }
}
