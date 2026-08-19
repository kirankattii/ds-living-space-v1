"use client";

import React from 'react';
import Image from 'next/image';
import FadeIn from '../shared/FadeIn';

const GalleryAmenitiesFamilyNature = () => {
  return (
    <section id="family" className="py-16 md:py-26 px-6 md:px-12 bg-white border-b border-dark/10">
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">

        {/* Family & Recreation */}
        <FadeIn className="bg-off-white border border-dark/10 rounded-2xl overflow-hidden group hover:shadow-2xl transition-shadow flex flex-col">
          <div className="relative h-[350px] overflow-hidden">
            <Image
              src="/villa3.png"
              alt="Family Playing"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-[1s]"
            />
          </div>
          <div className="p-10 px-6 md:p-14 flex-1 flex flex-col">
            <span className="text-primary text-[10px] font-bold uppercase tracking-[0.3em] mb-4 block">Family & Recreation</span>
            <h3 className="text-3xl md:text-4xl font-black text-dark mb-6">Safe & Engaging Spaces.</h3>
            <p className="text-grey font-medium leading-relaxed mb-8">A perfect environment where children can grow, play, and explore safely within the community limits.</p>
            <ul className="grid grid-cols-2 gap-4 mt-auto">
              {["Children’s Play Area", "Basketball Court", "Indoor Games Area", "Open Play Zones"].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-sm font-bold text-dark">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>

        {/* Nature & Relaxation */}
        <FadeIn id="nature" delay={0.2} className="bg-off-white border border-dark/10 rounded-2xl overflow-hidden group hover:shadow-2xl transition-shadow flex flex-col">
          <div className="relative h-[350px] overflow-hidden">
            <Image
              src="/garden.png"
              alt="Nature Gardens"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-[1s]"
            />
          </div>
          <div className="p-10 px-6 md:p-14 flex-1 flex flex-col">
            <span className="text-green-600 text-[10px] font-bold uppercase tracking-[0.3em] mb-4 block">Nature & Relaxation</span>
            <h3 className="text-3xl md:text-4xl font-black text-dark mb-6">Live closer to nature.</h3>
            <p className="text-grey font-medium leading-relaxed mb-8">Designed for relaxation, mindfulness, and a calm lifestyle. Disconnect from the city noise and recharge.</p>
            <ul className="grid grid-cols-2 gap-4 mt-auto">
              {["Meditation Pavilions", "Sensory Garden Trails", "Landscaped Gardens", "Avenue Plantation"].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-sm font-bold text-dark">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>

      </div>
    </section>
  );
};

export default GalleryAmenitiesFamilyNature;
