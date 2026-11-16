import SwiftUI

extension MotionOutputRouteStatus {
    /// Status-block summary of the phone sound and the Mac link, from the sender's published state.
    init(
        link state: DesktopMotionConnectionState,
        armed: Bool,
        audioStatus: StandaloneAudioStatus,
        roundTripMilliseconds: Double?,
        isSoundPaused: Bool = false
    ) {
        let line: String
        let tone: Tone
        let spoken: String
        switch state {
        case .idle:
            (line, tone, spoken) = ("MAC LINK", .idle, "Mac link off.")
        case .browsing:
            (line, tone, spoken) = ("FINDING MAC", .busy, "Searching for a Mac.")
        case let .connecting(name):
            (line, tone, spoken) = ("LINKING MAC", .busy, "Connecting to \(name).")
        case let .connected(name):
            let rtt = roundTripMilliseconds.map { "MAC \(MotionOutputRoutesPanel.milliseconds($0)) MS" }
            (line, tone, spoken) = (rtt ?? "MAC LINKED", .linked, "Linked to \(name).")
        case .waiting:
            (line, tone, spoken) = ("MAC WAITING", .attention, "Mac link waiting.")
        case .failed:
            (line, tone, spoken) = ("MAC FAILED", .attention, "Mac link failed.")
        }

        let soundLine: String
        let soundSpoken: String
        if isSoundPaused {
            (soundLine, soundSpoken) = ("THEREMIN PAUSED", "Theremin sound paused")
        } else if !armed {
            (soundLine, soundSpoken) = ("OUTPUT MUTED", "Output muted by the arm switch")
        } else {
            switch audioStatus {
            case .stopped:
                (soundLine, soundSpoken) = ("PHONE SOUND OFF", "Phone sound stopped")
            case .starting:
                (soundLine, soundSpoken) = ("SOUND STARTING", "Phone sound starting")
            case .interrupted:
                (soundLine, soundSpoken) = ("SOUND PAUSED", "Phone sound interrupted")
            case let .running(_, _, route):
                (soundLine, soundSpoken) = ("PHONE SOUND", "Phone sound on through \(route)")
            case .failed:
                (soundLine, soundSpoken) = ("SOUND FAILED", "Phone sound failed")
            }
        }
        self.init(
            soundLine: soundLine,
            linkLine: line,
            linkTone: tone,
            accessibilityValue: "\(soundSpoken). \(spoken)"
        )
    }
}

/// In-glass output routes: phone sound (always local) and the optional Mac/DAW link.
/// Browsing starts only from FIND MAC, so the local-network privacy prompt appears in context.
/// Nothing here touches the audio engine: phone sound plays in every link state.
struct MotionOutputRoutesPanel: View {
    @ObservedObject var sender: DesktopMotionSender
    let armed: Bool
    let audioStatus: StandaloneAudioStatus
    var isSoundPaused = false
    let onClose: () -> Void

    var body: some View {
        VStack(alignment: .leading, spacing: 0) {
            header
            hairline
            phoneRow
            hairline
            macRow
            hairline
            peerSection
            actionButton
                .padding(.top, 8)
        }
        .padding(.horizontal, 14)
        .padding(.bottom, 12)
        .frame(maxWidth: .infinity, maxHeight: .infinity, alignment: .top)
        .background(panelBackground)
        .foregroundStyle(MotionFinish.ivory)
        .accessibilityElement(children: .contain)
        .accessibilityAddTraits(.isModal)
        .accessibilityAction(.escape, onClose)
    }

    // MARK: Rows

    private var header: some View {
        HStack(spacing: 0) {
            Text("OUTPUT ROUTES")
                .font(.system(size: 8, weight: .semibold, design: .rounded))
                .tracking(2.2)
                .foregroundStyle(MotionFinish.ivoryDim)
                .accessibilityAddTraits(.isHeader)
            Spacer(minLength: 0)
            Button(action: onClose) {
                Image(systemName: "xmark")
                    .font(.system(size: 10, weight: .semibold))
                    .foregroundStyle(MotionFinish.ivoryDim)
                    .frame(width: 44, height: 44)
                    .contentShape(Rectangle())
            }
            .buttonStyle(.plain)
            .padding(.trailing, -14)
            .accessibilityLabel("Close output routes")
        }
        .frame(height: 44)
    }

