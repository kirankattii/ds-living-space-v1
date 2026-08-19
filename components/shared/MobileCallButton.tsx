"use client";

import React from 'react';
import { Phone } from 'lucide-react';

const MobileCallButton = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t border-dark/10 p-4 lg:hidden z-50 flex gap-2">
      <a href="tel:9019800009" className="flex-1 bg-primary text-white py-4 text-xs font-bold uppercase tracking-widest text-center flex items-center justify-center gap-2 rounded-xl shadow-xl">
        <Phone size={14} /> Call Now
      </a>
    </div>
  );
};

export default MobileCallButton;
