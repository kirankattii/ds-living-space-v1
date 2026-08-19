"use client";

import React from 'react';
import FadeIn from '../shared/FadeIn';

const AboutCommitment = () => {
  return (
    <section className="bg-primary text-white">
      <div className="max-w-[1600px] mx-auto flex flex-col lg:flex-row">

        {/* Commitment Block */}
        <div className="w-full lg:w-1/2 p-12 md:p-16 px-6 lg:p-32 lg:py-20 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/10">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-8 leading-tight">Our Commitment.</h2>
            <p className="text-white/70 font-light text-xl leading-relaxed mb-12">
              At DS Living Spaces, we are committed to delivering quality, trust, and long-term value. We aim to build lasting relationships.
            </p>
            <ul className="space-y-6 border-t border-white/10 pt-8">
              {["Clear, transparent communication.", "Reliable, round-the-clock support.", "Honest, data-driven guidance."].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-lg font-medium">
                  <div className="w-2 h-2 rounded-full bg-white/30" /> {item}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>

        {/* Testimonial Block */}
        <div className="w-full lg:w-1/2 p-6 md:p-24 lg:p-32 flex flex-col justify-center bg-black/20">
          <FadeIn delay={0.2}>
            <div className="text-6xl font-serif text-white/20 mb-6">&quot;</div>
            <h3 className="text-3xl md:text-4xl font-serif italic leading-relaxed text-white mb-12">
              Professional team and a remarkably smooth process. Highly recommended for premium property investment in Bengaluru.
            </h3>
            <div className="flex items-center gap-4 border-t border-white/10 pt-8">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white font-bold">C</div>
              <div>
                <p className="font-bold tracking-tight">Verified Client</p>
                <p className="text-xs text-white/50 uppercase tracking-widest mt-1">Property Investor</p>
              </div>
            </div>
          </FadeIn>
        </div>

      </div>
    </section>
  );
};

export default AboutCommitment;
