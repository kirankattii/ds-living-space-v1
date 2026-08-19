"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, MapPin, Trees, Building } from 'lucide-react';
import FadeIn from '../shared/FadeIn';

const projects = [
  {
    id: "bird-song",
    title: "Bird Song",
    location: "Sarjapur, Bangalore",
    description: "Premium villa plots inside The Empyrean. A ready-to-construct ecosystem merging nature with modern infrastructure.",
    image: "/song-bird1.jpeg",
    features: ["24/7 Security", "Green Belts", "Clubhouse"],
    link: "/projects/bird-song-yash-value-spaces",
    status: "Ready to Register",
    type: "Villa Plots"
  },
  {
    id: "the-meadows",
    title: "The Meadows",
    location: "Taliparamba, Kerala",
    description: "A secure, modern, and well-connected gated community in the heart of Taliparamba. The perfect blend of peace and connectivity.",
    image: "/meados/meados-gateway.jpeg",
    features: ["Gated Community", "Strategic Location", "Ready to Build"],
    link: "/projects/the-meadows",
    status: "Ongoing",
    type: "Residential Plots"
  }
];

const ProjectsList = () => {
  return (
    <section className="py-20 px-6 md:px-12 bg-white">
      <div className="max-w-[1400px] mx-auto space-y-32">
        {projects.map((project, idx) => (
          <FadeIn key={project.id} delay={idx * 0.1}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              {/* Image Column */}
              <div className={`relative h-[400px] md:h-[600px] rounded-2xl overflow-hidden group shadow-2xl ${idx % 2 !== 0 ? 'lg:order-last' : ''}`}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-[2s] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute top-8 left-8">
                   <span className="bg-white/90 backdrop-blur-md text-primary px-6 py-3 rounded-2xl text-[10px] font-bold uppercase tracking-[0.2em] shadow-xl">
                      {project.status}
                   </span>
                </div>
              </div>

              {/* Content Column */}
              <div className={idx % 2 !== 0 ? 'lg:order-first' : ''}>
                <div className="flex items-center gap-3 text-primary mb-6">
                  <MapPin size={20} />
                  <span className="text-xs font-bold uppercase tracking-[0.3em]">{project.location}</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-dark mb-8 leading-[1.1]">
                  {project.title}
                </h2>
                <p className="text-grey text-xl font-medium leading-relaxed mb-10 max-w-xl">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-4 mb-12">
                  {project.features.map((feature, fIdx) => (
                    <span key={fIdx} className="bg-off-white border border-dark/5 px-5 py-3 rounded-2xl text-[11px] font-bold uppercase tracking-widest text-dark/70 flex items-center gap-3">
                      <div className="w-2 h-2 rounded-2xl bg-primary/30" />
                      {feature}
                    </span>
                  ))}
                </div>

                <Link
                  href={project.link}
                  className="inline-flex items-center gap-4 bg-primary text-white px-12 py-5 rounded-2xl font-bold text-sm tracking-widest uppercase hover:bg-dark transition-all group shadow-[0_20px_40px_rgba(17,18,58,0.15)]"
                >
                  Explore Details
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-2" />
                </Link>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};

export default ProjectsList;
