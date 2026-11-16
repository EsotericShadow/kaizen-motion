import Testing
@testable import MotionCore

struct MotionShakerChamberTests {
    @Test func forwardBackTiltUsesGravityZWithUserCorrectedDirectionAndSensitivity() {
        var side = MotionShakerChamber()
        var forward = MotionShakerChamber()
        let neutral = MotionFeatureFrame(timestamp: 0, acceleration: .init(), gravity: .init(y: -1))
        _ = side.process(neutral, sensitivity: 0.62, geometry: .init(grainCount: 1))
        _ = forward.process(neutral, sensitivity: 0.62, geometry: .init(grainCount: 1))
        var verticalHits = 0
        for index in 1..<80 {
            let lean = (index / 20).isMultiple(of: 2) ? 0.4 : -0.4
            let remaining = (1 - lean * lean).squareRoot()
            let x = side.process(.init(timestamp: Double(index) * 0.01, acceleration: .init(),
                                       gravity: .init(x: lean, y: -remaining)), sensitivity: 0.62, geometry: .init(grainCount: 1))
            let y = forward.process(.init(timestamp: Double(index) * 0.01, acceleration: .init(),
                                          gravity: .init(y: -(1 - (lean / 1.6) * (lean / 1.6)).squareRoot(), z: -lean / 1.6)), sensitivity: 0.62, geometry: .init(grainCount: 1))
            #expect(abs(side.ballPosition.x - forward.ballPosition.y) < 0.000001)
            #expect(x.map(\.velocity) == y.map(\.velocity))
            verticalHits += y.count
        }
        #expect(verticalHits > 0)
        forward.reset()
        let newGrip = MotionFeatureFrame(timestamp: 10, acceleration: .init(), gravity: .init(y: -0.6, z: 0.8))
        for index in 0..<30 {
            var frame = newGrip
            frame.timestamp += Double(index) * 0.01
            #expect(forward.process(frame, sensitivity: 0.62, geometry: .init(grainCount: 1)).isEmpty)
        }
        #expect(abs(forward.ballPosition.y) < 0.000001)
    }
    @Test func portraitGravityCannotPinYAxisAndEqualStrokesHaveEqualTravelAndTiming() {
        var horizontal = MotionShakerChamber()
        var vertical = MotionShakerChamber()
        var xTimes: [Int] = []
        var yTimes: [Int] = []
        for index in 0..<100 {
            let drive = (index / 25).isMultiple(of: 2) ? 0.55 : -0.55
            let x = horizontal.process(.init(timestamp: Double(index) * 0.01,
                                             acceleration: .init(x: drive), gravity: .init(y: -1)), sensitivity: 0.62, geometry: .init(grainCount: 1))
            let y = vertical.process(.init(timestamp: Double(index) * 0.01,
                                           acceleration: .init(y: drive), gravity: .init(y: -1)), sensitivity: 0.62, geometry: .init(grainCount: 1))
            #expect(abs(horizontal.ballPosition.x - vertical.ballPosition.y) < 0.000001)
            #expect(x.map(\.velocity) == y.map(\.velocity))
            if !x.isEmpty { xTimes.append(index) }
            if !y.isEmpty { yTimes.append(index) }
        }
        #expect(!yTimes.isEmpty)
        #expect(xTimes == yTimes)
    }
    @Test func accelerationDoesNotMakeSoundBeforeContact() {
        var chamber = MotionShakerChamber()
        let hits = chamber.process(.init(timestamp: 0, acceleration: .init(x: 1)), sensitivity: 0.62, geometry: .init(grainCount: 1))
        #expect(hits.isEmpty)
        #expect(chamber.ballPosition.x < 0 && chamber.ballPosition.x > -1)
    }

    @Test func horizontalContactHasAnExactMidWallOrigin() {
        var chamber = MotionShakerChamber()
        var impacts: [MotionShakerChamber.Impact] = []
        for index in 0..<30 {
            impacts += chamber.process(.init(timestamp: Double(index) * 0.01, acceleration: .init(x: 1)), sensitivity: 0.62, geometry: .init(grainCount: 1))
        }
        #expect(!impacts.isEmpty)
        #expect(impacts.allSatisfy { $0.wall == .left && abs($0.coordinate - 0.5) < 0.000001 })
    }

    @Test func diagonalContactsHaveBoundedDistinctPositionsAndBallNeverEscapes() {
        var chamber = MotionShakerChamber()
        var contacts: [MotionShakerChamber.Impact] = []
        for index in 0..<500 {
            let sign = (index / 23).isMultiple(of: 2) ? 1.0 : -1.0
            contacts += chamber.process(.init(timestamp: Double(index) * 0.01,
                                             acceleration: .init(x: sign * 3, y: sign * 1.1),
                                             rotationRate: .init(z: sign * 4)), sensitivity: 0.8, geometry: .init(grainCount: 1))
            let ball = chamber.ballPosition
            #expect(ball.x.isFinite && ball.y.isFinite && abs(ball.x) <= 1 && abs(ball.y) <= 1)
        }
        #expect(Set(contacts.map { $0.wall.rawValue }).count == 4)
        #expect(contacts.allSatisfy { (0...1).contains($0.coordinate) })
        #expect(contacts.contains { abs($0.coordinate - 0.5) > 0.1 })
    }

    @Test func restingGravityDoesNotCreateHitsAndBackgroundGapsDoNotReplay() {
        var chamber = MotionShakerChamber()
        var late = 0
        for index in 0..<300 {
            let impacts = chamber.process(.init(timestamp: Double(index) * 0.01, acceleration: .init(), gravity: .init(y: -1)), sensitivity: 0.62, geometry: .init(grainCount: 1))
            if index > 200 { late += impacts.count }
        }
        #expect(late == 0)
        let afterGap = chamber.process(.init(timestamp: 100, acceleration: .init()), sensitivity: 0.62, geometry: .init(grainCount: 1))
        #expect(afterGap.isEmpty)
    }
}
