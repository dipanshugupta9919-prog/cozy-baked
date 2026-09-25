'use client';

import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/data';

interface CustomCakesFeatureProps {
  onOpenOrderModal: () => void;
}

export function CustomCakesFeature({ onOpenOrderModal }: CustomCakesFeatureProps) {
  const occasions = [
    'Birthdays',
    'Anniversaries',
    'Weddings',
    'Parties',
    'Milestones',
    'Special celebrations',
  ];

  const handleWhatsAppConsultation = () => {
    const text = encodeURIComponent(
      "Hi Cozy Baked! I have a custom cake idea for an upcoming celebration and would love to discuss designs, flavors, and dates."
    );
    window.open(`https://wa.me/917007791342?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-20 sm:py-28 bg-[#FCFBF7] border-y border-[#EFE9DC]/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Visual Column (Large Image on one side) */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Decorative background framing */}
              <div className="absolute -inset-4 bg-[#F2EBDC]/60 rounded-2xl -rotate-1 pointer-events-none" />

              {/* Main Image Frame */}
              <div className="relative overflow-hidden rounded-xl bg-[#EFE9DC] border border-[#E3D8C6] shadow-[0_12px_32px_rgba(40,24,18,0.08)]">
                <img
                  src="/images/custom_designer_cake_1790333843632.jpg"
                  alt="Custom bespoke designer celebration cake by Cozy Baked Lucknow"
                  className="w-full aspect-[4/3] object-cover transition-transform duration-700 hover:scale-103"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />

                {/* Scrim and caption */}
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#1B120D]/75 via-[#1B120D]/25 to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-5 right-5 text-white">
                  <span className="text-[11px] uppercase tracking-widest text-[#F7EFE6] font-semibold block">
                    Bespoke Custom Atelier
                  </span>
                  <p className="font-serif text-lg text-white font-normal">
                    Palette-knife sculptural buttercream on raw travertine
                  </p>
                </div>
              </div>

              {/* Little Floating Pill-free tag */}
              <div className="absolute -top-3 -right-3 bg-[#FCFBF7] border border-[#E3D9C6] px-3.5 py-1.5 shadow-sm rounded-xs hidden sm:block">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#7A533E]">
                  Tailored To Your Vision
                </span>
              </div>

            </div>
          </div>

          {/* Text Column on the other side */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            <div className="flex items-center gap-2 mb-3 text-[#7A533E]">
              <Sparkles className="w-3.5 h-3.5 text-[#B87A4C]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] font-sans">
                Bespoke Cake Studio
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1B120D] tracking-tight font-normal mb-5">
              Your Idea. Your Cake. Your Moment.
            </h2>

            <p className="text-base text-[#615146] font-normal leading-relaxed mb-6">
              Whether you arrive with a hand-drawn sketch, a Pinterest moodboard, a color swatch, or just an inkling of an idea, Cozy Baked works with you to bring your dream centerpiece to life in Lucknow.
            </p>

            {/* Occasions List */}
            <div className="mb-8">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#8A796F] block mb-3">
                Crafted for every meaningful occasion:
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {occasions.map((occasion) => (
                  <div key={occasion} className="flex items-center gap-2 text-sm text-[#4A3B32]">
                    <CheckCircle2 className="w-4 h-4 text-[#B87A4C] shrink-0" />
                    <span>{occasion}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Process Steps */}
            <div className="p-5 bg-[#F9F6F0] rounded-lg border border-[#EDE4D6] mb-8 space-y-2.5 text-xs text-[#55473E]">
              <div className="flex items-start gap-2.5">
                <span className="font-serif text-sm font-semibold text-[#7A533E]">01.</span>
                <p><strong>Share Your Vision:</strong> Tell us your theme, flavor profile, guest count, and date.</p>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="font-serif text-sm font-semibold text-[#7A533E]">02.</span>
                <p><strong>Artisanal Baking:</strong> Fresh sponge, balanced fillings, and meticulous hand decoration.</p>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="font-serif text-sm font-semibold text-[#7A533E]">03.</span>
                <p><strong>Celebration Ready:</strong> Carefully packaged for pickup on IIM Road or Lucknow delivery coordination.</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                type="button"
                onClick={handleWhatsAppConsultation}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-white bg-[#241710] rounded-sm transition-all duration-150 hover:bg-[#140C07] hover:shadow-md active:scale-98 cursor-pointer"
              >
                <span>Talk About Your Cake</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </button>

              <button
                type="button"
                onClick={onOpenOrderModal}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold uppercase tracking-wider text-[#2D231E] bg-[#F2EBDC] border border-[#E3D9C6] rounded-sm transition-all duration-150 hover:bg-[#EAE1D2] active:scale-98 cursor-pointer"
              >
                <span>Custom Order Form</span>
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
