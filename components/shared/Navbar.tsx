"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, ArrowUpRight, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { useModal } from '@/context/ModalContext';

const easeOutQuint = [0.22, 1, 0.36, 1] as const;

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);

  const { openBookVisit } = useModal();



  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  const pathname = usePathname();



  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    {
      name: 'PROJECTS',
      href: '/projects',
      dropdown: [
        { name: 'Arka Grand', href: '/projects/arka-grand' },
        { name: 'Bird Song', href: '/projects/bird-song-yash-value-spaces' },
        { name: 'The Meadows', href: '/projects/the-meadows' },
      ]
    },
    { name: 'Gallery & Amenities', href: '/amenities-gallery' },
    { name: 'Journal', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];


  return (
    <>
      <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 border-b bg-white shadow-sm py-2.5`}>
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/dslogo.png"
              alt="DS Living Spaces"
              width={160}
              height={50}
              className={`h-10 md:h-12 w-auto transition-all duration-500 `}
            />
          </Link>

          <div className={`hidden lg:flex gap-10 text-[13px] font-bold tracking-[0.15em] uppercase transition-colors duration-500 text-dark`}>
            {navLinks.map(link => (
              <div key={link.name} className="relative group">
                {link.dropdown ? (
                  <>
                    <button className="flex items-center gap-1.5 hover:text-green-500 transition-colors">
                      {link.name}
                      <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
                    </button>
                    <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                      <div className="bg-white shadow-2xl rounded-2xl border border-dark/5 p-4 min-w-[240px]">
                        <div className="flex flex-col gap-2">
                          {link.dropdown.map(sub => (
                            <Link
                              key={sub.name}
                              href={sub.href}
                              className={`px-4 py-3 rounded-xl text-[11px] tracking-widest transition-all ${pathname === sub.href ? 'bg-primary text-white' : 'hover:bg-primary/5 hover:text-primary text-dark'
                                }`}
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className={`transition-colors ${pathname === link.href ? 'text-green-500' : 'hover:text-green-500'}`}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          <div className="flex items-center gap-3 md:gap-4">
            <div className="hidden lg:flex items-center gap-4">
              <a href="tel:9019800009" className="flex items-center gap-2 px-4 py-2.5 rounded-full text-[12px] font-bold uppercase tracking-widest transition-all duration-300 border border-primary/30 text-dark hover:bg-primary/5 shadow-sm">
                <Phone size={12} /> Call now
              </a>
              <button
                onClick={openBookVisit}
                className="flex items-center gap-3 px-6 py-2.5 rounded-full text-[12px] font-bold uppercase tracking-widest transition-all duration-300 shadow-xl hover:scale-105 bg-primary text-white">
                Book Visit <ArrowUpRight size={12} />
              </button>
            </div>

            <button className={`lg:hidden transition-colors duration-500 ${menuOpen ? 'text-black' : 'text-dark'}`} onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={28} strokeWidth={1.5} /> : <Menu size={28} strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Fullscreen Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.6, ease: easeOutQuint }}
            className="fixed top-0 left-0 w-full h-[85vh] bg-white z-[90] flex flex-col px-6 pt-20 pb-10 border-b border-dark/10 rounded-b-[40px] shadow-2xl overflow-y-auto"
          >
            <div className="flex flex-col gap-1 text-dark">
              {navLinks.map(link => (
                <div key={link.name} className="flex flex-col">
                  {link.dropdown ? (
                    <div className="flex flex-col">
                      <button
                        onClick={() => setProjectsOpen(!projectsOpen)}
                        className="flex items-center justify-between w-full text-xl font-black tracking-tight py-2 border-b border-dark/10 text-left"
                      >
                        {link.name}
                        <ChevronDown
                          size={24}
                          className={`transition-transform duration-300 ${projectsOpen ? 'rotate-180 text-primary' : 'text-grey/40'}`}
                        />
                      </button>
                      <AnimatePresence>
                        {projectsOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden bg-primary/5 rounded-2xl mt-2 mb-4"
                          >
                            <div className="flex flex-col p-2 gap-1">
                              {link.dropdown.map(sub => (
                                <Link
                                  key={sub.name}
                                  href={sub.href}
                                  onClick={() => setMenuOpen(false)}
                                  className={`text-md font-bold tracking-tight px-4 py-2 rounded-xl transition-colors flex items-center justify-between ${pathname === sub.href ? 'bg-primary text-white' : 'text-dark/80 hover:bg-primary/10'
                                    }`}
                                >
                                  {sub.name}
                                  <ArrowUpRight size={16} className={pathname === sub.href ? 'text-white/60' : 'text-primary/40'} />
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className={`text-xl font-black tracking-tight border-b border-dark/10 py-2 transition-colors ${pathname === link.href ? 'text-primary' : ''}`}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-6 grid grid-cols-1 gap-4">
              <p className="text-grey text-[10px] uppercase font-bold tracking-widest mb-2 px-2">Contact Team</p>
              <div className="flex flex-col gap-3">
                <a href="tel:9019800009" className="text-sm text-white font-bold bg-primary/90 flex items-center gap-4 p-4 py-2.5 rounded-2xl justify-center shadow-lg active:scale-95 transition-transform">
                  <Phone size={20} /> Call Now
                </a>
                <button
                  onClick={() => {
                    setMenuOpen(false);
                    openBookVisit();
                  }}
                  className="text-sm text-primary font-bold bg-white border-2 border-primary/20 flex items-center gap-4 p-4 py-2.5 rounded-2xl justify-center shadow-sm active:scale-95 transition-transform"
                >
                  Book Visit <ArrowUpRight size={20} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

