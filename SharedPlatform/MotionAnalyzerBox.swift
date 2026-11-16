import Foundation
import MotionCore

final class MotionAnalyzerBox: @unchecked Sendable {
    private let lock = NSLock()
    private var analyzer: MotionAnalyzer

    init(configuration: MotionMappingConfiguration = .init()) {
        analyzer = MotionAnalyzer(configuration: configuration)
    }

    func process(_ frame: MotionFeatureFrame) -> [MotionOutputEvent] {
        lock.lock()
        defer { lock.unlock() }
        return analyzer.process(frame)
    }

    func updateConfiguration(_ configuration: MotionMappingConfiguration) {
        lock.lock()
        analyzer.configuration = configuration
        lock.unlock()
    }

    func configurationSnapshot() -> MotionMappingConfiguration {
        lock.lock()
        defer { lock.unlock() }
        return analyzer.configuration
    }

    func shakerSnapshot() -> (position: MotionVector, grains: [MotionVector], impacts: [MotionShakerChamber.Impact]) {
        lock.lock()
        defer { lock.unlock() }
        return (analyzer.shakerPosition, analyzer.shakerGrains, analyzer.shakerImpacts)
    }

    func calibrate(to frame: MotionFeatureFrame) {
        lock.lock()
        analyzer.calibrate(to: frame)
        lock.unlock()
    }

    func reset() {
        lock.lock()
        analyzer.reset()
        lock.unlock()
    }
}
