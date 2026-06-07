import React, { useRef, useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion, useScroll, useTransform } from 'framer-motion';

// Live Figma asset URLs for all 8 portfolio projects and frames
const projects = [
  {
    id: "rovo",
    title: "ROVO",
    frame: "/images/d2d940bc3698372c32d292021ffd74f6b3fc71c5.svg",
    img: "/images/17cdba68b626a1402a460a066636b78e7ff8f872.png"
  },
  {
    id: "titan",
    title: "TITANTECH INVESTMENTS",
    frame: "/images/78a55727f4087ecda145d9005cb4a5627aeaab53.svg",
    img: "/images/13fc0cb5dbde8af274397ae4d7686294540274d3.png"
  },
  {
    id: "phantasia",
    title: "FULLSTACK : pHANTASIA",
    frame: "/images/ef514bba21958c51ad68bffc464aac61605c5613.svg",
    img: "/images/7f53588473197b4b3e5ce240915d22444bfa8f32.png"
  },
  {
    id: "green-whistle",
    title: "GREEN WHISTLE",
    frame: "/images/e97d3ad12279903faeac24e95201ad737f9f71be.svg",
    img: "/images/ee606813127d2de2e504022b7bbcaa2d2edf1775.png"
  },
  {
    id: "aman-portfolio",
    title: "aman gangwar’s PORTFOLIO",
    frame: "/images/777e60dc68fcc58207d3eb5bdd0404cbb84e5bd3.svg",
    img: "/images/15a2973d5eeb80c50cc7a285d180d91f13d2757e.png"
  },
  {
    id: "the-kourse",
    title: "THE KOURSE",
    frame: "/images/46cf3dfd8ce039b98f442072ed8c8c60df3af221.svg",
    img: "/images/dbd4aceab5e42dc8fd46d7400049dddda252e03f.png"
  },
  {
    id: "dc-diamonds",
    title: "DC DIAMONDS",
    frame: "/images/7cdd531e03c3a43e99d8e39b2f2ad4ff3fbaa297.svg",
    img: "/images/a5a5337e0487e85ff4e91da07b17682a0084618f.png"
  },
  {
    id: "vaibhav-portfolio",
    title: "VAIBHAV KOTHARI’S PORTFOLIO",
    frame: "/images/9319e418765d70287452367cca8a30874ba15c32.svg",
    img: "/images/92e7ea5420cb6ae18318bfc955b0af3868b297d4.png"
  }
];

