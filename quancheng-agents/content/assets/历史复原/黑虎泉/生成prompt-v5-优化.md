# 黑虎泉 · i2i 生成 Prompt v5（优化调试稿）

> 用途：在 Agnes AI（agnes-image-2.1-flash）图生图流程中迭代调试。
> 2026-08-19：基于用户提供的 v4 反馈（零人物/古朴色调/浅碧水色/虎头按高清参考图）与用户手写长 prompt 的失败诊断重写。
> 底图：`_参考照片/清末-单虎头-池边人群合影.jpeg`；虎头参考：`黑虎泉虎头高清图片1.png`、`黑虎泉高清图片2.png`

---

## 一、原长 prompt 的失败诊断（为什么"不满意"是结构性的）

1. **过长过载**：原文约 900 词、数十条结构指令。扩散模型对靠前的 token 权重更高，后半段的精细约束（"one-fifth of the width""zero gaps between three surfaces"）基本被丢弃，前后指令还会互相打架。
2. **构图与底图冲突**：i2i 的构图由底图锚定（机制见文末）。原文写"45-degree from southeast looking slightly down""wall extends to top edge"——这是在**描述一张不存在的新构图**，与清末老照片底图的视角不符，模型被迫"重建场景"，于是穿帮、变形。
3. **虎头描述方向错了**：原文要 "guardian lion + tiger stripes"（石狮+虎纹），而真实虎头（见两张高清参考图）是**无纹饰的朴拙块状兽首（霸下风）**。"stripe patterns" 直接把模型引向雕花石狮——v4 的虎头就是这么歪的。
4. **否定词轰炸**：十余个 "no X"。扩散模型对 "no railings" 里的 "railings" 同样有注意力，否定越多反而越容易画出被否定的东西。否定项必须**精简到 3 条以内、放在末尾**。
5. **"黑虎泉"三字直出不可靠**：图像模型渲染可读汉字的失败率极高，要求 "clearly legible 黑虎泉" 只会得到鬼画符。碑刻题字应**生图时放弃、后期 PS 补上**，或接受模糊处理。

## 二、优化后的 prompt（v5 · i2i 主用版）

```
Transform into a photorealistic hand-tinted late-Qing photograph, c.1890, warm desaturated olive-sepia tone, subtle film grain, soft analog palette.
Keep the composition of the reference photo exactly: a rough grey-brown limestone block wall rising directly behind the spring pool, weathered blocks with dark water stains, small grass tufts in upper crevices.
Embedded flush in the wall: ONE ancient rustic stone beast-head spout (Chinese baxia style) — a plain blocky carving, wide squared open mouth, bulging round eyes, deeply incised curled eyebrows, heavily eroded and chipped, mottled grey-brown stone with pale lichen. No stripes, no ornament, no polish.
One powerful stream of clear water gushes horizontally from the beast's open mouth into the pool; two plain square side outlets on the same wall trickle gently.
Pool water translucent pale jade-green, rough stone bottom faintly visible, white splash at the impact point.
Rough stone platform borders the pool; worn stone steps meet the water directly.
Weeping willow branches frame only the far left and right edges; center unobstructed.
Golden-hour light from upper right, long soft shadows, warm haze, serene and untouched.
No people. No railings, fences or buildings. No modern elements. No text.
```

约 190 词。要点：**首句定风格，次句"Keep the composition of the reference photo"把构图权交还底图**，元素按优先级递减排列，否定项仅 3 组放末尾。

## 三、i2i 调用参数（沿用已踩通的配置）

- `POST https://apihub.agnes-ai.cn/v1/images/generations`，model `agnes-image-2.1-flash`
- size `2048x1152`（实际输出约 1312×736）
- `extra_body.image`：公网 URL 数组 = **[清末老照片底图, 虎头高清1, 虎头高清2]**（本地图先传 filebin.net 取 302 签名直链，900 秒内调用；Base64 会触发 Cloudflare 403）
- **不要传** `response_format`（该模型不支持，400）
- 返回 URL 约 24h 有效，即下即存

## 四、调试记录表

