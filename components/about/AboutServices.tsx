"use client";

import React from 'react';
import { 
  Search, ShieldCheck, MapPin, 
  FileText, TrendingUp, CheckCircle2 
} from 'lucide-react';
import FadeIn from '../shared/FadeIn';

const AboutServices = () => {
  const services = [
    { icon: <Search size={32}/>, title: "1. Property Consultation", desc: "Helping you choose the right investment based on your budget, goals, and preferences." },
    { icon: <ShieldCheck size={32}/>, title: "2. Project Verification", desc: "We work only with legally approved projects (RERA / BMRDA / MPA) to ensure safe investments." },
    { icon: <MapPin size={32}/>, title: "3. Site Visit Assistance", desc: "Organized, hassle-free site visits so you can experience the project before making a decision." },
    { icon: <FileText size={32}/>, title: "4. Documentation", desc: "End-to-end assistance with all paperwork, unit booking, and official registration." },
    { icon: <TrendingUp size={32}/>, title: "5. Investment Guidance", desc: "Expert insights on market trends, location growth, and overall ROI potential." },
    { icon: <CheckCircle2 size={32}/>, title: "The Result", desc: "A transparent, secure, and highly profitable real estate acquisition for you and your family.", bg: "bg-primary", text: "text-white", iconColor: "text-white" }
  ];

  return (
    <section id="services" className="bg-off-white border-b border-dark/10">
      <div className="max-w-[1600px] mx-auto p-6 md:p-12 lg:p-20 text-center border-b border-dark/10">
        <FadeIn>
          <span className="text-primary text-[10px] font-bold uppercase tracking-widest mb-6 block">What We Do</span>
          <h2 className="text-4xl md:text-[64px] font-black tracking-tighter text-dark mb-6">We guide your journey.</h2>
          <p className="text-grey font-medium text-lg max-w-2xl mx-auto">We don’t just sell properties — we guide you through the entire journey, ensuring a smooth and secure buying experience.</p>
        </FadeIn>
      </div>

      <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, idx) => (
          <div key={idx} className={`p-10 md:p-16 border-b border-r border-dark/10 hover:bg-white transition-colors group ${service.bg || 'bg-transparent'}`}>
            <FadeIn delay={idx * 0.05}>
              <div className={`mb-8 ${service.iconColor || 'text-dark/30'} group-hover:${service.iconColor || 'text-primary'} transition-colors duration-500`}>
                {service.icon}
              </div>
              <h3 className={`text-2xl font-black mb-4 tracking-tight ${service.text || 'text-dark'}`}>{service.title}</h3>
              <p className={`text-sm font-medium leading-relaxed ${service.text ? 'text-white/70' : 'text-grey'}`}>{service.desc}</p>
            </FadeIn>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutServices;