export default function Portfolio() {
  const { t } = useLanguage();
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const [xRange, setXRange] = useState([0, -1000]);

  // Track scroll position of the sticky portfolio wrapper
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Calculate translation range based on scroll track width minus window width
  useEffect(() => {
    const calculateScroll = () => {
      if (trackRef.current) {
        const trackWidth = trackRef.current.scrollWidth;
        const windowWidth = window.innerWidth;
        const scrollDistance = Math.max(0, trackWidth - windowWidth);
        setXRange([0, -scrollDistance]);
      }
    };

    calculateScroll();
    
    const resizeObserver = new ResizeObserver(() => calculateScroll());
    if (trackRef.current) {
      resizeObserver.observe(trackRef.current);
    }

    window.addEventListener('resize', calculateScroll);
    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', calculateScroll);
    };
  }, []);

  const x = useTransform(scrollYProgress, [0, 1], xRange);

  return (
    <section 
      ref={containerRef} 
      className="relative w-full h-[450vh] bg-transparent overflow-visible z-20"
    >
      {/* Sticky Carousel Viewport Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between py-12 md:py-16 bg-[#131313] border-b border-white/5">
        
        {/* Fixed Header Layout (No absolute overlap) */}
        <div className="w-full flex flex-col md:flex-row md:justify-between md:items-end px-8 md:px-[73px] mb-8 md:mb-12 select-none shrink-0 gap-6">
          {/* Left Side: Title */}
          <h2 
            style={{ textShadow: "0px 4px 43.7px rgba(0,0,0,0.83)" }}
            className="font-national font-black uppercase text-[clamp(3.5rem,11.5vw,13.5rem)] leading-[0.8] text-[#fefefe] tracking-[-0.04em]"
          >
            {t('portfolio.title')}
          </h2>
          
          {/* Right Side: Wrapped Description */}
          <div className="font-helvetica font-bold text-[14px] md:text-[17.8px] text-[#fefefe] leading-[1.25] tracking-tight max-w-md w-full pb-2 md:pl-8">
            <p>
              {t('portfolio.descPart1')}
              <span className="font-helvetica font-black text-brand-purple">{t('portfolio.descHighlight')}</span>
              {t('portfolio.descPart2')}
            </p>
          </div>
        </div>

        {/* Scroll Track: flex-row gap-10 md:gap-20 px-[73px] w-max */}
        <div className="w-full overflow-hidden flex-grow flex items-center">
          <motion.div 
            ref={trackRef}
            style={{ x }} 
            className="flex flex-row gap-10 md:gap-20 px-8 md:px-[73px] w-max will-change-transform"
          >
            {projects.map((proj) => (
              <div 
                key={proj.id}
                className="@container h-[60vh] md:h-[75vh] max-h-[1057px] aspect-[1.34] w-auto shrink-0 bg-black relative overflow-hidden border border-white/5 shadow-2xl select-none group"
              >
                {/* Frame Background Container mimicking exact Figma nested offsets */}
                <div className="absolute top-0 bottom-0 left-[-22.24%] w-[144.5%] pointer-events-none select-none">
                  <div className="absolute inset-[-30.59%_-15.8%]">
                    <img 
                      src={proj.frame} 
                      alt="" 
                      className="block max-w-none w-full h-full object-cover" 
                    />
                  </div>
                </div>
                
                {/* Absolute content positioning following exact Figma metrics */}
                <div className="absolute inset-0 flex flex-col items-center justify-start w-full h-full z-10">
                  
                  {/* Title (above image, top ~13.1%) */}
                  <div className="absolute top-[13.1%] left-0 w-full flex justify-center text-center px-4 pointer-events-none z-20">
                    <h3 
                      style={{ textShadow: "0px 4px 23.7px rgba(0,0,0,0.77)" }}
                      className="font-bebas uppercase text-[clamp(1.5rem,6.78cqw,6rem)] text-white tracking-[-0.56px] leading-[1] z-20"
                    >
                      {proj.title}
                    </h3>
                  </div>

                  {/* Card Image (top ~21.28%, left/right ~8.68%, aspect-[1.93]) */}
                  <div 
                    className="absolute top-[21.28%] left-[8.68%] right-[8.68%] aspect-[1.93] overflow-hidden rounded-sm shadow-[0px_4px_44.6px_23px_rgba(0,0,0,0.4)] border border-white/10 z-10"
                  >
                    <motion.img 
                      src={proj.img} 
                      alt={`${proj.title} Project`}
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      className="w-full h-full object-cover grayscale brightness-95 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700 pointer-events-none"
                    />
                  </div>

                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Footer Area with Progress Bar */}
        <div className="w-full max-w-[1400px] mx-auto px-8 md:px-[73px] flex items-center justify-between select-none shrink-0 mt-6">
          <div className="flex items-center gap-3">
            <span className="font-mono text-[11px] uppercase tracking-wider text-white/40">Scroll to explore</span>
            <div className="w-16 h-[1px] bg-white/20 relative overflow-hidden">
              <motion.div 
                style={{ scaleX: scrollYProgress, originX: 0 }}
                className="absolute inset-0 bg-brand-purple"
              />
            </div>
          </div>
          
          <div className="font-mono text-[11px] uppercase tracking-wider text-white/40">
            AgencyR © Selected Cases
          </div>
        </div>

      </div>
    </section>
  );
}
