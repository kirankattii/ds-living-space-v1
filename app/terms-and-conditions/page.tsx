import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Terms & Conditions | DS Living Spaces",
  description: "Read the Terms and Conditions of DS Living Spaces for using our website and services.",
  alternates: {
    canonical: '/terms-and-conditions',
  },
};
import { 
  FileText, 
  Info, 
  Monitor, 
  AlertTriangle, 
  TrendingUp, 
  Building2, 
  CalendarCheck, 
  Copyright, 
  ShieldAlert, 
  Lock, 
  RefreshCw,
  Scale,
  Phone, 
  Globe, 
  MapPin,
  CheckCircle2,
  XCircle
} from 'lucide-react';

export default function TermsAndConditions() {
  const policySections = [
    {
      id: "1",
      title: "Introduction",
      icon: <Info size={22} />,
      content: (
        <div className="space-y-4 text-slate-600 leading-relaxed">
          <p>
            Welcome to <span className="font-semibold text-slate-900">DS Living Spaces</span>.
          </p>
          <p>
            By accessing or using our website, you agree to comply with and be bound by these Terms & Conditions. If you do not agree, please do not use our website.
          </p>
        </div>
      )
    },
    {
      id: "2",
      title: "Use of Website",
      icon: <Monitor size={22} />,
      content: (
        <div className="space-y-4 text-slate-600 leading-relaxed">
          <p>
            You agree to use this website only for lawful purposes and in a way that does not harm or restrict others from using it.
          </p>
          <div className="bg-rose-50 p-5 rounded-xl border border-rose-100 mt-4">
            <h4 className="font-semibold text-rose-900 mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-rose-500"></span>
              You must not:
            </h4>
            <ul className="space-y-3 text-sm text-rose-800">
              <li className="flex items-start gap-2"><XCircle size={16} className="text-rose-500 mt-0.5 shrink-0"/> Misuse the website</li>
              <li className="flex items-start gap-2"><XCircle size={16} className="text-rose-500 mt-0.5 shrink-0"/> Attempt unauthorized access</li>
              <li className="flex items-start gap-2"><XCircle size={16} className="text-rose-500 mt-0.5 shrink-0"/> Provide false information</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: "3",
      title: "Property Information Disclaimer",
      icon: <AlertTriangle size={22} />,
      content: (
        <div className="space-y-4 text-slate-600 leading-relaxed">
          <p>All project details, pricing, availability, and specifications provided on this website are for informational purposes only.</p>
          <ul className="grid sm:grid-cols-2 gap-3 mt-4">
            {["Prices may change without notice", "Availability is subject to confirmation", "Images are for representation purposes only"].map((item, i) => (
              <li key={i} className="flex items-start gap-3 bg-white p-3 rounded-lg border border-slate-100 shadow-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0"></div>
                <span className="text-sm">{item}</span>
              </li>
            ))}
          </ul>
          <p className="font-medium text-slate-800 mt-4 bg-amber-50 text-amber-900 p-3 rounded-lg border border-amber-100">
            Users are advised to verify details directly with our team before making any decisions.
          </p>
        </div>
      )
    },
    {
      id: "4",
      title: "No Guarantee of Investment Returns",
      icon: <TrendingUp size={22} />,
      content: (
        <div className="space-y-4 text-slate-600 leading-relaxed">
          <p>While we provide insights on real estate investments:</p>
          <ul className="space-y-3 pl-2">
            <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0"></div> <span className="flex-1">DS Living Spaces does not guarantee any specific return on investment or property appreciation.</span></li>
            <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0"></div> <span className="flex-1">Investment decisions should be made at your own discretion.</span></li>
          </ul>
        </div>
      )
    },
    {
      id: "5",
      title: "Third-Party Projects",
      icon: <Building2 size={22} />,
      content: (
        <div className="space-y-4 text-slate-600 leading-relaxed">
          <p>We market and promote projects developed by third-party developers.</p>
          <ul className="space-y-3 pl-2">
            <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-slate-400"></div> We do not own the projects unless explicitly stated</li>
            <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-slate-400"></div> Final agreements are between the buyer and developer</li>
          </ul>
        </div>
      )
    },
    {
      id: "6",
      title: "Site Visits & Bookings",
      icon: <CalendarCheck size={22} />,
      content: (
        <div className="space-y-4 text-slate-600 leading-relaxed">
          <ul className="grid sm:grid-cols-2 gap-3">
            {["Site visits are arranged for customer convenience", "Booking terms depend on the developer’s policies", "Users must verify all documents before booking"].map((item, i) => (
              <li key={i} className="flex items-start gap-3 bg-white p-3 rounded-lg border border-slate-100 shadow-sm">
                <CheckCircle2 size={16} className="text-blue-500 shrink-0 mt-0.5" />
                <span className="text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )
    },
    {
      id: "7",
      title: "Intellectual Property",
      icon: <Copyright size={22} />,
      content: (
        <div className="space-y-2 text-slate-600 leading-relaxed">
          <p>All content on this website (text, images, design, logos) is the property of DS Living Spaces unless stated otherwise.</p>
          <p className="font-medium text-slate-800">You may not copy, reproduce, or distribute content without permission.</p>
        </div>
      )
    },
    {
      id: "8",
      title: "Limitation of Liability",
      icon: <ShieldAlert size={22} />,
      content: (
        <div className="space-y-4 text-slate-600 leading-relaxed">
          <p>DS Living Spaces shall not be held liable for:</p>
          <ul className="space-y-3 pl-2">
            <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-slate-400"></div> Any loss or damage arising from use of this website</li>
            <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-slate-400"></div> Errors or omissions in content</li>
            <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-slate-400"></div> Delays or changes in project details</li>
          </ul>
        </div>
      )
    },
    {
      id: "9",
      title: "Privacy",
      icon: <Lock size={22} />,
      content: (
        <div className="space-y-2 text-slate-600 leading-relaxed">
          <p>Your use of this website is also governed by our Privacy Policy.</p>
        </div>
      )
    },
    {
      id: "10",
      title: "Changes to Terms",
      icon: <RefreshCw size={22} />,
      content: (
        <div className="space-y-2 text-slate-600 leading-relaxed">
          <p>We reserve the right to update these Terms & Conditions at any time.</p>
          <p>Changes will be effective immediately upon posting.</p>
        </div>
      )
    },
    {
      id: "11",
      title: "Governing Law",
      icon: <Scale size={22} />,
      content: (
        <div className="space-y-2 text-slate-600 leading-relaxed">
          <p>These terms are governed by the laws of India.</p>
          <p>Any disputes shall be subject to the jurisdiction of Bengaluru courts.</p>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans pb-24 text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      
      {/* Hero Header */}
      <header className="bg-white border-b border-slate-200 pt-24 pb-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-slate-100 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/3 pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200 text-slate-600 font-semibold text-sm mb-6">
            <FileText size={18} />
            DS Living Spaces
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 mb-6">
            Terms & Conditions
          </h1>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Please read these terms carefully before accessing or using our website and services.
          </p>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-4xl mx-auto px-6 -mt-8 relative z-20">
        <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-200 overflow-hidden">
          
          <div className="p-5 md:p-12 space-y-8 md:space-y-12">
            {policySections.map((section, index) => (
              <section key={section.id} className="scroll-mt-24 group" id={`section-${section.id}`}>
                <div className="flex items-start gap-0 md:gap-5">
                  <div className="hidden md:flex w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 items-center justify-center text-slate-500 group-hover:bg-blue-50 group-hover:text-blue-600 group-hover:border-blue-100 transition-colors shrink-0">
                    {section.icon}
                  </div>
                  <div className="flex-grow pt-0 md:pt-2">
                    <h2 className="text-2xl font-bold text-slate-900 mb-3 md:mb-5 tracking-tight flex items-baseline gap-3">
                      <span className="text-sm font-bold text-slate-300 select-none">{section.id.padStart(2, '0')}</span>
                      {section.title}
                    </h2>
                    {section.content}
                  </div>
                </div>
                {/* Separator Line */}
                {index !== policySections.length - 1 && (
                  <div className="ml-0 md:ml-17 mt-6 md:mt-12 border-b border-slate-100" />
                )}
              </section>
            ))}
          </div>

          {/* Contact Section (Highlighted) */}
          <section className="bg-slate-900 text-white p-8 md:p-12 relative overflow-hidden" id="section-12">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-[80px] pointer-events-none" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <span className="text-sm font-bold text-white/40 select-none">12</span>
                <h2 className="text-3xl font-bold tracking-tight">Contact Information</h2>
              </div>
              
              <p className="text-white/70 mb-8 max-w-xl text-lg">
                For any queries regarding these Terms & Conditions, please reach out to our team.
              </p>

              <div className="grid sm:grid-cols-3 gap-4">
                <a href="tel:+919019800009" className="flex flex-col gap-3 bg-white/10 hover:bg-white/15 border border-white/10 p-5 rounded-2xl transition-colors group">
                  <Phone size={24} className="text-blue-400 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="text-xs text-white/50 uppercase tracking-wider mb-1 font-semibold">Phone</p>
                    <p className="font-medium text-white tracking-wide">90198 00009</p>
                  </div>
                </a>
                
                <a href="https://www.dslivingspaces.com" target="_blank" rel="noopener noreferrer" className="flex flex-col gap-3 bg-white/10 hover:bg-white/15 border border-white/10 p-5 rounded-2xl transition-colors group">
                  <Globe size={24} className="text-emerald-400 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="text-xs text-white/50 uppercase tracking-wider mb-1 font-semibold">Website</p>
                    <p className="font-medium text-white tracking-wide">dslivingspaces.com</p>
                  </div>
                </a>

                <div className="flex flex-col gap-3 bg-white/10 border border-white/10 p-5 rounded-2xl">
                  <MapPin size={24} className="text-rose-400" />
                  <div>
                    <p className="text-xs text-white/50 uppercase tracking-wider mb-1 font-semibold">Location</p>
                    <p className="font-medium text-white tracking-wide">Bengaluru</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </div>
        
        <div className="mt-8 text-center text-slate-500 text-sm pb-8">
          &copy; {new Date().getFullYear()} DS Living Spaces. All rights reserved.
        </div>
      </main>

    </div>
  );
}
