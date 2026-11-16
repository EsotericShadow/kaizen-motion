import CoreAudioKit
import SwiftUI

public final class AudioUnitViewController: AUViewController, AUAudioUnitFactory {
    private var motionAudioUnit: MotionMIDIAudioUnit?
    private var hostingController: UIHostingController<MotionMIDIView>?

    public override func viewDidLoad() {
        super.viewDidLoad()
        preferredContentSize = CGSize(width: 520, height: 760)
        if let motionAudioUnit { installView(for: motionAudioUnit) }
    }

    public func createAudioUnit(with componentDescription: AudioComponentDescription) throws -> AUAudioUnit {
        let unit = try MotionMIDIAudioUnit(componentDescription: componentDescription, options: [])
        motionAudioUnit = unit
        DispatchQueue.main.async { [weak self, weak unit] in
            guard let self, let unit, self.isViewLoaded else { return }
            self.installView(for: unit)
        }
        return unit
    }

    private func installView(for audioUnit: MotionMIDIAudioUnit) {
        hostingController?.willMove(toParent: nil)
        hostingController?.view.removeFromSuperview()
        hostingController?.removeFromParent()

        let host = UIHostingController(rootView: MotionMIDIView(audioUnit: audioUnit))
        addChild(host)
        host.view.translatesAutoresizingMaskIntoConstraints = false
        view.addSubview(host.view)
        NSLayoutConstraint.activate([
            host.view.topAnchor.constraint(equalTo: view.topAnchor),
            host.view.leadingAnchor.constraint(equalTo: view.leadingAnchor),
            host.view.trailingAnchor.constraint(equalTo: view.trailingAnchor),
            host.view.bottomAnchor.constraint(equalTo: view.bottomAnchor)
        ])
        host.didMove(toParent: self)
        hostingController = host
    }
}
