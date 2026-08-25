import { useState, useEffect } from 'react';
import { NavLink } from '@lark-apaas/client-toolkit-lite';
import { Droplets, Mail, Phone, MapPin } from 'lucide-react';

const footerLinks = [
  {
    title: '快速导航',
    links: [
      { href: '#hero', label: '首页' },
      { href: '#about-platform', label: '平台介绍' },
      { href: '#cultural-resources', label: '文化资源' },
      { href: '#ai-agent', label: 'AI智能体' },
    ],
  },
  {
    title: '探索体验',
    links: [
      { href: '#virtual-tour', label: '虚拟漫游' },
      { href: '#spatiotemporal-map', label: '时空地图' },
      { href: '#culture-sections', label: '文化板块' },
      { href: '#highlights', label: '核心亮点' },
    ],
  },
  {
    title: '关于我们',
    links: [
      { href: '#about-us', label: '团队介绍' },
      { href: '#about-us', label: '联系我们' },
      { href: '#about-us', label: '合作交流' },
      { href: '#about-us', label: '意见反馈' },
    ],
  },
];

export default function Footer() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatDate = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    const weekdays = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
    const weekday = weekdays[date.getDay()];
    return `${year}年${month}月${day}日 ${weekday} ${hours}:${minutes}:${seconds}`;
  };

  return (
    <footer className="w-full bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* 品牌信息 */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-teal-500 flex items-center justify-center">
                <Droplets className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">济南水系文化</h3>
                <p className="text-sm text-cyan-200/70">数字人文平台</p>
              </div>
            </div>
            <p className="text-cyan-100/70 text-sm leading-relaxed mb-6 max-w-sm">
              以泉为脉，承载千年文化；以数为媒，焕发古城新韵。
              致力于用数字技术活化济南水系文化遗产，让千年泉文化在数字时代焕发新生。
            </p>
            <div className="space-y-2 text-sm text-cyan-100/70">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 shrink-0" />
                <span>jinan-water@example.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 shrink-0" />
                <span>山东省济南市历下区</span>
              </div>
            </div>
          </div>

          {/* 链接组 */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="font-semibold mb-4 text-white">{group.title}</h4>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <NavLink
                      to={link.href}
                      className="text-sm text-cyan-100/70 hover:text-white transition-colors"
                    >
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* 底部版权 */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-2 text-sm text-cyan-100/50">
            <p>© {currentTime.getFullYear()} 济南水系文化数字人文平台 · 版权所有</p>
            <p className="font-mono text-xs">{formatDate(currentTime)}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
