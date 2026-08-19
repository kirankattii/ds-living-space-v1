"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import FadeIn from './FadeIn';

const Intro = () => {
  return (
    <section id="intro" className="py-16 md:py-20 px-6 md:px-12 bg-white border-b border-dark/10">
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <FadeIn>
          <h2 className="text-3xl md:text-5xl font-medium leading-[1.2] text-dark tracking-tight mb-6">
            Welcome to <span className="font-black text-primary">DS Living Spaces</span> - your trusted partner in discovering premium real estate opportunities in Bengaluru.
          </h2>
          <p className="text-grey text-lg font-medium leading-relaxed mb-6">
            We specialize in plotted developments, villa communities, and high-growth investment properties that are carefully selected for long-term value and lifestyle benefits.
          </p>
          <Link
            href="/projects"
            className="inline-flex items-center gap-3 bg-[#11123A] text-white px-8 py-4 rounded-2xl font-bold hover:bg-primary transition-all group shadow-xl"
          >
            Explore Our Projects
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </FadeIn>
        <FadeIn delay={0.2} className="relative hidden md:block h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl group">
          <Image
            src="/about-hero.jpg"
            alt="Luxury Real Estate"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-[1.5s]"
          />
          <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
        </FadeIn>
      </div>
    </section>
  );
};

export default Intro;
