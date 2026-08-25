import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink } from '@lark-apaas/client-toolkit-lite';
import { Droplets, Menu, X, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';

const navItems = [
  { href: '#hero', label: '首页' },
  { href: '#about-platform', label: '平台介绍' },
  { href: '#cultural-resources', label: '文化资源' },
  { href: '#ai-agent', label: 'AI智能体' },
  { href: '#virtual-tour', label: '虚拟漫游' },
  { href: '#spatiotemporal-map', label: '时空地图' },
  { href: '#about-us', label: '关于我们' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState<'zh' | 'en'>('zh');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-lg shadow-sm border-b border-border/30 py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <NavLink to="#hero" className="flex items-center gap-2 group">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
              scrolled
                ? 'bg-gradient-to-br from-cyan-500 to-teal-500'
                : 'bg-white/20 backdrop-blur-sm border border-white/30'
            }`}>
              <Droplets className={`w-5 h-5 ${scrolled ? 'text-white' : 'text-white'}`} />
            </div>
            <span className={`font-bold text-lg transition-colors ${
              scrolled ? 'text-foreground' : 'text-white'
            }`}>
              济南水系文化
            </span>
          </NavLink>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? scrolled
                        ? 'text-cyan-600 bg-cyan-50'
                        : 'text-white bg-white/20'
                      : scrolled
                      ? 'text-muted-foreground hover:text-foreground hover:bg-muted'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            {/* Language Toggle */}
            <button
              onClick={() => setLang(lang === 'zh' ? 'en' : 'zh')}
              className={`hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                scrolled
                  ? 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
            >
              <Globe className="w-4 h-4" />
              {lang === 'zh' ? '中文' : 'EN'}
            </button>

            {/* Mobile Menu Trigger */}
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className={`lg:hidden ${
                    scrolled ? 'text-foreground' : 'text-white'
                  }`}
                >
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 p-0">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between p-4 border-b">
                    <div className="flex items-center gap-2">
                      <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center">
                        <Droplets className="w-5 h-5 text-white" />
                      </div>
                      <span className="font-semibold text-foreground">济南水系文化</span>
                    </div>
                    <SheetClose asChild>
                      <Button variant="ghost" size="icon">
                        <X className="w-5 h-5" />
                      </Button>
                    </SheetClose>
                  </div>
                  <nav className="flex-1 p-4 space-y-1">
                    {navItems.map((item) => (
                      <SheetClose asChild key={item.href}>
                        <NavLink
                          to={item.href}
                          className={({ isActive }) =>
                            `block px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                              isActive
                                ? 'text-cyan-600 bg-cyan-50'
                                : 'text-foreground hover:bg-muted'
                            }`
                          }
                        >
                          {item.label}
                        </NavLink>
                      </SheetClose>
                    ))}
                  </nav>
                  <div className="p-4 border-t">
                    <button
                      onClick={() => setLang(lang === 'zh' ? 'en' : 'zh')}
                      className="flex items-center gap-2 px-4 py-3 w-full rounded-lg text-sm font-medium text-foreground hover:bg-muted transition-colors"
                    >
                      <Globe className="w-4 h-4" />
                      {lang === 'zh' ? '切换到 English' : 'Switch to 中文'}
                    </button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
