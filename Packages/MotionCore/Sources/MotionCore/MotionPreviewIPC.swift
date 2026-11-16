/// Local Mac preview coordination. State is deliberately separate from DAW MIDI,
/// so selecting an instrument never changes the patch loaded in the user's DAW.
public enum MotionPreviewIPC {
    public static let state = "com.kaizendsp.motion.preview-state"
    public static let request = "com.kaizendsp.motion.preview-request"
}
