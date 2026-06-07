import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section 
      className="relative min-h-screen w-full flex flex-col justify-center items-center select-none overflow-hidden bg-transparent pointer-events-none"
    >
      {/* Centered Brutalist Typography Block */}
      <div className="w-full max-w-[1400px] px-6 text-center z-10 flex flex-col items-center justify-center py-24">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center font-national font-black uppercase tracking-[-3.38px] leading-[0.8] md:leading-[0.85]"
        >
          {/* DIGITAL PRODUCTS (Line 1) */}
          <h2 
            className="text-[48px] sm:text-[90px] md:text-[140px] lg:text-[168px] text-white select-none"
            style={{
              textShadow: "0px 3.036px 25.803px rgba(0,0,0,0.52)",
              lineHeight: "1.0"
            }}
          >
            DIGITAL PRODUCTS
          </h2>

          {/* BUILT TO (Line 2) */}
          <h2 
            className="text-[48px] sm:text-[90px] md:text-[140px] lg:text-[168px] text-white select-none mt-2 md:mt-4"
            style={{
              textShadow: "0px 3.036px 25.803px rgba(0,0,0,0.52)",
              lineHeight: "1.0"
            }}
          >
            BUILT TO
          </h2>

          {/* STAND OUT (Line 3) */}
          <h2 
            className="text-[64px] sm:text-[130px] md:text-[210px] lg:text-[250px] text-brand-purple select-none mt-4 md:mt-6"
            style={{
              textShadow: "0px 3.036px 25.803px rgba(0,0,0,0.35)",
              lineHeight: "0.9"
            }}
          >
            STAND OUT
          </h2>
        </motion.div>
      </div>

      {/* Buttons Positioned in Bottom-Left Corner (73px margin on desktop) */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-[6%] left-6 md:left-[73px] z-25 flex flex-wrap items-center gap-4 pointer-events-auto"
      >
        {/* See Pricing Button */}
        <a
          href="#pricing"
          className="bg-brand-purple text-white px-8 py-4 rounded-[50px] font-inter font-semibold text-[16px] md:text-[18px] tracking-nav-tight shadow-[0px_4px_4px_rgba(0,0,0,0.25)] hover:bg-brand-purpleMuted transition-all duration-300 transform hover:-translate-y-0.5"
        >
          {t('hero.pricingBtn')}
        </a>

        {/* Book Call Button with Live Dot */}
        <a
          href="#call"
          className="bg-white text-black px-6 py-3.5 rounded-[50px] font-inter font-semibold text-[13.7px] tracking-nav-tight shadow-[0px_2px_4px_rgba(108,113,128,0.08),0px_7px_7px_rgba(108,113,128,0.07)] flex items-center gap-3 border border-studio-gray-divider hover:bg-neutral-50 transition-all duration-300 transform hover:-translate-y-0.5 animate-none"
        >
          {/* Avatar Placeholder */}
          <div className="w-8 h-8 rounded-full bg-studio-gray-divider overflow-hidden flex items-center justify-center text-[10px] font-bold text-studio-gray-dark">
            AG
          </div>
          
          <div className="flex flex-col items-start leading-none">
            <span className="text-black font-semibold text-[13.7px] leading-tight">
              {t('hero.bookCallBtn')}
            </span>
            <span className="flex items-center gap-1.5 mt-0.5">
              <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse"></span>
              <span className="text-[12px] font-semibold text-studio-gray-medium">
                {t('hero.availableNow')}
              </span>
            </span>
          </div>
        </a>
      </motion.div>
    </section>
  );
}
