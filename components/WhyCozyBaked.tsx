'use client';

import { Sparkles, PartyPopper, Palette, HeartHandshake } from 'lucide-react';

export function WhyCozyBaked() {
  const features = [
    {
      id: 'freshly-crafted',
      title: 'Freshly Crafted',
      description: 'Thoughtfully prepared cakes and baked treats made from scratch to order.',
      icon: Sparkles,
    },
    {
      id: 'made-for-celebrations',
      title: 'Made for Celebrations',
      description: 'Beautiful creations designed around memorable moments and shared joy.',
      icon: PartyPopper,
    },
    {
      id: 'attention-to-detail',
      title: 'Attention to Detail',
      description: 'From texture balance to final flourishes, every subtle detail matters.',
      icon: Palette,
    },
    {
      id: 'made-with-care',
      title: 'Made With Care',
      description: 'A warm, personal approach to every order, tailored with patience and pride.',
      icon: HeartHandshake,
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-24 bg-[#FCFBF7] border-y border-[#EFE9DC]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#7A533E] font-sans block mb-3">
            The Cozy Baked Philosophy
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1B120D] tracking-tight font-normal mb-4">
            Baked with Intention. Styled for Celebration.
          </h2>
          <p className="text-base text-[#615146] font-normal leading-relaxed">
            We believe a celebration cake should taste as magnificent as it looks. At Cozy Baked in Lucknow, we prioritize pure ingredients, custom artistry, and genuine care.
          </p>
        </div>

        {/* 4 Feature Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feat) => {
            const Icon = feat.icon;
            return (
              <div
                key={feat.id}
                className="group relative bg-[#FBF9F5] p-7 rounded-lg border border-[#EDE4D6] shadow-[0_2px_8px_rgba(40,24,18,0.03)] transition-all duration-200 hover:-translate-y-1 hover:shadow-md hover:border-[#DFD2C0]"
              >
                {/* Small elegant icon */}
                <div className="w-11 h-11 rounded-md bg-[#F2EBDC] flex items-center justify-center text-[#7A533E] mb-5 transition-transform duration-200 group-hover:scale-105">
                  <Icon className="w-5 h-5" />
                </div>

                <h3 className="font-serif text-xl text-[#1B120D] font-normal mb-2.5">
                  {feat.title}
                </h3>

                <p className="text-sm text-[#615146] leading-relaxed">
                  {feat.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Quiet divider promise */}
        <div className="mt-14 pt-8 text-center text-xs tracking-wider uppercase text-[#8A796F] font-medium border-t border-[#EFE9DC]">
          Fresh small-batch preparation · Vegetarian &amp; Eggless selections available
        </div>

      </div>
    </section>
  );
}
