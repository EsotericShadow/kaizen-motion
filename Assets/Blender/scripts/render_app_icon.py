"""Build and render the Kaizen Motion app icon (1024 x 1024, opaque).

blender -b --factory-startup --python render_app_icon.py -- <out.png> [--samples N] [--resolution N]
        [--save-blend path]

A precision graphite plate holds one recessed smoked-glass window with a champagne chamfer. Inside,
a single luminous ivory bead has just swept up from the left, leaving a short amber light trail: the
phone becoming a motion instrument. Units follow km_blender: 1 icon pixel = CPX Blender units, icon
centre at the origin, +X right, +Y up; the orthographic camera looks straight down.

Reflections are art-directed with emitters that the camera never sees: a diagonal ceiling card
(graphite and glass sheen) and a world horizon brighter to the north-west (the champagne chamfer).
A key light supplies real shadows; the compositor adds a local fog glow around the bead (Bloom was
rejected: it lifts the whole plate with an amber haze). Standard view transform. No text, no alpha.
"""

import math
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

import bmesh  # noqa: E402
import bpy  # noqa: E402

import km_blender as kb  # noqa: E402

CPX = kb.CPX

ICON = {
    "size": 1024,
    # Smoked-glass window (half size and corner radius, px) and its recess depth.
    "glass_half": 372.0,
    "glass_radius": 104.0,
    "glass_z": -18.5,
    # Luminous bead: centre and radius (px).
    "dot": (118.0, 58.0),
    "dot_radius": 55.0,
    # Trail: circular arc (centre, px) ending under the bead, sweep in degrees, head width.
    "trail_centre": (-168.0, 348.0),
    "trail_sweep": 60.0,
    "trail_width": 66.0,
}

GLASS, GASKET, CHAMPAGNE, PLATE = 0, 1, 2, 3


def parse_args():
    argv = sys.argv[sys.argv.index("--") + 1:] if "--" in sys.argv else []
    opts = {"samples": 1024, "resolution": ICON["size"], "save_blend": None}
    i = 1
    while i < len(argv):
        opts[argv[i].lstrip("-").replace("-", "_")] = argv[i + 1]
        i += 2
    return argv[0], opts


# --------------------------------------------------------------------------- geometry

def window_profile():
    """(offset from the glass edge px, z px, material, sharp) from the glass outward."""
    z = ICON["glass_z"]
    # Black gasket step, then a slim polished champagne chamfer (about 35 degrees) that rolls
    # tangentially into the plate: a quadratic Bezier through the chamfer line's intersection with it.
    p = [(0.0, z, GASKET, True), (0.0, z + 3.0, GASKET, True), (2.0, z + 3.5, CHAMPAGNE, True)]
    p += [(8.0, z + 7.7, CHAMPAGNE, False), (14.0, -6.6, CHAMPAGNE, False)]
    p0, c, p2 = (14.0, -6.6), (14.0 + 6.6 / 0.70, 0.0), (29.0, 0.0)
    for k in range(1, 9):
        t = k / 8
        ox = (1 - t) ** 2 * p0[0] + 2 * (1 - t) * t * c[0] + t * t * p2[0]
        oz = (1 - t) ** 2 * p0[1] + 2 * (1 - t) * t * c[1] + t * t * p2[1]
        p.append((ox, oz, CHAMPAGNE if k < 8 else PLATE, k == 8))
    p += [(60.0, 0.0, PLATE, False), (430.0, 0.0, PLATE, False)]
    return p


