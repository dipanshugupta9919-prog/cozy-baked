'use client';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'compact' | 'emblem';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
}

export function Logo({
  className = '',
  variant = 'compact',
  size = 'md',
  showSubtitle = true,
}: LogoProps) {
  // Dimension mappings
  const sizeMap = {
    sm: { img: 'w-8 h-8', text: 'text-xl', badge: 'text-[9px]' },
    md: { img: 'w-10 h-10', text: 'text-2xl', badge: 'text-[10px]' },
    lg: { img: 'w-16 h-16', text: 'text-3xl', badge: 'text-xs' },
    xl: { img: 'w-28 h-28', text: 'text-4xl', badge: 'text-sm' },
  };

  const currentSize = sizeMap[size];

  if (variant === 'full') {
    return (
      <div className={`flex flex-col items-center text-center ${className}`}>
        {/* Full circular logo emblem */}
        <div className="relative rounded-full overflow-hidden shadow-sm border border-[#E8DDD0] bg-[#FCFBF7] p-1">
          <img
            src="/images/cozy_baked_logo.jpg"
            alt="Cozy Baked - Beautiful Cake for Occasions - 100% Vegetarian"
            className="w-32 h-32 sm:w-36 sm:h-36 object-cover rounded-full"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    );
  }

  if (variant === 'emblem') {
    return (
      <div className={`relative rounded-full overflow-hidden shadow-xs border border-[#E8DDD0] bg-[#FCFBF7] ${className}`}>
        <img
          src="/images/cozy_baked_logo.jpg"
          alt="Cozy Baked Logo Emblem"
          className="w-full h-full object-cover rounded-full"
          referrerPolicy="no-referrer"
        />
      </div>
    );
  }

  // 'compact' variant for top navigation bar & headers
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Circular Logo Emblem */}
      <div className={`relative rounded-full overflow-hidden shadow-xs border border-[#E8DDD0] bg-[#FCFBF7] shrink-0 ${currentSize.img}`}>
        <img
          src="/images/cozy_baked_logo.jpg"
          alt="Cozy Baked Logo"
          className="w-full h-full object-cover rounded-full"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Brand Name & 100% Vegetarian marker */}
      <div className="flex flex-col text-left">
        <span className={`font-serif tracking-tight text-[#1B120D] leading-none font-normal ${currentSize.text}`}>
          Cozy Baked
        </span>
        {showSubtitle && (
          <div className="flex items-center gap-1.5 mt-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2E7D32] inline-block shrink-0" aria-hidden="true" />
            <span className="text-[10px] tracking-wider uppercase font-semibold text-[#5A483D] font-sans">
              100% Vegetarian
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
