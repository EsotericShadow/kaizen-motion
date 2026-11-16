"""Pack Blender renders into the app's transparent PNG sprite sheets.

python3 pack_sheets.py <renders_dir> <app_assets_dir> <exports_dir>

16-bit renders are quantised to 8-bit with a fixed-seed +/-0.5 LSB dither (no banding on the dark
spun faces). Every sheet is written to the exports directory and copied into the app bundle folder,
and a JSON manifest records sizes, grids and SHA-256 hashes.
"""

import hashlib
import json
import os
import shutil
import subprocess
import sys

import numpy as np
from PIL import Image

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
import km_controls as kc  # noqa: E402


def load16(path):
    im = Image.open(path)
    arr = np.asarray(im).astype(np.float64)
    return arr / (65535.0 if arr.max() > 255 else 255.0)


def quantise(arr, seed):
    rng = np.random.default_rng(seed)
    noise = rng.uniform(-0.5, 0.5, arr.shape[:2] + (1,))
    rgb = np.clip(np.round(arr[..., :3] * 255 + noise), 0, 255)
    alpha = np.clip(np.round(arr[..., 3:4] * 255), 0, 255)
    # Fully transparent pixels carry no colour.
    rgb = np.where(alpha > 0, rgb, 0)
    return np.concatenate([rgb, alpha], -1).astype(np.uint8)


def grid_sheet(frames, grid):
    cols, rows = grid
    h, w = frames[0].shape[:2]
    sheet = np.zeros((h * rows, w * cols, 4), np.uint8)
    for i, frame in enumerate(frames):
        r, c = divmod(i, cols)
        sheet[r * h:(r + 1) * h, c * w:(c + 1) * w] = frame
    return sheet


def save(arr, path):
    Image.fromarray(arr, "RGBA").save(path, optimize=True)


def sha(path):
    return hashlib.sha256(open(path, "rb").read()).hexdigest()


def main():
    renders, app_dir, exports = map(os.path.abspath, sys.argv[1:4])
    os.makedirs(exports, exist_ok=True)
    outputs = {}

    for spec, name in ((kc.SELECTOR, "MotionSelectorAtlas"), (kc.SENSITIVITY, "MotionSensitivityAtlas")):
        control = spec["name"]
        frames = [quantise(load16(os.path.join(renders, control, f"{control}_{i:02d}.png")), 1000 + i)
                  for i in range(spec["frame_count"])]
        sheet = grid_sheet(frames, spec["sheet_grid"])
        path = os.path.join(exports, f"{name}.png")
        save(sheet, path)
        outputs[name] = {
            "frames": spec["frame_count"], "grid": list(spec["sheet_grid"]), "frame_px": spec["resolution"],
            "span_cpx": spec["span"], "centre_cpx": list(spec["centre"]), "zero_frame": spec["zero_frame"],
            "step_degrees": round(spec["step_degrees"], 6),
        }
        shadow = quantise(load16(os.path.join(renders, control, f"{control}_shadow.png")), 2000)
        shadow_name = name.replace("Atlas", "Shadow")
        save(shadow, os.path.join(exports, f"{shadow_name}.png"))
        outputs[shadow_name] = {"frame_px": spec["shadow_resolution"], "span_cpx": spec["shadow_span"],
                                "centre_cpx": list(spec["centre"])}

    switch = [quantise(load16(os.path.join(renders, "switch", f"switch_{s}.png")), 3000 + k)
              for k, s in enumerate(("armed", "muted"))]
    save(grid_sheet(switch, (2, 1)), os.path.join(exports, "MotionArmSwitchAtlas.png"))
    outputs["MotionArmSwitchAtlas"] = {"frames": 2, "grid": [2, 1], "index": {"armed": 0, "muted": 1},
                                       "frame_px": 216, "span_cpx": 136.0, "centre_cpx": [425.8, 1606.0]}

    report = os.path.join(exports, "lamp_sheet_report.json")
    subprocess.run([sys.executable, os.path.join(HERE, "build_lamp_sheet.py"), os.path.join(renders, "lamps"),
                    os.path.join(exports, "MotionLampAtlas.png"), "--report", report], check=True,
                   stdout=subprocess.DEVNULL)
    lamp = json.load(open(report))
    outputs["MotionLampAtlas"] = {"grid": [6, 2], "rows": {"unlit": 0, "lit": 1}, "tile_cpx": lamp["tile_cpx"],
                                  "px_per_cpx": lamp["px_per_cpx"],
                                  "tile_origins_cpx": [s["tile_origin_cpx"] for s in lamp["slots"]]}

    for name, meta in outputs.items():
        src = os.path.join(exports, f"{name}.png")
        dst = os.path.join(app_dir, f"{name}.png")
        shutil.copyfile(src, dst)
        w, h = Image.open(src).size
        meta.update({"size_px": [w, h], "sha256": sha(src), "app_copy_sha256": sha(dst)})
    manifest = os.path.join(exports, "controls_manifest.json")
    with open(manifest, "w") as fh:
        json.dump({"vertical_stretch": kc.VERTICAL_STRETCH, "sheets": outputs}, fh, indent=2)
        fh.write("\n")
    print(json.dumps({k: [v["size_px"], v["sha256"][:12]] for k, v in outputs.items()}, indent=1))


if __name__ == "__main__":
    main()