def rrect_sweep(name, profile, half, radius, materials, n_arc=24):
    """Sweep a profile around a rounded rectangle; offsets keep corners concentric."""
    bm = bmesh.new()
    loops = []
    for off, z, _m, _s in profile:
        h, r = half + off, radius + off
        verts = []
        for sx, sy, a0 in ((1, 1, 0), (-1, 1, 90), (-1, -1, 180), (1, -1, 270)):
            cx, cy = sx * (h - r), sy * (h - r)
            for k in range(n_arc + 1):
                a = math.radians(a0 + 90.0 * k / n_arc)
                verts.append(bm.verts.new(((cx + r * math.cos(a)) * CPX, (cy + r * math.sin(a)) * CPX, z * CPX)))
        loops.append(verts)
    n = len(loops[0])
    for j in range(len(loops) - 1):
        a, b = loops[j], loops[j + 1]
        for i in range(n):
            f = bm.faces.new((a[i], b[i], b[(i + 1) % n], a[(i + 1) % n]))
            f.material_index = profile[j][2]
            f.smooth = profile[j][2] == CHAMPAGNE
    centre = bm.verts.new((0.0, 0.0, profile[0][1] * CPX))
    for i in range(n):
        f = bm.faces.new((centre, loops[0][i], loops[0][(i + 1) % n]))
        f.material_index = GLASS
    bm.edges.ensure_lookup_table()
    sharp_rows = [j for j, p in enumerate(profile) if p[3]]
    for j in sharp_rows:
        ring = set(loops[j])
        for e in bm.edges:
            if e.verts[0] in ring and e.verts[1] in ring:
                e.smooth = False
    mesh = bpy.data.meshes.new(name)
    bm.to_mesh(mesh)
    bm.free()
    obj = bpy.data.objects.new(name, mesh)
    bpy.context.scene.collection.objects.link(obj)
    for m in materials:
        mesh.materials.append(m)
    return obj


def sphere(name, radius, centre, z, material, segments=96, rings=48):
    bm = bmesh.new()
    bmesh.ops.create_uvsphere(bm, u_segments=segments, v_segments=rings, radius=radius * CPX)
    for f in bm.faces:
        f.smooth = True
    mesh = bpy.data.meshes.new(name)
    bm.to_mesh(mesh)
    bm.free()
    obj = bpy.data.objects.new(name, mesh)
    bpy.context.scene.collection.objects.link(obj)
    mesh.materials.append(material)
    obj.location = (centre[0] * CPX, centre[1] * CPX, z * CPX)
    return obj


def trail_ribbon(name, material, z):
    """Tapered ribbon along a circular arc that ends at the bead; UV u = 0 tail .. 1 head."""
    cx, cy = ICON["trail_centre"]
    dx, dy = ICON["dot"]
    radius = math.hypot(dx - cx, dy - cy)
    head = math.atan2(dy - cy, dx - cx)
    tail = head - math.radians(ICON["trail_sweep"])
    steps = 180
    bm = bmesh.new()
    uv = bm.loops.layers.uv.new("UVMap")
    rows = []
    for k in range(steps + 1):
        t = k / steps
        a = tail + (head - tail) * t
        px, py = cx + radius * math.cos(a), cy + radius * math.sin(a)
        nx, ny = math.cos(a), math.sin(a)
        w = ICON["trail_width"] * 0.5 * (t ** 0.85)
        rows.append((
            bm.verts.new(((px - nx * w) * CPX, (py - ny * w) * CPX, z * CPX)),
            bm.verts.new(((px + nx * w) * CPX, (py + ny * w) * CPX, z * CPX)),
            t,
        ))
    for k in range(steps):
        a0, b0, t0 = rows[k]
        a1, b1, t1 = rows[k + 1]
        f = bm.faces.new((a0, a1, b1, b0))
        for loop, (u, v) in zip(f.loops, ((t0, 0.0), (t1, 0.0), (t1, 1.0), (t0, 1.0))):
            loop[uv].uv = (u, v)
    bm.normal_update()
    for f in bm.faces:
        if f.normal.z < 0:
            f.normal_flip()
        f.smooth = True
    mesh = bpy.data.meshes.new(name)
    bm.to_mesh(mesh)
    bm.free()
    obj = bpy.data.objects.new(name, mesh)
    bpy.context.scene.collection.objects.link(obj)
    mesh.materials.append(material)
    return obj


