import Testing
@testable import MotionCore

struct MotionChamberGeometryTests {
    @Test func yFeelSettingsChangeDirectionAndScaleWithoutChangingSizes() {
        func position(_ gain: Double, _ inverted: Bool) -> Double {
            var chamber = MotionShakerChamber()
            let geometry = MotionChamberGeometry(yTiltSensitivity: gain, invertY: inverted, grainCount: 1)
            _ = chamber.process(.init(timestamp: 0, acceleration: .init(), gravity: .init(y: -1)), sensitivity: 0.62, geometry: geometry)
            for index in 1...3 {
                _ = chamber.process(.init(timestamp: Double(index) * 0.01, acceleration: .init(),
                                           gravity: .init(y: -(0.99).squareRoot(), z: 0.1)), sensitivity: 0.62, geometry: geometry)
            }
            return chamber.ballPosition.y
        }
        let normal = position(1, false)
        let reverse = position(1, true)
        #expect(normal > 0 && reverse < 0)
        #expect(abs(normal + reverse) < 0.000001)
        #expect(abs(position(4, false) / normal - 4) < 0.000001)
        let validated = MotionChamberGeometry(yTiltSensitivity: 99, invertY: false).validated
        #expect(validated.yTiltSensitivity == 4 && !validated.invertY)
    }
    private func firstImpact(_ geometry: MotionChamberGeometry) -> Int {
        var chamber = MotionShakerChamber()
        var geometry = geometry
        geometry.grainCount = 1
        for index in 0..<100 {
            let impacts = chamber.process(.init(timestamp: Double(index) * 0.01, acceleration: .init(x: 0.25)),
                                          sensitivity: 0.62, geometry: geometry)
            if !impacts.isEmpty { return index }
        }
        return 100
    }
    @Test func widerBoxIncreasesFlightTimeAndBiggerBallContactsSooner() {
        #expect(firstImpact(.init(widthMM: 80)) > firstImpact(.init(widthMM: 20)))
        #expect(firstImpact(.init(ballDiameterMM: 12)) < firstImpact(.init(ballDiameterMM: 1)))
    }
    @Test func invalidDimensionsAreSafeAndLiveResizeDoesNotForgeAnImpact() {
        let invalid = MotionChamberGeometry(widthMM: .nan, heightMM: -1, ballDiameterMM: .infinity)
        #expect(invalid.widthMM == 36 && invalid.heightMM == 20 && invalid.ballDiameterMM == 1.2)
        var chamber = MotionShakerChamber()
        for index in 0..<30 {
            _ = chamber.process(.init(timestamp: Double(index) * 0.01, acceleration: .init(x: 2)), sensitivity: 0.62,
                                geometry: .init(widthMM: 80))
        }
        let hits = chamber.process(.init(timestamp: 0.3, acceleration: .init()), sensitivity: 0.62,
                                   geometry: .init(widthMM: 20, ballDiameterMM: 12))
        #expect(hits.isEmpty)
        #expect(abs(chamber.ballPosition.x) <= 1)
    }
}
