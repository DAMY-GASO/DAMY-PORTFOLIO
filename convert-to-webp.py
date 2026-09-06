#!/usr/bin/env python3
"""
convert-to-webp.py
-------------------
Inabana (compress) picha zote (.png, .jpg, .jpeg) zilizo ndani ya folder
uliyoainisha kuwa .webp, kwa lengo la kuongeza kasi ya tovuti.

MATUMIZI:
    1. Weka faili hii kwenye mzizi (root) wa project yako (pale palipo
       folder ya "assets").
    2. Sakinisha Pillow (mara moja tu):
           pip install Pillow --break-system-packages
       (au: pip install Pillow   -- kama huna kizuizi hicho)
    3. Endesha:
           python3 convert-to-webp.py

FAIDA / TABIA YA SCRIPT:
    - HAIFUTI faili za awali (.png/.jpg) - webp inatengenezwa PEMBENI
      yake (mfano: dash.png -> dash.webp). Hii ni MUHIMU kwa sababu
      HTML tutakayotumia (tazama maelezo yaliyokutumiwa) inahitaji
      faili zote mbili zipo: webp kwa vivinjari vinavyo-support,
      na ya awali kama fallback.
    - Inaruka (skip) faili ambazo tayari zina .webp inayolingana ili
      usipoteze muda ukiendesha script mara kadhaa.
    - Inaonyesha muhtasari wa MB ulizookoa mwishoni.
"""

import os
import sys

try:
    from PIL import Image
except ImportError:
    print("Pillow haijasakinishwa. Endesha kwanza:")
    print("    pip install Pillow --break-system-packages")
    sys.exit(1)

IMAGES_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), "assets", "images")
QUALITY = 82  # 75-85 kwa kawaida ni sehemu nzuri kati ya ubora na size
VALID_EXT = (".png", ".jpg", ".jpeg")


def human_size(num_bytes):
    for unit in ("B", "KB", "MB", "GB"):
        if num_bytes < 1024:
            return f"{num_bytes:.1f}{unit}"
        num_bytes /= 1024
    return f"{num_bytes:.1f}TB"


def convert_folder(folder):
    total_before = 0
    total_after = 0
    converted = 0
    skipped = 0
    failed = []

    for root, _dirs, files in os.walk(folder):
        for filename in files:
            name, ext = os.path.splitext(filename)
            if ext.lower() not in VALID_EXT:
                continue

            src_path = os.path.join(root, filename)
            dst_path = os.path.join(root, name + ".webp")

            if os.path.exists(dst_path):
                skipped += 1
                continue

            try:
                with Image.open(src_path) as img:
                    if img.mode in ("RGBA", "LA") or (img.mode == "P" and "transparency" in img.info):
                        img = img.convert("RGBA")
                    else:
                        img = img.convert("RGB")
                    img.save(dst_path, "WEBP", quality=QUALITY, method=6)

                before = os.path.getsize(src_path)
                after = os.path.getsize(dst_path)
                total_before += before
                total_after += after
                converted += 1
                saved_pct = (1 - after / before) * 100 if before else 0
                print(f"  ✓ {filename} -> {name}.webp  "
                      f"({human_size(before)} -> {human_size(after)}, -{saved_pct:.0f}%)")
            except Exception as exc:
                failed.append((filename, str(exc)))
                print(f"  ✗ Imeshindwa: {filename} ({exc})")

    print("\n--- Muhtasari ---")
    print(f"Zilizobadilishwa : {converted}")
    print(f"Zilizorukwa (tayari zipo)  : {skipped}")
    if failed:
        print(f"Zilizoshindwa    : {len(failed)}")
    if total_before:
        saved_pct = (1 - total_after / total_before) * 100
        print(f"Ukubwa kabla     : {human_size(total_before)}")
        print(f"Ukubwa baada     : {human_size(total_after)}")
        print(f"Ulichookoa       : {human_size(total_before - total_after)} (-{saved_pct:.0f}%)")


if __name__ == "__main__":
    target = sys.argv[1] if len(sys.argv) > 1 else IMAGES_DIR
    if not os.path.isdir(target):
        print(f"Folder haipo: {target}")
        print("Tumia: python3 convert-to-webp.py /njia/ya/assets/images")
        sys.exit(1)

    print(f"Inabana picha ndani ya: {target}\n")
    convert_folder(target)
