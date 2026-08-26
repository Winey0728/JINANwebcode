# 五三惨案纪念园 · 生成 Prompt 设计稿

> ④历史场景复原 · 红色点位一 · 2026-08-01
> 依据：同目录《复原依据说明.md》。prompt 用英文（更稳），中文语义对照附后。
> 复原年代：1928 年（五三惨案发生前后，济南古城风貌）。
> API 端点已切换为 https://apihub.agnes-ai.cn/v1（官方 2026 公告）。

---

## 一、统一画风段（固定复用）

```
photorealistic vintage historical photograph style, 1928 China, warm golden-hour tone, subtle film grain, soft analog color palette, high detail, no modern elements
```

中文对照：写实历史照片风、1928 年中国、暖调黄金时刻、轻微胶片颗粒、柔和胶片色彩、高细节、无任何现代元素。

## 二、主样图 Prompt（济南古城南门内街景 · 首张验收图 · 2K / 16:9）

```
photorealistic vintage historical photograph style, 1928 China, warm golden-hour tone, subtle film grain, soft analog color palette, high detail, no modern elements.
A street scene inside the ancient city of Jinan in 1928, looking north from near the South Gate (Lishan Gate). The wide stone-paved street stretches into the distance, flanked by traditional Chinese shops and residences on both sides.
The city wall and gate tower rise in the background, made of grey bricks and stones, massive and solemn. The gate tower has a traditional Chinese roof with upturned eaves, tiled in grey.
On both sides of the street, one-story and two-story brick-and-wood buildings with grey-tiled pitched roofs and wooden lattice windows. Shop fronts have wooden signboards with vertical traditional Chinese characters, cloth awnings, and hanging banners.
Pedestrians in 1920s dress: men in long gowns and short jackets, women in traditional Chinese jackets and skirts, a rickshaw parked by the roadside with its puller resting, a wheelbarrow loaded with goods.
A few willow trees with fresh green leaves line the street; the atmosphere is calm and solemn, late afternoon sunlight casting long soft shadows, gentle atmospheric haze suggesting an impending storm.
The emotional tone is dignified and melancholic — a quiet moment in the ancient city before the catastrophe, historically accurate, no cars, no asphalt, no modern signs, no electric poles with modern wires.
```

中文语义对照：
- 1928 年写实历史照片风，暖调黄昏光、胶片颗粒；
- 济南古城南门（历山门）内街景，向北远眺；
- 宽阔的青石街道向远方延伸，两侧为传统中式商铺与民居；
- 背景矗立砖石城墙与城楼，灰瓦屋顶、飞檐翘角，厚重庄严；
- 街道两侧为一二层砖木结构建筑，灰瓦坡屋顶、木质格窗；商铺前有木质竖排繁体字招牌、布帘、幌子；
- 行人穿着 1920 年代服饰：长衫男子、短褂劳动者、大襟袄妇女；路边停着一辆黄包车，车夫在休息；一辆独轮车满载货物；
- 街道两侧柳树新绿，氛围宁静而庄重；午后斜阳投下柔和长影，轻微空气感中暗含风暴将至的沉郁；
- 情感基调庄严肃穆、隐含悲怆——浩劫前古城的宁静日常；
- 无汽车、无沥青路、无现代招牌、无现代电线杆。

## 三、备选取景 Prompt

### 3.1 护城河柳树岸视角

```
photorealistic vintage historical photograph style, 1928 China, warm golden-hour tone, subtle film grain, soft analog color palette, high detail, no modern elements.
The ancient city wall of Jinan reflected in the moat water, willow trees with drooping green branches lining the bank, their reflections rippling on the calm water surface.
The massive grey-brick wall stretches horizontally across the frame, crenellations visible on top, a gate tower rising in the distance. A few small boats moored by the bank.
Late afternoon sunlight filtering through willow leaves, casting dappled golden light on the wall and water. The atmosphere is serene yet heavy with historical weight.
No modern elements, historically accurate, 16:9 wide composition.
```

### 3.2 商埠区街角远景

```
photorealistic vintage historical photograph style, 1928 China, warm golden-hour tone, subtle film grain, soft analog color palette, high detail, no modern elements.
A street corner in Jinan's commercial district (Shangbu) in 1928, where traditional Chinese architecture meets early Western-style buildings.
On the left, a row of Chinese shops with wooden signboards and grey-tiled roofs; on the right, a two-story Western-style brick building with arched windows and a decorated facade.
Pedestrians in mixed dress — some in long gowns, some in Western suits; a rickshaw passing by; street vendors with small stalls.
The street is paved with stones, lined with early electric poles (wooden poles with simple crossbars, period-appropriate). Late afternoon warm light, atmospheric perspective.
16:9 wide composition, historically accurate, no modern elements.
```

## 四、穿帮点自检（出图后对照《复原依据说明.md》第四节逐条核）

重点盯：
- 无现代建筑（钢筋混凝土、玻璃幕墙）
- 无现代交通工具（汽车、摩托车、自行车【存疑】——1928 年济南可能有少量自行车，但街景中不宜出现）
- 无现代服饰（T 恤、牛仔裤、现代制服）
- 繁体竖排招牌（若出现文字）
- 青石/石板路面（非沥青、非水泥）
- 城墙完整（非拆除后状态）
- 北伐军灰蓝色军装（若出现军人）
- 无战斗场景（本场景为"浩劫前的日常"）

## 五、调用参数

- 模型：`agnes-image-2.1-flash`
- 尺寸：`2048x1152`（2K，16:9）
- 注意：返回图片 URL 约 24h 有效，**即出即下载**到本目录
