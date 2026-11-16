"""Build and render the Kaizen Motion arm switch as a two-state transparent sheet.

blender -b --factory-startup --python render_switch.py -- <out_dir> [--states armed,muted] [--samples N]
        [--save-blend path]

The sprite replaces only the escutcheon's inner plate (pilot lamp, lever recess and ball lever);
the chassis keeps the outer escutcheon rim. Frame 0 = armed (pilot lit, lever as in the concept), frame 1 =
muted (pilot dark, lever thrown down away from the pilot). Measurements are concept pixels of the concept.
"""

import math
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

import bmesh  # noqa: E402
import bpy  # noqa: E402
from mathutils import Vector  # noqa: E402

import km_blender as kb  # noqa: E402

SWITCH = {
    "frame_centre": (425.8, 1606.0),
    "span": 136.0,
    "resolution": 216,
    # Inner plate stadium of the escutcheon (the chassis keeps the outer rim).
    "plate_centre": (425.8, 1606.0),
    "plate_size": (72.0, 124.0),
    "pilot_centre": (426.6, 1568.2),
    "pilot_radius": 8.8,
    "recess_centre": (426.3, 1618.0),
    "recess_half": (26.0, 30.0),
    "recess_depth": 22.0,
    "ball_radius": 18.8,
    "lever_length": 21.0,
    # Lever throw in degrees about the image x axis: positive tips the ball toward the pilot.
    # Armed matches the concept (ball centred at y ~1619, leaning toward the lit pilot); muted
    # throws the lever down, away from the dark pilot.
    "armed_tilt": 13.0,
    "muted_tilt": -14.0,
}


def parse_args():
    argv = sys.argv[sys.argv.index("--") + 1:] if "--" in sys.argv else []
    out_dir = argv[0]
    opts = {"states": "armed,muted", "samples": 192, "save_blend": None}
    i = 1
    while i < len(argv):
        opts[argv[i].lstrip("-").replace("-", "_")] = argv[i + 1]
        i += 2
    return out_dir, opts


def to_world(x, y, z=0.0):
    return Vector((x * kb.CPX, -y * kb.CPX, z * kb.CPX))


def stadium_points(cx, cy, w, h, segments=48):
    r = w / 2.0
    half = h / 2.0 - r
    pts = []
    for k in range(segments + 1):
        a = math.pi * k / segments
        pts.append((cx + r * math.cos(a), cy - half - r * math.sin(a)))
    for k in range(segments + 1):
        a = math.pi + math.pi * k / segments
        pts.append((cx + r * math.cos(a), cy + half - r * math.sin(a)))
    return pts


def ellipse_points(cx, cy, ax, ay, segments=96):
    return [(cx + ax * math.cos(2 * math.pi * k / segments), cy + ay * math.sin(2 * math.pi * k / segments))
            for k in range(segments)]


def plate_with_hole(name, outer, hole, z, material):
    """Flat plate (outer outline) with an elliptical hole, bridged as a quad ring."""
    bm = bmesh.new()
    n = len(hole)
    # Resample the outer outline to the hole's vertex count by angle around the hole centre.
    hx = sum(p[0] for p in hole) / n
    hy = sum(p[1] for p in hole) / n
    outer_sorted = []
    for k in range(n):
        a = 2 * math.pi * k / n
        best = min(outer, key=lambda p: abs(((math.atan2(p[1] - hy, p[0] - hx) - a + math.pi) % (2 * math.pi)) - math.pi))
        outer_sorted.append(best)
    ov = [bm.verts.new(to_world(x, y, z)) for (x, y) in outer_sorted]
    iv = [bm.verts.new(to_world(x, y, z)) for (x, y) in hole]
    for k in range(n):
        f = bm.faces.new((ov[k], ov[(k + 1) % n], iv[(k + 1) % n], iv[k]))
        f.smooth = False
    bmesh.ops.recalc_face_normals(bm, faces=bm.faces)
    for f in bm.faces:
        if f.normal.z < 0:
            f.normal_flip()
    mesh = bpy.data.meshes.new(name)
    bm.to_mesh(mesh)
    bm.free()
    obj = bpy.data.objects.new(name, mesh)
    bpy.context.scene.collection.objects.link(obj)
    mesh.materials.append(material)
    return obj


