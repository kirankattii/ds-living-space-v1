"use client";

import React from 'react';
import FadeIn from '../shared/FadeIn';

const AboutApproach = () => {
  const steps = [
    { step: "01", title: "Understand", desc: "Deep dive into your budget & goals." },
    { step: "02", title: "Recommend", desc: "Curate suitable, verified projects." },
    { step: "03", title: "Experience", desc: "Arrange hassle-free site visits." },
    { step: "04", title: "Select", desc: "Assist in choosing the perfect plot." },
    { step: "05", title: "Secure", desc: "Support booking & full registration." }
  ];

  return (
    <section id="process" className="py-16 md:py-24 px-3 md:px-12 bg-white border-b border-dark/10">
      <div className="max-w-[1600px] mx-auto text-center pb-14  md:mb-14 ">
        <FadeIn>
          <span className="text-primary text-[10px] font-bold uppercase tracking-widest mb-6 block">Our Approach</span>
          <h2 className="text-4xl md:text-[64px] font-black tracking-tighter text-dark mb-6">Simple. Clear. Stress-free.</h2>
          <p className="text-grey font-medium text-lg max-w-2xl mx-auto">We ensure you feel confident, informed, and completely secure at every step of your real estate journey.</p>
        </FadeIn>
      </div>

      <div className="max-w-[1400px] mx-auto">
        {/* Desktop Horizontal Line */}
        <div className="hidden lg:block w-full h-[1px] bg-dark/10 relative top-6" />

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-6 relative z-10">
          {steps.map((item, i) => (
            <FadeIn key={i} delay={i * 0.1} className="flex flex-col items-center text-center group">
              <div className="w-12 h-12 bg-off-white border border-dark/20 rounded-full flex items-center justify-center text-primary font-black text-sm mb-6 group-hover:bg-primary group-hover:text-white transition-colors shadow-sm">
                {item.step}
              </div>
              <h4 className="text-lg font-bold text-dark mb-2 tracking-tight">{item.title}</h4>
              <p className="text-grey text-sm font-medium">{item.desc}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutApproach;
