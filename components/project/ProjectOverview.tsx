"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { ShieldCheck, TrendingUp } from 'lucide-react';
import FadeIn from '../shared/FadeIn';
import ImageModal from '../shared/ImageModal';

const ProjectOverview = () => {
  const [isMapModalOpen, setIsMapModalOpen] = useState(false);

  const ledgerItems = [
    { label: "Project Name", value: "Bird Song" },
    { label: "Developer", value: "Yash Value Spaces" },
    { label: "Marketed By", value: "DS Living Spaces" },
    { label: "Property Type", value: "Premium Villa Plots" },
    { label: "Timeline", value: "Completion within 12 months" },
    { label: "Bank Loan", value: "Available" }
  ];

  return (
    <section id="overview" className="border-t border-dark/10 relative bg-white z-20">
      <div className="max-w-[1600px] mx-auto flex flex-col lg:flex-row">

        {/* Sticky Left Title */}
        <div className="w-full lg:w-1/3 border-b lg:border-b-0 lg:border-r border-dark/10 p-6 md:p-12 lg:p-20 relative">
          <div className="lg:sticky lg:top-40">
            <FadeIn>
              <h2 className="text-5xl md:text-6xl font-black text-primary tracking-tighter leading-[1.1]">Project <br />Overview</h2>
            </FadeIn>

            {/* Clickable Map Image */}
            <FadeIn delay={0.2}>
              <div
                className="mt-12 rounded-2xl overflow-hidden border border-dark/10 shadow-2xl bg-off-white group cursor-pointer relative"
                onClick={() => setIsMapModalOpen(true)}
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src="/map2.png"
                    alt="Project Layout Map"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/5 transition-colors duration-500 flex items-center justify-center">
                    <div className="bg-white/60 backdrop-blur-md px-6 py-3 rounded-full shadow-xl opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 flex items-center gap-2">
                      <span className="text-xs font-bold uppercase tracking-widest text-primary">Expand Map</span>
                    </div>
                  </div>
                </div>
                <div className="p-5 bg-white/60 border-t border-dark/5 flex justify-between items-center relative z-10 backdrop-blur-sm">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-grey mb-1">Interactive Layout</p>
                    <p className="text-sm font-bold text-primary">Site Plan </p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white/40 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                    <TrendingUp size={14} />
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Scrolling Right Content */}
        <div className="w-full lg:w-2/3">
          <div className="p-6 md:p-12 lg:p-20 border-b border-dark/10">
            <FadeIn>
              <p className="text-2xl md:text-4xl text-dark font-light leading-snug tracking-tight mb-12">
                Surrounded by pleasant meadows and a thriving community of 750+ villas, Bird Song offers a perfect balance of peaceful living and modern infrastructure.
              </p>
            </FadeIn>

            {/* Financial/Spec Ledger */}
            <div className="w-full border-t border-dark/10">
              {ledgerItems.map((row, i) => (
                <FadeIn key={i} delay={i * 0.05}>
                  <div className="flex flex-col sm:flex-row justify-between py-6 border-b border-dark/10 hover:bg-off-white transition-colors px-4 -mx-4 rounded-lg group">
                    <span className="text-xs font-bold text-grey uppercase tracking-widest mb-2 sm:mb-0 w-1/3 group-hover:text-primary transition-colors">{row.label}</span>
                    <span className="text-lg font-bold text-primary w-2/3">{row.value}</span>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Highlights Mini-Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-12 border-b md:border-b-0 md:border-r border-dark/10 bg-off-white group hover:bg-white transition-colors">
              <ShieldCheck size={32} strokeWidth={1} className="text-primary mb-6 group-hover:scale-110 transition-transform origin-left" />
              <h4 className="text-lg font-bold text-dark mb-2">Secure Community</h4>
              <p className="text-grey text-sm">Gated layout inside The Empyrean with 24/7 security.</p>
            </div>
            <div className="p-12 bg-off-white group hover:bg-white transition-colors">
              <TrendingUp size={32} strokeWidth={1} className="text-primary mb-6 group-hover:scale-110 transition-transform origin-left" />
              <h4 className="text-lg font-bold text-dark mb-2">High Appreciation</h4>
              <p className="text-grey text-sm">Strategic location with immense future value growth.</p>
            </div>
          </div>
        </div>
      </div>

      <ImageModal
        isOpen={isMapModalOpen}
        onClose={() => setIsMapModalOpen(false)}
        src="/map2.png"
        alt="Project Layout Map"
      />
    </section>
  );
};

export default ProjectOverview;
