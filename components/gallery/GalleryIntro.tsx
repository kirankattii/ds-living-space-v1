"use client";

import React from 'react';
import FadeIn from '../shared/FadeIn';

const GalleryIntro = () => {
  return (
    <section className="py-16 md:py-26 px-6 md:px-12 bg-white border-b border-dark/10">
      <div className="max-w-[1400px] mx-auto text-center">
        <FadeIn>
          <h2 className="text-3xl md:text-5xl lg:text-[64px] font-medium leading-[1.2] text-dark tracking-tight mb-12">
            Our projects are more than just plotted developments - they are <span className="font-black text-primary">complete lifestyle experiences.</span>
          </h2>
          <p className="text-grey text-xl md:text-2xl font-light max-w-4xl mx-auto leading-relaxed">
            Every feature and amenity is carefully designed to offer comfort, relaxation, and a sense of community. From leisure spaces to wellness zones, every detail reflects modern living across all our signature developments.
          </p>
        </FadeIn>
      </div>
    </section>
  );
};

export default GalleryIntro;
