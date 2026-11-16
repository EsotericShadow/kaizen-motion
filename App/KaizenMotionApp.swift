import SwiftUI

@main
struct KaizenMotionApp: App {
    @StateObject private var model = StandalonePerformanceModel()
    @Environment(\.scenePhase) private var scenePhase

    var body: some Scene {
        WindowGroup {
            StandalonePerformanceView(model: model, desktop: model.desktop)
                .onAppear { model.start() }
                .onDisappear { model.stop() }
                .onChange(of: scenePhase) { _, phase in
                    if phase == .active { model.desktop.resumePreferredMac() }
                }
        }
    }
}

private struct StandalonePerformanceView: View {
    @ObservedObject var model: StandalonePerformanceModel
    @ObservedObject var desktop: DesktopMotionSender
    @State private var outputRoutesPresented = false

    var body: some View {
        MotionStageView(
            store: model.store,
            instrument: $model.instrument,
            sensitivity: $model.sensitivity,
            armed: $model.armed,
            chamberGeometry: $model.chamberGeometry,
            thereminPause: $model.thereminPaused,
            thereminVoice: $model.thereminVoice,
            chimeraScene: model.chimeraSceneJSON,
            outputRoute: MotionOutputRouteStatus(
                link: desktop.state,
                armed: model.armed,
                audioStatus: model.audioStatus,
                roundTripMilliseconds: desktop.roundTripMilliseconds,
                isSoundPaused: model.instrument == .thereminFX && model.thereminPaused
            ),
            isOutputPanelPresented: $outputRoutesPresented,
            onCalibrate: model.calibrate,
            onDemo: model.demoPulse
        ) {
            MotionOutputRoutesPanel(sender: desktop, armed: model.armed, audioStatus: model.audioStatus,
                                   isSoundPaused: model.instrument == .thereminFX && model.thereminPaused) {
                withAnimation(.easeOut(duration: 0.22)) {
                    outputRoutesPresented = false
                }
            }
        }
        .preferredColorScheme(.dark)
    }
}
