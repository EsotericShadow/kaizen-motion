"""Kaizen Motion Blender helpers.

Scene convention (shared by every control):
- 1 concept pixel ("cpx") of the approved 853 x 1844 Graphite Motion concept = CPX Blender units.
- World X = concept x, world Y = -concept y, +Z points at the viewer.
- One perspective camera sits above the concept optical centre (OPTICAL_CENTRE) at CAMERA_HEIGHT and
  frames each control with lens shift, reproducing the concept's off-axis parallax (knob tops drift
  away from the optical centre; the upper skirt wall is visible).
- Rendering is Cycles on the GPU with a transparent film; contact shadows come from shadow catchers.
"""

import math
import os

import bmesh
import bpy

CPX = 0.01
OPTICAL_CENTRE = (426.5, 870.0)
CAMERA_HEIGHT = 2400.0

HERE = os.path.dirname(os.path.abspath(__file__))
PROJECT = os.path.abspath(os.path.join(HERE, "..", "..", ".."))
ATLAS_SOURCES = os.path.join(PROJECT, "Assets", "AtlasSources")


# --------------------------------------------------------------------------- scene

def reset_scene():
    bpy.ops.wm.read_factory_settings(use_empty=True)
    scene = bpy.context.scene
    scene.render.engine = "CYCLES"
    # KM_CYCLES_DEVICE=CPU renders on the CPU (output is equivalent; used when other jobs hold the GPU).
    if os.environ.get("KM_CYCLES_DEVICE", "GPU").upper() == "CPU":
        scene.cycles.device = "CPU"
    else:
        prefs = bpy.context.preferences.addons["cycles"].preferences
        prefs.compute_device_type = "METAL"
        prefs.get_devices()
        for device in prefs.devices:
            device.use = device.type == "METAL"
        scene.cycles.device = "GPU"
    scene.cycles.use_denoising = True
    scene.cycles.denoiser = "OPENIMAGEDENOISE"
    scene.cycles.max_bounces = 8
    scene.cycles.glossy_bounces = 6
    scene.cycles.transmission_bounces = 6
    scene.cycles.caustics_reflective = False
    scene.cycles.caustics_refractive = False
    scene.cycles.filter_width = 1.2
    scene.render.film_transparent = True
    scene.view_settings.view_transform = "Standard"
    scene.view_settings.look = "None"
    scene.view_settings.exposure = 0.0
    scene.view_settings.gamma = 1.0
    scene.display_settings.display_device = "sRGB"
    scene.render.image_settings.file_format = "PNG"
    scene.render.image_settings.color_mode = "RGBA"
    scene.render.image_settings.color_depth = "16"
    scene.render.image_settings.compression = 15
    scene.render.resolution_percentage = 100
    world = bpy.data.worlds.new("KM Studio")
    scene.world = world
    world.use_nodes = True
    return scene


def set_world(color=(0.004, 0.004, 0.004), strength=1.0, top=(0.012, 0.012, 0.0115)):
    """Dark studio: a soft ceiling gradient so metals never read as flat black."""
    world = bpy.context.scene.world
    nt = world.node_tree
    nt.nodes.clear()
    out = nt.nodes.new("ShaderNodeOutputWorld")
    bg = nt.nodes.new("ShaderNodeBackground")
    coord = nt.nodes.new("ShaderNodeTexCoord")
    sep = nt.nodes.new("ShaderNodeSeparateXYZ")
    ramp = nt.nodes.new("ShaderNodeValToRGB")
    ramp.color_ramp.elements[0].position = 0.0
    ramp.color_ramp.elements[0].color = (*color, 1)
    ramp.color_ramp.elements[1].position = 1.0
    ramp.color_ramp.elements[1].color = (*top, 1)
    nt.links.new(coord.outputs["Generated"], sep.inputs[0])
    nt.links.new(sep.outputs["Z"], ramp.inputs["Fac"])
    nt.links.new(ramp.outputs["Color"], bg.inputs["Color"])
    bg.inputs["Strength"].default_value = strength
    nt.links.new(bg.outputs["Background"], out.inputs["Surface"])
    # Keep the world out of camera rays; the film is transparent anyway.
    world.cycles_visibility.camera = False


