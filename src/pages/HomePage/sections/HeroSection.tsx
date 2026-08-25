import { motion } from 'framer-motion';
import { ChevronDown, Droplets, Compass } from 'lucide-react';
import { NavLink } from '@lark-apaas/client-toolkit-lite';
import { Image } from '@/components/ui/image';

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* 背景图 */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/jinan-lake-banner.jpg"
          alt="济南泉水风光"
          className="w-full h-full object-cover"
        />
        {/* 水墨渐变蒙层 */}
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/15 via-cyan-800/15 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/15 via-transparent to-background/15" />
      </div>

      {/* 水波纹装饰 */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full border border-cyan-300/20"
          animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full border border-cyan-400/15"
          animate={{ scale: [1, 1.8, 1], opacity: [0.2, 0, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/3 w-80 h-80 rounded-full border border-teal-300/20"
          animate={{ scale: [1, 1.6, 1], opacity: [0.25, 0, 0.25] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
      </div>

      {/* 主内容 */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-cyan-100 text-sm">
            <Droplets className="w-4 h-4" />
            泉城济南 · 数字人文
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: 'easeOut' }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-wide"
        >
          <span className="bg-gradient-to-r from-cyan-100 via-white to-teal-100 bg-clip-text text-transparent">
            汇水成脉
          </span>
          <br />
          <span className="text-3xl md:text-4xl lg:text-5xl font-light text-cyan-50/90">
            济南水系文化数字人文平台
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          className="text-lg md:text-xl text-cyan-50/80 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          以泉为脉，承载千年文化；以数为媒，焕发古城新韵
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={() => scrollToSection('cultural-resources')}
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-cyan-500 hover:bg-cyan-400 text-white font-medium transition-all duration-300 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-400/50 hover:-translate-y-0.5"
          >
            <Droplets className="w-5 h-5" />
            探索文化资源
          </button>
          <button
            onClick={() => scrollToSection('virtual-tour')}
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/10 backdrop-blur-md border border-white/30 text-white font-medium hover:bg-white/20 transition-all duration-300 hover:-translate-y-0.5"
          >
            <Compass className="w-5 h-5" />
            虚拟漫游体验
          </button>
        </motion.div>
      </div>

      {/* 向下滚动提示 */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        onClick={() => scrollToSection('highlights')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/70 hover:text-white transition-colors"
        aria-label="向下滚动"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-1"
        >
          <span className="text-xs tracking-widest">向下滚动</span>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.button>
    </section>
  );
}
