import Foundation
import MotionCore
import SwiftUI
import UIKit

/// Graphite Motion palette, shared with app-only glass overlays such as the output routes panel.
enum MotionFinish {
    static let ivory = Color(red: 0.94, green: 0.88, blue: 0.72)
    static let ivoryDim = Color(red: 0.62, green: 0.58, blue: 0.49)
    static let amber = Color(red: 1.00, green: 0.55, blue: 0.17)
    static let violet = Color(red: 0.52, green: 0.23, blue: 1.00)
    static let graphite = Color(red: 0.035, green: 0.038, blue: 0.04)
}

private enum MotionRaster {
    static let chassis = load("KaizenMotionGraphiteChassis")
    static let selector = load("MotionSelectorAtlas")
    static let selectorShadow = load("MotionSelectorShadow")
    static let sensitivity = load("MotionSensitivityAtlas")
    static let sensitivityShadow = load("MotionSensitivityShadow")
    static let armSwitch = load("MotionArmSwitchAtlas")
    static let lamps = load("MotionLampAtlas")

    private static func load(_ name: String) -> UIImage {
        guard let url = Bundle.main.url(forResource: name, withExtension: "png"),
              let image = UIImage(contentsOfFile: url.path) else {
            return UIImage()
        }
        return image
    }
}

/// Control placement measured on the approved 853 x 1844 concept (concept pixels).
/// The concept raster carries a 2.3 % vertical stretch, so round hardware is drawn 1.023 x taller
/// than wide. Sheets and sources: Assets/Blender (see Assets/Blender/README.md).
private enum MotionControlGeometry {
    static let verticalStretch: CGFloat = 1.023

    static let selectorCentre = CGPoint(x: 279.6, y: 1173.8)
    static let selectorSpan: CGFloat = 216
    static let selectorShadowSpan: CGFloat = 320

    static let sensitivityCentre = CGPoint(x: 630.3, y: 1192.2)
    static let sensitivitySpan: CGFloat = 336
    static let sensitivityShadowSpan: CGFloat = 440
    /// Sheet frame 32 is 12 o'clock; frames 1...63 cover -135...+135 degrees in 270/62-degree steps.
    static let sensitivityZeroFrame = 32
    static let sensitivityStepDegrees = 270.0 / 62.0
    static let sensitivitySweetSpot = 0.62

    static let armSwitchCentre = CGPoint(x: 425.8, y: 1606)
    static let armSwitchSpan: CGFloat = 136

    /// Integer-aligned 72 x 44 tiles around each baked lamp slot (amber-core centroids measured on
    /// the chassis). Row 1 of the lamp sheet is the exact lit source; row 0 is the unlit lens.
    static let lampTileSize = CGSize(width: 72, height: 44)
    static let lampTileOrigins: [CGPoint] = [
        CGPoint(x: 74, y: 1049), CGPoint(x: 74, y: 1096), CGPoint(x: 74, y: 1143),
        CGPoint(x: 74, y: 1189), CGPoint(x: 74, y: 1236), CGPoint(x: 74, y: 1281)
    ]
}

/// Output route summary for the glass status block. Only the standalone app supplies one; the AUv3
/// view passes nothing and keeps its MIDI / AUDIO line.
struct MotionOutputRouteStatus: Equatable {
    enum Tone: Equatable {
        case idle
        case busy
        case linked
        case attention
    }

    /// Replaces MIDI / AUDIO, for example PHONE SOUND or OUTPUT MUTED.
    var soundLine: String
    /// The Mac link, for example MAC LINK, FINDING MAC or MAC 4 MS.
    var linkLine: String
    var linkTone: Tone
    var accessibilityValue: String
}

struct MotionStageView<OutputPanel: View>: View {
    @ObservedObject var store: MotionUIStateStore
    @Binding var instrument: MotionInstrument
    @Binding var sensitivity: Double
    @Binding var armed: Bool
    @Binding var chamberGeometry: MotionChamberGeometry
    var thereminPause: Binding<Bool>?
    var thereminVoice: Binding<MotionThereminVoice>?
    var chimeraScene: (() -> String?)?
    var compact: Bool
    var outputRoute: MotionOutputRouteStatus?
    @Binding var isOutputPanelPresented: Bool
    var onCalibrate: () -> Void
    var onDemo: () -> Void
    private let outputPanel: OutputPanel

    @State private var selectorDragStart: Int?
    @State private var sensitivityDragStart: Double?
    @State private var testFlash = false
    /// Local display preference: how many motion dots the glass shows (1...12).
    @AppStorage("KaizenMotion.dotCount") private var dotCount = MotionDotField.defaultCount
    /// The dot field measures attitude from the same frame CENTRE hands to the analyzer.
    @State private var attitudeReference = MotionAttitudeReference()

    /// Standalone app: the top-right status block opens `outputPanel` inside the glass.
    init(
        store: MotionUIStateStore,
        instrument: Binding<MotionInstrument>,
        sensitivity: Binding<Double>,
        armed: Binding<Bool>,
        chamberGeometry: Binding<MotionChamberGeometry> = .constant(.init()),
        thereminPause: Binding<Bool>? = nil,
        thereminVoice: Binding<MotionThereminVoice>? = nil,
        chimeraScene: (() -> String?)? = nil,
        compact: Bool = false,
        outputRoute: MotionOutputRouteStatus?,
        isOutputPanelPresented: Binding<Bool>,
        onCalibrate: @escaping () -> Void,
        onDemo: @escaping () -> Void,
        @ViewBuilder outputPanel: () -> OutputPanel
    ) {
        self.store = store
        _instrument = instrument
        _sensitivity = sensitivity
        _armed = armed
        _chamberGeometry = chamberGeometry
        self.thereminPause = thereminPause
        self.thereminVoice = thereminVoice
        self.chimeraScene = chimeraScene
        self.compact = compact
        self.outputRoute = outputRoute
        _isOutputPanelPresented = isOutputPanelPresented
        self.onCalibrate = onCalibrate
        self.onDemo = onDemo
        self.outputPanel = outputPanel()
    }

    var body: some View {
        GeometryReader { proxy in
            let scale = min(proxy.size.width / 853, proxy.size.height / 1844)
            let surfaceSize = CGSize(width: 853 * scale, height: 1844 * scale)

            ZStack {
                MotionFinish.graphite
                    .ignoresSafeArea()

                instrumentSurface(scale: scale)
                    .frame(width: surfaceSize.width, height: surfaceSize.height)
            }
            .frame(maxWidth: .infinity, maxHeight: .infinity)
        }
        .preferredColorScheme(.dark)
        .ignoresSafeArea()
    }

