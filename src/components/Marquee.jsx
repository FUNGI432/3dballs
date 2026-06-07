import React from 'react';
import { motion } from 'framer-motion';

export default function Marquee() {
  const marqueeItems = [
    { text: "FUTURE" },
    { text: "BUILT" },
    { text: "HERE" }
  ];

  // Duplicate elements to ensure a continuous seamless loop
  const itemsList = Array(4).fill(marqueeItems).flat();

  return (
    <div className="relative w-full overflow-visible bg-transparent py-4 md:py-8 translate-y-[-40px] z-20 select-none flex flex-col">
      {/* Top Track: Scrolls Left (z-20, overlaps bottom) */}
      <div className="relative z-20 w-[120vw] -ml-[10vw] overflow-hidden bg-brand-purple border-t border-b border-studio-gray-divider py-6 md:py-8 flex shadow-md rotate-[-2.41deg]">
        <div className="flex whitespace-nowrap">
          <motion.div
            animate={{ x: [0, -1500] }}
            transition={{
              ease: "linear",
              duration: 25,
              repeat: Infinity
            }}
            className="flex items-center gap-16 md:gap-32 pr-16 md:pr-32"
          >
            {itemsList.map((item, idx) => (
              <React.Fragment key={`top-${idx}`}>
                {/* Marquee Text */}
                <span className="font-national font-black text-[90px] md:text-[180px] text-white tracking-[-4.45px] leading-[0.7] uppercase">
                  {item.text}
                </span>

                {/* Cross Divider Symbol */}
                <div className="relative w-[150px] md:w-[200px] h-[55px] md:h-[80px] flex items-center justify-center shrink-0">
                  <div className="absolute w-[25px] md:w-[35px] h-[55px] md:h-[80px] bg-white rounded-sm"></div>
                  <div className="absolute w-[150px] md:w-[200px] h-[25px] md:h-[35px] bg-white rounded-sm shadow-sm flex items-center justify-center px-4">
                    <span className="font-syne font-extrabold text-[10px] md:text-[14px] text-brand-purple tracking-tighter leading-none">
                      Agency®
                    </span>
                  </div>
                </div>
              </React.Fragment>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom Track: Scrolls Right (z-10, tucked under top with negative margin and parallel rotate) */}
      <div className="relative z-10 w-[120vw] -ml-[10vw] -mt-10 md:-mt-14 overflow-hidden bg-brand-purple border-t border-b border-studio-gray-divider py-6 md:py-8 flex shadow-sm rotate-[2.41deg]">
        <div className="flex whitespace-nowrap">
          <motion.div
            animate={{ x: [-1500, 0] }}
            transition={{
              ease: "linear",
              duration: 25,
              repeat: Infinity
            }}
            className="flex items-center gap-16 md:gap-32 pr-16 md:pr-32"
          >
            {itemsList.map((item, idx) => (
              <React.Fragment key={`bottom-${idx}`}>
                {/* Marquee Text */}
                <span className="font-national font-black text-[90px] md:text-[180px] text-white tracking-[-4.45px] leading-[0.7] uppercase">
                  {item.text}
                </span>

                {/* Cross Divider Symbol */}
                <div className="relative w-[150px] md:w-[200px] h-[55px] md:h-[80px] flex items-center justify-center shrink-0">
                  <div className="absolute w-[25px] md:w-[35px] h-[55px] md:h-[80px] bg-white rounded-sm"></div>
                  <div className="absolute w-[150px] md:w-[200px] h-[25px] md:h-[35px] bg-white rounded-sm shadow-sm flex items-center justify-center px-4">
                    <span className="font-syne font-extrabold text-[10px] md:text-[14px] text-brand-purple tracking-tighter leading-none">
                      Agency®
                    </span>
                  </div>
                </div>
              </React.Fragment>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
