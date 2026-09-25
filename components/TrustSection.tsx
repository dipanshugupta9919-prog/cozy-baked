'use client';

import { TRUST_PILLARS } from '@/lib/data';
import { ShieldCheck, HeartHandshake, Sparkles } from 'lucide-react';

export function TrustSection() {
  return (
    <section className="py-20 sm:py-24 bg-[#FCFBF7] border-t border-[#EFE9DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#7A533E] font-sans block mb-3">
            Our Standard of Craft
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1B120D] tracking-tight font-normal mb-4">
            The Cozy Baked Experience
          </h2>
          <p className="text-base text-[#615146] font-normal leading-relaxed">
            We value your trust as much as your celebration. Here is how we ensure every cake that leaves our Lucknow kitchen meets our exacting standards.
          </p>
        </div>

        {/* 5 Grounded Trust Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TRUST_PILLARS.map((pillar, idx) => (
            <div
              key={pillar.title}
              className="bg-[#FBF9F5] p-7 rounded-xl border border-[#EDE4D6] shadow-[0_2px_8px_rgba(40,24,18,0.03)] flex flex-col justify-between"
            >
              <div>
                <span className="font-serif text-2xl text-[#B87A4C] font-normal block mb-2">
                  0{idx + 1}.
                </span>
                <h3 className="font-serif text-xl text-[#1B120D] font-normal mb-2.5">
                  {pillar.title}
                </h3>
                <p className="text-sm text-[#615146] leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-[#EFE9DC] flex items-center gap-1.5 text-[11px] uppercase tracking-wider text-[#8A796F] font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-[#7A533E]" />
                <span>Certified Food Safety &amp; Cleanliness</span>
              </div>
            </div>
          ))}

          {/* 6th Card: Direct Commitment */}
          <div className="bg-[#291B14] text-white p-7 rounded-xl border border-[#3E281E] shadow-md flex flex-col justify-between">
            <div>
              <span className="font-serif text-2xl text-[#E6A87C] font-normal block mb-2">
                06.
              </span>
              <h3 className="font-serif text-xl text-white font-normal mb-2.5">
                Dietary &amp; Eggless Care
              </h3>
              <p className="text-sm text-[#E8DCCF] leading-relaxed">
                Vegetarian and 100% eggless orders are prepared with dedicated equipment, strict hygiene, and moisture-locking baking techniques that never compromise on texture.
              </p>
            </div>

            <div className="mt-5 pt-4 border-t border-[#4A3225] flex items-center gap-1.5 text-[11px] uppercase tracking-wider text-[#D8B49A] font-medium">
              <Sparkles className="w-3.5 h-3.5 text-[#E6A87C]" />
              <span>Tailored To Every Palate</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
