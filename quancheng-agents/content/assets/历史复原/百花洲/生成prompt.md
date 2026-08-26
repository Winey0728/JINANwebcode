# 百花洲 · 生成 Prompt 设计稿

> ④历史场景复原 · 场景三 · 2026-07-29
> 依据：同目录《复原依据说明.md》。prompt 用英文（更稳），中文语义对照附后。
> 复原年代：清代中晚期（约 1880—1900 年代，刘鹗《老残游记》成书前后）。
> API 端点已切换为 https://apihub.agnes-ai.cn/v1（官方 2026 公告）。

---

## 一、统一画风段（四场景固定复用）

```
photorealistic vintage historical photograph style, 1880s-1900s China, warm golden-hour tone, subtle film grain, soft analog color palette, high detail, no modern elements
```

中文对照：写实历史照片风、清代晚期、暖调黄金时刻、轻微胶片颗粒、柔和胶片色彩、高细节、无任何现代元素。

---

## 二、主样图 Prompt（池畔茶馆视角 · 首张验收图 · 2K / 16:9）

```
photorealistic vintage historical photograph style, 1880s-1900s China, warm golden-hour tone, subtle film grain, soft analog color palette, high detail, no modern elements.
A serene waterside scene at Baihuazhou (Hundred Flowers Pond), a natural spring-water pond in old Jinan, viewed from the edge of a traditional spring-water teahouse.
In the foreground, low bamboo chairs and small wooden tables are set on a stone-paved terrace beside the water, with a purple-clay teapot and porcelain gaiwan tea bowls on one table.
The middle ground shows the pond's gently rippling surface, with weeping willows drooping their long slender branches to touch the water; water lilies and lotus leaves float near the shore; several flat stone slab bridges cross narrow spring-water streams that wind into the pond from the left.
Traditional one- to two-story grey-tiled courtyard houses with whitewashed walls line the irregular pond shore at varying distances, creating a relaxed rhythm of built and natural space; some houses have stone steps descending directly to the water for washing.
A scholar in a long robe sits at one of the teahouse tables with an open thread-bound book and a folding fan; a woman in traditional aoqun washes clothes on the stone steps; a child crouches on a stone bridge watching fish in the clear stream.
Late afternoon golden light filters through the willow canopy, casting dappled reflections on the water; soft atmospheric haze blurs the distant rooftops.
Wide 16:9 composition, peaceful and literati, historically accurate, no modern elements, no asphalt, no electric poles.
```

中文语义对照：
- 清代晚期写实历史照片风，暖调黄昏光、胶片颗粒；
- 老济南百花洲池畔宁静水景，从传统泉水茶馆露台边缘取景；
- 近景：水边石板露台上的矮竹椅小木桌，桌上紫砂茶壶与盖碗茶具；
- 中景：池面微波荡漾，垂柳长枝拂水；睡莲荷叶浮于岸边；数座平板石桥横跨从左侧蜿蜒汇入池中的泉水溪流；
- 池岸不规则分布着 1—2 层灰瓦白墙四合院民居，疏密有致；部分民居有石阶直接入水；
- 长衫文人坐茶馆桌旁，手持线装书与折扇；袄裙妇人在石阶浣衣；孩童蹲石桥上看溪中游鱼；
- 午后金光透过柳冠洒下斑驳光影，远处屋顶在轻柔空气感中朦胧；
- 16:9 宽幅，氛围宁静雅致、文人气息，无现代元素、无柏油路面、无电线杆。

---

## 三、备选取景 Prompt

### 3.1 曲水亭街纵深（石板小桥望向街道远方 · 2K / 16:9）