# --------------------------------------------------------------------------- materials

def brushed_graphite():
    mat = bpy.data.materials.new("KM Icon Brushed Graphite")
    n = kb.Nodes(mat)
    coord = n.new("ShaderNodeTexCoord")
    mapping = n.new("ShaderNodeMapping")
    mapping.inputs["Scale"].default_value = (0.35, 90.0, 1.0)
    n.link(coord.outputs["Object"], mapping.inputs["Vector"])
    lines = n.new("ShaderNodeTexNoise")
    lines.inputs["Scale"].default_value = 6.0
    lines.inputs["Detail"].default_value = 6.0
    n.link(mapping.outputs["Vector"], lines.inputs["Vector"])
    normal = n.bump(lines.outputs["Fac"], 0.06, 0.002)
    tangent = n.new("ShaderNodeCombineXYZ")
    tangent.inputs["X"].default_value = 1.0
    shader = n.principled(**{
        "Base Color": (0.085, 0.083, 0.080),
        "Metallic": 1.0,
        "Roughness": n.math("ADD", 0.30, n.math("MULTIPLY", lines.outputs["Fac"], 0.08)),
        "Anisotropic": 0.72,
        "Normal": normal,
    })
    n.link(tangent.outputs["Vector"], shader.inputs["Tangent"])
    n.finish(shader.outputs[0])
    return mat


def smoked_glass():
    mat = bpy.data.materials.new("KM Icon Smoked Glass")
    n = kb.Nodes(mat)
    shader = n.principled(**{
        "Base Color": (0.0022, 0.0023, 0.0026),
        "Metallic": 0.0,
        "Roughness": 0.06,
        "IOR": 1.52,
        "Specular IOR Level": 0.32,
    })
    n.finish(shader.outputs[0])
    return mat


def bead_core():
    """Luminous bead: a small clipped hot centre, a warm ivory body below clipping and an amber
    rim, on a glossy coated surface so the studio still reads on it. It reads as a lit sphere."""
    mat = bpy.data.materials.new("KM Icon Bead Core")
    n = kb.Nodes(mat)
    weight = n.new("ShaderNodeLayerWeight")
    weight.inputs["Blend"].default_value = 0.35
    facing = weight.outputs["Facing"]
    ramp = n.new("ShaderNodeValToRGB")
    ramp.color_ramp.elements[0].position = 0.0
    ramp.color_ramp.elements[0].color = (1.0, 0.93, 0.80, 1.0)
    ramp.color_ramp.elements[1].position = 1.0
    ramp.color_ramp.elements[1].color = (1.0, 0.46, 0.12, 1.0)
    n.link(facing, ramp.inputs["Fac"])
    strength = n.math("ADD", 0.55, n.math("MULTIPLY", n.math("POWER", n.math("SUBTRACT", 1.0, facing), 6.0), 2.6))
    shader = n.principled(**{
        "Base Color": (0.9, 0.82, 0.68),
        "Metallic": 0.0,
        "Roughness": 0.18,
        "Coat Weight": 1.0,
        "Coat Roughness": 0.05,
        "Emission Strength": strength,
    })
    n.link(ramp.outputs["Color"], shader.inputs["Emission Color"])
    n.finish(shader.outputs[0])
    return mat


