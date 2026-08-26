# 芙蓉街 · 生成 Prompt 设计稿

> ④历史场景复原 · 场景四 · 2026-07-29
> 依据：同目录《复原依据说明.md》。prompt 用英文（更稳），中文语义对照附后。
> 复原年代：清代晚期至民国初（约 1900—1910 年代，商业繁荣期）。
> API 端点已切换为 https://apihub.agnes-ai.cn/v1（官方 2026 公告）。

---

## 一、统一画风段（四场景固定复用）

```
photorealistic vintage historical photograph style, 1900s-1910s China, warm golden-hour tone, subtle film grain, soft analog color palette, high detail, no modern elements
```

中文对照：写实历史照片风、清末民初、暖调黄金时刻、轻微胶片颗粒、柔和胶片色彩、高细节、无任何现代元素。

---

## 二、主样图 Prompt（街道中段平视视角 · 首张验收图 · 2K / 16:9）

```
photorealistic vintage historical photograph style, 1900s-1910s China, warm golden-hour tone, subtle film grain, soft analog color palette, high detail, no modern elements.
A street-level view looking south along Furong Street (Hibiscus Street), a narrow commercial lane in old Jinan, paved with worn bluestone slabs that glisten slightly from recent rain or morning dew.
On both sides, traditional one- to two-story grey-tiled shop-houses line the street tightly but not oppressively; the ground floors are open shopfronts with wooden counters displaying goods, while the upper floors have small wooden balconies and lattice windows.
Wooden shop signs with vertical traditional Chinese characters in gold on black or red backgrounds hang above doorways; cloth banners flutter overhead.
In the foreground left, a street-food vendor tends a sizzling iron griddle making youxuan (spiral-shaped fried pastries), with steam rising from a stacked bamboo steamer beside him; a few customers in long robes and traditional dresses stand eating at low wooden tables.
Mid-frame on the right, a half-open courtyard gate reveals a glimpse of a square spring pool (Furong Spring) with hibiscus flowers nearby, behind a grey-brick screen wall.
Further down the street, a donkey cart makes its way through the crowd; a scholar carrying a book bundle walks toward the distant red wall and glazed-tile roof of the Confucian temple (Fuwen Miao) visible at the street's end.
Warm morning light slants between the buildings, catching the steam, the gold characters on signs, and the wet cobblestones.
Wide 16:9 composition, lively and atmospheric, historically accurate, no modern elements, no cars, no bicycles, no electric poles.
```

中文语义对照：
- 清末民初写实历史照片风，暖调晨光、胶片颗粒；
- 老济南芙蓉街由北向南街道中段平视视角；
- 路面为磨损光滑的青石墁地，微泛雨后/晨露光泽；
- 两侧 1—2 层灰瓦商铺紧密但不压抑；底层敞开式店面配木柜台陈列货物，上层有小木阳台与木格窗；
- 门楣悬挂木质竖排繁体中文招牌（金字黑底或红底）；布幌在头顶飘扬；
- 左前景：小吃摊主照料滋滋作响的铁鏊子炸油旋（螺旋状面食），旁侧竹蒸笼热气升腾；几位长衫/传统服饰食客站于矮木桌旁进食；
- 中景右侧：半开院门内瞥见方形泉池（芙蓉泉），旁有芙蓉花，门后有青砖影壁；
- 街道深处：驴车穿行人丛；抱书卷的文人向远处街尽头的红墙琉璃瓦府学文庙走去；
- 晨光斜穿建筑间隙，照亮蒸汽、招牌金字与湿润石板；
- 16:9 宽幅，热闹而有氛围感，无现代元素、无汽车、无自行车、无电线杆。

---

## 三、备选取景 Prompt

### 3.1 小吃摊特写（油锅前掌柜炸油旋 · 2K / 16:9）

