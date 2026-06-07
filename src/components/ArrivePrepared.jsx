import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';

function AccordionRow({ item }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="w-full border-t border-[#fefefe]/20 py-6 flex items-center justify-between group cursor-pointer hover:bg-white/[0.01] transition-all duration-300 select-none overflow-hidden"
    >
      {/* Question & Answer Container */}
      <div className="flex flex-row items-baseline gap-3 flex-wrap text-left pr-4">
        {/* Question Title */}
        <span className="font-helvetica font-semibold text-[16px] md:text-[21.4px] text-[#fefefe] tracking-tight">
          {item.q}
        </span>
        
        {/* Quick Answer */}
        <span className="font-helvetica font-normal text-[15px] md:text-[21.3px] text-gray-400 group-hover:text-white/80 transition-colors duration-300 tracking-tight">
          {item.a}
        </span>
      </div>

      {/* Interactive Plus Icon */}
      <div className="w-[18px] h-[18px] flex items-center justify-center shrink-0 mr-1 select-none pointer-events-none">
        <motion.div 
          animate={{ rotate: isHovered ? 45 : 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full h-full"
        >
          {/* Horizontal line */}
          <div className="absolute top-[50%] left-0 w-full h-[2px] -translate-y-[50%] bg-[#fefefe] rounded-sm" />
          {/* Vertical line */}
          <div className="absolute top-0 left-[50%] h-full w-[2px] -translate-x-[50%] bg-[#fefefe] rounded-sm" />
        </motion.div>
      </div>
    </div>
  );
}

export default function ArrivePrepared() {
  const { t } = useLanguage();
  
  const statementText = t('arrivePrepared.statement');
  const items = t('arrivePrepared.items') || [];

  return (
    <section className="relative w-full bg-[#131313] pb-32 pt-12 px-6 md:px-[73px] lg:px-[117px] select-none flex flex-col justify-start overflow-visible z-20">
      
      {/* Content wrapper: stacks on mobile, columns on desktop */}
      <div className="w-full max-w-[1688px] mx-auto flex flex-col lg:flex-row lg:justify-between gap-16 lg:gap-[120px] overflow-visible">
        
        {/* Left Column: Statement (aligned to bottom on desktop) */}
        <div className="w-full lg:max-w-[300px] text-left lg:self-stretch flex flex-col justify-end shrink-0">
          <p className="font-helvetica font-bold text-[16px] md:text-[17.8px] text-[#fefefe] leading-[1.15] tracking-tight max-w-[280px]">
            {statementText}
          </p>
        </div>

        {/* Right Column: Accordion-style Stack */}
        <div className="w-full lg:max-w-[938px] flex flex-col overflow-visible">
          {Array.isArray(items) && items.map((item, index) => (
            <AccordionRow 
              key={index} 
              item={item} 
            />
          ))}
          {/* Closing bottom divider line */}
          <div className="w-full border-b border-[#fefefe]/20" />
        </div>

      </div>

    </section>
  );
}
