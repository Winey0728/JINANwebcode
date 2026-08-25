import { motion } from 'framer-motion';
import { Layers, Brain, MapPin, GraduationCap } from 'lucide-react';

const highlights = [
  {
    icon: Layers,
    title: '文化整合',
    description: '整合泉水、名士、红色、古城、商埠五大文化体系，全方位展现济南历史文化底蕴',
    color: 'from-cyan-500 to-teal-500',
  },
  {
    icon: Brain,
    title: 'AI赋能',
    description: '智能问答、语音讲解、个性化路线规划，让文化探索更加智能便捷',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: MapPin,
    title: '虚拟漫游',
    description: '老照片、360°全景、历史场景复原，沉浸式体验济南的过去与现在',
    color: 'from-teal-500 to-emerald-500',
  },
  {
    icon: GraduationCap,
    title: '学术支撑',
    description: '高校研究资源，数据准确严谨，为文化研究提供可靠的数字依据',
    color: 'from-sky-500 to-blue-500',
  },
];

export default function HighlightsSection() {
  return (
    <section id="highlights" className="w-full py-20 md:py-28 bg-gradient-to-b from-background to-cyan-50/30">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-cyan-600 font-medium text-sm tracking-widest mb-3">
            CORE FEATURES
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            平台核心亮点
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            以数字化手段活化济南水系文化，打造集研究、展示、互动于一体的数字人文平台
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl border border-border/50 transition-all duration-300"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