def add_camera(frame_centre, span, resolution):
    """Perspective camera above OPTICAL_CENTRE framing `span` cpx around `frame_centre` at z = 0."""
    scene = bpy.context.scene
    cam_data = bpy.data.cameras.new("KM Camera")
    cam = bpy.data.objects.new("KM Camera", cam_data)
    scene.collection.objects.link(cam)
    cx, cy = OPTICAL_CENTRE
    cam.location = (cx * CPX, -cy * CPX, CAMERA_HEIGHT * CPX)
    cam.rotation_euler = (0.0, 0.0, 0.0)
    cam_data.type = "PERSP"
    cam_data.sensor_fit = "HORIZONTAL"
    cam_data.sensor_width = 36.0
    cam_data.lens = 36.0 * CAMERA_HEIGHT / span
    fx, fy = frame_centre
    cam_data.shift_x = (fx - cx) / span
    cam_data.shift_y = (cy - fy) / span
    cam_data.clip_start = 1.0
    cam_data.clip_end = CAMERA_HEIGHT * CPX * 2
    scene.camera = cam
    scene.render.resolution_x = resolution
    scene.render.resolution_y = resolution
    return cam


def add_area_light(name, target, azimuth_deg, elevation_deg, distance, energy, size, size_y=None,
                   color=(1.0, 0.97, 0.92)):
    """Area light aimed at `target` (cpx, image coords) from an azimuth measured CCW from +X (screen right)."""
    data = bpy.data.lights.new(name, "AREA")
    data.energy = energy
    data.color = color
    if size_y is None:
        data.shape = "DISK"
        data.size = size * CPX
    else:
        data.shape = "RECTANGLE"
        data.size = size * CPX
        data.size_y = size_y * CPX
    obj = bpy.data.objects.new(name, data)
    bpy.context.scene.collection.objects.link(obj)
    az = math.radians(azimuth_deg)
    el = math.radians(elevation_deg)
    tx, ty = target
    d = distance
    obj.location = (
        (tx + d * math.cos(el) * math.cos(az)) * CPX,
        (-ty + d * math.cos(el) * math.sin(az)) * CPX,
        d * math.sin(el) * CPX,
    )
    direction = (
        tx * CPX - obj.location.x,
        -ty * CPX - obj.location.y,
        0.0 - obj.location.z,
    )
    from mathutils import Vector
    obj.rotation_euler = Vector(direction).to_track_quat("-Z", "Y").to_euler()
    return obj


# --------------------------------------------------------------------------- geometry

def lathe(name, profile, segments=384, materials=(), location=(0.0, 0.0), cap_centre=True):
    """Revolve a (r, z, material_index, sharp) profile, in cpx, around +Z.

    The profile runs outward from the centre. Ring edges flagged `sharp` render as hard creases.
    """
    bm = bmesh.new()
    rings = []
    for i in range(segments):
        a = 2.0 * math.pi * i / segments
        ca, sa = math.cos(a), math.sin(a)
        rings.append([bm.verts.new((r * CPX * ca, r * CPX * sa, z * CPX)) for (r, z, _m, _s) in profile])
    bm.verts.ensure_lookup_table()
    for i in range(segments):
        r0 = rings[i]
        r1 = rings[(i + 1) % segments]
        for j in range(len(profile) - 1):
            face = bm.faces.new((r0[j], r0[j + 1], r1[j + 1], r1[j]))
            face.material_index = profile[j][2]
            face.smooth = True
    if cap_centre and profile[0][0] > 0:
        centre = bm.verts.new((0.0, 0.0, profile[0][1] * CPX))
        for i in range(segments):
            face = bm.faces.new((centre, rings[i][0], rings[(i + 1) % segments][0]))
            face.material_index = profile[0][2]
            face.smooth = True
    bm.edges.ensure_lookup_table()
    sharp_rows = {j for j, p in enumerate(profile) if p[3]}
    if sharp_rows:
        lookup = {}
        for i in range(segments):
            for j in sharp_rows:
                lookup[(rings[i][j], rings[(i + 1) % segments][j])] = True
        for edge in bm.edges:
            a, b = edge.verts
            if (a, b) in lookup or (b, a) in lookup:
                edge.smooth = False
    mesh = bpy.data.meshes.new(name)
    bm.to_mesh(mesh)
    bm.free()
    obj = bpy.data.objects.new(name, mesh)
    bpy.context.scene.collection.objects.link(obj)
    for mat in materials:
        mesh.materials.append(mat)
    obj.location = (location[0] * CPX, -location[1] * CPX, 0.0)
    return obj


