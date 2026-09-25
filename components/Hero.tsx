'use client';

import { motion } from 'motion/react';
import { ArrowRight, Sparkles, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/data';

interface HeroProps {
  onOrderClick: () => void;
  onExploreClick: () => void;
}

export function Hero({ onOrderClick, onExploreClick }: HeroProps) {
  return (
    <section className="relative min-h-[92vh] flex items-center pt-24 pb-16 overflow-hidden bg-[#FBF9F5]">
      {/* Editorial Split / Layered Composition */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Text Column (Takes 6 or 7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center max-w-2xl"
          >
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="flex items-center gap-2 mb-4 text-[#7A533E]"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#B87A4C]" />
              <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase font-sans">
                FRESHLY BAKED • MADE WITH LOVE
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] leading-[1.08] text-[#1B120D] tracking-tight font-normal mb-6 text-balance"
            >
              Beautiful Cakes,<br />
              <span className="italic font-light text-[#553828]">Made for Beautiful Moments.</span>
            </motion.h1>

            {/* Supporting Text */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-base sm:text-lg text-[#55473E] leading-relaxed mb-8 max-w-xl font-normal"
            >
              Discover thoughtfully crafted cakes and baked treats from Cozy Baked in Lucknow, made to bring something special to every celebration.
            </motion.p>

            {/* CTA Buttons (Strict text stability on hover) */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
            >
              <button
                type="button"
                onClick={onOrderClick}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-white bg-[#241710] rounded-sm transition-all duration-150 hover:bg-[#140C07] hover:shadow-md active:scale-98 cursor-pointer"
              >
                <span>Order Your Cake</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </button>

              <button
                type="button"
                onClick={onExploreClick}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-[#2D231E] bg-[#F4EDE2] border border-[#E3D8C6] rounded-sm transition-all duration-150 hover:bg-[#EAE1D2] hover:border-[#D5C6AF] active:scale-98 cursor-pointer"
              >
                <span>Explore Cakes</span>
              </button>
            </motion.div>

            {/* Location Quiet Trust Note */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-10 pt-6 border-t border-[#EFE9DC] flex items-center gap-2 text-xs sm:text-sm text-[#736357]"
            >
              <MapPin className="w-4 h-4 text-[#B87A4C] shrink-0" />
              <span>
                IIM Road, Bhitauli, Lucknow · Fresh to order daily
              </span>
            </motion.div>
          </motion.div>

          {/* Visual Showcase Column (Takes 5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative subtle framing */}
              <div className="absolute -inset-3 rounded-2xl bg-gradient-to-tr from-[#EFE9DC]/60 via-[#F7F4EC]/30 to-transparent pointer-events-none" />
              
              {/* Image Frame with soft shadow */}
              <div className="relative overflow-hidden rounded-xl bg-[#F2EBDC] shadow-[0_16px_36px_-12px_rgba(40,24,18,0.12)] border border-[#EBE3D3]">
                <img
                  src="/images/hero_luxury_cake_1790333825118.jpg"
                  alt="Cozy Baked artisanal three-tier celebration cake in Lucknow studio"
                  className="w-full aspect-[4/5] object-cover transition-transform duration-700 hover:scale-103"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />

                {/* Subtle soft gradient scrim just at bottom for quiet contrast */}
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#1B120D]/65 via-[#1B120D]/20 to-transparent pointer-events-none" />

                {/* Quiet caption inside image frame */}
                <div className="absolute bottom-4 left-5 right-5 text-white">
                  <span className="text-[11px] tracking-widest uppercase font-semibold text-[#F7EFE6] block">
                    Bespoke Atelier Creation
                  </span>
                  <span className="font-serif text-lg text-white font-normal">
                    Swiss Buttercream &amp; Botanical Ranunculus
                  </span>
                </div>
              </div>

              {/* Floating aesthetic label card with official business logo */}
              <div className="absolute -bottom-4 -left-4 sm:-bottom-5 sm:-left-5 bg-[#FCFBF7] border border-[#E8DDD0] shadow-md rounded-md p-3 hidden sm:flex items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-[#E3D9C6] bg-white shrink-0 shadow-xs">
                  <img
                    src="/images/cozy_baked_logo.jpg"
                    alt="Cozy Baked Official Logo"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#2D231E] block">
                    Cozy Baked · 100% Veg
                  </span>
                  <span className="text-[11px] text-[#7A533E]">
                    Artisanal Cakes on IIM Road, Lucknow
                  </span>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
