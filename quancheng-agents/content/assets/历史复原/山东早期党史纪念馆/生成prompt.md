# 山东早期党史纪念馆 · 生成 Prompt 设计稿

> ④历史场景复原 · 红色点位二 · 2026-08-01
> 依据：同目录《复原依据说明.md》。prompt 用英文（更稳），中文语义对照附后。
> 复原年代：1921—1922 年（山东党组织初创期）。
> API 端点已切换为 https://apihub.agnes-ai.cn/v1（官方 2026 公告）。

---

## 一、统一画风段（固定复用）

```
photorealistic vintage historical photograph style, 1920s China, warm golden-hour tone, subtle film grain, soft analog color palette, high detail, no modern elements
```

中文对照：写实历史照片风、1920 年代中国、暖调黄金时刻、轻微胶片颗粒、柔和胶片色彩、高细节、无任何现代元素。

## 二、主样图 Prompt（进步青年室内集会场景 · 首张验收图 · 2K / 16:9）

```
photorealistic vintage historical photograph style, 1920s China, warm golden-hour tone, subtle film grain, soft analog color palette, high detail, no modern elements.
Interior of a modest traditional Chinese room in Jinan, 1921. A square wooden table sits at the center of the room, illuminated by a kerosene lamp with a glass chimney that casts warm golden light across the scene.
Four to five young Chinese men in their early twenties, dressed in long dark gowns or simple student clothing, are gathered around the table. One sits reading an open booklet, another holds a writing brush over an inkstone, a third leans in listening intently, others are engaged in quiet discussion.
On the table: the kerosene lamp, an inkstone with a writing brush resting on it, sheets of coarse paper, a few printed pamphlets and thin books with traditional Chinese binding, a rough ceramic teapot and small tea bowls.
The room has whitewashed walls with exposed grey brick at the base, a wooden lattice window papered with white rice paper through which faint night blue is visible. Simple wooden chairs and benches. A long gown hangs on a wooden peg on the wall.
The lighting is dramatic — warm lamplight against cool night-blue window light, strong chiaroscuro. The mood is serious, focused, filled with quiet determination and idealism. No electric lights, no modern furniture, no modern objects.
```

中文语义对照：
- 1920 年代写实历史照片风，暖调灯光、胶片颗粒；
- 1921 年济南一间简朴的传统民居内景，方木桌置于房间中央；
- 桌中央一盏煤油灯（玻璃罩），散发暖黄色光，照亮整个场景；
- 四五名二十出头的中国青年，穿深色长衫或简朴学生装，围坐桌旁；一人坐读小册子，一人持毛笔悬于砚台上方，第三人倾身倾听，其他人低声讨论；
- 桌上物品：煤油灯、砚台与毛笔、粗纸几张、几本线装/平装进步小册子、粗瓷茶壶与小茶碗；
- 房间墙面白灰抹面、底部露青砖，木格窗糊白色窗纸，窗外透入淡淡夜色；简朴木椅与条凳；墙上木钩挂着一件长衫；
- 灯光富有戏剧性——暖色灯光与窗外冷蓝色夜光对比，明暗强烈；
- 氛围严肃专注，充满沉静的决心与理想主义气息；
- 无电灯、无现代家具、无现代物品。

## 三、备选取景 Prompt

### 3.1 侧光特写（书页与手）

```
photorealistic vintage historical photograph style, 1920s China, warm golden-hour tone, subtle film grain, soft analog color palette, high detail, no modern elements.
Close-up of a young man's hands in a long dark gown, holding open the pages of a thin booklet under the warm light of a kerosene lamp. The pages show vertical traditional Chinese text.
One hand holds the page, the other hand holds a writing brush poised over an inkstone. The lamplight creates strong highlights on the paper and deep shadows in the folds of the gown sleeve.
Extreme shallow depth of field, focus on the hands and page. The mood is intimate, studious, filled with purpose. No modern elements visible.
```

### 3.2 远景剪影（昏暗房间中的青年群像）

```
photorealistic vintage historical photograph style, 1920s China, warm golden-hour tone, subtle film grain, soft analog color palette, high detail, no modern elements.
A dimly lit interior of a traditional Chinese room in Jinan, 1921. Five young men are seated around a table in silhouette and semi-silhouette, their faces partially illuminated by the central kerosene lamp.
The lamplight creates a pool of warm gold in the center of the dark room, with the figures emerging from the shadows. One figure is reading aloud, others listen with heads slightly bowed in contemplation.
The window shows deep night blue. The composition is atmospheric and solemn, conveying secrecy, intellectual fervor, and shared purpose. No modern elements.
```

## 四、穿帮点自检（出图后对照《复原依据说明.md》第四节逐条核）

重点盯：
- 无电灯/日光灯——煤油灯是唯一光源
- 无现代家具（沙发、塑料椅、金属桌椅）
- 无现代书报（彩印、胶装）——线装或早期平装
- 繁体字（若出现文字）
- 无现代服饰——长衫、学生装、粗布衣裳
- 无手机、电脑、圆珠笔——毛笔、墨、砚台
- 青砖或夯土地面——无水泥、无瓷砖
- 木格窗糊窗纸——无玻璃窗

## 五、调用参数

- 模型：`agnes-image-2.1-flash`
- 尺寸：`2048x1152`（2K，16:9）
- 注意：返回图片 URL 约 24h 有效，**即出即下载**到本目录
