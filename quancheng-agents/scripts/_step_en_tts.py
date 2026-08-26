# -*- coding: utf-8 -*-
"""泉城水脉英文讲解 TTS（Step Plan, stepaudio-2.5-tts）。
Key 从 ../assets/.env 读取（STEP_PLAN_*），绝不打印。
用法:
  python _step_en_tts.py --trial    # 黑虎泉 × 2 音色试听
  python _step_en_tts.py VOICE      # 用选定音色批量合成 23 条 英语-故事版.mp3
"""
import json, sys, time, urllib.request, urllib.error
from pathlib import Path

HERE = Path(__file__).parent
ROOT = HERE.parent / "assets" / "语音讲解"
MODEL = "stepaudio-2.5-tts"

cfg = {}
for line in (HERE.parent / "assets" / ".env").read_text(encoding="utf-8").splitlines():
    if "=" in line and not line.strip().startswith("#"):
        k, v = line.split("=", 1)
        cfg[k.strip()] = v.strip().strip('"').strip("'")
KEY = cfg["STEP_PLAN_API_KEY"]
BASE = cfg["STEP_PLAN_BASE_URL"].rstrip("/")

BITRATES = {1:32,2:40,3:48,4:56,5:64,6:80,7:96,8:112,9:128,10:160,11:192,12:224,13:256,14:320}

def mp3_duration(path):
    data = path.read_bytes(); i, dur, n = 0, 0.0, len(data)
    if data[:3] == b"ID3":
        i = 10 + (((data[6]&0x7F)<<21)|((data[7]&0x7F)<<14)|((data[8]&0x7F)<<7)|(data[9]&0x7F))
    while i + 4 <= n:
        if data[i] == 0xFF and (data[i+1] & 0xE0) == 0xE0:
            ver=(data[i+1]>>3)&3; br=(data[i+2]>>4)&0xF; sr=(data[i+2]>>2)&3; pad=(data[i+2]>>1)&1
            if sr != 3 and br in BITRATES:
                rate=[44100,48000,32000][sr]
                if ver==2: rate//=2
                elif ver==0: rate//=4
                i += (144000 if ver==3 else 72000)*BITRATES[br]//rate + pad
                dur += (1152 if ver==3 else 576)/rate
                continue
        i += 1
    return dur

def tts(text, voice, retries=3):
    delay = 3.0
    for a in range(retries + 1):
        req = urllib.request.Request(BASE + "/audio/speech",
            data=json.dumps({"model": MODEL, "input": text, "voice": voice,
                             "response_format": "mp3"}).encode(),
            headers={"Authorization": "Bearer " + KEY,
                     "Content-Type": "application/json"}, method="POST")
        try:
            with urllib.request.urlopen(req, timeout=300) as r:
                return r.read()
        except urllib.error.HTTPError as e:
            body = e.read()[:200]
            if e.code in (429, 500, 502, 503, 504) and a < retries:
                time.sleep(delay); delay *= 2; continue
            raise RuntimeError(f"HTTP {e.code}: {body!r}")
        except (urllib.error.URLError, TimeoutError):
            if a < retries:
                time.sleep(delay); delay *= 2; continue
            raise

def synth(txt_path, out_path, voice):
    text = txt_path.read_text(encoding="utf-8").strip()
    words = len(text.split())
    t0 = time.time()
    audio = tts(text, voice)
    out_path.write_bytes(audio)
    dur = mp3_duration(out_path)
    print(f"  OK {out_path.name} {len(audio)}B {dur:.0f}s words={words} rate={words/dur:.1f}词/s api={time.time()-t0:.0f}s")

def main():
    if "--trial" in sys.argv:
        src = ROOT / "黑虎泉" / "文案-英语版.txt"
        for v in ("cixingnansheng", "boyinnansheng"):
            out = ROOT / "黑虎泉" / f"英语-故事版-试听-{v}.mp3"
            print(f"TRIAL {v}")
            try:
                synth(src, out, v)
            except Exception as e:
                print(f"  FAIL {v}: {repr(e)[:250]}")
            time.sleep(1.5)
        return
    voice = sys.argv[1]
    ok, fail, skip = 0, [], 0
    for d in sorted(ROOT.iterdir()):
        if not d.is_dir():
            continue
        src = d / "文案-英语版.txt"
        out = d / "英语-故事版.mp3"
        if not src.exists():
            continue
        if out.exists() and out.stat().st_size > 0:
            skip += 1; continue
        print(f"SYNTH {d.name}")
        try:
            synth(src, out, voice); ok += 1
        except Exception as e:
            print(f"  FAIL {d.name}: {repr(e)[:200]}"); fail.append(d.name)
        time.sleep(1.5)
    print(f"\n== ok={ok} fail={len(fail)} skip={skip}")
    for f in fail: print("FAILED:", f)

if __name__ == "__main__":
    main()
