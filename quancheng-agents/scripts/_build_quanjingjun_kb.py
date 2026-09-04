# -*- coding: utf-8 -*-
"""生成泉境君图库知识库文档：今夕对比索引 + 龙山生成图 + 匹配说明。"""
from pathlib import Path
from urllib.parse import quote

DOCS = Path(__file__).parent.parent / "docs"
SRC = DOCS / "图库索引-今夕对比.md"
DST = DOCS / "泉境君图库知识库.md"

BASE = "https://raw.githubusercontent.com/Winey0728/JINANwebcode/main/quancheng-agents/content/assets/历史复原"

def raw(rel: str) -> str:
    return BASE + "/" + quote(rel, safe="/")

# 龙山遗址 3 张定稿生成图（用户已选定）
AI_GEN = [
    ("家畜饲养-陶盆喂食", "龙山聚落先民用黑陶盆喂养家畜（猪圈）的场景", "大明湖西南龙山遗址/样图v9-生活场景v2/家畜饲养-陶盆喂食-候选1.png"),
    ("农田劳作-陶器送水", "龙山先民在粟米农田收割，少年用黑陶罐送水", "大明湖西南龙山遗址/样图v9-生活场景v2/农田劳作-陶器送水-候选1.png"),
    ("狩猎归来-陶器分食", "龙山猎人狩猎归来，妇女用黑陶盆分食", "大明湖西南龙山遗址/样图v9-生活场景v2/狩猎归来-陶器分食-候选1.png"),
    ("1921民居夜读-候选1", "王尽美邓恩铭旧址复原造景：煤油灯下青年伏案书写、旁立一人阅读（仅背影，无正脸）", "王尽美邓恩铭旧址/样图v1-室内场景/室内-伏案书写背影-候选1.png"),
    ("1921民居夜读-候选2", "王尽美邓恩铭旧址复原造景：煤油灯下青年伏案书写、旁立一人阅读（仅背影，无正脸）", "王尽美邓恩铭旧址/样图v1-室内场景/室内-伏案书写背影-候选2.png"),
    ("1921民居夜读-候选3", "王尽美邓恩铭旧址复原造景：煤油灯下青年伏案书写、旁立一人阅读（仅背影，无正脸）", "王尽美邓恩铭旧址/样图v1-室内场景/室内-伏案书写背影-候选3.png"),
]

def main():
    idx = SRC.read_text(encoding="utf-8")
    # 去掉原文档底部"共 N 对"统计行
    lines = [l for l in idx.splitlines() if not l.startswith("共 **")]
    out = []
    out.append("# 泉境君图库知识库")
    out.append("")
    out.append("> 用途：泉境君先在此图库中检索，命中则直接返回图片URL；未命中再调用生图插件。")
    out.append("> 检索关键词：点位名（趵突泉/黑虎泉/珍珠泉/五龙潭/千佛山/护城河/明府城/百花洲/芙蓉街/")
    out.append("> 经二路/纬二路/济南老火车站/李清照纪念堂/铁公祠/漱玉泉/小清河/龙山遗址/济南街市景象/")
    out.append("> 1940年代济南街市/王尽美邓恩铭旧址/1921民居夜读等）、历史时期、场景内容。")
    out.append("")
    out.append("## 一、今夕对比图库（原图黑白 -> 上色图，用于对比滑块）")
    out.append("")
    out.append("> 说明：每行包含原图URL和上色图URL两个完整链接（https://开头），泉境君必须原样返回完整URL，不得省略。")
    out.append("")
    # 重新解析索引的成对条目，直接输出纯 URL（不套 markdown 链接）
    import re
    for block in SRC.read_text(encoding="utf-8").split("## ")[1:]:
        lines = block.splitlines()
        title = lines[0].strip()
        rows = [l for l in lines[2:] if l.startswith("| ") and "https" in l]
        if not rows:
            continue
        out.append(f"### {title}")
        out.append("")
        for row in rows:
            cells = [c.strip() for c in row.split("|")[1:-1]]
            if len(cells) >= 3:
                scene = cells[0]
                urls = re.findall(r"https://[^)\s]+", row)
                if len(urls) >= 2:
                    out.append(f"- 场景「{scene}」：原图URL = {urls[0]}；上色图URL = {urls[1]}")
        out.append("")
    out.append("## 二、AI 复原生成图（无对比对）")
    out.append("")
    out.append("> 说明：以下为完整图片URL（https://开头），泉境君必须原样返回完整URL。")
    out.append("")
    for scene, desc, rel in AI_GEN:
        out.append(f"- 场景「{scene}」：{desc}。图片URL = {raw(rel)}")
    out.append("")
    out.append("## 三、使用规则（泉境君必须遵守）")
    out.append("")
    out.append("1. 用户询问某点位的历史场景时，先在本知识库检索匹配的图片条目。")
    out.append("2. 若命中：直接返回对应 URL；有对比对的，同时返回【原图URL】和【上色图URL】，格式：")
    out.append("   `[今夕对比] 原图: {原图URL} | 上色图: {上色图URL}`")
    out.append("3. 若未命中（图库无该点位/时期/场景）：调用\"生成历史场景图\"工具生成新图，返回 `[历史复原图] {image_url}`。")
    out.append("4. 涉及黑虎泉须遵守史实：清末单虎头、1931年后三虎。")
    DST.write_text("\n".join(out), encoding="utf-8")
    print("written:", DST)

if __name__ == "__main__":
    main()
