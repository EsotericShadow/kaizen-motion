"""Validate the rendered app icon and install it in the app's asset catalog.

python3 finalize_app_icon.py <render.png> <exports_dir> <appiconset_dir>

Checks 1024 x 1024 and no alpha (flattens RGBA onto black only if a render ever carries alpha),
writes the export copy, a small-size preview sheet and a manifest with SHA-256 hashes, then copies
the PNG to <appiconset_dir>/AppIcon.png. The asset catalog's Contents.json is maintained by hand.
"""

import hashlib
import json
import os
import shutil
import subprocess
import sys

from PIL import Image

HERE = os.path.dirname(os.path.abspath(__file__))


def sha(path):
    return hashlib.sha256(open(path, "rb").read()).hexdigest()


def main():
    render, exports, appiconset = map(os.path.abspath, sys.argv[1:4])
    os.makedirs(exports, exist_ok=True)
    image = Image.open(render)
    if image.size != (1024, 1024):
        sys.exit(f"app icon must be 1024 x 1024, got {image.size}")
    if image.mode != "RGB":
        image = image.convert("RGBA")
        flat = Image.new("RGB", image.size, (0, 0, 0))
        flat.paste(image, mask=image.getchannel("A"))
        image = flat
    export = os.path.join(exports, "AppIcon-1024.png")
    image.save(export, optimize=True)
    preview = os.path.join(exports, "AppIcon-small-sizes.png")
    subprocess.run([sys.executable, os.path.join(HERE, "preview_app_icon.py"), export, preview], check=True)
    target = os.path.join(appiconset, "AppIcon.png")
    shutil.copyfile(export, target)
    manifest = {
        "size_px": list(image.size),
        "mode": image.mode,
        "source_render": os.path.relpath(render, os.path.dirname(exports)),
        "export_sha256": sha(export),
        "app_icon_sha256": sha(target),
        "preview": os.path.basename(preview),
    }
    with open(os.path.join(exports, "app_icon_manifest.json"), "w") as fh:
        json.dump(manifest, fh, indent=2)
        fh.write("\n")
    print(json.dumps(manifest, indent=1))


if __name__ == "__main__":
    main()
