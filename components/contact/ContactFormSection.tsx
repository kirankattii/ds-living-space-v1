"use client";

import React from 'react';
import { ArrowRight, CheckCircle2, Car, HelpCircle, Check } from 'lucide-react';
import FadeIn from '../shared/FadeIn';

const ContactFormSection = () => {
  return (
    <section className="py-20 md:py-24 bg-white border-b border-dark/10">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        
        {/* Left: The Form Panel */}
        <div className="lg:col-span-7 bg-off-white border border-dark/10 p-8 md:p-12 lg:p-16 rounded-[32px]">
          <FadeIn>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-10 gap-4 border-b border-dark/10 pb-6">
              <div>
                <h2 className="text-3xl font-black text-dark tracking-tight mb-2">Get Complete Details.</h2>
                <p className="text-grey font-medium text-sm">Fill in your details and our team will contact you shortly.</p>
              </div>
              <div className="flex items-center gap-2 bg-primary/5 text-primary px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest w-max border border-primary/10">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" /> 10 Min Response
              </div>
            </div>

            <form className="space-y-8" onSubmit={e => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative">
                  <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-grey block mb-2">Full Name</label>
                  <input type="text" required placeholder="John Doe" className="w-full bg-white border border-dark/10 p-4 rounded-xl text-sm text-dark focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" />
                </div>
                <div className="relative">
                  <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-grey block mb-2">Phone Number *</label>
                  <input type="tel" required placeholder="+91" className="w-full bg-white border border-dark/10 p-4 rounded-xl text-sm text-dark focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" />
                </div>
              </div>

              <div className="relative">
                <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-grey block mb-2">Email Address (Optional)</label>
                <input type="email" placeholder="john@example.com" className="w-full bg-white border border-dark/10 p-4 rounded-xl text-sm text-dark focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative">
                  <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-grey block mb-2">Interested Plot Size</label>
                  <select defaultValue="" required className="w-full bg-white border border-dark/10 p-4 rounded-xl text-sm text-dark focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all cursor-pointer appearance-none">
                    <option value="" disabled className="text-grey">Select Size</option>
                    <option value="1200">1200 sq.ft</option>
                    <option value="1500">1500 sq.ft</option>
                    <option value="2400">2400 sq.ft</option>
                    <option value="3000">3000 sq.ft</option>
                  </select>
                </div>
                <div className="relative">
                  <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-grey block mb-2">Budget Range (Optional)</label>
                  <select defaultValue="" className="w-full bg-white border border-dark/10 p-4 rounded-xl text-sm text-dark focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all cursor-pointer appearance-none">
                    <option value="" disabled className="text-grey">Select Budget</option>
                    <option value="40-50">₹40L - ₹50L</option>
                    <option value="50-75">₹50L - ₹75L</option>
                    <option value="75-100">₹75L - ₹1Cr</option>
                    <option value="100+">₹1Cr+</option>
                  </select>
                </div>
              </div>

              <div className="relative">
                <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-grey block mb-2">Preferred Site Visit Date</label>
                <input type="date" className="w-full bg-white border border-dark/10 p-4 rounded-xl text-sm text-dark focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all cursor-pointer" />
              </div>

              <div className="relative">
                <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-grey block mb-2">Message (Optional)</label>
                <textarea rows={2} placeholder="Any specific requirements?" className="w-full bg-white border border-dark/10 p-4 rounded-xl text-sm text-dark focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none" />
              </div>

              <div className="pt-4">
                <button className="w-full bg-primary text-white py-5 rounded-full text-xs font-bold tracking-widest uppercase hover:bg-dark hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 shadow-xl">
                  Request Callback <ArrowRight size={16}/>
                </button>
              </div>
            </form>

            {/* Strong Form Line */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 mt-8 border-t border-dark/10">
              {[
                "100% Verified Project", 
                "No Hidden Charges", 
                "Free Site Visit Assistance"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-green-600 shrink-0" />
                  <span className="text-dark font-bold text-xs">{item}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* Right: The Info Stack */}
        <div className="lg:col-span-5 flex flex-col gap-8">
          
          {/* Box 1: Site Visit */}
          <FadeIn delay={0.1} className="bg-primary text-white p-8 md:p-10 rounded-[32px] border border-white/10 shadow-2xl relative overflow-hidden">
            <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-white/5 rounded-full blur-3xl" />
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-md">
                  <Car size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-black tracking-tight">Book Your Free Site Visit</h3>
              </div>
              <p className="text-white/70 font-medium mb-6 text-sm leading-relaxed">
                Experience the project in person before making your decision. We provide:
              </p>
              <ul className="space-y-3 mb-8">
                {["Guided site visits", "Project walkthrough", "Complete explanation of amenities & pricing"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-bold">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400" /> {item}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-white text-primary py-4 rounded-xl text-xs font-bold tracking-widest uppercase hover:bg-grey hover:text-white transition-all shadow-lg">
                Schedule Your Visit Today
              </button>
            </div>
          </FadeIn>

          {/* Box 2: Why Contact Us */}
          <FadeIn delay={0.2} className="bg-off-white border border-dark/10 p-8 md:p-10 rounded-[32px] flex-1">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <HelpCircle size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-black text-dark tracking-tight">Why Contact Us?</h3>
            </div>
            <p className="text-grey font-medium text-sm mb-6">Still thinking? Here’s why you should connect with us:</p>
            <ul className="space-y-4">
              {[
                "Get complete project details instantly", 
                "Understand pricing & availability", 
                "Clarify doubts with experts", 
                "Book your preferred plot before it’s sold"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm font-bold text-dark">
                  <Check size={16} className="text-primary shrink-0 mt-0.5" /> {item}
                </li>
              ))}
            </ul>
          </FadeIn>

          {/* Box 3: Business Hours */}
          <FadeIn delay={0.3} className="bg-white border border-dark/10 p-8 md:p-10 rounded-[32px] flex items-center justify-between shadow-sm">
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-grey mb-2">Business Hours</h3>
              <p className="text-lg font-black text-dark">Monday – Sunday</p>
            </div>
            <div className="text-right">
              <p className="text-lg font-black text-primary">10:00 AM</p>
              <p className="text-grey text-sm font-bold text-right">7:00 PM</p>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