```
photorealistic vintage historical photograph style, 1880s-1900s China, warm golden-hour tone, subtle film grain, soft analog color palette, high detail, no modern elements.
A view from a small flat stone slab bridge looking down Qushuiting Street, a winding spring-water lane in old Jinan.
The narrow street curves gently into the distance, paved with irregular bluestone slabs partially covered with moss; a crystal-clear spring stream runs alongside the street, its surface reflecting the surrounding buildings and sky.
On both sides, traditional one-story grey-tiled houses with whitewashed walls and wooden lattice windows stand close to the water; low stone walls and weeping willows separate the houses from the stream.
The stone bridge in the foreground is made of a single large slab, barely wider than a person, with no railing; a woman carrying a wooden water bucket crosses it carefully.
Paper umbrellas dry on a windowsill; cloth banners with faded vertical Chinese characters hang above a small shop doorway; the sound of flowing water is almost visible in the stillness.
Warm sidelight from the late afternoon sun catches the white walls and creates long shadows across the cobblestones.
Wide 16:9 composition, intimate and atmospheric, historically accurate, no modern elements.
```

中文语义对照：
- 从平板石桥望向曲水亭街纵深；
- 窄街蜿蜒向远方，不规则青石路面局部覆有青苔；清澈泉水沿街流淌，水面映出建筑与天空；
- 两侧单层灰瓦白墙木格窗民居临水而立；矮石墙与垂柳分隔房屋与溪流；
- 前景石桥由单块大石板铺成，仅容一人宽，无栏杆；提木桶妇人小心过桥；
- 窗台晾晒油纸伞，小店门楣悬挂褪色竖排中文布幌；流水声在宁静中仿佛可见；
- 午后侧光打亮白墙，在石板路上投下长影；
- 氛围 intimate  Atmospheric，无现代元素。

### 3.2 俯瞰水巷（民居二层俯瞰百花洲全貌 · 2K / 16:9）

```
photorealistic vintage historical photograph style, 1880s-1900s China, warm golden-hour tone, subtle film grain, soft analog color palette, high detail, no modern elements.
A high-angle view from a second-floor wooden balcony overlooking Baihuazhou pond and the surrounding spring-water neighborhood.
Below, the irregular-shaped pond spreads out with patches of lotus and water lily leaves; several narrow spring streams wind into it like silver threads from different directions.
Grey-tiled rooftops cluster along the water's edge at varying densities, interspersed with weeping willows and small courtyards; flat stone bridges cross the streams at several points.
In one courtyard, laundry hangs on bamboo poles; smoke rises gently from a kitchen chimney; a small dog sleeps on a sun-warmed stone step.
The golden afternoon light turns the water surface into molten gold, with the reflection of willow branches rippling gently.
Wide 16:9 composition, bird's-eye but intimate, historically accurate, no modern buildings, no power lines.
```

中文语义对照：
- 民居二层木阳台高角度俯瞰百花洲与周边泉水街区；
- 下方不规则形池沼展开，点缀睡莲荷叶；数条窄溪如银线从各方向汇入；
- 灰瓦屋顶沿水岸以不同密度聚集，间杂垂柳与小院；数处平板石桥跨于溪流之上；
- 某院落中竹竿晾晒衣物，厨房烟囱轻烟袅袅，小狗卧于晒暖的石阶上；
- 金色午后阳光将水面粉饰成熔金，柳枝倒影轻摇；
- 鸟瞰却 intimate，无现代建筑、无电线。

---

## 四、穿帮点自检（出图后对照《复原依据说明.md》第四节逐条核）

重点盯：
- 百花洲为不规则天然池沼，非规则几何形
- 水深不过 1—2 米，面积数千平方米
- 民居为落地式北方四合院，无高脚/吊脚楼
- 建筑密度适中，疏密有致，见水见天
- 石板桥为低矮平板石桥，无栏杆或仅矮石栏
- 曲水亭街路面蜿蜒曲折，非笔直宽阔
- 茶馆为竹木桌椅+盖碗茶+布幌，无现代元素
- 人物为长辫长衫/袄裙，无民国服饰
- 无水泥/柏油路面、电线杆、现代路灯

---

## 五、调用参数

- 模型：`agnes-image-2.1-flash`
- 尺寸：2K，16:9
- 注意：返回图片 URL 约 24h 有效，**即出即下载**到本目录
