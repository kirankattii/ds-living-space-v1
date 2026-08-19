"use client";

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Droplets, HeartPulse, Trees } from 'lucide-react';
import ParallaxBackground from '../shared/ParallaxBackground';

const easeOutQuint = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOutQuint } }
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const GalleryHero = () => {
  const { scrollY } = useScroll();
  const heroTextY = useTransform(scrollY, [0, 800], [0, -100]);

  return (
    <section className="relative min-h-[75vh] flex flex-col justify-end pt-32 lg:pt-40 overflow-hidden bg-dark">
      <ParallaxBackground
        src="https://images.unsplash.com/photo-1542332213-9b5a5a3fab35?auto=format&fit=crop&q=80&w=2000"
        overlay="bg-gradient-to-b from-primary/80 via-dark/40 to-dark/90"
      />

      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 md:px-12 flex-1 flex flex-col justify-center ">
        <motion.div initial="hidden" animate="visible" variants={stagger} style={{ y: heroTextY }} className="max-w-5xl">
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-md px-4 py-2 rounded-full mb-8 shadow-lg">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white">DS Living Spaces Projects</span>
          </motion.div>
          <motion.h1 variants={fadeUp} className="text-5xl md:text-[80px] lg:text-[110px] font-black tracking-tighter leading-[0.9] text-white mb-8 drop-shadow-2xl">
            LIFESTYLE <br /> BEYOND LIVING.
          </motion.h1>
          <motion.p variants={fadeUp} className="text-xl md:text-2xl text-white/80 font-medium max-w-3xl leading-snug mb-12 drop-shadow-md">
            Discover thoughtfully planned spaces across our premium developments where every amenity enhances your lifestyle and elevates your everyday experience.
          </motion.p>
        </motion.div>
      </div>

      {/* Floating Amenity Preview Dock */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8, ease: easeOutQuint }}
        className="relative z-20 w-full bg-gradient-to-t from-dark to-transparent pt-12 pb-8"
      >
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <div className="flex flex-wrap justify-start md:justify-between items-center gap-6 border-t border-white/20 pt-8">
            {[
              { icon: <Droplets size={20} />, text: "20,000 sq.ft Clubhouse" },
              { icon: <HeartPulse size={20} />, text: "Fitness & Wellness" },
              { icon: <Trees size={20} />, text: "Nature & Relaxation" }
            ].map((badge, i) => (
              <div key={i} className="flex items-center gap-3 text-white">
                <div className="text-green-400">{badge.icon}</div>
                <span className="font-bold text-xs uppercase tracking-widest">{badge.text}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default GalleryHero;
