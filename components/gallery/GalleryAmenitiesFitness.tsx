"use client";

import React from 'react';
import { Dumbbell, Activity, Compass, HeartPulse } from 'lucide-react';
import Image from 'next/image';
import FadeIn from '../shared/FadeIn';

const GalleryAmenitiesFitness = () => {
  return (
    <section id="fitness" className="bg-primary text-white py-16 md:py-32 px-6 md:px-12 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">

        <div>
          <FadeIn>
            <span className="text-green-400 text-[10px] font-bold uppercase tracking-[0.3em] mb-4 block">Fitness & Wellness</span>
            <h2 className="text-4xl md:text-[64px] font-black tracking-tighter text-white leading-[1.05] mb-6">
              Stay active without leaving home.
            </h2>
            <p className="text-white/70 font-medium text-lg leading-relaxed mb-12">
              Designed to promote physical fitness and overall well-being. Maintain a healthy lifestyle within your own secure community.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: "Indoor Gym", icon: <Dumbbell size={24} /> },
                { title: "Outdoor Fitness Park", icon: <Activity size={24} /> },
                { title: "Walking Zones", icon: <Compass size={24} /> },
                { title: "Activity Areas", icon: <HeartPulse size={24} /> }
              ].map((item, i) => (
                <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors group flex items-center gap-5">
                  <div className="text-white/50 group-hover:text-green-400 transition-colors shrink-0">{item.icon}</div>
                  <h4 className="text-lg font-bold">{item.title}</h4>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>

        <div className="relative h-[400px] md:h-[600px] rounded-[40px] overflow-hidden shadow-2xl group border border-white/10">
          <Image
            src="/gym.jpeg"
            alt="Fitness Gym"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-[1.5s]"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/80 to-transparent" />
        </div>

      </div>
    </section>
  );
};

export default GalleryAmenitiesFitness;
