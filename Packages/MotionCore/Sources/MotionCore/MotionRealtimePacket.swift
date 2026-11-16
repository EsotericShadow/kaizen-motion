import Foundation

/// A compact, fixed-width datagram for phone-to-desktop performance events.
///
/// The packet is deliberately independent of Network.framework and CoreMIDI so
/// the codec remains deterministic and testable on every MotionCore platform.
/// Networking and MIDI delivery happen on non-real-time queues at the edges.
public struct MotionRealtimePacket: Equatable, Sendable {
    public static let byteCount = 32
    public static let protocolVersion: UInt8 = 1

    public enum Message: Equatable, Sendable {
        case transient(
            note: UInt8,
            velocity: UInt8,
            channel: UInt8,
            direction: MotionDirection,
            durationMilliseconds: UInt16
        )
        case controlChange(controller: UInt8, value: UInt8, channel: UInt8)
        case heartbeat(lastReceivedSequence: UInt32)
        case panic
        case clockProbe(token: UInt32)
        case clockReply(token: UInt32, processingMicroseconds: UInt32)
        case performanceState(instrument: UInt8, armed: Bool, voice: UInt8 = 0)
    }

    public var sessionID: UInt32
    public var sequence: UInt32
    public var senderUptimeNanoseconds: UInt64
    public var message: Message

    public init(
        sessionID: UInt32,
        sequence: UInt32,
        senderUptimeNanoseconds: UInt64,
        message: Message
    ) {
        self.sessionID = sessionID
        self.sequence = sequence
        self.senderUptimeNanoseconds = senderUptimeNanoseconds
        self.message = message
    }

    public init?(sessionID: UInt32, sequence: UInt32, event: MotionOutputEvent) {
        switch event {
        case let .note(timestamp, note, velocity, channel, direction, duration):
            self.init(
                sessionID: sessionID,
                sequence: sequence,
                senderUptimeNanoseconds: Self.uptimeNanoseconds(timestamp),
                message: .transient(
                    note: note,
                    velocity: velocity,
                    channel: channel,
                    direction: direction,
                    durationMilliseconds: UInt16(clamping: Int((duration * 1_000).rounded()))
                )
            )
        case let .controlChange(timestamp, controller, value, channel):
            self.init(
                sessionID: sessionID,
                sequence: sequence,
                senderUptimeNanoseconds: Self.uptimeNanoseconds(timestamp),
                message: .controlChange(controller: controller, value: value, channel: channel)
            )
        }
    }

    public func encoded() -> Data {
        var bytes = [UInt8](repeating: 0, count: Self.byteCount)
        bytes[0] = 0x4B // K
        bytes[1] = 0x4D // M
        bytes[2] = 0x4F // O
        bytes[3] = 0x54 // T
        bytes[4] = Self.protocolVersion
        bytes[5] = message.kind.rawValue
        bytes[6] = 0 // flags, reserved for authenticated/encrypted framing
        bytes[7] = 8 // fixed payload width
        bytes.writeBigEndian(sessionID, at: 8)
        bytes.writeBigEndian(sequence, at: 12)
        bytes.writeBigEndian(senderUptimeNanoseconds, at: 16)

        switch message {
        case let .transient(note, velocity, channel, direction, durationMilliseconds):
            bytes[24] = note
            bytes[25] = velocity
            bytes[26] = min(channel, 15)
            bytes[27] = UInt8(direction.rawValue)
            bytes.writeBigEndian(durationMilliseconds, at: 28)

        case let .controlChange(controller, value, channel):
            bytes[24] = min(controller, 127)
            bytes[25] = min(value, 127)
            bytes[26] = min(channel, 15)

        case let .heartbeat(lastReceivedSequence):
            bytes.writeBigEndian(lastReceivedSequence, at: 24)

        case .panic:
            break

        case let .clockProbe(token):
            bytes.writeBigEndian(token, at: 24)

        case let .clockReply(token, processingMicroseconds):
            bytes.writeBigEndian(token, at: 24)
            bytes.writeBigEndian(processingMicroseconds, at: 28)
        case let .performanceState(instrument, armed, voice):
            bytes[24] = instrument
            bytes[25] = armed ? 1 : 0
            bytes[26] = voice
        }

        return Data(bytes)
    }

