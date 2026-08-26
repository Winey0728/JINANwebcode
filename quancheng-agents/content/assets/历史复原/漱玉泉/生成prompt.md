# 漱玉泉 · 生成 Prompt 设计稿

> ④历史场景复原 · 场景六 · 2026-07-30
> 依据：同目录《复原依据说明.md》。prompt 用英文（更稳），中文语义对照附后。
> 复原年代：宋代（约 1090—1120 年代，李清照少年时期意象，文学氛围最浓）。
> API 端点已切换为 https://apihub.agnes-ai.cn/v1（官方 2026 公告）。

## 一、统一画风段（固定复用）

```
photorealistic vintage historical photograph style, 1090s-1120s Song Dynasty China, warm golden-hour tone, subtle film grain, soft analog color palette, high detail, no modern elements
```

中文对照：写实历史照片风、北宋时期、暖调黄金时刻、轻微胶片颗粒、柔和胶片色彩、高细节、无任何现代元素。

## 二、主样图 Prompt（泉池近景侧面视角 · 首张验收图 · 2K / 16:9）

```
photorealistic vintage historical photograph style, 1090s-1120s Song Dynasty China, warm golden-hour tone, subtle film grain, soft analog color palette, high detail, no modern elements.
A small, intimate stone spring pool named Shuyu Spring (Rinsing Jade Spring), nestled within a quiet garden setting in old Jinan. The pool is built with smooth pale blue-grey stone blocks, no more than two meters across, with exceptionally clear water revealing the sandy bottom. Fine air bubbles rise gently from tiny spring vents across the pool floor, creating delicate ripples that catch the light like scattered jade fragments.
Beside the pool, a young Song Dynasty girl around twelve years old, dressed in a pale green narrow-sleeved short jacket and flowing light skirt, kneels gracefully on a flat stone slab. She holds a writing brush, gently rinsing its tip in the spring water. Beside her on the stone rest an inkstone, a rolled handscroll, and a small water vessel — the tools of a young scholar.
Bamboo groves and plantain trees surround the scene, their leaves filtering the late afternoon sunlight into dappled golden patterns on the water and stones. A few weeping willow branches trail nearby. In the soft-focused background, the corner of a traditional Song Dynasty building with a simple overhanging gable roof is barely visible, suggesting a scholarly residence without defining precise architecture.
The atmosphere is serene, poetic, and delicate — a moment of quiet cultivation where water, word, and youth meet. Wide 16:9 composition, historically accurate, no modern elements, no concrete, no glass, no electric lights.
```

中文语义对照：
- 北宋时期写实历史照片风，暖调午后光、胶片颗粒；
- 漱玉泉，位于老济南一处静谧园中小景；泉池由光滑的淡青灰色石块砌成，宽不过两米，池水极清澈、可见沙底；细密气泡自池底小泉眼轻柔升腾，形成 delicate 波纹，波光如散落的玉屑；
- 池边一位约十二岁的宋代少女，身着淡绿窄袖短袄、轻盈长裙，优雅跪坐于平整石板上；她手持毛笔，正于泉水中轻涤笔锋；身旁石上置砚台、手卷、小水盂——一位小才女的文房之物；
- 竹林与芭蕉环绕，叶片滤下午后阳光，在水面与石上形成斑驳金色光影；几枝垂柳在旁轻拂；背景虚化处隐约可见一座传统宋代建筑的悬山式屋檐一角，暗示书斋居所而不精确描绘建筑细节；
- 氛围宁静、诗意、清雅——水、词、少年相遇的一刻；
- 16:9 宽幅，史实准确，无现代元素、无水泥、无玻璃、无电灯。

## 三、穿帮点自检（出图后对照《复原依据说明.md》第四节逐条核）

重点盯：小型泉池（非大水池）、细密气泡（非静止/非沸腾）、宋代少女服饰（窄袖短袄长裙，非明清宽袍）、无现代元素、李清照关联标注为【存疑】不当作确证史实。

## 四、调用参数

- 模型：`agnes-image-2.1-flash`
- 尺寸：2K，16:9（2048x1152）
- 注意：返回图片 URL 约 24h 有效，**即出即下载**到本目录
