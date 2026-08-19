"use client";

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ShieldCheck, CheckCircle2, Trees, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import ParallaxBackground from './ParallaxBackground';
import { useModal } from '@/context/ModalContext';

const easeOutQuint = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOutQuint } }
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const Hero = () => {
  const { scrollY } = useScroll();
  const heroTextY = useTransform(scrollY, [0, 800], [0, -100]);
  const { openBookVisit } = useModal();

  return (
    <section className="relative min-h-[85vh] flex flex-col justify-end pt-24 lg:pt-28 overflow-hidden bg-dark">
      <ParallaxBackground
        src="/arka-grand/image-5.jpeg"
        overlay="bg-gradient-to-b from-primary/80 via-dark/40 to-dark/90"
      />

      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 md:px-12 flex-1 flex flex-col justify-center pb-10">
        <motion.div initial="hidden" animate="visible" variants={stagger} style={{ y: heroTextY }} className="max-w-5xl">
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-md px-4 py-2 rounded-full mb-4 shadow-lg">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white">Bengaluru’s Fastest Growing Corridor</span>
          </motion.div>
          <motion.h1 variants={fadeUp} className="text-5xl md:text-[80px] lg:text-[110px] font-black tracking-tighter leading-[0.9] text-white mb-6 drop-shadow-2xl">
            OWN PREMIUM <br /> VILLA PLOTS.
          </motion.h1>
          <motion.p variants={fadeUp} className="text-xl md:text-2xl text-white/80 font-medium max-w-3xl leading-snug mb-8 drop-shadow-md">
            Experience a perfect blend of nature, luxury, and investment potential with ARKA GRAND, strategically located next to the proposed Swift City IT Hub in Attibele–Jigala.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <button 
              onClick={openBookVisit}
              className="w-full sm:w-auto bg-green-500 text-white px-8 sm:px-10 py-4 md:py-5 rounded-full font-bold text-sm tracking-widest uppercase hover:bg-green-600 transition-colors shadow-[0_0_30px_rgba(34,197,94,0.4)] flex items-center justify-center gap-3 hover:scale-105 transform"
            >
              Book Visit <span className='md:block hidden'>Today</span> <ArrowRight size={16} />
            </button>
            <Link href="/projects" className="w-full sm:w-auto border border-white/30 bg-white/10 backdrop-blur-md text-white px-8 sm:px-10 py-4 md:py-5 rounded-full font-bold text-sm tracking-widest uppercase hover:bg-white hover:text-dark transition-all flex items-center justify-center gap-3 hover:scale-105 transform">
              Explore Projects <ArrowUpRight size={16} />
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Trust Dock */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8, ease: easeOutQuint }}
        className="relative z-20 w-full bg-gradient-to-t from-dark to-transparent pb-8"
      >
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <div className="flex flex-wrap justify-start md:justify-between items-center gap-6 border-t border-white/20 pt-8">
            {[
              { icon: <ShieldCheck size={20} />, text: "RERA Approved" },
              { icon: <CheckCircle2 size={20} />, text: "Ready for Registration" },
              { icon: <Trees size={20} />, text: "Gated Community Living" }
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

export default Hero;