    private func instrumentSurface(scale: CGFloat) -> some View {
        ZStack(alignment: .topLeading) {
            Image(uiImage: MotionRaster.chassis)
                .resizable()
                .interpolation(.high)
                .frame(width: 853 * scale, height: 1844 * scale)

            MotionGlass(
                store: store,
                instrument: instrument,
                chamberGeometry: $chamberGeometry,
                thereminPause: thereminPause,
                thereminVoice: thereminVoice,
                chimeraScene: chimeraScene,
                sensitivity: sensitivity,
                armed: armed,
                testFlash: testFlash,
                dotCount: dotCountBinding,
                attitudeReference: attitudeReference,
                outputRoute: outputRoute,
                isPanelPresented: $isOutputPanelPresented,
                panel: outputPanel
            )
            .frame(width: 742 * scale, height: 770 * scale)
            .position(x: 426.5 * scale, y: 578 * scale)

            instrumentLamps(scale: scale)

            controlSprite(
                MotionRaster.selectorShadow,
                span: MotionControlGeometry.selectorShadowSpan,
                centre: MotionControlGeometry.selectorCentre,
                scale: scale
            )

            AtlasSpriteImage(
                image: MotionRaster.selector,
                columns: 3,
                rows: 2,
                frameIndex: selectorFrame
            )
            .frame(
                width: MotionControlGeometry.selectorSpan * scale,
                height: MotionControlGeometry.selectorSpan * MotionControlGeometry.verticalStretch * scale
            )
            // Hit shape, gesture and accessibility attach before .position, which would otherwise
            // grow them to the whole surface (and let the later sensitivity knob swallow taps).
            .contentShape(Circle())
            .gesture(selectorGesture(scale: scale))
            .accessibilityElement()
            .accessibilityLabel("Instrument")
            .accessibilityValue(instrument.name)
            .accessibilityAdjustableAction { direction in
                stepInstrument(direction == .increment ? 1 : -1)
            }
            .position(
                x: MotionControlGeometry.selectorCentre.x * scale,
                y: MotionControlGeometry.selectorCentre.y * scale
            )

            controlSprite(
                MotionRaster.sensitivityShadow,
                span: MotionControlGeometry.sensitivityShadowSpan,
                centre: MotionControlGeometry.sensitivityCentre,
                scale: scale
            )

            AtlasSpriteImage(
                image: MotionRaster.sensitivity,
                columns: 8,
                rows: 8,
                frameIndex: sensitivityFrame
            )
            .frame(
                width: MotionControlGeometry.sensitivitySpan * scale,
                height: MotionControlGeometry.sensitivitySpan * MotionControlGeometry.verticalStretch * scale
            )
            .contentShape(Circle())
            .gesture(sensitivityGesture(scale: scale))
            .onTapGesture(count: 2) { sensitivity = 0.62 }
            .accessibilityElement()
            .accessibilityLabel("Sensitivity")
            .accessibilityValue("\(Int((sensitivity * 100).rounded())) percent")
            .accessibilityAdjustableAction { direction in
                let delta = direction == .increment ? 0.04 : -0.04
                sensitivity = min(1, max(0, sensitivity + delta))
            }
            .position(
                x: MotionControlGeometry.sensitivityCentre.x * scale,
                y: MotionControlGeometry.sensitivityCentre.y * scale
            )

            readout(
                eyebrow: "INSTRUMENT",
                value: instrumentReadout,
                trailing: false
            )
            .frame(width: 274 * scale, height: 74 * scale)
            .position(x: 226 * scale, y: 1400 * scale)

            readout(
                eyebrow: "SENSITIVITY",
                value: String(format: "%02d", Int((sensitivity * 100).rounded())),
                trailing: true
            )
            .frame(width: 274 * scale, height: 74 * scale)
            .position(x: 632 * scale, y: 1400 * scale)

            bottomControls(scale: scale)
        }
        .frame(width: 853 * scale, height: 1844 * scale)
    }

    private func instrumentLamps(scale: CGFloat) -> some View {
        let tile = MotionControlGeometry.lampTileSize
        return ZStack(alignment: .topLeading) {
            ForEach(Array(MotionControlGeometry.lampTileOrigins.enumerated()), id: \.offset) { index, origin in
                AtlasSpriteImage(
                    image: MotionRaster.lamps,
                    columns: 6,
                    rows: 2,
                    frameIndex: (index == instrument.rawValue ? 6 : 0) + index
                )
                .frame(width: tile.width * scale, height: tile.height * scale)
                .position(
                    x: (origin.x + tile.width / 2) * scale,
                    y: (origin.y + tile.height / 2) * scale
                )
            }
        }
        .allowsHitTesting(false)
    }

    private func controlSprite(_ image: UIImage, span: CGFloat, centre: CGPoint, scale: CGFloat) -> some View {
        Image(uiImage: image)
            .resizable()
            .interpolation(.high)
            .frame(width: span * scale, height: span * MotionControlGeometry.verticalStretch * scale)
            .position(x: centre.x * scale, y: centre.y * scale)
            .allowsHitTesting(false)
    }

    private func readout(eyebrow: String, value: String, trailing: Bool) -> some View {
        VStack(alignment: trailing ? .trailing : .leading, spacing: 2) {
            Text(eyebrow)
                .font(.system(size: compact ? 7 : 8, weight: .semibold, design: .rounded))
                .tracking(1.5)
                .foregroundStyle(MotionFinish.ivoryDim)
            Text(value)
                .font(.system(size: compact ? 15 : 18, weight: .medium, design: .monospaced))
                .tracking(0.8)
                .lineLimit(1)
                .minimumScaleFactor(0.55)
                .foregroundStyle(MotionFinish.ivory)
        }
        .frame(maxWidth: .infinity, maxHeight: .infinity, alignment: trailing ? .trailing : .leading)
        .padding(.horizontal, 18)
    }

    private func bottomControls(scale: CGFloat) -> some View {
        ZStack(alignment: .topLeading) {
            chassisButton(
                title: "CENTRE",
                value: "SET",
                centre: CGPoint(x: 185, y: 1617),
                scale: scale,
                tint: MotionFinish.ivory
            ) {
                attitudeReference = MotionAttitudeReference(frame: store.latestFrame)
                onCalibrate()
            }

            // The arm switch hardware (pilot lamp, recess and lever) is one rendered two-state
            // sprite: frame 0 armed, frame 1 muted. No SwiftUI-drawn lamp sits on top of it.
            AtlasSpriteImage(
                image: MotionRaster.armSwitch,
                columns: 2,
                rows: 1,
                frameIndex: armed ? 0 : 1
            )
            .frame(
                width: MotionControlGeometry.armSwitchSpan * scale,
                height: MotionControlGeometry.armSwitchSpan * MotionControlGeometry.verticalStretch * scale
            )
            .position(
                x: MotionControlGeometry.armSwitchCentre.x * scale,
                y: MotionControlGeometry.armSwitchCentre.y * scale
            )
            .allowsHitTesting(false)

            Button {
                armed.toggle()
            } label: {
                VStack(spacing: 0) {
                    Spacer()
                    Text(armed ? "ARMED" : "MUTED")
                        .font(.system(size: 8 * scale, weight: .bold, design: .rounded))
                        .tracking(1.3 * scale)
                        .foregroundStyle(armed ? MotionFinish.ivory : MotionFinish.ivoryDim)
                }
                .frame(width: 110 * scale, height: 165 * scale)
                .contentShape(Rectangle())
            }
            .buttonStyle(MotionLeverButtonStyle())
            .position(x: 427 * scale, y: 1620 * scale)
            .accessibilityLabel(armed ? "Mute motion output" : "Arm motion output")
            .accessibilityValue(armed ? "Armed" : "Muted")

            chassisButton(
                title: "TEST",
                value: "PULSE",
                centre: CGPoint(x: 664, y: 1617),
                scale: scale,
                tint: MotionFinish.violet
            ) {
                testFlash = true
                onDemo()
                Task { @MainActor in
                    try? await Task.sleep(for: .milliseconds(320))
                    testFlash = false
                }
            }
        }
    }

