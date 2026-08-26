# 纬二路洋行旧址 · 生成 Prompt 设计稿

> ④历史场景复原 · 场景四 · 2026-08-08
> 依据：同目录《复原依据说明.md》。prompt 用英文（更稳），中文语义对照附后。
> 复原年代：1920 年代民国盛期（华洋金融机构并存鼎盛期）。
> API 端点已切换为 https://apihub.agnes-ai.cn/v1（官方 2026 公告）。

## 一、统一画风段（三场景固定复用）

```
photorealistic vintage historical photograph style, 1920s China, warm golden-hour tone, subtle film grain, soft analog color palette, high detail, no modern elements
```

中文对照：写实历史照片风、民国二十年代、暖调黄金时刻、轻微胶片颗粒、柔和胶片色彩、高细节、无任何现代元素。

## 二、主样图 Prompt（街面平视视角 · 首张验收图 · 2K / 16:9）

```
photorealistic vintage historical photograph style, 1920s China, warm golden-hour tone, subtle film grain, soft analog color palette, high detail, no modern elements.
Wei'er Road (Wei'er Lu), the financial street of Jinan's commercial port district, 1920s, seen from street level looking northward along the avenue.
A continuous street wall of 2-to-3-story European classical bank buildings lines both sides: German Neoclassical style with stone-columned porches, triangular pediments, arched windows, and decorative cornices; some British-style red-brick buildings with stone window surrounds and dormer roofs; a few Chinese-Western hybrid facades with Western columns and Chinese pitched tile roofs.
The central visual focus is a grand German bank building: wide granite steps leading to a four-column Ionic portico, a heavy triangular stone pediment with relief carving above the entrance, tall arched windows on both floors, red tile roof, a small domed tower at the corner.
Cast-iron gates and ornate fences in front of the banks; stone lions or classical sculptures flanking the main entrance steps.
Pedestrians in 1920s dress: bank clerks in Western suits and ties, compradors in long gowns with Western-style overcoats, women in qipao, a uniformed policeman, rickshaws waiting by the curb.
An early 1920s black boxy limousine parked in front of one bank; cobblestone street surface, ornate cast-iron street lamps, plane trees as street shade.
Late afternoon warm sunlight striking the stone facades at an angle, creating strong architectural shadows, a sense of solemn prosperity and financial authority.
Wide 16:9 composition, historically accurate, no modern cars, no asphalt, no traffic lights, no neon signs, no simplified Chinese characters.
```

中文语义对照：
- 民国二十年代写实历史照片风，暖调午后光、胶片颗粒；
- 纬二路街面平视向北望，济南商埠区金融街，1920 年代；
- 两侧连绵 2—3 层欧式古典银行建筑群：德式新古典主义（石柱廊门廊、三角山花、拱窗、装饰线脚）、英式红砖建筑（石材窗框、老虎窗坡屋顶）、少量中西合璧（西式柱廊 + 中式坡屋顶）；
- 视觉焦点为一栋宏伟德式银行：宽大花岗岩石台阶通向四柱爱奥尼克门廊，入口上方厚重三角石材山花带浮雕，两层高拱窗，红瓦屋顶，转角处小型穹顶塔楼；
- 银行门前铸铁大门与装饰围栏，主入口台阶两侧设石狮或西式雕塑；
- 行人：银行职员（西装领带）、买办（长衫西式外套）、旗袍女性、制服巡警、路边候客黄包车；
- 一辆早期黑色方头轿车停在某银行门前；碎石路面、欧式铸铁街灯、法桐行道树；
- 午后斜阳以角度照射石材立面，形成强烈建筑阴影，庄严繁荣的金融权威感；
- 16:9 宽幅，无现代汽车、无柏油路面、无红绿灯、无霓虹灯、无简体字。

## 三、备选取景 Prompt

### 3.1 与经二路交叉路口（商埠区最繁华地段 · 2K / 16:9）

```
photorealistic vintage historical photograph style, 1920s China, warm golden-hour tone, subtle film grain, soft analog color palette, high detail, no modern elements.
The intersection of Wei'er Road and Jing'er Road in Jinan's commercial port, 1920s, seen from a slightly elevated corner viewpoint.
Four corners each dominated by imposing 2-to-3-story bank buildings: northwest corner a German Neoclassical bank with columned porch and dome; northeast corner a Chinese-Western hybrid building with arched windows and Chinese tiled roof; southeast and southwest corners British-style red-brick institutions with stone trim.
The crossing is busy with rickshaws, an early automobile, pedestrians in suits and long gowns; cobblestone streets meet at the junction.
Ornate cast-iron street lamps at each corner, hanging wooden signboards with traditional Chinese and English lettering.
Warm late-afternoon light, long shadows, a sense of bustling financial and commercial crossroads.
Wide 16:9 composition, no modern elements.
```

中文语义对照：
- 纬二路与经二路交叉路口，略高于街面的拐角视角；
- 四角各由宏伟 2—3 层银行建筑占据：西北角德式新古典银行（柱廊 + 穹顶）、东北角中西合璧建筑（拱窗 + 中式瓦顶）、东南及西南角英式红砖机构（石材装饰）；
- 路口繁忙：黄包车、早期汽车、西装与长衫行人交汇；碎石路面；
- 四角欧式铸铁街灯，悬挂竖排中英文木质招牌；
- 暖调午后光、长影、繁华金融商业十字街口感。

### 3.2 黄昏金融街（氛围版 · 2K / 16:9）

```
photorealistic vintage historical photograph style, 1920s China, warm golden-hour tone, subtle film grain, soft analog color palette, high detail, no modern elements.
Wei'er Road financial district at dusk, 1920s Jinan.
The stone and brick facades of the bank buildings glow in deep amber and rose as the sun sets; the cast-iron street lamps have just been lit, casting warm pools of light on the cobblestones.
Silhouettes of rickshaws and last-minute bank customers stretch long across the street; a uniformed doorman stands at the top of a bank's stone steps.
The heavy wooden doors of the banks are half-closed; brass nameplates and emblems glint in the fading light.
A moody, authoritative, nostalgic atmosphere; the low skyline of 2-to-3-story roofs against a violet evening sky.
Wide 16:9 composition, historically accurate, no modern light sources.
```

中文语义对照：
- 纬二路金融街黄昏时分，1920 年代济南；
- 银行建筑石材与砖石立面在夕阳中呈现深琥珀与玫瑰色；铸铁街灯刚点亮，在碎石路面上投下暖光圈；
- 黄包车与最后一批银行客户的剪影在街面上拉出长影；一名制服门房立于某银行石阶顶端；
- 银行厚重木门半掩；黄铜铭牌与徽章在余光中闪烁；
- 情绪化、权威感、怀旧氛围；2—3 层屋顶的低矮天际线衬着紫罗兰色暮空；
- 无现代光源。

## 四、穿帮点自检（出图后对照《复原依据说明.md》第四节逐条核）

重点盯：碎石路面非柏油、无现代汽车/红绿灯/霓虹灯、2—3 层建筑不超高、欧式古典主义风格主导、中西合璧有但非主体、铸铁大门围栏非不锈钢、繁体竖排或中英文并列招牌、1920 年代金融从业者服饰（西装/长衫/制服）。

## 五、调用参数

- 模型：`agnes-image-2.1-flash`
- 尺寸：`2048x1152`（16:9）
- 注意：返回图片 URL 约 24h 有效，**即出即下载**到本目录
