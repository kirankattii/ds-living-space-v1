"use client";

import React from 'react';
import { ArrowRight, MapPin } from 'lucide-react';
import FadeIn from '../shared/FadeIn';
import ParallaxBackground from '../shared/ParallaxBackground';
import Image from 'next/image';
import Link from 'next/link';

const AboutProjectSpotlight = () => {
  const projects = [
    {
      name: "BIRD SONG",
      location: "Chikkathirupathi, Bengaluru",
      desc: "Premium villa plots inside The Empyrean. A ready-to-construct ecosystem merging nature with modern infrastructure.",
      link: "/projects/bird-song-yash-value-spaces",
      img: "/song-bird1.jpeg",
      cat: "Villa Plots"
    },
    {
      name: "THE MEADOWS",
      location: "Taliparamba, Kerala",
      desc: "A secure, modern, and well-connected gated community in the heart of Taliparamba. The perfect blend of peace and connectivity.",
      link: "/projects/the-meadows",
      img: "/meados/meados-gateway.jpeg",
      cat: "Residential Plots"
    }
  ];

  return (
    <section className="relative py-24 px-6 md:px-12 bg-dark overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="relative z-10 w-full max-w-[1600px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <FadeIn>
            <span className="text-green-400 text-[10px] font-bold uppercase tracking-[0.3em] mb-4 block">Our Portfolio</span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white">
              Signature Developments.
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-white/60 text-lg font-medium max-w-md md:text-right">
              Discover our carefully curated selection of premium plotted developments designed for long-term value.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {projects.map((project, idx) => (
            <FadeIn key={project.name} delay={idx * 0.1} className="group cursor-pointer">
              <Link href={project.link}>
                <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl mb-6">
                  <Image 
                    src={project.img} 
                    alt={project.name} 
                    fill 
                    className="object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent" />
                  <div className="absolute bottom-8 left-8 right-8">
                    <span className="bg-green-500 text-white px-4 py-1.5 rounded-2xl text-[10px] font-bold uppercase tracking-widest mb-4 inline-block shadow-lg">
                      {project.cat}
                    </span>
                    <h3 className="text-3xl md:text-4xl font-black text-white mb-2 tracking-tighter">
                      {project.name}
                    </h3>
                    <div className="flex items-center gap-2 text-white/70 text-sm font-medium">
                      <MapPin size={14} className="text-green-400" />
                      {project.location}
                    </div>
                  </div>
                  <div className="absolute top-8 right-8 w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0">
                    <ArrowRight size={24} />
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>

        <div className="mt-16 text-center">
          <FadeIn delay={0.4}>
            <Link 
              href="/projects" 
              className="inline-flex items-center gap-3 text-white/50 hover:text-green-400 transition-colors font-bold text-sm tracking-widest uppercase group"
            >
              View Full Portfolio <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default AboutProjectSpotlight;