    private func chassisButton(
        title: String,
        value: String,
        centre: CGPoint,
        scale: CGFloat,
        tint: Color,
        action: @escaping () -> Void
    ) -> some View {
        Button(action: action) {
            VStack(spacing: 2 * scale) {
                Spacer()
                Text(title)
                    .font(.system(size: 8 * scale, weight: .bold, design: .rounded))
                    .tracking(1.5 * scale)
                Text(value)
                    .font(.system(size: 7 * scale, weight: .medium, design: .monospaced))
                    .tracking(1.1 * scale)
                    .foregroundStyle(tint.opacity(0.85))
            }
            .foregroundStyle(MotionFinish.ivory)
            .frame(width: 148 * scale, height: 165 * scale)
            .contentShape(Circle())
        }
        .buttonStyle(MotionHardwareButtonStyle())
        .position(x: centre.x * scale, y: centre.y * scale)
        .accessibilityLabel("\(title) \(value)")
    }

    private var dotCountBinding: Binding<Int> {
        Binding(
            get: { MotionDotField.clampedCount(dotCount) },
            set: { dotCount = MotionDotField.clampedCount($0) }
        )
    }

    /// Six exact detent frames, 30 degrees apart; Shaker (frame 0) points to 12 o'clock.
    private var selectorFrame: Int {
        instrument.rawValue
    }

    /// Asymmetric 270-degree mapping: 0 -> -135, 0.62 -> 12 o'clock, 1 -> +135 degrees.
    private var sensitivityFrame: Int {
        let value = min(1, max(0, sensitivity))
        let sweetSpot = MotionControlGeometry.sensitivitySweetSpot
        let degrees = value <= sweetSpot
            ? (value - sweetSpot) / sweetSpot * 135
            : (value - sweetSpot) / (1 - sweetSpot) * 135
        let frame = MotionControlGeometry.sensitivityZeroFrame
            + Int((degrees / MotionControlGeometry.sensitivityStepDegrees).rounded())
        return min(63, max(1, frame))
    }

    private var instrumentReadout: String {
        switch instrument {
        case .shaker: "SHAKER"
        case .tambourine: "TAMBOURINE"
        case .maraca: "MARACA"
        case .cabasa: "CABASA"
        case .handDrum: "HAND DRUM"
        case .thereminFX: "THEREMIN / FX"
        }
    }

    private func selectorGesture(scale: CGFloat) -> some Gesture {
        DragGesture(minimumDistance: 0)
            .onChanged { value in
                if selectorDragStart == nil {
                    selectorDragStart = instrument.rawValue
                }
                guard abs(value.translation.height) > 7 * scale else { return }
                let detents = Int((-value.translation.height / max(24 * scale, 1)).rounded())
                let base = selectorDragStart ?? instrument.rawValue
                let rawValue = min(MotionInstrument.allCases.count - 1, max(0, base + detents))
                if let next = MotionInstrument(rawValue: rawValue), next != instrument {
                    instrument = next
                }
            }
            .onEnded { value in
                if abs(value.translation.height) < 7 * scale,
                   abs(value.translation.width) < 7 * scale {
                    stepInstrument(1)
                }
                selectorDragStart = nil
            }
    }

    private func sensitivityGesture(scale: CGFloat) -> some Gesture {
        DragGesture(minimumDistance: 0)
            .onChanged { value in
                if sensitivityDragStart == nil {
                    sensitivityDragStart = sensitivity
                }
                let base = sensitivityDragStart ?? sensitivity
                sensitivity = min(1, max(0, base - Double(value.translation.height / max(250 * scale, 1))))
            }
            .onEnded { _ in sensitivityDragStart = nil }
    }

    private func stepInstrument(_ delta: Int) {
        let count = MotionInstrument.allCases.count
        let next = (instrument.rawValue + delta + count) % count
        instrument = MotionInstrument(rawValue: next) ?? .shaker
    }
}

extension MotionStageView where OutputPanel == EmptyView {
    /// AUv3 and any host without output routes: the status block keeps MIDI / AUDIO.
    init(
        store: MotionUIStateStore,
        instrument: Binding<MotionInstrument>,
        sensitivity: Binding<Double>,
        armed: Binding<Bool>,
        chamberGeometry: Binding<MotionChamberGeometry> = .constant(.init()),
        compact: Bool = false,
        onCalibrate: @escaping () -> Void,
        onDemo: @escaping () -> Void
    ) {
        self.init(
            store: store,
            instrument: instrument,
            sensitivity: sensitivity,
            armed: armed,
            chamberGeometry: chamberGeometry,
            compact: compact,
            outputRoute: nil,
            isOutputPanelPresented: .constant(false),
            onCalibrate: onCalibrate,
            onDemo: onDemo
        ) {
            EmptyView()
        }
    }
}

private struct MotionGlass<Panel: View>: View {
    @ObservedObject var store: MotionUIStateStore
    let instrument: MotionInstrument
    @Binding var chamberGeometry: MotionChamberGeometry
    let thereminPause: Binding<Bool>?
    let thereminVoice: Binding<MotionThereminVoice>?
    let chimeraScene: (() -> String?)?
    let sensitivity: Double
    let armed: Bool
    let testFlash: Bool
    @Binding var dotCount: Int
    let attitudeReference: MotionAttitudeReference
    let outputRoute: MotionOutputRouteStatus?
    @Binding var isPanelPresented: Bool
    let panel: Panel

    @State private var transition = MotionDotTransition(from: MotionDotField.defaultCount, to: MotionDotField.defaultCount)
    @State private var scrubStart: Int?
    @State private var scrubIsVertical = false
    @State private var caption: String?
    @State private var captionGeneration = 0
    @State private var lastTrigger = Date.distantPast
    @State private var chamberSettingsPresented = false

