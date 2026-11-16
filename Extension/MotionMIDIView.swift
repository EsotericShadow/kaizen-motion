import MotionCore
import SwiftUI

struct MotionMIDIView: View {
    @ObservedObject private var store: MotionUIStateStore
    private let audioUnit: MotionMIDIAudioUnit
    @State private var instrument: MotionInstrument
    @State private var sensitivity: Double
    @State private var armed: Bool
    @State private var chamberGeometry: MotionChamberGeometry

    init(audioUnit: MotionMIDIAudioUnit) {
        self.audioUnit = audioUnit
        store = audioUnit.uiStore
        _instrument = State(initialValue: MotionInstrument(rawValue: Int(audioUnit.value(for: .instrument))) ?? .shaker)
        _sensitivity = State(initialValue: Double(audioUnit.value(for: .sensitivity)))
        _armed = State(initialValue: audioUnit.value(for: .armed) >= 0.5)
        _chamberGeometry = State(initialValue: .init(widthMM: Double(audioUnit.value(for: .chamberWidth)),
                                                    heightMM: Double(audioUnit.value(for: .chamberHeight)),
                                                    ballDiameterMM: Double(audioUnit.value(for: .ballDiameter)),
                                                    yTiltSensitivity: Double(audioUnit.value(for: .yTiltSensitivity)),
                                                    invertY: audioUnit.value(for: .invertY) >= 0.5,
                                                    shape: MotionChamberShape(rawValue: Int(audioUnit.value(for: .chamberShape).rounded())) ?? .box, depthMM: Double(audioUnit.value(for: .chamberDepth)), grainCount: Int(audioUnit.value(for: .grainCount))))
    }

    var body: some View {
        MotionStageView(
            store: store,
            instrument: $instrument,
            sensitivity: $sensitivity,
            armed: $armed,
            chamberGeometry: $chamberGeometry,
            compact: true,
            onCalibrate: audioUnit.calibrate,
            onDemo: audioUnit.demoPulse
        )
        .onChange(of: instrument) { _, value in audioUnit.setInstrument(value) }
        .onChange(of: sensitivity) { _, value in audioUnit.setValue(AUValue(value), for: .sensitivity) }
        .onChange(of: armed) { _, value in audioUnit.setValue(value ? 1 : 0, for: .armed) }
        .onChange(of: chamberGeometry) { _, value in
            audioUnit.setValue(AUValue(value.widthMM), for: .chamberWidth)
            audioUnit.setValue(AUValue(value.heightMM), for: .chamberHeight)
            audioUnit.setValue(AUValue(value.ballDiameterMM), for: .ballDiameter)
            audioUnit.setValue(AUValue(value.yTiltSensitivity), for: .yTiltSensitivity)
            audioUnit.setValue(value.invertY ? 1 : 0, for: .invertY)
            audioUnit.setValue(AUValue(value.shape.rawValue), for: .chamberShape)
            audioUnit.setValue(AUValue(value.depthMM), for: .chamberDepth)
            audioUnit.setValue(AUValue(value.grainCount), for: .grainCount)
        }
        .preferredColorScheme(.dark)
    }
}
