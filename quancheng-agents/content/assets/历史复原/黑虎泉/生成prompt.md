# 黑虎泉 · 生成 Prompt 设计稿

> ④历史场景复原 · 场景二 · 2026-07-30
> 依据：同目录《复原依据说明.md》。prompt 用英文（更稳），中文语义对照附后。
> 复原年代：清代中后期至民国（约 1880—1930 年代，市民打水盛期）。
> API 端点已切换为 https://apihub.agnes-ai.cn/v1（官方 2026 公告）。

## 一、统一画风段（固定复用）

```
photorealistic vintage historical photograph style, 1880s-1930s China, warm golden-hour tone, subtle film grain, soft analog color palette, high detail, no modern elements
```

中文对照：写实历史照片风、晚清至民国时期、暖调黄金时刻、轻微胶片颗粒、柔和胶片色彩、高细节、无任何现代元素。

## 二、主样图 Prompt（泉池正面偏侧视角 · 首张验收图 · 2K / 16:9）

```
photorealistic vintage historical photograph style, 1880s-1930s China, warm golden-hour tone, subtle film grain, soft analog color palette, high detail, no modern elements.
Heihu Spring (Black Tiger Spring), one of Jinan's seventy-two famous springs, located on the east bank of the old city moat. The spring pool is built into a cliffside with rough-hewn blue-grey stone walls, weathered and moss-covered.
Three ancient stone-carved tiger heads are embedded in the pool wall, mouths wide open, each spewing a powerful stream of clear spring water into the pool below with visible force and splashes. The water is deep jade-green with rising bubbles.
In the foreground, two elderly Jinan residents in traditional late-Qing to Republican-era clothing — long cotton robes, cloth head coverings, one crouching to fill a wooden bucket with an iron-hooped rim from the spring, another standing with a bamboo shoulder pole carrying terracotta water jars. Barefoot children nearby.
Behind the spring, the old city moat stretches horizontally, its water surface rippling; on the opposite bank, weeping willows trail their branches low over the water. The stone embankment is rough and natural, no modern railings or concrete.
Late afternoon golden sunlight casts long warm shadows through the willow branches, gentle atmospheric haze, serene daily life scene. Wide 16:9 composition, historically accurate, no plastic containers, no metal pipes, no modern clothing.
```

中文语义对照：
- 晚清至民国写实历史照片风，暖调黄昏光、胶片颗粒；
- 黑虎泉，位于古城护城河东岸崖壁之下，泉池由粗砌青灰色石块筑成，壁面风化、苔藓斑驳；
- 池壁嵌有三只古朴石雕虎头，虎口大张，三股清泉喷涌而出，水势有力、水花飞溅，池水呈深碧色，水面有上升气泡；
- 前景两位济南老者身着晚清至民国传统服饰——棉布长衫、布巾包头，一人蹲身用铁箍木桶接水，另一人肩挑扁担、两头挂陶制水罐，旁有赤足孩童；
- 泉池后方护城河横展，水面泛波，对岸垂柳低拂水面，石岸天然粗朴，无现代栏杆或水泥设施；
- 午后金色阳光透过柳枝洒下暖影，轻微空气感，宁静日常场景；
- 16:9 宽幅，无塑料容器、无金属水管、无现代服饰。

## 三、穿帮点自检（出图后对照《复原依据说明.md》第四节逐条核）

重点盯：三虎头（非五虎）、青石粗砌泉池（非规整水池）、木桶陶罐扁担（无塑料/金属现代容器）、传统服饰（无现代服装）、天然石岸（无水泥栏杆）。

## 四、调用参数

- 模型：`agnes-image-2.1-flash`
- 尺寸：2K，16:9（2048x1152）
- 注意：返回图片 URL 约 24h 有效，**即出即下载**到本目录
