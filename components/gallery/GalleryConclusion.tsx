"use client";

import React from 'react';
import FadeIn from '../shared/FadeIn';

const GalleryConclusion = () => {
  return (
    <section className="py-16 md:py-26 px-6 md:px-12 bg-white border-b border-dark/10 text-center flex flex-col items-center justify-center">
      <FadeIn className="max-w-4xl mx-auto">
        <span className="text-primary text-[10px] font-bold uppercase tracking-[0.3em] mb-6 block">Why These Amenities Matter</span>
        <h2 className="text-3xl md:text-[56px] font-serif italic leading-tight text-dark mb-10">
          &quot;Amenities are not just features—they define your everyday experience.&quot;
        </h2>
        <p className="text-grey text-xl font-medium leading-relaxed mb-12">
          At Bird Song, every amenity is designed to improve quality of life, encourage community living, provide deep relaxation, and significantly enhance long-term property value.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          {["Improve quality of life", "Encourage community living", "Enhance property value"].map((tag, i) => (
            <span key={i} className="bg-off-white border border-dark/10 px-6 py-3 rounded-full text-sm font-bold text-dark shadow-sm">
              {tag}
            </span>
          ))}
        </div>
      </FadeIn>
    </section>
  );
};

export default GalleryConclusion;
