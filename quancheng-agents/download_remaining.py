import os
import urllib.request

base_dir = r"W:\Agente_Inteligente\quancheng-agents\assets\历史复原"

photos = {
    "山东早期党史纪念馆_参考照片": [
        ("https://aka.doubaocdn.com/s/nDhIRFmh4h", "1925-中共山东地方执委会秘书处旧址.jpg"),
        ("https://aka.doubaocdn.com/s/6qJFhZU7bF", "1925-1927-省委旧址二楼场景.jpg"),
        ("https://aka.doubaocdn.com/s/dwyTks2UgD", "约1950-中共山东党史陈列馆老照片.jpg"),
    ],
    "李清照纪念堂_参考照片": [
        ("https://aka.doubaocdn.com/s/ZSRvZzcNCH", "1959-漱玉泉及李清照纪念堂.jpg"),
        ("https://aka.doubaocdn.com/s/kXbvex6Nxb", "1960年代-漱玉泉彩色明信片.jpg"),
        ("https://aka.doubaocdn.com/s/4pZTX46I0l", "1966年7月8日-漱玉泉旧影.jpg"),
    ],
    "王尽美邓恩铭旧址_参考照片": [
        ("https://aka.doubaocdn.com/s/6qJFhZU7bF", "1925-省委旧址内景.jpg"),
        ("https://aka.doubaocdn.com/s/Y7V43LVTZ8", "1925-省委旧址外景.jpg"),
        ("https://aka.doubaocdn.com/s/zgTls5UKnp", "约1950-五龙潭省委旧址老照片.jpg"),
    ],
    "百花洲_参考照片": [
        ("https://aka.doubaocdn.com/s/dd3gTpRBTZ", "1942-曲水亭街上的居民.jpg"),
        ("https://aka.doubaocdn.com/s/uGQhiQBE0h", "1942-曲水亭街护城河畔.jpg"),
        ("https://aka.doubaocdn.com/s/fbgcta44BI", "清末-曲水亭街黑白老照片.jpg"),
    ],
    "纬二路洋行旧址_参考照片": [
        ("https://aka.doubaocdn.com/s/32ZOeOZFEk", "1920-1940年代-经二路旧影.jpg"),
        ("https://aka.doubaocdn.com/s/OlkqVqBQJk", "约1930-德国领事馆旧影.jpg"),
        ("https://aka.doubaocdn.com/s/oPtcT3tDAm", "约1930-德华银行旧影.jpg"),
    ],
    "芙蓉街_参考照片": [
        ("https://aka.doubaocdn.com/s/rj0p5GEUdY", "1940年代-芙蓉街老照片.jpg"),
        ("https://aka.doubaocdn.com/s/OIOhh0LzZi", "1939-芙蓉街卖酒店铺.jpg"),
    ],
    "解放阁_参考照片": [
        ("https://aka.doubaocdn.com/s/E2cCVU37J5", "1939-济南老城墙东北角.jpg"),
        ("https://aka.doubaocdn.com/s/bOkIs870sh", "约1950-解放阁旧址老照片.jpg"),
        ("https://aka.doubaocdn.com/s/1IC7KRTt7P", "1948-济南战役突破口.jpg"),
    ],
    "辛弃疾纪念祠_参考照片": [
        ("https://aka.doubaocdn.com/s/yU7LovUtgd", "1940-大明湖铁公祠.jpg"),
    ],
    "铁公祠_参考照片": [
        ("https://aka.doubaocdn.com/s/yU7LovUtgd", "1940-大明湖铁公祠.jpg"),
    ],
    "黑虎泉_参考照片": [
        ("https://aka.doubaocdn.com/s/xv9iqejWNK", "1920年代-只有一个虎头的黑虎泉.jpg"),
    ],
}

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
}

for folder, items in photos.items():
    full_dir = os.path.join(base_dir, folder)
    os.makedirs(full_dir, exist_ok=True)
    for url, name in items:
        out_file = os.path.join(full_dir, name)
        if not os.path.exists(out_file):
            try:
                req = urllib.request.Request(url, headers=headers)
                with urllib.request.urlopen(req, timeout=60) as response:
                    data = response.read()
                    with open(out_file, 'wb') as f:
                        f.write(data)
                print(f"Downloaded: {out_file}")
            except Exception as e:
                print(f"Failed: {url} - {e}")
        else:
            print(f"Exists: {out_file}")
