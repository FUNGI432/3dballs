import React, { useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function WeMoveIdeas() {
  const { t } = useLanguage();
  const containerRef = useRef(null);

  // Track scroll progress of the component inside the viewport
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Staggered text reveal: transform y-translation from 100% (hidden below mask) to 0% (fully revealed)
  const yLine1 = useTransform(scrollYProgress, [0.08, 0.22], ["100%", "0%"]);
  const yLine2 = useTransform(scrollYProgress, [0.15, 0.29], ["100%", "0%"]);
  const yLine3 = useTransform(scrollYProgress, [0.22, 0.36], ["100%", "0%"]);
  const yLine4 = useTransform(scrollYProgress, [0.29, 0.43], ["100%", "0%"]);

  // Aggressive Parallax image panning: translate y position of scaled image from -30% to 30%
  const yImage1 = useTransform(scrollYProgress, [0.1, 0.8], ["-30%", "30%"]);
  const yImage2 = useTransform(scrollYProgress, [0.15, 0.85], ["-30%", "30%"]);

  return (
    <section 
      ref={containerRef}
      className="relative w-full bg-[#131313] py-32 md:py-48 select-none flex flex-col items-center justify-start overflow-visible z-20"
    >
      <div className="w-full max-w-[1400px] px-8 md:px-[73px] flex flex-col gap-6 md:gap-12">
        
        {/* Row 1: "WE" / "FACCIAMO" */}
        <div className="w-full flex justify-start items-center">
          <div className="overflow-hidden py-4 -my-4 w-full">
            <motion.h2 
              style={{ y: yLine1 }}
              className="font-national font-black uppercase text-[clamp(2.5rem,11.5vw,22rem)] leading-[0.8] tracking-[-0.04em] text-[#fefefe] w-full"
            >
              {t('weMoveIdeas.line1')}
            </motion.h2>
          </div>
        </div>

        {/* Row 2: "MOVE" / "AVANZARE" & Parallax Image 1 */}
        <div className="w-full flex items-center justify-between gap-6">
          <div className="overflow-hidden py-4 -my-4">
            <motion.h2 
              style={{ y: yLine2 }}
              className="font-national font-black uppercase text-[clamp(2.5rem,11.5vw,22rem)] leading-[0.8] tracking-[-0.04em] text-[#fefefe]"
            >
              {t('weMoveIdeas.line2')}
            </motion.h2>
          </div>

          {/* Aggressive Parallax Image 1 */}
          <div className="w-[30vw] xl:w-[514px] h-[18vw] xl:h-[314px] overflow-hidden bg-studio-gray-dark/20 relative z-10 shrink-0 select-none border border-studio-gray-divider/10 rounded-sm">
            <motion.img
              src="/images/078001f62bde1fec5b5f725fd7435f84d018cd85.png"
              style={{ y: yImage1, scale: 1.5 }}
              className="w-full h-[160%] object-cover absolute top-[-30%]"
              alt="Moving ideas forward illustration"
            />
          </div>
        </div>

        {/* Row 3: "IDEAS" / "LE" */}
        <div className="w-full flex justify-start items-center">
          <div className="overflow-hidden py-4 -my-4 w-full">
            <motion.h2 
              style={{ y: yLine3 }}
              className="font-national font-black uppercase text-[clamp(2.5rem,11.5vw,22rem)] leading-[0.8] tracking-[-0.04em] text-[#fefefe] w-full"
            >
              {t('weMoveIdeas.line3')}
            </motion.h2>
          </div>
        </div>

        {/* Row 4: "FORWARD" / "IDEE" (accent electric purple) */}
        <div className="w-full flex justify-start items-center">
          <div className="overflow-hidden py-4 -my-4 w-full">
            <motion.h2 
              style={{ y: yLine4 }}
              className="font-national font-black uppercase text-[clamp(2.5rem,11.5vw,22rem)] leading-[0.8] tracking-[-0.04em] text-brand-purple w-full"
            >
              {t('weMoveIdeas.line4')}
            </motion.h2>
          </div>
        </div>

        {/* Row 5: Parallax Image 2 & Helper/Paragraph text */}
        <div className="w-full flex justify-between items-start mt-20 md:mt-36 px-2 md:px-12">
          
          {/* Aggressive Parallax Image 2 */}
          <div className="w-[24vw] xl:w-[293px] h-[48vw] xl:h-[583px] overflow-hidden bg-studio-gray-dark/20 relative z-10 shrink-0 select-none border border-studio-gray-divider/10 rounded-sm">
            <motion.img
              src="/images/image-2.png"
              style={{ y: yImage2, scale: 1.5 }}
              className="w-full h-[160%] object-cover absolute top-[-30%]"
              alt="Anticipate scaling challenges"
            />
          </div>

          {/* Auxiliary Info (Helper label & Description text) */}
          <div className="max-w-[45vw] xl:max-w-[500px] flex flex-col items-start gap-6 md:gap-10 pt-8 md:pt-16 pr-2">
            <span className="font-sf font-bold text-[14px] md:text-[18px] text-white/80 uppercase tracking-wider">
              {t('weMoveIdeas.subtitle')}
            </span>
            <p className="font-helvetica font-medium text-[16px] md:text-[24px] text-studio-gray-light leading-[1.3] tracking-tight whitespace-pre-wrap">
              {t('weMoveIdeas.desc')}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
