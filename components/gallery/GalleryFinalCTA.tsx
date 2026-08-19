"use client";

import React from 'react';
import { Phone } from 'lucide-react';
import { useModal } from '@/context/ModalContext';

const GalleryFinalCTA = () => {
  const { openBookVisit } = useModal();

  return (
    <section className="py-24 px-6 md:px-12 bg-off-white">
      <div className="max-w-[1400px] mx-auto bg-primary rounded-2xl p-12 px-5 md:p-24 text-center shadow-[0_30px_60px_rgba(17,18,58,0.3)] relative flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[80px] pointer-events-none" />

        <div className="relative z-10 max-w-3xl">
          <span className="inline-flex items-center gap-2 border border-red-500/30 bg-red-500/10 text-red-400 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest mb-8 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" /> 🚨 Experience It in Person
          </span>
          <h2 className="text-4xl md:text-[64px] font-black tracking-tighter text-white mb-8 leading-[1.05]">
            Book Your Free Site Visit Today
          </h2>
          <p className="text-white/70 font-medium text-xl mb-12">
            Schedule a physical walkthrough and get all your pricing questions answered.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <a href="tel:9019800009" className="bg-white text-primary px-12 py-3 md:py-5 rounded-2xl font-bold text-sm tracking-widest uppercase hover:bg-green-500 hover:text-white transition-all w-full sm:w-auto text-center flex items-center justify-center gap-3 shadow-lg">
              <Phone size={18} fill="currentColor" /> Call: 90198 00009
            </a>
            <button 
              onClick={openBookVisit}
              className="bg-transparent border border-white/30 text-white px-12 py-3 md:py-5 rounded-2xl font-bold text-sm tracking-widest uppercase flex items-center justify-center gap-3 hover:bg-white/10 transition-all w-full sm:w-auto"
            >
              Book Site Visit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalleryFinalCTA;
