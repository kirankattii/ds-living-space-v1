"use client";

import React from 'react';
import { CheckCircle2, Phone, MapPin } from 'lucide-react';
import Image from 'next/image';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Footer = () => {
  const pathname = usePathname();

  return (
    <footer className="bg-off-white border-t border-dark/10 pt-16 md:pt-24 pb-12 text-dark">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 border-b border-dark/10 pb-10 mb-8">
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-grey mb-8">About Us</h4>
            <div className="flex items-center">
              <Image
                src="/dslogo.png"
                alt="DS Living Spaces"
                width={180}
                height={60}
                className="h-10 w-auto"
              />
            </div>
            <p className="text-grey text-xs font-medium mt-4 leading-relaxed max-w-xs">Premium real estate marketing and advisory firm focused on high-growth investments.</p>
          </div>
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-grey mb-6">Navigation</h4>
            <ul className="space-y-3 text-sm font-bold">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/projects/bird-song-yash-value-spaces" className="hover:text-primary transition-colors">Bird Song</Link></li>
              <li><Link href="/projects/the-meadows" className="hover:text-primary transition-colors">The Meadows</Link></li>
              <li><Link href="/projects/arka-grand" className="hover:text-primary transition-colors">Arka Grand</Link></li>
              <li><Link href="/amenities-gallery" className="hover:text-primary transition-colors">Gallery & Amenities</Link></li>
              <li><Link href="/blog" className="hover:text-primary transition-colors">Journal</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-grey mb-6">Contact</h4>
            <ul className="space-y-4 text-sm font-bold">
              <li className="flex items-center gap-3"><Phone size={16} className="text-primary" /> +91 90198 00009</li>
              <li className="flex items-center gap-3"><MapPin size={16} className="text-primary" /> Bengaluru, Karnataka</li>
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-grey mb-6">Trust & Legal</h4>
            <ul className="space-y-4 text-sm font-bold">
              <li className="flex items-center gap-3"><CheckCircle2 size={16} className="text-green-600" /> RERA Approved</li>
              <li><Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms-and-conditions" className="hover:text-primary transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold uppercase tracking-[0.2em] text-grey">
          <p>© {new Date().getFullYear()} DS LIVING SPACES. ALL RIGHTS RESERVED.</p>
          <p>YOUR TRUSTED REAL ESTATE PARTNER.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