| 版本 | 改动 | 结果 | 结论 |
|---|---|---|---|
| v3 | 三图 i2i，有人物，鲜亮色调 | 虎头偏写实动物园风；左上角金属栏杆穿帮 | 人物和栏杆需强约束 |
| v4 | 零人物+古朴色调+浅碧水 | 一次通过；但虎头仍偏雕花石狮感 | 色调/水色/人物已收敛；虎头描述方向错误 |
| v5 | 虎头改"无纹朴拙霸下"；构图交还底图；删题字 | 见下方 v5a–d | 4 张连跑完成 |
| v5a | 同 v5 | 零人物✅ 古朴色调✅ 虎头朴拙✅；但**画面下半部约 40% 为纯黑带**，泉池水面完全缺失 | ❌ 废片（严重渲染缺陷） |
| v5b | 同 v5 | 零人物✅；虎头块状霸下风、方阔口、鼓目、刻纹卷眉、地衣斑驳，最贴近高清参考✅；两侧方孔✅；水浅碧透亮、池底石块可见✅；暖旧低饱和✅；柳枝只框两边、石板平台入水；无栏杆/现代元素/文字✅ | ✅ **四张中最佳，推荐** |
| v5c | 同 v5 | 零人物✅ 色调✅ 水色✅ 两方孔✅ 无穿帮✅；但虎头偏圆鼓狮面、鬃卷装饰偏多、口部不如 b 方阔 | 可用，逊于 b |
| v5d | 同 v5 | 零人物✅ 色调✅ 水色✅ 无穿帮✅；虎头风化感强但偏狮面、口部偏圆，构图右侧石台略显多余 | 可用，逊于 b |
| 对照-纯文生图 | 同 v5 prompt，**payload 不带 image 字段** | `_对照-v5-纯文生图.png`：虎头正面居中+两方孔+浅碧池+柳枝框边——**构图与 v5b/v5d 几乎同一家族** | 关键证据 |
| 对照-带图 | 同 v5 prompt + 三图新鲜签名直链（签发后 <1 分钟内调用，确未过期） | `_对照-v5-带图.png`：与纯文生图版构图**几乎一致**（正面居中虎头、两方孔、池在下、柳框边），**完全没有继承清末底图的 45° 侧视/高台/拱洞/人群结构** | 见下"对照结论" |

### 对照实验结论（2026-08-20，决定性）

1. **i2i 的"构图锚定"基本没有生效**：带图版与纯文生图版构图同为"虎头正面居中"自由发挥，与清末底图的 45° 侧视、高台、拱洞、人群毫无关系。此前 v5 四张的正面居中构图**不是底图锚定的结果，而是 prompt 文本驱动的结果**（prompt 里"wall rising directly behind the pool""center unobstructed"等描述本身导向正面构图）。
2. **虎头参考图的作用无法从输出区分**：带图版虎头与纯文生图版风格相近（prompt 已把虎头形制写得很细），无法证明两张虎头高清图产生了可辨识的贡献；v5b 的虎头质量更可能来自 prompt 描述而非参考图。
3. **时效存疑点被放大**：v5c/v5d 调用时 filebin 签名链（900s）很可能已过期，但 4 张输出风格一致——侧面印证 image 输入对该端点影响极弱或被静默忽略。
4. **机制修正**：`agnes-image-2.1-flash` 的 `/images/generations` + `extra_body.image` 实质表现≈**文生图 + 至多微弱的风格参考**，不是真正意义上的图生图（无 denoise/strength 参数可控）。若项目需要严格的"以老照片为底"构图继承，此端点做不到，应改用支持 strength/denoise 的 i2i 接口（如 Stable Diffusion img2img、即梦/可灵图生图等），或走"生成图 + 老照片后期合成"路线（见第五节降级方案）。

### 模型对比（2026-08-20，v5 prompt 纯文生图，2 张/模型）

**Agnes 全量模型列表**：`agnes-2.0-flash`、`agnes-2.5-flash`（文本类）；`agnes-image-2.0-flash`、`agnes-image-2.1-flash`（图像类，仅此两个）；`agnes-video-v2.0`（视频类）。**没有比 2.1 更强的图像模型**（无 pro/plus 版本）。

| 模型 | 结果 | 结论 |
|---|---|---|
| agnes-image-2.0-flash-1 | `_模型对比/agnes-image-2.0-flash-1.png`：四标准基本达成（零人物✅ 古朴色调✅ 浅碧水✅ 无穿帮✅），但虎头鬃卷装饰偏多、偏狮面 | 逊于 v5b |
| agnes-image-2.0-flash-2 | `_模型对比/agnes-image-2.0-flash-2.png`：四标准达成，虎头块状侵蚀感不错、接近 v5b 水平，但整体细节锐度略软 | 约等于 v5b，无提升 |
| 稳定性 | 2.0 连跑时 2 次 503 "Service busy"（重试后成功）；2.1 全程未遇 503 | 2.1 更稳 |

**批量建议（20 个点位）：继续用 `agnes-image-2.1-flash`**——平台上没有更强的图像模型，2.0 质量无提升且稳定性更差；批量时按"文生图 + 精细 prompt"思路设计（参考图对构图无锚定作用），并控制并发、加 503 重试退避。

## 五、若 v5 仍不满意的降级方案

1. **题字执念**：生图放弃文字 → 出图后用 PS/图像编辑把"黑虎泉"碑刻 P 上去（控制力 100%）
2. **构图执念**：换底图——找一张视角本身就符合要求的照片，比用 prompt 对抗底图有效得多
3. **虎头仍不像**：裁虎头高清图单独 i2i 一张"虎头特写"，再把整体场景与特写做后期合成

---

## 附：Agnes AI 图生图机制说明（实测推断，非官方文档）

见同目录《i2i试点验收卡.md》与项目交接文档。核心结论：i2i 不是"把参考图拼进去"，而是**底图锚定构图 + 参考图注入风格/主体特征 + prompt 引导重绘细节**（详见对话中的完整解释）。
