import React, { useRef, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Philosophy() {
  const { t } = useLanguage();
  const containerRef = useRef(null);
  const highlightRef = useRef(null);
  const glowRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // High-performance pointer tracking: updates CSS variables directly to avoid React state re-renders
  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (glowRef.current) {
      glowRef.current.style.setProperty('--mouse-x', `${x}px`);
      glowRef.current.style.setProperty('--mouse-y', `${y}px`);
    }

    if (highlightRef.current) {
      const highlightRect = highlightRef.current.getBoundingClientRect();
      const hX = e.clientX - highlightRect.left;
      const hY = e.clientY - highlightRect.top;
      highlightRef.current.style.setProperty('--mouse-x', `${hX}px`);
      highlightRef.current.style.setProperty('--mouse-y', `${hY}px`);
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (highlightRef.current) {
      highlightRef.current.style.setProperty('--spotlight-radius', '260px');
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (highlightRef.current) {
      highlightRef.current.style.setProperty('--spotlight-radius', '0px');
    }
  };

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative w-full min-h-[85vh] bg-[#131313] py-24 px-6 md:px-[73px] flex items-center justify-center select-none overflow-hidden z-20 transition-colors duration-500"
    >
      {/* Volumetric Radial Glow following the cursor */}
      <div 
        ref={glowRef}
        style={{
          left: 'var(--mouse-x, -1000px)',
          top: 'var(--mouse-y, -1000px)',
          transform: 'translate(-50%, -50%)',
          opacity: isHovered ? 1 : 0
        }}
        className="pointer-events-none absolute w-[450px] h-[450px] bg-brand-purple/5 rounded-full blur-[90px] z-10 transition-opacity duration-500 ease-out will-change-transform"
      />

      <div className="w-full max-w-[1400px] relative flex flex-col items-center justify-center">
        
        {/* Core Philosophy label */}
        <span className="font-mono text-[12px] md:text-[14px] text-white/30 uppercase tracking-[0.2em] mb-12 select-none">
          - CORE PHILOSOPHY -
        </span>

        {/* Text Area */}
        <div className="relative w-full text-center py-6">
          
          {/* Sibling Alignment Wrapper (Ensures absolute layer aligns perfectly with static layer) */}
          <div className="relative inline-block w-full">
            {/* Base Layer: Dark/Dimmed text sitting in the background */}
            <div className="font-national font-black uppercase text-[clamp(2.4rem,7.5vw,9.2rem)] leading-[0.9] text-white/10 tracking-[-0.04em]">
              <p className="mb-2">{t('philosophy.line1')}</p>
              <p className="mb-2">{t('philosophy.line2')}</p>
              <p className="mb-2">{t('philosophy.line3')}</p>
              <p>{t('philosophy.line4')}</p>
            </div>

            {/* Masked Highlight Layer: Volumetric text revealed by CSS mask */}
            <div 
              ref={highlightRef}
              style={{
                maskImage: 'radial-gradient(circle var(--spotlight-radius, 0px) at var(--mouse-x, -1000px) var(--mouse-y, -1000px), black 20%, transparent 100%)',
                WebkitMaskImage: 'radial-gradient(circle var(--spotlight-radius, 0px) at var(--mouse-x, -1000px) var(--mouse-y, -1000px), black 20%, transparent 100%)'
              }}
              className="absolute inset-0 font-national font-black uppercase text-[clamp(2.4rem,7.5vw,9.2rem)] leading-[0.9] text-white tracking-[-0.04em] select-none pointer-events-none"
            >
              <p className="mb-2">{t('philosophy.line1')}</p>
              <p className="mb-2">{t('philosophy.line2')}</p>
              <p className="mb-2">{t('philosophy.line3')}</p>
              <p className="text-brand-purple">{t('philosophy.line4')}</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
