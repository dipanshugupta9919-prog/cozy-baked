'use client';

import { BUSINESS_INFO } from '@/lib/data';
import { MapPin, Phone, Clock, Navigation, ExternalLink } from 'lucide-react';

export function LocationSection() {
  return (
    <section id="location" className="py-20 sm:py-28 bg-[#FBF9F5] border-t border-[#EFE9DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#7A533E] font-sans block mb-3">
            Visit &amp; Pickup
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1B120D] tracking-tight font-normal mb-4">
            Our Lucknow Kitchen
          </h2>
          <p className="text-base text-[#615146] font-normal leading-relaxed">
            Conveniently situated on IIM Road, Cozy Baked serves cake connoisseurs across Bhitauli, Jankipuram, and greater Lucknow.
          </p>
        </div>

        {/* Location Card & Map Integration */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Details Card */}
          <div className="lg:col-span-5 bg-[#FCFBF7] rounded-xl border border-[#EDE4D6] p-8 sm:p-10 shadow-[0_4px_16px_rgba(40,24,18,0.04)] flex flex-col justify-between">
            <div>
              <div className="inline-block px-3 py-1 bg-[#F5EFE6] border border-[#E3D9C6] text-xs font-semibold uppercase tracking-wider text-[#7A533E] rounded-xs mb-6">
                Bakery Studio &amp; Order Desk
              </div>

              <h3 className="font-serif text-3xl text-[#1B120D] font-normal mb-3">
                {BUSINESS_INFO.name}
              </h3>
              <p className="text-xs font-medium uppercase tracking-wider text-[#7A533E] mb-6">
                {BUSINESS_INFO.category} • Lucknow, Uttar Pradesh
              </p>

              <div className="space-y-5 text-sm text-[#4A3B32]">
                <div className="flex items-start gap-3.5">
                  <MapPin className="w-5 h-5 text-[#B87A4C] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#1B120D] block mb-0.5">Address</span>
                    <p className="text-[#615146] leading-relaxed">
                      {BUSINESS_INFO.addressLine1},<br />
                      {BUSINESS_INFO.addressLine2}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Phone className="w-5 h-5 text-[#B87A4C] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#1B120D] block mb-0.5">Telephone</span>
                    <a
                      href={BUSINESS_INFO.phoneTel}
                      className="text-[#1B120D] font-medium transition-transform active:scale-98 inline-block"
                      aria-label="Call 07007791342"
                    >
                      {BUSINESS_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Clock className="w-5 h-5 text-[#B87A4C] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#1B120D] block mb-0.5">Operating Hours</span>
                    <p className="text-[#615146]">{BUSINESS_INFO.hours}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-8 mt-8 border-t border-[#EFE9DC] flex flex-col sm:flex-row gap-3">
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold uppercase tracking-wider text-white bg-[#291B14] rounded-sm transition-all duration-150 hover:bg-[#140C07] active:scale-98"
              >
                <Navigation className="w-4 h-4 text-white" />
                <span>Get Directions</span>
              </a>

              <a
                href={BUSINESS_INFO.phoneTel}
                className="inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold uppercase tracking-wider text-[#2D231E] bg-[#F2EBDC] border border-[#E3D9C6] rounded-sm transition-all duration-150 hover:bg-[#EAE1D2] active:scale-98"
              >
                <Phone className="w-3.5 h-3.5 text-[#7A533E]" />
                <span>Call Us</span>
              </a>
            </div>

          </div>

          {/* Visual Map / Directions Portal Card */}
          <div className="lg:col-span-7 bg-[#FCFBF7] rounded-xl border border-[#EDE4D6] overflow-hidden shadow-[0_4px_16px_rgba(40,24,18,0.04)] flex flex-col">
            
            <div className="p-6 bg-[#F7F4EC] border-b border-[#EFE9DC] flex items-center justify-between">
              <div>
                <span className="text-xs uppercase tracking-wider text-[#7A533E] font-semibold block">
                  Google Business Profile
                </span>
                <span className="font-serif text-lg text-[#1B120D]">
                  Location &amp; Landmark Guide
                </span>
              </div>

              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#2D231E] bg-white px-3 py-1.5 rounded-sm border border-[#E3D9C6] hover:bg-[#F2EBDC] transition-colors"
              >
                <span>Open in Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Stylized Map Viewport */}
            <div className="flex-1 min-h-[300px] relative bg-[#EDE4D6] flex items-center justify-center p-6 text-center">
              
              {/* Subtle map grid background styling */}
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#7A533E_1px,transparent_1px)] [background-size:16px_16px]" />

              <div className="relative z-10 max-w-sm bg-[#FCFBF7] p-6 rounded-lg border border-[#E3D9C6] shadow-md">
                <div className="w-12 h-12 rounded-full bg-[#F5EFE6] text-[#B87A4C] flex items-center justify-center mx-auto mb-3 shadow-inner">
                  <MapPin className="w-6 h-6" />
                </div>
                <h4 className="font-serif text-xl text-[#1B120D] mb-1">
                  Cozy Baked
                </h4>
                <p className="text-xs text-[#615146] mb-4">
                  D-21, IIM Rd, Madhupuram Colony, Bhitauli, Lucknow, Uttar Pradesh 226013
                </p>
                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 w-full py-2.5 px-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#291B14] rounded-sm hover:bg-[#140C07] transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Navigate with Google Maps</span>
                </a>
              </div>

            </div>

            <div className="p-4 bg-[#FBF9F5] border-t border-[#EFE9DC] text-xs text-[#736357] flex flex-wrap items-center justify-between gap-2">
              <span>Landmarks: Near Bhitauli Crossing &amp; IIM Lucknow stretch</span>
              <span>Pickup &amp; Delivery Support available</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
