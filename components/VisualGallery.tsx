'use client';

import { useState, useEffect } from 'react';
import { GALLERY_ITEMS } from '@/lib/data';
import { GalleryItem } from '@/lib/types';
import { Maximize2, X, ChevronLeft, ChevronRight, MessageSquare } from 'lucide-react';

export function VisualGallery() {
  const [activeItemIndex, setActiveItemIndex] = useState<number | null>(null);

  // Close lightbox on Escape, navigate with arrows
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeItemIndex === null) return;
      if (e.key === 'Escape') setActiveItemIndex(null);
      if (e.key === 'ArrowRight') {
        setActiveItemIndex((prev) => (prev! + 1) % GALLERY_ITEMS.length);
      }
      if (e.key === 'ArrowLeft') {
        setActiveItemIndex((prev) => (prev! - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeItemIndex]);

  const activeItem = activeItemIndex !== null ? GALLERY_ITEMS[activeItemIndex] : null;

  const handleInquireWhatsApp = (item: GalleryItem) => {
    const text = encodeURIComponent(
      `Hi Cozy Baked! I saw your gallery piece "${item.title}" (${item.category}) on your website and would love to enquire about ordering something similar.`
    );
    window.open(`https://wa.me/917007791342?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-[#FBF9F5] border-t border-[#EFE9DC]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#7A533E] font-sans block mb-3">
            Portfolio &amp; Pastry Art
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1B120D] tracking-tight font-normal mb-4">
            A Glimpse Into the Studio
          </h2>
          <p className="text-base text-[#615146] font-normal leading-relaxed">
            Click on any cake design to view high-resolution details, floral accents, and hand-piped finishes.
          </p>
        </div>

        {/* Asymmetric Editorial Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {GALLERY_ITEMS.map((item, index) => {
            return (
              <div
                key={item.id}
                onClick={() => setActiveItemIndex(index)}
                className="group relative cursor-pointer overflow-hidden rounded-xl bg-[#F2EBDC] border border-[#EDE4D6] shadow-[0_4px_16px_rgba(40,24,18,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                {/* Image Container with aspect ratio */}
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <img
                    src={item.imageSrc}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />

                  {/* Soft scrim on hover to reveal details button, no text appearance changes */}
                  <div className="absolute inset-0 bg-[#1B120D]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                    <span className="p-2.5 rounded-full bg-[#FCFBF7]/90 text-[#2D231E] shadow-sm transform scale-90 group-hover:scale-100 transition-transform duration-200">
                      <Maximize2 className="w-4 h-4" />
                    </span>
                  </div>

                  {/* Clean unboxed tag */}
                  <div className="absolute top-3 left-3 bg-[#FCFBF7]/85 backdrop-blur-xs px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#3D291F] rounded-xs border border-[#E3D9C6]">
                    {item.category}
                  </div>
                </div>

                {/* Caption below image */}
                <div className="p-4 bg-[#FCFBF7]">
                  <h3 className="font-serif text-lg text-[#1B120D] font-normal mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#736357] leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Gallery footer note */}
        <div className="mt-12 text-center">
          <p className="text-xs text-[#8A796F] uppercase tracking-wider">
            Every creation is custom made · Flavors and designs adapted to your celebration
          </p>
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-fadeIn"
          onClick={() => setActiveItemIndex(null)}
          role="dialog"
          aria-modal="true"
          aria-label={activeItem.title}
        >
          <div
            className="relative max-w-4xl w-full bg-[#FCFBF7] rounded-xl overflow-hidden shadow-2xl border border-[#E3D9C6]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top close bar */}
            <div className="flex items-center justify-between p-4 border-b border-[#EFE9DC] bg-[#FBF9F5]">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#7A533E] font-medium block">
                  {activeItem.category}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl text-[#1B120D] font-normal">
                  {activeItem.title}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setActiveItemIndex(null)}
                className="p-2 text-[#4A3B32] hover:bg-[#F2EBDC] rounded-md transition-colors cursor-pointer"
                aria-label="Close image lightbox"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Lightbox Image Stage with Previous / Next navigation */}
            <div className="relative bg-[#1E140F] flex items-center justify-center max-h-[60vh] sm:max-h-[68vh] overflow-hidden">
              <img
                src={activeItem.imageSrc}
                alt={activeItem.title}
                className="max-h-[60vh] sm:max-h-[68vh] w-auto max-w-full object-contain mx-auto"
                referrerPolicy="no-referrer"
              />

              {/* Prev / Next buttons */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveItemIndex(
                    (activeItemIndex! - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length
                  );
                }}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 text-[#1B120D] hover:bg-white shadow-md transition-transform active:scale-90"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveItemIndex((activeItemIndex! + 1) % GALLERY_ITEMS.length);
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 text-[#1B120D] hover:bg-white shadow-md transition-transform active:scale-90"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Lightbox Description & Action Footer */}
            <div className="p-5 sm:p-6 bg-[#FCFBF7] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="max-w-xl">
                <p className="text-sm text-[#4A3B32] leading-relaxed mb-1">
                  {activeItem.description}
                </p>
                <span className="text-xs text-[#7A533E]">
                  {activeItem.details}
                </span>
              </div>

              <div className="shrink-0 flex items-center gap-3 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={() => handleInquireWhatsApp(activeItem)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold uppercase tracking-wider text-white bg-[#25D366] hover:bg-[#20BA5A] rounded-sm transition-colors cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Ask on WhatsApp</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
