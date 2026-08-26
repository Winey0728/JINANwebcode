# -*- coding: utf-8 -*-
"""泉城水脉语音讲解批量合成 — Step TTS (step-tts-mini, OpenAI 兼容)。
Key 从 ../assets/.env 读取（STEP_API_KEY），绝不打印/落盘。
用法:
  python _step_tts_batch.py            # 批量合成全部缺失条目
  python _step_tts_batch.py --test     # 只合成黑虎泉普通话版做校验
"""
import json, sys, time, urllib.request, urllib.error
from pathlib import Path

HERE = Path(__file__).parent
ROOT = HERE.parent / "assets" / "语音讲解"
ENV = HERE.parent / "assets" / ".env"

BASE = "https://api.stepfun.com/v1/audio/speech"
MODEL = "step-tts-mini"
# 语速：不传 speed 参数，使用 Step TTS 默认语速（实测 ~9 字/秒）。
# 注意：2025 版曾因对齐趵突泉 Kimi 样品用过 speed=0.6，用户反馈太慢已否决，勿再加回。
SPEED = None
# 音色: 普通话故事版=磁性男声 cixingnansheng; 济南方言版=温暖男声 wenrounansheng(更接地气)
JOBS = [("文案-普通话故事版.txt", "普通话-故事版.mp3", "cixingnansheng"),
        ("文案-济南方言版.txt", "济南方言-故事版.mp3", "wenrounansheng")]

cfg = {}
for line in ENV.read_text(encoding="utf-8").splitlines():
    if "=" in line and not line.strip().startswith("#"):
        k, v = line.split("=", 1)
        cfg[k.strip()] = v.strip().strip('"').strip("'")
KEY = cfg["STEP_API_KEY"]

BITRATES = {  # MPEG1 Layer3 kbps by bitrate index
    1: 32, 2: 40, 3: 48, 4: 56, 5: 64, 6: 80, 7: 96, 8: 112,
    9: 128, 10: 160, 11: 192, 12: 224, 13: 256, 14: 320}

def mp3_duration(path: Path) -> float:
    """纯 Python 估算 MP3 时长（MPEG1/2 Layer3 逐帧）。"""
    data = path.read_bytes()
    i, dur = 0, 0.0
    n = len(data)
    if data[:3] == b"ID3":  # 跳过 ID3v2
        size = ((data[6] & 0x7F) << 21) | ((data[7] & 0x7F) << 14) | \
               ((data[8] & 0x7F) << 7) | (data[9] & 0x7F)
        i = 10 + size
    while i + 4 <= n:
        if data[i] == 0xFF and (data[i + 1] & 0xE0) == 0xE0:
            ver = (data[i + 1] >> 3) & 3
            layer = (data[i + 1] >> 1) & 3
            br_idx = (data[i + 2] >> 4) & 0xF
            sr_idx = (data[i + 2] >> 2) & 3
            pad = (data[i + 2] >> 1) & 1
            if layer == 1 and br_idx not in (0, 15) and sr_idx != 3:  # Layer III
                sr = [44100, 48000, 32000][sr_idx]
                if ver == 2: sr //= 2
                elif ver == 0: sr //= 4
                br = BITRATES.get(br_idx)
                if br:
                    if ver == 3:  # MPEG1
                        flen = (144000 * br // sr) + pad
                        dur += 1152 / sr
                    else:         # MPEG2/2.5
                        flen = (72000 * br // sr) + pad
                        dur += 576 / sr
                    i += flen
                    continue
        i += 1
    return dur

def tts(text: str, voice: str, retries: int = 4) -> bytes:
    delay = 2.0
    for attempt in range(retries + 1):
        payload = {"model": MODEL, "input": text, "voice": voice,
                   "response_format": "mp3"}
        if SPEED is not None:
            payload["speed"] = SPEED
        req = urllib.request.Request(
            BASE,
            data=json.dumps(payload).encode(),
            headers={"Authorization": "Bearer " + KEY,
                     "Content-Type": "application/json"}, method="POST")
        try:
            with urllib.request.urlopen(req, timeout=300) as r:
                return r.read()
        except urllib.error.HTTPError as e:
            body = e.read()[:200]
            if e.code in (429, 500, 502, 503, 504) and attempt < retries:
                time.sleep(delay); delay *= 2; continue
            raise RuntimeError(f"HTTP {e.code}: {body!r}")
        except (urllib.error.URLError, TimeoutError) as e:
            if attempt < retries:
                time.sleep(delay); delay *= 2; continue
            raise

def synth(txt_path: Path, out_path: Path, voice: str):
    text = txt_path.read_text(encoding="utf-8").strip()
    chars = sum(1 for c in text if not c.isspace())
    audio = tts(text, voice)
    out_path.write_bytes(audio)
    dur = mp3_duration(out_path)
    rate = chars / dur if dur else 0
    print(f"  OK {out_path.parent.name}/{out_path.name} "
          f"{len(audio)}B {dur:.0f}s 字数={chars} 速率={rate:.1f}字/s")
    return len(audio), dur

def main():
    test_only = "--test" in sys.argv
    ok, fail, skip = [], [], []
    for d in sorted(ROOT.iterdir()):
        if not d.is_dir():
            continue
        for txt_name, mp3_name, voice in JOBS:
            txt_p, mp3_p = d / txt_name, d / mp3_name
            if not txt_p.exists():
                print(f"  MISS_TXT {d.name}/{txt_name}"); continue
            if mp3_p.exists() and mp3_p.stat().st_size > 0:
                skip.append(f"{d.name}/{mp3_name}"); continue
            if test_only and not (d.name == "黑虎泉" and "普通话" in mp3_name):
                continue
            print(f"SYNTH {d.name}/{mp3_name} voice={voice}")
            try:
                synth(txt_p, mp3_p, voice)
                ok.append(f"{d.name}/{mp3_name}")
            except Exception as e:
                print(f"  FAIL {d.name}/{mp3_name}: {repr(e)[:200]}")
                fail.append(f"{d.name}/{mp3_name}")
            time.sleep(1.5)
    print(f"\n== ok={len(ok)} fail={len(fail)} skip={len(skip)}")
    for f in fail: print("FAILED:", f)

if __name__ == "__main__":
    main()
