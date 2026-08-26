# 胶济铁路博物馆（原胶济铁路济南站）· 生成 Prompt 设计稿

> ④历史场景复原 · 场景三 · 2026-08-08
> 依据：同目录《复原依据说明.md》。prompt 用英文（更稳），中文语义对照附后。
> 复原年代：1904 年建站初期（胶济铁路通车，德据时期原貌）。
> API 端点已切换为 https://apihub.agnes-ai.cn/v1（官方 2026 公告）。

## 一、统一画风段（三场景固定复用）

```
photorealistic vintage historical photograph style, 1904 China, warm golden-hour tone, subtle film grain, soft analog color palette, high detail, no modern elements
```

中文对照：写实历史照片风、清末光绪三十年、暖调黄金时刻、轻微胶片颗粒、柔和胶片色彩、高细节、无任何现代元素。

## 二、主样图 Prompt（站前广场视角 · 首张验收图 · 2K / 16:9）

```
photorealistic vintage historical photograph style, 1904 China, warm golden-hour tone, subtle film grain, soft analog color palette, high detail, no modern elements.
The Jiaoji Railway Jinan Station, built in 1904, a German colonial-era railway station in German Neoclassical / Neo-Renaissance style, seen from the station square at eye level with slight upward angle.
A symmetrical two-story main building with a red-brick or stone facade, central entrance porch with stone columns and wide steps, triangular pediment or arched doorway decoration above the entrance.
Long arched windows with stone surrounds, aligned vertically between floors; a hipped or gabled red-tile roof with decorative cornice moldings.
To the east, a lower one-to-two-story annex with dormer windows; the south facade is the main elevation, facing the viewer.
In front of the station, a low open-air platform with railway tracks; a German-made steam locomotive from the 1900s stands at the platform, emitting soft white steam, with riveted wooden passenger cars behind.
A few figures: German railway engineers in Western suits and caps, Chinese laborers in short traditional jackets and cloth shoes, a few travelers in long gowns.
Crushed-stone station square, sparse pine trees, auxiliary railway buildings and warehouses visible in the background.
Morning side-light casting crisp shadows on the facade, gentle atmospheric haze from the locomotive steam.
Wide 16:9 composition, historically accurate, no modern trains, no overhead wires, no asphalt, no modern signs.
```

中文语义对照：
- 清末光绪三十年写实历史照片风，暖调晨光、胶片颗粒；
- 1904 年建成的胶济铁路济南站，德式新古典主义/新文艺复兴风格铁路站房，站前广场平视微仰；
- 对称式两层主体建筑，红砖或石材立面，中央柱廊入口带宽大石台阶，入口上方三角山花或拱券装饰；
- 长形拱窗配石材窗框、上下层对齐；四坡/双坡红瓦屋顶，檐口线脚装饰；
- 东侧较低 1—2 层配楼带老虎窗；南立面为主立面朝向观众；
- 站房前设低矮开放式站台与铁轨；一台 1900 年代德国产蒸汽机车停靠站台，吐出柔和白汽，后挂铆接木质客车厢；
- 人物：德国铁路工程师（西装制服）、中国工人（短打布鞋）、少量长衫旅客；
- 碎石站前广场、稀疏松柏、背景可见铁路附属工房与仓库；
- 清晨侧光在建筑立面投下清晰阴影、机车蒸汽营造轻微空气感；
- 16:9 宽幅，无现代列车、无接触网、无柏油路面、无现代招牌。

## 三、备选取景 Prompt

### 3.1 站台侧视角（蒸汽机车与旅客上下车 · 2K / 16:9）

```
photorealistic vintage historical photograph style, 1904 China, warm golden-hour tone, subtle film grain, soft analog color palette, high detail, no modern elements.
Jiaoji Railway Jinan Station platform scene, 1904. A German steam locomotive with a tall brass-domed boiler and large driving wheels is stopped at the low open platform.
Passengers in early-1900s dress boarding wooden riveted carriages: Chinese men in long gowns and queues (still common in 1904), women in traditional jackets, a few Western travelers in suits and hats.
Station staff in uniform with caps; wooden benches on the platform; a handcart loaded with luggage.
The station building's arched windows and columned porch visible in the background; red-tiled roof and brick walls catching the warm afternoon light.
Steam rising from the locomotive, creating a soft hazy atmosphere; gravel ground, no concrete.
Wide 16:9 composition, historically accurate, no modern elements.
```

中文语义对照：
- 胶济铁路济南站站台场景，1904 年；
- 一台德国产蒸汽机车（黄铜圆顶锅炉、大驱动轮）停靠低矮开放式站台；
- 着 1900 年代初期服饰的旅客登乘铆接木质车厢：中国男性长衫辫子（1904 年仍常见）、女性传统袄裤、少量西方旅客（西装礼帽）；
- 制服帽站务人员、站台木长椅、手推行李车；
- 背景可见站房拱窗与柱廊门廊；红瓦屋顶与砖墙沐浴午后暖光；
- 机车蒸汽升腾营造柔和空气感；碎石地面，无水泥；
- 16:9 宽幅。

### 3.2 建筑正面近景（柱廊与拱窗细部 · 2K / 16:9）

```
photorealistic vintage historical photograph style, 1904 China, warm golden-hour tone, subtle film grain, soft analog color palette, high detail, no modern elements.
Close-up frontal view of Jiaoji Railway Jinan Station's main entrance, 1904.
Stone-columned porch with wide granite steps leading up to double wooden doors; above the porch, a triangular stone pediment or arched tympanum with subtle relief carving.
First and second floors with tall arched windows, stone surrounds and sills, red brick walls with neat mortar joints; decorative cornice band between floors.
Red tile roof with clean ridges and a small dormer window; a German imperial-era railway emblem or plaque above the entrance, 【存疑】 historically inferred, keep subtle.
A single German railway official in uniform standing at the top of the steps, holding documents.
Warm raking sunlight from the left, sharp architectural shadows, rich texture on brick and stone.
Wide 16:9 composition, architectural detail focus, no modern elements.
```

中文语义对照：
- 胶济铁路济南站主入口正面近景，1904 年；
- 石柱廊门廊 + 宽大花岗岩石台阶通向双扇木门；门廊上方三角石材山花或拱形拱心石带浅浮雕；
- 一二层高拱窗，石材窗框与窗台，红砖墙面工整灰缝；楼层间装饰性线脚带；
- 红瓦屋顶，屋脊齐整，小型老虎窗；入口上方可能有德帝国时期铁路徽章或铭牌【存疑】，保持微妙处理；
- 一名德国铁路官员身着制服立于台阶顶端，手持文件；
- 左侧暖调斜射光、建筑阴影锐利、砖石纹理丰富；
- 16:9 宽幅，建筑细节聚焦。

## 四、穿帮点自检（出图后对照《复原依据说明.md》第四节逐条核）

重点盯：无津浦站 32 米钟楼、无高耸钟塔、蒸汽机车非现代列车、1904 年服饰（辫子仍可存在）、碎石地面非柏油、德式新古典非 Jugendstil、红砖或石材墙面、无简体字、无接触网/高铁站台。

## 五、调用参数

- 模型：`agnes-image-2.1-flash`
- 尺寸：`2048x1152`（16:9）
- 注意：返回图片 URL 约 24h 有效，**即出即下载**到本目录
