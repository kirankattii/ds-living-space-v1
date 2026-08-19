"use client";

import React from 'react';
import { Phone, ArrowUpRight } from 'lucide-react';
import { useModal } from '@/context/ModalContext';

const ProjectsCTA = () => {
  const { openBookVisit } = useModal();

  return (
    <section className="py-24 px-6 md:px-12 bg-off-white">
      <div className="max-w-[1400px] mx-auto bg-primary rounded-2xl p-12 md:p-24 text-center shadow-[0_30px_60px_rgba(17,18,58,0.3)] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-2xl blur-[80px] pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto text-white">
          <h2 className="text-4xl md:text-[64px] font-black tracking-tighter mb-6 leading-[1.05]">
            Invest in your <br/> future today.
          </h2>
          <p className="text-white/70 font-medium text-lg md:text-xl mb-12">
            Whether you're looking for a dream home or a smart investment, our team is here to guide you through every step.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="tel:9019800009" className="bg-white text-primary px-12 py-5 rounded-2xl font-bold text-sm tracking-widest uppercase hover:bg-grey hover:text-white transition-all w-full sm:w-auto text-center flex items-center justify-center gap-3 shadow-xl">
              <Phone size={18} fill="currentColor" /> Call: 90198 00009
            </a>
            <button 
              onClick={openBookVisit}
              className="bg-transparent border border-white/30 text-white px-12 py-5 rounded-2xl font-bold text-sm tracking-widest uppercase flex items-center justify-center gap-3 hover:bg-white/10 transition-all w-full sm:w-auto"
            >
              Book Site Visit <ArrowUpRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsCTA;
