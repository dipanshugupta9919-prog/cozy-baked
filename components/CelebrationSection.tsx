'use client';

import { ArrowRight, Sparkles, Heart } from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/data';

interface CelebrationSectionProps {
  onOrderClick: () => void;
}

export function CelebrationSection({ onOrderClick }: CelebrationSectionProps) {
  const celebrationPillars = [
    { title: 'Birthdays', desc: 'From milestone first birthdays to joyous decade celebrations.' },
    { title: 'Anniversaries', desc: 'Honoring years of companionship with romantic sugarcraft & tiers.' },
    { title: 'Family Gatherings', desc: 'Bringing generations together around a warm, unforgettable dessert.' },
    { title: 'Milestones', desc: 'Graduations, new homes, promotions, and cherished achievements.' },
    { title: 'Sweet Surprises', desc: 'Midweek pick-me-ups and thoughtful treats sent to loved ones.' },
    { title: 'Intimate Moments', desc: 'Because you never need an excuse to savor fine artisanal pastry.' },
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#FCFBF7] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Full-width editorial card with background imagery and soft warm contrast */}
        <div className="relative rounded-2xl overflow-hidden border border-[#EAE0D2] bg-[#221611] text-white shadow-xl">
          
          {/* Background image with measured editorial scrim */}
          <div className="absolute inset-0">
            <img
              src="/images/celebration_moment_cake_1790333894985.jpg"
              alt="Warm candle celebration cake with intimate ambiance by Cozy Baked Lucknow"
              className="w-full h-full object-cover opacity-35 object-center"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1B120D] via-[#1B120D]/90 to-transparent" />
          </div>

          {/* Foreground content with generous whitespace */}
          <div className="relative z-10 p-8 sm:p-14 lg:p-20 max-w-2xl">
            <div className="flex items-center gap-2 mb-4 text-[#D8B49A]">
              <Heart className="w-4 h-4 text-[#E6A87C]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] font-sans">
                Sweet Traditions in Lucknow
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-normal leading-tight mb-6">
              Every Celebration Deserves Something Special
            </h2>

            <p className="text-base sm:text-lg text-[#E8DCCF] font-normal leading-relaxed mb-8">
              At Cozy Baked, we understand that a cake is rarely just a dessert. It is the glowing candles, the chorus of well-wishes, the photograph saved in family albums, and the shared smile between loved ones.
            </p>

            {/* Subtle list of celebrations */}
            <div className="grid grid-cols-2 gap-4 mb-10 pt-4 border-t border-[#4A3225]">
              {celebrationPillars.slice(0, 4).map((item) => (
                <div key={item.title}>
                  <span className="font-serif text-lg text-white font-normal block mb-0.5">
                    {item.title}
                  </span>
                  <span className="text-xs text-[#C5B4A6] leading-snug block">
                    {item.desc}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                type="button"
                onClick={onOrderClick}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#1B120D] bg-[#FCFBF7] rounded-sm transition-all duration-150 hover:bg-[#F2EBDC] hover:shadow-lg active:scale-98 cursor-pointer"
              >
                <span>Plan Your Celebration Cake</span>
                <ArrowRight className="w-4 h-4 text-[#1B120D]" />
              </button>

              <a
                href={BUSINESS_INFO.whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#FCFBF7] border border-[#7A533E] rounded-sm transition-all duration-150 hover:bg-[#3D291F] active:scale-98"
              >
                <span>WhatsApp Cozy Baked</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
