"use client";

import React from 'react';
import {
  Phone,
  MessageCircle,
  Calendar,
  ArrowRight,
  ShieldCheck,
  MapPin,
  Clock
} from 'lucide-react';
import FadeIn from '../shared/FadeIn';
import ParallaxBackground from '../shared/ParallaxBackground';
import { useModal } from '@/context/ModalContext';

const ProjectCTA = () => {
  const { openBookVisit } = useModal();
  return (
    <section className="relative min-h-[80vh] flex flex-col lg:flex-row overflow-hidden">
      <ParallaxBackground
        src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=2000"
        overlay="bg-primary/90"
      />

      <div className="max-w-[1600px] mx-auto flex flex-col lg:flex-row w-full relative z-10">
        <div className="w-full lg:w-1/2 p-12 md:p-24 lg:p-32 flex flex-col justify-center">
          <FadeIn>
            <span className="text-green-400 text-[10px] font-bold uppercase tracking-[0.3em] mb-6 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" /> Phase 2 Selling Fast
            </span>
            <h2 className="text-5xl md:text-[80px] lg:text-[100px] font-black tracking-tighter leading-[0.85] mb-10 text-white">
              DON&apos;T MISS <br />OUT.
            </h2>
            <p className="text-white/70 text-xl font-light mb-12 max-w-md leading-relaxed">
              Secure your premium villa plot today. Get the complete brochure, pricing sheet, and schedule a site visit.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="tel:9019800009" className="inline-flex items-center justify-center gap-4 bg-white text-primary px-8 py-5 text-sm font-bold uppercase tracking-widest hover:bg-grey hover:text-white transition-all rounded-full shadow-2xl">
                <Phone size={18} /> Call Now
              </a>
            </div>
          </FadeIn>
        </div>

        {/* Action Cards Section */}
        <div className="w-full lg:w-1/2 border-t lg:border-t-0 lg:border-l border-white/10 p-12 px-6 md:p-24 lg:p-32 flex flex-col justify-center bg-black/40 backdrop-blur-3xl relative">
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-400/10 rounded-full blur-[100px] pointer-events-none" />

          <FadeIn delay={0.2} className="relative z-10 space-y-8">
            <h3 className="text-2xl font-bold text-white mb-8 tracking-tight">Ready to Take the Next Step?</h3>

            <div className="grid gap-6">
              {/* Book Visit Card */}
              <button
                onClick={openBookVisit}
                className="group flex items-center gap-6 bg-white/5 border border-white/10 p-6 rounded-3xl hover:bg-white/10 hover:border-white/30 transition-all duration-500 w-full text-left"
              >
                <div className="w-16 h-16 rounded-2xl bg-white text-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-xl">
                  <Calendar size={28} />
                </div>
                <div className="flex-grow">
                  <h4 className="text-xl font-bold text-white mb-1">Book a Site Visit</h4>
                  <p className="text-white/50 text-sm">Experience the location firsthand</p>
                </div>
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-primary transition-all duration-500">
                  <ArrowRight size={20} />
                </div>
              </button>

              {/* WhatsApp Card */}
              <a
                href="https://wa.me/919019800009?text=I'm interested in DS Living Spaces"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-6 bg-green-400/5 border border-green-400/20 p-6 rounded-3xl hover:bg-green-400/10 hover:border-green-400/40 transition-all duration-500"
              >
                <div className="w-16 h-16 rounded-2xl bg-green-400 text-[#11123A] flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-xl shadow-green-400/20">
                  <MessageCircle size={28} />
                </div>
                <div className="flex-grow">
                  <h4 className="text-xl font-bold text-white mb-1"> WhatsApp Chat </h4>
                  <p className="text-white/50 text-sm">Instant support and details</p>
                </div>
                <div className="w-10 h-10 rounded-full border border-green-400/20 flex items-center justify-center group-hover:bg-green-400 group-hover:text-[#11123A] transition-all duration-500">
                  <ArrowRight size={20} />
                </div>
              </a>
            </div>

            {/* Quick Benefits */}
            <div className="pt-8 border-t border-white/10 grid grid-cols-2 gap-6">
              <div className="flex items-center gap-3">
                <ShieldCheck size={20} className="text-green-400" />
                <span className="text-white/60 text-xs font-bold uppercase tracking-widest">RERA Verified</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock size={20} className="text-green-400" />
                <span className="text-white/60 text-xs font-bold uppercase tracking-widest">Quick Response</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default ProjectCTA;
