# -*- coding: utf-8 -*-
"""黑虎泉 v7 三图策略批量生图（Step Plan 套餐）。
凭证从 ../assets/.env 读取（STEP_PLAN_API_KEY / STEP_PLAN_BASE_URL），绝不打印/落盘。
图A/图C 走 i2i /images/edits（multipart）；图B 走 t2i /images/generations（JSON）。
返回 URL 约 24h 有效，即下即存。"""
import json, sys, time, uuid, urllib.request, urllib.error
from pathlib import Path

HERE = Path(__file__).parent
SITE = HERE.parent / "assets" / "历史复原" / "黑虎泉"
REF = SITE / "_参考照片"
OUT = SITE / "样图v7-三图策略"
OUT.mkdir(exist_ok=True)

cfg = {}
for line in (HERE.parent / "assets" / ".env").read_text(encoding="utf-8").splitlines():
    if "=" in line and not line.strip().startswith("#"):
        k, v = line.split("=", 1)
        cfg[k.strip()] = v.strip().strip('"').strip("'")
KEY = cfg["STEP_PLAN_API_KEY"]
BASE = cfg["STEP_PLAN_BASE_URL"].rstrip("/")
MODEL = "step-image-edit-2"

PROMPTS = {
 "图A-清末全景": (
  "Photorealistic hand-tinted late-Qing dynasty photograph, warm desaturated sepia-olive tone, "
  "subtle film grain. Keep the composition of the reference photo. One single plain blocky stone "
  "beast-head spout (baxia style, wide squared open mouth), embedded in the weathered stone pool "
  "wall, gushing one powerful clear stream into the jade-green pool; two plain square side outlets "
  "trickling. Residents in late-Qing robes with wooden buckets on the stone platform. "
  "No modern elements, no railings, no text."),
 "图B-虎头特写": (
  "Photorealistic hand-tinted late-Qing photograph, close-up, warm sepia-olive tone, film grain. "
  "A single archaic plain stone beast-head spout (Chinese baxia style: broad flat snout, bulging "
  "round eyes, curled eyebrows, wide squared open mouth, heavily weathered grey-brown stone with "
  "moss and lichen, no stripes, no ornament), embedded in a rough blue-grey limestone wall, gushing "
  "one powerful stream of clear spring water into a translucent jade-green pool below. "
  "No people, no modern elements, no text."),
 "图C-民国三虎": (
  "Colorize and restore this Republic-era 1930s photograph of Heihu Spring, Jinan. Keep the "
  "composition of the reference photo. Natural warm daylight, clear jade-green spring water. "
  "Three plain stone beast-head spouts, embedded in the stone wall, not floating, gushing powerful "
  "clear streams into the pool. Any figures wear Republic-era long gowns or short coarse clothes. "
  "Photorealistic, subtle film grain. No modern elements, no railings, no text."),
}
I2I_BASE = {"图A-清末全景": REF / "清末-单虎头-池边人群合影.jpeg",
            "图C-民国三虎": REF / "民国-泉池拱门黑白.jpeg"}

def _request(req, timeout=300, retries=3):
    delay = 3.0
    for a in range(retries + 1):
        try:
            with urllib.request.urlopen(req, timeout=timeout) as r:
                return r.read()
        except urllib.error.HTTPError as e:
            body = e.read()[:300]
            if e.code in (429, 500, 502, 503, 504) and a < retries:
                time.sleep(delay); delay *= 2; continue
            raise RuntimeError(f"HTTP {e.code}: {body!r}")
        except (urllib.error.URLError, TimeoutError):
            if a < retries:
                time.sleep(delay); delay *= 2; continue
            raise

def multipart(fields, file_field, file_path):
    b = uuid.uuid4().hex
    parts = []
    for k, v in fields.items():
        parts.append(f"--{b}\r\nContent-Disposition: form-data; name=\"{k}\"\r\n\r\n{v}\r\n".encode())
    data = file_path.read_bytes()
    parts.append(f"--{b}\r\nContent-Disposition: form-data; name=\"{file_field}\"; "
                 f"filename=\"{file_path.name}\"\r\nContent-Type: image/jpeg\r\n\r\n".encode() + data + b"\r\n")
    parts.append(f"--{b}--\r\n".encode())
    return b"".join(parts), b

def gen(name, idx, prompt):
    base_img = I2I_BASE.get(name)
    if base_img:
        body, boundary = multipart({"model": MODEL, "prompt": prompt, "response_format": "url"},
                                   "image", base_img)
        req = urllib.request.Request(BASE + "/images/edits", data=body,
            headers={"Authorization": "Bearer " + KEY,
                     "Content-Type": f"multipart/form-data; boundary={boundary}"}, method="POST")
    else:
        body = json.dumps({"model": MODEL, "prompt": prompt, "size": "1360x768",
                           "response_format": "url"}).encode()
        req = urllib.request.Request(BASE + "/images/generations", data=body,
            headers={"Authorization": "Bearer " + KEY, "Content-Type": "application/json"},
            method="POST")
    t0 = time.time()
    resp = json.loads(_request(req).decode())
    url = resp["data"][0].get("url") or resp["data"][0].get("image_url")
    r2 = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    img = _request(r2, timeout=180)
    out = OUT / f"{name}-候选{idx}.png"
    out.write_bytes(img)
    print(f"  OK {out.name} {len(img)}B {time.time()-t0:.0f}s")

def main():
    only = sys.argv[1:] or None
    for name, prompt in PROMPTS.items():
        assert len(prompt) <= 512, (name, len(prompt))
        if only and name not in only:
            continue
        for i in (1, 2, 3):
            out = OUT / f"{name}-候选{i}.png"
            if out.exists() and out.stat().st_size > 0:
                print(f"skip {out.name}"); continue
            print(f"GEN {name} 候选{i} (prompt {len(prompt)} chars)")
            try:
                gen(name, i, prompt)
            except Exception as e:
                print(f"  FAIL {name}-{i}: {repr(e)[:250]}")
            time.sleep(2)

if __name__ == "__main__":
    main()