    var body: some View {
        GeometryReader { proxy in
            ZStack {
                TimelineView(.animation(minimumInterval: instrument == .shaker ? 1.0 / 60.0 : 1.0 / 30.0)) { timeline in
                    if instrument == .shaker {
                        MotionShakerChamberCanvas(now: timeline.date, display: store.shakerDisplay, armed: armed, geometry: chamberGeometry)
                    } else if instrument == .thereminFX && thereminVoice?.wrappedValue == .chimera {
                        MotionChimeraHeadView(scene: chimeraScene ?? { nil })
                            .frame(width: proxy.size.width, height: proxy.size.height * 0.46)
                            .position(x: proxy.size.width * 0.5, y: proxy.size.height * 0.34)
                    } else {
                        MotionDotFieldCanvas(
                        now: timeline.date,
                        frame: displayFrame,
                        reference: attitudeReference,
                        noteVelocity: store.lastVelocity,
                        sensitivity: sensitivity,
                        transition: transition,
                        lastTrigger: lastTrigger,
                        testFlash: testFlash,
                        active: armed || testFlash
                    )
                    }
                }
                // The field keeps measuring behind the routes panel, dimmed so the panel reads.
                .opacity(isPanelPresented || chamberSettingsPresented ? 0.26 : 1)
                .accessibilityElement()
                .accessibilityLabel(instrument == .shaker ? "Shaker chamber" : "Motion performance display")
                .accessibilityValue(
                    instrument == .shaker ? "Last contact \(lastWallName.lowercased()), strength \(store.lastVelocity)." :
                    "\(dotCount) motion \(dotCount == 1 ? "dot" : "dots"), newest \(MotionDotField.channels(count: dotCount).last?.spokenName ?? ""), "
                        + "velocity \(store.lastVelocity), direction \(store.lastDirection.shortLabel)"
                )
                .accessibilityHint(instrument == .shaker ? "The ball follows the selected chamber boundary. Each contact makes sound and a spreading glow." : "Swipe up or down to change the number of motion dots.")
                .accessibilityAdjustableAction { direction in
                    guard instrument != .shaker else { return }
                    setDots(dotCount + (direction == .increment ? 1 : -1))
                }
                .accessibilitySortPriority(2)
                .accessibilityHidden(isPanelPresented)

                VStack(spacing: 0) {
                    HStack(alignment: .firstTextBaseline) {
                        VStack(alignment: .leading, spacing: 4) {
                            Text("KAIZEN DSP")
                                .font(.system(size: compactType(proxy.size, 10), weight: .semibold, design: .rounded))
                                .tracking(2.8)
                            Text("MOTION")
                                .font(.system(size: compactType(proxy.size, 25), weight: .light, design: .rounded))
                                .tracking(7)
                        }
                        .accessibilityElement(children: .combine)
                        .accessibilityLabel("Kaizen DSP Motion")
                        .accessibilitySortPriority(5)

                        Spacer()

                        VStack(alignment: .trailing, spacing: 4) {
                            Text(statusText)
                                .foregroundStyle(statusColor)
                                .accessibilitySortPriority(4)
                            if let outputRoute {
                                routeButton(outputRoute, size: proxy.size)
                            } else {
                                Text(armed ? "MIDI / AUDIO" : "OUTPUT MUTED")
                                    .foregroundStyle(MotionFinish.ivoryDim)
                            }
                        }
                        .font(.system(size: compactType(proxy.size, 9), weight: .semibold, design: .monospaced))
                        .tracking(1.1)
                    }

                    ZStack(alignment: .top) {
                        VStack(spacing: 0) {
                            // The centre of the glass stays text-free: it belongs to the dot field.
                            Spacer(minLength: 0)

                            HStack(alignment: .bottom) {
                                glassMetric("TILT X", store.controllerValues[0])
                                Spacer()
                                glassMetric(instrument == .thereminFX ? "VOWEL" : "TILT Y", store.controllerValues[1])
                                Spacer()
                                if instrument == .shaker {
                                    Button { chamberSettingsPresented = true } label: {
                                    VStack(alignment: .leading, spacing: 2) {
                                        Text("CHAMBER ›").font(.system(size: 8, weight: .semibold, design: .rounded)).tracking(1.2).foregroundStyle(MotionFinish.ivoryDim)
                                        Text(lastWallName).font(.system(size: 12, weight: .medium, design: .monospaced)).foregroundStyle(MotionFinish.ivory)
                                    }
                                    .frame(minWidth: 44, minHeight: 44)
                                    }
                                    .buttonStyle(.plain)
                                    .accessibilityLabel("Chamber sizes")
                                    .accessibilityHint("Adjust grain size, fill, chamber width, height and depth.")
                                } else if instrument == .thereminFX && thereminVoice?.wrappedValue == .chimera {
                                    glassMetric("BREATH Z", store.controllerValues[2])
                                } else {
                                    dotsMetric
                                }
                                Spacer()
                                glassMetric("VELOCITY", store.lastVelocity)
                            }
                            .accessibilityElement(children: .ignore)
                            .accessibilityLabel("Telemetry")
                            .accessibilityValue(
                                instrument == .shaker ? "Last wall \(lastWallName.lowercased()), impact strength \(store.lastVelocity)." :
                                "tilt X \(store.controllerValues[0]), tilt Y \(store.controllerValues[1]), "
                                    + "\(dotCount) \(dotCount == 1 ? "dot" : "dots"), velocity \(store.lastVelocity)"
                            )
                            .accessibilitySortPriority(1)
                        }
                        .opacity(isPanelPresented || chamberSettingsPresented ? 0 : 1)
                        .accessibilityHidden(isPanelPresented || chamberSettingsPresented)

                        if chamberSettingsPresented {
                            MotionChamberSettings(geometry: $chamberGeometry) { chamberSettingsPresented = false }
                                .padding(.top, 8)
                                .frame(maxWidth: .infinity, maxHeight: .infinity, alignment: .top)
                        }

                        if isPanelPresented {
                            panel
                                .frame(maxWidth: .infinity, maxHeight: .infinity, alignment: .top)
                                .padding(.top, 12)
                                .padding(.horizontal, -proxy.size.width * 0.02)
                                .transition(.opacity.combined(with: .offset(y: -8)))
                                .accessibilitySortPriority(3)
                        }
                    }
                }
                .padding(.horizontal, proxy.size.width * 0.055)
                .padding(.vertical, proxy.size.height * 0.045)
                .foregroundStyle(MotionFinish.ivory)
                if instrument == .thereminFX, let voice = thereminVoice, !isPanelPresented, !chamberSettingsPresented {
                    VStack(spacing: 4) {
                        Text("VOICE").font(.system(size: 9, weight: .semibold)).tracking(1.5)
                            .foregroundStyle(MotionFinish.ivoryDim)
                        Picker("Theremin voice", selection: voice) {
                            ForEach(MotionThereminVoice.allCases) { choice in Text(choice.name).tag(choice) }
                        }
                        .pickerStyle(.segmented)
                        .frame(width: min(250, proxy.size.width * 0.76), height: 44)
                        .accessibilityHint("Classic Theremin or CHIMERA physical vocal synthesis. Y shapes vowels; Z controls vocal effort in CHIMERA.")
                        if voice.wrappedValue == .chimera {
                            Text("CHIMERA · JAMESON HODGE").font(.system(size: 8, weight: .medium)).tracking(0.7)
                                .foregroundStyle(MotionFinish.ivoryDim)
                        }
                    }
                    .position(x: proxy.size.width * 0.5, y: proxy.size.height * 0.63)
                }
                if instrument == .thereminFX, let pause = thereminPause, !isPanelPresented, !chamberSettingsPresented {
                    Button { pause.wrappedValue.toggle() } label: {
                        Label(pause.wrappedValue ? "RESUME" : "PAUSE SOUND", systemImage: pause.wrappedValue ? "play.fill" : "pause.fill")
                            .font(.system(size: 11, weight: .semibold)).tracking(1)
                            .padding(.horizontal, 15).frame(minWidth: 118, minHeight: 44)
                            .foregroundStyle(MotionFinish.ivory)
                            .background(RoundedRectangle(cornerRadius: 8).fill(.black.opacity(0.7)))
                            .overlay(RoundedRectangle(cornerRadius: 8).stroke(MotionFinish.amber.opacity(0.5), lineWidth: 0.7))
                    }
                    .buttonStyle(.plain)
                    .accessibilityHint("Pauses only Theremin sound. Keeps the instrument and calibration.")
                    .position(x: proxy.size.width * 0.5, y: proxy.size.height * 0.79)
                }
            }
            .clipShape(RoundedRectangle(cornerRadius: proxy.size.width * 0.035, style: .continuous))
            .contentShape(Rectangle())
            .accessibilityElement(children: .contain)
            // Scrub sideways across the glass to draw dots out (right) or put them away (left).
            // Simultaneous, so it never competes with taps on the glass's own buttons (DOTS, the
            // route entry and the routes panel); off while the panel is open.
            .simultaneousGesture(scrubGesture(width: proxy.size.width), including: isPanelPresented || instrument == .shaker ? .subviews : .all)
        }
        .sensoryFeedback(.selection, trigger: dotCount)
        .onChange(of: dotCount) { oldValue, newValue in
            transition = MotionDotTransition(from: oldValue, to: newValue)
        }
        .onChange(of: store.triggerCount) { _, _ in
            lastTrigger = Date()
        }
        .onAppear {
            transition = MotionDotTransition(from: dotCount, to: dotCount)
            #if DEBUG
            if ProcessInfo.processInfo.arguments.contains("-KMChamberSettingsFixture") { chamberSettingsPresented = true }
            #endif
        }
        .onChange(of: isPanelPresented) { _, open in if open { chamberSettingsPresented = false } }
        .onChange(of: chamberSettingsPresented) { _, open in if open { isPanelPresented = false } }
        .onChange(of: chamberGeometry) { _, _ in store.clearChamberHistory() }
        .onChange(of: instrument) { _, value in if value != .shaker { chamberSettingsPresented = false } }
    }