def recess_pocket(name, hole, depth, wall_mat, floor_mat):
    bm = bmesh.new()
    top = [bm.verts.new(to_world(x, y, 0.0)) for (x, y) in hole]
    cx = sum(p[0] for p in hole) / len(hole)
    cy = sum(p[1] for p in hole) / len(hole)
    bottom = [bm.verts.new(to_world(cx + (x - cx) * 0.86, cy + (y - cy) * 0.86, -depth)) for (x, y) in hole]
    n = len(hole)
    for k in range(n):
        f = bm.faces.new((top[k], bottom[k], bottom[(k + 1) % n], top[(k + 1) % n]))
        f.material_index = 0
        f.smooth = True
    floor = bm.faces.new(list(reversed(bottom)))
    floor.material_index = 1
    bmesh.ops.recalc_face_normals(bm, faces=bm.faces)
    mesh = bpy.data.meshes.new(name)
    bm.to_mesh(mesh)
    bm.free()
    obj = bpy.data.objects.new(name, mesh)
    bpy.context.scene.collection.objects.link(obj)
    mesh.materials.append(wall_mat)
    mesh.materials.append(floor_mat)
    return obj


def pilot_lens_material(name, lit):
    """Amber pilot: hot pale-amber core fading to saturated amber at the rim (measured on the concept)."""
    mat = bpy.data.materials.new(name)
    n = kb.Nodes(mat)
    x, y, _z = n.object_coords()
    r = n.math("DIVIDE", n.math("SQRT", n.math("ADD", n.math("MULTIPLY", x, x), n.math("MULTIPLY", y, y))),
               SWITCH["pilot_radius"] * kb.CPX)
    t = n.math("POWER", n.math("MINIMUM", r, 1.0), 1.05)
    mix = n.new("ShaderNodeMix", data_type="RGBA")
    mix.inputs["A"].default_value = (1.0, 0.74, 0.40, 1.0) if lit else (0.20, 0.10, 0.03, 1.0)
    mix.inputs["B"].default_value = (1.0, 0.36, 0.055, 1.0) if lit else (0.10, 0.04, 0.01, 1.0)
    n.link(t, mix.inputs["Factor"])
    strength = n.math("MULTIPLY", n.math("SUBTRACT", 1.0, n.math("MULTIPLY", t, 0.25)), 1.08 if lit else 0.0)
    shader = n.principled(**{"Base Color": mix.outputs["Result"], "Metallic": 0.0, "Roughness": 0.35,
                             "Coat Weight": 1.0, "Coat Roughness": 0.3, "Emission Strength": strength})
    n.link(mix.outputs["Result"], shader.inputs["Emission Color"])
    n.finish(shader.outputs[0])
    return mat


