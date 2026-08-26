# 护城河 · 生成 Prompt 设计稿

> ④历史场景复原 · 场景五 · 2026-07-30
> 依据：同目录《复原依据说明.md》。prompt 用英文（更稳），中文语义对照附后。
> 复原年代：清代中后期至民国（约 1850—1930 年代，画舫夜游盛期、城墙城门格局完整）。
> API 端点已切换为 https://apihub.agnes-ai.cn/v1（官方 2026 公告）。

## 一、统一画风段（固定复用）

```
photorealistic vintage historical photograph style, 1850s-1930s China, warm golden-hour tone, subtle film grain, soft analog color palette, high detail, no modern elements
```

中文对照：写实历史照片风、晚清至民国时期、暖调黄金时刻、轻微胶片颗粒、柔和胶片色彩、高细节、无任何现代元素。

## 二、主样图 Prompt（画舫夜游视角 · 首张验收图 · 2K / 16:9）

```
photorealistic vintage historical photograph style, 1850s-1930s China, warm golden-hour to twilight tone, subtle film grain, soft analog color palette, high detail, no modern elements.
Jinan City Moat, the only moat in China fed entirely by natural springs, seen from aboard a traditional wooden pleasure boat at dusk. The boat, painted in deep cinnabar red with carved wooden window frames, bamboo blinds half-rolled, and a cloth canopy, is slowly being poled by a boatwoman at the stern. A round paper lantern glows warm amber at the bow, its reflection shimmering on the water.
The moat water is exceptionally clear and jade-green, transparent enough to see the stone riverbed in places, with gentle ripples from the spring inflow. On the left, the massive Ming Dynasty brick city wall rises 10-12 meters high, weathered grey bricks with patches of moss, crenellated parapets along the top, and a two-story gate tower with upturned eaves and grey tiled roof silhouetted against the twilight sky — the south gate Lizhan Men.
On the right bank, weeping willows trail branches into the water, and the embankment path shows a few pedestrians in traditional dress — a man with a shoulder pole, a scholar in long robes. The far distance reveals more wall and tower outlines fading into soft atmospheric haze.
The sky transitions from warm amber near the horizon to deep blue above, with early stars visible. The overall mood is poetic and serene — "a boat in the painting, a painting in the spring water." Wide 16:9 composition, historically accurate, no electric lights, no concrete, no motorboats, no modern clothing.
```

中文语义对照：
- 晚清至民国写实历史照片风，暖调黄昏至暮光、胶片颗粒；
- 济南护城河，全国唯一由泉水汇流而成的护城河，于黄昏时分从传统木构画舫上望去；画舫漆成深朱红色，雕花木窗，竹帘半卷，布质船篷，由一位船娘在船尾摇橹；船头一盏圆形纸灯笼散发暖琥珀色光，倒映水面波光粼粼；
- 护城河水极清澈、呈碧绿色，部分地段可透视石质河床，泉水汇入处水面有轻柔波纹；左侧明代砖石城墙高耸 10—12 米，风化灰砖、苔藓斑驳，顶设垛口，一座两层城门楼以飞檐翘角、灰瓦屋顶的轮廓剪影于暮光天空——南门历山门；
- 右岸垂柳拂水，堤岸小径上有几位传统服饰行人——肩挑扁担者、长衫书生；远景更多城墙与塔楼轮廓隐入柔和空气感中；
- 天空自地平线暖琥珀色渐变为上方深蓝色，初星可见；整体氛围诗意宁静——"舟在画中，画在泉里"；
- 16:9 宽幅，史实准确，无电灯、无水泥、无机动船、无现代服饰。

## 三、穿帮点自检（出图后对照《复原依据说明.md》第四节逐条核）

重点盯：清澈泉水（非浑浊死水）、明代砖石城墙（有风化痕迹）、木质摇橹画舫（非机动船）、纸灯笼/油灯（无电灯）、北方官式城门楼（非江南风格）、无现代元素。

## 四、调用参数

- 模型：`agnes-image-2.1-flash`
- 尺寸：2K，16:9（2048x1152）
- 注意：返回图片 URL 约 24h 有效，**即出即下载**到本目录
