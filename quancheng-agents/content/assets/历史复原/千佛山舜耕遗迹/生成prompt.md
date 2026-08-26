# 千佛山舜耕遗迹 · 生成 Prompt 设计稿

> ④历史场景复原 · 千佛山舜耕遗迹 · 2026-07-29
> 依据：同目录《复原依据说明.md》。prompt 用英文（更稳），中文语义对照附后。
> 复原年代：双层次 ——（1）远古舜耕传说时代（约公元前 2300—前 2100 年）；（2）隋代开皇年间（581—600 年）。
> API 端点已切换为 https://apihub.agnes-ai.cn/v1（官方 2026 公告）。

## 一、统一画风段（双层次分别复用）

**远古舜耕层**：
```
photorealistic vintage historical photograph style, ancient prehistoric China, warm golden-hour tone, subtle film grain, soft analog color palette, high detail, no modern elements
```

中文对照：写实历史照片风、远古传说时代中国、暖调黄金时刻、轻微胶片颗粒、柔和胶片色彩、高细节、无任何现代元素。

**隋代千佛崖层**：
```
photorealistic vintage historical photograph style, 580s-600s Sui Dynasty China, warm golden-hour tone, subtle film grain, soft analog color palette, high detail, no modern elements
```

中文对照：写实历史照片风、隋代开皇年间、暖调黄金时刻、轻微胶片颗粒、柔和胶片色彩、高细节、无任何现代元素。

---

## 二、Prompt A：远古舜耕场景（历山 · 部落耕作 · 2K / 16:9）

```
photorealistic vintage historical photograph style, ancient prehistoric China, warm golden-hour tone, subtle film grain, soft analog color palette, high detail, no modern elements.
A misty morning on the slopes of Mount Li (ancient Jinan), circa 2000 BCE. A semi-cleared hillside with charred tree stumps and freshly turned dark soil shows the traces of slash-and-burn agriculture. In the background, dense primeval forest of oak and pine covers the rolling hills; a clear spring stream tumbles down the rocky slope.
At the center, a tall tribal leader figure stands holding a wooden lei-si (digging stick with a stone blade bound by rope), directing the work. He wears a simple tunic of rough hemp and animal hide, his hair tied in a topknot with a leather cord, barefoot. Around him, a dozen tribal members—men and women—bend to plant seeds or break soil with stone-bladed tools. Their clothes are crude hemp cloth and hide, their hair in simple chignons or loose, feet bare.
In the middle distance, a cluster of half-subterranean round huts with thatched roofs and mud-plastered walls sits near the stream. A thin trail of smoke rises from a fire pit. The atmosphere is primal, dignified, a moment of human civilization emerging from the wilderness.
Soft dawn light, long shadows on the tilled earth, morning mist drifting through the trees.
Wide 16:9 composition, no metal tools, no written characters, no domesticated animals pulling plows, historically accurate Neolithic setting.
```

中文语义对照：
- 远古传说时代写实历史照片风，清晨暖调柔光、胶片颗粒；
- 历山（今济南千佛山）山坡，约公元前 2000 年，**刀耕火种痕迹**：焦黑树桩、新翻黑土；背景原始森林覆盖起伏山峦，清澈泉流沿石坡奔涌而下；
- 中央：高大部落首领持**木柄石刃耒耜**（以绳绑缚石铲），指挥劳作；身着**粗麻兽皮短衣**，发束椎髻以皮带束之，赤足；
- 周围十余部落成员（男女）弯腰播种或以石刃农具破土；衣着粗陋麻布兽皮，发式简洁，赤足；
- 中景：溪流旁几座**半地穴式圆形茅屋**，草顶泥墙；火塘一缕炊烟升起；
- 氛围原始而庄严，人类文明初现于荒野之中；
- 柔和晨光，耕作地上长影，晨雾穿林；
- 16:9 宽幅，**无金属农具、无文字、无牛耕/畜力牵引**，新石器时代场景历史准确。

---

## 三、Prompt B：隋代千佛崖与兴国禅寺（2K / 16:9）

