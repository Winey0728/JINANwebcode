import { motion } from 'framer-motion';
import { Droplets, Users, Flag, Building2, Store, Waves, ArrowRight } from 'lucide-react';
import { Image } from '@/components/ui/image';

const cultureSections = [
  {
    id: 'spring',
    icon: Droplets,
    title: '泉水文化核心区',
    subtitle: '趵突泉 · 黑虎泉 · 珍珠泉',
    description: '济南七十二名泉，家家泉水户户垂杨',
    image: '/liudawenhuabankuai_photo/quanhuiwenhuahenxinqu.jpg',
    gradient: 'from-cyan-600/80 to-teal-700/25',
  },
  {
    id: 'celebrity',
    icon: Users,
    title: '名士文化体验区',
    subtitle: '李清照 · 辛弃疾 · 老舍',
    description: '济南名士多，千古风流人物',
    image: 'https://ts1.tc.mm.bing.net/th/id/OIP-C.l6P8Pa5qwr3x728QPcXihgHaEJ?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
    gradient: 'from-blue-600/80 to-indigo-700/25',
  },
  {
    id: 'red',
    icon: Flag,
    title: '胶济铁路红色文化区',
    subtitle: '红色记忆 · 革命传承',
    description: '铭记红色历史，传承革命精神',
    image: '/liudawenhuabankuai_photo/jiaojitielu.jpg',
    gradient: 'from-rose-600/40 to-red-700/20',
  },
  {
    id: 'ancient',
    icon: Building2,
    title: '古城历史文化区',
    subtitle: '明府城 · 经纬路 · 老字号',
    description: '千年古城，街巷间的岁月印记',
    image: '/liudawenhuabankuai_photo/ancient-city.jpg',
    gradient: 'from-amber-600/80 to-orange-700/25',
  },
  {
    id: 'business',
    icon: Store,
    title: '商埠文化风情区',
    subtitle: '老商埠 · 洋行旧址 · 民国建筑',
    description: '百年商埠，中西合璧的建筑瑰宝',
    image: '/liudawenhuabankuai_photo/laoshangbu.jpg',
    gradient: 'from-violet-600/40 to-purple-700/20',
  },
  {
    id: 'ecology',
    icon: Waves,
    title: '小清河生态文化区',
    subtitle: '生态廊道 · 水运记忆',
    description: '清河悠悠，承载千年水运文明',
    image: '/liudawenhuabankuai_photo/xiaoqinghe.jpg',
    gradient: 'from-emerald-600/80 to-teal-700/25',
  },
];

export default function CultureSectionsSection() {
  const scrollToResources = (id: string) => {
    const el = document.getElementById('cultural-resources');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="culture-sections" className="w-full py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-cyan-600 font-medium text-sm tracking-widest mb-3">
            CULTURE ZONES
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            六大文化板块
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            济南水系文化涵盖六大主题板块，全方位展现泉城千年历史文化底蕴
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cultureSections.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                onClick={() => scrollToResources(item.id)}
                className="group relative overflow-hidden rounded-2xl cursor-pointer h-72"
              >
                {/* 背景图 */}
                <Image
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* 渐变遮罩 */}
                <div className={`absolute inset-0 bg-gradient-to-t ${item.gradient} opacity-80 group-hover:opacity-70 transition-opacity duration-300`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* 内容 */}
                <div className="relative z-10 h-full flex flex-col justify-end p-6 text-white">
                  <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                  <p className="text-white/80 text-sm mb-2">{item.subtitle}</p>
                  <p className="text-white/70 text-sm mb-4">{item.description}</p>
                  <div className="flex items-center gap-1 text-white/90 text-sm font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    了解更多
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
