import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';

export default function Footer() {
  const { t } = useLanguage();

  // Reusable marquee track items
  const marqueeItems = [
    { text: "FUTURE" },
    { text: "BUILT" },
    { text: "HERE" }
  ];

  // Duplicate items for seamless scrolling loop
  const itemsList = Array(4).fill(marqueeItems).flat();

  return (
    <footer className="w-full bg-[#131313] relative overflow-hidden select-none flex flex-col pt-32 pb-0 -mt-20 z-20">
      
      {/* --- SCROLLING TAPES --- */}
      <div className="relative w-full h-[320px] md:h-[400px] mb-[-60px] md:mb-[-100px] z-30 pointer-events-none">
        
        {/* Track 1 (Top): Tilted Clockwise, Scrolls Left (z-40) */}
        <div className="absolute top-[20px] md:top-[40px] left-[-10vw] w-[120vw] overflow-hidden bg-[#4e37ff] border-t border-b border-[#d8d3d3] py-4 md:py-6 flex shadow-lg rotate-[2.41deg] z-40">
          <div className="flex whitespace-nowrap">
            <motion.div
              animate={{ x: [0, -1500] }}
              transition={{
                ease: "linear",
                duration: 22,
                repeat: Infinity
              }}
              className="flex items-center gap-16 md:gap-32 pr-16 md:pr-32"
            >
              {itemsList.map((item, idx) => (
                <React.Fragment key={`top-${idx}`}>
                  <span className="font-national font-black text-[90px] md:text-[180px] text-white tracking-[-4.45px] leading-[0.7] uppercase">
                    {item.text}
                  </span>
                  
                  {/* Divider Symbol */}
                  <div className="relative w-[150px] md:w-[200px] h-[55px] md:h-[80px] flex items-center justify-center shrink-0">
                    <div className="absolute w-[25px] md:w-[35px] h-[55px] md:h-[80px] bg-white rounded-sm"></div>
                    <div className="absolute w-[150px] md:w-[200px] h-[25px] md:h-[35px] bg-white rounded-sm shadow-sm flex items-center justify-center px-4">
                      <span className="font-syne font-extrabold text-[10px] md:text-[14px] text-[#4e37ff] tracking-tighter leading-none">
                        Agency®
                      </span>
                    </div>
                  </div>
                </React.Fragment>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Track 2 (Bottom): Tilted Counter-Clockwise, Scrolls Right (z-35) */}
        <div className="absolute top-[120px] md:top-[160px] left-[-10vw] w-[120vw] overflow-hidden bg-[#4e37ff] border-t border-b border-[#d8d3d3] py-4 md:py-6 flex shadow-md rotate-[-2.41deg] z-35">
          <div className="flex whitespace-nowrap">
            <motion.div
              animate={{ x: [-1500, 0] }}
              transition={{
                ease: "linear",
                duration: 22,
                repeat: Infinity
              }}
              className="flex items-center gap-16 md:gap-32 pr-16 md:pr-32"
            >
              {itemsList.map((item, idx) => (
                <React.Fragment key={`bottom-${idx}`}>
                  <span className="font-national font-black text-[90px] md:text-[180px] text-white tracking-[-4.45px] leading-[0.7] uppercase">
                    {item.text}
                  </span>
                  
                  {/* Divider Symbol */}
                  <div className="relative w-[150px] md:w-[200px] h-[55px] md:h-[80px] flex items-center justify-center shrink-0">
                    <div className="absolute w-[25px] md:w-[35px] h-[55px] md:h-[80px] bg-white rounded-sm"></div>
                    <div className="absolute w-[150px] md:w-[200px] h-[25px] md:h-[35px] bg-white rounded-sm shadow-sm flex items-center justify-center px-4">
                      <span className="font-syne font-extrabold text-[10px] md:text-[14px] text-[#4e37ff] tracking-tighter leading-none">
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

      {/* --- WHITE CONTAINER AREA --- */}
      <div className="w-full bg-white text-black border-t border-b border-black z-20 relative pt-12 md:pt-16 pb-8 px-6 md:px-[73px] lg:px-[117px]">
        <div className="max-w-[1688px] mx-auto w-full flex flex-col gap-10 md:gap-14">
          
          {/* Row 1: Logo & Address on Left, Policies on Right */}
          <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center gap-8 pb-8">
            <div className="flex flex-col gap-4 max-w-full">
              {/* Agency Logo */}
              <a href="/" className="flex items-start gap-1 pointer-events-auto select-none">
                <span className="font-syne font-extrabold text-[36px] md:text-[50px] text-[#4e37ff] tracking-logo-tight leading-[0.9]">
                  Agency
                </span>
                <span className="font-syne font-extrabold text-[18px] md:text-[29.85px] text-[#4e37ff] tracking-logo-reg-tight leading-[0.9] mt-1 select-none">
                  ®
                </span>
              </a>
              <span className="font-helvetica font-bold text-[15px] md:text-[17.8px] text-black/60 tracking-tight pl-1">
                {t('footer.address')}
              </span>
            </div>
            
            {/* Policy Links */}
            <div className="flex flex-col gap-3 font-helvetica font-bold text-[15px] md:text-[17px] text-left md:text-right pr-2">
              <a href="#privacy" className="hover:text-[#4e37ff] transition-colors">
                {t('footer.privacy')}
              </a>
              <a href="#cookies" className="hover:text-[#4e37ff] transition-colors">
                {t('footer.cookies')}
              </a>
            </div>
          </div>

          {/* Horizontal Divider Line */}
          <div className="w-full h-px bg-black"></div>

          {/* Row 2: Columns Section (Move, Join, Social) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border-b border-black pb-8">
            
            {/* Column 1: Move */}
            <div className="flex flex-col justify-between items-stretch py-8 lg:py-0 lg:pr-12 lg:border-r border-black min-h-[220px]">
              <div className="flex items-start justify-between gap-6 mb-8">
                <span className="font-helvetica font-bold text-[20px] md:text-[21.4px] text-black shrink-0">
                  {t('footer.move.title')}
                </span>
                <p className="font-helvetica font-bold text-[15px] md:text-[21.4px] text-black/60 leading-tight max-w-[260px] whitespace-pre-line text-left">
                  {t('footer.move.desc')}
                </p>
              </div>
              
              {/* Call Booking Pill Button */}
              <div className="flex justify-start">
                <motion.button 
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="bg-white text-black rounded-full w-[237px] h-[71px] shadow-[0px_2.5px_5px_0px_rgba(108,113,128,0.08),0px_8.8px_8.8px_0px_rgba(108,113,128,0.07)] border border-black/5 flex items-center px-4 gap-3 cursor-pointer pointer-events-auto"
                >
                  <div className="w-[51px] h-[51px] rounded-full overflow-hidden shrink-0">
                    <img 
                      src="http://localhost:3845/assets/0d4719dbd2ffc578c6afc338f51039e85f14b2d4.png" 
                      className="w-full h-full object-cover" 
                      alt="Consultant Avatar" 
                    />
                  </div>
                  <div className="flex flex-col items-start text-left">
                    <span className="font-inter font-semibold text-[14px] text-black tracking-[-0.7px] leading-tight">
                      {t('footer.move.btn')}
                    </span>
                    <div className="flex items-center gap-1.5 mt-1 leading-none">
                      <span className="w-[8px] h-[8px] rounded-full bg-brand-green"></span>
                      <span className="font-inter font-semibold text-[12px] text-[#989898] tracking-[-0.9px]">
                        {t('footer.move.status')}
                      </span>
                    </div>
                  </div>
                </motion.button>
              </div>
            </div>

            {/* Column 2: Join */}
            <div className="flex flex-col justify-between items-stretch py-8 lg:py-0 lg:px-12 lg:border-r border-black min-h-[220px]">
              <div className="flex items-start justify-between gap-6 mb-8">
                <span className="font-helvetica font-bold text-[20px] md:text-[20.7px] text-black shrink-0">
                  {t('footer.join.title')}
                </span>
                <p className="font-helvetica font-bold text-[15px] md:text-[21.4px] text-black/60 leading-tight max-w-[260px] whitespace-pre-line text-left">
                  {t('footer.join.desc')}
                </p>
              </div>
              
              {/* Join the Team Button */}
              <div className="flex justify-start">
                <motion.button 
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="bg-white text-black rounded-full w-[169px] h-[71px] shadow-[0px_2.5px_5px_0px_rgba(108,113,128,0.08),0px_8.8px_8.8px_0px_rgba(108,113,128,0.07)] border border-black/5 flex items-center justify-center cursor-pointer pointer-events-auto font-inter font-semibold text-[15px] md:text-[17px]"
                >
                  <span>
                    Join the <span className="text-[#4e37ff]">Team</span>
                  </span>
                </motion.button>
              </div>
            </div>

            {/* Column 3: Social */}
            <div className="flex flex-col justify-between items-stretch py-8 lg:py-0 lg:pl-12 min-h-[220px]">
              <div className="flex items-start justify-between gap-6 mb-8">
                <span className="font-helvetica font-bold text-[20px] md:text-[20.9px] text-black shrink-0">
                  {t('footer.social.title')}
                </span>
                <p className="font-helvetica font-bold text-[15px] md:text-[21.3px] text-black/60 leading-tight max-w-[260px] text-left">
                  {t('footer.social.desc')}
                </p>
              </div>
              
              {/* Social Icons row */}
              <div className="flex items-center gap-4">
                {/* Instagram */}
                <motion.a 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="#instagram"
                  className="bg-white rounded-full w-[71px] h-[71px] border border-black/5 shadow-[0px_2.5px_5px_0px_rgba(108,113,128,0.08),0px_8.8px_8.8px_0px_rgba(108,113,128,0.07)] flex items-center justify-center cursor-pointer pointer-events-auto"
                >
                  <img src="http://localhost:3845/assets/940df21be0da1c1db7ac025c48c231840a4148e9.svg" alt="Instagram" className="w-[30px] h-[30px] object-contain" />
                </motion.a>

                {/* YouTube */}
                <motion.a 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="#youtube"
                  className="bg-white rounded-full w-[71px] h-[71px] border border-black/5 shadow-[0px_2.5px_5px_0px_rgba(108,113,128,0.08),0px_8.8px_8.8px_0px_rgba(108,113,128,0.07)] flex items-center justify-center cursor-pointer relative pointer-events-auto"
                >
                  <div className="relative w-[30px] h-[30px]">
                    <img src="http://localhost:3845/assets/dc73f9a47f8dd6814e050c32a2081f90fa2a670d.svg" alt="" className="absolute inset-0 w-full h-full object-contain" />
                    <img src="http://localhost:3845/assets/af334e496a6ef4db9f947801caff66b102baa48d.svg" alt="YouTube" className="absolute inset-0 w-full h-full object-contain" />
                  </div>
                </motion.a>

                {/* LinkedIn */}
                <motion.a 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="#linkedin"
                  className="bg-white rounded-full w-[71px] h-[71px] border border-black/5 shadow-[0px_2.5px_5px_0px_rgba(108,113,128,0.08),0px_8.8px_8.8px_0px_rgba(108,113,128,0.07)] flex items-center justify-center cursor-pointer pointer-events-auto"
                >
                  <img src="http://localhost:3845/assets/f972daa154f870d581cf377a55625ded5b7aad82.svg" alt="LinkedIn" className="w-[30px] h-[30px] object-contain" />
                </motion.a>
              </div>
            </div>

          </div>

          {/* Row 3: Copyright info (Simple footer bottom text) */}
          <div className="w-full flex flex-col sm:flex-row justify-between items-center text-black/40 font-helvetica font-medium text-[13px] md:text-[15px] pt-4">
            <span>© {new Date().getFullYear()} Agency. All rights reserved.</span>
            <span className="mt-2 sm:mt-0">Built with precision.</span>
          </div>

        </div>
      </div>

    </footer>
  );
}
