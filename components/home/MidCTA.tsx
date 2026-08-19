"use client";

import React from 'react';
import { Phone } from 'lucide-react';

const MidCTA = () => {
  return (
    <section className="md:py-10 pb-10 px-6 bg-off-white">
      <div className="max-w-[1400px] mx-auto bg-gradient-to-r from-primary to-secondary rounded-[40px] p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[80px] pointer-events-none" />
        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-2">Ready to explore plotted developments?</h2>
          <p className="text-white/70 font-medium text-lg">Get expert guidance on the best locations and pricing.</p>
        </div>
        <a href="tel:9019800009" className="relative z-10 bg-green-500 text-white px-10 py-4 md:py-5 rounded-2xl font-bold shadow-xl hover:bg-green-600 transition-colors whitespace-nowrap w-full md:w-auto text-center flex items-center justify-center gap-3">
          <Phone size={18} /> Call Now: 90198 00009
        </a>
      </div>
    </section>
  );
};

export default MidCTA;
