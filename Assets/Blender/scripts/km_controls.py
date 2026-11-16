"""Measured control specifications for the Graphite Motion rebuild.

All positions and radii are concept pixels (cpx) of SharedUI/Assets/KaizenMotionGraphiteConcept.png
(853 x 1844). Radii are physical (horizontal) measurements; the concept raster carries a measured
~2.3 % vertical stretch that the app applies at placement time (see VERTICAL_STRETCH).
Measurements come from Assets/Blender/scripts/measure_concept.py.
"""

import math

VERTICAL_STRETCH = 1.023


def _arc(cx, cz, radius, a0, a1, steps, material, sharp_ends=False):
    pts = []
    for k in range(steps + 1):
        a = math.radians(a0 + (a1 - a0) * k / steps)
        pts.append((cx + radius * math.cos(a), cz + radius * math.sin(a), material, sharp_ends and k in (0, steps)))
    return pts


# Material slots used by the rotary profiles.
FACE, BEZEL, KNURL, SATIN, SHOULDER, LIP = 0, 1, 2, 3, 4, 5


def selector_profile():
    p = [(0.4, 52.0, FACE, False), (58.0, 52.0, FACE, False), (67.3, 52.0, FACE, True)]
    # Slim pale-champagne lip right at the face edge: a crisp inner step (no inward-facing round,
    # so no lower-right key glint) and an outward quarter-round that catches the low rim strips on
    # the upper half only, as in the concept.
    p += [(67.5, 51.9, SATIN, True), (67.55, 53.3, BEZEL, True)]
    p += _arc(67.55, 51.9, 1.4, 90, 0, 8, BEZEL)
    # Dark satin shoulder, groove, then the rounded top edge of the knurled skirt.
    p += [(69.8, 51.9, SHOULDER, True), (71.6, 52.0, SHOULDER, False), (73.2, 51.6, SHOULDER, False),
          (73.8, 50.8, SATIN, True), (74.6, 49.4, SATIN, False), (75.3, 49.2, SATIN, True)]
    p += _arc(76.1, 47.9, 1.3, 100, 45, 4, KNURL)
    # 40-degree diamond-knurled chamfer (seen almost face-on from above) over a vertical
    # knurled wall that only shows on the side facing the camera. The skirt reaches r = 90.4, the
    # measured concept silhouette, leaving the concept's narrow dark gap to the well wall.
    p += [(81.4, 43.4, KNURL, False), (88.2, 37.4, KNURL, False)]
    p += _arc(88.4, 35.4, 2.0, 45, 0, 4, KNURL)
    p += [(90.4, 22.0, KNURL, False), (90.4, 4.0, KNURL, False)]
    p += _arc(89.0, 2.0, 1.4, 0, -80, 3, SATIN)
    p += [(89.0, 0.0, SATIN, True)]
    return p


def sensitivity_profile():
    p = [(0.4, 24.0, FACE, False), (100.0, 24.0, FACE, False), (127.4, 24.0, FACE, True)]
    # Softly rounded, polished face edge (bright lip on the lit side), then a narrow dark groove.
    p += _arc(127.4, 22.2, 1.8, 90, 0, 5, LIP)
    p += [(129.4, 21.2, SATIN, True), (131.6, 20.6, SATIN, False), (133.0, 21.2, SATIN, True)]
    # Thin warm champagne bezel: rounded inner lip, satin flat, bright rounded outer edge.
    p += _arc(135.0, 24.8, 1.8, 180, 90, 5, BEZEL)
    p += [(139.6, 26.6, BEZEL, False)]
    p += _arc(139.6, 25.0, 1.6, 90, -10, 5, BEZEL)
    # Step down to the stepped, finely fluted black skirt.
    p += [(141.8, 18.2, SATIN, True), (142.8, 16.8, KNURL, True)]
    p += [(146.0, 14.6, KNURL, False), (148.4, 12.6, KNURL, False)]
    p += _arc(148.2, 11.0, 1.6, 60, 0, 3, KNURL)
    p += [(149.8, 3.0, KNURL, False)]
    p += _arc(148.8, 1.6, 1.4, 0, -80, 3, SATIN)
    p += [(149.2, 0.0, SATIN, True)]
    return p


