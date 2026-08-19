"use client";

import Image from 'next/image';

const WhatsAppButton = () => {
  return (
    <div className="fixed bottom-4 right-3 md:bottom-6 md:right-6 z-[60] flex flex-col gap-4">
      {/* Phone Button */}
      <a
        href="tel:9019800009"
        className="group relative bg-white rounded-full p-2.5 border-2 border-[#11123A]"
      >
        <div className="relative w-6 h-6   md:w-10 md:h-10 hover:scale-110 transition-transform duration-300">
          <Image
            src="/phone.svg"
            alt="Call Us"
            fill
            className="object-contain"
          />
        </div>
        <span className="absolute right-[100%] top-1/2 -translate-y-1/2 mr-4 bg-white text-dark px-4 py-2 text-xs font-bold shadow-xl opacity-0 translate-x-4 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap rounded-lg border border-slate-200">
          Call 90198 00009
        </span>
      </a>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919019800009"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative"
      >
        <div className="relative w-12 h-12 md:w-16 md:h-16 hover:scale-110 transition-transform duration-300">
          <Image
            src="/whatsapp.svg"
            alt="WhatsApp Us"
            fill
            className="object-contain"
          />
        </div>
        <span className="absolute right-[100%] top-1/2 -translate-y-1/2 mr-4 bg-white text-dark px-4 py-2 text-xs font-bold shadow-xl opacity-0 translate-x-4 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap rounded-lg border border-slate-200">
          Chat on WhatsApp
        </span>
      </a>
    </div>
  );
};

export default WhatsAppButton;
