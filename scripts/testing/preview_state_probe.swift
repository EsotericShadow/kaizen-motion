import Foundation
import Darwin
setbuf(stdout, nil)
let observer = DistributedNotificationCenter.default().addObserver(
    forName: .init("com.kaizendsp.motion.preview-state"), object: nil, queue: nil
) { notification in
    guard let mode = notification.userInfo?["instrument"] as? Int,
          let armed = notification.userInfo?["armed"] as? Bool,
          let voice = notification.userInfo?["voice"] as? Int,
          mode == 5, armed, voice == 1 else { return }
    print("PASS: bridge delivered Theremin/CHIMERA/armed state across processes")
    exit(0)
}
print("READY")
DispatchQueue.main.asyncAfter(deadline: .now() + 6) { exit(1) }
RunLoop.main.run()