    private var phoneRow: some View {
        HStack(alignment: .center, spacing: 10) {
            VStack(alignment: .leading, spacing: 4) {
                rowLabel("PHONE SOUND")
                caption(phoneCaption)
            }
            Spacer(minLength: 0)
            stateTag(phoneTag, tone: phoneTone)
        }
        .padding(.vertical, 10)
        .accessibilityElement(children: .ignore)
        .accessibilityLabel("Phone sound")
        .accessibilityValue(phoneAccessibilityValue)
    }

    private var macRow: some View {
        VStack(alignment: .leading, spacing: 6) {
            HStack(alignment: .center, spacing: 10) {
                rowLabel("MAC / DAW LINK")
                Spacer(minLength: 0)
                stateTag(linkTag, tone: linkTone)
            }
            switch sender.state {
            case .idle:
                caption("SENDS NOTES AND CONTROLLERS AS MIDI TO KAIZEN MOTION BRIDGE ON A MAC")
            case .browsing:
                caption("SEARCHING THIS NETWORK")
            case let .connecting(name):
                caption(name.uppercased())
            case let .connected(name):
                caption(name.uppercased())
                HStack(spacing: 22) {
                    linkMetric("RTT", sender.roundTripMilliseconds)
                    linkMetric("JITTER", sender.jitterMilliseconds)
                    Spacer(minLength: 0)
                }
                .padding(.top, 2)
            case let .waiting(message), let .failed(message):
                caption(message.uppercased())
                    .lineLimit(2)
            }
        }
        .padding(.vertical, 10)
        .accessibilityElement(children: .ignore)
        .accessibilityLabel("Mac link")
        .accessibilityValue(linkAccessibilityValue)
    }

    /// While linked, the linked Mac is already named in the link row, so only other Macs are listed.
    private var listedPeers: [DesktopMotionPeer] {
        guard case let .connected(name) = sender.state else { return sender.peers }
        return sender.peers.filter { $0.name != name }
    }

    @ViewBuilder
    private var peerSection: some View {
        if sender.state == .idle {
            Spacer(minLength: 0)
            // Browsing starts only from FIND MAC, so iOS asks for local-network access right here.
            caption("FIND MAC ASKS ONCE FOR LOCAL NETWORK ACCESS")
        } else if case .connected = sender.state, listedPeers.isEmpty {
            Spacer(minLength: 0)
        } else {
            VStack(alignment: .leading, spacing: 2) {
                rowLabel(isLinked ? "OTHER MACS" : "MACS ON THIS NETWORK")
                    .padding(.top, 10)
                    .accessibilityAddTraits(.isHeader)
                if listedPeers.isEmpty {
                    caption("LOOKING FOR KAIZEN MOTION BRIDGE ON THIS WI-FI")
                        .padding(.top, 6)
                    Spacer(minLength: 0)
                } else {
                    ScrollView {
                        VStack(spacing: 0) {
                            ForEach(listedPeers) { peer in
                                peerRow(peer)
                            }
                        }
                    }
                    .scrollBounceBehavior(.basedOnSize)
                }
            }
            .frame(maxHeight: .infinity, alignment: .top)
        }
    }

    private func peerRow(_ peer: DesktopMotionPeer) -> some View {
        let role = peerRole(peer)
        return Button {
            sender.connect(to: peer)
        } label: {
            HStack(spacing: 10) {
                Image(systemName: "desktopcomputer")
                    .font(.system(size: 11, weight: .regular))
                    .foregroundStyle(MotionFinish.ivoryDim)
                Text(peer.name)
                    .font(.system(size: 12, weight: .medium, design: .rounded))
                    .lineLimit(1)
                Spacer(minLength: 8)
                Text(role.title)
                    .font(.system(size: 9, weight: .semibold, design: .monospaced))
                    .tracking(1.1)
                    .foregroundStyle(role.colour)
            }
            .padding(.horizontal, 10)
            .frame(minHeight: 44)
            .background {
                RoundedRectangle(cornerRadius: 8, style: .continuous)
                    .fill(MotionFinish.ivory.opacity(role == .linked ? 0.06 : 0))
            }
            .contentShape(Rectangle())
        }
        .buttonStyle(MotionPanelRowStyle())
        .padding(.horizontal, -10)
        .disabled(role != .available)
        .accessibilityLabel(peer.name)
        .accessibilityValue(role.spoken)
        .accessibilityHint(role == .available ? "Links this Mac. Phone sound keeps playing." : "")
    }

