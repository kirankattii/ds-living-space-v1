"use client";

import React from 'react';
import { Phone, Navigation, MapPin } from 'lucide-react';
import FadeIn from '../shared/FadeIn';

const ContactMap = () => {
  return (
    <section className="bg-dark border-b border-white/10">
      <div className="grid grid-cols-1 lg:grid-cols-12 h-auto lg:h-[700px]">
        
        {/* Left: Data Columns */}
        <div className="lg:col-span-5 p-8 md:p-12 lg:p-20 flex flex-col justify-center">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-12 text-white">Find Us.</h2>
            
            <div className="space-y-10">
              {/* Office */}
              <div className="border-l-2 border-white/20 pl-6 group hover:border-primary transition-colors">
                <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/50 mb-2">Our Office</h3>
                <p className="text-xl font-bold text-white mb-1">DS Living Spaces</p>
                <p className="text-white/70 text-sm font-medium mb-4">Bengaluru, Karnataka</p>
                <div className="flex flex-col gap-2 text-sm font-bold">
                  <a href="tel:9019800009" className="text-white flex items-center gap-2 hover:text-grey transition-colors"><Phone size={14}/> 90198 00009</a>
                  <a href="https://www.dslivingspace.com" target="_blank" rel="noopener noreferrer" className="text-white flex items-center gap-2 hover:text-grey transition-colors"><Navigation size={14}/> www.dslivingspace.com</a>
                </div>
              </div>

              {/* Project */}
              <div className="border-l-2 border-primary pl-6">
                <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/50 mb-2">Project Location – Bird Song</h3>
                <p className="text-white/90 text-sm font-medium flex items-start gap-2 max-w-sm">
                  <MapPin size={16} className="shrink-0 mt-1" />
                  <span>Inside The Empyrean, Anchemuskur Village, Lakkur Hobli, Chikkathirupathi, Bengaluru</span>
                </p>
              </div>

              {/* Highlights */}
              <div className="border-l-2 border-white/20 pl-6 group hover:border-white transition-colors">
                <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/50 mb-4">Nearby Highlights</h3>
                <div className="flex flex-wrap gap-2">
                  {["Chikka Tirupathi", "The Empyrean Villas", "STRR Road Access"].map((tag, i) => (
                    <span key={i} className="bg-white/10 text-white px-4 py-2 text-[10px] font-bold uppercase tracking-widest border border-white/5 rounded-full hover:bg-white hover:text-dark transition-colors cursor-default">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Right: Massive Live Map */}
        <div className="lg:col-span-7 relative h-[400px] lg:h-full bg-black">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124430.73024823106!2d77.72892015096503!3d12.943015403212852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae13d463e80f21%3A0xf6f69c73bf54d241!2sChikka%20Tirupati%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1714000000000!5m2!1sen!2sin" 
            className="w-full h-full object-cover filter grayscale contrast-125 opacity-70" 
            style={{ border: 0 }} 
            allowFullScreen={true}
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Project Location Map"
          ></iframe>
          <div className="absolute inset-0 pointer-events-none border-[20px] border-dark/20" />
        </div>
      </div>
    </section>
  );
};

export default ContactMap;
