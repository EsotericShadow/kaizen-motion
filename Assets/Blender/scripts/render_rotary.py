"""Build and render a Kaizen Motion rotary control.

blender -b --factory-startup --python render_rotary.py -- <selector|sensitivity> <out_dir>
        [--pass frames|shadow] [--frames all|0,6,12] [--samples N] [--save-blend path]

Pass "frames" renders the turning knob only (tight frame, transparent everywhere else).
Pass "shadow" renders, once, the knob's contact shadow, well occlusion and cast shadow onto the
well and panel via shadow catchers. A round knob's shadow does not change as it turns, so the app
draws this single static layer beneath the 64-frame sheet.
"""

import math
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

import bpy  # noqa: E402

import km_blender as kb  # noqa: E402
import km_controls as kc  # noqa: E402


def parse_args():
    argv = sys.argv[sys.argv.index("--") + 1:] if "--" in sys.argv else []
    control, out_dir = argv[0], argv[1]
    opts = {"pass": "frames", "frames": "0", "samples": 96, "save_blend": None}
    i = 2
    while i < len(argv):
        key = argv[i].lstrip("-").replace("-", "_")
        opts[key] = argv[i + 1]
        i += 2
    return control, out_dir, opts


def build(spec, render_pass):
    kb.reset_scene()
    kb.set_world()
    cx, cy = spec["centre"]
    face = kb.spun_graphite("KM Spun Graphite Face", **spec.get("face", {}))
    bezel = kb.champagne_metal("KM Champagne Bezel", **spec.get("bezel", {}))
    k = spec["knurl"]
    knurl = kb.knurled_black("KM Knurl", k["teeth"], k["pitch"], k["diamond"], strength=k["strength"],
                             helix=k["helix"], **{key: k[key] for key in ("base", "roughness", "bead_power") if key in k})
    satin = kb.satin_black("KM Satin Black")
    shoulder = kb.satin_black("KM Graphite Shoulder", base=(0.07, 0.068, 0.066), roughness=0.34, metallic=0.9)
    lip = kb.satin_black("KM Polished Face Lip", base=spec.get("lip_base", (0.16, 0.155, 0.15)), roughness=0.22,
                         metallic=1.0)
    mats = [face, bezel, knurl, satin, shoulder, lip]
    profile = spec["profile"]()
    split = next(i for i, pt in enumerate(profile) if pt[2] not in (kc.FACE, kc.LIP))
    lip_start = next((i for i, pt in enumerate(profile) if pt[2] == kc.LIP), None)
    knob = bpy.data.objects.new("KM Knob", None)
    bpy.context.scene.collection.objects.link(knob)
    knob.location = (cx * kb.CPX, -cy * kb.CPX, 0.0)
    if lip_start is not None:
        face_obj = kb.lathe("KM Knob Face", profile[:lip_start + 1], spec["segments"], mats)
        lip_obj = kb.lathe("KM Knob Face Lip", profile[lip_start:split], spec["segments"], mats, cap_centre=False)
    else:
        face_obj = kb.lathe("KM Knob Face", profile[:split], spec["segments"], mats)
        lip_obj = None
    # The champagne bezel is its own object so a dedicated rim strip can be linked to it.
    b0 = next(i for i, pt in enumerate(profile) if pt[2] == kc.BEZEL)
    b1 = next(i for i in range(b0, len(profile)) if profile[i][2] != kc.BEZEL)
    body_obj = kb.lathe("KM Knob Body", profile[split - 1:b0] + [(profile[b0][0], profile[b0][1], kc.SATIN, True)],
                        spec["segments"], mats, cap_centre=False)
    bezel_obj = kb.lathe("KM Knob Bezel", profile[b0:b1 + 1], spec["segments"], mats, cap_centre=False)
    outer_obj = kb.lathe("KM Knob Skirt", profile[b1:], spec["segments"], mats, cap_centre=False)
    parts = [face_obj, body_obj, bezel_obj, outer_obj] + ([lip_obj] if lip_obj else [])
    for obj in parts:
        obj.parent = knob
    ind = spec["indicator"]
    ivory = kb.ivory_enamel("KM Ivory Index", **spec.get("ivory", {}))
    recess_black = kb.satin_black("KM Index Recess", base=(0.008, 0.008, 0.008), roughness=0.5, metallic=0.0)
    if ind["kind"] == "dot":
        r = ind["diameter"] / 2.0
        recess = kb.lathe("KM Index Recess", [(0.05, ind["z"] + 0.05, 0, False), (r + 1.3, ind["z"] + 0.05, 0, False)],
                          96, [recess_black])
        dot = kb.lathe("KM Index Dot", [(0.05, ind["z"] + 0.9, 0, False), (r - 1.0, ind["z"] + 0.85, 0, False)]
                       + kc._arc(r - 1.0, ind["z"] + 0.1, 0.75, 90, 0, 4, 0)
                       + [(r, ind["z"] + 0.1, 0, False)], 96, [ivory])
        offset = ind["radius_from_centre"]
    else:
        length = ind["outer"] - ind["inner"]
        offset = (ind["outer"] + ind["inner"]) / 2.0
        recess = kb.capsule_mesh("KM Index Recess", length + 1.6, ind["width"] + 1.6, ind["z"] + 0.05, recess_black)
        dot = kb.capsule_mesh("KM Index Bar", length, ind["width"], ind["z"] + 0.6, ivory)
        kb.add_bevel_and_solidify(dot, 0.6, 0.45, 3)
    for obj in (recess, dot):
        obj.parent = knob
        obj.location = (0.0, offset * kb.CPX, 0.0)
        parts.append(obj)

    well_mat = kb.satin_black("KM Well", base=(0.03, 0.03, 0.03), roughness=0.5, metallic=0.4)
    well = kb.well_surround("KM Well", spec["well_radius"], spec["well_depth"], spec["rim_round"],
                            spec["shadow_span"] * 0.75, (cx, cy), well_mat)
    # The narrow gap between skirt and well wall reads as a black slot in the concept.
    gap_mat = kb.satin_black("KM Well Floor", base=(0.004, 0.004, 0.004), roughness=0.7, metallic=0.0)
    floor = kb.disc("KM Well Floor", spec["well_radius"] + 0.2, 0.0, (cx, cy), gap_mat)
    if render_pass == "shadow":
        well.is_shadow_catcher = True
        for obj in parts:
            obj.visible_camera = False
        kb.add_camera((cx, cy), spec["shadow_span"], spec["shadow_resolution"])
    else:
        well.visible_camera = False
        floor.visible_camera = False
        kb.add_camera((cx, cy), spec["span"], spec["resolution"])
    lights(spec, face_obj, [body_obj, outer_obj], bezel_obj, render_pass)
    if spec.get("ceiling_links_skirt"):
        bpy.data.objects["KM Ceiling"].light_linking.receiver_collection.objects.link(outer_obj)
    if lip_obj is not None:
        # The polished face-edge lip takes the bezel's rim strips and ring lights as well.
        linked = set()
        for light in bpy.data.objects:
            if light.type == "LIGHT" and light.name.startswith(("KM Rim", "KM Bezel Ring")):
                coll = light.light_linking.receiver_collection
                if coll.name not in linked:
                    coll.objects.link(lip_obj)
                    linked.add(coll.name)
    return knob