    private var actionButton: some View {
        let primary = sender.state == .idle
        return Button {
            if primary {
                sender.startBrowsing()
            } else {
                sender.stop(forgetPeer: true)
            }
        } label: {
            Text(actionTitle)
                .font(.system(size: 10, weight: .semibold, design: .monospaced))
                .tracking(1.6)
                .foregroundStyle(primary ? MotionFinish.amber : MotionFinish.ivory)
                .frame(maxWidth: .infinity, minHeight: 44)
                .background {
                    Capsule(style: .continuous)
                        .fill(MotionFinish.ivory.opacity(0.035))
                        .overlay {
                            Capsule(style: .continuous)
                                .strokeBorder(
                                    primary ? MotionFinish.amber.opacity(0.55) : MotionFinish.ivory.opacity(0.22),
                                    lineWidth: 0.8
                                )
                        }
                }
                .contentShape(Capsule())
        }
        .buttonStyle(MotionPanelRowStyle())
        .accessibilityLabel(actionTitle.capitalized)
        .accessibilityHint(primary
            ? "Searches your local network for Kaizen Motion Bridge. Phone sound keeps playing."
            : "Ends the Mac link and stops searching. Phone sound keeps playing.")
    }

    // MARK: Pieces

    private var hairline: some View {
        Rectangle()
            .fill(MotionFinish.ivory.opacity(0.08))
            .frame(height: 0.5)
            .accessibilityHidden(true)
    }

    private func rowLabel(_ text: String) -> some View {
        Text(text)
            .font(.system(size: 8, weight: .semibold, design: .rounded))
            .tracking(1.4)
            .foregroundStyle(MotionFinish.ivoryDim)
    }

    private func caption(_ text: String) -> some View {
        Text(text)
            .font(.system(size: 8, weight: .medium, design: .monospaced))
            .tracking(0.7)
            .foregroundStyle(MotionFinish.ivoryDim.opacity(0.85))
            .lineLimit(2)
            .fixedSize(horizontal: false, vertical: true)
    }

    private func stateTag(_ text: String, tone: MotionOutputRouteStatus.Tone) -> some View {
        HStack(spacing: 6) {
            MotionRouteStatusDot(tone: tone, diameter: 6)
            Text(text)
                .font(.system(size: 10, weight: .semibold, design: .monospaced))
                .tracking(1.2)
                .foregroundStyle(tone == .linked ? MotionFinish.amber : MotionFinish.ivory)
        }
    }

    private func linkMetric(_ label: String, _ value: Double?) -> some View {
        VStack(alignment: .leading, spacing: 2) {
            Text(label)
                .font(.system(size: 7.5, weight: .semibold, design: .rounded))
                .tracking(1.2)
                .foregroundStyle(MotionFinish.ivoryDim)
            Text(value.map { "\(Self.milliseconds($0)) MS" } ?? "MEASURING")
                .font(.system(size: value == nil ? 10 : 13, weight: .medium, design: .monospaced))
                .foregroundStyle(value == nil ? MotionFinish.ivoryDim : MotionFinish.ivory)
        }
    }

    private var panelBackground: some View {
        let shape = RoundedRectangle(cornerRadius: 14, style: .continuous)
        return shape
            .fill(
                LinearGradient(
                    colors: [Color(white: 0.105).opacity(0.93), Color(white: 0.035).opacity(0.95)],
                    startPoint: .top,
                    endPoint: .bottom
                )
            )
            .overlay {
                // Champagne retaining line, echoing the chassis bezel around the glass.
                shape.strokeBorder(
                    LinearGradient(
                        colors: [
                            Color(red: 0.80, green: 0.68, blue: 0.52).opacity(0.34),
                            Color(red: 0.80, green: 0.68, blue: 0.52).opacity(0.08)
                        ],
                        startPoint: .top,
                        endPoint: .bottom
                    ),
                    lineWidth: 0.75
                )
            }
            .shadow(color: .black.opacity(0.55), radius: 16, y: 8)
    }

    // MARK: State text

    private var isLinked: Bool {
        if case .connected = sender.state { return true }
        return false
    }

    private var linkTag: String {
        switch sender.state {
        case .idle: "OFF"
        case .browsing: "SEARCHING"
        case .connecting: "CONNECTING"
        case .connected: "LINKED"
        case .waiting: "WAITING"
        case .failed: "FAILED"
        }
    }

    private var phoneTag: String {
        if isSoundPaused { return "PAUSED" }
        guard armed else { return "MUTED" }
        return switch audioStatus {
        case .stopped: "OFF"
        case .starting: "STARTING"
        case .interrupted: "PAUSED"
        case .running: "ACTIVE"
        case .failed: "FAILED"
        }
    }