    /// The top-right status block is the entry to output routes: phone sound and the Mac link.
    private func routeButton(_ route: MotionOutputRouteStatus, size: CGSize) -> some View {
        Button {
            withAnimation(.easeOut(duration: 0.22)) {
                isPanelPresented.toggle()
            }
        } label: {
            VStack(alignment: .trailing, spacing: 4) {
                Text(route.soundLine)
                    .foregroundStyle(MotionFinish.ivoryDim)
                HStack(spacing: 5) {
                    MotionRouteStatusDot(tone: route.linkTone, diameter: 5)
                    Text(route.linkLine)
                        .foregroundStyle(routeColor(route.linkTone))
                    Image(systemName: "chevron.right")
                        .font(.system(size: compactType(size, 9) * 0.8, weight: .bold))
                        .foregroundStyle(MotionFinish.ivoryDim)
                        .rotationEffect(.degrees(isPanelPresented ? 90 : 0))
                }
            }
            .lineLimit(1)
            .padding(.vertical, 4)
            .padding(.horizontal, 6)
            .background {
                RoundedRectangle(cornerRadius: 6, style: .continuous)
                    .fill(MotionFinish.ivory.opacity(isPanelPresented ? 0.07 : 0))
            }
            // At least 44 pt tall and wide to touch, without moving the status text.
            .padding(.vertical, 6)
            .padding(.horizontal, 8)
            .frame(minWidth: 44, minHeight: 44)
            .contentShape(Rectangle())
        }
        .buttonStyle(.plain)
        .padding(.vertical, -10)
        .padding(.horizontal, -14)
        .accessibilityLabel("Output routes")
        .accessibilityValue(route.accessibilityValue)
        .accessibilityHint(isPanelPresented ? "Closes output routes." : "Shows phone sound and the Mac link.")
        .accessibilityAddTraits(isPanelPresented ? .isSelected : [])
        .accessibilitySortPriority(4)
    }

    private func routeColor(_ tone: MotionOutputRouteStatus.Tone) -> Color {
        switch tone {
        case .idle: MotionFinish.ivoryDim
        case .busy, .attention: MotionFinish.ivory
        case .linked: MotionFinish.amber
        }
    }

    private var dotsMetric: some View {
        Button {
            setDots(dotCount >= MotionDotField.countRange.upperBound ? MotionDotField.countRange.lowerBound : dotCount + 1)
        } label: {
            VStack(alignment: .leading, spacing: 2) {
                Text(caption ?? "DOTS")
                    .font(.system(size: 8, weight: .semibold, design: .rounded))
                    .tracking(1.2)
                    .foregroundStyle(caption == nil ? MotionFinish.ivoryDim : MotionFinish.amber)
                    .lineLimit(1)
                    .fixedSize()
                HStack(spacing: 3) {
                    Text("\u{2039}")
                        .foregroundStyle(MotionFinish.ivoryDim.opacity(dotCount > 1 ? 0.9 : 0.3))
                    Text(String(format: "%02d", dotCount))
                    Text("\u{203A}")
                        .foregroundStyle(MotionFinish.ivoryDim.opacity(dotCount < 12 ? 0.9 : 0.3))
                }
                .font(.system(size: 14, weight: .medium, design: .monospaced))
            }
            // At least 44 x 44 pt to touch, without shifting the metric row.
            .padding(.vertical, 9)
            .padding(.horizontal, 8)
            .frame(minWidth: 44, minHeight: 44)
            .contentShape(Rectangle())
        }
        .buttonStyle(.plain)
        .padding(.vertical, -9)
        .padding(.horizontal, -8)
    }

    private var displayFrame: MotionFeatureFrame {
        #if DEBUG
        if MotionDotFieldFixture.isEnabled { return MotionDotFieldFixture.frame }
        #endif
        return store.latestFrame
    }

    private var lastWallName: String {
        guard let wall = store.shakerDisplay.pulses.last?.impact.wall else { return "READY" }
        switch wall {
        case .left: return "LEFT"
        case .right: return "RIGHT"
        case .top: return "TOP"
        case .bottom: return "BOTTOM"
        case .front: return "FRONT"
        case .back: return "BACK"
        }
    }

    private func scrubGesture(width: CGFloat) -> some Gesture {
        DragGesture(minimumDistance: 12)
            .onChanged { value in
                // The axis is decided once per drag: only a drag that starts sideways scrubs.
                guard !scrubIsVertical else { return }
                if scrubStart == nil {
                    guard abs(value.translation.width) > abs(value.translation.height) else {
                        scrubIsVertical = true
                        return
                    }
                    scrubStart = dotCount
                }
                let step = max(18, width / 13)
                let next = (scrubStart ?? dotCount) + Int((value.translation.width / step).rounded())
                setDots(next)
            }
            .onEnded { _ in
                scrubStart = nil
                scrubIsVertical = false
            }
    }

    private func setDots(_ value: Int) {
        let next = MotionDotField.clampedCount(value)
        guard next != dotCount else { return }
        dotCount = next
        caption = MotionDotField.channels(count: next).last?.shortLabel
        captionGeneration &+= 1
        let generation = captionGeneration
        Task { @MainActor in
            try? await Task.sleep(for: .milliseconds(1400))
            if captionGeneration == generation { caption = nil }
        }
    }

    private var statusText: String {
        #if DEBUG
        if ProcessInfo.processInfo.arguments.contains("-KMShakerFixture") || ProcessInfo.processInfo.arguments.contains("-KMThereminFixture") { return "QA FIXTURE" }
        if MotionDotFieldFixture.isEnabled { return "QA FIXTURE" }
        #endif
        return switch store.status {
        case .running: "MOTION LIVE"
        case .stopped: "STANDBY"
        case .unavailable: "PREVIEW MODE"
        case .failed: "SENSOR ERROR"
        }
    }

    private var statusColor: Color {
        switch store.status {
        case .running: MotionFinish.amber
        case .unavailable: MotionFinish.violet
        case .stopped, .failed: MotionFinish.ivoryDim
        }
    }

