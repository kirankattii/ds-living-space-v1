"use client";

import React from 'react';
import { CheckCircle2, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-off-white border-t border-dark/10 pt-24 pb-12 text-dark">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-dark/10 pb-16 mb-12">
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-grey mb-8">About Us</h4>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-primary text-white flex items-center justify-center text-[10px] font-black shadow-md rounded-xl">DS</div>
              <span className="font-black tracking-tight text-lg">DS LIVING SPACES</span>
            </div>
            <p className="text-grey text-xs font-medium mt-6 leading-relaxed max-w-xs">Premium real estate marketing and advisory firm focused on high-growth investments.</p>
          </div>
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-grey mb-8">Trust Line</h4>
            <ul className="space-y-4 text-sm font-bold">
              <li className="flex items-center gap-3"><CheckCircle2 size={16} className="text-green-600"/> RERA Approved Project</li>
              <li className="flex items-center gap-3"><CheckCircle2 size={16} className="text-green-600"/> Bank Loan Available</li>
              <li className="flex items-center gap-3"><CheckCircle2 size={16} className="text-green-600"/> End-to-End Support</li>
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-grey mb-8">Contact</h4>
            <ul className="space-y-4 text-sm font-bold">
              <li className="flex items-center gap-3"><Phone size={16} className="text-primary"/> +91 90198 00009</li>
              <li className="flex items-center gap-3"><MapPin size={16} className="text-primary"/> Bengaluru, Karnataka</li>
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-grey mb-8">Legal</h4>
            <ul className="space-y-4 text-sm font-bold text-grey">
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold uppercase tracking-[0.2em] text-grey">
          <p>© {new Date().getFullYear()} DS LIVING SPACES. ALL RIGHTS RESERVED.</p>
          <p>YOUR TRUSTED REAL ESTATE PARTNER.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
