import Foundation
import Combine
import MotionCore

// Status is not exercised by this macOS publication harness.
enum MotionCaptureStatus { case stopped }

@main struct PublicationCheck {
    @MainActor static func main() async {
        let store = MotionUIStateStore()
        var framePublications = 0
        let subscription = store.$latestFrame.dropFirst().sink { _ in framePublications += 1 }
        for index in 0..<1000 {
            store.submit(frame: .init(timestamp: Double(index), acceleration: .init()),
                         events: [.note(timestamp: Double(index), note: 70, velocity: 90, channel: 0, direction: .xPositive, duration: 0.05)],
                         shakerPosition: .init(x: Double(index)), shakerGrains: [.init(x: Double(index))])
        }
        try? await Task.sleep(nanoseconds: 100_000_000)
        precondition(framePublications == 1, "Screen update backlog was not coalesced")
        precondition(store.latestFrame.timestamp == 999, "Published stale sensor state")
        precondition(store.shakerDisplay.grains.first?.x == 999, "Published stale grain state")
        precondition(store.triggerCount == 1000, "Coalescing lost the telemetry count")
        withExtendedLifetime(subscription) {}
        print("PASS: 1000 queued sensor updates -> one latest screen snapshot; all 1000 note counts retained")
    }
}
