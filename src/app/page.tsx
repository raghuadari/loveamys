// Server component — interactive sections are extracted into their own 'use client' components
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import GalleryCarousel from '@/components/GalleryCarousel';
import MenuSection from '@/components/MenuSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';
import ErrorBoundary from '@/components/ErrorBoundary';
import PerformanceMonitor from '@/components/PerformanceMonitor';

export default function Home() {
  return (
    <ErrorBoundary>
      <PerformanceMonitor />
      <main className="min-h-screen">
        <Navigation />

        {/* Info Banner — static, server-rendered */}
        <div className="fixed top-[56px] left-0 right-0 z-40 bg-brand-deep text-brand-gold text-xs sm:text-sm text-center py-1.5 px-4 flex flex-wrap justify-center gap-x-4 gap-y-0.5">
          <span>✨ Made fresh to order · 24-hr notice required</span>
          <span>🚚 Free delivery on orders above ₹1000</span>
        </div>

        <HeroSection />
        <AboutSection />
        <GalleryCarousel />
        <MenuSection />
        <TestimonialsSection />
        <Footer />
      </main>
    </ErrorBoundary>
  );
}
