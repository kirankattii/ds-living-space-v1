"use client";

import React from 'react';
import { MapPin, Building, Trees, Compass } from 'lucide-react';

const AboutExpertise = () => {
  const expertiseItems = [
    { icon: <MapPin />, title: "Premium Villa Plots" },
    { icon: <Building />, title: "Gated Communities" },
    { icon: <Trees />, title: "Farmland Investments" },
    { icon: <Compass />, title: "Real Estate Advisory" }
  ];

  return (
    <section id="expertise" className="bg-off-white border-b border-dark/10">
      <div className="max-w-[1600px] mx-auto flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/4 p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-dark/10 flex flex-col justify-center">
          <h2 className="text-2xl md:text-3xl font-black text-primary tracking-tight mb-4">Our Expertise</h2>
          <p className="text-grey text-sm font-medium">Delivering properties that offer both premium lifestyle benefits and solid investment value.</p>
        </div>

        <div className="w-full lg:w-3/4 grid  grid-cols-2 lg:grid-cols-4">
          {expertiseItems.map((item, i) => (
            <div key={i} className={`p-8 md:p-12 border-b sm:border-b-0 border-dark/10 flex flex-col items-center justify-center text-center hover:bg-white transition-colors ${i !== 3 && 'sm:border-r'}`}>
              <div className="text-primary mb-6 opacity-50">{item.icon}</div>
              <h4 className="font-bold text-dark tracking-tight">{item.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutExpertise;
