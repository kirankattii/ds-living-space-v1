"use client";

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Phone, Clock, Mail, MessageCircle } from 'lucide-react';
import ParallaxBackground from '../shared/ParallaxBackground';

const easeOutQuint = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOutQuint } }
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const ContactHero = () => {
  const { scrollY } = useScroll();
  const heroTextY = useTransform(scrollY, [0, 600], [0, -80]);

  return (
    <section className="relative pt-32 lg:pt-48 pb-20 lg:pb-32 overflow-hidden bg-dark z-10">
      <ParallaxBackground 
        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000" 
        overlay="bg-gradient-to-b from-primary/90 via-dark/80 to-dark"
      />

      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 md:px-12 flex flex-col lg:flex-row justify-between items-end gap-12">
        
        {/* Hero Text */}
        <motion.div initial="hidden" animate="visible" variants={stagger} style={{ y: heroTextY }} className="w-full lg:w-1/2">
          <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
            <span className="w-8 h-[1px] bg-white" />
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-white">DS Living Spaces</span>
          </motion.div>
          <motion.h1 variants={fadeUp} className="text-5xl md:text-[80px] lg:text-[100px] font-black tracking-tighter leading-[0.9] text-white mb-6">
            GET IN <br /> TOUCH.
          </motion.h1>
          <motion.p variants={fadeUp} className="text-lg md:text-xl text-white/80 font-medium max-w-lg leading-relaxed mb-8">
            Interested in premium villa plots in Bengaluru? Our team is here to assist you with complete project information, pricing, and site visits.
          </motion.p>
          <motion.div variants={fadeUp} className="flex items-center gap-4">
            <a href="tel:9019800009" className="bg-white text-primary px-8 py-4 font-bold text-sm uppercase tracking-widest hover:bg-grey hover:text-white transition-colors flex items-center gap-3 rounded-full shadow-xl">
              <Phone size={16} /> Call Now
            </a>
          </motion.div>
        </motion.div>

        {/* Quick Contact Options */}
        <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3, duration: 0.8, ease: easeOutQuint }} className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="sm:col-span-2 bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl flex items-center justify-between text-white">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-white/50 mb-1">Availability</p>
              <p className="font-bold">7 Days a Week</p>
            </div>
            <Clock size={24} className="text-white/50" />
          </div>

          <a href="tel:9019800009" className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-2xl flex flex-col group hover:bg-white transition-colors cursor-pointer">
            <Phone size={24} className="text-white mb-6 group-hover:text-primary transition-colors" />
            <p className="text-[10px] font-bold uppercase tracking-widest text-white/50 group-hover:text-grey mb-2 transition-colors">Call Us</p>
            <p className="text-lg font-bold text-white group-hover:text-primary transition-colors">90198 00009</p>
          </a>

          <a href="https://wa.me/919019800009" target="_blank" rel="noopener noreferrer" className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-2xl flex flex-col group hover:bg-[#25D366] transition-colors cursor-pointer">
            <MessageCircle size={24} className="text-white mb-6 group-hover:text-white transition-colors" />
            <p className="text-[10px] font-bold uppercase tracking-widest text-white/50 group-hover:text-white/80 mb-2 transition-colors">WhatsApp Us</p>
            <p className="text-lg font-bold text-white transition-colors">Chat Instantly</p>
          </a>
          
          <a href="mailto:info@dslivingspace.com" className="sm:col-span-2 bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl flex items-center justify-between group hover:bg-white transition-colors cursor-pointer">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-white/50 group-hover:text-grey mb-1 transition-colors">Email Us</p>
              <p className="text-lg font-bold text-white group-hover:text-primary transition-colors">info@dslivingspace.com</p>
            </div>
            <Mail size={24} className="text-white group-hover:text-primary transition-colors" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactHero;
