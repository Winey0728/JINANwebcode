# -*- coding: utf-8 -*-
"""探测 Step Plan 专用端点能力：chat / tts / image。Key 从 .env 读取，不打印。"""
import json, time, urllib.request, urllib.error
from pathlib import Path

cfg = {}
for line in (Path(__file__).parent.parent / "assets" / ".env").read_text(encoding="utf-8").splitlines():
    if "=" in line and not line.strip().startswith("#"):
        k, v = line.split("=", 1)
        cfg[k.strip()] = v.strip().strip('"').strip("'")

BASE = cfg["STEP_PLAN_BASE_URL"].rstrip("/")
KEY = cfg["STEP_PLAN_API_KEY"]

def probe(name, path, payload, binary=False, timeout=120):
    url = BASE + path
    req = urllib.request.Request(url, data=json.dumps(payload).encode(),
        headers={"Authorization": "Bearer " + KEY, "Content-Type": "application/json"}, method="POST")
    t0 = time.time()
    try:
        with urllib.request.urlopen(req, timeout=timeout) as r:
            data = r.read()
        el = time.time() - t0
        if binary:
            print(f"[OK] {name}: {el:.1f}s, {len(data)} bytes (binary)")
        else:
            j = json.loads(data.decode())
            keys = list(j.keys())[:6]
            print(f"[OK] {name}: {el:.1f}s, json keys={keys}")
            return j
    except urllib.error.HTTPError as e:
        body = e.read().decode(errors="replace")[:200]
        print(f"[FAIL] {name}: HTTP {e.code} {body}")
    except Exception as e:
        print(f"[FAIL] {name}: {repr(e)[:200]}")

# 1. 对话（用户给的路径是 /chat/completion，两种写法都试）
probe("chat /chat/completions", "/chat/completions",
      {"model": "step-1-8k", "messages": [{"role": "user", "content": "hi"}], "max_tokens": 5})
probe("chat /chat/completion (单数)", "/chat/completion",
      {"model": "step-1-8k", "messages": [{"role": "user", "content": "hi"}], "max_tokens": 5})

# 2. TTS（上次 404 的路径，换新 key 再试）
probe("tts /audio/speech step-tts-mini", "/audio/speech",
      {"model": "step-tts-mini", "input": "测试", "voice": "cixingnansheng", "response_format": "mp3"}, binary=True)
probe("tts stepaudio-2.5-tts", "/audio/speech",
      {"model": "stepaudio-2.5-tts", "input": "测试", "voice": "cixingnansheng", "response_format": "mp3"}, binary=True)

# 3. 文生图
j = probe("image /images/generations", "/images/generations",
      {"model": "step-image-edit-2", "prompt": "a red circle on white background", "size": "1024x1024",
       "response_format": "url"}, timeout=300)
if j:
    d = j.get("data", [{}])[0]
    print("   image url head:", str(d.get("url") or d.get("b64_json", ""))[:80])

print("done")
