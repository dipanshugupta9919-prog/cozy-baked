'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface OpeningAnimationProps {
  onComplete?: () => void;
}

export function OpeningAnimation({ onComplete }: OpeningAnimationProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Check prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      const skipTimer = setTimeout(() => {
        setIsVisible(false);
        onComplete?.();
      }, 0);
      return () => clearTimeout(skipTimer);
    }

    const timer = setTimeout(() => {
      setIsVisible(false);
      onComplete?.();
    }, 1250);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="intro-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#FCFBF7] text-[#1B120D] cursor-pointer"
          onClick={() => {
            setIsVisible(false);
            onComplete?.();
          }}
          role="status"
          aria-live="polite"
          aria-label="Loading Cozy Baked"
        >
          <div className="flex flex-col items-center px-6 text-center max-w-md">
            {/* Business Logo Emblem */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 border-[#E8DDD0] shadow-md bg-[#FCFBF7] mb-4 p-1"
            >
              <img
                src="/images/cozy_baked_logo.jpg"
                alt="Cozy Baked Logo"
                className="w-full h-full object-cover rounded-full"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            <motion.span
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xs tracking-[0.3em] uppercase text-[#7A533E] font-medium mb-1.5"
            >
              Lucknow · Artisanal Patisserie
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-3xl sm:text-4xl md:text-5xl tracking-tight text-[#1B120D] font-normal"
            >
              Cozy Baked
            </motion.h1>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.7, delay: 0.35, ease: 'easeInOut' }}
              className="w-14 h-px bg-[#B87A4C] my-3"
            />

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="flex items-center gap-2 text-xs text-[#7A533E]/90 tracking-widest font-sans"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#2E7D32]" />
              <span>100% VEGETARIAN · BEAUTIFUL CAKES</span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
