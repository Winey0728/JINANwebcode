# 经二路商埠 · 生成 Prompt 设计稿

> ④历史场景复原 · 场景二 · 2026-08-08
> 依据：同目录《复原依据说明.md》。prompt 用英文（更稳），中文语义对照附后。
> 复原年代：1920 年代民国盛期（开埠繁荣鼎盛期）。
> API 端点已切换为 https://apihub.agnes-ai.cn/v1（官方 2026 公告）。

## 一、统一画风段（三场景固定复用）

```
photorealistic vintage historical photograph style, 1920s China, warm golden-hour tone, subtle film grain, soft analog color palette, high detail, no modern elements
```

中文对照：写实历史照片风、民国二十年代、暖调黄金时刻、轻微胶片颗粒、柔和胶片色彩、高细节、无任何现代元素。

## 二、主样图 Prompt（街面平视视角 · 首张验收图 · 2K / 16:9）

```
photorealistic vintage historical photograph style, 1920s China, warm golden-hour tone, subtle film grain, soft analog color palette, high detail, no modern elements.
Jing'er Road (Jing'er Lu), the main commercial axis of Jinan's self-opened commercial port (1904), seen from street level looking eastward along the avenue.
A continuous street wall of 1-to-3-story Chinese-Western hybrid architecture lines both sides: Western-style facades with arched doorways, columned porches, triangular pediments, and cast-iron balcony railings mixed with traditional Chinese shops of grey brick walls, wooden lattice windows, and pitched tile roofs.
Vertical wooden signboards with traditional Chinese calligraphy hang above shop fronts; cloth banners and awnings flutter in the breeze.
The street surface is cobblestone or crushed stone, not asphalt; a narrow sidewalk runs along each side.
Pedestrians in 1920s dress: men in long gowns and mandarin jackets, women in qipao, a few in Western suits; rickshaws pulled by coolies, an early 1920s black boxy automobile in the distance.
Street lamps with ornate cast-iron posts, plane trees and Chinese scholar trees as street shade, utility poles with early electric wires.
Late afternoon warm sunlight casting long shadows down the street, a gentle atmospheric haze, bustling yet nostalgic mood.
Wide 16:9 composition, historically accurate, no modern cars, no asphalt, no traffic lights, no neon signs, no simplified Chinese characters.
```

中文语义对照：
- 民国二十年代写实历史照片风，暖调黄昏光、胶片颗粒；
- 经二路街面平视向东望，济南自开商埠（1904 年）核心商业中轴；
- 两侧连绵 1—3 层中西合璧建筑街墙：西式门面（拱券柱廊、三角山花、铸铁阳台栏杆）与传统中式商铺（青砖墙面、木制格扇门窗、坡屋顶）交错；
- 店前悬挂竖排木质招牌与布招幌子；
- 路面为碎石或石板，非柏油；两侧设人行道；
- 行人着长衫马褂、旗袍、西装；黄包车夫拉车、远处一辆早期黑色方头汽车；
- 欧式铸铁街灯、法桐/国槐行道树、电线杆与早期电线；
- 午后斜阳长影铺街、轻微空气感、繁华而怀旧的氛围；
- 16:9 宽幅，无现代汽车、无柏油路面、无红绿灯、无霓虹灯、无简体字。

## 三、备选取景 Prompt

### 3.1 纬二路交叉路口（繁华商圈 · 2K / 16:9）

```
photorealistic vintage historical photograph style, 1920s China, warm golden-hour tone, subtle film grain, soft analog color palette, high detail, no modern elements.
The intersection of Jing'er Road and Wei'er Road in Jinan's commercial port district, 1920s, seen from a slightly elevated angle.
Four corners each feature prominent 2-to-3-story Western-style bank or trading-house buildings with stone facades, arched windows, and decorative roof towers.
The crossing is busy with rickshaws, pedestrians in period dress, and a horse-drawn carriage; cobblestone streets meet at the junction.
Shop signs in vertical traditional Chinese and old English serif lettering; ornate cast-iron street lamps at each corner.
Warm late-afternoon light, long shadows, a sense of bustling commercial prosperity.
Wide 16:9 composition, no modern elements.
```

中文语义对照：
- 经二路与纬二路交叉路口，略高于街面视角；
- 四角各设 2—3 层西式洋行/银行建筑，石材立面、拱形窗、装饰性塔楼；
- 路口繁忙：黄包车、行人、马车交汇；碎石路面；
- 竖排中英文招牌、四角欧式铸铁街灯；
- 暖调午后光、长影、繁荣商业氛围。

### 3.2 黄昏长影街景（氛围版 · 2K / 16:9）

```
photorealistic vintage historical photograph style, 1920s China, warm golden-hour tone, subtle film grain, soft analog color palette, high detail, no modern elements.
Jing'er Road at dusk, Jinan commercial port, 1920s.
The street is lined with glowing shop windows and oil-paper lanterns; the last rays of sunset paint the hybrid architecture in deep amber and violet.
Silhouettes of rickshaws and pedestrians stretch long across the cobblestones; a food vendor's steam rises in the cooling air.
Moody, nostalgic, cinematic atmosphere; the distant skyline remains low, only 2-to-3-story roofs visible against the evening sky.
Wide 16:9 composition, historically accurate, no modern light sources.
```

中文语义对照：
- 经二路黄昏时分，商埠区 1920 年代；
- 沿街店铺窗内透出暖光，油纸灯笼亮起；夕阳余晖将中西合璧建筑染为深琥珀与紫罗兰色；
- 黄包车与行人剪影在碎石路上拉出长影；食摊热气在微凉空气中升腾；
- 情绪化、怀旧、电影感氛围；远处天际线低矮，仅 2—3 层屋顶轮廓；
- 无现代光源。

## 四、穿帮点自检（出图后对照《复原依据说明.md》第四节逐条核）

重点盯：碎石路面非柏油、无现代汽车/红绿灯/霓虹灯、1—3 层建筑不超高、中西合璧不纯中式或纯西式、繁体竖排招牌、1920 年代服饰。

## 五、调用参数

- 模型：`agnes-image-2.1-flash`
- 尺寸：`2048x1152`（16:9）
- 注意：返回图片 URL 约 24h 有效，**即出即下载**到本目录
