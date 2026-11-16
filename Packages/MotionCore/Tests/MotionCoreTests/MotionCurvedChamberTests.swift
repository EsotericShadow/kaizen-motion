import Foundation
import Testing
@testable import MotionCore

struct MotionCurvedChamberTests {
    @Test func circleAndOvalContactsStayOnTheirTrueBoundaryAndBallFits() {
        for shape in [MotionChamberShape.circle, .oval] {
            for dimensions in [(36.0, 36.0, 1.2), (80.0, 20.0, 12.0), (20.0, 80.0, 12.0)] {
                let geometry = MotionChamberGeometry(widthMM: dimensions.0, heightMM: dimensions.1,
                                                     ballDiameterMM: dimensions.2, shape: shape, grainCount: 1)
                let a = geometry.widthMM / 2_000, b = geometry.effectiveHeightMM / 2_000
                let radius = geometry.ballDiameterMM / 2_000
                var chamber = MotionShakerChamber()
                var contacts = 0
                for index in 0..<160 {
                    let t = Double(index) * 0.01
                    let impacts = chamber.process(.init(timestamp: t, acceleration: .init(x: sin(t * 14) * 2, y: cos(t * 11) * 1.7)),
                                                  sensitivity: 0.8, geometry: geometry)
                    for impact in impacts {
                        contacts += 1
                        #expect(abs(impact.contact.x * impact.contact.x + impact.contact.y * impact.contact.y - 1) < 0.000001)
                    }
                    let x = chamber.ballPosition.x * geometry.travelHalfWidth
                    let y = chamber.ballPosition.y * geometry.travelHalfHeight
                    #expect(x.isFinite && y.isFinite)
                    #expect(x * x / (a * a) + y * y / (b * b) <= 1.000001)
                    for sample in 0..<96 {
                        let angle = Double(sample) * 2 * Double.pi / 96
                        #expect(hypot(a * cos(angle) - x, b * sin(angle) - y) >= radius - 0.00003)
                    }
                }
                #expect(contacts > 0, "shape=\(shape), dimensions=\(dimensions)")
            }
        }
    }

    @Test func contactsRetainChronologyAndCurvedBouncesUseRemainingTravel() {
        for shape in MotionChamberShape.allCases {
            var chamber = MotionShakerChamber()
            let geometry = MotionChamberGeometry(widthMM: 20, heightMM: 30, ballDiameterMM: 8, shape: shape, grainCount: 1)
            var lastContact = -Double.infinity
            var count = 0
            for index in 0..<240 {
                let time = Double(index) * 0.01
                let impacts = chamber.process(.init(timestamp: time, acceleration: .init(x: sin(time * 21) * 3, y: cos(time * 17) * 2)), sensitivity: 0.9, geometry: geometry)
                for impact in impacts {
                    #expect(impact.timestamp >= lastContact)
                    #expect(impact.timestamp <= time && impact.timestamp >= time - 0.010001)
                    lastContact = impact.timestamp
                    count += 1
                }
            }
            #expect(count > 10)
        }
    }

    @Test func circlePreservesTangentialMotionInsteadOfStickingAtContact() {
        var chamber = MotionShakerChamber()
        let geometry = MotionChamberGeometry(shape: .circle, grainCount: 1)
        var hits = 0
        var visited = Set<Int>()
        for index in 0..<400 {
            let time = Double(index) * 0.01
            let impacts = chamber.process(.init(timestamp: time, acceleration: .init(x: sin(time * 8), y: cos(time * 8))), sensitivity: 0.7, geometry: geometry)
            hits += impacts.count
            let position = chamber.ballPosition
            if abs(position.x) > 0.3 || abs(position.y) > 0.3 {
                visited.insert(position.x >= 0 ? (position.y >= 0 ? 0 : 1) : (position.y >= 0 ? 2 : 3))
            }
        }
        #expect(hits > 0)
        #expect(visited.count == 4)
    }

    @Test func circleUsesOneDiameterAndShapeChangeDoesNotEmitResizeHits() {
        let circle = MotionChamberGeometry(widthMM: 40, heightMM: 80, shape: .circle, grainCount: 1)
        #expect(circle.effectiveHeightMM == 40)
        var chamber = MotionShakerChamber()
        for index in 0..<20 {
            _ = chamber.process(.init(timestamp: Double(index) * 0.01, acceleration: .init(x: 2, y: 2)), sensitivity: 0.62)
        }
        #expect(chamber.process(.init(timestamp: 0.2, acceleration: .init()), sensitivity: 0.62, geometry: circle).isEmpty)
    }
}
