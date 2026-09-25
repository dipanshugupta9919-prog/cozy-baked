'use client';

import { useState } from 'react';
import { TREAT_SPECIALS } from '@/lib/data';
import { TreatItem } from '@/lib/types';
import { Sparkles, MessageSquare, Check, ArrowRight } from 'lucide-react';

export function FeaturedTreats() {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [selectedTreat, setSelectedTreat] = useState<TreatItem | null>(null);

  const filterTabs = [
    { id: 'all', label: 'All Specials' },
    { id: 'Cakes', label: 'Signature Cakes' },
    { id: 'Pastries', label: 'Pastries' },
    { id: 'Cupcakes', label: 'Cupcakes' },
    { id: 'Brownies', label: 'Brownies' },
    { id: 'Dessert Boxes', label: 'Dessert Boxes' },
    { id: 'Celebration Treats', label: 'Celebration Treats' },
  ];

  const filteredItems =
    activeTab === 'all'
      ? TREAT_SPECIALS
      : TREAT_SPECIALS.filter((item) => item.category === activeTab);

  const handleEnquire = (item: TreatItem) => {
    const text = encodeURIComponent(
      `Hi Cozy Baked! I'd like to ask about availability and flavors for "${item.title}".`
    );
    window.open(`https://wa.me/917007791342?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="specials" className="py-20 sm:py-28 bg-[#FBF9F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Showcase Banner */}
        <div className="mb-16 bg-[#F5EFE6] rounded-2xl border border-[#EDE4D6] overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-center">
          
          <div className="lg:col-span-5 p-8 sm:p-10 lg:p-12 flex flex-col justify-center">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#7A533E] font-sans block mb-3">
              Artisan Oven Specials
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1B120D] tracking-tight font-normal mb-4">
              Fresh Daily Treats &amp; Celebration Boxes
            </h2>
            <p className="text-sm sm:text-base text-[#615146] font-normal leading-relaxed mb-6">
              Beyond grand tiered cakes, Cozy Baked crafts gourmet French tarts, Belgian dark brownies, and curated dessert boxes designed for sharing and everyday indulgence.
            </p>
            <div className="text-xs text-[#7A533E] uppercase tracking-wider font-medium">
              Made in small artisanal batches · Pre-orders recommended
            </div>
          </div>

          <div className="lg:col-span-7 h-72 sm:h-96 relative overflow-hidden bg-[#EAE1D2]">
            <img
              src="/images/artisan_pastry_treats_1790333881625.jpg"
              alt="Gourmet pastry and dessert box assortment by Cozy Baked Lucknow"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-103"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1B120D]/60 via-transparent to-transparent pointer-events-none lg:hidden" />
            <div className="absolute bottom-4 left-6 right-6 text-white text-xs lg:hidden">
              Handcrafted French fruit tarts &amp; sea salt dark brownies
            </div>
          </div>

        </div>

        {/* Section Header & Interactive Filter Bar (Buttons styled cleanly, not pill tags) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#1B120D] font-normal">
              Explore Our Baked Categories
            </h3>
            <p className="text-sm text-[#736357] mt-1">
              Select a category to view examples and craftsmanship highlights.
            </p>
          </div>

          {/* Interactive filter tabs */}
          <div className="flex flex-wrap gap-1.5 p-1 bg-[#F2EBDC] rounded-md border border-[#E3D9C6]">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-xs transition-colors cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-[#FCFBF7] text-[#1B120D] shadow-xs'
                    : 'text-[#615146] hover:text-[#1B120D]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid of Treat Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group bg-[#FCFBF7] rounded-xl border border-[#EDE4D6] overflow-hidden flex flex-col justify-between shadow-[0_3px_12px_rgba(40,24,18,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_24px_rgba(40,24,18,0.08)] hover:border-[#DFD2C0]"
            >
              {/* Product Image */}
              {item.imageSrc && (
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F2EBDC]">
                  <img
                    src={item.imageSrc}
                    alt={`${item.title} - Cozy Baked Lucknow`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute top-3.5 right-3.5 bg-[#FCFBF7]/90 backdrop-blur-xs px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#3D291F] rounded-xs border border-[#E3D9C6]">
                    {item.category}
                  </div>
                </div>
              )}

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2 text-xs text-[#7A533E]">
                    <span className="font-semibold uppercase tracking-wider">{item.category}</span>
                    {item.serves && (
                      <span className="text-[#8A796F]">{item.serves}</span>
                    )}
                  </div>

                  <h4 className="font-serif text-2xl text-[#1B120D] font-normal mb-2">
                    {item.title}
                  </h4>

                  <p className="text-sm text-[#615146] leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Highlights list */}
                  <ul className="space-y-1.5 mb-5 text-xs text-[#55473E]">
                    {item.highlights.map((hl) => (
                      <li key={hl} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#B87A4C]" />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action row (no hover text changes!) */}
                <div className="pt-4 border-t border-[#EFE9DC] flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => handleEnquire(item)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#2D231E] py-1.5 px-3 rounded-xs border border-[#E3D9C6] transition-all duration-150 hover:bg-[#F2EBDC] active:scale-98 cursor-pointer"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
                    <span>Enquire Availability</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedTreat(item)}
                    className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-[#7A533E] py-1 px-2 rounded-xs transition-transform duration-150 hover:translate-x-0.5 cursor-pointer"
                  >
                    <span>Info</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Item info modal */}
      {selectedTreat && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn"
          onClick={() => setSelectedTreat(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="bg-[#FCFBF7] rounded-xl border border-[#EDE4D6] max-w-md w-full overflow-hidden shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Image */}
            {selectedTreat.imageSrc && (
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#F2EBDC]">
                <img
                  src={selectedTreat.imageSrc}
                  alt={selectedTreat.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <button
                  type="button"
                  onClick={() => setSelectedTreat(null)}
                  className="absolute top-3 right-3 p-1.5 rounded-full bg-white/80 hover:bg-white text-[#1B120D] shadow-sm transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  ✕
                </button>
              </div>
            )}

            <div className="p-6">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#7A533E] font-medium block">
                    {selectedTreat.category}
                  </span>
                  <h4 className="font-serif text-2xl text-[#1B120D] font-normal">
                    {selectedTreat.title}
                  </h4>
                </div>
                {!selectedTreat.imageSrc && (
                  <button
                    type="button"
                    onClick={() => setSelectedTreat(null)}
                    className="p-1 rounded text-[#55473E] hover:bg-[#F2EBDC]"
                  >
                    ✕
                  </button>
                )}
              </div>

              <p className="text-sm text-[#615146] leading-relaxed mb-4">
                {selectedTreat.description}
              </p>

              <div className="p-3 bg-[#F7F4EC] rounded-sm border border-[#E3D9C6] text-xs text-[#55473E] mb-5">
                <strong>Order Guideline:</strong> Available by prior order or scheduled pickup at our Lucknow kitchen on IIM Road.
              </div>

              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => {
                    handleEnquire(selectedTreat);
                    setSelectedTreat(null);
                  }}
                  className="flex-1 py-2.5 px-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#291B14] rounded-sm hover:bg-[#140C07] transition-colors cursor-pointer"
                >
                  Ask on WhatsApp
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedTreat(null)}
                  className="py-2.5 px-3 text-xs font-semibold uppercase tracking-wider text-[#2D231E] bg-[#F2EBDC] rounded-sm hover:bg-[#EAE1D2] transition-colors cursor-pointer"
                >
                  Dismiss
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
