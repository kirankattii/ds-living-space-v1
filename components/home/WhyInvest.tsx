"use client";

import React, { useState, useRef, useEffect } from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import FadeIn from './FadeIn';
import { motion } from 'framer-motion';

const WhyInvest = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const items = [
    { img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800", title: "Higher Appreciation", desc: "Compared to apartments, land values rise faster." },
    { img: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=800", title: "Full Ownership", desc: "Absolute ownership of the land beneath your feet." },
    { img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800", title: "Custom Construction", desc: "Build your dream home exactly the way you want." },
    { img: "/mentainance.png", title: "Lower Maintenance", desc: "Significantly lower recurring costs over time." }
  ];

  const handleScroll = () => {
    if (scrollRef.current && scrollRef.current.children[0]) {
      const scrollPosition = scrollRef.current.scrollLeft;
      const firstCard = scrollRef.current.children[0] as HTMLElement;
      const cardWidth = firstCard.offsetWidth + 24; // width + gap-6 (24px)
      const newIndex = Math.round(scrollPosition / cardWidth);
      if (newIndex !== activeIndex) {
        setActiveIndex(newIndex);
      }
    }
  };

  const scrollTo = (index: number) => {
    if (scrollRef.current && scrollRef.current.children[0]) {
      const firstCard = scrollRef.current.children[0] as HTMLElement;
      const cardWidth = firstCard.offsetWidth + 24;
      scrollRef.current.scrollTo({
        left: index * cardWidth,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="whyplots" className="py-16 md:py-16 bg-off-white">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-10 gap-8">
          <FadeIn className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 bg-red-500 rounded-full" />
              <span className="text-primary text-[10px] font-bold uppercase tracking-[0.3em]">Important Insight</span>
            </div>
            <h2 className="text-4xl md:text-[64px] font-black tracking-tighter text-dark leading-[1.05] mb-6">
              Why Invest in Plots?
            </h2>
            <p className="text-grey font-medium text-lg leading-relaxed">
              Investing in plotted developments offers unmatched flexibility and long-term appreciation. Unlike apartments, plots give you the freedom to build your dream home at your pace while benefiting from land value growth in prime locations.
            </p>
          </FadeIn>
        </div>

        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 overflow-y-hidden overflow-x-auto md:overflow-x-visible snap-x snap-mandatory no-scrollbar -mx-6 px-6 md:mx-0 md:px-0 pb-8 md:pb-0"
        >
          {items.map((item, i) => (
            <FadeIn key={i} delay={i * 0.1} className="flex-none w-[85vw] md:w-full snap-center relative h-[350px] md:h-[450px] rounded-[32px] overflow-hidden group shadow-lg">
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-[1.5s] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white mb-4 border border-white/30">
                  <CheckCircle2 size={16} />
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tight mb-2">{item.title}</h3>
                <p className="text-white/80 text-sm font-medium">{item.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex md:hidden justify-center items-center gap-2 ">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              className="relative h-2 rounded-full transition-all duration-300 bg-primary/20"
              style={{ width: activeIndex === i ? '24px' : '8px' }}
            >
              {activeIndex === i && (
                <motion.div
                  layoutId="activeDot"
                  className="absolute inset-0 bg-primary rounded-full"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyInvest;
