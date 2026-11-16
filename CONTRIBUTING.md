# Contributing

Motion is an early instrument prototype. Keep changes focused, describe the physical gesture and resulting behavior, and run the affected tests. Respect the audio boundary: no allocation, locks, file/network access or UI work inside rendering. UI telemetry must use bounded snapshots and must never read mutable render-owned state.

Preserve Classic Theremin's continuous pitch response and keep MIDI timing unquantized. Simulator fixtures are synthetic engineering checks; label them as such and report physical device/DAW acceptance separately.

For issues, include the device/OS, mode/voice, connection state and reproducible steps. Do not post signing credentials, private logs or provisioning profiles.
