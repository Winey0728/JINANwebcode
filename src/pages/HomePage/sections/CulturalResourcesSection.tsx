import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LayoutGroup } from 'framer-motion';
import { MOCK_CULTURAL_CATEGORIES, MOCK_CULTURAL_RESOURCES, type ICulturalCategory } from '@/data/culturalresources';
import { Droplets, Users, Flag, Building2, Waves, Clock, Construction } from 'lucide-react';
import { Image } from '@/components/ui/image';

const categoryIcons: Record<string, any> = {
  spring: Droplets,
  celebrity: Users,
  red: Flag,
  ancient: Building2,
  waterway: Waves,
};

export default function CulturalResourcesSection() {
  const [activeTab, setActiveTab] = useState<string>('spring');

  const activeCategory = useMemo(
    () => MOCK_CULTURAL_CATEGORIES.find((c) => c.key === activeTab),
    [activeTab]
  );

  const filteredResources = useMemo(
    () => MOCK_CULTURAL_RESOURCES.filter((r) => r.category === activeTab),
    [activeTab]
  );

  // 名士文化按 subCategory 分组
  const groupedBySubCategory = useMemo(() => {
    if (activeTab !== 'celebrity') return null;
    const groups: Record<string, typeof MOCK_CULTURAL_RESOURCES> = {};
    filteredResources.forEach((r) => {
      const key = r.subCategory || '其他';
      if (!groups[key]) groups[key] = [];
      groups[key].push(r);
    });
    return groups;
  }, [activeTab, filteredResources]);

  return (
    <section id="cultural-resources" className="w-full py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-cyan-600 font-medium text-sm tracking-widest mb-3">
            CULTURAL RESOURCES
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            文化资源宝库
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            探索济南丰富的文化遗产，感受千年泉城的独特魅力
          </p>
        </motion.div>

        {/* 标签切换 */}
        <LayoutGroup>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {MOCK_CULTURAL_CATEGORIES.map((cat) => {
              const Icon = categoryIcons[cat.key];
              const isActive = activeTab === cat.key;
              return (
                <button
                  key={cat.key}
                  onClick={() => setActiveTab(cat.key)}
                  className={`relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? 'text-white'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTabBg"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 shadow-md"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 inline-flex items-center gap-2">
                    <Icon className="w-4 h-4" />
                    {cat.label}
                  </span>
                </button>
              );
            })}
          </div>
        </LayoutGroup>

        {/* 内容区 */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {activeCategory?.status === 'placeholder' ? (
              <PlaceholderContent category={activeCategory} />
            ) : activeTab === 'celebrity' && groupedBySubCategory ? (
              <CelebrityContent groups={groupedBySubCategory} />
            ) : (
              <SpringContent items={filteredResources} />
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

function SpringContent({ items }: { items: typeof MOCK_CULTURAL_RESOURCES }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {items.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.08 }}
          whileHover={{ y: -4 }}
          className="group bg-white rounded-2xl overflow-hidden border border-border/50 shadow-sm hover:shadow-xl transition-all duration-300"
        >
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src={item.imageUrl}
              alt={item.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            {item.era && (
              <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-xs font-medium text-cyan-700">
                {item.era}
              </span>
            )}
          </div>
          <div className="p-5">
            <h3 className="text-lg font-semibold text-foreground mb-2">{item.name}</h3>
            <p className="text-sm text-muted-foreground line-clamp-2">{item.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function CelebrityContent({ groups }: { groups: Record<string, typeof MOCK_CULTURAL_RESOURCES> }) {
  return (
    <div className="space-y-10">
      {Object.entries(groups).map(([groupName, items]) => (
        <div key={groupName}>
          <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-3">
            <span className="w-1 h-6 bg-gradient-to-b from-cyan-500 to-teal-500 rounded-full" />
            {groupName}
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {items.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="group text-center"
              >
                <div className="relative w-24 h-24 mx-auto mb-3 rounded-full overflow-hidden border-4 border-white shadow-md group-hover:shadow-lg transition-shadow">
                  <Image
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-600/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h4 className="font-semibold text-foreground text-sm">{item.name}</h4>
                <p className="text-xs text-muted-foreground mt-1">{item.era}</p>
                <p className="text-xs text-cyan-600 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  查看详情
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function PlaceholderContent({ category }: { category: ICulturalCategory }) {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <div className="w-20 h-20 rounded-2xl bg-muted flex items-center justify-center mb-6">
        <Construction className="w-10 h-10 text-muted-foreground" />
      </div>
      <h3 className="text-xl font-semibold text-foreground mb-2">{category.label}</h3>
      <p className="text-muted-foreground max-w-md mb-4">{category.description}</p>
      <p className="text-sm text-muted-foreground/70">内容建设中，敬请期待...</p>
    </div>
  );
}
