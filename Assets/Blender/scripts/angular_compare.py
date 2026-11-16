"""Angular luminance profile (clock positions) of concept vs composite at given radii.

python3 angular_compare.py <out.png> <sprite.png> cx cy span stretch face_cx face_cy r1,r2,...
"""
import sys

import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt  # noqa: E402
import numpy as np  # noqa: E402
from scipy import ndimage as ndi  # noqa: E402
from PIL import Image  # noqa: E402

import compare_concept as cc  # noqa: E402

Z = 4


def ring(img, fx, fy, r, stretch):
    t = np.radians(np.arange(0, 360, 1.0))
    vals = []
    for dr in np.linspace(-1.5, 1.5, 5):
        xs = (fx + (r + dr) * np.sin(t)) * Z
        ys = (fy - (r + dr) * np.cos(t) * stretch) * Z
        v = np.stack([ndi.map_coordinates(img[..., k], [ys, xs], order=1) for k in range(3)], -1)
        vals.append(v[:, 0] * 0.2126 + v[:, 1] * 0.7152 + v[:, 2] * 0.0722)
    return np.degrees(t), ndi.uniform_filter1d(np.mean(vals, 0), 5, mode="wrap")


def main():
    out, sprite = sys.argv[1], sys.argv[2]
    cx, cy, span, stretch, fx, fy = map(float, sys.argv[3:9])
    radii = [float(v) for v in sys.argv[9].split(",")]
    base = cc.load_rgb(cc.os.path.join(cc.ASSETS, "KaizenMotionGraphiteChassis.png"))
    concept = cc.load_rgb(cc.os.path.join(cc.ASSETS, "KaizenMotionGraphiteConcept.png"))
    hw, hh = span / 2, span * stretch / 2
    layers = []
    if "--shadow" in sys.argv:
        spath, sspan = sys.argv[sys.argv.index("--shadow") + 1].split(",")
        sw, sh = float(sspan) / 2, float(sspan) * stretch / 2
        layers.append((Image.open(spath), (cx - sw, cy - sh, cx + sw, cy + sh)))
    layers.append((Image.open(sprite), (cx - hw, cy - hh, cx + hw, cy + hh)))
    comp = cc.composite(base, layers, Z)
    conc = np.asarray(Image.fromarray((concept * 255 + 0.5).astype(np.uint8)).resize(
        (concept.shape[1] * Z, concept.shape[0] * Z), Image.LANCZOS)).astype(float) / 255
    fig, axes = plt.subplots(len(radii), 1, figsize=(14, 2.6 * len(radii)), sharex=True)
    for ax, r in zip(np.atleast_1d(axes), radii):
        t, a = ring(conc, fx, fy, r, stretch)
        _, b = ring(comp, fx, fy, r, stretch)
        ax.plot(t, a * 255, "k-", label="concept")
        ax.plot(t, b * 255, "r-", label="composite")
        ax.set_ylabel(f"r={r:g}")
        ax.grid(True, alpha=0.3)
        ax.set_xticks(np.arange(0, 361, 30))
    np.atleast_1d(axes)[0].legend()
    np.atleast_1d(axes)[-1].set_xlabel("clockwise degrees from 12 o'clock")
    fig.tight_layout()
    fig.savefig(out, dpi=75)


main()
