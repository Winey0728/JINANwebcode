# -*- coding: utf-8 -*-
"""
泉城水脉画册数据构建脚本（幂等，可重复运行）

功能：
1. 从 index.html 内嵌 PAGES 提取点位元数据（首次运行时），缓存为 pages_meta.json；
   之后 index.html 不再内嵌 PAGES，脚本改读 pages_meta.json。
2. 语音文案从 assets/语音讲解/<点位名>/文案-*.txt 读取（assets 为唯一事实来源）。
3. 检测 assets 中实际存在的 mp3 / 复原图，复制到 flipbook/media/<点位名>/，
   data.js 中生成 media/ 相对路径。
4. 输出 flipbook/data.js（const PAGES = [...];）。
5. 刷新 quancheng-agents/素材盘点报告.md（盘点表 + 文案差异列表）。
"""
import json
import re
import shutil
import subprocess
import sys
import tempfile
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent          # quancheng-agents/
FLIPBOOK = ROOT / "flipbook"
INDEX = FLIPBOOK / "index.html"
META_CACHE = FLIPBOOK / "pages_meta.json"
DATA_JS = FLIPBOOK / "data.js"
MEDIA_DIR = FLIPBOOK / "media"
VOICE_DIR = ROOT / "assets" / "语音讲解"
HIST_DIR = ROOT / "assets" / "历史复原"
REPORT = ROOT / "素材盘点报告.md"

META_FIELDS = ["type", "id", "group", "name", "subtitle", "lead", "historyCaption"]
TXT_MANDARIN = "文案-普通话故事版.txt"
TXT_DIALECT = "文案-济南方言版.txt"
MP3_MANDARIN = "普通话-故事版.mp3"
MP3_DIALECT = "济南方言-故事版.mp3"


def extract_pages_from_index():
    """用 node 解析 index.html 中内嵌的 PAGES 数组，返回 list[dict]。无内嵌则返回 None。"""
    html = INDEX.read_text(encoding="utf-8")
    m = re.search(r"const PAGES = (\[.*?\n\];)", html, re.S)
    if not m:
        return None
    arr_src = m.group(1)[:-1]  # 去掉结尾分号
    with tempfile.NamedTemporaryFile(
        "w", suffix=".mjs", delete=False, encoding="utf-8", dir=FLIPBOOK
    ) as f:
        f.write("const PAGES = " + arr_src + ";\n")
        f.write("console.log(JSON.stringify(PAGES));\n")
        tmp = f.name
    try:
        out = subprocess.run(
            ["node", tmp], capture_output=True, text=True, check=True, encoding="utf-8"
        )
        return json.loads(out.stdout)
    finally:
        Path(tmp).unlink(missing_ok=True)


def load_metadata():
    pages = extract_pages_from_index()
    if pages is not None:
        META_CACHE.write_text(
            json.dumps(pages, ensure_ascii=False, indent=2), encoding="utf-8"
        )
        print(f"[meta] 从 index.html 提取 {len(pages)} 条，已缓存 pages_meta.json")
        return pages, True
    pages = json.loads(META_CACHE.read_text(encoding="utf-8"))
    print(f"[meta] index.html 无内嵌 PAGES，读取缓存 pages_meta.json（{len(pages)} 条）")
    return pages, False


def pick_history_image(site_dir):
    """在 历史复原/<点位>/ 下挑选一张正式复原图。规则：含'复原图'优先，其次样图最高版本。"""
    if not site_dir.is_dir():
        return None
    imgs = [p for p in site_dir.iterdir() if p.suffix.lower() in (".png", ".jpg", ".jpeg")]
    formal = [p for p in imgs if "复原图" in p.name]
    if formal:
        return sorted(formal, key=lambda p: p.name)[-1]
    samples = [p for p in imgs if re.search(r"样图|v\d", p.name)]
    if samples:
        def ver(p):
            m = re.search(r"v(\d+)", p.name)
            return int(m.group(1)) if m else 0
        return sorted(samples, key=lambda p: (ver(p), p.name))[-1]
    return None


def norm(s):
    """比较文案时忽略首尾空白差异。"""
    return re.sub(r"\s+", "", s or "")


