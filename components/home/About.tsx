"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const easeOutQuint = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOutQuint } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const About = () => {
  return (
    <section id="about" className="py-16 pb-0 md:pb-10 md:py-20 px-6 max-w-7xl mx-auto overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="order-2 lg:order-1"
        >
          <h2 className="text-4xl md:text-[56px] font-bold tracking-tighter text-dark mb-4 leading-tight">
            Your trusted partner <br /> in real estate.
          </h2>
          <p className="text-lg text-grey leading-relaxed font-medium mb-6">
            DS Living Spaces is a professional real estate marketing and advisory firm focused on premium plotted developments and villa communities. We help buyers discover high-potential opportunities with complete transparency.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            {[
              { title: "Verified Projects", desc: "100% legally cleared." },
              { title: "Strategic Locations", desc: "High-growth corridors." },
              { title: "Expert Guidance", desc: "Data-driven advice." },
              { title: "End-to-End Assist", desc: "Visit to registration." }
            ].map((feature, i) => (
              <motion.div variants={fadeUp} key={i} className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 size={20} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-dark">{feature.title}</h4>
                  <p className="text-grey text-sm leading-snug mt-1">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Overlapping Image Collage */}
        <div className="order-1 lg:order-2 relative h-[500px] md:h-[600px] w-full">
          <motion.img
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800"
            className="absolute top-0 right-0 w-[70%] h-[70%] object-cover rounded-3xl shadow-2xl" alt="Modern Home Exterior"
          />
          <motion.img
            initial={{ opacity: 0, x: -50, y: 50 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=600"
            className="absolute bottom-0 left-0 w-[60%] h-[60%] object-cover rounded-3xl shadow-2xl border-4 border-white" alt="Living Space"
          />
          {/* Experience Badge */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, type: 'spring' }}
            className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 bg-primary text-white p-6 rounded-full w-32 h-32 flex flex-col items-center justify-center shadow-2xl"
          >
            <span className="text-3xl font-bold">100+</span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-center">Happy Families</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
