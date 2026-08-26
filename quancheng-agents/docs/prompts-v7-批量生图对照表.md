# 泉城水脉 · prompts-v7 批量生图对照表（20 点位 · 暂不出图）

> 生成时间：2026-08-24。方法论 v7：视觉冲击力优先，不死扣老照片构图；英文文生图 prompt ≤512 字符；首句定风格时代；场景元素按视觉优先级递减；否定项 ≤3 组放末尾；绝不渲染可读汉字（招牌一律空白/无文字）。
> 生产端点：Step Plan（`STEP_PLAN_BASE_URL` + `step-image-edit-2`）。t2i 支持尺寸：1360x768 / 1184x896 / 1024x1024 / 768x1360 / 896x1184（横版 16:9 用 **1360x768**）。
> 史料红线：黑虎泉清末仅一只虎头，1931 年后才为三虎——涉及黑虎泉远景的点位（解放阁）按此口径修正。

---

## 1. 五三惨案纪念园

- **时代设定**：1928 年（惨案发生前济南古城日常，浩劫前的宁静，非暴力场景）
- **原 prompt 核心**：古城南门内青石街景北望，城墙城楼背景，两侧中式商铺繁体招牌，1920s 行人黄包车，沉郁庄重
- **改写后英文 prompt**（横版 1360x768）：

```
Photorealistic vintage photograph, 1928 Jinan, warm golden-hour tone, film grain. A stone-paved street inside the old walled city looking north to the massive grey-brick city wall and its gate tower. Brick-and-wood shops with grey tiled roofs, cloth awnings and blank signboards line both sides. Pedestrians in 1920s long gowns, a resting rickshaw puller, a loaded wheelbarrow. Fresh willow green, long soft shadows, solemn calm before catastrophe. No cars, no modern elements, no text.
```

- **视觉风险点**：城墙必须完整（1928 未拆除）；禁止出现战斗/日军元素——模型见"1928 Jinan"可能联想战争，prompt 已避免 Incident 字眼。

## 2. 五龙潭

- **时代设定**：清代中后期（约 1780—1900，避开元代五龙庙形制存疑）
- **原 prompt 核心**：开阔自然泉潭深碧水色，多眼涌泉波纹气泡，土岸/石岸垂柳槐荫，远处秦琼祠屋顶隐约，清代留辫市民
- **改写后英文 prompt**：

```
Photorealistic hand-tinted photograph, late-Qing Jinan c.1880, warm sepia tone, film grain. A broad natural spring pool, deep jade-green, far wider than an ordinary pond, many bubbling vents rippling the surface. Irregular stone and earthen shore, old willows trailing low, mossy stone steps to the water, grey-tiled shrine roofs half-hidden in far trees. Qing commoners with queue hairstyles, one with a tea-kettle shoulder pole, children at the shore. No cherry blossoms, no modern elements, no text.
```

- **视觉风险点**：樱花是现代公园标志，模型极易惯性补出，已列首位否定项；潭水须深碧不可清澈见底。

## 3. 千佛山舜耕遗迹

- **时代设定**：双层次——主图取远古舜耕传说（约前 2000 年，龙山文化期东夷部落）；备选隋代千佛崖（581—600）
- **原 prompt 核心**：刀耕火种山坡、部落首领持木柄石刃耒耜、粗麻兽皮椎髻、半地穴草屋炊烟、山麓泉溪
- **改写后英文 prompt**：

```
Photorealistic reconstruction, prehistoric China c.2000 BCE, misty dawn, earthy palette. A semi-cleared hillside on Mount Li, ancient Jinan: charred stumps and freshly turned soil from slash-and-burn farming. A tall tribal leader in rough hemp and hide, hair in a topknot, holds a wooden digging stick with a rope-bound stone blade; barefoot tribesmen plant with stone tools. Round thatched huts by a spring stream, thin smoke, primeval forest behind. No metal tools, no plow animals, no text.
```

- **视觉风险点**：模型易把"舜"画成冕旒帝王或汉服人物——prompt 已锚定 tribal/prehistoric；双层次出图时需分开，切勿同图混合。

## 4. 大明湖西南龙山遗址

- **时代设定**：新石器时代龙山文化（约前 2500—前 2000）
- **原 prompt 核心**：湿地旁环壕聚落，半地穴圆锥草顶屋，先民修整蛋壳黑陶杯，土筑城墙环壕，芦苇柳岸
- **改写后英文 prompt**：

