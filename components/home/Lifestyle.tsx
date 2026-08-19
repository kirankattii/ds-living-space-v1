"use client";

import React from 'react';
import FadeIn from './FadeIn';
import ParallaxBackground from './ParallaxBackground';

const Lifestyle = () => {
  return (
    <section id="lifestyle" className="relative min-h-[75vh] flex items-center justify-center text-center px-6 py-8 sm:py-16 overflow-hidden">
      <ParallaxBackground
        src="https://images.unsplash.com/photo-1542332213-9b5a5a3fab35?auto=format&fit=crop&q=80&w=2000"
        overlay="bg-dark/70"
      />

      <div className="relative z-10 max-w-5xl mx-auto text-white">
        <FadeIn>
          <span className="text-white/60 text-[10px] font-bold uppercase tracking-[0.3em] mb-6 block">More Space. More Life.</span>
          <h2 className="text-4xl md:text-6xl lg:text-[68px] font-serif italic leading-tight mb-6 drop-shadow-2xl">
            Imagine waking up to fresh air, greenery, and the calming sounds of nature.
          </h2>
          <p className="text-white/90 text-xl md:text-2xl font-medium max-w-3xl mx-auto leading-relaxed drop-shadow-md border-t border-white/20 pt-6">
            Bird Song offers a peaceful environment where families can grow, children can play freely, and life feels truly balanced. Nature Meets Modern Living.
          </p>
        </FadeIn>
      </div>
    </section>
  );
};

export default Lifestyle;
