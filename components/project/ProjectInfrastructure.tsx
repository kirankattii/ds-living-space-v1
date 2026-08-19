"use client";

import React from 'react';
import { Activity, MapPin, ShieldCheck, Check } from 'lucide-react';
import FadeIn from '../shared/FadeIn';

const ProjectInfrastructure = () => {
  const infrastructureData = [
    {
      title: "Project Level",
      icon: <Activity strokeWidth={1} size={48} />,
      items: ["Underground Sump & STP", "Water Treatment Plant", "Underground Sewage", "Transformer & DG Yards", "Storm Water Drainage"]
    },
    {
      title: "Plot Setup",
      icon: <MapPin strokeWidth={1} size={48} />,
      items: ["Sewage Pipeline Connection", "Water Line Tapping Point", "Electrical Cable Tapping", "Communication Line Provision"]
    },
    {
      title: "General Dev",
      icon: <ShieldCheck strokeWidth={1} size={48} />,
      items: ["Grand Entrance Arch", "Full Compound Wall", "Wide Concrete Roads", "Underground Electricity", "Rainwater Harvesting"]
    }
  ];

  return (
    <section id="infrastructure" className="border-b border-dark/10 bg-white relative z-20">
      <div className="max-w-[1600px] mx-auto border-b border-dark/10 p-6 md:p-12 lg:p-20 text-center">
        <FadeIn>
          <h2 className="text-4xl md:text-[64px] font-black tracking-tighter text-primary uppercase">Built for the future.</h2>
          <p className="mt-6 text-grey font-medium max-w-2xl mx-auto">Hidden infrastructure ensures a seamless, aesthetic, and sustainable living experience.</p>
        </FadeIn>
      </div>

      <div className="max-w-[1600px] mx-auto flex flex-col lg:flex-row">
        {infrastructureData.map((col, idx) => (
          <div key={idx} className="flex-1 border-b lg:border-b-0 lg:border-r border-dark/10 p-8 md:p-12 lg:p-16 hover:bg-off-white transition-colors group">
            <FadeIn delay={idx * 0.1}>
              <div className="text-dark/20 mb-12 group-hover:text-primary transition-colors group-hover:scale-110 origin-left duration-500">{col.icon}</div>
              <h3 className="text-3xl font-black text-dark mb-10 tracking-tight">{col.title}</h3>
              <ul className="space-y-0 border-t border-dark/10">
                {col.items.map((item, i) => (
                  <li key={i} className="py-5 border-b border-dark/10 text-sm font-medium text-grey flex items-center justify-between group/item cursor-default">
                    <span className="group-hover/item:text-primary transition-colors">{item}</span>
                    <Check size={16} className="text-transparent group-hover/item:text-primary transition-colors" />
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectInfrastructure;
