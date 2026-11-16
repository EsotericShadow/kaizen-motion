"""Render the unlit (smoked amber) instrument-lamp lens for each of the six chassis slots.

blender -b --factory-startup --python render_lamps.py -- <out_dir> [--samples N] [--save-blend path]

Only the inner lens is rendered; build_lamp_sheet.py places it into each slot's own bezel pixels.
Slot centres are the measured amber-core centroids of SharedUI/Assets/KaizenMotionGraphiteChassis.png.
"""

import math
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

import bpy  # noqa: E402

import km_blender as kb  # noqa: E402

LAMPS = {
    "centres": [(110.37, 1071.06), (110.41, 1117.64), (110.31, 1164.99),
                (110.20, 1211.17), (109.97, 1257.62), (109.96, 1302.99)],
    # Inner lens opening (cpx): measured between the dark gaps inside each bezel.
    # Slightly larger than the lit glass so the lens fully covers the baked amber; its edge lands
    # in the one-pixel dark gap inside each bezel.
    "lens_size": (45.2, 11.6),
    "tile_size": (72.0, 44.0),
    "px_per_cpx": 4,
}


def parse_args():
    argv = sys.argv[sys.argv.index("--") + 1:] if "--" in sys.argv else []
    opts = {"samples": 256, "save_blend": None}
    i = 1
    while i < len(argv):
        opts[argv[i].lstrip("-").replace("-", "_")] = argv[i + 1]
        i += 2
    return argv[0], opts


def tile_origin(centre):
    """Integer chassis-pixel origin of a slot tile, so 'on' tiles are exact chassis crops."""
    tw, th = LAMPS["tile_size"]
    return round(centre[0] - tw / 2), round(centre[1] - th / 2)


def tile_centre(centre):
    x0, y0 = tile_origin(centre)
    return x0 + LAMPS["tile_size"][0] / 2, y0 + LAMPS["tile_size"][1] / 2


def smoked_lens_material():
    """Unlit amber lamp behind smoked glass: a dark warm diffuser with a faint dormant core and a
    glossy coat, so it reads as glass with depth (not a flat slab)."""
    mat = bpy.data.materials.new("KM Lamp Lens Off")
    n = kb.Nodes(mat)
    x, y, _z = n.object_coords()
    w, h = LAMPS["lens_size"]
    # Capsule-space distance from the long axis (0 centre, 1 edge); the mesh runs along +Y.
    across = n.math("ABSOLUTE", n.math("DIVIDE", x, h / 2 * kb.CPX))
    along = n.math("ABSOLUTE", n.math("DIVIDE", y, w / 2 * kb.CPX))
    edge = n.math("MAXIMUM", across, n.math("POWER", along, 6.0))
    core = n.math("SUBTRACT", 1.0, n.math("POWER", n.math("MINIMUM", edge, 1.0), 1.5))
    mix = n.new("ShaderNodeMix", data_type="RGBA")
    mix.inputs["A"].default_value = (0.004, 0.0024, 0.0012, 1.0)
    mix.inputs["B"].default_value = (0.016, 0.0085, 0.0034, 1.0)
    n.link(core, mix.inputs["Factor"])
    shader = n.principled(**{
        "Base Color": mix.outputs["Result"],
        "Metallic": 0.0,
        "Roughness": 0.5,
        "Coat Weight": 1.0,
        "Coat Roughness": 0.06,
        "Coat Tint": (0.92, 0.80, 0.66),
        "Emission Strength": n.math("MULTIPLY", core, 0.004),
    })
    shader.inputs["Emission Color"].default_value = (1.0, 0.45, 0.10, 1.0)
    n.finish(shader.outputs[0])
    return mat


def build(centre):
    kb.reset_scene()
    kb.set_world()
    w, h = LAMPS["lens_size"]
    lens = kb.capsule_mesh("KM Lamp Lens", w, h, 0.0, smoked_lens_material())
    # Capsule mesh runs along +Y; lay it horizontal and give it a slight dome.
    lens.rotation_euler = (0.0, 0.0, math.radians(90.0))
    lens.location = (centre[0] * kb.CPX, -centre[1] * kb.CPX, 0.0)
    sub = lens.modifiers.new("dome", "SOLIDIFY")
    sub.thickness = 1.2 * kb.CPX
    sub.offset = -1.0
    bev = lens.modifiers.new("round", "BEVEL")
    bev.width = 1.1 * kb.CPX
    bev.segments = 5
    bev.limit_method = "ANGLE"
    for poly in lens.data.polygons:
        poly.use_smooth = True
    tw, th = LAMPS["tile_size"]
    px = LAMPS["px_per_cpx"]
    kb.add_camera(tile_centre(centre), tw, int(tw * px))
    scene = bpy.context.scene
    scene.render.resolution_y = int(th * px)
    # Same studio as the rotaries: upper-left key and a long overhead strip for the top sheen.
    kb.add_area_light("KM Lamp Key", centre, 142.0, 34.0, 1400.0, 1500.0, 760.0, color=(1.0, 0.95, 0.88))
    kb.add_area_light("KM Lamp Strip", centre, 90.0, 40.0, 1400.0, 900.0, 1600.0, 220.0, color=(1.0, 0.97, 0.94))
    return lens


def main():
    out_dir, opts = parse_args()
    for index, centre in enumerate(LAMPS["centres"]):
        build(centre)
        if opts["save_blend"] and index == 0:
            bpy.ops.wm.save_as_mainfile(filepath=os.path.abspath(opts["save_blend"]))
        kb.render_to(os.path.join(os.path.abspath(out_dir), f"lamp_off_{index}.png"), int(opts["samples"]))


main()
