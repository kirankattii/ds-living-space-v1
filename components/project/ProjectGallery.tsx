"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import ImageModal from '../shared/ImageModal';

const ProjectGallery = () => {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  const images = [
    { src: '/villa1.png', alt: 'Villa Exterior' },
    { src: '/villa2.png', alt: 'Villa Entrance' },
    { src: '/villa3.png', alt: 'Garden Area' },
    { src: '/villa4.png', alt: 'Interior View' },
    { src: '/villa5.png', alt: 'Plot Layout' },
    { src: '/villa6.png', alt: 'Amenities' },
    { src: '/villa7.png', alt: 'More Photos' },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const } }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] as const } }
  };

  return (
    <section id="gallery" className="py-20 md:py-26 px-6 max-w-[1400px] mx-auto overflow-hidden">
      <div className="text-center mb-16">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-4xl md:text-[56px] font-black tracking-tighter text-[#171717] mb-6"
        >
          Visual Walkthrough.
        </motion.h2>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-[#808080] font-medium text-lg max-w-2xl mx-auto"
        >
          Explore the layout, amenities, and site development of our premium villa plots.
        </motion.p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
        {images.map((image, index) => {
          const isLarge = index === 0;
          const isWide = index === 1 || index === 6;

          return (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={scaleIn}
              onClick={() => setSelectedImage(image)}
              className={`rounded-3xl overflow-hidden bg-gray-100 group relative cursor-pointer 
                ${isLarge ? 'col-span-2 row-span-2' : ''} 
                ${isWide ? 'col-span-2' : ''}
              `}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-1000"
              />
              <div className={`absolute inset-0 transition-colors duration-500 ${index === 6 ? 'bg-black/20 group-hover:bg-black/40' : 'bg-black/5 group-hover:bg-black/0'}`} />
            </motion.div>
          );
        })}
      </div>

      <ImageModal
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        src={selectedImage?.src || ''}
        alt={selectedImage?.alt || ''}
      />
    </section>
  );
};

export default ProjectGallery;
