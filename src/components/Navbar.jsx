import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar() {
  const { locale, setLocale, t } = useLanguage();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:pl-[38px] md:pr-[35px] md:py-6 bg-transparent pointer-events-none">
      {/* Logo Container */}
      <a href="/" className="flex items-start gap-1 pointer-events-auto select-none">
        <span className="font-syne font-extrabold text-[36px] md:text-[50px] text-brand-purple tracking-logo-tight leading-none leading-[0.9]">
          Agency
        </span>
        <span className="font-syne font-extrabold text-[18px] md:text-[29.85px] text-brand-purple tracking-logo-reg-tight leading-none leading-[0.9] mt-1 select-none">
          ®
        </span>
      </a>

      {/* Nav Actions (Wrapper to handle click pass-through) */}
      <div className="flex items-center gap-6 md:gap-12 pointer-events-auto">
        {/* Nav Links - Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#portfolio" className="font-inter font-bold text-[18px] text-black tracking-nav-tight hover:text-brand-purple transition-colors duration-300">
            {t('nav.portfolio')}
          </a>
          <a href="#services" className="font-inter font-bold text-[18px] text-black tracking-nav-tight hover:text-brand-purple transition-colors duration-300">
            {t('nav.services')}
          </a>
          <a href="#team" className="font-inter font-bold text-[18px] text-black tracking-nav-tight hover:text-brand-purple transition-colors duration-300">
            {t('nav.team')}
          </a>
        </nav>

        {/* Language Selector */}
        <div className="flex items-center gap-2 font-inter font-bold text-[14px] md:text-[16px] text-studio-dark bg-white border border-studio-gray-divider rounded-full px-3 py-1.5 shadow-sm">
          <button
            onClick={() => setLocale('en')}
            className={`transition-colors duration-200 ${locale === 'en' ? 'text-brand-purple underline font-extrabold' : 'text-studio-gray-medium hover:text-studio-dark'}`}
          >
            EN
          </button>
          <span className="text-studio-gray-divider font-normal">|</span>
          <button
            onClick={() => setLocale('it')}
            className={`transition-colors duration-200 ${locale === 'it' ? 'text-brand-purple underline font-extrabold' : 'text-studio-gray-medium hover:text-studio-dark'}`}
          >
            IT
          </button>
        </div>

        {/* Contact CTA */}
        <a
          href="#contact"
          className="bg-white border-[3px] border-brand-purple border-solid px-6 py-2.5 rounded-[50px] shadow-[0px_4px_4px_rgba(0,0,0,0.15)] flex items-center justify-center font-inter font-semibold text-[16px] md:text-[18px] text-brand-purple tracking-nav-tight hover:bg-brand-purple hover:text-white transition-all duration-300"
        >
          {t('nav.contact')}
        </a>
      </div>
    </header>
  );
}