def arc(cx, cz, radius, a0, a1, steps, material, sharp_ends=False):
    """Profile points on a circular arc (angles in degrees, 0 = +r, 90 = +z)."""
    pts = []
    for k in range(steps + 1):
        a = math.radians(a0 + (a1 - a0) * k / steps)
        sharp = sharp_ends and k in (0, steps)
        pts.append((cx + radius * math.cos(a), cz + radius * math.sin(a), material, sharp))
    return pts


def disc(name, radius, z, location, material, segments=256):
    return lathe(name, [(0.05, z, 0, False), (radius, z, 0, False)], segments, [material], location)


def capsule_mesh(name, length, width, z, material, segments=48):
    """Flat rounded bar (stadium) along +Y, centred at the origin."""
    bm = bmesh.new()
    r = width / 2.0
    half = max(0.0, length / 2.0 - r)
    verts = []
    for k in range(segments + 1):
        a = math.pi * k / segments
        verts.append(bm.verts.new((r * math.cos(a) * CPX, (half + r * math.sin(a)) * CPX, z * CPX)))
    for k in range(segments + 1):
        a = math.pi + math.pi * k / segments
        verts.append(bm.verts.new((r * math.cos(a) * CPX, (-half + r * math.sin(a)) * CPX, z * CPX)))
    bm.faces.new(verts)
    mesh = bpy.data.meshes.new(name)
    bm.to_mesh(mesh)
    bm.free()
    obj = bpy.data.objects.new(name, mesh)
    bpy.context.scene.collection.objects.link(obj)
    mesh.materials.append(material)
    return obj


def add_bevel_and_solidify(obj, thickness, bevel, segments=4):
    sol = obj.modifiers.new("thickness", "SOLIDIFY")
    sol.thickness = thickness * CPX
    sol.offset = -1.0
    bev = obj.modifiers.new("round", "BEVEL")
    bev.width = bevel * CPX
    bev.segments = segments
    bev.limit_method = "ANGLE"
    for poly in obj.data.polygons:
        poly.use_smooth = True
    return obj


def well_surround(name, well_radius, depth, rim_round, outer_radius, location, material, segments=384):
    """Well wall, rounded rim lip and the surrounding panel as one surface of revolution."""
    prof = [(well_radius, 0.0, 0, True), (well_radius, depth - rim_round, 0, False)]
    prof += arc(well_radius + rim_round, depth - rim_round, rim_round, 180, 90, 5, 0)
    prof += [(outer_radius, depth, 0, False)]
    return lathe(name, prof, segments, [material], location, cap_centre=False)


def link_light_to(light_obj, receivers, name):
    """Cycles light linking: the light only illuminates `receivers`."""
    coll = bpy.data.collections.new(name)
    for obj in receivers:
        coll.objects.link(obj)
    light_obj.light_linking.receiver_collection = coll


def shadow_catcher_disc(name, radius, z, location):
    mat = bpy.data.materials.new(name + " mat")
    obj = disc(name, radius, z, location, mat)
    obj.is_shadow_catcher = True
    return obj


