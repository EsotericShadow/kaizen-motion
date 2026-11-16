#!/bin/zsh
# Renders the Kaizen Motion app icon from its Blender source and installs it in
# App/Assets.xcassets/AppIcon.appiconset. Set KM_CYCLES_DEVICE=CPU to render without the GPU.
set -euo pipefail
here="${0:A:h}"
project="${here:h:h}"
cd "$here/scripts"
blender -b --factory-startup --python render_app_icon.py -- "$here/renders/app_icon/AppIcon-render.png" \
  --samples "${KM_ICON_SAMPLES:-1024}" --save-blend "$here/sources/kaizen_motion_app_icon.blend"
python3 finalize_app_icon.py "$here/renders/app_icon/AppIcon-render.png" "$here/exports" \
  "$project/App/Assets.xcassets/AppIcon.appiconset"
rm -f "$here/sources/kaizen_motion_app_icon.blend1"
sips -g pixelWidth -g pixelHeight -g hasAlpha "$project/App/Assets.xcassets/AppIcon.appiconset/AppIcon.png"
echo "Kaizen Motion app icon installed"