```
photorealistic vintage historical photograph style, 1900s-1910s China, warm golden-hour tone, subtle film grain, soft analog color palette, high detail, no modern elements.
A close-up street-food scene in front of a small shop on Furong Street.
A middle-aged vendor in a white apron over a long robe stands at a traditional brick stove with a large iron griddle, expertly shaping and frying golden spiral-shaped youxuan pastries; oil sizzles and small sparks dance.
Beside him, a tall stack of bamboo steamers releases fragrant steam; clay bowls of sweet porridge (tianmo) sit on a wooden counter.
Three customers — a young scholar, an elderly man, and a woman with a child — sit on low wooden stools at a small table, eating and chatting.
Above them, a faded cloth banner with the character "食" hangs from a bamboo pole; the shop's wooden sign with vertical characters is weathered but legible.
The background shows the narrow street and neighboring shopfronts slightly out of focus, with warm golden light filtering through.
Wide 16:9 composition, rich in texture and warmth, historically accurate, no modern cooking equipment.
```

中文语义对照：
- 芙蓉街小店门前小吃摊近景；
- 中年摊主白围裙罩长衫，立于传统砖灶大铁鏊前，熟练地捏制炸制金黄螺旋状油旋；油花滋滋作响，细小油星跳跃；
- 身旁高高竹蒸笼散发热气腾腾的白雾；木柜上摆放着几碗甜沫；
- 三位食客——年轻书生、老者、抱孩子的妇人——坐于矮木凳小桌旁，边吃边聊；
- 头顶褪色布幌竹竿上悬"食"字幡；店门木质竖排招牌虽旧仍清晰可辨；
- 背景窄街与邻店微虚，暖金色光线透入；
- 质感丰富温暖，无现代厨具。

### 3.2 巷口泉影（芙蓉泉院门半开 · 2K / 16:9）

```
photorealistic vintage historical photograph style, 1900s-1910s China, warm golden-hour tone, subtle film grain, soft analog color palette, high detail, no modern elements.
A view from the street looking into a half-open courtyard gate on Furong Street.
Through the gateway, a small square spring pool is visible in the courtyard center, its water surface perfectly still and reflecting the surrounding walls; a few hibiscus flowers bloom near the pool's edge in soft pink and white.
The courtyard walls are grey brick with a traditional shadow-screen wall (yingbi) immediately inside the gate; moss grows between the bricks and on the stone coping around the pool.
Outside on the street, the blurred figures of passersby and the edge of a shopfront create a frame of everyday urban life around this quiet hidden spring.
Warm afternoon light slants into the courtyard, illuminating the flower petals and the water's surface while leaving the street in gentle shadow.
Wide 16:9 composition, contrast between bustling street and hidden tranquility, historically accurate, no modern elements.
```

中文语义对照：
- 从街道望向芙蓉街半开的院门；
- 门内小院中央可见一方形泉池，水面如镜，映出四壁；池边开着几朵粉白芙蓉花；
- 院墙青砖，门内立有传统影壁；砖缝与池边石沿上生有青苔；
- 门外街道上模糊的行人身影与店铺边缘，为这处隐秘泉水框上一层市井生活的画框；
- 午后暖阳斜照入院，照亮花瓣与水面，而街道处则陷于柔和阴影；
- 喧嚣街道与隐秘宁静形成对比，无现代元素。

---

## 四、穿帮点自检（出图后对照《复原依据说明.md》第四节逐条核）

重点盯：
- 街道宽约 4—6 米，青石/碎石路面，有磨损感
- 两侧为前店后宅式 1—2 层商铺，灰瓦坡屋顶
- 芙蓉泉为院内泉池，非街头喷泉，宜以"半掩门内可见"处理
- 招牌为繁体竖排/横排，黑底金字或红底金字
- 小吃为油旋、甜沫、煎饼、茶汤等传统品类
- 灶具为土灶、铁锅、木蒸笼、陶罐、竹篮
- 人物以长衫/袄裙为主，无民国旗袍西装
- 无柏油水泥路面、电线杆、现代路灯
- 路面可有轻微泥泞或积水，体现历史烟火气

---

## 五、调用参数

- 模型：`agnes-image-2.1-flash`
- 尺寸：2K，16:9
- 注意：返回图片 URL 约 24h 有效，**即出即下载**到本目录