    private var phoneTone: MotionOutputRouteStatus.Tone {
        if isSoundPaused { return .idle }
        guard armed else { return .idle }
        return switch audioStatus {
        case .stopped: .idle
        case .starting: .busy
        case .interrupted, .failed: .attention
        case .running: .linked
        }
    }

    private var phoneCaption: String {
        if isSoundPaused { return "THEREMIN PAUSED — RESUME IN THE PERFORMANCE WINDOW" }
        guard armed else { return "MUTED BY THE ARM SWITCH" }
        switch audioStatus {
        case .stopped:
            return "PHONE PREVIEW IS OFF"
        case .starting:
            return "PREPARING LOW-LATENCY PHONE PREVIEW"
        case .interrupted:
            return "PAUSED BY ANOTHER AUDIO SESSION"
        case let .running(sampleRate, bufferMilliseconds, route):
            return "\(route.uppercased()) • \(Int(sampleRate.rounded())) HZ • \(Self.milliseconds(bufferMilliseconds)) MS"
        case let .failed(message):
            return message.uppercased()
        }
    }

    private var phoneAccessibilityValue: String {
        if isSoundPaused { return "Theremin paused. Instrument and calibration preserved." }
        guard armed else { return "Muted by the arm switch." }
        switch audioStatus {
        case .stopped:
            return "Off."
        case .starting:
            return "Starting. The Mac link remains independent."
        case .interrupted:
            return "Paused by another audio session."
        case let .running(sampleRate, bufferMilliseconds, route):
            return "Active through \(route), \(Int(sampleRate.rounded())) hertz, \(Self.milliseconds(bufferMilliseconds)) millisecond audio buffer."
        case let .failed(message):
            return "Failed. \(message). The Mac link remains independent."
        }
    }

    private var linkTone: MotionOutputRouteStatus.Tone {
        switch sender.state {
        case .idle: .idle
        case .browsing, .connecting: .busy
        case .connected: .linked
        case .waiting, .failed: .attention
        }
    }

    private var actionTitle: String {
        switch sender.state {
        case .idle: "FIND MAC"
        case .browsing: "STOP SEARCHING"
        case .connecting: "CANCEL"
        case .connected: "DISCONNECT"
        case .waiting, .failed: "STOP"
        }
    }

    private var linkAccessibilityValue: String {
        switch sender.state {
        case .idle:
            return "Off. Sends notes and controllers as MIDI to Kaizen Motion Bridge on a Mac."
        case .browsing:
            return "Searching this network."
        case let .connecting(name):
            return "Connecting to \(name)."
        case let .connected(name):
            let rtt = sender.roundTripMilliseconds.map { "round trip \(Self.milliseconds($0)) milliseconds" } ?? "measuring round trip"
            let jitter = sender.jitterMilliseconds.map { ", jitter \(Self.milliseconds($0)) milliseconds" } ?? ""
            return "Linked to \(name), \(rtt)\(jitter)."
        case let .waiting(message):
            return "Waiting. \(message)"
        case let .failed(message):
            return "Failed. \(message)"
        }
    }

    private enum PeerRole: Equatable {
        case available
        case connecting
        case linked

        var title: String {
            switch self {
            case .available: "CONNECT"
            case .connecting: "CONNECTING"
            case .linked: "LINKED"
            }
        }

        var spoken: String {
            switch self {
            case .available: "Available"
            case .connecting: "Connecting"
            case .linked: "Linked"
            }
        }

        var colour: Color {
            switch self {
            case .available: MotionFinish.ivory
            case .connecting: MotionFinish.ivoryDim
            case .linked: MotionFinish.amber
            }
        }
    }

    private func peerRole(_ peer: DesktopMotionPeer) -> PeerRole {
        switch sender.state {
        case let .connecting(name) where name == peer.name: .connecting
        case let .connected(name) where name == peer.name: .linked
        default: .available
        }
    }

    static func milliseconds(_ value: Double) -> String {
        value < 10 ? String(format: "%.1f", value) : String(format: "%.0f", value)
    }
}

private struct MotionPanelRowStyle: ButtonStyle {
    func makeBody(configuration: Configuration) -> some View {
        configuration.label
            .opacity(configuration.isPressed ? 0.62 : 1)
            .animation(.easeOut(duration: 0.1), value: configuration.isPressed)
    }
}