def shadow_wall(name, radius, z0, z1, location, segments=256):
    """Invisible well wall: casts shadows and occludes light, never seen by the camera."""
    mat = bpy.data.materials.new(name + " mat")
    obj = lathe(name, [(radius, z0, 0, False), (radius, z1, 0, False), (radius + 60, z1, 0, False)],
                segments, [mat], location, cap_centre=False)
    obj.visible_camera = False
    obj.visible_glossy = True
    return obj


# --------------------------------------------------------------------------- materials

class Nodes:
    def __init__(self, material):
        material.use_nodes = True
        self.nt = material.node_tree
        self.nt.nodes.clear()
        self.out = self.nt.nodes.new("ShaderNodeOutputMaterial")

    def new(self, kind, **props):
        node = self.nt.nodes.new(kind)
        for key, value in props.items():
            setattr(node, key, value)
        return node

    def link(self, a, b):
        self.nt.links.new(a, b)

    def math(self, op, a, b=None, clamp=False):
        node = self.new("ShaderNodeMath", operation=op, use_clamp=clamp)
        self._feed(node.inputs[0], a)
        if b is not None:
            self._feed(node.inputs[1], b)
        return node.outputs[0]

    def _feed(self, socket, value):
        if isinstance(value, (int, float)):
            socket.default_value = value
        else:
            self.link(value, socket)

    def principled(self, **inputs):
        node = self.new("ShaderNodeBsdfPrincipled")
        for key, value in inputs.items():
            if isinstance(value, (int, float, tuple)):
                sock = node.inputs[key]
                if isinstance(value, tuple) and len(value) == 3 and len(sock.default_value) == 4:
                    value = (*value, 1.0)
                sock.default_value = value
            else:
                self.link(value, node.inputs[key])
        return node

    def object_coords(self):
        coord = self.new("ShaderNodeTexCoord")
        sep = self.new("ShaderNodeSeparateXYZ")
        self.link(coord.outputs["Object"], sep.inputs[0])
        return sep.outputs["X"], sep.outputs["Y"], sep.outputs["Z"]

    def bump(self, height, strength, distance, normal=None):
        node = self.new("ShaderNodeBump")
        node.inputs["Strength"].default_value = strength
        node.inputs["Distance"].default_value = distance
        self.link(height, node.inputs["Height"])
        if normal is not None:
            self.link(normal, node.inputs["Normal"])
        return node.outputs["Normal"]

    def triangle(self, value):
        """0 at integer lines, 0.5 half-way between: a V groove profile."""
        frac = self.math("FRACT", value)
        centred = self.math("SUBTRACT", frac, 0.5)
        return self.math("SUBTRACT", 0.5, self.math("ABSOLUTE", centred))

    def noise(self, vector_socket, scale, detail=4.0, roughness=0.55):
        tex = self.new("ShaderNodeTexNoise")
        tex.inputs["Scale"].default_value = scale
        tex.inputs["Detail"].default_value = detail
        tex.inputs["Roughness"].default_value = roughness
        if vector_socket is not None:
            self.link(vector_socket, tex.inputs["Vector"])
        return tex.outputs["Fac"]

    def finish(self, shader_socket):
        self.link(shader_socket, self.out.inputs["Surface"])


def _atlas_roughness_texture(n):
    path = os.path.join(ATLAS_SOURCES, "motion_machined_roughness.png")
    tex = n.new("ShaderNodeTexImage")
    if os.path.exists(path):
        tex.image = bpy.data.images.load(path, check_existing=True)
        tex.image.colorspace_settings.name = "Non-Color"
    coord = n.new("ShaderNodeTexCoord")
    mapping = n.new("ShaderNodeMapping")
    mapping.inputs["Scale"].default_value = (3.0, 3.0, 3.0)
    n.link(coord.outputs["Object"], mapping.inputs["Vector"])
    n.link(mapping.outputs["Vector"], tex.inputs["Vector"])
    return tex.outputs["Color"]


