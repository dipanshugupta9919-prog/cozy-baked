'use client';

import { useState } from 'react';
import { OpeningAnimation } from '@/components/OpeningAnimation';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { WhyCozyBaked } from '@/components/WhyCozyBaked';
import { SignatureCakes } from '@/components/SignatureCakes';
import { CustomCakesFeature } from '@/components/CustomCakesFeature';
import { FeaturedTreats } from '@/components/FeaturedTreats';
import { CelebrationSection } from '@/components/CelebrationSection';
import { VisualGallery } from '@/components/VisualGallery';
import { TrustSection } from '@/components/TrustSection';
import { LocationSection } from '@/components/LocationSection';
import { ContactOrderSection } from '@/components/ContactOrderSection';
import { FloatingControls } from '@/components/FloatingControls';
import { Footer } from '@/components/Footer';
import { OrderModal } from '@/components/OrderModal';

export default function Home() {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

  const handleScrollToSection = (selector: string) => {
    const el = document.querySelector(selector);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FCFBF7] text-[#2D231E]">
      {/* 1. Opening Brand & Bakery Sequence */}
      <OpeningAnimation />

      {/* 2. Top Navigation Bar */}
      <Navbar onOpenOrderModal={() => setIsOrderModalOpen(true)} />

      {/* Main Content Area */}
      <main id="main-content" className="flex-1">
        {/* 3. Hero Section */}
        <Hero
          onOrderClick={() => handleScrollToSection('#contact')}
          onExploreClick={() => handleScrollToSection('#cakes')}
        />

        {/* 4. Why Cozy Baked Section */}
        <WhyCozyBaked />

        {/* 5. Signature Cakes Section */}
        <SignatureCakes />

        {/* 6. Custom Cakes Feature Section */}
        <CustomCakesFeature onOpenOrderModal={() => setIsOrderModalOpen(true)} />

        {/* 7. Featured Treats / Specials Section */}
        <FeaturedTreats />

        {/* 8. Celebration Section */}
        <CelebrationSection onOrderClick={() => handleScrollToSection('#contact')} />

        {/* 9. Visual Gallery with Lightbox */}
        <VisualGallery />

        {/* 10. Customer Experience / Trust Section */}
        <TrustSection />

        {/* 11. Google Business Profile & Location Section */}
        <LocationSection />

        {/* 12. Contact & Cake Order Planning Section */}
        <ContactOrderSection />
      </main>

      {/* 13. Premium Footer */}
      <Footer />

      {/* 14. Persistent Floating Actions (WhatsApp on top, Back-to-Top below) */}
      <FloatingControls />

      {/* 15. Instant Order / Consultation Modal */}
      <OrderModal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
      />
    </div>
  );
}
