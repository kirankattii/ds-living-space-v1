"use client";

import React from 'react';
import { Phone } from 'lucide-react';

const GalleryMidCTA = () => {
  return (
    <section className="py-16 px-6 bg-off-white">
      <div className="max-w-[1400px] mx-auto bg-gradient-to-r from-green-500 to-green-700 rounded-[40px] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay" />
        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-2">Book Your Free Site Visit Today</h2>
          <p className="text-white/80 font-medium text-lg">Photos give you a glimpse—but the real experience is on-site.</p>
        </div>
        <a href="tel:9019800009" className="relative z-10 bg-primary text-white px-10 py-5 rounded-2xl font-bold shadow-xl hover:bg-dark transition-colors whitespace-nowrap w-full md:w-auto text-center flex items-center justify-center gap-3">
          <Phone size={18} /> Book Site Visit
        </a>
      </div>
    </section>
  );
};

export default GalleryMidCTA;