def spun_graphite(name, base=(0.060, 0.058, 0.056), roughness=0.31, anisotropy=0.82, groove_pitch=0.9,
                  groove_strength=0.12, wear=0.05):
    """Radially machined (lathe-spun) graphite: concentric grooves, circumferential anisotropy."""
    mat = bpy.data.materials.new(name)
    n = Nodes(mat)
    x, y, z = n.object_coords()
    radius = n.math("SQRT", n.math("ADD", n.math("MULTIPLY", x, x), n.math("MULTIPLY", y, y)))
    radius_cpx = n.math("DIVIDE", radius, CPX)
    coord = n.new("ShaderNodeTexCoord")
    wobble = n.noise(coord.outputs["Object"], 900.0, 3.0, 0.6)
    phase = n.math("ADD", n.math("DIVIDE", radius_cpx, groove_pitch), n.math("MULTIPLY", wobble, 0.8))
    groove = n.math("SINE", n.math("MULTIPLY", phase, 2 * math.pi))
    # Second, coarser pass of tool marks gives the visible "record groove" banding.
    coarse = n.math("SINE", n.math("MULTIPLY", n.math("DIVIDE", radius_cpx, groove_pitch * 5.3), 2 * math.pi))
    height = n.math("ADD", groove, n.math("MULTIPLY", coarse, 0.45))
    normal = n.bump(height, groove_strength, 0.0015)
    tangent = n.new("ShaderNodeTangent", direction_type="RADIAL", axis="Z")
    rough_map = _atlas_roughness_texture(n)
    rough = n.math("ADD", roughness - 0.21 * wear * 4, n.math("MULTIPLY", rough_map, wear * 4))
    shader = n.principled(**{
        "Base Color": base,
        "Metallic": 1.0,
        "Roughness": rough,
        "Anisotropic": anisotropy,
        "Anisotropic Rotation": 0.25,
        "Normal": normal,
    })
    n.link(tangent.outputs["Tangent"], shader.inputs["Tangent"])
    n.finish(shader.outputs[0])
    return mat


def champagne_metal(name, base=(0.74, 0.55, 0.36), roughness=0.16, anisotropy=0.4, rotation=0.25):
    mat = bpy.data.materials.new(name)
    n = Nodes(mat)
    tangent = n.new("ShaderNodeTangent", direction_type="RADIAL", axis="Z")
    coord = n.new("ShaderNodeTexCoord")
    micro = n.noise(coord.outputs["Object"], 2400.0, 2.0, 0.5)
    normal = n.bump(micro, 0.03, 0.0002)
    shader = n.principled(**{
        "Base Color": base,
        "Metallic": 1.0,
        "Roughness": roughness,
        "Anisotropic": anisotropy,
        "Anisotropic Rotation": rotation,
        "Normal": normal,
    })
    n.link(tangent.outputs["Tangent"], shader.inputs["Tangent"])
    n.finish(shader.outputs[0])
    return mat


