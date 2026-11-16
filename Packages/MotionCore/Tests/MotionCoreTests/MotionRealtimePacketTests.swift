import Foundation
import Testing
@testable import MotionCore

struct MotionRealtimePacketTests {
    @Test func performanceStateRoundTripsAndRejectsInvalidModes() {
        for mode in UInt8(0)...5 {
            let packet = MotionRealtimePacket(sessionID: 1, sequence: 1, senderUptimeNanoseconds: 1,
                                               message: .performanceState(instrument: mode, armed: true))
            #expect(packet.encoded().count == 32)
            #expect(MotionRealtimePacket(decoding: packet.encoded()) == packet)
        }
        let invalid = MotionRealtimePacket(sessionID: 1, sequence: 1, senderUptimeNanoseconds: 1,
                                           message: .performanceState(instrument: 6, armed: false))
        #expect(MotionRealtimePacket(decoding: invalid.encoded()) == nil)
    }
    @Test func transientRoundTripsInFixedWidthPacket() {
        let source = MotionRealtimePacket(
            sessionID: 0x1020_3040,
            sequence: 42,
            senderUptimeNanoseconds: 9_876_543_210,
            message: .transient(
                note: 70,
                velocity: 118,
                channel: 3,
                direction: .xNegative,
                durationMilliseconds: 75
            )
        )

        let data = source.encoded()

        #expect(data.count == MotionRealtimePacket.byteCount)
        #expect(MotionRealtimePacket(decoding: data) == source)
    }

    @Test func controllerAndClockMessagesRoundTrip() {
        let messages: [MotionRealtimePacket.Message] = [
            .controlChange(controller: 74, value: 96, channel: 2),
            .heartbeat(lastReceivedSequence: 0xABCD_EF12),
            .panic,
            .clockProbe(token: 99),
            .clockReply(token: 99, processingMicroseconds: 318)
        ]

        for (index, message) in messages.enumerated() {
            let source = MotionRealtimePacket(
                sessionID: 7,
                sequence: UInt32(index),
                senderUptimeNanoseconds: UInt64(index) * 1_000,
                message: message
            )
            #expect(MotionRealtimePacket(decoding: source.encoded()) == source)
        }
    }

    @Test func invalidFramingIsRejected() {
        let source = MotionRealtimePacket(
            sessionID: 1,
            sequence: 2,
            senderUptimeNanoseconds: 3,
            message: .panic
        )
        var bytes = [UInt8](source.encoded())
        bytes[0] = 0
        #expect(MotionRealtimePacket(decoding: Data(bytes)) == nil)
        #expect(MotionRealtimePacket(decoding: Data(bytes.dropLast())) == nil)
    }

    @Test func valuesAreBoundedAtTheWireEdge() {
        let source = MotionRealtimePacket(
            sessionID: 1,
            sequence: 2,
            senderUptimeNanoseconds: 3,
            message: .controlChange(controller: 255, value: 240, channel: 99)
        )
        let decoded = MotionRealtimePacket(decoding: source.encoded())
        #expect(decoded?.message == .controlChange(controller: 127, value: 127, channel: 15))
    }

    @Test func analyzerEventConvertsWithoutLosingDirectionOrTiming() {
        let event = MotionOutputEvent.note(
            timestamp: 12.345,
            note: 73,
            velocity: 111,
            channel: 4,
            direction: .zNegative,
            duration: 0.082
        )
        let packet = MotionRealtimePacket(sessionID: 9, sequence: 10, event: event)

        #expect(packet?.senderUptimeNanoseconds == 12_345_000_000)
        #expect(packet?.message == .transient(
            note: 73,
            velocity: 111,
            channel: 4,
            direction: .zNegative,
            durationMilliseconds: 82
        ))
    }
}
