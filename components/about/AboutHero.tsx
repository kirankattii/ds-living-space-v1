"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const easeOutQuint = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: easeOutQuint } }
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

import Image from 'next/image';

const AboutHero = () => {
  return (
    <section className="pt-32  min-h-[70vh] flex flex-col justify-center bg-white overflow-hidden pb-16">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Text Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="lg:col-span-6 z-10 order-2 lg:order-1"
          >
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
              <span className="w-2 h-2 bg-primary rounded-full" />
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-grey">About DS Living Spaces</span>
            </motion.div>

            <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl lg:text-[72px] font-black tracking-tighter leading-[0.9] text-primary mb-8">
              TRUST. <br /> TRANSPARENCY. <br /> CONFIDENCE.
            </motion.h1>

            <motion.p variants={fadeUp} className="text-lg md:text-xl text-grey font-light max-w-xl leading-relaxed mb-10">
              Your trusted real estate partner in Bengaluru. We help you discover premium plots, villa communities, and high-growth investment opportunities.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-6">
              <a href="#story" className="inline-flex items-center gap-4 bg-primary text-white px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-dark transition-all shadow-lg hover:-translate-y-1">
                Discover Our Story <ArrowRight size={16} />
              </a>
            </motion.div>
          </motion.div>

          {/* Image Content */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, ease: easeOutQuint, delay: 0.2 }}
            className="lg:col-span-6 relative h-[240px] md:h-[450px] lg:h-[500px] order-1 lg:order-2"
          >
            <div className="absolute inset-0 bg-primary/5 rounded-[32px] transform translate-x-3 translate-y-3" />
            <div className="relative h-full w-full rounded-[32px] overflow-hidden shadow-xl border border-dark/5">
              <Image
                src="/about-hero.jpg"
                alt="DS Living Space Community"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 600px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
            </div>

            {/* Floating Info Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-dark/5 hidden xl:block max-w-[240px] z-20"
            >
              <p className="text-dark font-bold text-base mb-1">Verified Projects</p>
              <p className="text-grey text-xs leading-relaxed">
                Every project we list undergoes a 100+ point verification check.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
