# 铁公祠 · 生成 Prompt 设计稿

> ④历史场景复原 · 铁公祠 · 2026-07-29
> 依据：同目录《复原依据说明.md》。prompt 用英文（更稳），中文语义对照附后。
> 复原年代：清代乾隆至嘉庆年间（约 1790—1810 年代，铁公祠初建时期）。
> API 端点已切换为 https://apihub.agnes-ai.cn/v1（官方 2026 公告）。

## 一、统一画风段（三场景固定复用）

```
photorealistic vintage historical photograph style, 1790s-1810s Qing Dynasty China, warm golden-hour tone, subtle film grain, soft analog color palette, high detail, no modern elements
```

中文对照：写实历史照片风、清代乾隆至嘉庆年间、暖调黄金时刻、轻微胶片颗粒、柔和胶片色彩、高细节、无任何现代元素。

## 二、主样图 Prompt（铁公祠中轴线 · 清晨 · 2K / 16:9）

```
photorealistic vintage historical photograph style, 1790s-1810s Qing Dynasty China, warm golden-hour tone, subtle film grain, soft analog color palette, high detail, no modern elements.
A Qing Dynasty memorial temple (cìtáng) by the edge of Daming Lake in Jinan, seen from the central axis approaching the main gate. The temple faces south, built in the late 18th century.
A modest single-eaved hard-gable roof gatehouse with grey tiles, a horizontal plaque above the door with three Chinese characters, stone steps leading up to wooden double doors with simple nail studs, a pair of medium-sized stone lions flanking the entrance. Beyond the gate, a courtyard paved with grey stone slabs, lined with tall straight pine trees and clumps of bamboo on both sides.
At the far end of the courtyard stands the main hall, three bays wide, with a xieshan (hip-and-gable) roof in grey tiles, wooden columns on stone bases, and a simple bracket set under the eaves. Inside the open hall, an offering table with bronze incense burners and candlesticks is visible, with a spirit tablet at the center.
To the right side of the courtyard, a stone stele on a bixi tortoise base stands under the shade of pine trees. Through gaps in the trees, Daming Lake shimmers in the distance—lotus leaves, weeping willows along the bank, and the faint silhouette of Thousand Buddha Mountain on the horizon.
Early morning light, soft golden sun rays filtering through pine branches, a solemn yet serene atmosphere, lake mist gently rising.
Wide 16:9 composition, historically accurate Qing Dynasty architecture, no modern buildings, no glass, no electric lights, no concrete.
```

中文语义对照：
- 清代乾隆至嘉庆年间写实历史照片风，清晨暖调柔光、胶片颗粒；
- 济南大明湖畔清代纪念祠堂，自中轴线由南向北推进视角；
- 大门为**单檐硬山顶**门屋，**青瓦**屋面，门额横匾三字，石阶通向带门钉的木板双开门，两侧中型石狮一对；
- 庭院青石铺地，两侧**松柏挺立**、翠竹成丛；
- 庭院尽头享堂正厅，**三开间，歇山顶，青瓦**，木柱下设石础，檐下斗栱简洁；敞开的厅内可见供案、铜香炉烛台、中央神主牌位；
- 庭院右侧松荫下立石碑一座，**赑屃驮碑**；透过树隙远眺大明湖——荷叶田田、岸边垂柳，天际线隐约可见千佛山影；
- 清晨柔光，金色阳光穿透松枝，庄严肃穆而宁静，湖面薄雾轻起；
- 16:9 宽幅，清代建筑准确还原，**无现代高楼、无玻璃、无电灯、无水泥**。

## 三、备选 Prompt（湖畔侧视 · 荷花垂柳 · 黄昏）

```
photorealistic vintage historical photograph style, 1790s-1810s Qing Dynasty China, warm golden-hour tone, subtle film grain, soft analog color palette, high detail, no modern elements.
Side view of Tie Gong Memorial Temple sitting directly on the bank of Daming Lake at golden hour. The temple complex features grey-tiled roofs with gentle curves, white plaster walls with grey brick bases, wooden verandas facing the water. A stone balustrade runs along the lake edge, with lotus plants in full bloom and weeping willows trailing their branches into the water.
In the courtyard, a stone incense burner with wisps of smoke, several stone steles standing in a row under pine trees. Two scholars in Qing Dynasty robes and caps stand quietly by the balustrade, looking out at the lake. The water reflects the warm sunset colors, and the distant Thousand Buddha Mountain is silhouetted in purple haze.
Late afternoon golden light, peaceful and reverent atmosphere, historically accurate Qing clothing and architecture.
Wide 16:9 composition, no modern elements, no motorboats, no power lines.
```

中文语义对照：
- 清代铁公祠大明湖畔侧视，黄昏黄金时刻；
- 祠堂建筑群**青瓦屋顶微翘**，白灰墙面青砖基座，临水设木构游廊；湖畔石栏蜿蜒，荷花盛开，垂柳拂水；
- 庭院中石香炉一缕青烟，松树下立数通石碑；两位身着**清代长袍暖帽**的士人静静伫立栏边，眺望湖景；
- 水面倒映暖色夕阳，远处千佛山紫霭剪影；
- 午后金光，宁静肃穆，清代服饰与建筑历史准确；
- 16:9 宽幅，无现代元素，无机动船，无电线。

## 四、穿帮点自检（出图后对照《复原依据说明.md》第四节逐条核）

重点盯：非明代建筑（清代 1792 年初建）、青瓦非黄瓦琉璃瓦、无现代高楼与电线杆、清代服饰非民国、无玻璃电灯水泥、湖畔无机动船、祠堂规模适中非宫殿。

## 五、调用参数

- 模型：`agnes-image-2.1-flash`
- 尺寸：`2048x1152`（16:9）
- 注意：返回图片 URL 约 24h 有效，**即出即下载**到本目录
