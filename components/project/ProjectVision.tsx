"use client";

import React from 'react';
import FadeIn from '../shared/FadeIn';
import ParallaxBackground from '../shared/ParallaxBackground';

const ProjectVision = () => {
  return (
    <section id="vision" className="relative min-h-[70vh] flex items-center justify-center text-center px-6 py-16 md:py-28 overflow-hidden">
      <ParallaxBackground
        src="https://images.unsplash.com/photo-1542332213-9b5a5a3fab35?auto=format&fit=crop&q=80&w=2000"
        overlay="bg-primary/80"
      />

      <div className="relative z-10 max-w-5xl mx-auto text-white">
        <FadeIn>
          <span className="text-white/50 text-[10px] font-bold uppercase tracking-widest mb-12 block border-b border-white/20 pb-6 w-max mx-auto">The Vision</span>
          <h2 className="text-3xl md:text-5xl lg:text-[72px] font-serif italic leading-tight mb-12 drop-shadow-lg">
            &quot;Let&apos;s dig a hole, plant a tree, nurture its roots, and watch it thrive for a greener future.&quot;
          </h2>
          <p className="text-white/80 text-xl font-light max-w-3xl mx-auto leading-relaxed">
            Wake up to sunlight, fresh air, and the natural sounds of birds. A lifestyle far from city chaos yet perfectly connected to urban conveniences.
          </p>
        </FadeIn>
      </div>
    </section>
  );
};

export default ProjectVision;