```
Photorealistic reconstruction, Neolithic Longshan Culture China c.2500 BCE, warm daylight, ochre palette. A wetland-edge settlement: half-subterranean round houses with conical thatched roofs and wattle-and-daub walls, a low earthen wall and ring ditch behind. A figure in coarse linen and hide shapes a glossy jet-black eggshell-thin pottery cup; another arranges black goblets and tripod vessels on a woven mat. Reeds along calm water. No metal objects, no written characters, no modern elements.
```

- **视觉风险点**：遗址本身考古资料有限（名称/位置存疑），画面为城子崖类比的适度想象，说明文案需标注；严防青铜器/马匹乱入。

## 5. 小清河考古带

- **时代设定**：宋元时期（约 10—14 世纪，航运兴盛期）
- **原 prompt 核心**：木石码头伸入河面，单桅平底货船系缆，挑夫装卸麻袋竹筐，沿河木构商铺茶馆，柳岸芦苇，远处农田村庄
- **改写后英文 prompt**：

```
Photorealistic scene, Song-Yuan dynasty China c.1200, warm late-afternoon light. A busy dock on the Xiaoqing River, Jinan: a wooden-and-stone pier on calm clear water, three flat-bottomed wooden cargo boats with furled sails moored alongside. Porters in short jackets and headscarves carry baskets and hemp sacks on shoulder poles; robed merchants negotiate. Wooden shops and a riverside teahouse with blank signboards line the willow bank. No modern boats, no modern elements, no text.
```

- **视觉风险点**：码头/船型考古依据薄弱（存疑多），取宋元内河航运通式；算盘、服饰细节勿细究。

## 6. 山东早期党史纪念馆

- **时代设定**：1921—1922（山东党组织初创期；纪念馆本身为现代建筑，不复原）
- **原 prompt 核心**：民居内景夜聚，方桌煤油灯主光源，四五名长衫青年围读写议，线装小册子，纸窗透夜色
- **改写后英文 prompt**：

```
Photorealistic vintage photograph, 1921 Jinan, kerosene lamplight. Night interior of a modest whitewashed room: four young men in dark long gowns around a square wooden table, one reading a thin pamphlet, one holding a writing brush over an inkstone, others in quiet discussion. A kerosene lamp casts warm gold over coarse paper, thread-bound booklets and a ceramic teapot; the papered lattice window shows faint night blue. Serious, intimate, idealistic mood. No electric lights, no modern furniture, no text.
```

- **视觉风险点**：与王尽美邓恩铭旧址主题高度雷同——本点位定"室内夜聚"，王邓旧址改"院落白昼"以差异化；不追求真实人物肖像。

## 7. 护城河

- **时代设定**：晚清至民国（约 1850—1930，画舫夜游盛期，城墙完整）
- **原 prompt 核心**：黄昏画舫视角，朱红木船竹帘布篷船娘摇橹，船头纸灯笼，左侧明城墙与历山门城楼剪影，右岸垂柳，泉水河水清澈
- **改写后英文 prompt**：

```
Photorealistic hand-tinted photograph, late-Qing Jinan c.1900, dusk amber-to-blue sky, film grain. A vermilion wooden pleasure boat with carved window frames and half-rolled bamboo blinds drifts on the spring-fed city moat, poled by a boatwoman, a round paper lantern glowing at the bow. Left, the massive weathered Ming brick city wall with crenellations and a silhouetted gate tower; right bank, weeping willows trailing into exceptionally clear jade-green water. No motorboats, no electric lights, no text.
```

- **视觉风险点**："唯一泉水护城河"的清澈感是核心，防模型画成浑浊死水；城楼取北方官式，防江南化。

## 8. 明府城

- **时代设定**：清代中晚期（约 1880—1900，《老残游记》成书前后，"家家泉水户户垂杨"）
- **原 prompt 核心**：城门洞框景望城内，青石街延伸，泉水溪沿街石板小桥，灰瓦白墙四合院，长辫长衫行人挑担牵驴
- **改写后英文 prompt**：

```
Photorealistic hand-tinted photograph, late-Qing Jinan c.1890, golden-hour tone, film grain. View through the dark arch of a stone city gate into the old town: a narrow bluestone street stretches away, a clear spring stream alongside crossed by flat stone slab bridges, willows trailing over the water. Grey-tiled courtyard houses with whitewashed walls and blank shop signs. Pedestrians with queues and long robes, a vendor with a shoulder pole, a man leading a donkey. No cars, no modern elements, no text.
```

- **视觉风险点**：济南城墙"秀气"（周 12 里），防画成北京/西安式厚重城墙；民居防江南马头墙。

## 9. 李清照纪念堂

