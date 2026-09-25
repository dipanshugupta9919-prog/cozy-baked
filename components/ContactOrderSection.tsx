'use client';

import { useState } from 'react';
import { Phone, MessageSquare, Send, Sparkles, Calendar, CheckCircle } from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/data';

export function ContactOrderSection() {
  const [occasion, setOccasion] = useState('Birthday');
  const [cakeFlavor, setCakeFlavor] = useState('Belgian Chocolate Truffle');
  const [weight, setWeight] = useState('1.0 kg');
  const [dietary, setDietary] = useState('Eggless');
  const [date, setDate] = useState('');
  const [notes, setNotes] = useState('');
  const [formSent, setFormSent] = useState(false);

  const occasions = [
    'Birthday',
    'Anniversary',
    'Wedding / Ring Ceremony',
    'Milestone / Graduation',
    'Baby Shower',
    'Custom Celebration',
  ];

  const flavorOptions = [
    'Belgian Chocolate Truffle',
    'Vanilla Bean Raspberry Swirl',
    'Rose Pistachio Cream',
    'Lotus Biscoff Caramel',
    'Red Velvet Cream Cheese',
    'Fresh Fruit Medley',
    'Custom Artisan Flavor',
  ];

  const weightOptions = ['0.5 kg (4-6 Servings)', '1.0 kg (8-10 Servings)', '1.5 kg (12-15 Servings)', '2.0 kg+ / Multi-Tier'];

  const handleSendWhatsAppOrder = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = 
      `*New Cake Enquiry - Cozy Baked Lucknow*\n\n` +
      `• *Occasion:* ${occasion}\n` +
      `• *Preferred Flavor:* ${cakeFlavor}\n` +
      `• *Weight/Size:* ${weight}\n` +
      `• *Dietary Preference:* ${dietary}\n` +
      `• *Celebration Date:* ${date || 'To be decided'}\n` +
      `• *Special Requests:* ${notes || 'None specified'}\n\n` +
      `Looking forward to discussing details and pricing!`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/917007791342?text=${encoded}`, '_blank', 'noopener,noreferrer');
    setFormSent(true);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#FCFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#7A533E] font-sans block mb-3">
            Start Planning
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1B120D] tracking-tight font-normal mb-4">
            Let&apos;s Make Your Celebration Sweeter
          </h2>
          <p className="text-base text-[#615146] font-normal leading-relaxed">
            Have a celebration coming up? Get in touch with Cozy Baked and start planning your cake.
          </p>

          {/* Direct CTA Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={BUSINESS_INFO.phoneTel}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#291B14] rounded-sm transition-all duration-150 hover:bg-[#140C07] hover:shadow-md active:scale-98"
              aria-label="Call Cozy Baked at 07007791342"
            >
              <Phone className="w-4 h-4 text-[#E6A87C]" />
              <span>Call Cozy Baked (07007791342)</span>
            </a>

            <a
              href={BUSINESS_INFO.whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#25D366] rounded-sm transition-all duration-150 hover:bg-[#20BA5A] hover:shadow-md active:scale-98"
            >
              <MessageSquare className="w-4 h-4 text-white" />
              <span>Order on WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Interactive Cake Order Planner */}
        <div className="max-w-3xl mx-auto bg-[#FBF9F5] rounded-2xl border border-[#EDE4D6] p-6 sm:p-10 shadow-[0_4px_20px_rgba(40,24,18,0.05)]">
          
          <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#EFE9DC]">
            <div>
              <span className="text-xs uppercase tracking-wider text-[#7A533E] font-semibold block">
                Instant Consultation Planner
              </span>
              <h3 className="font-serif text-2xl text-[#1B120D]">
                Customize &amp; Pre-Fill Your WhatsApp Order
              </h3>
            </div>
            <Sparkles className="w-5 h-5 text-[#B87A4C]" />
          </div>

          <form onSubmit={handleSendWhatsAppOrder} className="space-y-6">
            
            {/* Occasion Selection */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#2D231E] mb-2">
                1. What is the Occasion?
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {occasions.map((occ) => (
                  <button
                    key={occ}
                    type="button"
                    onClick={() => setOccasion(occ)}
                    className={`py-2 px-3 text-xs rounded-xs border text-left transition-colors cursor-pointer ${
                      occasion === occ
                        ? 'bg-[#291B14] text-white border-[#291B14] font-medium'
                        : 'bg-[#FCFBF7] text-[#4A3B32] border-[#E3D9C6] hover:bg-[#F2EBDC]'
                    }`}
                  >
                    {occ}
                  </button>
                ))}
              </div>
            </div>

            {/* Flavor Selection */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#2D231E] mb-2">
                  2. Preferred Flavor Palette
                </label>
                <select
                  value={cakeFlavor}
                  onChange={(e) => setCakeFlavor(e.target.value)}
                  className="w-full bg-[#FCFBF7] border border-[#E3D9C6] rounded-xs px-3.5 py-2.5 text-sm text-[#2D231E] focus:outline-hidden focus:border-[#7A533E]"
                >
                  {flavorOptions.map((f) => (
                    <option key={f} value={f}>
                      {f}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#2D231E] mb-2">
                  3. Approximate Size / Weight
                </label>
                <select
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  className="w-full bg-[#FCFBF7] border border-[#E3D9C6] rounded-xs px-3.5 py-2.5 text-sm text-[#2D231E] focus:outline-hidden focus:border-[#7A533E]"
                >
                  {weightOptions.map((w) => (
                    <option key={w} value={w}>
                      {w}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Dietary & Date */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#2D231E] mb-2">
                  4. Dietary Preference
                </label>
                <div className="flex gap-2">
                  {['Eggless (100% Vegetarian)', 'Standard'].map((pref) => (
                    <button
                      key={pref}
                      type="button"
                      onClick={() => setDietary(pref)}
                      className={`flex-1 py-2 px-3 text-xs rounded-xs border transition-colors cursor-pointer ${
                        dietary === pref
                          ? 'bg-[#291B14] text-white border-[#291B14] font-medium'
                          : 'bg-[#FCFBF7] text-[#4A3B32] border-[#E3D9C6] hover:bg-[#F2EBDC]'
                      }`}
                    >
                      {pref}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#2D231E] mb-2">
                  5. Celebration Date
                </label>
                <div className="relative">
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full bg-[#FCFBF7] border border-[#E3D9C6] rounded-xs px-3.5 py-2 text-sm text-[#2D231E] focus:outline-hidden focus:border-[#7A533E]"
                  />
                </div>
              </div>
            </div>

            {/* Custom Notes */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#2D231E] mb-2">
                6. Custom Details, Name on Cake, or Special Requests
              </label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={2}
                placeholder="E.g. Inscription 'Happy 25th Maya', pastel peach palette, or reference image ready to share..."
                className="w-full bg-[#FCFBF7] border border-[#E3D9C6] rounded-xs p-3 text-sm text-[#2D231E] placeholder:text-[#A8988D] focus:outline-hidden focus:border-[#7A533E]"
              />
            </div>

            {/* Submit directly to WhatsApp */}
            <div className="pt-4 border-t border-[#EFE9DC] flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-[#736357]">
                Clicking below opens WhatsApp with your configured order details.
              </span>

              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#25D366] hover:bg-[#20BA5A] rounded-sm transition-all duration-150 hover:shadow-md active:scale-98 cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Send via WhatsApp</span>
              </button>
            </div>

            {formSent && (
              <div className="p-3 bg-[#EAF7EE] border border-[#BDE8C8] rounded-sm text-xs text-[#1F6E3B] flex items-center gap-2">
                <CheckCircle className="w-4 h-4 shrink-0" />
                <span>Order preview opened in WhatsApp! Our baker will respond promptly.</span>
              </div>
            )}

          </form>

        </div>

      </div>
    </section>
  );
}