def main():
    embedded_pages, from_index = load_metadata()

    # 盘点 + 重建
    inventory = []   # (name, group, txt_m, txt_f, mp3, img)
    diffs = []       # (name, field)
    new_pages = []
    MEDIA_DIR.mkdir(exist_ok=True)

    for p in embedded_pages:
        q = {k: v for k, v in p.items() if k in META_FIELDS and v is not None}
        name = p.get("name")
        if not name:  # 封面/目录/封底
            new_pages.append(q)
            continue

        vdir = VOICE_DIR / name
        hdir = HIST_DIR / name
        txt_m_path, txt_f_path = vdir / TXT_MANDARIN, vdir / TXT_DIALECT
        txt_m = txt_m_path.read_text(encoding="utf-8").strip() if txt_m_path.exists() else ""
        txt_f = txt_f_path.read_text(encoding="utf-8").strip() if txt_f_path.exists() else ""

        # 文案差异（仅首次有内嵌数据可比）
        if from_index:
            if p.get("audioMandarin") is not None and norm(p["audioMandarin"]) != norm(txt_m):
                diffs.append((name, "audioMandarin"))
            if p.get("audioDialect") is not None and norm(p["audioDialect"]) != norm(txt_f):
                diffs.append((name, "audioDialect"))

        q["audioMandarin"] = txt_m
        q["audioDialect"] = txt_f

        # 音频
        mp_m, mp_f = vdir / MP3_MANDARIN, vdir / MP3_DIALECT
        has_audio = mp_m.exists() or mp_f.exists()
        q["hasAudio"] = bool(has_audio)
        dest_dir = MEDIA_DIR / name
        if mp_m.exists():
            dest_dir.mkdir(parents=True, exist_ok=True)
            shutil.copy2(mp_m, dest_dir / mp_m.name)
            q["audioMandarinPath"] = f"media/{name}/{mp_m.name}"
        if mp_f.exists():
            dest_dir.mkdir(parents=True, exist_ok=True)
            shutil.copy2(mp_f, dest_dir / mp_f.name)
            q["audioDialectPath"] = f"media/{name}/{mp_f.name}"

        # 复原图
        img = pick_history_image(hdir)
        q["hasHistoryImg"] = img is not None
        if img:
            dest_dir.mkdir(parents=True, exist_ok=True)
            shutil.copy2(img, dest_dir / img.name)
            q["historyImgPath"] = f"media/{name}/{img.name}"

        new_pages.append(q)
        inventory.append((
            name, p.get("group", ""),
            txt_m_path.exists(), txt_f_path.exists(),
            mp_m.exists() or mp_f.exists(), img is not None,
        ))

    # 清理 media 中已不存在于 data.js 的残留（幂等刷新）
    valid = set()
    for q in new_pages:
        for k in ("audioMandarinPath", "audioDialectPath", "historyImgPath"):
            if q.get(k):
                valid.add(q[k])
    for f in MEDIA_DIR.rglob("*"):
        if f.is_file() and f.relative_to(FLIPBOOK).as_posix() not in valid:
            f.unlink()
    for d in sorted(MEDIA_DIR.iterdir()):
        if d.is_dir() and not any(d.iterdir()):
            d.rmdir()

    # 写 data.js
    js = "const PAGES = " + json.dumps(new_pages, ensure_ascii=False, indent=2) + ";\n"
    DATA_JS.write_text(js, encoding="utf-8")
    print(f"[out] data.js 写入完成，共 {len(new_pages)} 页")

    # 写盘点报告
    lines = [
        "# 泉城水脉 · 素材盘点报告",
        "",
        f"生成方式：`python flipbook/build_data.py`（自动刷新）",
        "",
        "| 点位 | 分组 | 普通话文案 | 方言文案 | 语音mp3 | 复原图 |",
        "|---|---|---|---|---|---|",
    ]
    ok = "✅"
    miss = "❌ 缺失"
    for name, group, tm, tf, mp, im in inventory:
        lines.append(
            f"| {name} | {group} | {ok if tm else miss} | {ok if tf else miss} "
            f"| {ok if mp else miss} | {ok if im else miss} |"
        )
    n = len(inventory)
    lines += [
        "",
        "## 统计",
        "",
        f"- 点位总数：{n}",
        f"- 双语文案齐备：{sum(1 for r in inventory if r[2] and r[3])}/{n}",
        f"- 有语音 mp3：{sum(1 for r in inventory if r[4])}/{n}"
        f"（{'、'.join(r[0] for r in inventory if r[4]) or '无'}）",
        f"- 有复原图：{sum(1 for r in inventory if r[5])}/{n}"
        f"（{'、'.join(r[0] for r in inventory if r[5]) or '无'}）",
        "",
        "## 文案差异（txt 与 index.html 原内嵌文案不一致，已以 txt 为准）",
        "",
    ]
    if diffs:
        for name, field in diffs:
            lines.append(f"- {name} · {field}")
    else:
        lines.append("- 无差异" if from_index else "- （index.html 已无内嵌文案，差异比对仅在首次迁移时进行）")
    REPORT.write_text("\n".join(lines) + "\n", encoding="utf-8")
    print(f"[out] 盘点报告已刷新：{REPORT.name}")
    if diffs:
        print("[diff] 差异点位：" + "、".join(f"{n}({f})" for n, f in diffs))
    else:
        print("[diff] 无文案差异" if from_index else "[diff] 跳过（非首次迁移）")


if __name__ == "__main__":
    sys.exit(main())
