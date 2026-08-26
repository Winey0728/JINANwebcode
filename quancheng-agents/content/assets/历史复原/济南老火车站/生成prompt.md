# 济南老火车站 · 生成 Prompt 设计稿

> ④历史场景复原 · 场景一 · 2026-07-29
> 依据：同目录《复原依据说明.md》。prompt 用英文（更稳），中文语义对照附后。
> 复原年代：1920—30 年代民国盛期（避开 1958 年加建）。
> API 端点已切换为 https://apihub.agnes-ai.cn/v1（官方 2026 公告）。

## 一、统一画风段（三场景固定复用）

```
photorealistic vintage historical photograph style, 1920s-1930s China, warm golden-hour tone, subtle film grain, soft analog color palette, high detail, no modern elements
```

中文对照：写实历史照片风、民国二三十年代、暖调黄金时刻、轻微胶片颗粒、柔和胶片色彩、高细节、无任何现代元素。

## 二、主样图 Prompt（站前广场视角 · 首张验收图 · 2K / 16:9）

```
photorealistic vintage historical photograph style, 1920s-1930s China, warm golden-hour tone, subtle film grain, soft analog color palette, high detail, no modern elements.
The old Jinan Railway Station (Jinpu Railway Station), a German Jugendstil-style train station built in 1911, front south facade seen from the station square at eye level with slight upward angle.
A tall cylindrical clock tower, 32 meters high, rises as the composition center slightly right of frame, topped with a Romanesque round dome (NOT a pointed spire), with four large round white clock faces with black hands near the top, and spiral vertical slit windows winding up the tower body.
To the left of the tower, the main waiting hall with a large arched double-pitched tile roof and tall arched windows; to the right of the hall, a low semicircular green copper dome over the ticket office; on the far side a three-story annex with dormer windows on the roof.
Wall base of rough granite mushroom stones, wide stone steps leading to a columned entrance porch, small triangular and semicircular skylights alternating under the eaves.
A few travelers in 1920s Chinese dress (long gowns, qipao, western suits) walking across the square, one rickshaw, pine trees near the windows, late afternoon sunlight casting long shadows, gentle atmospheric haze.
Wide 16:9 composition, historically accurate, no cars, no asphalt markings, no traffic lights, no modern signs.
```

中文语义对照：
- 民国二三十年代写实历史照片风，暖调黄昏光、胶片颗粒；
- 津浦铁路济南站南立面全景，站前广场平视微仰；
- 32 米圆柱形钟楼为构图中心偏右，**罗马式圆顶（非尖顶）**，上部四面白色圆形大钟黑指针，塔身螺旋竖向长窗；
- 钟楼左侧候车大厅拱形双坡瓦屋顶与高大拱窗，大厅东侧低矮绿色半圆售票室穹顶，一侧三层配楼带老虎窗；
- 蘑菇石（粗花岗岩）墙基、宽石台阶 + 柱廊入口、檐下三角/半圆交错小天窗；
- 广场上长衫/旗袍/西装旅客若干、黄包车一辆、窗前松柏、斜阳长影、轻微空气感；
- 16:9 宽幅，无汽车、无标线、无红绿灯、无现代招牌。

## 三、穿帮点自检（出图后对照《复原依据说明.md》第四节逐条核）

重点盯：圆顶非尖顶、四面钟、绿色售票室穹顶、石墙基、无 1958 加建、无现代元素、繁体竖排（若出现文字）。

## 四、调用参数

- 模型：`agnes-image-2.1-flash`
- 尺寸：2K，16:9
- 注意：返回图片 URL 约 24h 有效，**即出即下载**到本目录
