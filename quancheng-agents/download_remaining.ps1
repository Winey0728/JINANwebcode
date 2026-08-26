$baseDir = "W:\Agente_Inteligente\quancheng-agents\assets\历史复原"

$photos = @{
    "山东早期党史纪念馆\_参考照片" = @(
        @{u="https://aka.doubaocdn.com/s/nDhIRFmh4h"; n="1925-中共山东地方执委会秘书处旧址.jpg"},
        @{u="https://aka.doubaocdn.com/s/6qJFhZU7bF"; n="1925-1927-省委旧址二楼场景.jpg"},
        @{u="https://aka.doubaocdn.com/s/dwyTks2UgD"; n="约1950-中共山东党史陈列馆老照片.jpg"}
    )
    "李清照纪念堂\_参考照片" = @(
        @{u="https://aka.doubaocdn.com/s/ZSRvZzcNCH"; n="1959-漱玉泉及李清照纪念堂.jpg"},
        @{u="https://aka.doubaocdn.com/s/kXbvex6Nxb"; n="1960年代-漱玉泉彩色明信片.jpg"},
        @{u="https://aka.doubaocdn.com/s/4pZTX46I0l"; n="1966年7月8日-漱玉泉旧影.jpg"}
    )
    "王尽美邓恩铭旧址\_参考照片" = @(
        @{u="https://aka.doubaocdn.com/s/6qJFhZU7bF"; n="1925-省委旧址内景.jpg"},
        @{u="https://aka.doubaocdn.com/s/Y7V43LVTZ8"; n="1925-省委旧址外景.jpg"},
        @{u="https://aka.doubaocdn.com/s/zgTls5UKnp"; n="约1950-五龙潭省委旧址老照片.jpg"}
    )
    "百花洲\_参考照片" = @(
        @{u="https://aka.doubaocdn.com/s/dd3gTpRBTZ"; n="1942-曲水亭街上的居民.jpg"},
        @{u="https://aka.doubaocdn.com/s/uGQhiQBE0h"; n="1942-曲水亭街护城河畔.jpg"},
        @{u="https://aka.doubaocdn.com/s/fbgcta44BI"; n="清末-曲水亭街黑白老照片.jpg"}
    )
    "纬二路洋行旧址\_参考照片" = @(
        @{u="https://aka.doubaocdn.com/s/32ZOeOZFEk"; n="1920-1940年代-经二路旧影.jpg"},
        @{u="https://aka.doubaocdn.com/s/OlkqVqBQJk"; n="约1930-德国领事馆旧影.jpg"},
        @{u="https://aka.doubaocdn.com/s/oPtcT3tDAm"; n="约1930-德华银行旧影.jpg"}
    )
    "芙蓉街\_参考照片" = @(
        @{u="https://aka.doubaocdn.com/s/rj0p5GEUdY"; n="1940年代-芙蓉街老照片.jpg"},
        @{u="https://aka.doubaocdn.com/s/OIOhh0LzZi"; n="1939-芙蓉街卖酒店铺.jpg"}
    )
    "解放阁\_参考照片" = @(
        @{u="https://aka.doubaocdn.com/s/E2cCVU37J5"; n="1939-济南老城墙东北角.jpg"},
        @{u="https://aka.doubaocdn.com/s/bOkIs870sh"; n="约1950-解放阁旧址老照片.jpg"},
        @{u="https://aka.doubaocdn.com/s/1IC7KRTt7P"; n="1948-济南战役突破口.jpg"}
    )
    "辛弃疾纪念祠\_参考照片" = @(
        @{u="https://aka.doubaocdn.com/s/yU7LovUtgd"; n="1940-大明湖铁公祠.jpg"}
    )
    "铁公祠\_参考照片" = @(
        @{u="https://aka.doubaocdn.com/s/yU7LovUtgd"; n="1940-大明湖铁公祠.jpg"}
    )
    "黑虎泉\_参考照片" = @(
        @{u="https://aka.doubaocdn.com/s/xv9iqejWNK"; n="1920年代-只有一个虎头的黑虎泉.jpg"}
    )
}

foreach ($dir in $photos.Keys) {
    $fullDir = Join-Path $baseDir $dir
    if (-not (Test-Path $fullDir)) { New-Item -ItemType Directory -Force -Path $fullDir | Out-Null }
    foreach ($photo in $photos[$dir]) {
        $outFile = Join-Path $fullDir $photo.n
        if (-not (Test-Path $outFile)) {
            try {
                Invoke-WebRequest -Uri $photo.u -OutFile $outFile -UseBasicParsing
                Write-Host "Downloaded: $outFile"
            } catch {
                Write-Host "Failed: $($photo.u) - $_"
            }
        } else {
            Write-Host "Exists: $outFile"
        }
    }
}
