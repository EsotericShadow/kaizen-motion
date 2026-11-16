"""Composite rendered control sprites over the approved chassis and compare with the concept.

python3 compare_concept.py <out.png> --zoom 4 --region x0,y0,x1,y1 \
    --sprite path,cx,cy,span[,stretch] [--sprite ...] [--rect path,x0,y0,x1,y1] [--metrics]

Sprites use the exact placement contract of SharedUI/MotionStageView.swift: centred at (cx, cy) cpx,
span cpx wide and span * stretch cpx tall. The comparison is rendered at `zoom` x concept resolution.
Panels: concept | composite | absolute difference (x4 gain).
"""

import argparse
import os

import numpy as np
from PIL import Image, ImageDraw

HERE = os.path.dirname(os.path.abspath(__file__))
PROJECT = os.path.abspath(os.path.join(HERE, "..", "..", ".."))
ASSETS = os.path.join(PROJECT, "SharedUI", "Assets")


def srgb_to_linear(c):
    return np.where(c <= 0.04045, c / 12.92, ((c + 0.055) / 1.055) ** 2.4)


def linear_to_srgb(c):
    c = np.clip(c, 0, 1)
    return np.where(c <= 0.0031308, c * 12.92, 1.055 * c ** (1 / 2.4) - 0.055)


def composite(base_rgb, layers, zoom):
    """base_rgb: float sRGB HxWx3 at concept res. layers: (rgba PIL image, box in cpx)."""
    h, w = base_rgb.shape[:2]
    big = Image.fromarray((np.clip(base_rgb, 0, 1) * 255 + 0.5).astype(np.uint8)).resize(
        (w * zoom, h * zoom), Image.LANCZOS)
    out = np.asarray(big).astype(np.float64) / 255.0
    for img, (x0, y0, x1, y1) in layers:
        px0, py0 = int(round(x0 * zoom)), int(round(y0 * zoom))
        px1, py1 = int(round(x1 * zoom)), int(round(y1 * zoom))
        sprite = img.convert("RGBA").resize((px1 - px0, py1 - py0), Image.LANCZOS)
        s = np.asarray(sprite).astype(np.float64) / 255.0
        # Clip to canvas
        cx0, cy0 = max(px0, 0), max(py0, 0)
        cx1, cy1 = min(px1, out.shape[1]), min(py1, out.shape[0])
        s = s[cy0 - py0:cy1 - py0, cx0 - px0:cx1 - px0]
        a = s[..., 3:4]
        region = out[cy0:cy1, cx0:cx1]
        out[cy0:cy1, cx0:cx1] = s[..., :3] * a + region * (1 - a)
    return out


def load_rgb(path):
    return np.asarray(Image.open(path).convert("RGB")).astype(np.float64) / 255.0


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("out")
    ap.add_argument("--zoom", type=int, default=4)
    ap.add_argument("--region", required=True)
    ap.add_argument("--sprite", action="append", default=[])
    ap.add_argument("--rect", action="append", default=[])
    ap.add_argument("--base", default=os.path.join(ASSETS, "KaizenMotionGraphiteChassis.png"))
    ap.add_argument("--concept", default=os.path.join(ASSETS, "KaizenMotionGraphiteConcept.png"))
    ap.add_argument("--panels", default="concept,composite,diff")
    args = ap.parse_args()

    base = load_rgb(args.base)
    concept = load_rgb(args.concept)
    layers = []
    for spec in args.sprite:
        parts = spec.split(",")
        path = parts[0]
        cx, cy, span = map(float, parts[1:4])
        stretch = float(parts[4]) if len(parts) > 4 else 1.0
        img = Image.open(path)
        hw, hh = span / 2.0, span * stretch / 2.0
        layers.append((img, (cx - hw, cy - hh, cx + hw, cy + hh)))
    for spec in args.rect:
        parts = spec.split(",")
        layers.append((Image.open(parts[0]), tuple(map(float, parts[1:5]))))

    z = args.zoom
    x0, y0, x1, y1 = map(int, args.region.split(","))
    comp = composite(base, layers, z)[y0 * z:y1 * z, x0 * z:x1 * z]
    conc = np.asarray(Image.fromarray((concept * 255 + 0.5).astype(np.uint8)).resize(
        (concept.shape[1] * z, concept.shape[0] * z), Image.LANCZOS)).astype(np.float64)[y0 * z:y1 * z, x0 * z:x1 * z] / 255.0
    diff = np.clip(np.abs(comp - conc) * 4, 0, 1)
    panels = {"concept": conc, "composite": comp, "diff": diff}
    names = args.panels.split(",")
    ph, pw = comp.shape[:2]
    sheet = Image.new("RGB", (pw * len(names) + 8 * (len(names) - 1), ph), (255, 0, 0))
    for i, name in enumerate(names):
        sheet.paste(Image.fromarray((panels[name] * 255 + 0.5).astype(np.uint8)), (i * (pw + 8), 0))
    sheet.save(args.out)
    lum = lambda a: a[..., 0] * 0.2126 + a[..., 1] * 0.7152 + a[..., 2] * 0.0722
    lc, lk = lum(conc), lum(comp)
    print(f"region {args.region}: mean |dL| {np.abs(lc - lk).mean() * 255:.2f}/255, "
          f"mean L concept {lc.mean() * 255:.1f} composite {lk.mean() * 255:.1f}, "
          f"mean RGB concept {np.round(conc.reshape(-1, 3).mean(0) * 255, 1)} composite {np.round(comp.reshape(-1, 3).mean(0) * 255, 1)}")


if __name__ == "__main__":
    main()
