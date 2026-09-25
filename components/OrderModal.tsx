'use client';

import { useState } from 'react';
import { X, Phone, MessageSquare, Send, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/data';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function OrderModal({ isOpen, onClose }: OrderModalProps) {
  const [occasion, setOccasion] = useState('Birthday');
  const [flavor, setFlavor] = useState('Belgian Chocolate Truffle');
  const [weight, setWeight] = useState('1.0 kg');
  const [date, setDate] = useState('');
  const [dietary, setDietary] = useState('Eggless');
  const [notes, setNotes] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `*Order Enquiry - Cozy Baked Lucknow*\n\n` +
      `• *Occasion:* ${occasion}\n` +
      `• *Flavor:* ${flavor}\n` +
      `• *Size:* ${weight}\n` +
      `• *Dietary:* ${dietary}\n` +
      `• *Date Needed:* ${date || 'Flexible'}\n` +
      `• *Notes:* ${notes || 'None'}\n\n` +
      `Please let me know availability and price estimate.`
    );
    window.open(`https://wa.me/917007791342?text=${text}`, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Order a cake from Cozy Baked"
    >
      <div
        className="bg-[#FCFBF7] rounded-xl border border-[#EDE4D6] max-w-lg w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#EFE9DC]">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full overflow-hidden border border-[#E3D9C6] bg-white shrink-0 p-0.5 shadow-xs">
              <img
                src="/images/cozy_baked_logo.jpg"
                alt="Cozy Baked Logo"
                className="w-full h-full object-cover rounded-full"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2E7D32]" />
                <span className="text-[10px] uppercase tracking-widest text-[#7A533E] font-medium block">
                  Cozy Baked · 100% Veg
                </span>
              </div>
              <h3 className="font-serif text-2xl text-[#1B120D] font-normal leading-tight">
                Order Your Celebration Cake
              </h3>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded text-[#4A3B32] hover:bg-[#F2EBDC] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#2D231E] mb-1.5">
              Occasion
            </label>
            <select
              value={occasion}
              onChange={(e) => setOccasion(e.target.value)}
              className="w-full bg-[#FCFBF7] border border-[#E3D9C6] rounded-xs px-3 py-2 text-sm text-[#2D231E]"
            >
              <option value="Birthday">Birthday Celebration</option>
              <option value="Anniversary">Anniversary</option>
              <option value="Wedding / Engagement">Wedding / Engagement</option>
              <option value="Milestone / Promotion">Milestone / Promotion</option>
              <option value="Baby Shower">Baby Shower</option>
              <option value="Other Celebration">Other Celebration</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#2D231E] mb-1.5">
                Flavor
              </label>
              <select
                value={flavor}
                onChange={(e) => setFlavor(e.target.value)}
                className="w-full bg-[#FCFBF7] border border-[#E3D9C6] rounded-xs px-3 py-2 text-sm text-[#2D231E]"
              >
                <option value="Belgian Chocolate Truffle">Belgian Chocolate Truffle</option>
                <option value="Vanilla Bean Raspberry">Vanilla Bean Raspberry</option>
                <option value="Rose Pistachio">Rose Pistachio</option>
                <option value="Lotus Biscoff Crunch">Lotus Biscoff Crunch</option>
                <option value="Red Velvet Cheesecake">Red Velvet</option>
                <option value="Fresh Fruit Cake">Fresh Fruit</option>
                <option value="Custom Artisan Choice">Custom / Other</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#2D231E] mb-1.5">
                Approx. Weight
              </label>
              <select
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="w-full bg-[#FCFBF7] border border-[#E3D9C6] rounded-xs px-3 py-2 text-sm text-[#2D231E]"
              >
                <option value="0.5 kg (Small)">0.5 kg</option>
                <option value="1.0 kg (Standard)">1.0 kg</option>
                <option value="1.5 kg (Medium)">1.5 kg</option>
                <option value="2.0 kg+ / Multi-Tier">2.0 kg+ / Tiered</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#2D231E] mb-1.5">
                Dietary
              </label>
              <select
                value={dietary}
                onChange={(e) => setDietary(e.target.value)}
                className="w-full bg-[#FCFBF7] border border-[#E3D9C6] rounded-xs px-3 py-2 text-sm text-[#2D231E]"
              >
                <option value="Eggless (100% Veg)">Eggless (100% Veg)</option>
                <option value="Standard">Standard</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#2D231E] mb-1.5">
                Date Needed
              </label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full bg-[#FCFBF7] border border-[#E3D9C6] rounded-xs px-3 py-1.5 text-sm text-[#2D231E]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#2D231E] mb-1.5">
              Custom Inscription or Design Details
            </label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={2}
              placeholder="Name on cake, special theme, or message..."
              className="w-full bg-[#FCFBF7] border border-[#E3D9C6] rounded-xs p-2.5 text-sm text-[#2D231E] placeholder:text-[#A8988D]"
            />
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <button
              type="submit"
              className="w-full py-3 px-4 text-xs font-semibold uppercase tracking-wider text-white bg-[#25D366] hover:bg-[#20BA5A] rounded-sm transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Send Pre-Filled WhatsApp Order</span>
            </button>

            <a
              href={BUSINESS_INFO.phoneTel}
              className="w-full py-2.5 px-4 text-xs font-semibold uppercase tracking-wider text-[#2D231E] bg-[#F2EBDC] hover:bg-[#EAE1D2] rounded-sm transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-[#7A533E]" />
              <span>Call Us: {BUSINESS_INFO.phone}</span>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