def trail_light():
    """Streak on the glass: amber tail warming to ivory at the head, soft across its width."""
    mat = bpy.data.materials.new("KM Icon Trail")
    n = kb.Nodes(mat)
    uv = n.new("ShaderNodeUVMap")
    sep = n.new("ShaderNodeSeparateXYZ")
    n.link(uv.outputs["UV"], sep.inputs[0])
    u, v = sep.outputs["X"], sep.outputs["Y"]
    across = n.math("POWER", n.math("SUBTRACT", 1.0, n.math("ABSOLUTE", n.math("SUBTRACT", n.math("MULTIPLY", v, 2.0), 1.0))), 1.8)
    along = n.math("POWER", u, 2.1)
    ramp = n.new("ShaderNodeValToRGB")
    ramp.color_ramp.elements[0].position = 0.0
    ramp.color_ramp.elements[0].color = (1.0, 0.36, 0.06, 1.0)
    ramp.color_ramp.elements[1].position = 1.0
    ramp.color_ramp.elements[1].color = (1.0, 0.78, 0.50, 1.0)
    n.link(u, ramp.inputs["Fac"])
    shader = n.principled(**{
        "Base Color": (0.0022, 0.0023, 0.0026),
        "Metallic": 0.0,
        "Roughness": 0.06,
        "Specular IOR Level": 0.32,
        "Emission Strength": n.math("MULTIPLY", n.math("MULTIPLY", along, across), 5.5),
    })
    n.link(ramp.outputs["Color"], shader.inputs["Emission Color"])
    n.finish(shader.outputs[0])
    return mat


# --------------------------------------------------------------------------- lighting

def studio_world():
    """World seen only in reflections: a horizon band brighter to the north-west, dark zenith."""
    world = bpy.context.scene.world
    n = kb.Nodes.__new__(kb.Nodes)
    n.nt = world.node_tree
    n.nt.nodes.clear()
    out = n.new("ShaderNodeOutputWorld")
    coord = n.new("ShaderNodeTexCoord")
    sep = n.new("ShaderNodeSeparateXYZ")
    n.link(coord.outputs["Generated"], sep.inputs[0])
    x, y, z = sep.outputs["X"], sep.outputs["Y"], sep.outputs["Z"]
    horizon = n.math("EXPONENT", n.math("MULTIPLY", n.math("POWER", n.math("DIVIDE", n.math("SUBTRACT", z, 0.32), 0.26), 2.0), -1.0))
    nw = n.math("ADD", 0.5, n.math("MULTIPLY", n.math("ADD", n.math("MULTIPLY", x, -0.707), n.math("MULTIPLY", y, 0.707)), 0.5))
    azimuth = n.math("ADD", 0.035, n.math("MULTIPLY", n.math("POWER", nw, 3.0), 1.0))
    strength = n.math("ADD", 0.002, n.math("MULTIPLY", n.math("MULTIPLY", horizon, azimuth), 0.95))
    bg = n.new("ShaderNodeBackground")
    bg.inputs["Color"].default_value = (1.0, 0.97, 0.93, 1.0)
    n.link(strength, bg.inputs["Strength"])
    n.link(bg.outputs["Background"], out.inputs["Surface"])
    world.cycles_visibility.camera = False


def ceiling_card():
    """Large overhead card, invisible to the camera: a diagonal gradient for the satin sheen."""
    bm = bmesh.new()
    s = 2600.0 * CPX
    verts = [bm.verts.new((sx * s, sy * s, 520.0 * CPX)) for sx, sy in ((-1, -1), (1, -1), (1, 1), (-1, 1))]
    f = bm.faces.new(verts)
    bm.normal_update()
    if f.normal.z > 0:
        f.normal_flip()
    mesh = bpy.data.meshes.new("KM Icon Ceiling Card")
    bm.to_mesh(mesh)
    bm.free()
    obj = bpy.data.objects.new("KM Icon Ceiling Card", mesh)
    bpy.context.scene.collection.objects.link(obj)
    mat = bpy.data.materials.new("KM Icon Ceiling Card")
    n = kb.Nodes(mat)
    x, y, _z = n.object_coords()
    diag = n.math("DIVIDE", n.math("ADD", n.math("MULTIPLY", x, -0.707), n.math("MULTIPLY", y, 0.707)), 900.0 * CPX)
    ramp = n.math("MINIMUM", n.math("MAXIMUM", n.math("ADD", n.math("MULTIPLY", diag, 0.5), 0.5), 0.0), 1.0)
    strength = n.math("ADD", 0.025, n.math("MULTIPLY", n.math("POWER", ramp, 1.8), 0.62))
    emit = n.new("ShaderNodeEmission")
    emit.inputs["Color"].default_value = (0.96, 0.96, 0.97, 1.0)
    n.link(strength, emit.inputs["Strength"])
    n.finish(emit.outputs[0])
    mesh.materials.append(mat)
    obj.visible_camera = False
    obj.visible_shadow = False
    return obj


