"""Radial luminance/colour profiles of concept vs composite for a rotary (4 compass directions).

python3 profile_compare.py <out.png> <sprite.png> cx cy span stretch rmax [--centre x,y]
"""

import sys

import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt  # noqa: E402
import numpy as np  # noqa: E402
from scipy import ndimage as ndi  # noqa: E402
from PIL import Image  # noqa: E402

import compare_concept as cc  # noqa: E402

ZOOM = 4


def profiles(img, cx, cy, rmax, stretch):
    r = np.linspace(0, rmax, int(rmax * 8))
    out = {}
    for name, ang in (("top", 0), ("right", 90), ("bottom", 180), ("left", 270)):
        vals = []
        for d in np.linspace(-8, 8, 9):
            a = np.radians(ang + d)
            xs = (cx + r * np.sin(a)) * ZOOM
            ys = (cy - r * np.cos(a) * stretch) * ZOOM
            vals.append(np.stack([ndi.map_coordinates(img[..., k], [ys, xs], order=1) for k in range(3)], -1))
        out[name] = np.mean(vals, 0)
    return r, out


def main():
    out, sprite, cx, cy, span, stretch, rmax = sys.argv[1], sys.argv[2], *map(float, sys.argv[3:8])
    centre = (cx, cy)
    if "--centre" in sys.argv:
        centre = tuple(map(float, sys.argv[sys.argv.index("--centre") + 1].split(",")))
    base = cc.load_rgb(cc.os.path.join(cc.ASSETS, "KaizenMotionGraphiteChassis.png"))
    concept = cc.load_rgb(cc.os.path.join(cc.ASSETS, "KaizenMotionGraphiteConcept.png"))
    hw, hh = span / 2, span * stretch / 2
    layers = []
    if "--shadow" in sys.argv:
        spath, sspan = sys.argv[sys.argv.index("--shadow") + 1].split(",")
        sw, sh = float(sspan) / 2, float(sspan) * stretch / 2
        layers.append((Image.open(spath), (cx - sw, cy - sh, cx + sw, cy + sh)))
    layers.append((Image.open(sprite), (cx - hw, cy - hh, cx + hw, cy + hh)))
    comp = cc.composite(base, layers, ZOOM)
    conc = np.asarray(Image.fromarray((concept * 255 + 0.5).astype(np.uint8)).resize(
        (concept.shape[1] * ZOOM, concept.shape[0] * ZOOM), Image.LANCZOS)).astype(float) / 255
    r, pc = profiles(conc, *centre, rmax, stretch)
    _, pk = profiles(comp, *centre, rmax, stretch)
    fig, axes = plt.subplots(4, 1, figsize=(16, 13), sharex=True)
    for ax, name in zip(axes, ("top", "right", "bottom", "left")):
        lc = pc[name][:, 0] * 0.2126 + pc[name][:, 1] * 0.7152 + pc[name][:, 2] * 0.0722
        lk = pk[name][:, 0] * 0.2126 + pk[name][:, 1] * 0.7152 + pk[name][:, 2] * 0.0722
        ax.plot(r, lc * 255, "k-", lw=1.4, label="concept L")
        ax.plot(r, lk * 255, "r-", lw=1.0, label="composite L")
        ax.plot(r, (pc[name][:, 0] - pc[name][:, 2]) * 255 * 2, "k:", lw=0.8, label="concept warmth x2")
        ax.plot(r, (pk[name][:, 0] - pk[name][:, 2]) * 255 * 2, "r:", lw=0.8, label="composite warmth x2")
        ax.set_ylabel(name)
        ax.grid(True, alpha=0.3)
        ax.set_xticks(np.arange(0, rmax + 1, 5))
    axes[0].legend(loc="upper left", ncol=4)
    axes[-1].set_xlabel("radius (cpx, vertical axis de-stretched)")
    fig.tight_layout()
    fig.savefig(out, dpi=80)


main()
