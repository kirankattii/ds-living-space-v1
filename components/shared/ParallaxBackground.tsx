"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

interface ParallaxBackgroundProps {
  src: string;
  overlay?: string;
}

const ParallaxBackground: React.FC<ParallaxBackgroundProps> = ({ 
  src, 
  overlay = "bg-gradient-to-b from-primary/90 via-foreground/60 to-foreground" 
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const springScroll = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const y = useTransform(springScroll, [0, 1], ["-10%", "10%"]);

  return (
    <div ref={ref} className="absolute inset-0 z-0 overflow-hidden bg-foreground">
      <motion.img 
        style={{ y }} 
        src={src} 
        className="absolute w-full h-[120%] -top-[10%] object-cover opacity-60 pointer-events-none" 
        alt="Background" 
      />
      <div className={`absolute inset-0 ${overlay} pointer-events-none`} />
    </div>
  );
};

export default ParallaxBackground;
