import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Scene from './components/Scene';
import Marquee from './components/Marquee';
import WhatWeDo from './components/WhatWeDo';
import WeMoveIdeas from './components/WeMoveIdeas';
import Portfolio from './components/Portfolio';
import Philosophy from './components/Philosophy';
import Services from './components/Services';
import ArrivePrepared from './components/ArrivePrepared';
import StatsAndTrust from './components/StatsAndTrust';
import Footer from './components/Footer';

export default function App() {
  return (
    <LanguageProvider>
      <div className="relative w-full bg-transparent text-white">
        
        {/* Sticky Header Navigation (z-index 50) */}
        <Navbar />

        {/* Locked 3D WebGL Background (z-index -30) */}
        <div className="fixed top-0 left-0 w-screen h-screen -z-30">
          <Scene />
        </div>

        {/* Locked Hero Text Foreground (z-index -20, pointer-events bypassed) */}
        <div className="fixed top-0 left-0 w-screen h-screen -z-20 pointer-events-none bg-transparent flex flex-col justify-center items-center">
          <Hero />
        </div>

        {/* Scrolling Foreground Contents sliding over the fixed Hero (z-index 10) */}
        <div className="relative z-10 w-full mt-[100vh] bg-transparent flex flex-col">
          
          <div className="relative z-30 w-full flex flex-col">
            <Marquee />
          </div>

          {/* Dark Section - Pulled UP behind the marquee, padded inside */}
          <div className="relative z-20 w-full bg-[#131313] pt-32 -mt-24">
            <WhatWeDo />
          </div>

          {/* Scroll-Linked Reveal Section */}
          <WeMoveIdeas />

          {/* Sticky Horizontal Scroll Portfolio Section */}
          <Portfolio />

          {/* GPU-Accelerated Spotlight Philosophy Section */}
          <Philosophy />

          {/* Hover-Reveal Services Section */}
          <Services />

          {/* We Don't Just Show Up Accordion Section */}
          <ArrivePrepared />

          {/* Stats, Trust & Booking CTA Sections */}
          <StatsAndTrust />

          {/* Footer Section */}
          <Footer />
        </div>

      </div>
    </LanguageProvider>
  );
}
