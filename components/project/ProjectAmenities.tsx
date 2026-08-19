"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Droplets, HeartPulse, Users, Trees, ShieldCheck, Sprout, Tent, Calendar } from 'lucide-react';
import Image from 'next/image';

const ProjectAmenities = () => {
  return (
    <section id="amenities" className="py-20 md:py-32 px-6 max-w-[1400px] mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div>
          <span className="text-[#11123A] text-[10px] font-bold tracking-[0.3em] uppercase mb-4 block">World-Class Amenities</span>
          <h2 className="text-4xl md:text-[64px] font-black tracking-tighter text-[#171717] leading-none">
            Club Bird Song.
          </h2>
        </div>
        <div className="text-right">
          <p className="text-[#808080] text-lg max-w-md md:text-right font-medium mb-4">
            A 20,000 sq.ft ecosystem providing the highest standard of leisure, fitness, and community living.
          </p>
          <div className="inline-flex items-center gap-2 bg-[#11123A] text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider">
            <Calendar size={14} />
            Completion in 12 months
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[320px]">
        {/* Clubhouse with Swimming Pool */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-2 rounded-[40px] overflow-hidden relative group shadow-lg"
        >
          <Image
            src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&q=80&w=1200"
            alt="Clubhouse with Swimming Pool"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 800px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#11123A]/90 to-transparent opacity-80" />
          <div className="absolute bottom-8 left-8 right-8 text-[#ffffff]">
            <div className="w-14 h-14 rounded-2xl bg-[#ffffff]/20 backdrop-blur-md border border-[#ffffff]/30 flex items-center justify-center mb-6">
              <Droplets size={24} />
            </div>
            <h3 className="text-3xl font-bold mb-2">Clubhouse with Swimming Pool</h3>
            <p className="text-[#ffffff]/80 text-sm font-medium">Infinity Pool • Poolside Dining • Outdoor BBQ Deck</p>
          </div>
        </motion.div>

        {/* Indoor and outdoor gym */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="rounded-[40px] overflow-hidden relative group shadow-lg"
        >
          <Image
            src="/gym.jpeg"
            alt="Indoor and outdoor gym"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 400px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#11123A] to-[#11123A]/20 opacity-90" />
          <div className="absolute bottom-8 left-8 right-8 text-[#ffffff]">
            <HeartPulse size={32} className="mb-4 text-[#ffffff]" />
            <h3 className="text-2xl font-bold mb-2">Indoor & Outdoor Gym</h3>
            <p className="text-[#ffffff]/70 text-xs font-medium">Premium Gym • Outdoor Fitness Park • Yoga Deck</p>
          </div>
        </motion.div>

        {/* Children's Play Area */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="rounded-[40px] overflow-hidden relative group shadow-lg"
        >
          <Image
            src="/park.jpeg"
            alt="Children's Play Area"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 400px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#11123A] to-[#11123A]/20 opacity-90" />
          <div className="absolute bottom-8 left-8 right-8 text-[#ffffff]">
            <Users size={32} className="mb-4 text-[#ffffff]" />
            <h3 className="text-2xl font-bold mb-2">Children's Play Area</h3>
            <p className="text-[#ffffff]/70 text-xs font-medium">Safe Play Zones • Basketball Court • Indoor Games</p>
          </div>
        </motion.div>

        {/* Outdoor Community Deck */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="rounded-[40px] overflow-hidden relative group shadow-lg"
        >
          <Image
            src="/desk.jpeg"
            alt="Community Deck"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 400px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#11123A] to-[#11123A]/20 opacity-90" />
          <div className="absolute bottom-8 left-8 right-8 text-[#ffffff]">
            <Tent size={32} className="mb-4 text-[#ffffff]" />
            <h3 className="text-2xl font-bold mb-2">Outdoor Community Deck</h3>
            <p className="text-[#ffffff]/70 text-xs font-medium">Lush Seating • Event Space • Stargazing Zone</p>
          </div>
        </motion.div>

        {/* 24/7 Security */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="rounded-[40px] overflow-hidden relative group shadow-lg"
        >
          <Image
            src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=800"
            alt="Security"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 400px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#11123A] to-[#11123A]/20 opacity-90" />
          <div className="absolute bottom-8 left-8 right-8 text-[#ffffff]">
            <ShieldCheck size={32} className="mb-4 text-[#ffffff]" />
            <h3 className="text-2xl font-bold mb-2">24/7 Gated Security</h3>
            <p className="text-[#ffffff]/70 text-xs font-medium">Smart Access • CCTV • Professional Guards</p>
          </div>
        </motion.div>

        {/* Eco-friendly Gardening */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="lg:col-span-2 rounded-[40px] overflow-hidden relative group shadow-lg"
        >
          <Image
            src="/garden.png"
            alt="Eco-friendly Gardening"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 800px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#11123A]/90 to-transparent opacity-80" />
          <div className="absolute bottom-8 left-8 right-8 text-[#ffffff]">
            <div className="w-14 h-14 rounded-2xl bg-[#ffffff]/20 backdrop-blur-md border border-[#ffffff]/30 flex items-center justify-center mb-6">
              <Sprout size={24} />
            </div>
            <h3 className="text-3xl font-bold mb-2">Eco-friendly Gardening</h3>
            <p className="text-[#ffffff]/80 text-sm font-medium">Organic Patch • Rainwater Harvesting • Green Trails</p>
          </div>
        </motion.div>

        {/* Nature (Spans horizontally) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="lg:col-span-4 rounded-[40px] bg-[#11123A] p-6 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 shadow-2xl relative overflow-hidden group"
        >
          <Image
            src="/park.jpeg"
            alt="Nature & Relaxation"
            fill
            className="object-cover opacity-40 transition-transform duration-700 group-hover:scale-105"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#11123A] via-[#11123A]/50 to-transparent" />
          <div className="relative z-10">
            <Trees size={40} className="text-[#ffffff] mb-6" />
            <h3 className="text-4xl font-black text-[#ffffff] mb-2 tracking-tight">Nature & Relaxation</h3>
            <p className="text-[#ffffff]/70 font-medium">Meditation Pavilions • Sensory Garden Trails • Avenue Plantation</p>
          </div>
          <button className="relative z-10 bg-[#ffffff] text-[#11123A] px-8 p-2 md:py-5 rounded-2xl font-bold hover:bg-[#808080] hover:text-[#ffffff] transition-colors whitespace-nowrap shadow-xl">
            View Master Plan
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectAmenities;
