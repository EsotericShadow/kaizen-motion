# Motion — browser edition

Playable Shaker, Classic Theremin and CHIMERA. Static HTTPS hosting; sound runs in an AudioWorklet, CHIMERA is the real upstream Rust airway compiled to WASM, anatomy is drawn on the main thread. Sensor data is processed locally and is not uploaded. No analytics or microphone access.

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

The PCM bank contains the same 64 CC0 recorded excerpts as Motion's native C bank. The web worklet uses independent grains and smooth windows, with continuous measured XYZ effort. Touch and keyboard controls are available when motion is unavailable. Visibility changes pause sound and require a user tap to resume.

CHIMERA engine/bindings and Anatomy3D are pinned to upstream commit dd68078730126c50cd119b18b3889e414c4f4528, MIT, by Jameson Hodge. Three.js 0.186.1 is MIT. Licenses and shaker source attribution are linked in Credits. Build metadata under `.openai` belongs to the hosting environment.
