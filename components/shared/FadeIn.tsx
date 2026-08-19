"use client";

import React from 'react';
import { motion } from 'framer-motion';

const easeOutQuint = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOutQuint } }
};

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  id?: string;
}

const FadeIn: React.FC<FadeInProps> = ({ children, delay = 0, className = "", id }) => (
  <motion.div
    id={id}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-50px" }}
    variants={{
      visible: { ...fadeUp.visible, transition: { ...fadeUp.visible.transition, delay } },
      hidden: fadeUp.hidden
    }}
    className={className}
  >
    {children}
  </motion.div>
);

export default FadeIn;
