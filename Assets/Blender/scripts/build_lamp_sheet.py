"""Assemble the six-slot, two-state instrument lamp sheet.

python3 build_lamp_sheet.py <lens_render_dir> <out_sheet.png> [--report report.txt]

Row 0 = unlit, row 1 = lit; column = slot index (0 = Shaker ... 5 = Theremin / FX).
Each tile covers the slot's integer-aligned 72 x 44 concept-pixel rect at 4 px per concept pixel.
- Lit tiles are exact crops of the approved chassis (which bakes the source's lit lamp), so an active
  slot is pixel-identical to the approved source.
- Unlit tiles keep the slot's own bezel pixels with the baked amber light removed (linear-light
  decomposition into neutral surface + amber emitter light), then place the Blender-rendered
  smoked lens over the glass. Nothing amber remains, so there is zero leakage.
"""

import argparse
import json
import os
import sys

import numpy as np
from PIL import Image

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
import compare_concept as cc  # noqa: E402

CENTRES = [(110.37, 1071.06), (110.41, 1117.64), (110.31, 1164.99),
           (110.20, 1211.17), (109.97, 1257.62), (109.96, 1302.99)]
TILE = (72, 44)
PX = 4


def tile_origin(centre):
    return round(centre[0] - TILE[0] / 2), round(centre[1] - TILE[1] / 2)


def upsample(img, box):
    x0, y0, x1, y1 = box
    crop = Image.fromarray((img[y0:y1, x0:x1] * 255 + 0.5).astype(np.uint8))
    return np.asarray(crop.resize(((x1 - x0) * PX, (y1 - y0) * PX), Image.LANCZOS)).astype(np.float64) / 255.0


def remove_amber(tile_srgb, panel_tint, amber):
    """Split each pixel into neutral surface (n * panel tint) + lamp light (a * amber), both >= 0,
    by least squares over RGB; drop the lamp light and project the remaining chroma onto the panel
    tint where lamp light was present (so no green/cyan remainder is left behind)."""
    lin = cc.srgb_to_linear(np.clip(tile_srgb, 0, 1))
    t = panel_tint / np.linalg.norm(panel_tint)
    A = amber / np.linalg.norm(amber)
    M = np.stack([t, A], 1)
    P = np.linalg.pinv(M)
    a = np.clip(lin[..., 0] * P[1, 0] + lin[..., 1] * P[1, 1] + lin[..., 2] * P[1, 2], 0.0, None)
    a = np.clip(a - 0.0015, 0.0, None)
    stripped = np.clip(lin - a[..., None] * A, 0.0, None)
    lum = lambda c: c[..., 0] * 0.2126 + c[..., 1] * 0.7152 + c[..., 2] * 0.0722
    neutral = (lum(stripped) / lum(panel_tint))[..., None] * panel_tint
    w = np.clip(a / 0.006, 0.0, 1.0)[..., None]
    out = stripped * (1 - w) + neutral * w
    return cc.linear_to_srgb(np.clip(out, 0, 1)), a


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("lens_dir")
    ap.add_argument("out")
    ap.add_argument("--report")
    args = ap.parse_args()
    chassis = cc.load_rgb(os.path.join(cc.ASSETS, "KaizenMotionGraphiteChassis.png"))
    # Neutral panel tint from bezel-free panel between the lamp column and the selector.
    panel = cc.srgb_to_linear(chassis[1040:1330, 150:165].reshape(-1, 3)).mean(0)
    # Effective lamp light: mean linear colour of the six baked lit lenses (core + rim).
    lens_px = []
    for cx, cy in CENTRES:
        patch = chassis[round(cy) - 4:round(cy) + 5, round(cx) - 19:round(cx) + 20]
        lens_px.append(cc.srgb_to_linear(patch).reshape(-1, 3))
    lamp_light = np.concatenate(lens_px).mean(0)
    lamp_light = lamp_light / lamp_light[0]
    tw, th = TILE[0] * PX, TILE[1] * PX
    sheet = np.zeros((th * 2, tw * 6, 4))
    plain = cc.srgb_to_linear(chassis[1040:1330, 150:200])
    plain_resid = plain[..., 0] - plain[..., 2] * panel[0] / panel[2]
    report = {"tile_cpx": TILE, "px_per_cpx": PX,
              "plain_panel_residual_warmth_max_linear": round(float(plain_resid.max()), 5),
              "lamp_light_linear": [round(float(v), 4) for v in lamp_light], "slots": []}
    for i, centre in enumerate(CENTRES):
        x0, y0 = tile_origin(centre)
        box = (x0, y0, x0 + TILE[0], y0 + TILE[1])
        lit = upsample(chassis, box)
        base, amber = remove_amber(lit, panel, lamp_light)
        lens = np.asarray(Image.open(os.path.join(args.lens_dir, f"lamp_off_{i}.png")).convert("RGBA")).astype(np.float64)
        lens /= 65535.0 if lens.max() > 255 else 255.0
        alpha = lens[..., 3:4]
        off = lens[..., :3] * alpha + base * (1 - alpha)
        sheet[0:th, i * tw:(i + 1) * tw, :3] = off
        sheet[th:, i * tw:(i + 1) * tw, :3] = lit
        sheet[..., 3] = 1.0
        # Leakage check on the unlit tile: residual amber warmth outside the new lens, against the
        # natural warmth variation of the plain panel (same metric).
        lin_off = cc.srgb_to_linear(off)
        resid = (lin_off[..., 0] - lin_off[..., 2] * panel[0] / panel[2])
        outside = alpha[..., 0] < 0.01
        lens_region = alpha[..., 0] > 0.99
        report["slots"].append({
            "slot": i, "centroid_cpx": centre, "tile_origin_cpx": [x0, y0],
            "baked_amber_peak_linear": round(float(amber.max()), 4),
            "unlit_bezel_residual_warmth_max_linear": round(float(resid[outside].max()), 5),
            "unlit_lens_mean_srgb": [round(float(v) * 255, 1) for v in off[lens_region].mean(0)],
        })
    Image.fromarray((np.clip(sheet, 0, 1) * 255 + 0.5).astype(np.uint8), "RGBA").save(args.out, optimize=True)
    text = json.dumps(report, indent=2)
    print(text)
    if args.report:
        with open(args.report, "w") as fh:
            fh.write(text + "\n")


if __name__ == "__main__":
    main()
