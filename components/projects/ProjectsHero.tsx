"use client";

import React from 'react';
import { motion } from 'framer-motion';
import ParallaxBackground from '../shared/ParallaxBackground';

const ProjectsHero = () => {
  return (
    <section className="relative min-h-[60vh] flex flex-col justify-center items-center text-center px-6 overflow-hidden bg-dark">
      <ParallaxBackground
        src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=2000"
        overlay="bg-gradient-to-b from-primary/80 via-dark/40 to-dark/90"
      />

      <div className="relative z-10 w-full max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-md px-4 py-2 rounded-2xl text-[10px] font-bold uppercase tracking-[0.2em] text-white mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-2xl animate-pulse" />
            Signature Developments
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-none text-white mb-6 drop-shadow-2xl">
            OUR PROJECTS.
          </h1>
          <p className="text-xl md:text-2xl text-white/80 font-medium leading-relaxed max-w-2xl mx-auto">
            Discover thoughtfully planned communities that blend modern infrastructure with nature's serenity.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsHero;