    private func glassMetric(_ label: String, _ value: UInt8) -> some View {
        VStack(alignment: .leading, spacing: 2) {
            Text(label)
                .font(.system(size: 8, weight: .semibold, design: .rounded))
                .tracking(1.2)
                .foregroundStyle(MotionFinish.ivoryDim)
            Text(String(format: "%03d", Int(value)))
                .font(.system(size: 14, weight: .medium, design: .monospaced))
        }
    }

    private func compactType(_ size: CGSize, _ preferred: CGFloat) -> CGFloat {
        min(preferred, max(preferred * 0.68, size.width / 29))
    }
}

/// Small state mark shared by the status block and the routes panel: a hollow ring when off,
/// an ivory ring while searching or connecting, solid amber when linked, solid ivory for attention.
struct MotionRouteStatusDot: View {
    let tone: MotionOutputRouteStatus.Tone
    var diameter: CGFloat = 6

    var body: some View {
        ZStack {
            switch tone {
            case .idle:
                Circle().strokeBorder(MotionFinish.ivoryDim, lineWidth: 1)
            case .busy:
                Circle().strokeBorder(MotionFinish.ivory, lineWidth: 1.2)
            case .linked:
                Circle().fill(MotionFinish.amber)
                    .shadow(color: MotionFinish.amber.opacity(0.7), radius: diameter * 0.6)
            case .attention:
                Circle().fill(MotionFinish.ivory)
            }
        }
        .frame(width: diameter, height: diameter)
        .accessibilityHidden(true)
    }
}

#if DEBUG
/// Visual-QA fixture for Debug builds only (launch argument `-KMDotFieldFixture`). The simulator
/// has no motion hardware, so this fixed synthetic frame lets the dot field's response be inspected.
/// It replaces only the frame the glass draws; the analyzer, audio, MIDI and network never see it,
/// and the status line reads QA FIXTURE while it is active.
private enum MotionDotFieldFixture {
    static let isEnabled = ProcessInfo.processInfo.arguments.contains("-KMDotFieldFixture")
    static let frame = MotionFeatureFrame(
        timestamp: 0,
        acceleration: .init(x: 0.42, y: -0.28, z: 0.30),
        rotationRate: .init(x: 1.4, y: -0.9, z: 1.6),
        roll: 0.38,
        pitch: -0.26,
        yaw: 0.70,
        jerk: 9
    )
}
#endif

private struct MotionDotTransition: Equatable {
    var from: Int
    var to: Int
    var start = Date()
}

/// Quiet motion-reactive dot field. Every dot is a local reading of the current
/// `MotionFeatureFrame` (see `MotionDotField` in MotionCore); nothing here is transmitted.
/// With no measured motion the dots rest on their homes; there is no idle animation.
private struct MotionDotFieldCanvas: View {
    let now: Date
    let frame: MotionFeatureFrame
    let reference: MotionAttitudeReference
    let noteVelocity: UInt8
    let sensitivity: Double
    let transition: MotionDotTransition
    let lastTrigger: Date
    let testFlash: Bool
    let active: Bool

    var body: some View {
        Canvas { context, canvas in
            draw(context: &context, canvas: canvas)
        }
        .allowsHitTesting(false)
    }

    private func draw(context: inout GraphicsContext, canvas: CGSize) {
        let samples = MotionDotField.samples(
            frame: frame,
            reference: reference,
            noteVelocity: noteVelocity,
            sensitivity: sensitivity
        )
        let global = CGFloat(MotionDotField.globalEnergy(frame, sensitivity: sensitivity))
        let elapsed = now.timeIntervalSince(transition.start)
        let linear = CGFloat(min(1, max(0, elapsed / 0.28)))
        let t = linear * linear * (3 - 2 * linear)
        let trigger = CGFloat(exp(-max(0, now.timeIntervalSince(lastTrigger)) / 0.2))
        let opacity: CGFloat = active ? 1 : 0.4

        let fromLayout = layout(count: transition.from, canvas: canvas)
        let toLayout = layout(count: transition.to, canvas: canvas)
        let visible = max(transition.from, transition.to)

        for channel in MotionDotField.channels(count: visible) {
            let old = fromLayout.homes[channel]
            let new = toLayout.homes[channel]
            let home: CGPoint
            let presence: CGFloat
            switch (old, new) {
            case let (old?, new?):
                home = CGPoint(x: old.x + (new.x - old.x) * t, y: old.y + (new.y - old.y) * t)
                presence = 1
            case let (nil, new?):
                home = new
                presence = t
            case let (old?, nil):
                home = old
                presence = 1 - t
            default:
                continue
            }
            guard presence > 0.001 else { continue }
            let amplitude = fromLayout.amplitude + (toLayout.amplitude - fromLayout.amplitude) * t
            let sample = samples[channel.rawValue]
            drawHome(context: &context, at: home, canvas: canvas, alpha: presence * opacity)

            var flash: CGFloat = 0
            if channel == .velocity { flash = trigger }
            if channel == .composite { flash = trigger * 0.6 }

            drawDot(
                context: &context,
                at: CGPoint(
                    x: home.x + CGFloat(sample.dx) * amplitude,
                    y: home.y + CGFloat(sample.dy) * amplitude
                ),
                canvas: canvas,
                sample: sample,
                global: global,
                flash: flash,
                alpha: presence * opacity
            )
        }
    }

    private struct FieldLayout {
        var homes: [MotionDotChannel: CGPoint]
        var amplitude: CGFloat
    }

    /// Homes on the 4 x 3 channel matrix, with the occupied block centred in the glass so a
    /// single dot sits in the middle. Fewer dots move further, so one dot can roam the glass.
    private func layout(count: Int, canvas: CGSize) -> FieldLayout {
        let channels = MotionDotField.channels(count: count)
        let spacing = CGSize(width: canvas.width * 0.20, height: canvas.height * 0.16)
        let columns = channels.map { CGFloat($0.cell.column) }
        let rows = channels.map { CGFloat($0.cell.row) }
        let midColumn = ((columns.min() ?? 0) + (columns.max() ?? 0)) / 2
        let midRow = ((rows.min() ?? 0) + (rows.max() ?? 0)) / 2
        let centre = CGPoint(x: canvas.width * 0.5, y: canvas.height * 0.515)
        var homes: [MotionDotChannel: CGPoint] = [:]
        for channel in channels {
            homes[channel] = CGPoint(
                x: centre.x + (CGFloat(channel.cell.column) - midColumn) * spacing.width,
                y: centre.y + (CGFloat(channel.cell.row) - midRow) * spacing.height
            )
        }
        let base = min(spacing.width, spacing.height) * 0.42
        let freedom = 1 + 1.6 * CGFloat(12 - channels.count) / 11
        return FieldLayout(homes: homes, amplitude: base * freedom)
    }

    private func drawHome(context: inout GraphicsContext, at point: CGPoint, canvas: CGSize, alpha: CGFloat) {
        let r = max(0.8, canvas.width * 0.0028)
        context.fill(
            Path(ellipseIn: CGRect(x: point.x - r, y: point.y - r, width: r * 2, height: r * 2)),
            with: .color(MotionFinish.ivory.opacity(0.16 * alpha))
        )
    }

