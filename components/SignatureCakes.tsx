'use client';

import { useState } from 'react';
import { CAKE_CATEGORIES } from '@/lib/data';
import { CakeCategory } from '@/lib/types';
import { ArrowRight, MessageSquare, Check, Sparkles } from 'lucide-react';

interface SignatureCakesProps {
  onSelectCategory?: (category: CakeCategory) => void;
}

export function SignatureCakes({ onSelectCategory }: SignatureCakesProps) {
  const [selectedCategory, setSelectedCategory] = useState<CakeCategory | null>(null);

  const handleEnquireWhatsApp = (category: CakeCategory) => {
    const text = encodeURIComponent(
      `Hi Cozy Baked! I'm interested in ordering a cake from your "${category.name}" collection. Could you share available flavors and order guidelines?`
    );
    window.open(`https://wa.me/917007791342?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="cakes" className="py-20 sm:py-28 bg-[#FBF9F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#7A533E] font-sans block mb-3">
              Curated Collections
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1B120D] tracking-tight font-normal">
              Made to Be Remembered
            </h2>
            <p className="mt-4 text-base text-[#615146] font-normal leading-relaxed">
              Every milestone deserves a centerpiece designed with passion and finesse. Explore our signature categories, each baked to order with premium ingredients and customized for your special day.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-2 text-xs uppercase tracking-wider text-[#7A533E] font-medium border border-[#E3D9C6] px-3.5 py-2 rounded-sm bg-[#FCFBF7]">
            <Sparkles className="w-3.5 h-3.5 text-[#B87A4C]" />
            <span>Eggless Options Always Available</span>
          </div>
        </div>

        {/* 6 Elegant Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CAKE_CATEGORIES.map((category) => {
            return (
              <div
                key={category.id}
                className="group relative bg-[#FCFBF7] rounded-xl border border-[#EDE4D6] shadow-[0_4px_16px_rgba(40,24,18,0.04)] overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_28px_rgba(40,24,18,0.09)] hover:border-[#DFD2C0]"
              >
                {/* Visual Area (Image scales gently, text never changes!) */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F2EBDC]">
                  <img
                    src={category.imageSrc}
                    alt={`${category.name} from Cozy Baked Lucknow`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />

                  {/* Clean unboxed category label at top right */}
                  {category.badge && (
                    <div className="absolute top-3.5 right-3.5 bg-[#FCFBF7]/90 backdrop-blur-xs px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#3D291F] rounded-xs border border-[#E3D9C6]">
                      {category.badge}
                    </div>
                  )}
                </div>

                {/* Content Area */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-2xl text-[#1B120D] font-normal mb-1.5">
                      {category.name}
                    </h3>
                    
                    <p className="text-xs uppercase tracking-wider text-[#7A533E] font-medium mb-3">
                      {category.tagline}
                    </p>

                    <p className="text-sm text-[#615146] leading-relaxed mb-4">
                      {category.description}
                    </p>

                    {/* Flavor Notes (Unboxed metadata with subtle dot separators) */}
                    <div className="pt-3 border-t border-[#F2EBDC] mb-5">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-[#8A796F] block mb-2">
                        Popular Flavor Notes
                      </span>
                      <div className="flex flex-wrap items-center gap-1.5 text-xs text-[#55473E]">
                        {category.flavorNotes.map((flavor, idx) => (
                          <span key={flavor} className="inline-flex items-center">
                            <span>{flavor}</span>
                            {idx < category.flavorNotes.length - 1 && (
                              <span className="mx-1.5 text-[#BFAEA0]" aria-hidden="true">·</span>
                            )}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Action row (Text appearance never changes on hover) */}
                  <div className="pt-4 border-t border-[#EFE9DC] flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => handleEnquireWhatsApp(category)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#2D231E] py-1.5 px-3 rounded-xs border border-[#E3D9C6] transition-all duration-150 hover:bg-[#F2EBDC] active:scale-98 cursor-pointer"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
                      <span>Enquire on WhatsApp</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setSelectedCategory(category);
                        onSelectCategory?.(category);
                      }}
                      className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-[#7A533E] py-1 px-2 rounded-xs transition-transform duration-150 hover:translate-x-0.5 cursor-pointer"
                      aria-label={`View details for ${category.name}`}
                    >
                      <span>Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Category Quick Details Modal */}
      {selectedCategory && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-fadeIn"
          onClick={() => setSelectedCategory(null)}
          role="dialog"
          aria-modal="true"
          aria-label={selectedCategory.name}
        >
          <div
            className="bg-[#FCFBF7] rounded-xl border border-[#EDE4D6] max-w-lg w-full p-6 sm:p-8 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#7A533E] font-medium block">
                  Cozy Baked Collection
                </span>
                <h3 className="font-serif text-3xl text-[#1B120D] font-normal">
                  {selectedCategory.name}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedCategory(null)}
                className="p-1.5 rounded-md text-[#55473E] hover:bg-[#F2EBDC] transition-colors"
                aria-label="Close details"
              >
                ✕
              </button>
            </div>

            <p className="text-sm text-[#615146] leading-relaxed mb-5">
              {selectedCategory.description}
            </p>

            <div className="space-y-4 mb-6 text-xs text-[#55473E]">
              <div>
                <span className="font-semibold uppercase tracking-wider text-[#2D231E] block mb-1">
                  Ideal For:
                </span>
                <ul className="space-y-1">
                  {selectedCategory.idealFor.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#B87A4C]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <span className="font-semibold uppercase tracking-wider text-[#2D231E] block mb-1">
                  Standard Sizing:
                </span>
                <div className="flex gap-2">
                  {selectedCategory.sizes.map((s) => (
                    <span key={s} className="px-2.5 py-1 bg-[#F5EFE6] border border-[#E3D9C6] rounded-xs">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => {
                  handleEnquireWhatsApp(selectedCategory);
                  setSelectedCategory(null);
                }}
                className="flex-1 py-3 px-4 text-xs font-semibold uppercase tracking-wider text-white bg-[#291B14] rounded-sm hover:bg-[#140C07] transition-colors cursor-pointer text-center"
              >
                Order on WhatsApp
              </button>
              <button
                type="button"
                onClick={() => setSelectedCategory(null)}
                className="py-3 px-4 text-xs font-semibold uppercase tracking-wider text-[#2D231E] bg-[#F2EBDC] rounded-sm hover:bg-[#EAE1D2] transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
