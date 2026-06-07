import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';

// Live Figma asset URLs for backgrounds and overlays
const imgImage17 = "/images/471857277f11985e7bb8d4b2e57268c98a943fd4.png";
const imgUnion = "/images/148674cc8011d1a3a9cd506ec84745f54bd6bb95.svg";
const imgImage14 = "/images/3dd1f3c3004603ecc4ef221f9d8c0ff8094b675c.png";
const imgImage15 = "/images/3fb4b7f11d1f44a03a3c3aa2d38e4c023ba53a3b.png";
const imgGroup5 = "/images/8808074b05664288dc1fba3fcfd3b5cac7b5ffed.svg";
const imgVector = "/images/4d42e0df1ded18c5fba67a9dfa6ef909a6409940.svg";
const imgSubtract = "/images/6bebd4345bbe48be5b1bf2478c6f1039b1226cf0.svg";
const imgSubtract1 = "/images/294d18c8873f6bb4f540668ded62786da1ab19c1.svg";
const imgSubtract2 = "/images/9d54cb7cec4ae0aef3eafa108fc5183e47abaf6b.svg";
const imgVector1 = "/images/8c24f2f8812f8e770525c91f94f0fb21046abb27.svg";
const imgVector2 = "/images/9b956006e8ef3b4c544fc2f174469e18cbe07a25.svg";

// Service rows data definition
const servicesData = [
  {
    id: 1,
    numStr: "( 1 )",
    aspect: "aspect-[2/1]",
    rotateClass: "group-hover:rotate-12",
    finalRotate: 12,
    bgImage: imgImage17,
    overlays: (
      <>
        <div className="absolute" style={{ top: '28.06%', right: '28.62%', bottom: '33.68%', left: '29.8%' }}>
          <img src={imgVector} className="w-full h-full object-contain pointer-events-none" alt="" />
        </div>
        <div className="absolute" style={{ top: '55.54%', right: '43.94%', bottom: '28.33%', left: '44.67%' }}>
          <img src={imgSubtract} className="w-full h-full object-contain pointer-events-none" alt="" />
        </div>
        <div className="absolute" style={{ top: '45.94%', right: '43.54%', bottom: '46.35%', left: '50.92%' }}>
          <img src={imgSubtract1} className="w-full h-full object-contain pointer-events-none" alt="" />
        </div>
        <div className="absolute" style={{ top: '45.94%', right: '49.75%', bottom: '46.34%', left: '44.78%' }}>
          <img src={imgSubtract2} className="w-full h-full object-contain pointer-events-none" alt="" />
        </div>
        <div className="absolute" style={{ top: '42.78%', right: '55.57%', bottom: '46.19%', left: '39.05%' }}>
          <img src={imgVector1} className="w-full h-full object-contain pointer-events-none" alt="" />
        </div>
        <div className="absolute" style={{ top: '42.78%', right: '37.6%', bottom: '46.18%', left: '57.01%' }}>
          <img src={imgVector2} className="w-full h-full object-contain pointer-events-none" alt="" />
        </div>
      </>
    )
  },
  {
    id: 2,
    numStr: "( 2 )",
    aspect: "aspect-[1.78/1]",
    rotateClass: "group-hover:-rotate-12",
    finalRotate: -12,
    bgImage: imgImage15,
    overlays: (
      <div className="absolute" style={{ top: '31.01%', right: '34.57%', bottom: '31.42%', left: '37.05%' }}>
        <img src={imgGroup5} className="w-full h-full object-contain pointer-events-none" alt="" />
      </div>
    )
  },
  {
    id: 3,
    numStr: "( 3 )",
    aspect: "aspect-[1.78/1]",
    rotateClass: "group-hover:rotate-6",
    finalRotate: 6,
    bgImage: imgImage14,
    overlays: (
      <div className="absolute inset-0 flex items-center justify-center font-national font-black text-white text-[12px] md:text-[14px] uppercase tracking-wider select-none pointer-events-none">
        Ui/Ux
      </div>
    )
  },
  {
    id: 4,
    numStr: "( 4 )",
    aspect: "aspect-[1.78/1]",
    rotateClass: "group-hover:-rotate-[8deg]",
    finalRotate: -8,
    bgImage: imgImage14,
    overlays: (
      <div className="absolute inset-0 flex items-center justify-center font-national font-black text-white text-[14px] md:text-[18px] select-none pointer-events-none">
        &lt;/&gt;
      </div>
    )
  },
  {
    id: 5,
    numStr: "( 5 )",
    aspect: "aspect-[2/1]",
    rotateClass: "group-hover:rotate-[15deg]",
    finalRotate: 15,
    bgImage: imgImage17,
    overlays: (
      <div className="absolute" style={{ top: '27.13%', right: '34.69%', bottom: '27.26%', left: '35.24%' }}>
        <img src={imgUnion} className="w-full h-full object-contain pointer-events-none" alt="" />
      </div>
    )
  }
];

