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

## Public demo and community forms

Play at https://kaizendsp.com/motion. The branded route serves these public static assets. Send feedback and Join the beta pause the instrument and open accessible forms. The forms submit to the Kaizen website API and acknowledge only successful storage; beta requests require explicit Motion-only email consent and do not automatically send mail or grant TestFlight access. Optional feedback details include selected settings and browser version, never raw motion or audio. The website backend and owner-only inbox are maintained in the Kaizen website repository. Forks should configure their own backend in `src/community.ts` before collecting submissions.