    private func drawDot(
        context: inout GraphicsContext,
        at point: CGPoint,
        canvas: CGSize,
        sample: MotionDotSample,
        global: CGFloat,
        flash: CGFloat,
        alpha: CGFloat
    ) {
        let level = CGFloat(sample.level)
        let base = canvas.width * (sample.channel == .composite ? 0.0150 : 0.0110)
        let depth = 1 + 0.45 * CGFloat(sample.depth)
        let radius = base * (1 + 0.55 * level + 0.35 * flash) * (1 + 0.25 * global) * depth

        // Halos stay tight and faint so a moving field reads as points of light, not fog; the
        // shared acceleration energy lifts every halo a little, each channel's own level more.
        let haloRadius = radius * (2.0 + 1.8 * level + 0.9 * global + 2.2 * flash)
        let haloStrength = min(1, 0.06 + 0.40 * level + 0.16 * global + 0.60 * flash)
        let haloColour = testFlash ? MotionFinish.violet : MotionFinish.amber
        let halo = CGRect(
            x: point.x - haloRadius,
            y: point.y - haloRadius,
            width: haloRadius * 2,
            height: haloRadius * 2
        )
        context.fill(
            Path(ellipseIn: halo),
            with: .radialGradient(
                Gradient(colors: [haloColour.opacity(0.48 * haloStrength * alpha), .clear]),
                center: point,
                startRadius: radius * 0.6,
                endRadius: haloRadius
            )
        )

        let core = CGRect(x: point.x - radius, y: point.y - radius, width: radius * 2, height: radius * 2)
        context.fill(
            Path(ellipseIn: core),
            with: .color(MotionFinish.ivory.opacity(Double((0.58 + 0.42 * max(level, flash)) * alpha)))
        )
    }
}

private struct AtlasSpriteImage: View {
    let image: UIImage
    let columns: Int
    let rows: Int
    let frameIndex: Int

    var body: some View {
        GeometryReader { proxy in
            let frame = min(columns * rows - 1, max(0, frameIndex))
            let column = frame % columns
            let row = frame / columns

            ZStack(alignment: .topLeading) {
                Image(uiImage: image)
                    .resizable()
                    .interpolation(.high)
                    .frame(width: proxy.size.width * CGFloat(columns), height: proxy.size.height * CGFloat(rows))
                    .offset(
                        x: -CGFloat(column) * proxy.size.width,
                        y: -CGFloat(row) * proxy.size.height
                    )
            }
            .frame(width: proxy.size.width, height: proxy.size.height, alignment: .topLeading)
            .clipped()
        }
    }
}

/// The lever throw is the arm switch's feedback, so pressing only lifts its legend slightly.
private struct MotionLeverButtonStyle: ButtonStyle {
    func makeBody(configuration: Configuration) -> some View {
        configuration.label
            .brightness(configuration.isPressed ? 0.12 : 0)
            .animation(.easeOut(duration: 0.10), value: configuration.isPressed)
    }
}

private struct MotionHardwareButtonStyle: ButtonStyle {
    func makeBody(configuration: Configuration) -> some View {
        configuration.label
            .scaleEffect(configuration.isPressed ? 0.965 : 1)
            .brightness(configuration.isPressed ? 0.12 : 0)
            .animation(.easeOut(duration: 0.10), value: configuration.isPressed)
    }
}

/// Contact-local waves. Every origin is supplied by the same chamber collision that emits MIDI.
private struct MotionShakerChamberCanvas: View {
    let now: Date
    let display: MotionShakerDisplay
    let armed: Bool
    let geometry: MotionChamberGeometry
    @Environment(\.accessibilityReduceMotion) private var reduceMotion

    var body: some View {
        Canvas { context, size in
            let dimensions = geometry.validated
            let scale = min(size.width * 0.82 / dimensions.widthMM, size.height * 0.51 / dimensions.effectiveHeightMM)
            let width = dimensions.widthMM * scale
            let height = dimensions.effectiveHeightMM * scale
            let arena = CGRect(x: (size.width - width) / 2, y: size.height * 0.505 - height / 2,
                               width: width, height: height)
            let radius: CGFloat = max(0.5, dimensions.ballDiameterMM * scale / 2)
            let amber = Color(red: 1, green: 0.65, blue: 0.24)
            let boundary = dimensions.shape == .box ? Path(roundedRect: arena, cornerRadius: min(7, radius)) : Path(ellipseIn: arena)
            context.fill(boundary, with: .color(.black.opacity(0.12)))
            context.stroke(boundary, with: .color(.white.opacity(armed ? 0.18 : 0.08)), lineWidth: 0.8)
            func point(_ position: MotionVector) -> CGPoint {
                CGPoint(x: arena.minX + radius + CGFloat((position.x + 1) / 2) * (arena.width - 2 * radius),
                        y: arena.minY + radius + CGFloat((1 - position.y) / 2) * (arena.height - 2 * radius))
            }
            var waves = context
            waves.clip(to: boundary)
            for pulse in display.pulses {
                let age = now.timeIntervalSince(pulse.started)
                guard age >= 0, age < 0.65 else { continue }
                let strength = Double(pulse.impact.velocity) / 127
                let fade = pow(1 - age / 0.65, 2) * (0.3 + strength * 0.7)
                let contact = CGPoint(x: arena.midX + CGFloat(pulse.impact.contact.x) * arena.width / 2,
                                      y: arena.midY - CGFloat(pulse.impact.contact.y) * arena.height / 2)
                let glowRadius = CGFloat(reduceMotion ? 18 : 15 + age * 80)
                let glow = Path(ellipseIn: CGRect(x: contact.x - glowRadius, y: contact.y - glowRadius,
                                                 width: glowRadius * 2, height: glowRadius * 2))
                waves.fill(glow, with: .radialGradient(Gradient(colors: [amber.opacity(fade * 0.7), amber.opacity(fade * 0.12), .clear]),
                                                       center: contact, startRadius: 0, endRadius: glowRadius))
                if !reduceMotion {
                    let travel = CGFloat(age * 420)
                    let vertical = pulse.impact.wall == .left || pulse.impact.wall == .right
                    for sign: CGFloat in (pulse.impact.wall == .front || pulse.impact.wall == .back ? [] : [-1, 1]) {
                        let startDistance = max(0, travel - 22)
                        var edgeWave = Path()
                        if dimensions.shape == .box {
                            edgeWave.move(to: CGPoint(x: contact.x + (vertical ? 0 : sign * startDistance),
                                                      y: contact.y + (vertical ? sign * startDistance : 0)))
                            edgeWave.addLine(to: CGPoint(x: contact.x + (vertical ? 0 : sign * travel),
                                                         y: contact.y + (vertical ? sign * travel : 0)))
                        } else {
                            let origin = atan2(-pulse.impact.contact.y, pulse.impact.contact.x)
                            let meanRadius = (arena.width + arena.height) / 4
                            for step in 0...16 {
                                let distance = startDistance + (travel - startDistance) * CGFloat(step) / 16
                                let angle = origin + Double(sign * distance / meanRadius)
                                let point = CGPoint(x: arena.midX + cos(angle) * arena.width / 2,
                                                    y: arena.midY + sin(angle) * arena.height / 2)
                                if step == 0 { edgeWave.move(to: point) } else { edgeWave.addLine(to: point) }
                            }
                        }
                        waves.stroke(edgeWave, with: .color(amber.opacity(fade * 0.10)), lineWidth: 9)
                        waves.stroke(edgeWave, with: .color(amber.opacity(fade * 0.22)), lineWidth: 5)
                        waves.stroke(edgeWave, with: .color(amber.opacity(fade)), lineWidth: 2)
                    }
                    for echo in 0..<(strength > 0.55 ? 2 : 1) {
                        let elapsed = age - Double(echo) * 0.075
                        guard elapsed >= 0 else { continue }
                        let spread = CGFloat(2 + elapsed * 240)
                        let ring = Path(ellipseIn: CGRect(x: contact.x - spread, y: contact.y - spread,
                                                         width: spread * 2, height: spread * 2))
                        waves.stroke(ring, with: .color(amber.opacity(fade * 0.06)), lineWidth: 7)
                        waves.stroke(ring, with: .color(amber.opacity(fade * 0.12)), lineWidth: 3)
                        waves.stroke(ring, with: .color(amber.opacity(fade * 0.7 / Double(echo + 1))), lineWidth: 1.1)
                    }
                }
                waves.fill(Path(ellipseIn: CGRect(x: contact.x - 3, y: contact.y - 3, width: 6, height: 6)),
                           with: .color(Color.white.opacity(fade)))
            }
            // Every dot is a simulated grain. Depth changes size and brightness;
            // the cloud is never an ornamental trail around a single proxy ball.
            let grains = display.grains.isEmpty ? [display.position] : display.grains
            for grain in grains.sorted(by: { $0.z < $1.z }) {
                let centre = point(grain)
                let depth = max(0, min(1, (grain.z + 1) / 2))
                let r = max(0.7, radius * (0.78 + depth * 0.22))
                let dot = Path(ellipseIn: CGRect(x: centre.x - r, y: centre.y - r, width: r * 2, height: r * 2))
                context.fill(dot, with: .color(amber.opacity(armed ? 0.35 + depth * 0.6 : 0.15)))
                if depth > 0.4 {
                    context.fill(Path(ellipseIn: CGRect(x: centre.x - r * 0.45, y: centre.y - r * 0.55,
                                                       width: r * 0.75, height: r * 0.75)), with: .color(.white.opacity(armed ? depth * 0.75 : 0.12)))
                }
            }
        }
        .allowsHitTesting(false)
    }
}

