# -*- coding: utf-8 -*-
"""Step Plan 双管线验证：TTS + 图像生成（step-image-edit-2）。
Key 从 ../.env 读取，不打印。Step Plan 端点：api.stepfun.com/step_plan/v1"""
import json, sys, time, urllib.request
from pathlib import Path

HERE = Path(__file__).parent
cfg = {}
for line in (HERE.parent.parent / ".env").read_text(encoding="utf-8").splitlines():
    if "=" in line and not line.strip().startswith("#"):
        k, v = line.split("=", 1)
        cfg[k.strip()] = v.strip().strip('"').strip("'")
KEY = cfg["STEP_API_KEY"]
BASE = "https://api.stepfun.com/step_plan/v1"

def post(path, payload, timeout=180, binary=False):
    req = urllib.request.Request(
        BASE + path, data=json.dumps(payload).encode(),
        headers={"Authorization": "Bearer " + KEY, "Content-Type": "application/json"},
        method="POST")
    t0 = time.time()
    with urllib.request.urlopen(req, timeout=timeout) as r:
        data = r.read()
    print(f"  elapsed={time.time()-t0:.1f}s status=200 bytes={len(data)}")
    return data if binary else json.loads(data.decode())

# ---- 1. TTS 测试（黑虎泉普通话文案，截前150字）----
txt = (HERE / "文案-普通话故事版.txt").read_text(encoding="utf-8").strip()[:150]
print("[1] TTS step-tts-mini ...")
try:
    audio = post("/audio/speech", {
        "model": "step-tts-mini", "input": txt, "voice": "cixingnansheng",
        "response_format": "mp3"}, binary=True)
    out = HERE / "_step_tts_test.mp3"
    out.write_bytes(audio)
    print("  saved:", out.name, len(audio), "bytes")
except Exception as e:
    print("  TTS_FAIL:", repr(e)[:300])

# ---- 2. 图像测试（文生图，v5 prompt 截短版）----
print("[2] IMAGE step-image-edit-2 /images/generations ...")
prompt = ("Photorealistic hand-tinted late-Qing photograph c.1890, warm desaturated olive-sepia tone, "
          "subtle film grain. Heihu Spring Jinan: rough grey-brown limestone block wall behind a spring pool, "
          "one rustic weathered stone beast-head spout (baxia style, plain blocky, wide squared open mouth) "
          "gushing one powerful clear stream into the pool; two square side outlets trickling. "
          "Translucent pale jade-green water, stone bottom visible. Weeping willows frame left and right edges. "
          "Golden-hour light, warm haze. No people. No railings or buildings. No modern elements. No text.")
try:
    resp = post("/images/generations", {
        "model": "step-image-edit-2", "prompt": prompt, "size": "2048x1152",
        "response_format": "url"}, timeout=300)
    url = resp["data"][0].get("url") or resp["data"][0].get("b64_json", "")[:60]
    print("  resp url/b64:", str(url)[:100])
    if str(url).startswith("http"):
        req2 = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
        with urllib.request.urlopen(req2, timeout=120) as r:
            img = r.read()
        out = HERE / "_step_img_test.png"
        out.write_bytes(img)
        print("  saved:", out.name, len(img), "bytes")
except Exception as e:
    print("  IMG_FAIL:", repr(e)[:300])

print("done")
