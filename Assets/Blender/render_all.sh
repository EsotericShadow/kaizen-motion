#!/bin/zsh
# Re-renders every Kaizen Motion control from the project-local Blender scripts, then packs the
# app sprite sheets. Set KM_CYCLES_DEVICE=CPU to render without the GPU.
set -euo pipefail
here="${0:A:h}"
cd "$here/scripts"
for control in selector sensitivity; do
  blender -b --factory-startup --python render_rotary.py -- "$control" "$here/renders/$control" \
    --pass frames --frames all --samples "${KM_SAMPLES:-160}" --save-blend "$here/sources/kaizen_motion_${control}.blend"
  blender -b --factory-startup --python render_rotary.py -- "$control" "$here/renders/$control" \
    --pass shadow --samples "${KM_SHADOW_SAMPLES:-384}" --save-blend "$here/sources/kaizen_motion_${control}_shadow.blend"
done
blender -b --factory-startup --python render_switch.py -- "$here/renders/switch" \
  --samples "${KM_SWITCH_SAMPLES:-384}" --save-blend "$here/sources/kaizen_motion_arm_switch.blend"
blender -b --factory-startup --python render_lamps.py -- "$here/renders/lamps" \
  --samples "${KM_LAMP_SAMPLES:-256}" --save-blend "$here/sources/kaizen_motion_lamp_lens.blend"
python3 pack_sheets.py "$here/renders" "$here/../../SharedUI/Assets" "$here/exports"
echo "Kaizen Motion control renders complete"
