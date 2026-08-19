"use client";

import React from 'react';
import { Zap, Droplets, Activity, MapPin } from 'lucide-react';
import FadeIn from '../shared/FadeIn';

const GalleryInfrastructure = () => {
  return (
    <section id="infrastructure" className="py-16 md:py-26 px-6 md:px-12 bg-off-white border-b border-dark/10">
      <div className="max-w-[1600px] mx-auto flex flex-col lg:flex-row gap-16">

        <div className="w-full lg:w-1/3">
          <FadeIn>
            <span className="text-primary text-[10px] font-bold uppercase tracking-[0.3em] mb-4 block">Supporting Amenities</span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-dark leading-[1.05] mb-6">
              Built for long-term comfort.
            </h2>
            <p className="text-grey font-medium text-lg leading-relaxed">
              Beyond visible amenities, our projects offer strong, carefully planned infrastructure to ensure sustainability and safety.
            </p>
          </FadeIn>
        </div>

        <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-0 border-t-2 border-dark">
          {[
            { title: "Underground Electricity", icon: <Zap size={20} /> },
            { title: "24/7 Water Supply", icon: <Droplets size={20} /> },
            { title: "Sewage Treatment (STP)", icon: <Activity size={20} /> },
            { title: "Water Treatment (WTP)", icon: <Activity size={20} /> },
            { title: "Rainwater Harvesting", icon: <Droplets size={20} /> },
            { title: "Wide Concrete Roads", icon: <MapPin size={20} /> },
            { title: "Street Lighting", icon: <Zap size={20} /> },
            { title: "Drainage System", icon: <Activity size={20} /> }
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-4 py-6 border-b border-dark/10 hover:bg-white transition-colors px-4 -mx-4 group">
              <div className="text-grey/30 group-hover:text-primary transition-colors">{item.icon}</div>
              <span className="font-bold text-dark">{item.title}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default GalleryInfrastructure;
