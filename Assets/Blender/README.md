# Kaizen Motion control assets (Blender)

Physical control sprites for the Graphite Motion interface, rebuilt 2026-09-27 to match the approved
concept (`SharedUI/Assets/KaizenMotionGraphiteConcept.png`) over the approved empty-well chassis
(`SharedUI/Assets/KaizenMotionGraphiteChassis.png`). The chassis is unchanged; every changing control
state lives in its own transparent sheet.

## Rebuild

```sh
Assets/Blender/render_all.sh            # Blender 5.2, Cycles (Metal GPU; KM_CYCLES_DEVICE=CPU for CPU)
```

This renders every control, saves the editable `.blend` scenes to `sources/`, packs 8-bit sheets into
`exports/` and copies them to `SharedUI/Assets/`, and writes `exports/controls_manifest.json` with sizes,
grids and SHA-256 hashes. Intermediate 16-bit renders go to `renders/` (regenerable; not needed to build).

## Scene contract

- 1 concept pixel (cpx) = 0.01 Blender units; world X = concept x, world Y = -concept y.
- One perspective camera above the concept's optical centre (426.5, 870) at 2400 cpx height frames each
  control with lens shift, reproducing the concept's off-axis parallax (knob tops drift away from the
  optical centre, the facing skirt wall shows).
- The concept raster is 2.3 % taller than wide (measured on every circular part). Sprites are rendered
  round and drawn 1.023 x taller in `MotionStageView` (`MotionControlGeometry.verticalStretch`).
- Transparent film. Contact shadow and well occlusion are a separate static shadow-catcher pass: a round
  knob's shadow does not change as it turns.
- Materials: lathe-spun graphite (concentric grooves, radial-tangent anisotropy, Atlas
  `AtlasSources/motion_machined_roughness.png` micro-wear), warm champagne bead bezels, black-oxide
  knurl with cavity darkening, ivory enamel index. Cycles light linking keeps each highlight where the
  concept has it (face bow-tie from the key only; rim strips only on bezels).

## Sheets

| App file | Grid | Frame | Placement (cpx) | Index |
| --- | --- | --- | --- | --- |
| `MotionSelectorAtlas.png` | 3 x 2 | 320 px | centre (279.6, 1173.8), 216 wide | frame = instrument (0 Shaker ... 5 Theremin/FX), 30 degrees per detent, Shaker at 12 o'clock |
| `MotionSelectorShadow.png` | 1 | 384 px | same centre, 320 wide | static |
| `MotionSensitivityAtlas.png` | 8 x 8 | 448 px | centre (630.3, 1192.2), 336 wide | frame 32 = 12 o'clock; 270/62 degrees per frame; frames 1-63 = -135...+135 degrees; frame 0 is an unused guard |
| `MotionSensitivityShadow.png` | 1 | 528 px | same centre, 440 wide | static |
| `MotionArmSwitchAtlas.png` | 2 x 1 | 216 px | centre (425.8, 1606), 136 wide | 0 armed (pilot lit, lever toward it), 1 muted (pilot dark, lever thrown down) |
| `MotionLampAtlas.png` | 6 x 2 | 288 x 176 px | 72 x 44 cpx tiles at integer origins (74, 1049/1096/1143/1189/1236/1281) | column = slot, row 0 unlit, row 1 lit |

Sensitivity value to frame: angle = (v - 0.62) / 0.62 x 135 below the sweet spot and
(v - 0.62) / 0.38 x 135 above it, so the default 0.62 is exactly 12 o'clock and 0 / 1 are -135 / +135.

### Why the selector is six frames, not 64

The selector only ever displays six detents. A 64-frame full turn (5.625-degree steps) cannot land on
30-degree detents, so the old mapping had to use approximate frames. Six exact detent frames are a
lossless contract for every state the app can show, at a higher per-frame resolution (320 px against the
~298 device pixels the knob occupies on a 1179-pixel-wide iPhone) and one tenth of the decoded memory.

The sensitivity sheet stays 64 frames (continuous control) at 448 px per frame (the knob occupies ~464
device pixels on a 1179-wide iPhone). Decoded, it is ~51 MB; all other control sheets together are
under 5 MB.

## Lamps

Row 1 tiles are exact crops of the approved chassis, which bakes the source's lit lamps, so the active
slot is pixel-identical to the source. Row 0 keeps each slot's own bezel pixels, removes the baked lamp
light with a linear-light least-squares split into neutral panel tint + lamp light (projecting leftover
chroma onto the panel tint), and composites the Blender-rendered smoked amber lens
(`render_lamps.py`) over the glass. `exports/lamp_sheet_report.json` records the residual warmth outside
the new lens for every slot against the plain panel's own natural variation.

## Scripts

- `scripts/km_blender.py`: scene, camera, light, lathe geometry and material helpers.
- `scripts/km_controls.py`: measured control specifications (profiles, radii, lights, frame contracts).
- `scripts/render_rotary.py`: selector and sensitivity frames and shadow passes.
- `scripts/render_switch.py`: two-state arm switch (pilot, recess, ball lever; studio-dome reflections).
- `scripts/render_lamps.py`: unlit lens for each lamp slot.
- `scripts/build_lamp_sheet.py`, `scripts/pack_sheets.py`: sheet assembly, dithered 8-bit export, manifest.
- `scripts/compare_concept.py`, `profile_compare.py`, `angular_compare.py`: static composites over the
  chassis and radial/angular luminance profiles against the concept (used to tune every control).
- `scripts/qa_capture_compare.py`: normalized concept vs simulator capture comparison for `design-qa.md`.

## App icon

`Assets/Blender/render_app_icon.sh` renders the 1024 x 1024 opaque app icon from
`scripts/render_app_icon.py` (editable scene saved to `sources/kaizen_motion_app_icon.blend`), validates
it and installs it at `App/Assets.xcassets/AppIcon.appiconset/AppIcon.png`. Exports:
`exports/AppIcon-1024.png`, `exports/AppIcon-small-sizes.png`, `exports/app_icon_manifest.json`.
Production and QA notes: `docs/app-icon-qa/README.md`.