def lights(spec, face_obj, body_objs, bezel_obj, render_pass):
    target = spec["centre"]
    scale = spec["span"] / 216.0
    key_clock = spec["key_clock"]
    if render_pass == "shadow":
        # The concept's cast shadow falls further south than the face bow tie implies.
        key_clock = spec.get("shadow_key_clock", key_clock)
    key_az = 90.0 - key_clock
    # Key: large warm-neutral softbox. Sets the spun-metal bow tie, the lit knurl sector, the
    # bright bezel lip and the soft cast shadow, all from the same measured direction.
    kb.add_area_light("KM Key", target, key_az, spec["key_elevation"], 1400.0 * scale,
                      spec.get("key_energy", 2200.0) * scale ** 2, spec.get("key_size", 760.0) * scale,
                      color=(1.0, 0.95, 0.88))
    # Broad ceiling fill behind the camera: lifts the graphite face to satin mid-grey.
    # Linked to the face only, so the bezel and knurl stay directional like the concept.
    ceiling = kb.add_area_light("KM Ceiling", target, 90.0 - spec.get("ceiling_clock", 350.0),
                                spec.get("ceiling_elevation", 78.0), 1600.0 * scale,
                                spec.get("ceiling_energy", 900.0) * scale ** 2, 1500.0 * scale, 1100.0 * scale,
                                color=(0.96, 0.96, 0.95))
    ceiling_receivers = [face_obj] + ([bezel_obj] if spec.get("ceiling_links_bezel") else [])
    kb.link_light_to(ceiling, ceiling_receivers, "KM Ceiling Receivers")
    # Secondary upper-right softbox: the second bezel/knurl lobe seen in the concept (body only,
    # so the spun face keeps a single bow tie).
    strip = kb.add_area_light("KM Top Strip", target, 90.0 - spec.get("strip_clock", 0.0), 38.0, 1500.0 * scale,
                              spec.get("strip_energy", 900.0) * scale ** 2, 520.0 * scale,
                              color=(0.98, 0.97, 0.95))
    kb.link_light_to(strip, body_objs, "KM Strip Receivers")
    # Low, wide rim strip from the north-west: the thin bright bezel lip on the upper-left half.
    rim = kb.add_area_light("KM Rim Strip", target, 90.0 - spec.get("rim_clock", 320.0), spec.get("rim_elevation", 24.0),
                            1500.0 * scale, spec.get("rim_energy", 0.0) * scale ** 2, 2200.0 * scale, 160.0 * scale,
                            color=(1.0, 0.97, 0.92))
    rim2 = kb.add_area_light("KM Rim Strip NE", target, 90.0 - spec.get("rim2_clock", 30.0),
                             spec.get("rim2_elevation", 24.0), 1500.0 * scale, spec.get("rim2_energy", 0.0) * scale ** 2,
                             900.0 * scale, 160.0 * scale, color=(1.0, 0.97, 0.92))
    kb.link_light_to(rim, [bezel_obj], "KM Rim Receivers")
    kb.link_light_to(rim2, [bezel_obj], "KM Rim NE Receivers")
    # Sensitivity only: a flat overhead softbox and a low four-point ring for the broad, evenly
    # glowing champagne ring of the concept.
    if spec.get("bezel_overhead_energy", 0.0) > 0:
        over = kb.add_area_light("KM Bezel Overhead", target, 135.0, spec.get("bezel_overhead_elevation", 72.0),
                                 1500.0 * scale,
                                 spec["bezel_overhead_energy"] * scale ** 2, 1400.0 * scale, color=(1.0, 0.96, 0.9))
        kb.link_light_to(over, [bezel_obj], "KM Bezel Overhead Receivers")
    if spec.get("bezel_ring_energy", 0.0) > 0:
        ring = []
        for k, clock in enumerate((0.0, 90.0, 180.0, 270.0)):
            ring.append(kb.add_area_light(f"KM Bezel Ring {k}", target, 90.0 - clock, 18.0, 1500.0 * scale,
                                          spec["bezel_ring_energy"] * scale ** 2, 1600.0 * scale, 140.0 * scale,
                                          color=(1.0, 0.96, 0.9)))
        coll = bpy.data.collections.new("KM Bezel Ring Receivers")
        coll.objects.link(bezel_obj)
        for light in ring:
            light.light_linking.receiver_collection = coll


def main():
    control, out_dir, opts = parse_args()
    spec = {"selector": kc.SELECTOR, "sensitivity": kc.SENSITIVITY}[control]
    knob = build(spec, opts["pass"])
    if opts["save_blend"]:
        bpy.ops.wm.save_as_mainfile(filepath=os.path.abspath(opts["save_blend"]))
    out_dir = os.path.abspath(out_dir)
    if opts["pass"] == "shadow":
        kb.render_to(os.path.join(out_dir, f"{control}_shadow.png"), int(opts["samples"]))
        return
    frames = range(spec["frame_count"]) if opts["frames"] == "all" else [int(f) for f in opts["frames"].split(",")]
    for index in frames:
        angle = kc.frame_angle(spec, index)
        knob.rotation_euler = (0.0, 0.0, -math.radians(angle))
        kb.render_to(os.path.join(out_dir, f"{control}_{index:02d}.png"), int(opts["samples"]))


main()
