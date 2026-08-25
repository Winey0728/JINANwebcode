import { motion, useSpring, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { BookOpen, Award, Database, FileText, CheckCircle2 } from 'lucide-react';

const researchValues = [
  {
    icon: BookOpen,
    title: '学术研究价值',
    description: '系统梳理济南水系文化脉络，为历史学、地理学研究提供数字支撑',
  },
  {
    icon: Award,
    title: '文化传承价值',
    description: '数字化保存珍贵文化遗产，让泉水文化在数字时代焕发新生',
  },
  {
    icon: Database,
    title: '数据整合价值',
    description: '整合多源异构文化数据，构建济南水系文化知识图谱',
  },
  {
    icon: FileText,
    title: '教育传播价值',
    description: '打造沉浸式文化学习平台，让更多人了解济南、爱上泉城',
  },
];

const stats = [
  { value: 72, suffix: '处', label: '七十二名泉', icon: DropletIcon },
  { value: 200, suffix: '+', label: '文化点位', icon: MapPinIcon },
  { value: 50, suffix: '+', label: '历史名人', icon: UserIcon },
  { value: 1000, suffix: '+', label: '文献资料', icon: BookIcon },
];

function DropletIcon({ className }: { className?: string }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" /></svg>;
}
function MapPinIcon({ className }: { className?: string }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>;
}
function UserIcon({ className }: { className?: string }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>;
}
function BookIcon({ className }: { className?: string }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></svg>;
}

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const spring = useSpring(0, { stiffness: 60, damping: 20 });
  const display = useTransform(spring, (v) => Math.round(v));
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started) {
          setStarted(true);
          spring.set(value);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, spring, started]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold text-white tabular-nums">
      <motion.span>{display}</motion.span>
      <span className="text-2xl md:text-3xl ml-1">{suffix}</span>
    </div>
  );
}

export default function AboutPlatformSection() {
  return (
    <section id="about-platform" className="w-full py-20 md:py-28 bg-gradient-to-b from-cyan-50/30 to-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* 标题 + 介绍 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block text-cyan-600 font-medium text-sm tracking-widest mb-3">
              ABOUT PLATFORM
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              关于济南水系文化数字人文平台
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                济南，这座以泉水闻名的历史文化名城，拥有两千六百多年的建城史。
                "家家泉水，户户垂杨"是她独特的城市风貌，"济南名士多"是她深厚的文化底蕴。
              </p>
              <p>
                济南水系文化数字人文平台以泉水为核心，整合名士文化、红色文化、古城文化、商埠文化等资源，
                运用数字技术构建一个集文化展示、学术研究、教育传播于一体的综合性数字人文平台。
              </p>
              <p>
                平台致力于通过数字化手段活化济南水系文化遗产，让千年泉文化在数字时代焕发新的生机与活力，
                为文化研究者提供学术支撑，为广大市民和游客提供沉浸式文化体验。
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold text-foreground mb-6">研究价值</h3>
            {researchValues.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-4 p-4 bg-white rounded-xl border border-border/50 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="shrink-0 w-12 h-12 rounded-lg bg-cyan-50 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-cyan-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* 数据统计 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-cyan-600 via-teal-600 to-blue-700 py-16 px-8 md:px-12"
        >
          {/* 装饰 */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                平台数据概览
              </h3>
              <p className="text-cyan-100/80">
                持续更新的文化资源数据库
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="flex justify-center mb-3">
                      <Icon className="w-8 h-8 text-cyan-100" />
                    </div>
                    <Counter value={item.value} suffix={item.suffix} />
                    <p className="text-cyan-100/80 mt-2 text-sm">{item.label}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
