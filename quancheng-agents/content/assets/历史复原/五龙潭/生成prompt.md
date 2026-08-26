# 五龙潭 · 生成 Prompt 设计稿

> ④历史场景复原 · 场景四 · 2026-07-30
> 依据：同目录《复原依据说明.md》。prompt 用英文（更稳），中文语义对照附后。
> 复原年代：清代中后期（约 1780—1900 年代，泉群格局稳定、市民生活气息渐浓）。
> API 端点已切换为 https://apihub.agnes-ai.cn/v1（官方 2026 公告）。

## 一、统一画风段（固定复用）

```
photorealistic vintage historical photograph style, 1780s-1900s Qing Dynasty China, warm golden-hour tone, subtle film grain, soft analog color palette, high detail, no modern elements
```

中文对照：写实历史照片风、清代中后期、暖调黄金时刻、轻微胶片颗粒、柔和胶片色彩、高细节、无任何现代元素。

## 二、主样图 Prompt（潭岸半高视角 · 首张验收图 · 2K / 16:9）

```
photorealistic vintage historical photograph style, 1780s-1900s Qing Dynasty China, warm golden-hour tone, subtle film grain, soft analog color palette, high detail, no modern elements.
Wutan Long (Five Dragon Pool), one of Jinan's four great spring groups, a broad natural spring pool with deep jade-green water, much larger than ordinary spring ponds. Multiple bubbling points across the water surface create ripples and rising air bubbles where subsidiary springs feed into the main pool — the defining feature of many springs converging into one deep body.
The pool shore is natural and irregular, with rough blue-grey stone embankments in some sections, earthen banks in others. Old willow trees trail their branches low over the water from the shore; locust and pine trees provide dense shade. Moss-covered stone steps lead down to the water's edge.
In the middle distance, the grey-tiled roofs of a modest traditional Chinese shrine or memorial hall are visible among trees on the far bank, suggesting the Qin Qiong legend without depicting precise architecture. The building has hard mountain-style gable roofs with dark grey tiles.
Several Qing Dynasty commoners in traditional dress — long cotton robes, queue hairstyles, one carrying a tea kettle on a shoulder pole, another sitting on a stone bench watching the bubbling water, children playing near the shore. Daily life atmosphere, peaceful and leisurely.
Soft late afternoon light filters through the willow branches, casting dappled shadows on the water. The scene conveys a sense of tranquil depth and local folk charm. Wide 16:9 composition, historically accurate, no cherry blossoms, no modern railings, no concrete, no modern clothing.
```

中文语义对照：
- 清代中后期写实历史照片风，暖调午后光、胶片颗粒；
- 五龙潭，济南四大泉群之一，宽阔的自然泉潭，池水呈深碧绿色，远较一般泉池为大；水面有多处涌泉点形成波纹与上升气泡，众泉汇流成深潭——最核心的水文特征；
- 潭岸自然不规则，部分地段为粗砌青灰色石岸，部分为土岸；老柳垂枝低拂水面；槐、松浓荫蔽日；苔藓斑驳的石阶延伸至水边；
- 中景处对岸树丛中隐约可见一座简朴的传统中式祠堂或纪念堂的灰瓦屋顶，暗示秦琼传说而不精确描绘建筑细节；建筑为硬山式灰瓦顶；
- 几位清代平民身着传统服饰——棉布长衫、留辫发型，一人肩挑茶壶担，另一人坐石凳观泉，孩童在岸边嬉戏；日常氛围，宁静闲适；
- 柔和午后阳光透过柳枝洒下斑驳光影；画面传递幽深宁静与民俗风情；
- 16:9 宽幅，史实准确，无樱花、无现代栏杆、无水泥设施、无现代服饰。

## 三、穿帮点自检（出图后对照《复原依据说明.md》第四节逐条核）

重点盯：开阔潭面（非小池塘）、多眼涌泉波纹气泡、深碧水色（非清澈见底）、自然土岸/石岸（无水泥栏杆）、无樱花（清代无樱花林）、清代服饰留辫、无现代元素。

## 四、调用参数

- 模型：`agnes-image-2.1-flash`
- 尺寸：2K，16:9（2048x1152）
- 注意：返回图片 URL 约 24h 有效，**即出即下载**到本目录
