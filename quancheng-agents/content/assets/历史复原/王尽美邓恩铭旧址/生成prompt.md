# 王尽美邓恩铭旧址 · 生成 Prompt 设计稿

> ④历史场景复原 · 红色点位三 · 2026-08-01
> 依据：同目录《复原依据说明.md》。prompt 用英文（更稳），中文语义对照附后。
> 复原年代：1921—1922 年（两人在济南开展革命活动期间）。
> API 端点已切换为 https://apihub.agnes-ai.cn/v1（官方 2026 公告）。

---

## 一、统一画风段（固定复用）

```
photorealistic vintage historical photograph style, 1920s China, warm golden-hour tone, subtle film grain, soft analog color palette, high detail, no modern elements
```

中文对照：写实历史照片风、1920 年代中国、暖调黄金时刻、轻微胶片颗粒、柔和胶片色彩、高细节、无任何现代元素。

## 二、主样图 Prompt（民居内景 · 伏案书写与阅读场景 · 2K / 16:9）

```
photorealistic vintage historical photograph style, 1920s China, warm golden-hour tone, subtle film grain, soft analog color palette, high detail, no modern elements.
Interior of a modest traditional Chinese residence in Jinan, 1921. A simple wooden desk is placed near a wooden lattice window papered with white rice paper, through which faint blue night light filters.
At the desk, a young Chinese man in a dark long gown is bent over writing with a brush on coarse paper, the inkstone and brush rest beside him. Another young man stands nearby, holding an open thin booklet and reading intently, his body slightly leaning toward the desk.
On the desk: a kerosene lamp with glass chimney casting warm golden light, an inkstone, a brush rest with brushes, several sheets of paper, a few bound pamphlets, and a rough ceramic teapot with small tea bowls.
The room has whitewashed walls with grey brick visible at the base, a simple wooden bed with coarse bedding in the corner, and a long gown hanging on a wooden peg. The floor is grey brick.
The lighting is warm and intimate — the kerosene lamp is the main light source, creating strong highlights on the paper and faces, with deep shadows in the corners. The mood is serious, focused, and filled with quiet revolutionary fervor. No electric lights, no modern objects, no modern furniture.
```

中文语义对照：
- 1920 年代写实历史照片风，暖调灯光、胶片颗粒；
- 1921 年济南一间简朴的传统民居内景，简朴木书桌靠窗摆放；
- 木格窗糊白色窗纸，窗外透入淡淡夜色；
- 书桌前，一名穿深色长衫的青年正伏案用毛笔在粗纸上书写，砚台与笔架置于手边；另一名青年站立一旁，手持一本打开的小册子专注阅读，身体微倾向书桌；
- 桌上物品：玻璃罩煤油灯（暖黄色主光源）、砚台、笔架与毛笔、几张粗纸、几本装订小册子、粗瓷茶壶与小茶碗；
- 房间墙面白灰抹面、底部露青砖，角落一张简朴木床铺着粗布被褥，墙上木钩挂着一件长衫；地面为青砖；
- 灯光温暖而亲密——煤油灯为主光源，在纸面与人脸上形成明亮高光，角落陷入深影；
- 氛围严肃专注，充满沉静的革命热情；
- 无电灯、无现代物品、无现代家具。

## 三、备选取景 Prompt

### 3.1 院落场景（石榴树下的交谈）

```
photorealistic vintage historical photograph style, 1920s China, warm golden-hour tone, subtle film grain, soft analog color palette, high detail, no modern elements.
A small courtyard of a traditional Chinese residence in Jinan, 1921. Two young men in dark long gowns stand under a pomegranate tree in the corner of the courtyard, engaged in quiet conversation.
One holds a thin booklet, gesturing slightly with his other hand; the other listens with a serious, determined expression. A stone well with a wooden winch frame is visible in the background.
The courtyard has grey brick paving, low grey brick walls, and a small wooden gate. Late afternoon sunlight filters through the pomegranate leaves, casting dappled golden light and shadows.
The mood is earnest and purposeful, suggesting secret planning and shared ideals. No modern elements. 16:9 wide composition.
```

### 3.2 门边场景（一人书写、一人望风）

```
photorealistic vintage historical photograph style, 1920s China, warm golden-hour tone, subtle film grain, soft analog color palette, high detail, no modern elements.
Interior of a traditional Chinese room in Jinan, 1921. A young man in a dark long gown sits at a wooden desk near the doorway, writing with a brush under the light of a kerosene lamp.
In the doorway, another young man stands looking out into a narrow stone alley, his posture alert and watchful. The alley outside is dim, with traditional grey-tiled roofs visible.
The room is simply furnished with a desk, chairs, and a bed. Warm lamplight contrasts with the cool blue dusk visible through the open door. The mood conveys secrecy, vigilance, and dedication. No modern elements.
```

## 四、穿帮点自检（出图后对照《复原依据说明.md》第四节逐条核）

重点盯：
- 无现代建筑元素（钢筋混凝土、玻璃、铝合金门窗）
- 无电灯/日光灯——煤油灯是唯一光源
- 无现代家具——传统木桌、木椅、木床
- 繁体字（若出现文字）
- 无现代服饰——长衫、学生装、布鞋
- 无钢笔/圆珠笔——毛笔、墨、砚台为主
- 青砖或夯土地面——无水泥、无瓷砖
- 木格窗糊窗纸——无玻璃窗
- 不追求肖像级还原——以"青年知识分子群像"为主

## 五、调用参数

- 模型：`agnes-image-2.1-flash`
- 尺寸：`2048x1152`（2K，16:9）
- 注意：返回图片 URL 约 24h 有效，**即出即下载**到本目录
