import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LayoutGroup } from 'framer-motion';
import { Camera, Globe, BookOpen, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Info, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MOCK_PHOTOS } from '@/data/photos';
import { MOCK_PANORAMAS } from '@/data/panoramas';
import { toast } from 'sonner';
import { Image } from '@/components/ui/image';

const tourModes = [
  { id: 'photos', icon: Camera, label: '老照片相册' },
  { id: 'panorama', icon: Globe, label: '全景漫游' },
  { id: 'flipbook', icon: BookOpen, label: 'Flipbook 翻书' },
];

const flipbooks = [
  {
    id: '1',
    title: '济南府城图志',
    cover: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=400&h=500&fit=crop',
    description: '清代济南府城全貌舆图集',
  },
  {
    id: '2',
    title: '泉水名胜记',
    cover: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=400&h=500&fit=crop',
    description: '济南七十二名泉图文志',
  },
  {
    id: '3',
    title: '名士风流',
    cover: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=500&fit=crop',
    description: '济南历代名士传记画册',
  },
  {
    id: '4',
    title: '商埠往事',
    cover: 'https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=400&h=500&fit=crop',
    description: '济南开埠百年历史影像',
  },
];

export default function VirtualTourSection() {
  const [activeMode, setActiveMode] = useState('photos');

  return (
    <section id="virtual-tour" className="w-full py-20 md:py-28 bg-gradient-to-b from-cyan-50/30 to-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-cyan-600 font-medium text-sm tracking-widest mb-3">
            VIRTUAL TOUR
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            虚拟漫游
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            三种漫游模式，带你穿越时空，沉浸式感受济南水系文化的独特魅力
          </p>
        </motion.div>

        {/* 模式切换 */}
        <LayoutGroup>
          <div className="flex justify-center mb-10">
            <div className="inline-flex bg-muted p-1 rounded-full">
              {tourModes.map((mode) => {
                const Icon = mode.icon;
                const isActive = activeMode === mode.id;
                return (
                  <button
                    key={mode.id}
                    onClick={() => setActiveMode(mode.id)}
                    className={`relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                      isActive ? 'text-white' : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="tourModeBg"
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 shadow-md"
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10 inline-flex items-center gap-2">
                      <Icon className="w-4 h-4" />
                      {mode.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </LayoutGroup>

        {/* 内容区 */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeMode}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {activeMode === 'photos' && <PhotosMode />}
            {activeMode === 'panorama' && <PanoramaMode />}
            {activeMode === 'flipbook' && <FlipbookMode />}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

// === 老照片相册 ===
function PhotosMode() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedPhoto, setSelectedPhoto] = useState<typeof MOCK_PHOTOS[0] | null>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const scrollAmount = 400;
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <div className="relative">
      {/* 左右箭头 */}
      <button
        onClick={() => scroll('left')}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-foreground hover:bg-cyan-50 transition-colors -ml-4"
        aria-label="向左滚动"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={() => scroll('right')}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-foreground hover:bg-cyan-50 transition-colors -mr-4"
        aria-label="向右滚动"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* 横向滚动容器 */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide py-4 px-2 snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {MOCK_PHOTOS.map((photo, index) => (
          <motion.div
            key={photo.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            onClick={() => setSelectedPhoto(photo)}
            className="shrink-0 w-[320px] md:w-[400px] snap-start cursor-pointer group"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow">
              <Image
                src={photo.imageUrl}
                alt={photo.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 sepia-[0.3] group-hover:sepia-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                <span className="inline-block px-2 py-0.5 rounded bg-amber-600/80 text-xs mb-2">
                  {photo.era}
                </span>
                <h3 className="text-lg font-semibold mb-1">{photo.name}</h3>
                <p className="text-sm text-white/80 line-clamp-2">{photo.description}</p>
              </div>
              <div className="absolute top-3 right-3 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="w-5 h-5 text-white" />
              </div>
            </div>
          </motion.div>
        ))}
        {/* 补充更多照片占位 */}
        {[4, 5, 6].map((num) => (
          <div
            key={`extra-${num}`}
            className="shrink-0 w-[320px] md:w-[400px] snap-start cursor-pointer group"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg bg-muted flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <Camera className="w-12 h-12 mx-auto mb-2 opacity-50" />
                <p className="text-sm">更多影像资料整理中...</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 大图查看 */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedPhoto(null)}
          >
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedPhoto.imageUrl}
                alt={selectedPhoto.name}
                className="w-full rounded-xl sepia-[0.2]"
              />
              <div className="mt-4 text-white text-center">
                <h3 className="text-xl font-semibold mb-1">{selectedPhoto.name}</h3>
                <p className="text-white/70">{selectedPhoto.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// === 全景漫游 ===
function PanoramaMode() {
  const [selectedScene, setSelectedScene] = useState(MOCK_PANORAMAS[0].id);
  const [zoom, setZoom] = useState(1);
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null);
  const [panX, setPanX] = useState(0);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const scene = MOCK_PANORAMAS.find((p) => p.id === selectedScene) || MOCK_PANORAMAS[0];

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    startX.current = e.clientX - panX;
    if (containerRef.current) {
      containerRef.current.style.cursor = 'grabbing';
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    const newX = e.clientX - startX.current;
    // 限制拖动范围
    const maxPan = 200 * zoom;
    setPanX(Math.max(-maxPan, Math.min(maxPan, newX)));
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    if (containerRef.current) {
      containerRef.current.style.cursor = 'grab';
    }
  };

  const handleZoom = (delta: number) => {
    setZoom((prev) => Math.max(1, Math.min(2.5, prev + delta)));
  };

  return (
    <div className="space-y-4">
      {/* 控制栏 */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground">选择场景：</span>
          <Select value={selectedScene} onValueChange={setSelectedScene}>
            <SelectTrigger className="w-40">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {MOCK_PANORAMAS.map((p) => (
                <SelectItem key={p.id} value={p.id}>
                  {p.name}
                </SelectItem>
              ))}
              <SelectItem value="hu">护城河</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="secondary"
            size="icon"
            onClick={() => handleZoom(-0.2)}
            disabled={zoom <= 1}
          >
            <ZoomOut className="w-4 h-4" />
          </Button>
          <span className="text-sm text-muted-foreground w-16 text-center">
            {Math.round(zoom * 100)}%
          </span>
          <Button
            variant="secondary"
            size="icon"
            onClick={() => handleZoom(0.2)}
            disabled={zoom >= 2.5}
          >
            <ZoomIn className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* 全景视图 */}
      <div
        ref={containerRef}
        className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden bg-black cursor-grab select-none"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <motion.div
          className="absolute inset-0 h-full w-[150%]"
          style={{
            x: panX,
            scale: zoom,
            transformOrigin: 'center center',
          }}
        >
          <Image
            src={scene.imageUrl}
            alt={scene.name}
            className="w-full h-full object-cover"
            draggable={false}
          />
        </motion.div>

        {/* 热点标注 */}
        {scene.hotspots.map((hotspot) => (
          <button
            key={hotspot.id}
            onClick={(e) => {
              e.stopPropagation();
              setActiveHotspot(activeHotspot === hotspot.id ? null : hotspot.id);
            }}
            className="absolute z-10 group"
            style={{
              left: `calc(${hotspot.x}% + ${panX * 0.5}px)`,
              top: `${hotspot.y}%`,
              transform: 'translate(-50%, -50%)',
            }}
          >
            <div className="relative">
              <div className="absolute inset-0 w-8 h-8 rounded-full bg-cyan-400/40 animate-ping" />
              <div className="relative w-8 h-8 rounded-full bg-cyan-500 border-2 border-white shadow-lg flex items-center justify-center text-white">
                <Info className="w-4 h-4" />
              </div>
            </div>

            {/* 热点信息气泡 */}
            {activeHotspot === hotspot.id && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-56 p-3 bg-white rounded-xl shadow-xl"
              >
                <h4 className="font-semibold text-foreground text-sm mb-1">{hotspot.name}</h4>
                <p className="text-xs text-muted-foreground">{hotspot.description}</p>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full">
                  <div className="w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white" />
                </div>
              </motion.div>
            )}
          </button>
        ))}

        {/* 场景名称 */}
        <div className="absolute bottom-4 left-4 px-4 py-2 rounded-full bg-black/50 backdrop-blur-sm text-white text-sm">
          {scene.name} - {scene.description}
        </div>

        {/* 拖拽提示 */}
        <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-sm text-white/80 text-xs">
          ← 拖拽查看全景 →
        </div>
      </div>
    </div>
  );
}

// === Flipbook 翻书 ===
function FlipbookMode() {
  const [selectedBook, setSelectedBook] = useState<typeof flipbooks[0] | null>(null);

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {flipbooks.map((book, index) => (
          <motion.div
            key={book.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            onClick={() => {
              setSelectedBook(book);
              toast.info('翻书效果加载中...');
            }}
            className="group cursor-pointer"
          >
            <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2">
              <Image
                src={book.cover}
                alt={book.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              {/* 书脊效果 */}
              <div className="absolute left-0 top-0 bottom-0 w-2 bg-black/30" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h3 className="font-semibold mb-1">{book.title}</h3>
                <p className="text-xs text-white/70 line-clamp-2">{book.description}</p>
              </div>
            </div>
            <p className="mt-3 text-center text-sm text-muted-foreground group-hover:text-cyan-600 transition-colors">
              点击翻阅
            </p>
          </motion.div>
        ))}
      </div>

      {/* 翻书弹窗 */}
      <AnimatePresence>
        {selectedBook && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
            onClick={() => setSelectedBook(null)}
          >
            <button
              onClick={() => setSelectedBook(null)}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="w-full max-w-4xl aspect-[16/10] bg-amber-50 rounded-lg shadow-2xl flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-center">
                <BookOpen className="w-16 h-16 mx-auto mb-4 text-amber-700/50" />
                <h3 className="text-2xl font-semibold text-amber-900 mb-2">{selectedBook.title}</h3>
                <p className="text-amber-700/70 mb-6">{selectedBook.description}</p>
                <div className="flex items-center justify-center gap-4">
                  <Button variant="secondary">
                    <ChevronLeft className="w-4 h-4 mr-1" />
                    上一页
                  </Button>
                  <span className="text-amber-700/60 text-sm">第 1 / 24 页</span>
                  <Button variant="secondary">
                    下一页
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
                <p className="mt-6 text-xs text-amber-700/50">
                  （翻书效果演示 - 完整电子版正在制作中）
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
