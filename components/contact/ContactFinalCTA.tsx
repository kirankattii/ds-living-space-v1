"use client";

import React from 'react';
import { CheckCircle2, Building } from 'lucide-react';
import FadeIn from '../shared/FadeIn';

const ContactFinalCTA = () => {
  const trustItems = [
    "RERA Approved Project", 
    "Bank Loan Available", 
    "100% Transparent Process", 
    "End-to-End Support"
  ];

  return (
    <section className="bg-primary text-white border-b border-white/10">
      <div className="max-w-[1600px] mx-auto flex flex-col lg:flex-row items-stretch">
        
        {/* CTA Left */}
        <div className="w-full lg:w-1/2 p-12 md:p-20 lg:p-24 flex flex-col justify-center">
          <FadeIn>
            <span className="inline-flex items-center gap-2 border border-red-500/30 bg-red-500/10 text-red-400 px-4 py-2 text-[10px] font-bold uppercase tracking-widest mb-6 w-max rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" /> Phase 2 Selling Fast
            </span>
            <h2 className="text-4xl md:text-[64px] font-black tracking-tighter mb-6 leading-[1.05]">
              Limited Plots <br /> Available.
            </h2>
            <p className="text-white/70 font-medium text-lg max-w-md mb-10 leading-relaxed">
              Don’t miss your chance to invest in a premium plotted development in Bengaluru’s growth corridor.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a href="tel:9019800009" className="bg-white text-primary px-10 py-5 font-bold text-xs uppercase tracking-widest hover:bg-grey hover:text-white transition-all w-full sm:w-auto text-center rounded-full shadow-2xl">
                Call Now: 90198 00009
              </a>
              <button className="bg-transparent border border-white/30 text-white px-10 py-5 font-bold text-xs uppercase tracking-widest hover:bg-white/10 transition-all w-full sm:w-auto rounded-full">
                Book Free Site Visit
              </button>
            </div>
          </FadeIn>
        </div>

        {/* Trust Right */}
        <div className="w-full lg:w-1/2 border-t lg:border-t-0 lg:border-l border-white/10 p-12 md:p-20 lg:p-24 bg-black/20 h-auto flex flex-col justify-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px] -mr-32 -mt-32" />
          <FadeIn delay={0.2} className="relative z-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
              {trustItems.map((item, i) => (
                <div key={i} className="flex items-center gap-4 border-b border-white/10 pb-4 group">
                  <CheckCircle2 size={24} className="text-white/30 shrink-0 group-hover:text-green-400 transition-colors" />
                  <span className="font-bold text-sm tracking-wide text-white">{item}</span>
                </div>
              ))}
            </div>
            <div className="flex items-start gap-4 p-6 bg-white/5 rounded-2xl border border-white/10">
              <Building size={32} className="text-white/30 shrink-0" />
              <p className="text-white/60 text-sm font-medium leading-relaxed">
                DS Living Spaces is committed to helping you make safe and smart real estate investments with complete transparency and professional guidance.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default ContactFinalCTA;