def knurled_black(name, teeth, pitch_cpx, diamond=True, base=(0.30, 0.295, 0.29), roughness=0.26,
                  strength=0.9, helix=1.0, metallic=1.0, cavity=(0.012, 0.012, 0.012), bead_power=0.7):
    """Black oxide knurl. Pattern is in object space, so it turns with the knob.

    Diamond knurl is modelled as rounded beads on a crossed lattice (each bead throws one bright
    specular point, as in the concept); straight knurl is a fine V-flute.
    """
    mat = bpy.data.materials.new(name)
    n = Nodes(mat)
    x, y, z = n.object_coords()
    theta = n.new("ShaderNodeMath", operation="ARCTAN2")
    n.link(y, theta.inputs[0])
    n.link(x, theta.inputs[1])
    u = n.math("MULTIPLY", theta.outputs[0], teeth / (2 * math.pi))
    radius = n.math("SQRT", n.math("ADD", n.math("MULTIPLY", x, x), n.math("MULTIPLY", y, y)))
    # Parametrise along the flank using both height and radius so sloped skirts knurl evenly.
    along = n.math("DIVIDE", n.math("SUBTRACT", z, radius), CPX * pitch_cpx)
    if diamond:
        a = n.math("COSINE", n.math("MULTIPLY", n.math("ADD", u, n.math("MULTIPLY", along, helix)), math.pi))
        b = n.math("COSINE", n.math("MULTIPLY", n.math("SUBTRACT", u, n.math("MULTIPLY", along, helix)), math.pi))
        height = n.math("POWER", n.math("ABSOLUTE", n.math("MULTIPLY", a, b)), bead_power)
        # Irregular crowns: each bead is struck slightly differently, which turns a regular
        # crosshatch into the concept's fine sparkle.
        coord = n.new("ShaderNodeTexCoord")
        jitter = n.noise(coord.outputs["Object"], 55.0, 1.0, 0.5)
        height = n.math("MULTIPLY", height, n.math("ADD", 0.25, n.math("MULTIPLY", jitter, 1.5)))
    else:
        height = n.triangle(u)
    normal = n.bump(height, strength, 0.010)
    rough_map = _atlas_roughness_texture(n)
    rough = n.math("ADD", roughness - 0.04, n.math("MULTIPLY", rough_map, 0.2))
    # Cavity darkening: bead crowns are polished, the valleys between them hold black oxide.
    mix = n.new("ShaderNodeMix", data_type="RGBA")
    mix.inputs["A"].default_value = (*cavity, 1.0)
    mix.inputs["B"].default_value = (*base, 1.0)
    n.link(n.math("POWER", height, 1.6), mix.inputs["Factor"])
    shader = n.principled(**{
        "Base Color": mix.outputs["Result"],
        "Metallic": metallic,
        "Roughness": rough,
        "Normal": normal,
    })
    n.finish(shader.outputs[0])
    return mat


def satin_black(name, base=(0.02, 0.02, 0.021), roughness=0.42, metallic=0.6, coat=0.0):
    mat = bpy.data.materials.new(name)
    n = Nodes(mat)
    shader = n.principled(**{
        "Base Color": base,
        "Metallic": metallic,
        "Roughness": roughness,
        "Coat Weight": coat,
        "Coat Roughness": 0.25,
    })
    n.finish(shader.outputs[0])
    return mat


def ivory_enamel(name, base=(0.86, 0.64, 0.40), emission=0.35, roughness=0.45):
    mat = bpy.data.materials.new(name)
    n = Nodes(mat)
    shader = n.principled(**{
        "Base Color": base,
        "Metallic": 0.0,
        "Roughness": roughness,
        "Coat Weight": 0.2,
        "Coat Roughness": 0.3,
        "Emission Color": base,
        "Emission Strength": emission,
    })
    n.finish(shader.outputs[0])
    return mat


def emissive_glass(name, color, strength, base=None, roughness=0.12, coat_roughness=0.3):
    mat = bpy.data.materials.new(name)
    n = Nodes(mat)
    shader = n.principled(**{
        "Base Color": base or color,
        "Metallic": 0.0,
        "Roughness": roughness,
        "Coat Weight": 1.0,
        "Coat Roughness": coat_roughness,
        "Emission Color": color,
        "Emission Strength": strength,
    })
    n.finish(shader.outputs[0])
    return mat


# --------------------------------------------------------------------------- render

def render_to(path, samples):
    scene = bpy.context.scene
    scene.cycles.samples = samples
    scene.cycles.use_adaptive_sampling = True
    scene.cycles.adaptive_threshold = 0.004
    scene.render.filepath = path
    os.makedirs(os.path.dirname(path), exist_ok=True)
    try:
        bpy.ops.render.render(write_still=True)
    except RuntimeError as error:
        # Metal can run out of memory when other GPU jobs are active; the CPU result is equivalent.
        if scene.cycles.device != "GPU":
            raise
        print(f"KM: GPU render failed ({error}); retrying on CPU")
        scene.cycles.device = "CPU"
        bpy.ops.render.render(write_still=True)
