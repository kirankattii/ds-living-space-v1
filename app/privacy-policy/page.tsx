import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Privacy Policy | DS Living Spaces",
  description: "Read the Privacy Policy of DS Living Spaces to understand how we handle your personal information.",
  alternates: {
    canonical: '/privacy-policy',
  },
};
import { 
  ShieldCheck, 
  Info, 
  Database, 
  Settings, 
  Share2, 
  Lock, 
  Cookie, 
  ExternalLink, 
  UserCheck, 
  RefreshCw, 
  Phone, 
  Globe, 
  MapPin,
  CheckCircle2
} from 'lucide-react';

export default function PrivacyPolicy() {
  const policySections = [
    {
      id: "1",
      title: "Introduction",
      icon: <Info size={22} />,
      content: (
        <div className="space-y-4 text-slate-600 leading-relaxed">
          <p>
            At <span className="font-semibold text-slate-900">DS Living Spaces</span>, we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you visit our website or interact with our services.
          </p>
          <p>
            By using our website, you agree to the terms outlined in this policy.
          </p>
        </div>
      )
    },
    {
      id: "2",
      title: "Information We Collect",
      icon: <Database size={22} />,
      content: (
        <div className="space-y-6 text-slate-600 leading-relaxed">
          <p>We may collect the following types of information:</p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-50 p-5 rounded-xl border border-slate-100">
              <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                Personal Information
              </h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2"><CheckCircle2 size={16} className="text-blue-500 mt-0.5 shrink-0"/> Full Name</li>
                <li className="flex items-start gap-2"><CheckCircle2 size={16} className="text-blue-500 mt-0.5 shrink-0"/> Phone Number</li>
                <li className="flex items-start gap-2"><CheckCircle2 size={16} className="text-blue-500 mt-0.5 shrink-0"/> Email Address</li>
                <li className="flex items-start gap-2"><CheckCircle2 size={16} className="text-blue-500 mt-0.5 shrink-0"/> Location (if provided)</li>
                <li className="flex items-start gap-2"><CheckCircle2 size={16} className="text-blue-500 mt-0.5 shrink-0"/> Any details submitted through forms</li>
              </ul>
            </div>
            <div className="bg-slate-50 p-5 rounded-xl border border-slate-100">
              <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                Non-Personal Information
              </h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2"><CheckCircle2 size={16} className="text-indigo-500 mt-0.5 shrink-0"/> Browser type</li>
                <li className="flex items-start gap-2"><CheckCircle2 size={16} className="text-indigo-500 mt-0.5 shrink-0"/> Device information</li>
                <li className="flex items-start gap-2"><CheckCircle2 size={16} className="text-indigo-500 mt-0.5 shrink-0"/> IP address</li>
                <li className="flex items-start gap-2"><CheckCircle2 size={16} className="text-indigo-500 mt-0.5 shrink-0"/> Website usage data (pages visited, etc.)</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "3",
      title: "How We Use Your Information",
      icon: <Settings size={22} />,
      content: (
        <div className="space-y-4 text-slate-600 leading-relaxed">
          <p>We use the collected information to:</p>
          <ul className="grid sm:grid-cols-2 gap-3 mt-4">
            {["Provide project details and respond to enquiries", "Schedule site visits", "Share updates about projects, offers, and services", "Improve our website and user experience", "Contact you via call, SMS, WhatsApp, or email"].map((item, i) => (
              <li key={i} className="flex items-start gap-3 bg-white p-3 rounded-lg border border-slate-100 shadow-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0"></div>
                <span className="text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )
    },
    {
      id: "4",
      title: "Data Sharing & Disclosure",
      icon: <Share2 size={22} />,
      content: (
        <div className="space-y-4 text-slate-600 leading-relaxed">
          <p className="font-medium text-slate-900 bg-blue-50 text-blue-800 p-3 rounded-lg border border-blue-100 inline-block mb-2">
            We do not sell or rent your personal data.
          </p>
          <p>We may share your information only with:</p>
          <ul className="space-y-3 pl-2">
            <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-slate-400"></div> Project developers (e.g., for site visits or bookings)</li>
            <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-slate-400"></div> Trusted service providers (CRM, marketing tools, etc.)</li>
            <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-slate-400"></div> Legal authorities, if required by law</li>
          </ul>
        </div>
      )
    },
    {
      id: "5",
      title: "Data Security",
      icon: <Lock size={22} />,
      content: (
        <div className="space-y-4 text-slate-600 leading-relaxed">
          <p>We take appropriate security measures to protect your information from unauthorized access, misuse, or disclosure.</p>
          <p className="text-sm italic text-slate-500">However, no online system is completely secure, and we cannot guarantee absolute security.</p>
        </div>
      )
    },
    {
      id: "6",
      title: "Cookies Policy",
      icon: <Cookie size={22} />,
      content: (
        <div className="space-y-4 text-slate-600 leading-relaxed">
          <p>Our website may use cookies to:</p>
          <div className="flex flex-wrap gap-3 my-4">
            <span className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-full text-sm font-medium">Improve user experience</span>
            <span className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-full text-sm font-medium">Analyze website traffic</span>
            <span className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-full text-sm font-medium">Customize content</span>
          </div>
          <p className="text-sm">You can disable cookies through your browser settings.</p>
        </div>
      )
    },
    {
      id: "7",
      title: "Third-Party Links",
      icon: <ExternalLink size={22} />,
      content: (
        <div className="space-y-2 text-slate-600 leading-relaxed">
          <p>Our website may contain links to third-party websites.</p>
          <p className="font-medium text-slate-800">We are not responsible for their privacy practices or content.</p>
        </div>
      )
    },
    {
      id: "8",
      title: "Your Rights",
      icon: <UserCheck size={22} />,
      content: (
        <div className="space-y-4 text-slate-600 leading-relaxed">
          <p>You have the right to:</p>
          <ul className="space-y-3 pl-2">
            <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-slate-400"></div> Request access to your data</li>
            <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-slate-400"></div> Request correction or deletion</li>
            <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-slate-400"></div> Opt out of marketing communications</li>
          </ul>
          <p className="mt-4 pt-4 border-t border-slate-100 text-sm">To exercise these rights, contact us using the details below.</p>
        </div>
      )
    },
    {
      id: "9",
      title: "Updates to This Policy",
      icon: <RefreshCw size={22} />,
      content: (
        <div className="space-y-2 text-slate-600 leading-relaxed">
          <p>We may update this Privacy Policy from time to time.</p>
          <p>Changes will be posted on this page with an updated effective date.</p>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans pb-24 text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      
      {/* Hero Header */}
      <header className="bg-white border-b border-slate-200 pt-24 pb-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-50 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/3 pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 font-semibold text-sm mb-6">
            <ShieldCheck size={18} />
            DS Living Spaces
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 mb-6">
            Privacy Policy
          </h1>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Your privacy is critically important to us. This document outlines how we handle your data with care and respect.
          </p>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-4xl mx-auto px-6 -mt-8 relative z-20">
        <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-200 overflow-hidden">
          
          <div className="p-5 md:p-12 space-y-8 md:space-y-12">
            {policySections.map((section) => (
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
                {section.id !== "9" && (
                  <div className="ml-0 md:ml-17 mt-6 md:mt-12 border-b border-slate-100" />
                )}
              </section>
            ))}
          </div>

          {/* Contact Section (Highlighted) */}
          <section className="bg-slate-900 text-white p-8 md:p-12 relative overflow-hidden" id="section-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-[80px] pointer-events-none" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <span className="text-sm font-bold text-white/40 select-none">10</span>
                <h2 className="text-3xl font-bold tracking-tight">Contact Us</h2>
              </div>
              
              <p className="text-white/70 mb-8 max-w-xl text-lg">
                If you have any questions, concerns, or requests regarding this Privacy Policy, please reach out to our team.
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
