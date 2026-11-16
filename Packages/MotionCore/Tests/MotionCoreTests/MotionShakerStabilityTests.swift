import Testing
@testable import MotionCore

struct MotionShakerStabilityTests {
    @Test func delayedSensorCallbackPreservesCloudInsteadOfReseedingIt() {
        var chamber = MotionShakerChamber()
        for i in 0..<20 {
            _ = chamber.process(.init(timestamp: Double(i) * 0.01, acceleration: .init(x: 1, y: -0.7, z: 0.6)), sensitivity: 0.7)
        }
        let positions = chamber.grainPositions
        let hits = chamber.process(.init(timestamp: 0.5, acceleration: .init(x: 1)), sensitivity: 0.7)
        #expect(hits.isEmpty)
        #expect(chamber.grainPositions == positions)
        _ = chamber.process(.init(timestamp: 0.51, acceleration: .init(x: 1)), sensitivity: 0.7)
        #expect(chamber.grainPositions != positions)
    }

    @Test func quietHandInputCannotFreezeGrainsThatStillHaveMomentum() {
        var chamber = MotionShakerChamber()
        let geometry = MotionChamberGeometry(widthMM: 80, heightMM: 80, grainCount: 1)
        var atSeventyFour = MotionVector()
        var after = MotionVector()
        for i in 0..<80 {
            _ = chamber.process(.init(timestamp: Double(i) * 0.01, acceleration: .init(x: 0.03)), sensitivity: 0.7, geometry: geometry)
            if i == 74 { atSeventyFour = chamber.ballPosition }
            if i == 79 { after = chamber.ballPosition }
        }
        #expect(after != atSeventyFour)
    }
}