private struct MotionChamberSettings: View {
    @Binding var geometry: MotionChamberGeometry
    let onClose: () -> Void
    @State private var selectedTab = 0
    var body: some View {
        VStack(spacing: 4) {
            HStack {
                Text("CHAMBER").font(.system(size: 10, weight: .semibold)).tracking(1.5)
                Spacer()
                Button(action: onClose) {
                    Image(systemName: "xmark").font(.system(size: 12, weight: .semibold)).frame(width: 44, height: 44)
                }.buttonStyle(.plain).accessibilityLabel("Close chamber sizes")
            }
            Picker("Chamber controls", selection: $selectedTab) {
                Text("Size").tag(0)
                Text("Feel").tag(1)
            }.pickerStyle(.segmented).padding(.bottom, 5)
            if selectedTab == 0 {
                ScrollView {
                    VStack(spacing: 7) {
                        Picker("Chamber shape", selection: $geometry.shape) {
                            Text("Box").tag(MotionChamberShape.box)
                            Text("Circle").tag(MotionChamberShape.circle)
                            Text("Oval").tag(MotionChamberShape.oval)
                        }.pickerStyle(.segmented)
                        sizeSlider("GRAIN DIAMETER", value: $geometry.ballDiameterMM, range: 1...12, step: 0.2)
                        sizeSlider(geometry.shape == .circle ? "CHAMBER DIAMETER" : "WIDTH", value: $geometry.widthMM, range: 20...80, step: 1)
                        if geometry.shape != .circle {
                            sizeSlider("HEIGHT", value: $geometry.heightMM, range: 20...80, step: 1)
                        }
                        sizeSlider("DEPTH · Z", value: $geometry.depthMM, range: 16...80, step: 1)
                        HStack {
                            Text("FILL").font(.system(size: 10, weight: .medium)).tracking(1)
                            Spacer()
                            Text("\(geometry.effectiveGrainCount) GRAINS").font(.system(size: 11, design: .monospaced))
                        }
                        Slider(value: Binding(get: { Double(geometry.grainCount) }, set: { geometry.grainCount = Int($0) }), in: 1...64, step: 1).tint(MotionFinish.amber)
                            .accessibilityLabel("Grain count")
                        Button {
                            var next = geometry
                            next.depthMM = 24; next.grainCount = 48
                            next.widthMM = 36; next.heightMM = 36; next.ballDiameterMM = 1.2
                            geometry = next
                        } label: {
                            Text("RESET SIZES").font(.system(size: 10, weight: .semibold)).tracking(1).frame(minHeight: 44)
                        }.buttonStyle(.plain)
                    }
                }
            } else {
                VStack(spacing: 6) {
                    HStack {
                        Text("Y TILT SENSITIVITY").font(.system(size: 10, weight: .medium)).tracking(1)
                        Spacer()
                        Text(String(format: "%.2f×", geometry.yTiltSensitivity)).font(.system(size: 12, design: .monospaced))
                    }
                    Slider(value: $geometry.yTiltSensitivity, in: 0.25...4, step: 0.05).tint(MotionFinish.amber)
                        .accessibilityLabel("Toward and away tilt sensitivity")
                    Toggle("Reverse Y tilt", isOn: $geometry.invertY)
                        .font(.system(size: 12)).tint(MotionFinish.amber).frame(minHeight: 44)
                    Text("Tune toward / away movement.").font(.system(size: 11)).foregroundStyle(MotionFinish.ivoryDim)
                    Button {
                        var next = geometry
                        next.yTiltSensitivity = 1.6; next.invertY = true
                        geometry = next
                    } label: {
                        Text("RESET FEEL").font(.system(size: 10, weight: .semibold)).tracking(1).frame(minHeight: 44)
                    }.buttonStyle(.plain)
                }
            }
        }
        .padding(.horizontal, 12)
        .padding(.bottom, 8)
        .foregroundStyle(MotionFinish.ivory)
        .background(RoundedRectangle(cornerRadius: 10).fill(Color.black.opacity(0.88)))
        .overlay(RoundedRectangle(cornerRadius: 10).stroke(MotionFinish.ivory.opacity(0.12), lineWidth: 0.5))
        .accessibilityElement(children: .contain)
        .accessibilityAddTraits(.isModal)
        .accessibilityAction(.escape, onClose)
        .onAppear {
            #if DEBUG
            if ProcessInfo.processInfo.arguments.contains("-KMChamberFeelFixture") { selectedTab = 1 }
            #endif
        }
    }
    private func sizeSlider(_ label: String, value: Binding<Double>, range: ClosedRange<Double>, step: Double) -> some View {
        VStack(spacing: 1) {
            HStack {
                Text(label).font(.system(size: 10, weight: .medium)).tracking(1)
                Spacer()
                Text(String(format: step < 1 ? "%.1f mm" : "%.0f mm", value.wrappedValue))
                    .font(.system(size: 12, weight: .medium, design: .monospaced))
            }
            Slider(value: value, in: range, step: step).tint(MotionFinish.amber)
                .accessibilityLabel(label.capitalized)
                .accessibilityValue(String(format: "%.1f millimetres", value.wrappedValue))
        }
    }
}
