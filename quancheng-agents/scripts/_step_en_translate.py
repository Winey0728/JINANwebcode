# -*- coding: utf-8 -*-
"""泉城水脉 23 点位普通话讲解稿 → 英文讲解稿（Step Plan, step-3.7-flash 思考型）。
Key 从 ../assets/.env 读取（STEP_PLAN_*），绝不打印。串行 + 1s 间隔 + 指数退避重试 3 次。
断点续跑：已存在 文案-英语版.txt 的点位跳过。"""
import json, time, urllib.request, urllib.error
from pathlib import Path

HERE = Path(__file__).parent
ROOT = HERE.parent / "assets" / "语音讲解"

cfg = {}
for line in (HERE.parent / "assets" / ".env").read_text(encoding="utf-8").splitlines():
    if "=" in line and not line.strip().startswith("#"):
        k, v = line.split("=", 1)
        cfg[k.strip()] = v.strip().strip('"').strip("'")
KEY = cfg["STEP_PLAN_API_KEY"]
BASE = cfg["STEP_PLAN_BASE_URL"].rstrip("/")

SYSTEM = (
    "You are translating Chinese audio tour-guide scripts into English for visitors to hear, "
    "not for reading. Keep the storytelling voice and spoken, conversational rhythm — do NOT "
    "translate word-for-word. Use standard pinyin or established English names for people and "
    "places (e.g. Baotu Spring, Heihu Spring, Daming Lake, Qianfo Mountain, Jinan). Keep the "
    "length close to the original. Output ONLY the translated script text, no notes, no titles."
)

def chat(text, retries=3):
    payload = {"model": "step-3.7-flash", "messages": [
        {"role": "system", "content": SYSTEM},
        {"role": "user", "content": text}]}
    delay = 3.0
    for a in range(retries + 1):
        req = urllib.request.Request(BASE + "/chat/completions",
            data=json.dumps(payload).encode(),
            headers={"Authorization": "Bearer " + KEY,
                     "Content-Type": "application/json"}, method="POST")
        try:
            with urllib.request.urlopen(req, timeout=300) as r:
                resp = json.loads(r.read().decode())
            return resp["choices"][0]["message"]["content"].strip()
        except urllib.error.HTTPError as e:
            body = e.read()[:200]
            if e.code in (429, 500, 502, 503, 504) and a < retries:
                time.sleep(delay); delay *= 2; continue
            raise RuntimeError(f"HTTP {e.code}: {body!r}")
        except (urllib.error.URLError, TimeoutError):
            if a < retries:
                time.sleep(delay); delay *= 2; continue
            raise

def main():
    ok, fail, skip = 0, [], 0
    for d in sorted(ROOT.iterdir()):
        if not d.is_dir():
            continue
        src = d / "文案-普通话故事版.txt"
        out = d / "文案-英语版.txt"
        if not src.exists():
            continue
        if out.exists() and out.stat().st_size > 0:
            skip += 1; continue
        print(f"TRANSLATE {d.name}")
        try:
            t0 = time.time()
            en = chat(src.read_text(encoding="utf-8").strip())
            out.write_bytes(en.encode("utf-8"))  # UTF-8 无 BOM
            print(f"  OK {len(en)} chars {time.time()-t0:.0f}s")
            ok += 1
        except Exception as e:
            print(f"  FAIL {d.name}: {repr(e)[:200]}")
            fail.append(d.name)
        time.sleep(1)
    print(f"\n== ok={ok} fail={len(fail)} skip={skip}")
    for f in fail: print("FAILED:", f)

if __name__ == "__main__":
    main()
