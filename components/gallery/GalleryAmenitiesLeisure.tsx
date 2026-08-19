"use client";

import React from 'react';
import { Droplets, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import FadeIn from '../shared/FadeIn';

const GalleryAmenitiesLeisure = () => {
  return (
    <section id="leisure" className="py-16 md:py-26 px-6 md:px-12 bg-off-white">
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

        <div className="lg:col-span-7 h-[500px] md:h-[700px] rounded-[40px] overflow-hidden shadow-2xl relative group order-2 lg:order-1">
          <Image
            src="/gallery3.png"
            alt="Clubhouse Pool"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-[1.5s]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
          <div className="absolute bottom-10 left-10 text-white">
            <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/30 mb-6">
              <Droplets size={24} />
            </div>
            <h3 className="text-4xl font-black tracking-tight">Our Clubhouse</h3>
          </div>
        </div>

        <div className="lg:col-span-5 order-1 lg:order-2">
          <FadeIn>
            <span className="text-primary text-[10px] font-bold uppercase tracking-[0.3em] mb-4 block">Lifestyle & Leisure</span>
            <h2 className="text-4xl md:text-[56px] font-black tracking-tighter text-dark leading-[1.05] mb-6">
              Spaces designed for everyday enjoyment.
            </h2>
            <p className="text-grey font-medium text-lg leading-relaxed mb-12">
              Relax, gather, and celebrate. A premium space dedicated to community activities, indoor games, and unforgettable social events.
            </p>

            <div className="space-y-8">
              {[
                { title: "20,000 sq.ft Clubhouse", desc: "A premium space for community activities and social events." },
                { title: "Swimming Pool", desc: "Perfect for relaxation and leisure time with family." },
                { title: "Poolside Dining & BBQ", desc: "Enjoy peaceful mornings and refreshing weekend gatherings." },
                { title: "Community Deck", desc: "Ideal for socializing and spending quality time with neighbors." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 group">
                  <div className="mt-1"><CheckCircle2 size={20} className="text-primary group-hover:text-green-500 transition-colors" /></div>
                  <div>
                    <h4 className="text-xl font-bold text-dark tracking-tight">{item.title}</h4>
                    <p className="text-grey text-sm font-medium mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default GalleryAmenitiesLeisure;
