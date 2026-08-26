# 李清照纪念堂 · 生成 Prompt 设计稿

> ④历史场景复原 · 李清照纪念堂 · 2026-07-29
> 依据：同目录《复原依据说明.md》。prompt 用英文（更稳），中文语义对照附后。
> 复原年代：北宋哲宗至徽宗初年（约 1090—1100 年，少女时期）。
> API 端点已切换为 https://apihub.agnes-ai.cn/v1（官方 2026 公告）。

## 一、统一画风段（三场景固定复用）

```
photorealistic vintage historical photograph style, 1090s Northern Song Dynasty China, warm golden-hour tone, subtle film grain, soft analog color palette, high detail, no modern elements
```

中文对照：写实历史照片风、北宋哲宗年间、暖调黄金时刻、轻微胶片颗粒、柔和胶片色彩、高细节、无任何现代元素。

## 二、主样图 Prompt（庭院书斋内景 · 首张验收图 · 2K / 16:9）

```
photorealistic vintage historical photograph style, 1090s Northern Song Dynasty China, warm golden-hour tone, subtle film grain, soft analog color palette, high detail, no modern elements.
Interior of a Northern Song scholar's courtyard house in Jinan, a quiet study room with wooden beam ceiling and lattice windows (paper-paneled, NOT glass) open to a garden view.
A young girl of about 13 years old, Li Qingzhao as a teenager, sitting at a low wooden writing desk (book table) in the center of the room, holding a writing brush over an unrolled rice paper scroll, inkstone and ceramic water dropper beside her. She wears a pale green narrow-sleeved Beizi jacket over a light-colored long skirt, her hair in simple double loops (shuanghuan) with minimal ornament, a delicate and intelligent expression.
Behind her, a wooden bookshelf stacked with rolled bamboo and silk scrolls; a small guqin zither resting on a stand against the wall; a white porcelain incense burner with a thin wisp of smoke. Through the lattice window, the garden shows weeping willows, slender bamboo, and a glimpse of bubbling spring water in the distance.
Soft afternoon light filtering through willow branches into the room, casting gentle shadows on the wooden floor, tranquil and scholarly atmosphere.
Wide 16:9 composition, historically accurate Northern Song interior, no modern objects, no glass windows, no printed books, no blue-and-white porcelain.
```

中文语义对照：
- 北宋哲宗年间写实历史照片风，暖调午后柔光、胶片颗粒；
- 济南北宋士大夫宅院书斋内景，木梁顶、格子窗（糊纸，**非玻璃**）敞向庭院；
- 少女李清照（约 13 岁）坐于低矮木书案前，执笔于展开的宣纸卷上，一旁置砚台与瓷水盂；身着**浅绿窄袖褙子+浅色长裙**，**双鬟发式**，装饰极简，神情清秀聪慧；
- 身后木书架上堆叠竹简与卷轴；靠墙琴架上置一张古琴；白瓷香炉一缕淡烟；透过格子窗，庭院中垂柳修竹，远处隐约可见泉涌水光；
- 午后柔光透过柳枝洒入室内，木地板上树影婆娑，静谧书香氛围；
- 16:9 宽幅，北宋内景准确还原，无现代物品、**无玻璃窗**、无印刷书籍、无青花瓷。

## 三、备选 Prompt（庭院外景 · 少女凭栏）

```
photorealistic vintage historical photograph style, 1090s Northern Song Dynasty China, warm golden-hour tone, subtle film grain, soft analog color palette, high detail, no modern elements.
A Northern Song courtyard garden in Jinan, early autumn afternoon. A 12-year-old girl in pale lilac Beizi and long skirt stands by a wooden veranda railing, holding an open poetry scroll, gazing at a bubbling spring in the distance. Weeping willows sway in the breeze, bamboo clusters beside a small stone-lined pond. Traditional beam-and-post wooden house with grey tile roof in the background. A young maid in simple cotton clothes stands quietly nearby.
Gentle sunlight, willow shadows on the gravel path, serene and poetic atmosphere.
Wide 16:9 composition, no modern elements, historically accurate clothing and architecture.
```

中文语义对照：
- 北宋济南士大夫庭院园林，初秋午后；
- 12 岁少女着淡紫褙子长裙，立于木构游廊栏杆旁，手持展开的诗卷，眺望远处泉涌；垂柳随风轻摆，竹丛旁有石砌小池；背景为传统木构灰瓦屋舍；简装婢女静立一侧；
- 柔和阳光，柳影洒落碎石小径，诗意静谧氛围；
- 16:9 宽幅，无现代元素，服饰与建筑历史准确。

## 四、穿帮点自检（出图后对照《复原依据说明.md》第四节逐条核）

重点盯：非纪念堂建筑（1959 现代建筑）、北宋褙子+襦裙非明清服饰、双鬟发式非高髻凤冠、无玻璃窗、无青花瓷、无印刷书籍、庭院素雅非宫殿式。

## 五、调用参数

- 模型：`agnes-image-2.1-flash`
- 尺寸：`2048x1152`（16:9）
- 注意：返回图片 URL 约 24h 有效，**即出即下载**到本目录
