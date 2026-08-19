"use client";

import React from 'react';
import FadeIn from '../shared/FadeIn';

const ProjectInvestment = () => {
  const investmentCards = [
    { lbl: "Market Trend", val: "Rapid Dev", sub: "Sarjapur & STRR" },
    { lbl: "Infra Impact", val: "High Value", sub: "Upcoming Projects" },
    { lbl: "Demand", val: "Surging", sub: "Plotted Layouts" },
    { lbl: "Entry Point", val: "Phase 2", sub: "Pricing Advantage" }
  ];

  return (
    <section className="bg-off-white border-b border-dark/10 relative z-20">
      <div className="max-w-[1600px] mx-auto p-6 md:p-12 lg:p-20">
        <FadeIn className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <span className="text-primary text-[10px] font-bold uppercase tracking-widest mb-6 block">Market Analysis</span>
            <h2 className="text-4xl md:text-[80px] font-black tracking-tighter text-dark uppercase leading-none">Investment.</h2>
          </div>
          <p className="text-grey text-xl font-medium max-w-lg lg:text-right">
            Located in Bengaluru&apos;s fastest-growing corridor. Early investors secure the maximum upside due to upcoming infrastructure.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-dark/10 shadow-2xl rounded-[32px] overflow-hidden">
          {investmentCards.map((item, i) => (
            <FadeIn key={i} delay={i * 0.1} className={`p-8 md:p-12 bg-white border-b lg:border-b-0 ${i !== 3 && 'border-r border-dark/10'} hover:bg-primary hover:text-white transition-all duration-500 group cursor-default`}>
              <p className="text-[10px] font-mono text-grey group-hover:text-white/50 uppercase tracking-widest mb-10 border-b border-dark/10 group-hover:border-white/20 pb-4 transition-colors">{item.lbl}</p>
              <p className="text-3xl font-black text-primary group-hover:text-white tracking-tight mb-2 transition-colors">{item.val}</p>
              <p className="text-sm font-bold text-grey group-hover:text-white/70 transition-colors">{item.sub}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectInvestment;
