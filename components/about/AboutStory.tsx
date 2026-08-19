"use client";

import React from 'react';
import { Check } from 'lucide-react';
import FadeIn from '../shared/FadeIn';

import Image from 'next/image';

const AboutStory = () => {
  return (
    <section id="story" className="py-10 md:py-20 border-b border-dark/10 bg-white">
      <div className="max-w-[1600px] mx-auto flex flex-col lg:flex-row">

        {/* Left Sidebar (Sticky Title) */}
        <div className="w-full lg:w-1/3 p-6 md:p-12 lg:p-20 border-b lg:border-b-0 lg:border-r border-dark/10">
          <div className="lg:sticky lg:top-40">
            <FadeIn>
              <h2 className="text-4xl md:text-6xl font-black text-primary tracking-tighter leading-[1.1] mb-6">Who <br className='hidden lg:block' /> We Are.</h2>
              <p className="text-grey font-medium leading-relaxed">
                DS Living Spaces is a Bengaluru-based real estate marketing and advisory firm specializing in premium plotted developments and land investments.
              </p>
            </FadeIn>
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-2/3 p-6 md:p-12 lg:p-20">
          <FadeIn>
            <p className="text-2xl md:text-4xl text-dark font-light leading-snug tracking-tight mb-16">
              We are focused on helping individuals and families make smart, secure, and future-ready real estate decisions through market knowledge and verified projects.
            </p>
          </FadeIn>

          <div className="relative w-full h-[250px] md:h-[600px] mb-16 overflow-hidden rounded-2xl shadow-2xl">
            <Image
              src="/about-header.png"
              alt="DS Living Space Villas"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 1000px"
            />
          </div>

          <FadeIn>
            <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-grey mb-8 border-b border-dark/10 pb-4">Our Story</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <p className="text-dark font-medium leading-relaxed">
                DS Living Spaces was founded with a simple goal — to make real estate investment easier, safer, and more transparent. In a market where buyers often face confusion, unclear documentation, and misleading information, we aim to bring clarity and trust into every transaction.
              </p>
              <div>
                <p className="text-dark font-medium leading-relaxed mb-6">
                  We carefully select projects that meet strict criteria:
                </p>
                <ul className="space-y-3">
                  {["Legal approvals & verifications", "High growth potential corridors", "Infrastructure readiness", "Long-term appreciation value"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-grey text-sm font-bold">
                      <Check size={16} className="text-primary" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default AboutStory;