- **时代设定**：北宋哲宗至徽宗初（约 1090—1100，少女时期；1959 年纪念堂不复原）
- **原 prompt 核心**：士大夫书斋内景，13 岁少女浅绿褙子双鬟执笔，书架卷轴古琴香炉，纸窗透柳竹与远处泉光
- **改写后英文 prompt**：

```
Photorealistic scene, Northern Song Jinan c.1095, soft afternoon light. A scholar's study: a thirteen-year-old girl in a pale-green narrow-sleeved beizi jacket and long skirt, hair in simple double loops, sits at a low wooden desk holding a writing brush over an unrolled scroll, inkstone beside her. Behind, shelves of rolled scrolls, a guqin on a stand, an incense burner. Through the papered lattice window, willows, bamboo and a distant bubbling spring. No modern objects, no glass windows, no text.
```

- **视觉风险点**：防明清服饰/高髻凤冠/青花瓷（元后才成熟）；少女形象为意象非肖像，说明需标存疑。

## 10. 漱玉泉

- **时代设定**：北宋（约 1090—1120，李清照少年意象；泉与她的关联为后世附会【存疑】）
- **原 prompt 核心**：两米小石砌泉池极清见底，细密气泡如玉屑，宋代少女跪石板浣笔，竹蕉环绕，远处屋檐一角虚化
- **改写后英文 prompt**：

```
Photorealistic scene, Song dynasty Jinan c.1100, dappled late-afternoon light. A small stone spring pool barely two meters across, exceptionally clear water over a sandy bottom, fine bubbles rising like scattered jade. A twelve-year-old girl in a pale-green narrow-sleeved jacket and flowing skirt kneels on a slab, rinsing a writing brush in the water, an inkstone and scroll beside her. Bamboo and plantain leaves filter golden light, a grey-tiled roof corner behind. No modern elements, no glass, no text.
```

- **视觉风险点**：李清照关联系后世纪念性附会，图注必须标存疑；泉池须小巧，防画成大水池或喷泉。

## 11. 王尽美邓恩铭旧址

- **时代设定**：1921—1922（在济南革命活动期；具体据点多处不可考，取典型民居）
- **原 prompt 核心**：室内煤油灯伏案书写+站立阅读（与党史馆雷同）→ 本版改用备选院落场景差异化：石榴树下两青年交谈，石井辘轳，青砖小院
- **改写后英文 prompt**：

```
Photorealistic vintage photograph, 1921 Jinan, late-afternoon light, film grain. A small grey-brick courtyard of a traditional residence: two young men in dark long gowns talk quietly under a pomegranate tree, one holding a thin booklet and gesturing, the other listening with a resolute expression. A stone well with a wooden winch frame behind, low brick walls, a small wooden gate. Dappled golden light through the leaves. Earnest, secretive, purposeful mood. No modern elements, no electric lights, no text.
```

- **视觉风险点**：与党史馆室内夜聚场景雷同风险已通过"白昼院落"规避；不追求王/邓肖像还原。

## 12. 珍珠泉

- **时代设定**：清代盛期（康熙至乾隆，约 1690—1780，衙署园林格局最典型）
- **原 prompt 核心**：巡抚衙署后花园长方形青石泉池，万串气泡如珍珠升腾，北方官式亭榭红柱，太湖石，留辫官员观泉
- **改写后英文 prompt**：

```
Photorealistic hand-tinted photograph, Qing dynasty Jinan c.1720, bright daylight. A rectangular spring pool of blue-grey stone in a governor's yamen rear garden, crystal-clear jade-green water, fine bubble strings rising from the sandy floor like rolling pearls, never boiling. A northern-Chinese pavilion with upturned eaves and red columns by the pool, Taihu rockery, willows and bamboo. A Qing official with queue hairstyle watches from the pavilion. No modern elements, no glass, no text.
```

- **视觉风险点**：气泡须细密温和，防画成沸腾翻滚；亭榭防苏州园林化（取北方官式厚重）。

## 13. 百花洲

- **时代设定**：清代中晚期（约 1880—1900，文人雅集盛期）
- **原 prompt 核心**：泉水茶馆露台视角，不规则天然池沼，垂柳拂水睡莲，平板石桥，民居石阶入水，文人品茗妇人浣衣
- **改写后英文 prompt**：

```
Photorealistic hand-tinted photograph, late-Qing Jinan c.1890, golden-hour light. A spring-water teahouse terrace beside an irregular natural pond: low bamboo chairs and wooden tables with a purple-clay teapot. Willows trail slender branches into the clear rippling water, flat stone slab bridges over narrow inflowing streams. Whitewashed courtyard houses with grey tiles line the winding shore, some with stone steps to the water. A robed scholar reads, a woman washes clothes. No modern elements, no text.
```

