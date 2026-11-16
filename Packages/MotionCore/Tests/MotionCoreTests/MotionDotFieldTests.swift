import Foundation
import Testing
@testable import MotionCore

struct MotionDotFieldTests {
    @Test func freshInstallShowsOneCompositeDot() {
        #expect(MotionDotField.defaultCount == 1)
        #expect(MotionDotField.channels(count: MotionDotField.defaultCount) == [.composite])
        #expect(MotionDotField.countRange == 1...12)
    }

    @Test func countIsClampedAndRevealsChannelsInOrder() {
        #expect(MotionDotField.channels(count: 0) == [.composite])
        #expect(MotionDotField.channels(count: 1) == [.composite])
        #expect(MotionDotField.channels(count: 4) == [.composite, .accelerationX, .accelerationY, .accelerationZ])
        #expect(MotionDotField.channels(count: 99).count == 12)
        #expect(MotionDotField.channels(count: 12).last == .velocity)
        #expect(MotionDotField.clampedCount(13) == 12)
        #expect(MotionDotField.clampedCount(-3) == 1)
    }

    @Test func everyChannelOwnsOneCellOfTheFourByThreeField() {
        let cells = MotionDotChannel.allCases.map { "\($0.cell.column),\($0.cell.row)" }
        #expect(Set(cells).count == 12)
        #expect(MotionDotChannel.allCases.allSatisfy { (0..<4).contains($0.cell.column) && (0..<3).contains($0.cell.row) })
        // Each axis column holds that axis's acceleration, rotation rate and angle.
        #expect(MotionDotChannel.accelerationX.cell.column == MotionDotChannel.gyroX.cell.column)
        #expect(MotionDotChannel.gyroX.cell.column == MotionDotChannel.pitch.cell.column)
        #expect(MotionDotChannel.gyroY.cell.column == MotionDotChannel.roll.cell.column)
        #expect(MotionDotChannel.gyroZ.cell.column == MotionDotChannel.yaw.cell.column)
    }

    @Test func restingFrameLeavesEveryDotHome() {
        let samples = MotionDotField.samples(
            frame: MotionFeatureFrame(timestamp: 0, acceleration: .init()),
            noteVelocity: 0,
            sensitivity: 0.62
        )
        #expect(samples.map(\.channel) == MotionDotChannel.allCases)
        for sample in samples {
            #expect(abs(sample.dx) < 1e-12)
            #expect(abs(sample.dy) < 1e-12)
            #expect(sample.level < 1e-12)
        }
    }

    @Test func axisChannelsMoveTheWayTheDeviceMoves() {
        let frame = MotionFeatureFrame(
            timestamp: 1,
            acceleration: .init(x: 0.6, y: 0.5, z: -0.4),
            rotationRate: .init(x: 2, y: -2, z: 1.5),
            roll: 0.4,
            pitch: 0.3,
            yaw: 0.2,
            jerk: 12
        )
        let samples = Dictionary(uniqueKeysWithValues: MotionDotField.samples(
            frame: frame,
            noteVelocity: 99,
            sensitivity: 0.62
        ).map { ($0.channel, $0) })

        #expect(samples[.accelerationX]!.dx > 0)      // device +X is screen right
        #expect(samples[.accelerationY]!.dy < 0)      // device +Y is screen up
        #expect(samples[.accelerationZ]!.depth < 0)   // pulled away from the viewer
        #expect(samples[.gyroX]!.dy < 0)
        #expect(samples[.gyroY]!.dx < 0)
        #expect(samples[.gyroZ]!.dx < 0)              // counter-clockwise spin arcs left
        #expect(samples[.roll]!.dx > 0)
        #expect(samples[.pitch]!.dy < 0)
        #expect(samples[.jerk]!.level > 0 && samples[.jerk]!.level < 1)
        #expect(abs(samples[.velocity]!.level - 99.0 / 127.0) < 1e-12)
        #expect(samples[.composite]!.level > 0)
        #expect(samples[.composite]!.dx > 0 && samples[.composite]!.dy < 0)
        for sample in samples.values {
            #expect(abs(sample.dx) <= 1 && abs(sample.dy) <= 1)
            #expect((0...1).contains(sample.level))
        }
    }

    @Test func attitudeIsMeasuredFromCentre() {
        let frame = MotionFeatureFrame(timestamp: 0, acceleration: .init(), roll: 0.9, pitch: -0.2, yaw: 3.0)
        let samples = MotionDotField.samples(
            frame: frame,
            reference: MotionAttitudeReference(frame: frame),
            noteVelocity: 0,
            sensitivity: 0.62
        )
        for channel in [MotionDotChannel.roll, .pitch, .yaw] {
            #expect(abs(samples[channel.rawValue].dx) < 1e-12)
            #expect(abs(samples[channel.rawValue].dy) < 1e-12)
        }
    }

    @Test func accelerationMagnitudeDrivesGlobalEnergy() {
        let still = MotionFeatureFrame(timestamp: 0, acceleration: .init())
        let shaken = MotionFeatureFrame(timestamp: 0, acceleration: .init(x: 1.8))
        #expect(MotionDotField.globalEnergy(still, sensitivity: 0.62) == 0)
        #expect(MotionDotField.globalEnergy(shaken, sensitivity: 0.62) > 0.8)
        #expect(MotionDotField.globalEnergy(shaken, sensitivity: 1) > MotionDotField.globalEnergy(shaken, sensitivity: 0))
    }

    @Test func displayFieldDoesNotChangeTheWirePacket() {
        #expect(MotionRealtimePacket.byteCount == 32)
    }
}