def studio_dome(name, target, radius):
    """Large emissive sphere around the switch, visible only to reflections of linked objects."""
    bpy.ops.mesh.primitive_uv_sphere_add(segments=64, ring_count=32, radius=radius * kb.CPX,
                                         location=to_world(target[0], target[1], 0.0))
    dome = bpy.context.active_object
    dome.name = name
    mat = bpy.data.materials.new(name)
    n = kb.Nodes(mat)
    geo = n.new("ShaderNodeNewGeometry")
    sep = n.new("ShaderNodeSeparateXYZ")
    # Direction from the dome centre to the shaded point.
    sub = n.new("ShaderNodeVectorMath", operation="SUBTRACT")
    n.link(geo.outputs["Position"], sub.inputs[0])
    sub.inputs[1].default_value = dome.location
    norm = n.new("ShaderNodeVectorMath", operation="NORMALIZE")
    n.link(sub.outputs[0], norm.inputs[0])
    n.link(norm.outputs[0], sep.inputs[0])
    # Measured on the concept ball: its upper third is bright (brightest upper-left and upper-right,
    # bright to the silhouette at the sides) while its centre and lower half are dark. So the studio
    # is a bright wall band wrapping from west through north to east at 15-65 degrees elevation, a
    # dark ceiling and a dark south, plus a thin low south glint for the lower rim.
    y = sep.outputs["Y"]
    wrap = n.math("POWER", n.math("MINIMUM", n.math("MAXIMUM", n.math("DIVIDE", n.math("ADD", y, 0.05), 1.05), 0.0), 1.0), 1.5)
    nw = n.math("MAXIMUM", n.math("ADD", n.math("MULTIPLY", sep.outputs["X"], -0.42), n.math("MULTIPLY", y, 0.91)), 0.0)
    ne = n.math("MAXIMUM", n.math("ADD", n.math("MULTIPLY", sep.outputs["X"], 0.77), n.math("MULTIPLY", y, 0.64)), 0.0)
    lobes = n.math("ADD", n.math("MULTIPLY", n.math("POWER", nw, 6.0), 0.8), n.math("MULTIPLY", n.math("POWER", ne, 6.0), 0.55))
    above = n.math("MAXIMUM", sep.outputs["Z"], 0.0)
    elev = n.math("DIVIDE", n.math("ARCSINE", above), math.pi / 180.0)
    band = n.math("EXPONENT", n.math("MULTIPLY", n.math("POWER", n.math("DIVIDE", n.math("SUBTRACT", elev, 40.0), 26.0), 4.0), -1.0))
    wall = n.math("MULTIPLY", n.math("ADD", n.math("MULTIPLY", wrap, 0.6), lobes), band)
    south = n.math("MAXIMUM", n.math("MULTIPLY", y, -1.0), 0.0)
    low = n.math("EXPONENT", n.math("MULTIPLY", n.math("POWER", n.math("DIVIDE", n.math("SUBTRACT", elev, 4.0), 4.0), 2.0), -1.0))
    glint = n.math("MULTIPLY", n.math("MULTIPLY", low, n.math("POWER", south, 6.0)), 0.45)
    strength = n.math("MULTIPLY", n.math("ADD", n.math("ADD", wall, glint), 0.01), 2.0)
    emit = n.new("ShaderNodeEmission")
    emit.inputs["Color"].default_value = (1.0, 0.97, 0.93, 1.0)
    n.link(strength, emit.inputs["Strength"])
    n.finish(emit.outputs[0])
    dome.data.materials.append(mat)
    dome.visible_camera = False
    dome.visible_shadow = False
    dome.visible_diffuse = False
    # Normals point outward; Cycles emits from both sides of an emission shader.
    return dome