- **视觉风险点**：防规则几何形池塘与南方吊脚楼；建筑密度须"疏密有致见水见天"。

## 14. 纬二路洋行旧址

- **时代设定**：1920 年代（民国盛期，"东方华尔街"华洋金融并存）
- **原 prompt 核心**：德式新古典银行四柱爱奥尼克门廊三角山花为视觉焦点，英式红砖洋行，铸铁围栏石狮，西装买办黄包车，早期黑色轿车
- **改写后英文 prompt**：

```
Photorealistic vintage photograph, 1920s Jinan commercial port, raking afternoon light. Wei'er Road financial street: a continuous wall of two- and three-story European classical banks, a grand German Neoclassical bank with granite steps, four-column Ionic portico and carved pediment, flanked by British red-brick buildings and a few hybrids. Cast-iron gates, stone lions. Clerks in Western suits, compradors in long gowns, waiting rickshaws, one early black automobile. No modern cars, no neon, no text.
```

- **视觉风险点**：早期汽车/电线杆/街灯是 1920s 合理元素勿误删；建筑层数不超 3 层，防现代高楼天际线。

## 15. 经二路商埠

- **时代设定**：1920 年代（自开商埠繁荣鼎盛期，1904 开埠）
- **原 prompt 核心**：中西合璧连续街墙（洋门面+四合院），拱券柱廊与青砖格扇交错，竖排招牌布幌，碎石路面黄包车，铸铁街灯法桐
- **改写后英文 prompt**：

```
Photorealistic vintage photograph, 1920s Jinan commercial port, warm late-afternoon light. Jing'er Road commercial axis: a continuous street wall of one- to three-story Chinese-Western hybrids, Western arched porches, pediments and cast-iron balconies mixed with grey-brick Chinese shops with lattice windows and tile roofs. Cloth banners and blank signboards above open shopfronts. Cobblestone street, pedestrians in long gowns and qipao, rickshaws, an early automobile. No modern cars, no asphalt, no text.
```

- **视觉风险点**：与纬二路差异化——经二路以"中西合璧商业街"为主，纬二路以"纯欧式金融街"为主，出图时对照防混。

## 16. 胶济铁路博物馆（原胶济铁路济南站）

- **时代设定**：1904 年建站初期（德据时期原貌；区别于已拆除的津浦站）
- **原 prompt 核心**：德式新古典对称两层站房，柱廊入口宽台阶，拱窗红瓦，东侧配楼老虎窗，蒸汽机车低站台，德国工程师与中国短打工人
- **改写后英文 prompt**：

```
Photorealistic vintage photograph, 1904 Jinan, morning side-light. The Jiaoji Railway station: a symmetrical two-story German Neoclassical building in red brick and stone, central columned porch with granite steps, tall arched windows, red-tiled hipped roof, a lower eastern annex with dormers. At the low open platform, a 1900s German steam locomotive breathing steam with riveted wooden carriages. German engineers in suits, Chinese laborers in short jackets. No tall clock tower, no overhead wires, no text.
```

- **视觉风险点**：最高危是画成津浦站 32 米 Jugendstil 钟楼——否定项首位锁定 no tall clock tower；1904 年男子留辫仍合理。

## 17. 芙蓉街

- **时代设定**：清末至民国初（约 1900—1910，商业繁荣期）
- **原 prompt 核心**：青石窄街前店后宅，油旋摊铁鏊蒸汽竹笼，半掩院门内方形芙蓉泉池与芙蓉花，街尽头文庙红墙琉璃瓦
- **改写后英文 prompt**：

```
Photorealistic vintage photograph, c.1905 Jinan, slanting morning light. A narrow lane of worn bluestone slabs glistening with dew, tight rows of grey-tiled shop-houses with open wooden shopfronts, blank signboards and cloth banners. Left, a vendor fries spiral pastries on a sizzling iron griddle beside stacked bamboo steamers. Right, a half-open courtyard gate reveals a small square spring pool with pink hibiscus. The red wall of the Confucian temple closes the vista. No cars, no modern elements, no text.
```

- **视觉风险点**：芙蓉泉是院内泉非街头喷泉，须"半掩门内可见"；小吃道具（油旋螺旋形）模型可能画不准，验收时细看。

## 18. 解放阁

- **时代设定**：双层——层次 A 清末（1880—1900，明城墙东南角风貌）；层次 B 1948 济南战役突破口（备选）
- **原 prompt 核心**：护城河对岸望城墙东南角敌台垛口，隔河黑虎泉"三个虎头"喷水，千佛山远影——**三虎口径有误，已按新史料改为清末单虎**
- **改写后英文 prompt**（层次 A）：

