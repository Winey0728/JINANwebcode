# -*- coding: utf-8 -*-
"""扫描历史复原图库，生成「今夕对比」索引（原图↔上色图成对），输出 markdown。
用法: python _build_gallery_index.py > ../../docs/图库索引-今夕对比.md
"""
from pathlib import Path
from urllib.parse import quote

ROOT = Path(__file__).parent.parent / "content" / "assets" / "历史复原"
BASE = "https://raw.githubusercontent.com/Winey0728/JINANwebcode/main/quancheng-agents/content/assets/历史复原"

def enc(p: Path) -> str:
    """相对 ROOT 的路径 → raw URL（正斜杠 + 中文 URL 编码）。"""
    rel = p.relative_to(ROOT).as_posix()
    return BASE + "/" + quote(rel, safe="/")

def parse_color(stem: str):
    """解析上色图文件名 -> (匹配核心, 场景标签)。
    支持 `五龙潭-上色无人`、`千佛山山门-上色`、`XXX-上色-候选N` 三种风格。"""
    pos = stem.find("上色")
    if pos < 0:
        return None, None
    head = stem[:pos].rstrip("-")     # 核心：`1940年代济南街市` / `旧址旧照`
    tail = stem[pos + 2:]             # `无人` / `-候选1` / ``
    tail = tail.replace("无人", "").strip("-")
    scene = head + ("-" + tail if tail else "")
    return head, scene

def find_pair(files):
    """files: {name: Path}。返回 (场景名, 原图Path, 上色图Path) 列表。
    以上色图为中心：解析核心名，同一核心的多张候选复用同一张原图。"""
    color_names = sorted(n for n in files if "上色" in n)
    groups = {}   # core -> [(color_name, scene)]
    for cn in color_names:
        core, scene = parse_color(Path(cn).stem)
        if core:
            groups.setdefault(core, []).append((cn, scene))
    pairs = []
    used_orig = set()
    for core, items in sorted(groups.items()):
        orig = None
        for n in files:
            if n in used_orig or "上色" in n:
                continue
            if core in n:
                orig = files[n]
                break
        if orig is None:
            continue
        used_orig.add(orig.name)
        for cn, scene in items:
            pairs.append((scene, orig, files[cn]))
    return pairs

def main():
    out = ["# 泉城水脉历史复原图库索引（今夕对比）", "",
           "> 生成时间：自动扫描。每行 = 原图（黑白老照片）-> 上色图，用于今夕对比滑块。",
           "> 图片 URL 均为 raw 直链（仓库已公开）。", ""]
    total = 0
    for spot in sorted(ROOT.iterdir()):
        if not spot.is_dir():
            continue
        files = {}
        for d in ([spot] + list(spot.glob("*"))):
            if d.is_dir():
                for f in list(d.glob("*.jp*g")) + list(d.glob("*.png")) + list(d.glob("*.webp")):
                    files[f.name] = f
            elif d.suffix.lower() in (".jpg", ".jpeg", ".png", ".webp"):
                files[d.name] = d
        pairs = find_pair(files)
        if not pairs:
            continue
        total += len(pairs)
        out.append(f"## {spot.name}")
        out.append("| 场景 | 原图（黑白） | 上色图 |")
        out.append("|---|---|---|")
        for scene, orig, color in pairs:
            out.append(f"| {scene} | [{orig.name}]({enc(orig)}) | [{color.name}]({enc(color)}) |")
        out.append("")
    out.append(f"---\n共 **{total}** 对今夕对比素材。")
    dest = Path(__file__).parent.parent / "docs" / "图库索引-今夕对比.md"
    dest.write_text("\n".join(out), encoding="utf-8")
    print("written:", dest)

if __name__ == "__main__":
    main()
