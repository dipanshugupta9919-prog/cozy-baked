'use client';

import { BUSINESS_INFO } from '@/lib/data';
import { Phone, MapPin, MessageSquare, ArrowUpRight, Heart } from 'lucide-react';

export function Footer() {
  const footerLinks = [
    { label: 'Home', href: '#' },
    { label: 'About', href: '#about' },
    { label: 'Cakes', href: '#cakes' },
    { label: 'Specials', href: '#specials' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleScroll = (href: string) => {
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-[#1B120D] text-[#EAE2DA] pt-16 pb-12 border-t border-[#2F1F17]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-[#2C1C14]">
          
          {/* Brand Column (Cols 5) */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3.5 mb-3">
              <div className="w-14 h-14 rounded-full overflow-hidden border border-[#3E291F] bg-[#FCFBF7] shrink-0 p-0.5">
                <img
                  src="/images/cozy_baked_logo.jpg"
                  alt="Cozy Baked Logo"
                  className="w-full h-full object-cover rounded-full"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h2 className="font-serif text-3xl sm:text-4xl text-white font-normal leading-tight">
                  {BUSINESS_INFO.name}
                </h2>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4CAF50]" />
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-[#D8B49A] font-sans">
                    100% Vegetarian Cake Studio
                  </span>
                </div>
              </div>
            </div>
            <p className="text-sm text-[#BFAEA0] leading-relaxed max-w-sm mb-6">
              Handcrafted celebration cakes, bespoke designer creations, and gourmet bakery treats made with love in Lucknow, Uttar Pradesh.
            </p>

            <div className="flex items-center gap-3">
              <a
                href={BUSINESS_INFO.whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 py-2 px-3.5 bg-[#25D366] text-white rounded-xs text-xs font-semibold uppercase tracking-wider transition-transform duration-150 hover:scale-102 active:scale-98"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Order on WhatsApp</span>
              </a>

              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 py-2 px-3 border border-[#3E291F] text-[#EAE2DA] rounded-xs text-xs font-semibold uppercase tracking-wider hover:bg-[#291B14] transition-colors"
              >
                <span>Directions</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links (Cols 3) */}
          <div className="lg:col-span-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#D8B49A] block mb-4">
              Explore
            </span>
            <ul className="space-y-2.5 text-sm text-[#BFAEA0]">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleScroll(link.href);
                    }}
                    className="inline-block py-0.5 text-[#BFAEA0] transition-transform duration-150 active:scale-98"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Location & Contact Information (Cols 4) */}
          <div className="lg:col-span-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#D8B49A] block mb-4">
              Studio &amp; Orders
            </span>
            
            <div className="space-y-4 text-sm text-[#BFAEA0]">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#D8B49A] shrink-0 mt-1" />
                <address className="not-italic leading-relaxed">
                  {BUSINESS_INFO.addressLine1},<br />
                  {BUSINESS_INFO.addressLine2}
                </address>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#D8B49A] shrink-0" />
                <a
                  href={BUSINESS_INFO.phoneTel}
                  className="text-white font-medium hover:underline inline-block"
                  aria-label="Call 07007791342"
                >
                  {BUSINESS_INFO.phone}
                </a>
              </div>

              <div className="pt-2">
                <span className="text-xs text-[#8A796F] block">
                  Service Hubs: IIM Road, Bhitauli, Jankipuram &amp; Lucknow
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar with zero slop */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#8A796F] gap-4">
          <p>
            © {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-[#8A796F]">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-[#D87D65] fill-[#D87D65]" />
            <span>for sweet celebrations in Lucknow</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
