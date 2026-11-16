import CoreMotion
import Foundation
import MotionCore

enum MotionCaptureStatus: Equatable {
    case stopped
    case running
    case unavailable
    case failed(String)

    var label: String {
        switch self {
        case .stopped: "Paused"
        case .running: "Motion live"
        case .unavailable: "Motion unavailable"
        case let .failed(message): message
        }
    }
}

final class MotionCapture: @unchecked Sendable {
    typealias FeatureHandler = @Sendable (MotionFeatureFrame) -> Void
    typealias StatusHandler = @Sendable (MotionCaptureStatus) -> Void

    private let manager = CMMotionManager()
    private let queue: OperationQueue = {
        let queue = OperationQueue()
        queue.name = "com.kaizendsp.motion.capture"
        queue.qualityOfService = .userInteractive
        queue.maxConcurrentOperationCount = 1
        return queue
    }()
    private var extractor = MotionFeatureExtractor()

    func start(onFeature: @escaping FeatureHandler, onStatus: @escaping StatusHandler) {
        guard manager.isDeviceMotionAvailable else {
            onStatus(.unavailable)
            return
        }

        guard !manager.isDeviceMotionActive else {
            onStatus(.running)
            return
        }

        extractor.reset()
        manager.deviceMotionUpdateInterval = 1.0 / 100.0
        manager.showsDeviceMovementDisplay = true
        manager.startDeviceMotionUpdates(using: .xArbitraryZVertical, to: queue) { [weak self] motion, error in
            guard let self else { return }
            if let error {
                onStatus(.failed(error.localizedDescription))
                return
            }
            guard let motion else { return }

            let frame = self.extractor.process(
                timestamp: motion.timestamp,
                userAcceleration: MotionVector(
                    x: motion.userAcceleration.x,
                    y: motion.userAcceleration.y,
                    z: motion.userAcceleration.z
                ),
                rotationRate: MotionVector(
                    x: motion.rotationRate.x,
                    y: motion.rotationRate.y,
                    z: motion.rotationRate.z
                ),
                roll: motion.attitude.roll,
                pitch: motion.attitude.pitch,
                yaw: motion.attitude.yaw,
                gravity: .init(x: motion.gravity.x, y: motion.gravity.y, z: motion.gravity.z)
            )
            onFeature(frame)
        }
        onStatus(.running)
    }

    func stop() {
        manager.stopDeviceMotionUpdates()
    }
}
