#!/bin/bash
set -euo pipefail
motion_root="$(cd "$(dirname "$0")/.." && pwd)"
native_root="$motion_root/Packages/MotionChimeraNative"
for target in aarch64-apple-darwin aarch64-apple-ios aarch64-apple-ios-sim; do
    cargo +1.88.0 build --locked --release --manifest-path "$native_root/Cargo.toml" --target "$target"
done
motion_artifacts="$native_root/artifacts"
mkdir -p "$motion_artifacts"
# Build into a temporary output; preserve any previous successful artifact on failure.
temp_artifact="$motion_artifacts/next/MotionChimeraNative.xcframework"
rm -rf "$motion_artifacts/next"
mkdir -p "$motion_artifacts/next"
xcodebuild -create-xcframework \
    -library "$native_root/target/aarch64-apple-darwin/release/libMotionChimeraNative.a" -headers "$native_root/include" \
    -library "$native_root/target/aarch64-apple-ios/release/libMotionChimeraNative.a" -headers "$native_root/include" \
    -library "$native_root/target/aarch64-apple-ios-sim/release/libMotionChimeraNative.a" -headers "$native_root/include" \
    -output "$temp_artifact"
rm -rf "$motion_artifacts/MotionChimeraNative.xcframework"
mv "$temp_artifact" "$motion_artifacts/MotionChimeraNative.xcframework"
rmdir "$motion_artifacts/next"
