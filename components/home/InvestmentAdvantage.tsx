"use client";

import React, { useState, useRef } from 'react';
import { Briefcase, Navigation, TrendingUp } from 'lucide-react';
import FadeIn from './FadeIn';
import { motion } from 'framer-motion';

const InvestmentAdvantage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const advantages = [
    {
      icon: Briefcase,
      title: "Close to ITPL & Whitefield",
      desc: "Seamless commute to major tech parks and employment hubs.",
      delay: 0.1
    },
    {
      icon: Navigation,
      title: "Easy access to STRR Road",
      desc: "Direct connectivity via the newly developing Satellite Town Ring Road.",
      delay: 0.2
    },
    {
      icon: TrendingUp,
      title: "Rapidly developing Sarjapur belt",
      desc: "Surrounded by high-value upcoming infrastructure and commercial zones.",
      delay: 0.3
    }
  ];

  const handleScroll = () => {
    if (scrollRef.current && scrollRef.current.children[0]) {
      const scrollPosition = scrollRef.current.scrollLeft;
      const firstCard = scrollRef.current.children[0] as HTMLElement;
      const cardWidth = firstCard.offsetWidth + 32; // width + gap-8 (32px)
      const newIndex = Math.round(scrollPosition / cardWidth);
      if (newIndex !== activeIndex) {
        setActiveIndex(newIndex);
      }
    }
  };

  const scrollTo = (index: number) => {
    if (scrollRef.current && scrollRef.current.children[0]) {
      const firstCard = scrollRef.current.children[0] as HTMLElement;
      const cardWidth = firstCard.offsetWidth + 32;
      scrollRef.current.scrollTo({
        left: index * cardWidth,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="investment" className="py-16 pb-14 md:py-16 px-6 md:px-12 bg-white border-b border-dark/10">
      <div className="max-w-[1600px] mx-auto">
        <div className="text-center mb-10 max-w-4xl mx-auto">
          <FadeIn>
            <span className="text-green-600 text-[10px] font-bold uppercase tracking-[0.3em] mb-4 block">Invest Where the Future is Growing</span>
            <h2 className="text-4xl md:text-[64px] font-black tracking-tighter text-dark leading-[1.05] mb-6">
              The Investment Advantage.
            </h2>
            <p className="text-grey font-medium text-xl leading-relaxed">
              Strategically located in Bengaluru’s high-growth corridor, Bird Song offers excellent connectivity to IT hubs, schools, and future infrastructure developments.
            </p>
          </FadeIn>
        </div>

        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex items-stretch md:grid md:grid-cols-3 gap-8 overflow-y-hidden pt-5 overflow-x-auto md:overflow-x-visible snap-x snap-mandatory no-scrollbar -mx-6 px-6 md:mx-0 md:px-0 pb-8 md:pb-0"
        >
          {advantages.map((item, i) => (
            <FadeIn key={i} delay={item.delay} className="flex-none  w-[85vw] md:w-full snap-center bg-off-white border border-dark/10 p-8 md:p-10 rounded-2xl text-center md:hover:shadow-2xl md:hover:-translate-y-2 transition-all duration-500 flex flex-col">
              <div className="w-20 h-20 bg-white rounded-full shadow-md flex items-center justify-center text-primary mx-auto mb-8 shrink-0">
                <item.icon size={32} />
              </div>
              <h3 className="text-2xl font-bold text-dark mb-4">{item.title}</h3>
              <p className="text-grey font-medium">{item.desc}</p>
            </FadeIn>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex md:hidden justify-center items-center gap-2 ">
          {advantages.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              className="relative h-1.5 rounded-full transition-all duration-300 bg-primary/20"
              style={{ width: activeIndex === i ? '20px' : '6px' }}
            >
              {activeIndex === i && (
                <motion.div
                  layoutId="advantageDot"
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

export default InvestmentAdvantage;