def build(spec):
    kb.reset_scene()
    kb.set_world()
    scene = bpy.context.scene

    plate_mat = kb.satin_black("KM Switch Plate", base=(0.055, 0.053, 0.051), roughness=0.36, metallic=0.85)
    recess_wall = kb.satin_black("KM Recess Wall", base=(0.03, 0.028, 0.026), roughness=0.3, metallic=0.9)
    recess_floor = kb.satin_black("KM Recess Floor", base=(0.004, 0.004, 0.004), roughness=0.7, metallic=0.0)
    nickel = kb.satin_black("KM Nickel Lever", base=(0.80, 0.72, 0.62), roughness=0.16, metallic=1.0)
    bezel_mat = kb.satin_black("KM Pilot Bezel", base=(0.02, 0.02, 0.02), roughness=0.3, metallic=0.8)
    bezel_lip = kb.satin_black("KM Pilot Bezel Lip", base=(0.62, 0.58, 0.52), roughness=0.2, metallic=1.0)

    px, py = spec["plate_centre"]
    pw, ph = spec["plate_size"]
    rx, ry = spec["recess_centre"]
    ax, ay = spec["recess_half"]
    hole = ellipse_points(rx, ry, ax, ay, 128)
    outer = stadium_points(px, py, pw, ph, 96)
    plate = plate_with_hole("KM Switch Plate", outer, hole, 0.0, plate_mat)
    # Cut the pilot opening: the pilot assembly simply sits on top of the plate.
    pocket = recess_pocket("KM Lever Recess", hole, spec["recess_depth"], recess_wall, recess_floor)

    cx, cy = spec["pilot_centre"]
    pr = spec["pilot_radius"]
    pilot_bezel = kb.lathe("KM Pilot Bezel", [(pr - 0.3, 0.6, 0, True), (pr + 1.6, 0.9, 0, False),
                                              (pr + 2.4, 0.5, 1, False), (pr + 2.9, 0.0, 1, True)],
                           96, [bezel_mat, bezel_lip], (cx, cy))
    lens_objs = []
    for state in ("armed", "muted"):
        lit = state == "armed"
        lens_mat = pilot_lens_material(f"KM Pilot Lens {state}", lit)
        profile = [(0.05, 2.6, 0, False)] + kb.arc(0.0, -17.4, 20.0, 90, 64.5, 10, 0)[1:] + [(pr - 0.2, 0.6, 0, True)]
        lens = kb.lathe(f"KM Pilot Lens {state}", profile, 96, [lens_mat], (cx, cy))
        lens_objs.append(lens)
        if lit:
            glow = bpy.data.lights.new("KM Pilot Glow", "POINT")
            glow.energy = 3.2
            glow.color = (1.0, 0.55, 0.18)
            glow.shadow_soft_size = 4 * kb.CPX
            glow_obj = bpy.data.objects.new("KM Pilot Glow", glow)
            scene.collection.objects.link(glow_obj)
            glow_obj.location = to_world(cx, cy, 5.0)
            lens["km_glow"] = glow_obj.name
            glow_targets = glow_obj

    # Lever: pivot below the plate, bat shaft, polished ball tip.
    pivot = bpy.data.objects.new("KM Lever Pivot", None)
    scene.collection.objects.link(pivot)
    pivot.location = to_world(rx, ry, -spec["recess_depth"] + 6.0)
    # Tapered bat: slim at the pivot, swelling into the ball.
    shaft = kb.lathe("KM Lever Shaft", [(0.05, 0.0, 0, False), (5.2, 0.0, 0, False), (7.4, spec["lever_length"], 0, False),
                                        (0.05, spec["lever_length"], 0, False)], 48, [nickel])
    shaft.parent = pivot
    br = spec["ball_radius"]
    ball_profile = [(0.02, -br, 0, False)] + kb.arc(0.0, 0.0, br, -88, 88, 24, 0) + [(0.02, br, 0, False)]
    ball = kb.lathe("KM Lever Ball", ball_profile, 96, [nickel])
    ball.parent = pivot
    ball.location = (0.0, 0.0, (spec["lever_length"] + br * 0.55) * kb.CPX)

    kb.add_camera(spec["frame_centre"], spec["span"], spec["resolution"])
    target = spec["recess_centre"]
    # Plate and recess: one soft upper-left key, like the rest of the panel.
    key = kb.add_area_light("KM Switch Key", target, 128.0, 42.0, 900.0, 1150.0, 520.0, color=(1.0, 0.96, 0.9))
    # The polished ball sees a soft studio dome (brightest upper-left, dark below) instead of
    # discrete lamps, so its reflection is a smooth gradient with no readable light shapes.
    dome = studio_dome("KM Ball Studio Dome", target, 700.0)
    coll = bpy.data.collections.new("KM Ball Receivers")
    for obj in (ball, shaft):
        coll.objects.link(obj)
    dome.light_linking.receiver_collection = coll
    # The pilot's glow spills onto the plate, recess and ball, never back onto its own lens.
    glow_coll = bpy.data.collections.new("KM Pilot Glow Receivers")
    for obj in (plate, pocket, pilot_bezel, ball, shaft):
        glow_coll.objects.link(obj)
    glow_targets.light_linking.receiver_collection = glow_coll
    plate_coll = bpy.data.collections.new("KM Plate Receivers")
    for obj in (plate, pocket, pilot_bezel):
        plate_coll.objects.link(obj)
    key.light_linking.receiver_collection = plate_coll
    return pivot, lens_objs


def main():
    out_dir, opts = parse_args()
    spec = SWITCH
    pivot, lenses = build(spec)
    if opts["save_blend"]:
        bpy.ops.wm.save_as_mainfile(filepath=os.path.abspath(opts["save_blend"]))
    for state in opts["states"].split(","):
        armed = state == "armed"
        tilt = spec["armed_tilt"] if armed else spec["muted_tilt"]
        # Rotation about +X moves the ball toward world -Y (down the screen); negate so a positive
        # tilt tips the ball up toward the pilot.
        pivot.rotation_euler = (-math.radians(tilt), 0.0, 0.0)
        for lens in lenses:
            show = lens.name.endswith("armed") == armed
            lens.hide_render = not show
            glow_name = lens.get("km_glow")
            if glow_name:
                bpy.data.objects[glow_name].hide_render = not armed
        kb.render_to(os.path.join(os.path.abspath(out_dir), f"switch_{state}.png"), int(opts["samples"]))


main()
