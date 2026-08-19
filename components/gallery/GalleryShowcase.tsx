"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Camera, MapPin, Building, Trees } from 'lucide-react';
import FadeIn from '../shared/FadeIn';

const projectGalleries = {
  "bird-song": {
    name: "Bird Song",
    location: "Sarjapur, Bangalore",
    description: "Premium villa plots with world-class amenities in Bangalore's fastest growing corridor.",
    images: [
      { id: 1, src: "/gallery1.png", cat: "Amenities", span: "md:col-span-2 md:row-span-2", title: "Premium Clubhouse" },
      { id: 2, src: "/gallery2.png", cat: "Project Development", span: "col-span-1", title: "Site Progress" },
      { id: 3, src: "/gallery3.png", cat: "Amenities", span: "col-span-1", title: "Luxury Pool" },
      { id: 4, src: "/gallery4.png", cat: "Open Spaces", span: "md:col-span-2", title: "Lush Greenery" },
      { id: 5, src: "/gallery5.png", cat: "Amenities", span: "col-span-1", title: "Modern Gym" },
      { id: 6, src: "/gallery6.png", cat: "Master Plan", span: "col-span-1", title: "Bird's Eye View" },
      { id: 7, src: "/gallery7.png", cat: "Project Development", span: "col-span-1", title: "Villa Architecture" },
      { id: 8, src: "/villa1.png", cat: "Project Development", span: "col-span-1", title: "Modern Design" },
      { id: 9, src: "/gallery9.png", cat: "Open Spaces", span: "md:col-span-2", title: "Community Park" },
      { id: 10, src: "/gallery10.jpeg", cat: "Amenities", span: "col-span-1", title: "Kids Play Area" },
    ]
  },
  "the-meadows": {
    name: "The Meadows",
    location: "Taliparamba, Kerala",
    description: "A secure, modern, and well-connected gated community in the heart of Taliparamba.",
    images: [
      { id: 101, src: "/meados/meados-gateway.jpeg", cat: "Architecture", span: "md:col-span-2 md:row-span-2", title: "Grand Gateway" },
      { id: 102, src: "/meados/meados-roads.jpeg", cat: "Infrastructure", span: "col-span-1", title: "Internal Roads" },
      { id: 103, src: "/meados/meados-premium-plot.jpeg", cat: "Development", span: "col-span-1", title: "Premium Plot" },
      { id: 104, src: "/meados/meados-layout.jpeg", cat: "Master Plan", span: "md:col-span-2", title: "Project Layout" },
      { id: 105, src: "/meados/meados-villa.jpeg", cat: "Concepts", span: "col-span-1", title: "Villa Concept" },
      { id: 106, src: "/meados/meados-guesthouse.jpeg", cat: "Amenities", span: "col-span-1", title: "Guest House" },
      { id: 107, src: "/meados/meados-sites.jpeg", cat: "Development", span: "col-span-1", title: "Site Overview" },
      { id: 108, src: "/meados/meados-home-stay.jpeg", cat: "Lifestyle", span: "col-span-1", title: "Home Stay Concept" },
      { id: 109, src: "/meados/meados-underconstruction.jpeg", cat: "Progress", span: "md:col-span-2", title: "Under Construction" },
      { id: 110, src: "/meados/meados-houses.jpeg", cat: "Architecture", span: "col-span-1", title: "Modern Houses" },
    ]
  }
};

const GalleryShowcase = () => {
  const [activeProject, setActiveProject] = useState<"bird-song" | "the-meadows">("bird-song");
  const currentGallery = projectGalleries[activeProject];

  return (
    <section id="gallery" className="py-16 md:py-24 px-6 md:px-12 bg-dark text-white">
      <div className="max-w-[1600px] mx-auto text-center mb-16">
        <FadeIn>
          <h2 className="text-4xl md:text-[64px] font-black tracking-tighter mb-6">Gallery Showcase.</h2>
          <p className="text-white/60 font-medium text-lg max-w-2xl mx-auto mb-12">
            Explore the unique features, progress, and lifestyle of our premium developments. Select a project to view its gallery.
          </p>

          {/* Project Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {(Object.keys(projectGalleries) as Array<keyof typeof projectGalleries>).map((key) => (
              <button
                key={key}
                onClick={() => setActiveProject(key)}
                className={`px-8 py-4 rounded-2xl font-bold text-sm tracking-widest uppercase transition-all duration-300 flex items-center gap-3 ${
                  activeProject === key 
                  ? 'bg-primary text-white shadow-[0_0_30px_rgba(34,197,94,0.3)] scale-105' 
                  : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white'
                }`}
              >
                {key === "bird-song" ? <Trees size={18} /> : <Building size={18} />}
                {projectGalleries[key].name}
              </button>
            ))}
          </div>

          <div className="mb-12 inline-block bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-[32px] text-left max-w-3xl">
             <div className="flex items-center gap-3 text-primary mb-2">
                <MapPin size={18} />
                <span className="text-xs font-black uppercase tracking-widest">{currentGallery.location}</span>
             </div>
             <h3 className="text-3xl font-black mb-3">{currentGallery.name}</h3>
             <p className="text-white/60 font-medium">{currentGallery.description}</p>
          </div>
        </FadeIn>
      </div>

      {/* Masonry Grid Setup */}
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[300px]">
        {currentGallery.images.map((img, idx) => (
          <FadeIn key={img.id} delay={idx * 0.05} className={`relative overflow-hidden rounded-[24px] group cursor-pointer ${img.span || ''}`}>
            <Image
              src={img.src}
              alt={img.title}
              fill
              className="object-cover transition-transform duration-[1.5s] group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-primary/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center p-6 text-center">
              <span className="text-white/40 text-[10px] font-black uppercase tracking-[0.2em] mb-2">{img.cat}</span>
              <h4 className="text-2xl font-black mb-6 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">{img.title}</h4>
              <a href="tel:9019800009" className="bg-white text-primary px-8 py-4 rounded-full font-bold text-sm tracking-widest uppercase shadow-2xl hover:bg-green-400 hover:text-white transition-colors transform translate-y-4 group-hover:translate-y-0 duration-500 delay-200">
                Enquire Now
              </a>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};

export default GalleryShowcase;
