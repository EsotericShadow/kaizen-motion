"""Compare a native simulator capture with the approved concept at identical scale.

python3 qa_capture_compare.py <capture.png> <out_dir> [--prefix design-qa]

The concept is mapped into the capture exactly as MotionStageView lays out the 853 x 1844 surface
(uniform scale = min(W / 853, H / 1844), centred), so both panels share native capture pixels.
Writes a full side-by-side, focused control comparisons (concept | capture | |difference| x4) and a
JSON of per-control luminance/colour deltas.
"""

import argparse
import json
import os

import numpy as np
from PIL import Image

HERE = os.path.dirname(os.path.abspath(__file__))
PROJECT = os.path.abspath(os.path.join(HERE, "..", "..", ".."))
CONCEPT = os.path.join(PROJECT, "SharedUI", "Assets", "KaizenMotionGraphiteConcept.png")

REGIONS = {
    "selector": (160, 1052, 400, 1296),
    "sensitivity": (450, 1010, 810, 1376),
    "lamps": (66, 1044, 156, 1330),
    "arm-switch": (370, 1530, 482, 1684),
    "control-bay": (40, 1020, 813, 1700),
}


def lum(a):
    return a[..., 0] * 0.2126 + a[..., 1] * 0.7152 + a[..., 2] * 0.0722


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("capture")
    ap.add_argument("out_dir")
    ap.add_argument("--prefix", default="design-qa")
    args = ap.parse_args()
    cap = Image.open(args.capture).convert("RGB")
    W, H = cap.size
    s = min(W / 853, H / 1844)
    ox, oy = (W - 853 * s) / 2, (H - 1844 * s) / 2
    concept = Image.open(CONCEPT).convert("RGB").resize((round(853 * s), round(1844 * s)), Image.LANCZOS)
    mapped = Image.new("RGB", (W, H), (9, 10, 10))
    mapped.paste(concept, (round(ox), round(oy)))
    capa = np.asarray(cap).astype(np.float64) / 255
    cona = np.asarray(mapped).astype(np.float64) / 255

    full = Image.new("RGB", (W * 2 + 24, H), (255, 255, 255))
    full.paste(mapped, (0, 0))
    full.paste(cap, (W + 24, 0))
    full.save(os.path.join(args.out_dir, f"{args.prefix}-comparison.png"), optimize=True)

    metrics = {"capture_size": [W, H], "scale": round(s, 5), "offset": [round(ox, 2), round(oy, 2)]}
    for name, (x0, y0, x1, y1) in REGIONS.items():
        box = (round(ox + x0 * s), round(oy + y0 * s), round(ox + x1 * s), round(oy + y1 * s))
        a = cona[box[1]:box[3], box[0]:box[2]]
        b = capa[box[1]:box[3], box[0]:box[2]]
        diff = np.clip(np.abs(a - b) * 4, 0, 1)
        panel = Image.new("RGB", (a.shape[1] * 3 + 16, a.shape[0]), (255, 255, 255))
        for i, arr in enumerate((a, b, diff)):
            panel.paste(Image.fromarray((arr * 255 + 0.5).astype(np.uint8)), (i * (a.shape[1] + 8), 0))
        zoom = 2 if name != "control-bay" else 1
        panel = panel.resize((panel.width * zoom, panel.height * zoom), Image.LANCZOS)
        panel.save(os.path.join(args.out_dir, f"{args.prefix}-{name}.png"), optimize=True)
        metrics[name] = {
            "capture_box_px": list(box),
            "mean_abs_luma_delta_8bit": round(float(np.abs(lum(a) - lum(b)).mean() * 255), 2),
            "mean_rgb_concept_8bit": [round(float(v) * 255, 1) for v in a.reshape(-1, 3).mean(0)],
            "mean_rgb_capture_8bit": [round(float(v) * 255, 1) for v in b.reshape(-1, 3).mean(0)],
        }
    with open(os.path.join(args.out_dir, f"{args.prefix}-metrics.json"), "w") as fh:
        json.dump(metrics, fh, indent=2)
        fh.write("\n")
    print(json.dumps(metrics, indent=1))


if __name__ == "__main__":
    main()
