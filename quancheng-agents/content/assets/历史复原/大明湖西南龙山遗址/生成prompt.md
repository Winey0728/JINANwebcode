# 大明湖西南龙山遗址 · 生成 Prompt 设计稿

> ④历史场景复原 · 考古遗址一 · 2026-08-01
> 依据：同目录《复原依据说明.md》。prompt 用英文（更稳），中文语义对照附后。
> 复原年代：新石器时代龙山文化期（约公元前 2500—前 2000 年）。
> 重要声明：考古资料有限，本 prompt 涉及先民服饰、发式、聚落布局等均为基于考古报告的适度想象，已标注【存疑】。
> API 端点已切换为 https://apihub.agnes-ai.cn/v1（官方 2026 公告）。

---

## 一、统一画风段（固定复用）

```
photorealistic historical reconstruction style, Neolithic Longshan Culture China, warm natural daylight, earthy ochre and brown tone, subtle film grain, high detail, no modern elements
```

中文对照：写实历史复原风、新石器时代龙山文化中国、温暖自然日光、土黄褐色调、轻微胶片颗粒、高细节、无任何现代元素。

## 二、主样图 Prompt（龙山聚落中景 · 首张验收图 · 2K / 16:9）

```
photorealistic historical reconstruction style, Neolithic Longshan Culture China, warm natural daylight, earthy ochre and brown tone, subtle film grain, high detail, no modern elements.
A Neolithic Longshan Culture settlement near a wetland, circa 2500 BCE. In the middle ground, a cluster of semi-subterranean circular houses with conical thatched roofs made of straw and wooden poles, walls of wattle-and-daub over wooden frames.
In the foreground, a figure in simple coarse linen and animal-skin clothing is shaping a black pottery cup, the surface smooth and dark. Nearby, another figure arranges finished pottery vessels — tall-stemmed black cups, tripod vessels, jars — on a woven mat.
Behind the houses, a low earthen wall or ring-ditch encloses the settlement, with reeds and willows growing along a calm water body in the background. Beyond the water, broadleaf forest stretches to the horizon.
The ground is packed earth. The lighting is bright natural daylight, warm and clear, suggesting late summer. The color palette is dominated by earth tones — ochre, brown, straw yellow, and the distinctive jet-black of the polished Longshan pottery.
The mood is peaceful, industrious, and ancient. No metal objects, no written characters, no modern elements. The clothing is simple and primitive — coarse woven fabric and animal skins, bare feet.
```

中文语义对照：
- 新石器时代龙山文化写实历史复原风，温暖自然日光、土黄褐色调、胶片颗粒；
- 约公元前 2500 年，湿地边缘的龙山文化聚落；
- 中景为一群半地穴式圆形房屋，圆锥形草顶以木为骨、覆草抹泥，墙体为木骨泥墙；
- 前景一人物穿粗麻与兽皮简衣，正在修整一只黑陶杯，表面光滑乌黑发亮；近旁另一人在编织席上整理已成型的陶器——高柄黑陶杯、三足鼎、陶罐等；
- 房屋后方可见低矮土筑城墙或环壕，水边生长芦苇与柳树，远处阔叶林延伸至地平线；
- 地面为夯土；光线为明亮的自然日光，温暖清澈，暗示夏末；
- 色调以土色为主——赭石、棕褐、草黄，以及龙山文化标志性的乌黑磨光陶器色泽；
- 氛围宁静、勤劳、古朴；
- 无金属器物、无文字、无现代元素；服饰简朴原始——粗织麻布与兽皮，赤脚。

## 三、备选取景 Prompt

### 3.1 制陶特写（蛋壳黑陶杯）

```
photorealistic historical reconstruction style, Neolithic Longshan Culture China, warm natural daylight, earthy ochre and brown tone, subtle film grain, high detail, no modern elements.
Close-up of a craftsman's hands shaping a Longshan black pottery goblet. The goblet walls are extraordinarily thin — eggshell thin — with a polished jet-black surface that gleams in the warm sunlight.
The craftsman uses a simple wooden paddle and smoothing stone. His hands are weathered, his clothing is coarse woven fabric. The background shows a blurred view of a pottery workshop area with drying vessels and a simple kiln structure.
Extreme shallow depth of field, focus on the hands and the black goblet. The lighting highlights the glossy black surface of the pottery, creating strong reflections. No metal tools, no modern elements.
```

### 3.2 农田远景（聚落全景）

```
photorealistic historical reconstruction style, Neolithic Longshan Culture China, warm natural daylight, earthy ochre and brown tone, subtle film grain, high detail, no modern elements.
Wide panoramic view of a Longshan Culture settlement in a river valley. The settlement is enclosed by a low earthen wall with a ring-ditch outside. Inside, twenty to thirty circular thatched-roof houses are arranged in clusters.
Fields of millet and other crops extend around the settlement, with a few figures working with stone hoes. A herd of pigs and goats is tended near the wall. In the background, a broad river flows through willows and reeds, with broadleaf forest on the far bank.
The sky is clear with soft white clouds. The lighting is bright midday sun, warm and natural. The composition conveys a thriving, organized Neolithic community. No modern elements, no metal objects visible.
```

## 四、穿帮点自检（出图后对照《复原依据说明.md》第四节逐条核）

重点盯：
- 无金属器物（青铜器、铁器）——石器、陶器、木器为主
- 无文字——龙山文化尚无成熟文字系统
- 无现代建筑——半地穴式、木骨泥墙、草顶
- 无现代服饰——粗麻、兽皮、植物纤维，赤脚
- 无现代农业工具——石铲、石锄、木耒
- 黑陶素面磨光为主——无彩绘、无复杂纹饰
- 房屋非砖瓦结构——土筑、草顶
- 城墙为夯土——无砖砌
- 先民服饰发式【存疑】——不追求过度具体化，以"简朴原始"为口径

## 五、调用参数

- 模型：`agnes-image-2.1-flash`
- 尺寸：`2048x1152`（2K，16:9）
- 注意：返回图片 URL 约 24h 有效，**即出即下载**到本目录
