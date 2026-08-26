# -*- coding: utf-8 -*-
"""Step step-image-edit-2 图像编辑：民国拱门老照片为底图 + v6 压缩中文 prompt（≤512字符）"""
import json, time, urllib.request, uuid, base64
from pathlib import Path

HERE = Path(__file__).parent
cfg = {}
for line in (HERE.parent.parent / ".env").read_text(encoding="utf-8").splitlines():
    if "=" in line and not line.strip().startswith("#"):
        k, v = line.split("=", 1)
        cfg[k.strip()] = v.strip().strip('"').strip("'")
KEY = cfg["STEP_API_KEY"]

IMG = HERE / "_参考照片" / "民国-泉池拱门黑白.jpeg"
PROMPT = ("转为1930年代手工上色写实老照片，暖调低饱和橄榄褐色，轻微胶片颗粒。"
          "保持原图构图不变：前景镂空石栏杆围合泉池，池后高耸灰褐毛石墙，"
          "墙中央上方小浅拱龛（空白石面）、下方贴近池面的大拱洞幽暗深邃。"
          "拱洞下方水线处一只古朴石兽首喷水口（霸下风：块状粗凿、方阔大口、鼓目、卷眉深刻、风化剥蚀、无纹饰无抛光），"
          "向池中水平喷出一股强劲清流，溅起白水花；同墙面两个素面方孔缓缓细流。"
          "池水透亮浅碧绿，池底石板隐约可见。墙上方露出灰瓦老砖房与冬季秃树。"
          "午后金色斜光，暖霭静谧，无人物，无金属栏杆，无现代元素，无文字。")
print("prompt chars:", len(PROMPT))

fields = {
    "model": "step-image-edit-2",
    "prompt": PROMPT,
    "response_format": "b64_json",
    "cfg_scale": "1.5",
    "steps": "28",
    "seed": "42",
}
boundary = uuid.uuid4().hex
body = bytearray()
for k, v in fields.items():
    body += f'--{boundary}\r\nContent-Disposition: form-data; name="{k}"\r\n\r\n{v}\r\n'.encode()
img = IMG.read_bytes()
body += f'--{boundary}\r\nContent-Disposition: form-data; name="image"; filename="base.jpeg"\r\nContent-Type: image/jpeg\r\n\r\n'.encode()
body += img + f'\r\n--{boundary}--\r\n'.encode()

req = urllib.request.Request(
    "https://api.stepfun.com/v1/images/edits", data=bytes(body),
    headers={"Authorization": "Bearer " + KEY,
             "Content-Type": f"multipart/form-data; boundary={boundary}"}, method="POST")
t0 = time.time()
try:
    with urllib.request.urlopen(req, timeout=300) as r:
        resp = json.loads(r.read().decode())
except urllib.error.HTTPError as e:
    print("HTTP_ERROR", e.code, e.read().decode()[:500]); raise SystemExit(1)
print(f"elapsed={time.time()-t0:.1f}s")
b64 = resp["data"][0].get("b64_json")
if not b64:
    print("resp keys:", resp["data"][0].keys()); raise SystemExit(1)
out = HERE / "样图v6-step-民国拱门-1.png"
out.write_bytes(base64.b64decode(b64))
print("saved:", out.name, out.stat().st_size, "bytes")