def lights():
    # Key: soft upper-left light for the recess shadow and the bead's cast shadow.
    kb.add_area_light("KM Icon Key", (0.0, 0.0), 135.0, 42.0, 1600.0, 520.0, 900.0, color=(1.0, 0.96, 0.9))


def compositor(threshold, strength, size, kind="Bloom"):
    scene = bpy.context.scene
    ng = bpy.data.node_groups.new("KM Icon Compositor", "CompositorNodeTree")
    ng.interface.new_socket("Image", in_out="OUTPUT", socket_type="NodeSocketColor")
    layers = ng.nodes.new("CompositorNodeRLayers")
    glare = ng.nodes.new("CompositorNodeGlare")
    glare.inputs["Type"].default_value = kind
    glare.inputs["Quality"].default_value = "High"
    glare.inputs["Threshold"].default_value = threshold
    glare.inputs["Strength"].default_value = strength
    glare.inputs["Size"].default_value = size
    glare.inputs["Tint"].default_value = (1.0, 0.62, 0.30, 1.0)
    out = ng.nodes.new("NodeGroupOutput")
    ng.links.new(layers.outputs["Image"], glare.inputs["Image"])
    ng.links.new(glare.outputs["Image"], out.inputs[0])
    scene.compositing_node_group = ng
    scene.render.use_compositing = True


# --------------------------------------------------------------------------- build

def build(resolution):
    kb.reset_scene()
    scene = bpy.context.scene
    scene.render.film_transparent = False
    scene.render.image_settings.color_mode = "RGB"
    scene.render.image_settings.color_depth = "8"
    scene.render.dither_intensity = 1.0
    scene.cycles.max_bounces = 12
    scene.cycles.transmission_bounces = 12

    studio_world()
    ceiling_card()

    mats = [smoked_glass(), kb.satin_black("KM Icon Gasket", base=(0.006, 0.006, 0.006), roughness=0.5, metallic=0.2),
            kb.champagne_metal("KM Icon Champagne", base=(0.80, 0.62, 0.42), roughness=0.27, anisotropy=0.45),
            brushed_graphite()]
    rrect_sweep("KM Icon Plate", window_profile(), ICON["glass_half"], ICON["glass_radius"], mats)

    dx, dy = ICON["dot"]
    lift = ICON["glass_z"] + ICON["dot_radius"] * 0.92
    sphere("KM Icon Bead", ICON["dot_radius"], (dx, dy), lift, bead_core())
    trail_ribbon("KM Icon Trail", trail_light(), ICON["glass_z"] + 0.6)

    cam_data = bpy.data.cameras.new("KM Icon Camera")
    cam_data.type = "ORTHO"
    cam_data.ortho_scale = ICON["size"] * CPX
    cam_data.clip_start = 0.1
    cam_data.clip_end = 100.0
    cam = bpy.data.objects.new("KM Icon Camera", cam_data)
    scene.collection.objects.link(cam)
    cam.location = (0.0, 0.0, 30.0)
    scene.camera = cam
    scene.render.resolution_x = resolution
    scene.render.resolution_y = resolution

    lights()
    # Fog Glow keeps the halo local to the bead; Bloom lifts the whole plate with an amber haze.
    compositor(threshold=1.0, strength=1.25, size=7, kind="Fog Glow")


def main():
    out, opts = parse_args()
    build(int(opts["resolution"]))
    if opts["save_blend"]:
        bpy.ops.wm.save_as_mainfile(filepath=os.path.abspath(opts["save_blend"]))
    kb.render_to(os.path.abspath(out), int(opts["samples"]))


main()
