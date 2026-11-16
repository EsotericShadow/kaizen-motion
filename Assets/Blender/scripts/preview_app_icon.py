"""Small-size preview of an app icon under an iOS-style continuous-corner mask.

python3 preview_app_icon.py <icon.png> <out.png>

Shows the icon at the pixel sizes iOS uses on iPhone (180 home screen @3x, 120 spotlight @3x and
home @2x, 87 settings @3x, 80 spotlight @2x, 60 notification @3x, 40 notification @2x) over a light
and a dark wallpaper. The mask is a superellipse approximation of Apple's continuous corners; the
real device mask may differ slightly.
"""

import sys

import numpy as np
from PIL import Image

SIZES = (180, 120, 87, 80, 60, 40)


def squircle_mask(size, supersample=4):
    n = size * supersample
    y, x = np.mgrid[0:n, 0:n]
    u = np.abs((x + 0.5) / n * 2 - 1)
    v = np.abs((y + 0.5) / n * 2 - 1)
    inside = (u ** 5 + v ** 5) <= 1.0
    mask = Image.fromarray((inside * 255).astype(np.uint8))
    return mask.resize((size, size), Image.LANCZOS)


def wallpaper(width, height, dark):
    top, bottom = ((38, 44, 58), (12, 14, 20)) if dark else ((198, 210, 226), (150, 170, 196))
    g = np.linspace(0, 1, height)[:, None, None]
    img = (np.array(top) * (1 - g) + np.array(bottom) * g).repeat(width, axis=1)
    return Image.fromarray(img.astype(np.uint8))


def main():
    icon = Image.open(sys.argv[1]).convert("RGB")
    pad = 24
    width = sum(SIZES) + pad * (len(SIZES) + 1)
    row_h = max(SIZES) + pad * 2
    sheet = Image.new("RGB", (width, row_h * 2), (0, 0, 0))
    for r, dark in enumerate((False, True)):
        bg = wallpaper(width, row_h, dark)
        x = pad
        for s in SIZES:
            small = icon.resize((s, s), Image.LANCZOS)
            y = pad + (max(SIZES) - s) // 2
            bg.paste(small, (x, y), squircle_mask(s))
            x += s + pad
        sheet.paste(bg, (0, r * row_h))
    sheet.save(sys.argv[2])


if __name__ == "__main__":
    main()
