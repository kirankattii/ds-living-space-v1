"use client";

import React from 'react';
import FadeIn from '../shared/FadeIn';

const AboutTrust = () => {
  const trustItems = [
    { id: "01", title: "Verified Projects Only", desc: "We deal exclusively with approved and legally clear properties." },
    { id: "02", title: "Strategic Locations", desc: "We focus on high-growth corridors with strong future appreciation potential." },
    { id: "03", title: "Customer-Centric", desc: "We take time to deeply understand your needs and guide you accordingly." },
    { id: "04", title: "End-to-End Support", desc: "From the very first enquiry to the final registration — we’re with you." },
    { id: "05", title: "Transparent Process", desc: "Absolutely no hidden charges, and zero misleading information." }
  ];

  return (
    <section className="py-20 md:py-32 px-6 md:px-12 max-w-[1600px] mx-auto border-b border-dark/10 bg-white">
      <div className="flex flex-col md:flex-row justify-between md:items-end mb-20 gap-8">
        <FadeIn>
          <h2 className="text-4xl md:text-[64px] font-black tracking-tighter text-dark leading-[1.05]">
            Why clients <br className='hidden lg:block' /> trust us.
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="text-grey font-medium text-lg max-w-md lg:text-right">
            Choosing the right real estate partner is just as important as choosing the right property.
          </p>
        </FadeIn>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {trustItems.map((item, i) => (
          <FadeIn key={i} delay={i * 0.1}>
            <div className={`p-10 border border-dark/10 h-full relative overflow-hidden group hover:bg-primary transition-colors duration-500 ${i === 4 ? 'md:col-span-2 lg:col-span-2' : ''}`}>
              <div className="absolute -right-6 -top-10 text-[120px] font-black text-dark/5 group-hover:text-white/5 transition-colors duration-500 leading-none select-none">
                {item.id}
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl font-black text-dark mb-4 tracking-tight group-hover:text-white transition-colors duration-500">{item.title}</h3>
                <p className="text-grey font-medium group-hover:text-white/70 transition-colors duration-500">{item.desc}</p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};

export default AboutTrust;
