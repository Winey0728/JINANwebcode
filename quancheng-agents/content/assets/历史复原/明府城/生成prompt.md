# 明府城（济南古城）· 生成 Prompt 设计稿

> ④历史场景复原 · 场景二 · 2026-07-29
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

## 二、主样图 Prompt（城门内望视角 · 首张验收图 · 2K / 16:9）

```
photorealistic vintage historical photograph style, 1880s-1900s China, warm golden-hour tone, subtle film grain, soft analog color palette, high detail, no modern elements.
An interior view looking through the massive arched stone gate of the Ming-era Jinan City Wall (Jinan Fucheng) into the ancient city.
In the foreground, the dark stone archway frames the scene; beyond it, a narrow cobblestone street stretches into the distance, flanked by traditional one- to two-story grey-tiled courtyard houses with whitewashed or grey-brick walls.
A clear spring-water stream flows along the street, crossed by several flat stone slab bridges; weeping willows with long drooping branches line both banks, their leaves gently touching the water surface.
Pedestrians in late-Qing Chinese dress — men with queues and long robes, women in traditional aoqun — walk along the street; a vendor with a shoulder pole, a man leading a donkey, a woman carrying a wooden water bucket from the spring.
The street is paved with irregular bluestone slabs; wooden shop signs with vertical Chinese characters hang above doorways; cloth banners and awnings in muted earth tones.
Late afternoon sunlight casts long golden shadows through the willow branches; a soft atmospheric haze lingers in the distance where the street curves out of sight.
The city wall's inner face and a corner of the gate tower roof are visible in the upper frame, providing architectural context.
Wide 16:9 composition, historically accurate, no cars, no bicycles, no asphalt, no modern signage, no electric poles.
```

中文语义对照：
- 清代晚期写实历史照片风，暖调黄昏光、胶片颗粒；
- 明府城城门内侧视角，巨大石拱门洞框景；
- 青石街道向远方延伸，两侧 1—2 层灰瓦白墙/青砖传统四合院民居；
- 泉水溪流沿街流淌，石板小桥横跨水面；垂柳依依，枝条拂水；
- 行人着晚清服饰（男子长辫长衫，女子袄裙）；挑担小贩、牵驴行人、提木桶取水妇人；
- 路面为不规则青石墁地；门楣悬挂木质竖排繁体中文招牌；布幌、布篷以素色土褐为主；
- 斜阳透过柳枝洒下金色长影，远处街道转弯处有轻柔空气感；
- 画面上方可瞥见城墙内壁与城门楼檐角，提供建筑空间锚点；
- 16:9 宽幅，无汽车、无自行车、无柏油路面、无现代招牌、无电线杆。

---

## 三、备选取景 Prompt

### 3.1 俯瞰全景（城墙东南角俯瞰全城 · 2K / 16:9）

```
photorealistic vintage historical photograph style, 1880s-1900s China, warm golden-hour tone, subtle film grain, soft analog color palette, high detail, no modern elements.
A high-angle panoramic view from atop the southeastern corner of the Jinan City Wall, overlooking the entire ancient city.
Below stretches a dense grid of grey-tiled rooftops, interspersed with slender spring-water streams that glint in the sunlight like silver threads.
The city wall curves along the left and bottom edges of the frame, with its crenellated parapet and a traditional Chinese gate tower with double-eaved hip roof visible.
To the north, the expansive Daming Lake shimmers; to the south, the distant silhouette of Mount Qianfo (Thousand Buddha Mountain) rises against the hazy sky.
Weeping willows cluster along the waterways and the moat outside the wall; a few small boats drift on the inner canals.
Soft golden afternoon light bathes the entire city, creating a warm nostalgic atmosphere.
Wide 16:9 composition, historically accurate, no modern buildings, no power lines.
```

中文语义对照：
- 城墙东南角高角度俯瞰全城全景；
- 下方为密集的灰瓦屋顶棋盘格，其间泉水溪流如银线闪烁；
- 城墙沿画面左/底边缘延展，可见女墙垛口与重檐歇山顶城门楼；
- 北方大明湖波光粼粼，南方千佛山远景隐约；
- 水道两岸与护城河外垂柳成簇，内河有小舟漂浮；
- 柔和金色午后光笼罩全城，营造怀旧氛围；
- 无现代建筑、无电线。

### 3.2 泉水街巷特写（曲水亭街/百花洲一带 · 2K / 16:9）

```
photorealistic vintage historical photograph style, 1880s-1900s China, warm golden-hour tone, subtle film grain, soft analog color palette, high detail, no modern elements.
A close-up street-level view of a narrow spring-water lane in old Jinan, where a crystal-clear stream flows gently between traditional courtyard houses.
Flat stone slab bridges cross the stream at irregular intervals; weeping willows with long trailing branches arch over the water from both sides, their green-yellow spring leaves reflected in the rippling surface.
The houses are one-story grey-tiled structures with whitewashed walls, wooden lattice windows, and small courtyards visible through half-open gates.
An elderly man in a long robe bends to draw water from the stream with a wooden bucket; a child sits on a stone bridge dipping their feet in the cool water.
Moss grows between the bluestone paving stones; small white wildflowers dot the stream banks.
Warm late-afternoon sidelight filters through the willow canopy, creating dappled golden patterns on the water and walls.
Wide 16:9 composition, intimate and peaceful, historically accurate, no modern elements.
```

中文语义对照：
- 老济南泉水街巷近景，清澈溪流穿街而过；
- 不规则间隔的石板小桥横跨水面；垂柳枝条从两侧拱过水面，春叶黄绿映在波纹中；
- 民居为单层灰瓦白墙，木格窗，半掩门内可见小院落；
- 长衫老者弯腰以木桶从溪中取水，孩童坐石桥畔戏水；
- 青石缝中生苔藓，溪岸点缀白色野花；
- 午后侧光透过柳冠洒下斑驳金色光影；
- 氛围 intimate 宁静，无现代元素。

---

## 四、穿帮点自检（出图后对照《复原依据说明.md》第四节逐条核）

重点盯：
- 城墙规模不过于厚重（周长仅 12 里的"秀气"城墙）
- 城门楼为重檐歇山顶，非单檐或攒尖
- 民居为北方四合院灰瓦白墙/青砖，无江南马头墙
- 路面为青石/碎石/青砖，无柏油水泥
- 人物为长辫长衫/袄裙，无民国旗袍西装
- 垂柳必须出现且形态正确（枝条细长下垂）
- 泉水为流动溪流，非静止池塘
- 无汽车、无自行车、无电线杆、无简体字

---

## 五、调用参数

- 模型：`agnes-image-2.1-flash`
- 尺寸：2K，16:9
- 注意：返回图片 URL 约 24h 有效，**即出即下载**到本目录
