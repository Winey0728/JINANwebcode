# 小清河考古带 · 生成 Prompt 设计稿

> ④历史场景复原 · 考古遗址二 · 2026-08-01
> 依据：同目录《复原依据说明.md》。prompt 用英文（更稳），中文语义对照附后。
> 复原年代：宋元时期（小清河航运兴盛期，约 10—14 世纪）。
> 重要声明：考古资料有限，本 prompt 涉及码头建筑形制、人物服饰细节等均为基于考古与文献的适度想象，已标注【存疑】。
> API 端点已切换为 https://apihub.agnes-ai.cn/v1（官方 2026 公告）。

---

## 一、统一画风段（固定复用）

```
photorealistic vintage historical photograph style, Song-Yuan Dynasty China, warm golden-hour tone, subtle film grain, soft analog color palette, high detail, no modern elements
```

中文对照：写实历史照片风、宋元时期中国、暖调黄金时刻、轻微胶片颗粒、柔和胶片色彩、高细节、无任何现代元素。

## 二、主样图 Prompt（小清河码头商贸场景 · 首张验收图 · 2K / 16:9）

```
photorealistic vintage historical photograph style, Song-Yuan Dynasty China, warm golden-hour tone, subtle film grain, soft analog color palette, high detail, no modern elements.
A bustling river dock on the Xiaoqing River in Jinan during the Song-Yuan period. The wooden and stone pier extends into the calm river, where three flat-bottomed wooden cargo boats with single masts are moored, their sails furled.
Dockworkers in short jackets and headscarves carry bamboo baskets and hemp sacks on shoulder poles, loading and unloading goods. Merchants in long robes stand nearby negotiating, one holding an abacus. A wheelbarrow loaded with ceramic jars is being pushed along the stone-paved dock.
Along the riverbank, a row of wooden shops and teahouses with grey-tiled pitched roofs and wooden signboards with vertical traditional Chinese characters. Cloth awnings extend over the walkway. A teahouse has low wooden tables and stools on a raised platform facing the river.
Willow trees with drooping branches line the bank, their green leaves reflected in the water. Reeds grow thick at the water's edge. In the distance, farmland and scattered village houses stretch to the horizon under a warm golden afternoon sky.
The atmosphere is lively and prosperous — a thriving commercial waterway. The lighting is warm late-afternoon sun, casting long golden reflections on the river. No modern elements, no modern boats, no modern vehicles.
```

中文语义对照：
- 宋元时期写实历史照片风，暖调黄昏光、胶片颗粒；
- 宋元时期济南小清河繁忙的河运码头；木石结构码头伸入平静的河面，三艘单桅平底木货船停泊系缆，帆已收起；
- 码头工人穿短褂、裹头巾，肩挑竹筐与麻袋，装卸货物；商人穿长袍站立议价，一人手持算盘；一辆独轮车满载陶罐正沿石板码头推行；
- 河岸一排木结构商铺与茶馆，灰瓦坡屋顶，木质竖排繁体字招牌；布帘挑出遮蔽走道；一家茶馆临河设有矮木桌与凳；
- 河岸垂柳依依，绿叶映水；水边芦苇茂密；远处农田与散落的村庄房屋延伸至地平线，沐浴在温暖的午后金光中；
- 氛围热闹繁荣——兴旺的商贸水道；光线为温暖午后斜阳，在河面投下金色长影；
- 无现代元素、无现代船只、无现代交通工具。

## 三、备选取景 Prompt

### 3.1 河上船只视角（船队航行）

```
photorealistic vintage historical photograph style, Song-Yuan Dynasty China, warm golden-hour tone, subtle film grain, soft analog color palette, high detail, no modern elements.
View from the deck of a wooden cargo boat sailing on the Xiaoqing River. Ahead, two more flat-bottomed boats with raised sails are navigating the calm water. The river is about forty meters wide, with willow-lined banks on both sides.
On the left bank, a small dock with a few figures loading goods. On the right bank, teahouses with patrons sitting at outdoor tables watching the boats pass. The water reflects the golden afternoon light and the green willows.
A boatman in a short jacket and straw hat steers with a long pole at the stern. Coiled ropes, bamboo baskets, and hemp sacks are visible on the deck. The mood is peaceful yet industrious, capturing the rhythm of river transport. No modern elements. 16:9 wide composition.
```

### 3.2 黄昏归航（渔船与货船傍晚回港）

```
photorealistic vintage historical photograph style, Song-Yuan Dynasty China, warm golden-hour tone, subtle film grain, soft analog color palette, high detail, no modern elements.
The Xiaoqing River at sunset during the Song-Yuan period. Several wooden boats — cargo boats and smaller fishing boats — are returning to the dock. The water surface is covered with rippling golden light from the low sun.
On the shore, women and children wait near the dock, some holding baskets. A few cooking fires send thin smoke rising from behind the riverside houses. The willow trees are silhouetted against the orange and amber sky.
The dock is quiet now, with only a few workers securing the boats with ropes. The overall mood is serene and nostalgic, the end of a day's labor. Warm sunset tones dominate — amber, gold, deep orange. No modern elements.
```

## 四、穿帮点自检（出图后对照《复原依据说明.md》第四节逐条核）

重点盯：
- 无现代建筑——木结构、砖木结构
- 无现代船只——木船、帆船、平底货船
- 无现代交通工具——独轮车、平板车、马匹、轿子
- 无现代服饰——宋元时期袍服、短褐、襦裙、笠帽
- 繁体字竖排招牌（若出现文字）
- 无现代道路设施——土路或石板路
- 无铁壳船/蒸汽船——木船、帆船
- 无现代货物包装——麻袋、竹筐、木桶、陶罐
- 河道为土岸/石砌驳岸——非水泥护坡

## 五、调用参数

- 模型：`agnes-image-2.1-flash`
- 尺寸：`2048x1152`（2K，16:9）
- 注意：返回图片 URL 约 24h 有效，**即出即下载**到本目录