    public init?(decoding data: Data) {
        guard data.count == Self.byteCount else { return nil }
        let bytes = [UInt8](data)
        guard bytes[0] == 0x4B,
              bytes[1] == 0x4D,
              bytes[2] == 0x4F,
              bytes[3] == 0x54,
              bytes[4] == Self.protocolVersion,
              bytes[6] == 0,
              bytes[7] == 8,
              let kind = MessageKind(rawValue: bytes[5]) else {
            return nil
        }

        sessionID = bytes.readUInt32(at: 8)
        sequence = bytes.readUInt32(at: 12)
        senderUptimeNanoseconds = bytes.readUInt64(at: 16)

        switch kind {
        case .transient:
            guard bytes[24] <= 127,
                  bytes[25] <= 127,
                  bytes[26] <= 15,
                  let direction = MotionDirection(rawValue: Int(bytes[27])) else {
                return nil
            }
            message = .transient(
                note: bytes[24],
                velocity: bytes[25],
                channel: bytes[26],
                direction: direction,
                durationMilliseconds: bytes.readUInt16(at: 28)
            )

        case .controlChange:
            guard bytes[24] <= 127, bytes[25] <= 127, bytes[26] <= 15 else { return nil }
            message = .controlChange(controller: bytes[24], value: bytes[25], channel: bytes[26])

        case .heartbeat:
            message = .heartbeat(lastReceivedSequence: bytes.readUInt32(at: 24))

        case .panic:
            message = .panic

        case .clockProbe:
            message = .clockProbe(token: bytes.readUInt32(at: 24))
        case .performanceState:
            guard bytes[24] <= 5, bytes[25] <= 1, bytes[26] <= 1 else { return nil }
            message = .performanceState(instrument: bytes[24], armed: bytes[25] == 1, voice: bytes[26])

        case .clockReply:
            message = .clockReply(
                token: bytes.readUInt32(at: 24),
                processingMicroseconds: bytes.readUInt32(at: 28)
            )
        }
    }

    private static func uptimeNanoseconds(_ timestamp: TimeInterval) -> UInt64 {
        guard timestamp.isFinite, timestamp > 0 else { return 0 }
        return UInt64(clamping: Int64((timestamp * 1_000_000_000).rounded()))
    }

    fileprivate enum MessageKind: UInt8 {
        case transient = 1
        case controlChange = 2
        case heartbeat = 3
        case panic = 4
        case clockProbe = 5
        case clockReply = 6
        case performanceState = 7
    }
}

private extension MotionRealtimePacket.Message {
    var kind: MotionRealtimePacket.MessageKind {
        switch self {
        case .transient: .transient
        case .controlChange: .controlChange
        case .heartbeat: .heartbeat
        case .panic: .panic
        case .clockProbe: .clockProbe
        case .clockReply: .clockReply
        case .performanceState: .performanceState
        }
    }
}

private extension Array where Element == UInt8 {
    mutating func writeBigEndian(_ value: UInt16, at offset: Int) {
        self[offset] = UInt8(truncatingIfNeeded: value >> 8)
        self[offset + 1] = UInt8(truncatingIfNeeded: value)
    }

    mutating func writeBigEndian(_ value: UInt32, at offset: Int) {
        for index in 0..<4 {
            self[offset + index] = UInt8(truncatingIfNeeded: value >> UInt32((3 - index) * 8))
        }
    }

    mutating func writeBigEndian(_ value: UInt64, at offset: Int) {
        for index in 0..<8 {
            self[offset + index] = UInt8(truncatingIfNeeded: value >> UInt64((7 - index) * 8))
        }
    }

    func readUInt16(at offset: Int) -> UInt16 {
        (UInt16(self[offset]) << 8) | UInt16(self[offset + 1])
    }

    func readUInt32(at offset: Int) -> UInt32 {
        var value: UInt32 = 0
        for index in 0..<4 {
            value = (value << 8) | UInt32(self[offset + index])
        }
        return value
    }

    func readUInt64(at offset: Int) -> UInt64 {
        var value: UInt64 = 0
        for index in 0..<8 {
            value = (value << 8) | UInt64(self[offset + index])
        }
        return value
    }
}
