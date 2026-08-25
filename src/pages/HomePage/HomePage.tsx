import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import HeroSection from './sections/HeroSection';
import HighlightsSection from './sections/HighlightsSection';
import CultureSectionsSection from './sections/CultureSectionsSection';
import AboutPlatformSection from './sections/AboutPlatformSection';
import CulturalResourcesSection from './sections/CulturalResourcesSection';
import AIAgentSection from './sections/AIAgentSection';
import VirtualTourSection from './sections/VirtualTourSection';
import SpatiotemporalMapSection from './sections/SpatiotemporalMapSection';
import AboutUsSection from './sections/AboutUsSection';
import { Toaster } from '@/components/ui/sonner';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <HeroSection />
        <HighlightsSection />
        <CultureSectionsSection />
        <AboutPlatformSection />
        <CulturalResourcesSection />
        <AIAgentSection />
        <VirtualTourSection />
        <SpatiotemporalMapSection />
        <AboutUsSection />
      </main>
      <Footer />
      <BackToTop />
      <Toaster position="top-right" />
    </div>
  );
}
