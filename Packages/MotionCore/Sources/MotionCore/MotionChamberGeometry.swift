public enum MotionChamberShape: Int, CaseIterable, Hashable, Sendable {
    case box, circle, oval
}
public struct MotionChamberGeometry: Equatable, Sendable {
    public var depthMM: Double
    public var grainCount: Int
    public var widthMM: Double
    public var heightMM: Double
    public var ballDiameterMM: Double
    public var yTiltSensitivity: Double
    public var invertY: Bool
    public var shape: MotionChamberShape
    public init(widthMM: Double = 36, heightMM: Double = 36, ballDiameterMM: Double = 1.2,
                yTiltSensitivity: Double = 1.6, invertY: Bool = true, shape: MotionChamberShape = .box, depthMM: Double = 24, grainCount: Int = 48) {
        self.depthMM = depthMM.isFinite ? max(16, min(80, depthMM)) : 24
        self.grainCount = max(1, min(64, grainCount))
        self.widthMM = widthMM.isFinite ? max(20, min(80, widthMM)) : 36
        self.heightMM = heightMM.isFinite ? max(20, min(80, heightMM)) : 36
        self.ballDiameterMM = ballDiameterMM.isFinite ? max(1, min(12, ballDiameterMM)) : 1.2
        self.yTiltSensitivity = yTiltSensitivity.isFinite ? max(0.25, min(4, yTiltSensitivity)) : 1.6
        self.invertY = invertY
        self.shape = shape
    }
    public var validated: Self { .init(widthMM: widthMM, heightMM: heightMM, ballDiameterMM: ballDiameterMM,
                                      yTiltSensitivity: yTiltSensitivity, invertY: invertY, shape: shape, depthMM: depthMM, grainCount: grainCount) }
    public var travelHalfDepth: Double { (depthMM - ballDiameterMM) / 2_000 }
    public var effectiveGrainCount: Int {
        // Keep large user-selected grains from overfilling a small chamber.
        let volume = widthMM * effectiveHeightMM * depthMM * (shape == .box ? 1 : 0.7854)
        return max(1, min(grainCount, Int(volume * 0.18 / (0.5236 * ballDiameterMM * ballDiameterMM * ballDiameterMM))))
    }
    public var travelHalfWidth: Double { (widthMM - ballDiameterMM) / 2_000 }
    public var effectiveHeightMM: Double { shape == .circle ? widthMM : heightMM }
    public var travelHalfHeight: Double { (effectiveHeightMM - ballDiameterMM) / 2_000 }
}
