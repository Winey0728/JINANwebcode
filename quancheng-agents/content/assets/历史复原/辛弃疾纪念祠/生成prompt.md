# 辛弃疾纪念祠 · 生成 Prompt 设计稿

> ④历史场景复原 · 辛弃疾纪念祠 · 2026-07-29
> 依据：同目录《复原依据说明.md》。prompt 用英文（更稳），中文语义对照附后。
> 复原年代：南宋孝宗至光宗年间（约 1170—1190 年代，壮年书斋时期）。
> API 端点已切换为 https://apihub.agnes-ai.cn/v1（官方 2026 公告）。

## 一、统一画风段（三场景固定复用）

```
photorealistic vintage historical photograph style, 1170s-1190s Southern Song Dynasty China, warm golden-hour tone, subtle film grain, soft analog color palette, high detail, no modern elements
```

中文对照：写实历史照片风、南宋孝宗至光宗年间、暖调黄金时刻、轻微胶片颗粒、柔和胶片色彩、高细节、无任何现代元素。

## 二、主样图 Prompt（醉里挑灯看剑 · 书斋深夜 · 2K / 16:9）

```
photorealistic vintage historical photograph style, 1170s-1190s Southern Song Dynasty China, warm golden-hour tone, subtle film grain, soft analog color palette, high detail, no modern elements.
Night scene inside a Southern Song scholar-warrior's study, a small timber-framed room with exposed beams and lattice windows (paper-paneled, NOT glass), dimly lit by a single oil lamp on a large wooden writing desk.
A robust man in his late 30s, Xin Qiji, sits at the desk, his left hand adjusting the wick of the oil lamp to brighten the flame, his right hand gripping the hilt of a sheathed sword, gazing intently at the blade. He has a sturdy build, reddish cheeks, a short beard, and piercing eyes. He wears a dark indigo Zhiduo robe with a cloth belt, a square scholar's cap (Dongpo jin) slightly askew from drink.
On the desk: a rice paper scroll with ink writings, an inkstone with a brush resting across it, a small celadon wine pot, a matching wine cup, and scattered poem drafts. Behind him on the wall, a wooden rack holds another sword and a bow. A guqin zither leans against a bookshelf filled with rolled scrolls and bamboo cases.
Through the lattice window, the cold blue moonlight filters in, casting shadows of bamboo and pine branches from the courtyard outside, contrasting with the warm yellow lamplight inside. The atmosphere is melancholic yet heroic, a mix of literary refinement and martial spirit.
Wide 16:9 composition, historically accurate Southern Song interior, no modern objects, no glass windows, no blue-and-white porcelain, no Ming/Qing style furniture.
```

中文语义对照：
- 南宋孝宗至光宗年间写实历史照片风，深夜书斋场景，暖调灯光与冷调月光对比、胶片颗粒；
- 南宋文武双全士大夫书斋内景，木构露明梁架，格子窗（糊纸，**非玻璃**），一盏油灯照亮宽大木书案；
- 壮年辛弃疾（年近四旬）：体格壮硕，红颊短须，目光炯炯；**右手握剑鞘凝视剑身，左手拨亮灯芯**；身着**靛青直裰**，腰束布带，头戴方巾（东坡巾），微带醉态；
- 书案上：手写墨迹的宣纸卷、搁笔的砚台、**青瓷酒壶与酒杯**、散落的词稿；身后墙上木架悬另一柄剑与弓；靠墙的琴与堆满卷轴竹笥的书架；
- 格子窗外**清冷月光**透入，庭院竹影松枝摇曳，与室内暖黄灯光形成冷暖对比；氛围苍凉而豪壮，文人气与武将魂交织；
- 16:9 宽幅，南宋内景准确还原，无现代物品、**无玻璃窗**、无青花瓷、无明清式家具。

## 三、备选 Prompt（白昼书斋 · 挥毫作词）

```
photorealistic vintage historical photograph style, 1170s-1190s Southern Song Dynasty China, warm golden-hour tone, subtle film grain, soft analog color palette, high detail, no modern elements.
A Southern Song scholar's study in daytime, late afternoon sunlight streaming through open lattice windows into a timber-framed room. Xin Qiji, a robust man in his 30s wearing a dark brown round-collar robe and black cloth cap, sits upright at a wide wooden desk, brush in hand, writing on a rice paper scroll. A sheathed sword leans against the desk within arm's reach. The room features exposed wooden beams, a low bookshelf with scrolls, a bronze incense burner, and a landscape painting scroll hanging on the white plaster wall. Outside the window, a courtyard garden with pine, bamboo, and plum trees in late autumn.
Warm slanting sunlight, peaceful yet solemn atmosphere, scholarly and martial presence combined.
Wide 16:9 composition, historically accurate, no modern elements.
```

中文语义对照：
- 南宋士大夫书斋白昼场景，午后斜阳透过敞开的格子窗洒入木构房间；
- 壮年辛弃疾（30 余岁）身着**深褐圆领袍**，戴黑布巾，端坐于宽大书案前，执笔于宣纸卷上书写；一柄带鞘宝剑就手倚于案侧；
- 室内露明木梁、矮书架置卷轴、铜香炉、白灰墙上悬挂山水立轴；窗外庭院植松竹梅，深秋时节；
- 暖斜阳光，宁静而肃穆，文武气质交融；
- 16:9 宽幅，历史准确，无现代元素。

## 四、穿帮点自检（出图后对照《复原依据说明.md》第四节逐条核）

重点盯：非纪念祠建筑（1980 年代重建）、南宋服饰非明清、壮硕武将体型非文弱书生、宋代朴素剑非明清龙泉装饰剑、无玻璃窗、无青花瓷、无线装书。

## 五、调用参数

- 模型：`agnes-image-2.1-flash`
- 尺寸：`2048x1152`（16:9）
- 注意：返回图片 URL 约 24h 有效，**即出即下载**到本目录
