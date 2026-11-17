# Motion — browser edition

Opens on CHIMERA. Includes Shaker plus six continuous voices: CHIMERA, Theremin, Velvet, Glass, Orbit and Reed. Static HTTPS hosting; sound runs in an AudioWorklet, CHIMERA is the real upstream Rust airway compiled to WASM, anatomy is drawn on the main thread. Sensor data is processed locally and is not uploaded. No analytics or microphone access.

## Build

```sh
rustup +1.88.0 target add wasm32-unknown-unknown
cargo +1.88.0 build --manifest-path native/Cargo.toml -p chimera-wasm --release --target wasm32-unknown-unknown --locked
cp native/target/wasm32-unknown-unknown/release/chimera_wasm.wasm dist/chimera.wasm
bun install --frozen-lockfile
bun run build
node tests/audio.mjs
bun run dev
```

Serve `dist` at the site root. Real phone motion and AudioWorklet require HTTPS (localhost is allowed for desktop development). Permission and audio resume are requested directly from the user's tap. Native Mac UDP linking, plug-in hosting and background playback are not part of this demo. Test real sensor response on each target phone/browser before claiming native parity.

The browser now uses 32 recorded strokes (about 100–340 ms) extracted from the attributed CC0 sources. Their natural rattle envelopes are preserved, with short smooth edge fades. The previous synthetic noise layer and 18–40 ms micro-grain chopping have been removed. A fixed-capacity XYZ loose-fill simulation now runs on the audio clock at 240 Hz: inelastic wall/grain contacts are grouped into physical strokes that excite complete recorded rattles. Old tails yield gently to a new stroke; there is no free-running noise generator. Its snapshots drive the visual grains and contact waves, so the animation and sound share the same particles. Shape, size, fill count and grain size affect real sound. Warm/Dry/Bright textures choose explicitly indexed recorded-take families and filtering. Bank/source/time/hash provenance is in `dist/shaker-bank.json`; reproduce it with `python3 tools/build_shaker_strokes.py` (ffmpeg, NumPy, SciPy). This replaces the previous free-running effort-driven wash. Genuine phone sound/feel acceptance remains open. Touch and keyboard controls are available when motion is unavailable. Visibility changes pause sound and require a user tap to resume.

CHIMERA engine/bindings and Anatomy3D are pinned to upstream commit dd68078730126c50cd119b18b3889e414c4f4528, MIT, by Jameson Hodge. Three.js 0.186.1 is MIT. Licenses and shaker source attribution are linked in Credits. Build metadata under `.openai` belongs to the hosting environment.

Synths share continuous X pitch / Y colour. Velvet layers warm sine tones and a sub octave; Glass uses inharmonic additive partials; Orbit uses detuned voices; Reed uses a variable harmonic spectrum. Oscillators preserve phase and voice changes use a short fade. Browser processing, sensor rates and latency still need device testing.

## Notes and optional usage counts (web beta 05)

The pitch readout includes the nearest A440 note and cents, from worklet pitch telemetry. The chromatic note matrix has octave selection; tapping a note holds its exact target pitch while vowel/colour still responds. Follow motion, the touch pad or Centre releases the hold. Continuous playing is not quantized.

Usage privacy is off by default. Opting in creates a random browser ID with a 90-day lifetime and a separate tab-session ID. Repeat visits can be deduplicated by browser; these are not unique people. Only hashed random IDs, session start/update times and visible duration reach the separate usage table. No IP, user agent, fingerprint, location, referrer, query string, note, motion, audio or signup data is sent in the usage payload. Time hidden is excluded; a session restarts after 30 minutes away (or four hours of visible time). Turning it off stops reporting and clears local IDs; another tab’s withdrawal also stops reporting. Records expire after 90 days with daily cleanup. The owner report is at https://kaizendsp.com/ops/motion. Hosting infrastructure still handles normal web requests.

Check note/clock behaviour with `bun tests/notes-usage.ts` and consent/ID behaviour with `bun tests/usage-consent.ts`. Backend and private report source live in the Kaizen website repository.

CHIMERA excitation follows phone motion speed (web beta 06). Gravity-free acceleration feeds a short-term damped velocity estimate; angular velocity also excites turning gestures. Speed in either direction drives source pressure, with smooth attack/release and zero pressure at rest/stale input. Sensitivity adjusts the response. There is no static excitation slider or constant-breath mode. The meter displays movement-driven excitation. Desktop touch fallback uses drag speed; tapping a note gives a short preview rather than a sustained breath. Note holds still select pitch independently of movement. Linear speed is an IMU estimate, not position tracking or a calibrated velocity measurement.

## Fixed performance screen and scales (web beta 07)

The performance frame fits the viewport, with a transparent note grid over the CHIMERA head / synth display. Essential controls keep the same positions across instruments. Secondary links, feedback, beta access, advanced chamber controls and usage privacy are in More.

Scale enables pitch constraints. Choose a root and major, natural minor, major/minor pentatonic, Dorian or chromatic. Motion and touch pitch targets use the enabled notes; turning Scale off restores continuous pitch. Edit toggles pitch classes across every octave, selects Custom notes and keeps at least one pitch enabled. Done returns to playing. Notes hides/shows the overlay independently of the active scale. Pitch choices occupy the same cells in every octave, with out-of-range pitches disabled for playback. Tiny boundary hysteresis avoids sensor jitter between neighboring targets. Existing source glide/smoothing remains.

`bun tests/scales.ts` checks every root, preset and playable range, edited masks and boundary behavior. Browser layout/interaction proof is recorded separately from physical phone acceptance.
