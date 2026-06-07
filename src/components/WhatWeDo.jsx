import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';

// Assets from Figma Dev Mode
const imgMediaPreview = "/images/image-3.png";
const imgButtonWatchVideo = "http://localhost:3845/assets/6ac536502359fa574a9d9b9b64fb368a9c6e93d7.svg";

export default function WhatWeDo() {
  const { t } = useLanguage();

  return (
    <section className="w-full bg-[#131313] text-white py-24 px-6 md:px-[93px] select-none flex flex-col items-center justify-center">
      <div className="w-full max-w-[1734px] grid grid-cols-1 lg:grid-cols-[634px_1fr] gap-12 lg:gap-24 items-center">
        {/* Left Column: Media Card */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full aspect-[1.63] rounded-lg overflow-hidden border border-studio-gray-divider/20 shadow-2xl shrink-0"
        >
          {/* Desaturated Silhouette Preview */}
          <img 
            src={imgMediaPreview} 
            alt="Agency workflow video preview" 
            className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-700 ease-in-out cursor-pointer"
          />
          
          {/* Floating Play/Pause Action Indicator Overlay */}
          <div className="absolute bottom-4 right-4 w-[60px] h-[60px] md:w-[82.38px] md:h-[82.38px] cursor-pointer hover:scale-105 active:scale-95 transition-transform duration-300">
            <img 
              src={imgButtonWatchVideo} 
              alt="Play video indicator" 
              className="w-full h-full"
            />
          </div>
        </motion.div>

        {/* Right Column: Title & Brutalist Copy */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-start text-left"
        >
          {/* What We Do Label */}
          <span className="font-helvetica font-bold text-[20px] md:text-[28.5px] text-[#FEFEFE] border-b-2 border-white pb-1 tracking-wider uppercase mb-8 md:mb-12 cursor-default select-none">
            {t('whatWeDo.label')}
          </span>

          {/* Massive brutalist copy */}
          <h3 className="font-helvetica font-bold text-[32px] sm:text-[44px] md:text-[60px] lg:text-[72px] xl:text-[78.6px] text-white leading-[1.05] tracking-[-1.5px] md:tracking-[-2px] uppercase">
            {t('whatWeDo.titlePart1')}
            <span className="font-helvetica font-black text-[38px] sm:text-[54px] md:text-[76px] lg:text-[88px] xl:text-[96px] text-brand-purple tracking-[0px] block mt-4 select-none">
              {t('whatWeDo.titlePart2')}
            </span>
          </h3>
        </motion.div>
      </div>
    </section>
  );
}