SELECTOR = {
    "name": "selector",
    # Well / skirt-base centre measured on the concept and chassis (they agree within 1 cpx).
    "centre": (279.6, 1173.8),
    "span": 216.0,
    "resolution": 320,
    "segments": 512,
    "profile": selector_profile,
    "well_radius": 100.4,
    "well_depth": 13.0,
    "knurl": {"teeth": 94, "pitch": 7.6, "diamond": True, "strength": 1.0, "helix": 1.0},
    "bezel": {"base": (0.48, 0.43, 0.36), "roughness": 0.18, "anisotropy": 0.3},
    "face": {"base": (0.085, 0.082, 0.079), "groove_pitch": 1.7, "groove_strength": 0.2},
    "indicator": {"kind": "dot", "radius_from_centre": 49.8, "diameter": 10.6, "z": 52.0},
    # Clock angle (degrees clockwise from 12) of the key light; the spun-face bow tie, the lit
    # knurl sector and the cast-shadow direction all follow it.
    "key_clock": 314.0,
    "key_elevation": 34.0,
    "key_energy": 3300.0,
    "ceiling_energy": 380.0,
    "strip_clock": 8.0,
    "strip_energy": 650.0,
    "ceiling_clock": 290.0,
    "ceiling_elevation": 70.0,
    "rim_clock": 306.0,
    "rim2_clock": 36.0,
    "rim2_energy": 900.0,
    "rim2_elevation": 14.0,
    "rim_elevation": 22.0,
    "rim_energy": 2200.0,
    "shadow_key_clock": 342.0,
    "ivory": {"emission": 0.45, "base": (0.86, 0.60, 0.37)},
    "rim_round": 3.0,
    "shadow_span": 320.0,
    "shadow_resolution": 384,
    # Six exact detents, 30 degrees apart, clockwise from 12 o'clock (Shaker) to 5 o'clock
    # (Theremin / FX). The app never shows the selector between detents, so six exact frames are
    # a lossless contract (a 64-frame full turn cannot land on 30-degree detents).
    "frame_count": 6,
    "step_degrees": 30.0,
    "zero_frame": 0,
    "sheet_grid": (3, 2),
}

SENSITIVITY = {
    "name": "sensitivity",
    "centre": (630.3, 1192.2),
    "span": 336.0,
    "resolution": 448,
    "segments": 768,
    "profile": sensitivity_profile,
    "well_radius": 159.6,
    "well_depth": 14.0,
    "knurl": {"teeth": 360, "pitch": 2.0, "diamond": False, "strength": 0.5, "helix": 0.0,
              "base": (0.28, 0.19, 0.115), "roughness": 0.36},
    "bezel": {"base": (0.70, 0.50, 0.34), "roughness": 0.16, "anisotropy": 0.6},
    "lip_base": (0.42, 0.41, 0.40),
    "face": {"base": (0.112, 0.108, 0.104), "groove_pitch": 3.0, "groove_strength": 0.3},
    "ivory": {"emission": 0.22, "base": (0.86, 0.60, 0.37)},
    "bezel_overhead_energy": 470.0,
    "bezel_overhead_elevation": 75.0,
    "bezel_ring_energy": 520.0,
    "key_clock": 318.0,
    "key_elevation": 34.0,
    "key_energy": 4800.0,
    "ceiling_energy": 250.0,
    "ceiling_clock": 290.0,
    "ceiling_elevation": 70.0,
    "ceiling_links_bezel": True,
    "ceiling_links_skirt": True,
    "strip_clock": 8.0,
    "strip_energy": 1300.0,
    "rim_clock": 332.0,
    "rim_elevation": 22.0,
    "rim_energy": 3000.0,
    "rim2_clock": 36.0,
    "rim2_energy": 1400.0,
    "rim2_elevation": 14.0,
    "shadow_key_clock": 318.0,
    "rim_round": 3.0,
    "shadow_span": 440.0,
    "shadow_resolution": 528,
    "indicator": {"kind": "bar", "inner": 77.7, "outer": 114.9, "width": 7.9, "z": 24.0},
    # 64 frames in 270/62-degree steps: frame 32 is exactly 12 o'clock (the 0.62 sweet spot),
    # frame 1 is -135 degrees (value 0) and frame 63 is +135 degrees (value 1); frame 0 is a
    # -139.4-degree guard frame the app never selects.
    "frame_count": 64,
    "step_degrees": 270.0 / 62.0,
    "zero_frame": 32,
    "sheet_grid": (8, 8),
}


def frame_angle(spec, index):
    """Clockwise angle (degrees from 12 o'clock) rendered into frame `index`."""
    return (index - spec["zero_frame"]) * spec["step_degrees"]
