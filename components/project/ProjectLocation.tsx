"use client";

import React, { useState, useEffect } from 'react';
import { 
  GraduationCap, 
  Briefcase, 
  HeartPulse, 
  ShoppingBag, 
  Map as MapIcon,
  ArrowRight,
  X,
  MapPin,
  Download
} from 'lucide-react';
import Image from 'next/image';
import FadeIn from '../shared/FadeIn';
import ImageModal from '../shared/ImageModal';

// --- Main Component ---

export default function ProjectLocation() {
  const [isMapModalOpen, setIsMapModalOpen] = useState(false);

  const distances = [
    { l: "Chikka Tirupati", d: "2 km" },
    { l: "Sarjapur", d: "14 km" },
    { l: "ITPL / Whitefield", d: "22 km" },
    { l: "Airport", d: "55 km" }
  ];

  const socialInfra = [
    { 
      title: "Education", 
      icon: <GraduationCap size={24}/>, 
      items: [{n:"Cambridge", d:"5m"}, {n:"New Oxford", d:"6m"}, {n:"TISB", d:"25m"}],
      color: "from-blue-50 to-transparent",
      iconBg: "bg-blue-100 text-blue-600"
    },
    { 
      title: "Workplaces", 
      icon: <Briefcase size={24}/>, 
      items: [{n:"Infosys HQ", d:"18m"}, {n:"RGS Tech Park", d:"35m"}, {n:"Wipro", d:"38m"}],
      color: "from-amber-50 to-transparent",
      iconBg: "bg-amber-100 text-amber-600"
    },
    { 
      title: "Healthcare", 
      icon: <HeartPulse size={24}/>, 
      items: [{n:"Town Hospital", d:"15m"}, {n:"Cloudnine", d:"42m"}],
      color: "from-rose-50 to-transparent",
      iconBg: "bg-rose-100 text-rose-600"
    },
    { 
      title: "Leisure", 
      icon: <ShoppingBag size={24}/>, 
      items: [{n:"Virginia Mall", d:"35m"}, {n:"Forum Mall", d:"35m"}],
      color: "from-emerald-50 to-transparent",
      iconBg: "bg-emerald-100 text-emerald-600"
    }
  ];

  return (
    <section id="location" className="bg-slate-50 text-slate-900 relative z-20 font-sans min-h-screen overflow-hidden">
      {/* Background ambient glows (light theme versions) */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] lg:w-[800px] lg:h-[800px] bg-blue-100/50 rounded-full blur-[80px] lg:blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[250px] h-[250px] lg:w-[600px] lg:h-[600px] bg-indigo-100/50 rounded-full blur-[60px] lg:blur-[100px] pointer-events-none" />

      <div className="max-w-[1600px] mx-auto flex flex-col lg:flex-row border-b border-slate-200">
        
        {/* === Left: Map & Distances === */}
        <div className="w-full lg:w-[45%] xl:w-1/2 border-b lg:border-b-0 lg:border-r border-slate-200 flex flex-col justify-between relative overflow-hidden bg-white">
          
          <div className="p-8 md:p-12 lg:p-16 xl:p-20 relative z-10">
            <FadeIn>
              <div className="flex items-center gap-3 mb-6">
                <MapPin size={16} className="text-blue-600" />
                <span className="text-slate-500 text-xs font-bold uppercase tracking-[0.2em]">Location Advantage</span>
              </div>
              <h2 className="text-4xl md:text-7xl xl:text-[90px] font-black tracking-tighter leading-[0.9] mb-12">
                Strategic <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-500">Connectivity.</span>
              </h2>
            </FadeIn>

            {/* Location Map Image */}
            <FadeIn delay={0.2}>
              <div 
                className="mb-8 rounded-3xl overflow-hidden border border-slate-200 shadow-[0_20px_50px_rgba(0,0,0,0.05)] bg-slate-100 group cursor-pointer relative aspect-[4/3] md:aspect-[16/9] lg:aspect-[4/3]"
                onClick={() => setIsMapModalOpen(true)}
              >
                <div className="absolute inset-0 w-full h-full">
                  <Image 
                    src="/map1.png" 
                    alt="Location Map" 
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-1000 opacity-90 group-hover:opacity-100" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/90 backdrop-blur-md px-6 py-4 rounded-full border border-slate-200 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 flex items-center gap-3 shadow-xl">
                      <MapIcon size={18} className="text-slate-800" />
                      <span className="text-sm font-bold uppercase tracking-widest text-slate-800">Expand Map</span>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
          
          {/* Distances Grid */}
          <div className="grid grid-cols-2 border-t border-slate-200 relative z-10 bg-slate-50/50">
            {distances.map((loc, i) => (
              <div key={i} className={`p-8 md:p-10 xl:p-12 border-b border-slate-200 ${i % 2 === 0 ? 'border-r' : ''} hover:bg-slate-100 transition-colors group`}>
                <p className="text-[11px] text-slate-500 uppercase font-bold tracking-widest mb-3 group-hover:text-blue-600 transition-colors">{loc.l}</p>
                <p className="text-4xl md:text-5xl font-light text-slate-900 group-hover:translate-x-2 transition-transform duration-500">{loc.d}</p>
              </div>
            ))}
          </div>
        </div>

        {/* === Right: Social Infra Grid === */}
        <div className="w-full lg:w-[55%] xl:w-1/2 p-8 md:p-12 lg:p-16 xl:p-20 flex flex-col justify-center relative">
          
          <FadeIn delay={0.1}>
            <p className="text-2xl md:text-3xl font-light text-slate-600 mb-12 leading-snug max-w-2xl">
              Located in Bengaluru’s <span className="font-semibold text-slate-900">fast-developing Sarjapur corridor</span>, offering unhindered connectivity to major IT hubs and elite social infrastructure.
            </p>
          </FadeIn>

          {/* Social Infrastructure Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-grow">
            {socialInfra.map((cat, idx) => (
              <FadeIn key={idx} delay={0.2 + (idx * 0.1)} className="h-full">
                <div className="h-full bg-white border border-slate-200 rounded-[2rem] p-8 hover:border-slate-300 hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-500 group relative overflow-hidden">
                  
                  {/* Subtle Top Gradient */}
                  <div className={`absolute top-0 left-0 w-full h-32 bg-gradient-to-b ${cat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

                  <div className="relative z-10">
                    <div className="flex items-center gap-5 mb-8">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${cat.iconBg} group-hover:scale-110 transition-transform duration-500`}>
                        {cat.icon}
                      </div>
                      <h4 className="text-xl font-semibold text-slate-800 tracking-wide">{cat.title}</h4>
                    </div>
                    
                    <ul className="space-y-4">
                      {cat.items.map((item, i) => (
                        <li key={i} className="flex justify-between items-end group/item">
                          <span className="font-medium text-slate-600 group-hover/item:text-slate-900 transition-colors pb-1">
                            {item.n}
                          </span>
                          {/* Dotted spacer */}
                          <div className="flex-grow border-b-2 border-dotted border-slate-200 mx-4 mb-2 group-hover/item:border-slate-300 transition-colors" />
                          <span className="font-bold text-sm bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-full text-slate-600 group-hover/item:bg-slate-100 group-hover/item:text-slate-900 transition-all">
                            {item.d}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Interactive Call to Action to anchor the bottom */}
          <FadeIn delay={0.6}>
            <a 
              href="/BIRD SONG BROCHURE.pdf" 
              download
              className="mt-10 group cursor-pointer relative overflow-hidden rounded-[2rem] bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 hover:border-blue-300 hover:shadow-md transition-all duration-500 p-8 flex items-center justify-between"
            >
              <div className="relative z-10">
                <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-2">Detailed Overview</p>
                <h4 className="text-2xl font-semibold text-slate-900">Download Brochure</h4>
              </div>
              <div className="relative z-10 w-14 h-14 rounded-full bg-slate-900 text-white flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-500 shadow-md">
                <Download size={24} className="group-hover:scale-110 transition-transform" />
              </div>
              
              {/* Shine effect on hover */}
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/60 to-transparent group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none" />
            </a>
          </FadeIn>

        </div>
      </div>

      <ImageModal 
        isOpen={isMapModalOpen} 
        onClose={() => setIsMapModalOpen(false)} 
        src="/map1.png" 
        alt="Location Map" 
      />

      {/* Embedded Styles for custom animations missing from standard tailwind */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}} />
    </section>
  );
}
