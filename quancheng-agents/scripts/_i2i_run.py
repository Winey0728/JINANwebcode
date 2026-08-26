# -*- coding: utf-8 -*-
"""Agnes i2i 试点：黑虎泉。读取 .env（不打印 key），base64 data URI 传底图，即出即下载。"""
import base64, json, os, sys, time, urllib.request
from pathlib import Path

HERE = Path(__file__).parent
ENV = HERE.parent.parent / ".env"
cfg = {}
for line in ENV.read_text(encoding="utf-8").splitlines():
    if "=" in line and not line.strip().startswith("#"):
        k, v = line.split("=", 1)
        cfg[k.strip()] = v.strip().strip('"').strip("'")
KEY = cfg["AGNES_API_KEY"]
BASE = cfg.get("AGNES_BASE_URL", "https://apihub.agnes-ai.cn/v1").rstrip("/")

base_img = HERE / "_参考照片" / "清末-单虎头-池边人群合影.jpeg"
b64 = base64.b64encode(base_img.read_bytes()).decode()
data_uri = f"data:image/jpeg;base64,{b64}"

prompt = (
    "Restore and reimagine this late-Qing dynasty (c. 1880s-1900s) photograph of Heihu Spring "
    "(Black Tiger Spring) in Jinan, China, keeping the exact same composition, camera angle, "
    "stone pool layout and the arched cave opening in the cliff wall. "
    "photorealistic vintage historical photograph style, 1880s-1930s China, warm golden-hour tone, "
    "subtle film grain, soft analog color palette, high detail, no modern elements. "
    "The spring pool is built of rough-hewn weathered blue-grey stone blocks below a natural cliff. "
    "One single ancient rustic stone-carved tiger head is embedded in the pool wall (historically "
    "there was only ONE tiger head before 1931), its mouth wide open, spewing one powerful stream "
    "of clear spring water with visible force and white splashes; the two smaller square side "
    "outlets also flow gently. Deep jade-green water with ripples and rising bubbles. "
    "On the stone platform above the pool, Jinan residents in late-Qing traditional clothing "
    "(long cotton robes, magua jackets, cloth headwraps, children in coarse cloth) gather with "
    "wooden buckets with iron hoops, terracotta water jars, bamboo shoulder poles; one man crouches "
    "filling a wooden bucket. Old brick houses with tiled roofs behind the cliff top. "
    "Late afternoon warm sunlight, gentle haze, serene daily life. "
    "Historically accurate, no plastic containers, no metal pipes, no faucets, no modern clothing, "
    "no modern railings, no concrete, no simplified-Chinese signs."
)

payload = {
    "model": "agnes-image-2.1-flash",
    "prompt": prompt,
    "size": "2048x1152",
    "image": [data_uri],
    "response_format": "url",
}
body = json.dumps(payload).encode()
req = urllib.request.Request(
    BASE + "/images/generations", data=body,
    headers={"Authorization": "Bearer " + KEY, "Content-Type": "application/json",
             "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"},
    method="POST",
)
t0 = time.time()
try:
    with urllib.request.urlopen(req, timeout=300) as r:
        resp = json.loads(r.read().decode())
except urllib.error.HTTPError as e:
    print("HTTP_ERROR", e.code, e.read().decode()[:800]); sys.exit(1)
dt = time.time() - t0
print(f"elapsed={dt:.1f}s")
url = resp["data"][0].get("url") or resp["data"][0].get("image_url")
print("got url:", url[:80], "...")
out = HERE / "样图v2-i2i-清末单虎.png"
req2 = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
with urllib.request.urlopen(req2, timeout=120) as r:
    data = r.read()
out.write_bytes(data)
print("saved:", out, len(data), "bytes")
