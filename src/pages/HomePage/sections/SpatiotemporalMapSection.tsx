import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { LayoutGroup } from 'framer-motion';
import { Layers, Calendar, MapPin, Droplets, Waves, RotateCcw, X, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { MOCK_MAP_POINTS } from '@/data/mappoints';
import { Image } from '@/components/ui/image';

const layerOptions = [
  { key: 'all', label: '全部图层', icon: Layers },
  { key: 'spring', label: '泉水分布', icon: Droplets },
  { key: 'culture', label: '文化点位', icon: MapPin },
  { key: 'waterway', label: '水系脉络', icon: Waves },
];

const periodOptions = [
  { key: 'modern', label: '当代' },
  { key: 'ming', label: '明代' },
  { key: 'qing', label: '清代' },
  { key: 'republic', label: '民国' },
];

// 济南市区大致边界（用于限制拖动）
const JINAN_BOUNDS = {
  minLat: 36.6,
  maxLat: 36.75,
  minLng: 116.95,
  maxLng: 117.1,
};

const INITIAL_CENTER = { lat: 36.67, lng: 117.02 };
const INITIAL_ZOOM = 1;

export default function SpatiotemporalMapSection() {
  const [activeLayer, setActiveLayer] = useState('all');
  const [activePeriod, setActivePeriod] = useState('modern');
  const [zoom, setZoom] = useState(INITIAL_ZOOM);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [selectedPoint, setSelectedPoint] = useState<typeof MOCK_MAP_POINTS[0] | null>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const dragStart = useRef({ x: 0, y: 0 });

  // 过滤点位
  const filteredPoints = MOCK_MAP_POINTS.filter((p) => {
    const layerMatch = activeLayer === 'all' || p.type === activeLayer;
    // 简化时期匹配
    const periodMatch = activePeriod === 'modern'
      ? p.period === 'modern' || true // 现代显示所有
      : p.period === activePeriod;
    return layerMatch && (activePeriod === 'modern' ? true : periodMatch);
  });

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    dragStart.current = { x: e.clientX - offset.x, y: e.clientY - offset.y };
    if (mapRef.current) {
      mapRef.current.style.cursor = 'grabbing';
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    const newX = e.clientX - dragStart.current.x;
    const newY = e.clientY - dragStart.current.y;
    // 限制拖动范围
    const maxX = 200 * zoom;
    const maxY = 150 * zoom;
    setOffset({
      x: Math.max(-maxX, Math.min(maxX, newX)),
      y: Math.max(-maxY, Math.min(maxY, newY)),
    });
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    if (mapRef.current) {
      mapRef.current.style.cursor = 'grab';
    }
  };

  const handleReset = () => {
    setOffset({ x: 0, y: 0 });
    setZoom(INITIAL_ZOOM);
    setSelectedPoint(null);
  };

  const handleZoom = (delta: number) => {
    setZoom((prev) => Math.max(0.8, Math.min(2.5, prev + delta)));
  };

  // 计算点位在地图上的位置
  const getPointPosition = (lat: number, lng: number) => {
    const { minLat, maxLat, minLng, maxLng } = JINAN_BOUNDS;
    const x = ((lng - minLng) / (maxLng - minLng)) * 100;
    const y = ((maxLat - lat) / (maxLat - minLat)) * 100;
    return { x, y };
  };

  const typeColors: Record<string, string> = {
    spring: 'bg-cyan-500',
    culture: 'bg-amber-500',
    waterway: 'bg-blue-500',
  };

  return (
    <section id="spatiotemporal-map" className="w-full py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-cyan-600 font-medium text-sm tracking-widest mb-3">
            SPATIOTEMPORAL MAP
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            时空地图
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            穿越时空，探索济南水系文化的历史变迁与地理分布
          </p>
        </motion.div>

        {/* 控制面板 */}
        <div className="flex flex-wrap gap-4 mb-6 justify-between items-center">
          {/* 图层切换 */}
          <div className="flex flex-wrap gap-2">
            <span className="text-sm text-muted-foreground flex items-center gap-1 mr-2">
              <Layers className="w-4 h-4" />
              图层：
            </span>
            <LayoutGroup>
              {layerOptions.map((layer) => {
                const Icon = layer.icon;
                const isActive = activeLayer === layer.key;
                return (
                  <button
                    key={layer.key}
                    onClick={() => setActiveLayer(layer.key)}
                    className={`relative inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                      isActive
                        ? 'text-white'
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="mapLayerBg"
                        className="absolute inset-0 rounded-lg bg-cyan-500"
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10 inline-flex items-center gap-1.5">
                      <Icon className="w-3.5 h-3.5" />
                      {layer.label}
                    </span>
                  </button>
                );
              })}
            </LayoutGroup>
          </div>

          {/* 时期切换 */}
          <div className="flex flex-wrap gap-2">
            <span className="text-sm text-muted-foreground flex items-center gap-1 mr-2">
              <Calendar className="w-4 h-4" />
              时期：
            </span>
            <LayoutGroup>
              {periodOptions.map((period) => {
                const isActive = activePeriod === period.key;
                return (
                  <button
                    key={period.key}
                    onClick={() => setActivePeriod(period.key)}
                    className={`relative px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                      isActive
                        ? 'text-white'
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="mapPeriodBg"
                        className="absolute inset-0 rounded-lg bg-teal-600"
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{period.label}</span>
                  </button>
                );
              })}
            </LayoutGroup>
          </div>
        </div>

        {/* 地图容器 */}
        <div
          ref={mapRef}
          className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-cyan-50 border border-border shadow-lg cursor-grab select-none"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          {/* 地图底图（简化版） */}
          <motion.div
            className="absolute inset-0"
            style={{
              x: offset.x,
              y: offset.y,
              scale: zoom,
              transformOrigin: 'center center',
            }}
          >
            {/* 模拟地图背景 - 网格 + 水系 */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-teal-50 to-blue-50">
              {/* 网格线 */}
              <svg className="absolute inset-0 w-full h-full opacity-20">
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#0891b2" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>

              {/* 大明湖 */}
              <div
                className="absolute rounded-full bg-gradient-to-br from-cyan-300/60 to-blue-400/60 blur-sm"
                style={{
                  left: '48%',
                  top: '35%',
                  width: '18%',
                  height: '20%',
                  transform: 'translate(-50%, -50%)',
                }}
              />

              {/* 护城河/水系 - SVG 路径 */}
              <svg className="absolute inset-0 w-full h-full">
  <path
    d="M 30 50 Q 35 45 45 48 T 60 50 T 75 48"
    fill="none"
    stroke="#0ea5e9"
    strokeWidth="3"
    opacity="0.5"
  />
  <path
    d="M 50 25 Q 52 40 48 55 T 50 75"
    fill="none"
    stroke="#06b6d4"
    strokeWidth="2"
    opacity="0.4"
  />
  <path
    d="M 20 60 Q 35 65 50 62 T 80 65"
    fill="none"
    stroke="#0284c7"
    strokeWidth="2.5"
    opacity="0.4"
  />
</svg>

              {/* 古城轮廓 */}
              <div
                className="absolute border-2 border-dashed border-amber-400/40 rounded-lg"
                style={{
                  left: '35%',
                  top: '40%',
                  width: '30%',
                  height: '35%',
                }}
              />
            </div>

            {/* 点位标记 */}
            {filteredPoints.map((point) => {
              const pos = getPointPosition(point.lat, point.lng);
              const isSelected = selectedPoint?.id === point.id;
              return (
                <button
                  key={point.id}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedPoint(isSelected ? null : point);
                  }}
                  className="absolute z-10 group"
                  style={{
                    left: `${pos.x}%`,
                    top: `${pos.y}%`,
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  <div className="relative">
                    {isSelected && (
                      <div className="absolute inset-0 w-6 h-6 -m-1 rounded-full bg-white/50 animate-ping" />
                    )}
                    <div
                      className={`relative w-4 h-4 rounded-full ${typeColors[point.type]} border-2 border-white shadow-md transition-transform group-hover:scale-125 ${
                        isSelected ? 'scale-125 ring-2 ring-white ring-offset-2 ring-offset-cyan-50' : ''
                      }`}
                    />
                  </div>
                  {/* 点位名称（hover 显示） */}
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 px-2 py-0.5 rounded bg-white shadow text-xs font-medium text-foreground whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    {point.name}
                  </div>
                </button>
              );
            })}
          </motion.div>

          {/* 缩放控制 */}
          <div className="absolute top-4 right-4 flex flex-col gap-1 bg-white/90 backdrop-blur-sm rounded-lg shadow-md p-1">
            <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => handleZoom(0.2)}>
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            </Button>
            <div className="h-px bg-border mx-1" />
            <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => handleZoom(-0.2)}>
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            </Button>
          </div>

          {/* 复位按钮 */}
          <button
            onClick={handleReset}
            className="absolute bottom-4 right-4 w-10 h-10 rounded-lg bg-white/90 backdrop-blur-sm shadow-md flex items-center justify-center text-foreground hover:bg-white transition-colors"
            title="复位视图"
          >
            <RotateCcw className="w-4 h-4" />
          </button>

          {/* 图例 */}
          <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg shadow-md p-3 text-xs">
            <div className="font-medium text-foreground mb-2">图例</div>
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-cyan-500" />
                <span className="text-muted-foreground">泉水</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-amber-500" />
                <span className="text-muted-foreground">文化点位</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-blue-500" />
                <span className="text-muted-foreground">水系</span>
              </div>
            </div>
          </div>

          {/* 选中点位信息卡 */}
          {selectedPoint && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              className="absolute top-4 left-4 w-64 bg-white rounded-xl shadow-xl overflow-hidden z-20"
            >
              <div className="relative aspect-video">
                <Image
                  src={selectedPoint.imageUrl}
                  alt={selectedPoint.name}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setSelectedPoint(null)}
                  className="absolute top-2 right-2 w-7 h-7 rounded-full bg-black/40 flex items-center justify-center text-white hover:bg-black/60"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <div className="p-3">
                <div className="flex items-center gap-2 mb-1">
                  <div className={`w-2.5 h-2.5 rounded-full ${typeColors[selectedPoint.type]}`} />
                  <h4 className="font-semibold text-foreground">{selectedPoint.name}</h4>
                </div>
                <p className="text-xs text-muted-foreground line-clamp-2">{selectedPoint.description}</p>
              </div>
            </motion.div>
          )}

          {/* 比例尺 */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
            <div className="h-0.5 w-20 bg-foreground/30" />
            <span className="text-xs text-muted-foreground">1 km</span>
          </div>
        </div>

        <p className="text-center text-sm text-muted-foreground mt-4">
          拖动地图浏览 · 点击点位查看详情 · 数据持续更新中
        </p>
      </div>
    </section>
  );
}
