import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';

// Star rating icon helper
const StarRating = ({ count = 5 }) => (
  <div className="flex gap-1">
    {[...Array(count)].map((_, i) => (
      <svg key={i} className="w-[15px] h-[15px] fill-brand-purple" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

export default function StatsAndTrust() {
  const { t } = useLanguage();
  const stats = t('statsAndTrust.stats') || [];

  return (
    <div className="w-full flex flex-col overflow-visible relative z-20">
      
      {/* 1. WHITE STATS SECTION */}
      <section className="w-full bg-[#fefefe] text-black py-24 md:py-32 px-6 md:px-[73px] lg:px-[117px] border-t border-[#131313] select-none flex flex-col items-center justify-start overflow-hidden">
        <div className="w-full max-w-[1688px] grid grid-cols-1 lg:grid-cols-[1.05fr_1.15fr] gap-16 lg:gap-[100px] items-stretch">
          
          {/* Left Column: Video card (mimicking Figma's video layer) */}
          <div className="relative w-full aspect-[2.02] rounded-[38.39px] overflow-hidden bg-black shrink-0 border border-black/5 shadow-2xl">
            <video 
              src="/Videos/656527ed-7f5c-4f69-b7b2-5aac8e42cd43.mp4" 
              poster="/images/stats-background.png"
              className="w-full h-full object-cover pointer-events-none select-none"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>

          {/* Right Column: Metric List */}
          <div className="w-full flex flex-col justify-start">
            {/* Top Border Line of the list */}
            <div className="w-full border-t border-[#131313]" />
            
            {stats.map((item, idx) => (
              <div 
                key={idx}
                className="w-full border-b border-[#131313] py-8 flex flex-col sm:grid sm:grid-cols-[1.1fr_1.2fr] items-baseline gap-4 sm:gap-6 text-left"
              >
                {/* Metric Number */}
                <span className="font-helvetica font-bold text-[clamp(2.5rem,4.5vw,4.4rem)] leading-[0.9] tracking-[-2.4px] text-black uppercase">
                  {item.num}
                </span>
                
                {/* Metric Label / Description */}
                <span className="font-helvetica font-bold text-[15px] md:text-[17.2px] text-[#131313]/90 leading-[1.25] tracking-tight">
                  {item.desc}
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 2. BLACK TRUST & TESTIMONIALS SECTION */}
      <section className="relative w-full bg-[#131313] text-white py-24 md:py-32 px-6 md:px-[73px] lg:px-[117px] select-none flex flex-col items-center justify-start overflow-hidden border-t border-white/5">
        
        {/* Figma Wavy Vector Background */}
        <div className="absolute inset-x-0 top-[14.85%] bottom-[3.34%] pointer-events-none select-none overflow-hidden z-0 opacity-50">
          <img 
            src="http://localhost:3845/assets/680ec9d8d9cac7c549caff0bb072b1aaf76d19d0.svg" 
            className="w-full h-full object-cover" 
            alt="" 
          />
        </div>

        <div className="relative z-10 w-full max-w-[1688px] flex flex-col items-center justify-start gap-16 md:gap-24 overflow-visible">
          
          {/* Section Title */}
          <h2 className="font-national font-black uppercase text-[clamp(2rem,6.8vw,8rem)] text-white tracking-[-1.692px] text-center leading-[1] select-none flex items-center justify-center gap-4">
            <img 
              src="http://localhost:3845/assets/fce0d5a73e33f8084dc79fe8120571576ad4261f.svg" 
              className="w-[28px] h-[28px] md:w-[42px] md:h-[42px] object-contain shrink-0" 
              alt="" 
            />
            <span>{t('statsAndTrust.trustHeading')}</span>
            <img 
              src="http://localhost:3845/assets/fce0d5a73e33f8084dc79fe8120571576ad4261f.svg" 
              className="w-[28px] h-[28px] md:w-[42px] md:h-[42px] object-contain shrink-0" 
              alt="" 
            />
          </h2>

          {/* Stacking Grid layout for Cards */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-[1.1fr_1.25fr] gap-8 items-stretch">
            
            {/* Left Column: Client Satisfaction & Impressions Stack */}
            <div className="flex flex-col gap-8">
              
              {/* Card 1: Client Satisfaction (Row Layout) */}
              <div className="w-full bg-white text-black rounded-[32px] p-8 md:p-10 flex flex-col md:flex-row gap-6 md:gap-[48px] items-center justify-start shadow-xl border border-black/5">
                {/* User avatar headshot inside oval/capsule container with checkmark badge */}
                <div className="relative w-[89.4px] h-[128.25px] rounded-[219px] shrink-0">
                  <img 
                    src="http://localhost:3845/assets/256acf94f3318400339e64d2cfcce167d0ca1dea.png" 
                    className="w-full h-full object-cover rounded-[219px]" 
                    alt="Client Avatar" 
                  />
                  {/* Verified checkmark badge */}
                  <img 
                    src="http://localhost:3845/assets/3934723c4215c73dd5860b2c2140d45072f59be2.svg" 
                    className="absolute bottom-[2px] left-[33.3px] w-[22.78px] h-[22.78px] z-10" 
                    alt="Verified checkmark" 
                  />
                </div>
                
                {/* Satisfaction text copy */}
                <div className="flex flex-col gap-2 text-left">
                  <h3 className="font-sf font-bold text-[32px] md:text-[42px] text-[#5d5dff] tracking-[1.68px] leading-tight">
                    {t('statsAndTrust.clientSatisfaction.title')}
                  </h3>
                  <StarRating />
                  <p className="font-sf font-normal text-[18px] md:text-[24px] text-[#6a6a6a] tracking-[0.96px] mt-2">
                    Over <span className="font-bold text-[#4e37ff]">40+</span> happy users all over the world
                  </p>
                </div>
              </div>

              {/* Card 2: Impressions Chart */}
              <div className="w-full bg-white text-black rounded-[47px] p-8 md:p-[49px] flex flex-col gap-6 items-start justify-between shadow-xl border border-black/5">
                {/* Impressions Header */}
                <div className="flex items-center gap-6 font-sf font-bold text-[28px] md:text-[36px] uppercase tracking-[1.44px] text-[#5d5dff]">
                  <img 
                    src="http://localhost:3845/assets/ed1408a7d37ade0318fd8dc82da49acb963a642f.svg" 
                    className="w-[40.5px] h-[40.5px] object-contain" 
                    alt="Pie chart icon" 
                  />
                  <span>{t('statsAndTrust.impressions.title')}</span>
                </div>

                {/* Metric with Chart line wrapper */}
                <div className="w-full flex items-end justify-between gap-6">
                  <div className="flex flex-col text-left">
                    <span className="font-sf font-bold text-[55px] md:text-[71.6px] leading-none text-black">
                      <span className="text-[#4e37ff]">+</span>120%
                    </span>
                    <span className="font-sf font-medium text-[18px] md:text-[23.8px] text-[#8c8c8c] tracking-tight mt-2 block">
                      Organic Traffic Growth
                    </span>
                  </div>

                  {/* SVG line wave trend graph */}
                  <div className="w-[180px] md:w-[296.36px] shrink-0 pb-1">
                    <img 
                      src="http://localhost:3845/assets/2b5e34b5dd6eaf60523d22398ac0f24c8c26d482.svg" 
                      className="w-full h-full object-contain" 
                      alt="Wave trend graph" 
                    />
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Expert Squad tall card */}
            <div className="w-full bg-white text-black rounded-[39px] p-8 md:p-10 flex flex-col gap-[36px] md:gap-[48px] justify-between shadow-xl border border-black/5">
              
              {/* Expert Squad Header & overlapping avatar headshots */}
              <div className="flex flex-col gap-6 items-start">
                <h3 className="font-sf font-bold text-[32px] md:text-[40px] text-black">
                  Expert Squad<span className="text-[#4e37ff]">.</span>
                </h3>
                
                {/* 6 Overlapping Headshots with precise alignment and blue borders */}
                <div className="relative h-[66px] w-[346px] select-none pl-1">
                  <div className="absolute left-0 w-[66px] h-[66px] rounded-full border-[3px] border-[#4e37ff] overflow-hidden bg-white">
                    <img src="http://localhost:3845/assets/55410c12424564a172520098826c7b33f9b6d10a.png" className="w-full h-full object-cover" alt="Expert 1" />
                  </div>
                  <div className="absolute left-[56px] w-[66px] h-[66px] rounded-full border-[3px] border-[#4e37ff] overflow-hidden bg-white">
                    <img src="http://localhost:3845/assets/60bdce29cd41a3fe456be72aab2656063232ef95.png" className="w-full h-full object-cover" alt="Expert 2" />
                  </div>
                  <div className="absolute left-[112px] w-[66px] h-[66px] rounded-full border-[3px] border-[#4e37ff] overflow-hidden bg-white">
                    <img src="http://localhost:3845/assets/26c80e1826b7f60e598c0d792d531cf393b24a60.png" className="w-full h-full object-cover" alt="Expert 3" />
                  </div>
                  <div className="absolute left-[168px] w-[66px] h-[66px] rounded-full border-[3px] border-[#4e37ff] overflow-hidden bg-white">
                    <img src="http://localhost:3845/assets/41e3302393a1f42f9e1b6de85971864e2ff00630.png" className="w-full h-full object-cover" alt="Expert 4" />
                  </div>
                  <div className="absolute left-[224px] w-[66px] h-[66px] rounded-full border-[3px] border-[#4e37ff] overflow-hidden bg-white">
                    <img src="http://localhost:3845/assets/d8544e2c1c79fd9602ae79f7d14c56fe943f7580.png" className="w-full h-full object-cover" alt="Expert 5" />
                  </div>
                  <div className="absolute left-[280px] w-[66px] h-[66px] rounded-full border-[3px] border-[#4e37ff] overflow-hidden bg-white">
                    <img src="http://localhost:3845/assets/43862ec1954ccba29cb1aac384328f5bbfe1e8b1.png" className="w-full h-full object-cover" alt="Expert 6" />
                  </div>
                </div>

                {/* Divider Line */}
                <div className="w-full my-2">
                  <img src="http://localhost:3845/assets/959d4845d969c6cafdb81750e733873129a0a03e.svg" className="w-full h-[1px] object-cover" alt="" />
                </div>

                {/* Description copy with highlighted phrases */}
                <p className="font-sf font-normal text-[18px] md:text-[24px] text-[#8c8c8c] leading-[1.5] tracking-tight text-left">
                  We don’t just build products; we build the future of your brand through <span className="text-[#4e37ff]">precision engineering</span> and <span className="text-[#4e37ff]">multidisciplinary design</span>.
                </p>
              </div>

              {/* Dheemant Testimonial section without avatar */}
              <div className="flex flex-col items-start gap-3 mt-6 text-left">
                <span className="font-sf font-bold text-[22px] md:text-[30px] text-black">
                  Dheemant Mishra
                </span>

                {/* Rating stars & 4.9 Rating */}
                <div className="flex items-center gap-4 mt-1">
                  <StarRating />
                  <div className="flex gap-1.5 font-sf items-baseline leading-[30px] text-black select-none">
                    <span className="font-extrabold text-[20px]">4.9</span>
                    <span className="font-normal text-[16px]">Rating</span>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>      {/* 3. FOOTER CALL TO ACTION (CTA) */}
      <section className="w-full bg-[#131313] text-white py-28 md:py-36 px-6 md:px-[73px] lg:px-[117px] select-none flex flex-col items-center justify-start overflow-hidden relative z-20 border-t border-white/5">
        <div className="w-full max-w-[858px] flex flex-col gap-[57px] items-stretch mx-auto">
          
          {/* Row 1: Ready? */}
          <div className="w-full text-left">
            <h2 className="font-helvetica font-bold text-[clamp(2.5rem,6vw,4.8rem)] text-white tracking-[-2.405px] uppercase leading-[0.94]">
              {t('statsAndTrust.cta.titlePart1')}
            </h2>
          </div>

          {/* Row 2: Let's push to Excellence (Right-Aligned) */}
          <div className="w-full flex justify-end">
            <h2 className="w-[431px] max-w-full font-helvetica font-bold text-[clamp(2.8rem,6.5vw,5rem)] text-[#4e37ff] tracking-[-2.405px] uppercase leading-[0.9] text-left whitespace-pre-line">
              {t('statsAndTrust.cta.titlePart2').replace("Let's push to Excellence.", "Let's push\nto\nExcellence.")}
            </h2>
          </div>

          {/* Row 3: Description (Centered) */}
          <div className="w-full flex justify-center">
            <p className="w-[249px] text-center font-helvetica font-bold text-[17.1px] leading-[1.15] text-white tracking-tight">
              {t('statsAndTrust.cta.desc')}
            </p>
          </div>

          {/* Row 4: Book Call Button */}
          <div className="w-full flex justify-center">
            <motion.button 
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="bg-white text-black rounded-[98px] w-[368px] h-[110px] shadow-[0px_13.75px_13.75px_0px_rgba(0,0,0,0.07)] flex items-center justify-start px-[23px] gap-6 transition-all duration-300 pointer-events-auto cursor-pointer border border-[#f8f8f8]"
            >
              {/* Button avatar headshot from Figma */}
              <div className="w-[79px] h-[79px] rounded-full overflow-hidden shrink-0">
                <img 
                  src="http://localhost:3845/assets/0d4719dbd2ffc578c6afc338f51039e85f14b2d4.png" 
                  className="w-full h-full object-cover" 
                  alt="Consultant Avatar" 
                />
              </div>

              {/* Text elements inside the button */}
              <div className="flex flex-col items-start text-left">
                <span className="font-sf font-semibold text-[27px] text-black tracking-[-1.1px] leading-none">
                  {t('statsAndTrust.cta.btn')}
                </span>
                
                {/* Availability status */}
                <div className="flex items-center gap-2 mt-2 leading-none">
                  <span className="relative flex h-[12px] w-[12px]">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1dcc5d] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-[12px] w-[12px] bg-[#1dcc5d]"></span>
                  </span>
                  <span className="font-sf font-semibold text-[23.5px] text-[#989898] tracking-[-1.41px]">
                    {t('statsAndTrust.cta.status')}
                  </span>
                </div>
              </div>
            </motion.button>
          </div>

        </div>
      </section>
    </div>
  );
}
