import SwiftUI
import WebKit

/// Upstream CHIMERA anatomy. A local, network-free drawing surface; Rust owns audio.
struct MotionChimeraHeadView: UIViewRepresentable {
    var scene: () -> String?
    func makeCoordinator() -> Coordinator { Coordinator(scene: scene) }
    func makeUIView(context: Context) -> WKWebView {
        let config = WKWebViewConfiguration()
        config.websiteDataStore = .nonPersistent()
        #if DEBUG
        config.userContentController.add(context.coordinator, name: "chimeraDiagnostics")
        config.userContentController.addUserScript(WKUserScript(source: "window.addEventListener('error',e=>window.webkit.messageHandlers.chimeraDiagnostics.postMessage(String(e.message)+' @ '+e.filename+':'+e.lineno));", injectionTime: .atDocumentStart, forMainFrameOnly: true))
        #endif
        let view = WKWebView(frame: .zero, configuration: config)
        view.isOpaque = false
        view.backgroundColor = .clear
        view.scrollView.backgroundColor = .clear
        view.scrollView.isScrollEnabled = false
        view.navigationDelegate = context.coordinator
        context.coordinator.view = view
        if let url = Bundle.main.url(forResource: "index", withExtension: "html", subdirectory: "ChimeraHead") {
            view.loadFileURL(url, allowingReadAccessTo: url.deletingLastPathComponent())
        }
        view.accessibilityLabel = "CHIMERA vocal anatomy. Drag to rotate the head."
        return view
    }
    func updateUIView(_ view: WKWebView, context: Context) { context.coordinator.scene = scene }
    static func dismantleUIView(_ view: WKWebView, coordinator: Coordinator) {
        coordinator.timer?.invalidate(); coordinator.timer = nil
        view.configuration.userContentController.removeScriptMessageHandler(forName: "chimeraDiagnostics")
        view.stopLoading(); view.navigationDelegate = nil
    }
    final class Coordinator: NSObject, WKNavigationDelegate, WKScriptMessageHandler {
        func userContentController(_ controller: WKUserContentController, didReceive message: WKScriptMessage) { print("CHIMERA HEAD: \(message.body)") }
        var scene: () -> String?
        weak var view: WKWebView?
        var timer: Timer?
        var pending = false
        init(scene: @escaping () -> String?) { self.scene = scene }
        func webView(_ webView: WKWebView, didFinish navigation: WKNavigation!) {
            timer?.invalidate()
            timer = Timer.scheduledTimer(withTimeInterval: 1.0 / 25.0, repeats: true) { [weak self] _ in self?.draw() }
            draw()
        }
        func draw() {
            guard !pending, let view, view.window != nil, let json = scene() else { return }
            pending = true
            view.evaluateJavaScript("window.motionScene(\(json))") { [weak self] _, error in
                #if DEBUG
                if let error { print("CHIMERA HEAD: \(error)") }
                #endif
                self?.pending = false
            }
        }
        deinit { timer?.invalidate() }
    }
}