function ServiceRow({ item }) {
  const { t } = useLanguage();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative w-full flex flex-col md:flex-row md:items-center justify-between md:h-[121px] py-8 md:py-0 border-t border-white/10 hover:bg-white/[0.01] transition-colors duration-300 cursor-pointer overflow-visible"
    >
      {/* Left side info: Number & Service name */}
      <div className="flex items-center gap-6 md:gap-[38px] select-none z-10">
        {/* Number identifier */}
        <span className="font-helvetica font-black text-[clamp(1.8rem,2.8vw,2.93rem)] text-[#4e37ff] tracking-[-1.703px] w-[100px] shrink-0">
          {item.numStr}
        </span>
        
        {/* Title of the service */}
        <motion.span 
          animate={{ x: isHovered ? 12 : 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="font-helvetica font-bold text-[clamp(2rem,3.4vw,3.45rem)] text-[#fefefe] leading-[1.1] tracking-[-1.703px]"
        >
          {t(`services.items.${item.id}`)}
        </motion.span>
      </div>

      {/* Right side container: Graphic Preview revealed on Hover */}
      <div className="relative mt-6 md:mt-0 flex items-center justify-start md:justify-end pr-2 md:pr-12 h-[90px] md:h-[130px] select-none z-20 overflow-visible">
        <AnimatePresence>
          {isHovered && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.4, rotate: 0, x: 60 }}
              animate={{ opacity: 1, scale: 1, rotate: item.finalRotate, x: 0 }}
              exit={{ opacity: 0, scale: 0.4, rotate: 0, x: 60 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className={`relative h-[90px] md:h-[130px] ${item.aspect} bg-black border border-white/15 overflow-hidden shadow-2xl rounded-sm shrink-0 will-change-transform`}
            >
              {/* Main rotated background image */}
              <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                <img 
                  src={item.bgImage} 
                  className="w-full h-full object-cover -rotate-90 scale-150 pointer-events-none select-none brightness-[0.85] contrast-[1.15]" 
                  alt="" 
                />
              </div>

              {/* Precise Vector Overlays */}
              {item.overlays}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default function Services() {
  const { t } = useLanguage();

  return (
    <section className="relative w-full bg-[#131313] py-24 px-6 md:px-[73px] lg:px-[117px] select-none flex flex-col justify-start overflow-visible z-20">
      
      {/* Massive brutalist title section */}
      <div className="w-full flex justify-start items-center mb-16 md:mb-24 select-none">
        <h2 
          style={{ textShadow: "0px 4px 43px rgba(0,0,0,0.85)" }}
          className="font-national font-black uppercase text-[clamp(4.5rem,14.5vw,13.4rem)] leading-[0.72] text-[#fefefe] tracking-[-6.64px]"
        >
          {t('services.title')}
        </h2>
      </div>

      {/* Services List Content container */}
      <div className="w-full flex flex-col max-w-[1688px] mx-auto overflow-visible">
        {servicesData.map((item) => (
          <ServiceRow key={item.id} item={item} />
        ))}
        {/* Final closing horizontal divider */}
        <div className="w-full border-b border-white/10" />
      </div>

    </section>
  );
}
