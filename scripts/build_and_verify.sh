#!/bin/zsh
set -euo pipefail

project_dir="${0:A:h:h}"
derived_data="$project_dir/DerivedData"

cd "$project_dir"

swift test --package-path Packages/MotionCore
xcodegen generate
xcodebuild \
  -project KaizenMotion.xcodeproj \
  -scheme KaizenMotion \
  -configuration Debug \
  -sdk iphonesimulator \
  -destination 'generic/platform=iOS Simulator' \
  ARCHS=arm64 \
  -derivedDataPath "$derived_data" \
  CODE_SIGNING_ALLOWED=NO \
  build

xcodebuild \
  -project KaizenMotion.xcodeproj \
  -scheme KaizenMotion \
  -configuration Release \
  -sdk iphoneos \
  -destination 'generic/platform=iOS' \
  -derivedDataPath "$derived_data" \
  CODE_SIGNING_ALLOWED=NO \
  CODE_SIGNING_REQUIRED=NO \
  build

extension_plist="$derived_data/Build/Products/Debug-iphonesimulator/KaizenMotion.app/PlugIns/MotionMIDIExtension.appex/Info.plist"
device_extension_plist="$derived_data/Build/Products/Release-iphoneos/KaizenMotion.app/PlugIns/MotionMIDIExtension.appex/Info.plist"

for plist in "$extension_plist" "$device_extension_plist"; do
  test -f "$plist"
  test "$(/usr/libexec/PlistBuddy -c 'Print :NSExtension:NSExtensionAttributes:AudioComponents:0:type' "$plist")" = "aumi"
  test "$(/usr/libexec/PlistBuddy -c 'Print :NSExtension:NSExtensionAttributes:AudioComponents:0:manufacturer' "$plist")" = "KzDp"
  test "$(/usr/libexec/PlistBuddy -c 'Print :NSExtension:NSExtensionAttributes:AudioComponents:0:subtype' "$plist")" = "KMot"
done

test "$(lipo -archs "$derived_data/Build/Products/Release-iphoneos/KaizenMotion.app/KaizenMotion")" = "arm64"
test "$(lipo -archs "$derived_data/Build/Products/Release-iphoneos/KaizenMotion.app/PlugIns/MotionMIDIExtension.appex/MotionMIDIExtension")" = "arm64"

echo "Kaizen Motion local engineering verification passed."
