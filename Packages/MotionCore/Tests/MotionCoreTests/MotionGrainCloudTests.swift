import Foundation
import Testing
@testable import MotionCore

struct MotionGrainCloudTests {
    @Test func defaultFillContainsIndependentGrainsAndAllThreeAxesCanExciteIt() {
        for axis in 0..<3 {
            var chamber = MotionShakerChamber()
            var impacts: [MotionShakerChamber.Impact] = []
            let geometry = MotionChamberGeometry()
            _ = chamber.process(.init(timestamp: 0, acceleration: .init()), sensitivity: 0.7, geometry: geometry)
            #expect(chamber.grainPositions.count == 48)
            let initial = chamber.grainPositions
            for index in 1..<100 {
                let sign = (index / 12).isMultiple(of: 2) ? 1.4 : -1.4
                let drive = MotionVector(x: axis == 0 ? sign : 0, y: axis == 1 ? sign : 0, z: axis == 2 ? sign : 0)
                impacts += chamber.process(.init(timestamp: Double(index) * 0.01, acceleration: drive), sensitivity: 0.7, geometry: geometry)
                #expect(chamber.grainPositions.allSatisfy { abs($0.x) <= 1.000001 && abs($0.y) <= 1.000001 && abs($0.z) <= 1.000001 })
            }
            #expect(initial != chamber.grainPositions)
            #expect(impacts.contains { axis == 2 ? ($0.wall == .front || $0.wall == .back) : axis == 0 ? ($0.wall == .left || $0.wall == .right) : ($0.wall == .top || $0.wall == .bottom) })
            #expect(impacts.contains { $0.beadCount > 1 })
        }
    }

    @Test func grainsStayInsideEveryShapeAndStopSoundingAfterSettling() {
        for shape in MotionChamberShape.allCases {
            var chamber = MotionShakerChamber()
            let geometry = MotionChamberGeometry(widthMM: 52, heightMM: 26, shape: shape, grainCount: 48)
            var lateHits = 0
            for index in 0..<500 {
                let t = Double(index) * 0.01
                let drive = index < 70 ? MotionVector(x: sin(t * 20), y: cos(t * 17), z: sin(t * 13)) : .init()
                let contacts = chamber.process(.init(timestamp: t, acceleration: drive, gravity: .init(y: -1)), sensitivity: 0.7, geometry: geometry)
                if index > 400 { lateHits += contacts.count }
                if shape != .box {
                    let a = geometry.widthMM / 2_000, b = geometry.effectiveHeightMM / 2_000
                    for grain in chamber.grainPositions {
                        let x = grain.x * geometry.travelHalfWidth, y = grain.y * geometry.travelHalfHeight
                        #expect(x * x / (a * a) + y * y / (b * b) <= 1.000001)
                    }
                }
                for contact in contacts where contact.wall == .front || contact.wall == .back {
                    #expect(abs(contact.contact.z) == 1)
                }
            }
            #expect(lateHits == 0)
        }
    }

    @Test func fillAndDepthAreValidatedAndLargeGrainsCannotOverfill() {
        let geometry = MotionChamberGeometry(widthMM: 20, heightMM: 20, ballDiameterMM: 12, depthMM: 16, grainCount: 64)
        #expect(geometry.effectiveGrainCount < 8)
        #expect(MotionChamberGeometry(depthMM: .nan, grainCount: 999).validated.depthMM == 24)
        #expect(MotionChamberGeometry(depthMM: .nan, grainCount: 999).validated.grainCount == 64)
        var chamber = MotionShakerChamber()
        _ = chamber.process(.init(timestamp: 0, acceleration: .init()), sensitivity: 0.62)
        #expect(chamber.process(.init(timestamp: 0.01, acceleration: .init()), sensitivity: 0.62, geometry: geometry).isEmpty)
        #expect(chamber.grainPositions.count == geometry.effectiveGrainCount)
    }
}
