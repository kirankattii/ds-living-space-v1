"use client";

import React from 'react';
import { Target, ShieldCheck, TrendingUp, Users } from 'lucide-react';
import FadeIn from '../shared/FadeIn';

const AboutVision = () => {
  const missionItems = [
    { icon: <Target size={24}/>, text: "Provide transparent and honest real estate services." },
    { icon: <ShieldCheck size={24}/>, text: "Offer only verified and legally approved projects." },
    { icon: <TrendingUp size={24}/>, text: "Help clients make confident investment decisions." },
    { icon: <Users size={24}/>, text: "Deliver a smooth and hassle-free buying experience." }
  ];

  return (
    <section id="vision" className="bg-primary text-white flex flex-col lg:flex-row">
      
      {/* Vision */}
      <div className="w-full lg:w-1/2 p-12 md:p-24 border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col justify-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[80px]" />
        <FadeIn className="relative z-10">
          <span className="text-white/50 text-[10px] font-bold uppercase tracking-widest mb-8 block">Our Vision</span>
          <h2 className="text-4xl md:text-[64px] font-serif italic leading-tight text-white mb-8">
            &quot;To deliver value-driven property solutions &amp; build long-term relationships.&quot;
          </h2>
          <p className="text-white/70 font-light text-xl">Becoming the most trusted name in Bengaluru real estate.</p>
        </FadeIn>
      </div>

      {/* Mission */}
      <div className="w-full lg:w-1/2 p-12 md:p-24 flex flex-col justify-center">
        <FadeIn>
          <span className="text-white/50 text-[10px] font-bold uppercase tracking-widest mb-12 block">Our Mission</span>
          <ul className="space-y-10">
            {missionItems.map((item, i) => (
              <li key={i} className="flex items-center gap-6 group">
                <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center text-white/50 group-hover:text-white group-hover:border-white transition-all">
                  {item.icon}
                </div>
                <span className="text-xl md:text-2xl font-light tracking-tight">{item.text}</span>
              </li>
            ))}
          </ul>
        </FadeIn>
      </div>
    </section>
  );
};

export default AboutVision;
