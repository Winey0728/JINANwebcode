# 珍珠泉 · 生成 Prompt 设计稿

> ④历史场景复原 · 场景三 · 2026-07-30
> 依据：同目录《复原依据说明.md》。prompt 用英文（更稳），中文语义对照附后。
> 复原年代：清代盛期（康熙至乾隆年间，约 1690—1780 年代，衙署园林格局最典型）。
> API 端点已切换为 https://apihub.agnes-ai.cn/v1（官方 2026 公告）。

## 一、统一画风段（固定复用）

```
photorealistic vintage historical photograph style, 1690s-1780s Qing Dynasty China, warm golden-hour tone, subtle film grain, soft analog color palette, high detail, no modern elements
```

中文对照：写实历史照片风、清代盛期、暖调黄金时刻、轻微胶片颗粒、柔和胶片色彩、高细节、无任何现代元素。

## 二、主样图 Prompt（泉池侧面平视视角 · 首张验收图 · 2K / 16:9）

```
photorealistic vintage historical photograph style, 1690s-1780s Qing Dynasty China, warm golden-hour tone, subtle film grain, soft analog color palette, high detail, no modern elements.
Zhenzhu Spring (Pearl Spring), one of Jinan's four great springs, located in the rear garden of the Qing Dynasty Shandong Provincial Governor's Yamen. A rectangular stone-walled spring pool, built with neatly fitted blue-grey stone blocks, the water exceptionally clear and bright jade-green, revealing sandy bottom.
Countless strings of fine air bubbles rise continuously from the sandy pool floor, breaking gently at the surface, creating a shimmering effect like thousands of rolling pearls — the defining visual feature.
Along one side of the pool stands a traditional northern Chinese pavilion with upturned eaves, red lacquered columns, and painted brackets under the roof. Neatly arranged Taihu rockery and ornamental stones beside the pool. Weeping willows and bamboo clusters frame the scene.
In the middle distance, the grey-tiled hipped or gabled rooftops of the yamen compound are visible behind garden walls, suggesting official architecture without dominating the composition.
A Qing official in traditional robes with queue hairstyle stands at the poolside pavilion, observing the bubbling spring, accompanied by a servant holding a tea tray. The garden is meticulously maintained, with swept stone paving.
Bright clear daylight, serene and dignified atmosphere blending official grandeur with natural elegance. Wide 16:9 composition, historically accurate, no modern elements, no electric lights, no glass windows.
```

中文语义对照：
- 清代盛期写实历史照片风，暖调明亮日光、胶片颗粒；
- 珍珠泉，位于清代山东巡抚衙门后花园中，长方形青石砌壁泉池，石块整齐垒砌，池水极清澈、呈明亮碧绿色，可见池底沙砾；
- 无数细密气泡自沙质池底连续升腾，至水面轻轻破裂，形成波光粼粼的效果，如万颗珍珠滚动——最核心的视觉特征；
- 池畔一侧立有传统北方中式亭榭，飞檐翘角，红柱彩绘斗拱；池边置太湖石叠山；垂柳与竹丛框景；
- 中景处可见衙门院墙的灰瓦硬山/悬山式屋顶，暗示官式建筑而不喧宾夺主；
- 一位身着传统官服、留辫的清代官员立于池畔亭中观泉，旁有仆从捧茶盘侍立；园林整洁有序，地面有清扫过的石板路；
- 晴朗白日，宁静庄重的氛围，官府气派与天然灵秀交融；
- 16:9 宽幅，史实准确，无现代元素、无电灯、无玻璃窗。

## 三、穿帮点自检（出图后对照《复原依据说明.md》第四节逐条核）

重点盯：气泡升腾（非静止/非沸腾）、长方形规则泉池（非自然形）、清代服饰剃发留辫（非明代衣冠）、北方官式亭榭（非江南风格）、无现代元素。

## 四、调用参数

- 模型：`agnes-image-2.1-flash`
- 尺寸：2K，16:9（2048x1152）
- 注意：返回图片 URL 约 24h 有效，**即出即下载**到本目录