```
photorealistic vintage historical photograph style, 580s-600s Sui Dynasty China, warm golden-hour tone, subtle film grain, soft analog color palette, high detail, no modern elements.
The Qianfo Cliff (Thousand Buddha Cliff) on the mountainside, a sandstone cliff face carved with multiple shallow Buddhist niches. Inside the niches, Sui Dynasty Buddha statues sit in padmasana, their faces round and serene with slightly downcast eyes, muscular bodies draped in flowing robes with dense, rhythmic folds. Smaller standing bodhisattva figures flank the central Buddhas.
A simple wooden veranda and walkway project from the cliff, supported by timber posts, where several monks in grey-brown hemp robes stand with palms together in prayer. Below the cliff, a small Sui Dynasty Buddhist temple complex climbs the hillside: a mountain gate, a main hall with a hip-and-gable (xieshan) roof in grey tiles, large bracket sets, deep eaves, and sturdy wooden columns on plain stone bases. White plaster walls, no elaborate paint.
In the courtyard, a few believers in Sui Dynasty dress—men in narrow-sleeved robes and cloth caps, women in short jackets and long skirts with high buns—walk quietly or kneel in prayer. Pine and cypress trees grow among the buildings. Golden afternoon sunlight slants through the trees, illuminating the cliff carvings and casting long shadows across the temple courtyard.
Wide 16:9 composition, historically accurate Sui Dynasty Buddhist art and architecture, no glass, no modern materials, no Tang-style plump figures, no Ming/Qing style temple decoration.
```

中文语义对照：
- 隋代开皇年间写实历史照片风，午后暖调金光、胶片颗粒；
- 千佛山山腰千佛崖，砂岩崖壁开凿多座浅佛龛；龛内隋代佛像**结跏趺坐**，**面相丰圆、双目微垂、体态健硕**，袈裟衣纹稠叠流畅；主佛两侧立较小菩萨像；
- 崖外挑出简易木构游廊栈道，数位身着**灰褐麻布僧袍**的僧人合掌静立礼拜；
- 崖下小型隋代佛寺沿山势而建：**山门、歇山顶主殿**，**大斗栱、深出檐、粗壮木柱下设素面石础**；白灰墙面，无繁缛彩画；
- 庭院中少量信众身着隋代服饰——男子窄袖袍戴布帽，女子短襦长裙高髻——或静走或跪拜；松柏生于殿宇之间；
- 午后金光穿透树梢，照亮崖壁造像，长影横斜于寺院庭院；
- 16:9 宽幅，隋代佛教艺术与建筑历史准确，**无玻璃、无现代材料、无唐代丰腴佛像样式、无明清式寺庙装饰**。

---

## 四、备选 Prompt C：隋代开凿场景（工匠雕崖 · 2K / 16:9）

```
photorealistic vintage historical photograph style, 580s-600s Sui Dynasty China, warm golden-hour tone, subtle film grain, soft analog color palette, high detail, no modern elements.
Sui Dynasty craftsmen carving Buddhist statues into a cliff face. Several workers on wooden scaffolding cling to the rock, wielding iron hammers and chisels. They wear short hemp jackets, cloth sashes, and are barefoot. Below, piles of stone chips accumulate at the cliff base. A supervising monk in grey robes observes from the ground, holding a wooden ruler and a drawing scroll with Buddha outlines.
The half-finished Buddha figure in the niche shows the Sui style: round face, broad shoulders, robe folds partially carved. The mountain forest surrounds the scene, birds flying overhead. Warm afternoon light.
Wide 16:9 composition, historically accurate tools and clothing, no modern safety equipment, no explosives.
```

中文语义对照：
- 隋代工匠雕凿佛像场景；
- 数名工匠攀于木脚手架上，持铁锤铁凿凿击崖壁；身着短褐麻衣、布带束腰、赤足；崖下堆积石屑；地面一位灰袍监工僧手持木尺与绘有佛像线稿的图卷；
- 佛龛中未完工佛像已显隋代风格：圆脸、宽肩、衣纹半成；山林环绕，飞鸟掠过；午后暖光；
- 16:9 宽幅，工具与服饰历史准确，无现代安全装备，无炸药。

---

## 五、穿帮点自检（出图后对照《复原依据说明.md》第五节逐条核）

**远古舜耕重点盯**：兽皮粗麻非丝绸冕旒、石木农具非铁器、人力耒耜非牛耕、无文字无青铜无城市、不规则原始农田。

**隋代千佛崖重点盯**：隋代丰圆健硕佛像非唐肥清瘦、隋代大斗栱深出檐非明清小斗栱彩画、无玻璃电灯水泥、僧人僧袍简朴、信众隋代服饰、摩崖浅龛非大型洞窟。

---

## 六、调用参数

- 模型：`agnes-image-2.1-flash`
- 尺寸：`2048x1152`（16:9）
- 注意：返回图片 URL 约 24h 有效，**即出即下载**到本目录
