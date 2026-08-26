#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
老照片严格上色工具 —— 基于 Step Plan API（step-image-edit-2 图像编辑端点）。

原理：不是本地上色模型，而是调用 Step API 的图像编辑接口，
用"严格约束 prompt"让模型只加颜色、不增删改任何画面内容。
实测（黑虎泉民国拱门照）：构图 100% 继承，零穿帮，色调沉稳。

用法：
    python step_colorize.py <输入照片> <输出.png> [额外prompt]
    python step_colorize.py 民国-泉池拱门黑白.jpeg out.png
    python step_colorize.py a.jpg out.png "muted warm tones, slightly faded hand-tinted look"

批量：
    python step_colorize.py --batch <目录>   # 上色目录下所有 jpg/jpeg/png（跳过已上色输出）

凭证：从 quancheng-agents/assets/.env 读取 STEP_PLAN_API_KEY / STEP_PLAN_BASE_URL
（本脚本置于 scripts/ 下时自动定位 ../assets/.env；也可用 --env 指定）
"""
import argparse, json, sys, time, uuid, urllib.request, urllib.error
from pathlib import Path

DEFAULT_PROMPT = (
    "Colorize this black-and-white historical photograph with realistic, "
    "period-accurate muted colors. Strictly preserve every element of the original: "
    "all structures, people, objects, positions and details must remain exactly unchanged. "
    "Do not add, remove, move or redraw anything. Only add color."
)

def load_cfg(env_path: Path):
    cfg = {}
    for line in env_path.read_text(encoding="utf-8").splitlines():
        if "=" in line and not line.strip().startswith("#"):
            k, v = line.split("=", 1)
            cfg[k.strip()] = v.strip().strip('"').strip("'")
    return cfg["STEP_PLAN_BASE_URL"].rstrip("/"), cfg["STEP_PLAN_API_KEY"]

def colorize(base, key, src: Path, dst: Path, extra=""):
    prompt = DEFAULT_PROMPT + ((" " + extra) if extra else "")
    img = src.read_bytes()
    ctype = "image/png" if src.suffix.lower() == ".png" else "image/jpeg"
    boundary = uuid.uuid4().hex
    parts = []
    def field(n, v):
        parts.append(f"--{boundary}\r\nContent-Disposition: form-data; name=\"{n}\"\r\n\r\n{v}\r\n".encode())
    field("model", "step-image-edit-2")
    field("prompt", prompt)
    field("response_format", "url")
    parts.append(f"--{boundary}\r\nContent-Disposition: form-data; name=\"image\"; filename=\"{src.name}\"\r\nContent-Type: {ctype}\r\n\r\n".encode() + img + b"\r\n")
    parts.append(f"--{boundary}--\r\n".encode())
    req = urllib.request.Request(base + "/images/edits", data=b"".join(parts),
        headers={"Authorization": "Bearer " + key,
                 "Content-Type": f"multipart/form-data; boundary={boundary}"}, method="POST")
    for attempt in range(3):
        try:
            t0 = time.time()
            with urllib.request.urlopen(req, timeout=300) as r:
                j = json.loads(r.read().decode())
            url = j["data"][0]["url"]
            req2 = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
            with urllib.request.urlopen(req2, timeout=120) as r:
                data = r.read()
            dst.parent.mkdir(parents=True, exist_ok=True)
            dst.write_bytes(data)
            print(f"[OK] {src.name} -> {dst.name}  {time.time()-t0:.1f}s  {len(data)//1024}KB")
            return True
        except urllib.error.HTTPError as e:
            body = e.read().decode(errors="replace")[:150]
            print(f"[HTTP {e.code}] {src.name}: {body}  (retry {attempt+1}/3)")
            time.sleep(2 ** attempt * 2)
        except Exception as e:
            print(f"[ERR] {src.name}: {repr(e)[:150]}  (retry {attempt+1}/3)")
            time.sleep(2 ** attempt * 2)
    print(f"[FAIL] {src.name}")
    return False

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("src", help="输入照片文件，或 --batch 时的目录")
    ap.add_argument("dst", nargs="?", help="输出 png 路径（batch 模式忽略）")
    ap.add_argument("extra", nargs="?", default="", help="追加的 prompt（可选）")
    ap.add_argument("--batch", action="store_true", help="批量模式：src 为目录")
    ap.add_argument("--env", default=str(Path(__file__).parent.parent / "assets" / ".env"))
    a = ap.parse_args()
    base, key = load_cfg(Path(a.env))
    if a.batch:
        d = Path(a.src)
        ok = fail = 0
        for f in sorted(d.iterdir()):
            if f.suffix.lower() in (".jpg", ".jpeg", ".png") and "-上色" not in f.stem:
                out = f.with_name(f.stem + "-上色.png")
                if out.exists():
                    print(f"[SKIP] {f.name}（已有上色版）"); continue
                ok += colorize(base, key, f, out, a.extra)
                time.sleep(1.5)
        fail = 1  # placeholder not used
        print(f"done, success={ok}")
    else:
        if not a.dst:
            ap.error("单张模式需要 dst 输出路径")
        sys.exit(0 if colorize(base, key, Path(a.src), Path(a.dst), a.extra) else 1)

if __name__ == "__main__":
    main()
