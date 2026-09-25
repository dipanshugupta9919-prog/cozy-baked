'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Phone, ArrowUpRight } from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/data';

interface NavbarProps {
  onOpenOrderModal?: () => void;
}

export function Navbar({ onOpenOrderModal }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 24) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'About', href: '#about' },
    { label: 'Cakes', href: '#cakes' },
    { label: 'Specials', href: '#specials' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
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
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FCFBF7]/95 backdrop-blur-md shadow-sm border-b border-[#EFE9DC]/80 py-3.5'
          : 'bg-[#FCFBF7]/75 backdrop-blur-xs py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Zone 1: Business Logo & Brand Name */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#');
            }}
            className="flex items-center gap-2.5 select-none transition-transform duration-150 active:scale-98"
            aria-label="Cozy Baked - Home"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden border border-[#E3D8C6] shadow-xs bg-[#FCFBF7] shrink-0">
              <img
                src="/images/cozy_baked_logo.jpg"
                alt="Cozy Baked Logo"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-serif text-2xl sm:text-[1.7rem] text-[#1B120D] tracking-tight font-normal leading-none">
                Cozy Baked
              </span>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2E7D32]" aria-hidden="true" />
                <span className="text-[10px] uppercase tracking-wider font-semibold text-[#7A533E] font-sans">
                  100% Vegetarian
                </span>
              </div>
            </div>
          </a>

          {/* Zone 2: 4-6 clean text navigation links (No text change on hover!) */}
          <nav className="hidden md:flex items-center space-x-7 text-sm font-medium text-[#4A3B32]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="py-1 px-1 transition-transform duration-150 active:scale-95 text-[#4A3B32] font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary action */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={BUSINESS_INFO.phoneTel}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold tracking-wide uppercase text-[#4A3B32] border border-[#E3D9C6] rounded-sm transition-all duration-150 hover:bg-[#F2EBDC] active:scale-98"
              aria-label="Call Cozy Baked at 07007791342"
            >
              <Phone className="w-3.5 h-3.5 text-[#7A533E]" />
              <span>07007791342</span>
            </a>

            <button
              onClick={() => {
                if (onOpenOrderModal) {
                  onOpenOrderModal();
                } else {
                  handleNavClick('#contact');
                }
              }}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold tracking-wider uppercase text-white bg-[#291B14] rounded-sm transition-all duration-150 hover:bg-[#1B120D] hover:shadow-sm active:scale-98 cursor-pointer"
            >
              <span>Order a Cake</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile hamburger toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-sm text-[#291B14] border border-[#E3D9C6] hover:bg-[#F2EBDC] transition-colors"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FCFBF7] border-b border-[#EFE9DC] px-5 pt-3 pb-6 shadow-xl animate-fadeIn">
          <nav className="flex flex-col space-y-3.5 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="py-2 text-base font-serif text-[#291B14] border-b border-[#F2EBDC]"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-4 flex flex-col gap-3">
              <a
                href={BUSINESS_INFO.phoneTel}
                className="flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold uppercase tracking-wider text-[#291B14] border border-[#E3D9C6] rounded-sm bg-[#F7F4EC]"
              >
                <Phone className="w-3.5 h-3.5 text-[#7A533E]" />
                <span>Call 07007791342</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenOrderModal) {
                    onOpenOrderModal();
                  } else {
                    handleNavClick('#contact');
                  }
                }}
                className="flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold uppercase tracking-wider text-white bg-[#291B14] rounded-sm shadow-sm"
              >
                <span>Order a Cake</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
