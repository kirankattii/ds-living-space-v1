"use client";

import React from 'react';
import { Phone } from 'lucide-react';
import { useModal } from '@/context/ModalContext';

const AboutFinalCTA = () => {
  const { openBookVisit } = useModal();

  return (
    <section className="py-20 md:py-32 px-4 md:px-12 bg-off-white border-t border-dark/10">
      <div className="max-w-[1400px] mx-auto bg-dark p-12 px-8 md:p-24 text-center shadow-2xl relative flex flex-col items-center justify-center min-h-[400px] rounded-2xl overflow-hidden">

        {/* Abstract Background Element */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/20 rounded-2xl blur-[100px]" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary/10 rounded-2xl blur-[100px]" />
        </div>

        <div className="relative z-10 max-w-3xl">
          <span className="inline-flex items-center gap-2 border border-white/20 text-white px-4 py-2 text-[10px] font-bold uppercase tracking-widest mb-8 bg-white/5 rounded-2xl">
            Your Next Step
          </span>
          <h2 className="text-4xl md:text-[64px] font-semibold tracking-tighter text-white mb-8 leading-[1.05]">
            Ready to invest <br />in premium plots?
          </h2>
          <p className="text-white/60 font-medium text-lg md:text-xl mb-12 leading-relaxed">
            Let our advisory team help you find the perfect opportunity in our signature projects. Book your free consultation today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="tel:9019800009" className="bg-white text-primary px-12 py-4 md:py-5 font-bold text-sm tracking-widest uppercase hover:bg-grey hover:text-white transition-all w-full sm:w-auto text-center flex items-center justify-center gap-3 rounded-2xl shadow-xl">
              <Phone size={16} /> Call Expert
            </a>
            <button 
              onClick={openBookVisit}
              className="bg-transparent border border-white/30 text-white px-12 py-4 md:py-5 font-bold text-sm tracking-widest uppercase flex items-center justify-center gap-3 hover:bg-white/10 transition-all w-full sm:w-auto rounded-2xl"
            >
              Schedule Site Visit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutFinalCTA;