```
Photorealistic hand-tinted photograph, late-Qing Jinan c.1890. Across a clear moat, the southeastern corner of the Ming-era city wall: weathered blue-grey brick, ten meters high, crenellated parapets. Willows trail into the calm water. Right, the Black Tiger Spring: a stone pool with ONE single rustic stone beast-head spout gushing a powerful clear stream; only one spout existed before 1931. A woman washes clothes on the bank, hazy Mount Qianfo beyond. No pavilion on the wall, no modern buildings, no text.
```

- **视觉风险点**：⚠️ **年代口径修正**——原 prompt 层次 A 写"三个石雕虎头"，与"清末仅一虎、1931 才三虎"冲突，已改单虎；解放阁本体 1963 年建，任何版本都不得出现；层次 B（1948 三虎+硝烟战场）另作备选，出图前需用户确认是否触碰战争题材。

## 19. 辛弃疾纪念祠

- **时代设定**：南宋孝宗至光宗（约 1170—1190，壮年书斋；1980 年代纪念祠不复原）
- **原 prompt 核心**：醉里挑灯看剑——深夜书斋油灯，壮硕辛弃疾左手拨灯芯右手握剑，靛青直裰东坡巾，青瓷酒具，墙上剑弓，窗外月光竹影
- **改写后英文 prompt**：

```
Photorealistic scene, Southern Song China c.1180, oil-lamp warmth against cold moonlight. Night in a scholar-warrior's timber study. A robust man in his late thirties, reddish cheeks and short beard, in a dark indigo robe and askew square cap, adjusts the lamp wick with his left hand while his right grips a sheathed sword. On the desk: an ink-written scroll, inkstone, celadon wine pot and cup. A second sword and a bow on a wall rack. No glass windows, no blue-and-white porcelain, no text.
```

- **视觉风险点**：辛弃疾须武将体格（"壮健如虎"）防画成文弱书生；剑取宋代朴素制式，防明清装饰剑。

## 20. 铁公祠

- **时代设定**：清代乾隆至嘉庆（约 1790—1810，1792 初建期；祀明代铁铉，建筑为清代）
- **原 prompt 核心**：大明湖畔中轴线推进，硬山门屋悬匾石狮，松柏庭院，三开间歇山享堂供案牌位，赑屃碑，湖荷垂柳千佛山影，晨雾
- **改写后英文 prompt**：

```
Photorealistic hand-tinted photograph, Qing dynasty Jinan c.1800, soft morning light and lake mist. A modest memorial temple by Daming Lake: a single-eaved hard-gable gatehouse with grey tiles and a blank plaque, stone steps, two stone lions. Inside, a stone-paved courtyard with tall pines and bamboo; at the far end a three-bay main hall with grey hip-and-gable roof, an offering table with bronze incense burner. A stele on a tortoise base under the pines. No modern buildings, no glass, no text.
```

- **视觉风险点**：青瓦非黄琉璃（官修但非皇家）；门匾必须空白（"铁公祠"三字后期 P 上）；人物若取明代衣冠则与清代建筑年代错位，建议人物也用清代服饰。

---

## 附：全局风险清单（汇总）

| 点位 | 风险级别 | 说明 |
|---|---|---|
| 解放阁 | 🔴 高 | 层次 A 三虎→单虎口径已修正（原 prompt 有误）；1963 年建筑不得出现；层次 B 涉战争题材需用户确认 |
| 胶济铁路博物馆 | 🔴 高 | 极易混淆为津浦站钟楼造型，否定项已锁 |
| 大明湖西南龙山遗址 | 🟡 中 | 遗址命名/位置本身存疑，画面为考古类比想象 |
| 小清河考古带 | 🟡 中 | 码头形制考古依据薄弱 |
| 漱玉泉 / 李清照纪念堂 | 🟡 中 | 李清照关联均为后世附会，图注需标存疑 |
| 五三惨案纪念园 | 🟡 中 | 纪念园为后世选址（趵突泉内），非事件发生地；场景取古城街景规避 |
| 山东早期党史纪念馆 / 王尽美邓恩铭旧址 | 🟡 中 | 两点位内容雷同，已分别定为"室内夜聚"/"白昼院落"差异化 |
| 五龙潭 | 🟡 中 | 樱花惯性补全 |
| 千佛山舜耕遗迹 | 🟡 中 | 双历史层次不可混图；远古人物形象为龙山文化类比 |
| 铁公祠 | 🟡 中 | 清代建筑祀明人，人物服饰统一用清代 |
