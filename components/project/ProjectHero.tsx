"use client";

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import ParallaxBackground from '../shared/ParallaxBackground';
import { useModal } from '@/context/ModalContext';

const easeOutQuint = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: easeOutQuint } }
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const ProjectHero = () => {
  const { scrollY } = useScroll();
  const heroTextY = useTransform(scrollY, [0, 1000], [0, -150]);
  const { openBookVisit } = useModal();

  const stats = [
    { l: "Starting Price", v: "₹42 Lakhs*" },
    { l: "Plot Sizes", v: "1200-3000 sq.ft" },
    { l: "Status", v: "Ready to Register" },
    { l: "Approvals", v: "RERA & MPA" }
  ];

  return (
    <section className="relative min-h-[100svh] flex flex-col pt-32 overflow-hidden">
      <ParallaxBackground
        src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=2000"
        overlay="bg-gradient-to-b from-primary/80 via-dark/40 to-dark"
      />

      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 max-w-[1600px] mx-auto w-full relative z-10 pointer-events-none">
        <div className="lg:col-span-8 flex flex-col justify-center px-6 md:px-12 py-12 lg:py-0">
          <motion.div initial="hidden" animate="visible" variants={stagger} style={{ y: heroTextY }}>

            <motion.h1 variants={fadeUp} className="text-[14vw] md:text-[120px] lg:text-[160px] font-black tracking-tighter leading-[0.85] text-white mb-10 drop-shadow-2xl">
              BIRD <br className='hidden md:block' /> SONG.
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg md:text-2xl text-white/80 font-light max-w-xl leading-snug drop-shadow-lg">
              Premium Villa Plots inside The Empyrean. A lifestyle where nature, luxury, and high-ROI investment come together.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Bottom Data Ledger */}
      <div className="border-t pb-10 md:pb-0 border-white/20 bg-gradient-to-b from-transparent to-dark backdrop-blur-sm relative z-20">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between">
          <div className="grid grid-cols-2 md:grid-cols-4 w-full md:w-3/4 border-r border-white/20">
            {stats.map((stat, i) => (
              <div key={i} className={`p-6 md:p-8 ${i !== 3 && 'border-r border-white/20'} ${i < 2 && 'border-b md:border-b-0 border-white/20'}`}>
                <p className="text-[10px] font-bold text-white/50 uppercase tracking-widest mb-2">{stat.l}</p>
                <p className="text-xl md:text-2xl font-bold text-white tracking-tight">{stat.v}</p>
              </div>
            ))}
          </div>
          <button 
            onClick={openBookVisit}
            className="w-full md:w-1/4 bg-white text-primary flex items-center justify-center p-8 hover:bg-grey hover:text-white transition-colors group cursor-pointer pointer-events-auto"
          >
            <span className="text-sm font-bold uppercase tracking-widest mr-4">Book Visit</span>
            <ArrowRight className="group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectHero;
