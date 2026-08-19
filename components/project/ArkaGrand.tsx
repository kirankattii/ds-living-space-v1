"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import {
  Phone,
  ArrowRight,
  MapPin,
  CheckCircle2,
  Trees,
  Navigation,
  Building,
  ArrowUpRight,
  Droplets,
  Zap,
  Dumbbell,
  Users,
  Cctv,
  Activity,
  Globe,
  Heart,
  Briefcase,
  Camera,
  Award,
  TrendingUp,
  ShieldCheck,
  Banknote,
} from "lucide-react";
import { useModal } from "@/context/ModalContext";

// --- Premium Animation Easing & Variants ---
const easeOutExpo = [0.16, 1, 0.3, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: easeOutExpo } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

// --- Reusable Premium Components ---
const FadeIn = ({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
    variants={{
      visible: {
        ...fadeUp.visible,
        transition: { ...fadeUp.visible.transition, delay },
      },
      hidden: fadeUp.hidden,
    }}
    className={className}
  >
    {children}
  </motion.div>
);

const ParallaxImage = ({
  src,
  overlay = "bg-[#11123A]/40",
}: {
  src: string;
  overlay?: string;
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const springScroll = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const y = useTransform(springScroll, [0, 1], ["-20%", "20%"]);

  return (
    <div
      ref={ref}
      className="absolute inset-0 z-0 overflow-hidden bg-[#171717]"
    >
      <motion.img
        style={{ y }}
        src={src}
        className="absolute w-full h-[140%] -top-[20%] object-cover pointer-events-none opacity-60"
        alt="Background"
      />
      <div className={`absolute inset-0 ${overlay} pointer-events-none`} />
    </div>
  );
};

// --- Main Page Component ---
export default function ArkaGrand() {
  const { scrollY } = useScroll();
  const heroTextY = useTransform(scrollY, [0, 1000], [0, -150]);
  const { openBookVisit } = useModal();

  return (
    <div className="bg-[#ffffff] text-[#171717] font-sans antialiased selection:bg-[#11123A] selection:text-[#ffffff] overflow-x-hidden">
      {/* --- 1. HERO SECTION (Cinematic Parallax) --- */}
      <section className="relative min-h-[85vh] flex flex-col justify-end pt-24 lg:pt-28 overflow-hidden bg-[#171717]">
        <ParallaxImage
          src="/arka-grand/image-5.jpeg"
          overlay="bg-gradient-to-t from-[#11123A] via-[#11123A]/50 to-[#171717]/40"
        />

        <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 md:px-12 flex-1 flex flex-col justify-end pb-16 lg:pb-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            style={{ y: heroTextY }}
            className="max-w-5xl"
          >
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-3 mb-4 bg-[#ffffff]/10 backdrop-blur-md border border-[#ffffff]/20 px-6 py-2 rounded-2xl"
            >
              <span className="w-2 h-2 rounded-2xl bg-[#ffffff] animate-pulse" />
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#ffffff]">
                Premium Villa Plots
              </span>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="text-5xl md:text-[80px] lg:text-[110px] font-black tracking-tighter leading-[0.9] text-[#ffffff] mb-6 drop-shadow-2xl"
            >
              ARKA GRAND.
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-xl md:text-3xl text-[#ffffff]/80 font-light max-w-3xl leading-snug mb-8 drop-shadow-md"
            >
              Premium Villa Plots for a Grand Life in Attibele–Jigala. Prime
              Location. Faster Growth. Higher Returns.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row items-center gap-6"
            >
              <button
                onClick={openBookVisit}
                className="w-full sm:w-auto bg-[#ffffff] text-[#11123A] px-10 py-5 rounded-2xl font-bold text-sm tracking-widest uppercase hover:bg-[#808080] hover:text-[#ffffff] transition-colors shadow-[0_0_30px_rgba(255,255,255,0.2)] flex items-center justify-center gap-3 group"
              >
                Book Site Visit{" "}
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
              <div className="flex flex-col">
                <span className="text-[#ffffff] font-bold tracking-wider text-sm uppercase">
                  Starting From
                </span>
                <span className="text-[#ffffff] font-black text-2xl">
                  ₹5,499/- per Sq. Ft.
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Elegant Bottom Border indicator */}
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#ffffff]/30 to-transparent z-20" />
      </section>

      {/* --- 2. OVERVIEW & HIGHLIGHTS (Editorial Split) --- */}
      <section
        id="overview"
        className="py-16 md:py-20 px-6 md:px-12 bg-[#fbfbfd]"
      >
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-40 z-10">
            <FadeIn>
              <span className="text-[#11123A] text-[10px] font-bold tracking-[0.3em] uppercase mb-2 block">
                Project Overview
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-[64px] font-black tracking-tighter text-[#171717] leading-[1.05] mb-6">
                A Location Designed for Tomorrow.
              </h2>
              <p className="text-[#808080] text-lg md:text-xl font-medium leading-relaxed mb-6 max-w-lg">
                ARKA GRAND brings together strategic location, strong
                connectivity, modern infrastructure and lifestyle amenities in
                one thoughtfully planned gated community. Positioned close to
                major upcoming infrastructure like the proposed Swift City IT
                Hub, it's an attractive destination for both end-users and
                long-term investors.
              </p>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-3">
                  <MapPin size={24} className="text-[#11123A]" />
                  <span className="font-bold text-[#171717] text-sm">
                    200–300m from Swift City IT Hub
                  </span>
                </div>
              </div>
            </FadeIn>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-12">
            <FadeIn
              delay={0.2}
              className="relative h-[400px] md:h-[600px] rounded-2xl overflow-hidden group shadow-2xl"
            >
              <img
                src="/arka-grand/image-2.jpeg"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s]"
                alt="Project Environment"
              />
              <div className="absolute inset-0 bg-[#11123A]/10 mix-blend-multiply" />

              {/* Floating Location Badge */}
              <div className="absolute bottom-8 left-8 bg-[#ffffff]/90 backdrop-blur-md px-6 py-4 rounded-2xl flex items-center gap-4 shadow-xl">
                <div className="w-10 h-10 bg-[#11123A] rounded-2xl flex items-center justify-center text-[#ffffff]">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[#808080]">
                    Location
                  </p>
                  <p className="font-bold text-[#171717]">
                    Attibele–Jigala, Anekal
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Asymmetric Highlight Box */}
            <FadeIn
              delay={0.3}
              className="bg-[#11123A] text-[#ffffff] p-10 md:p-16 lg:-ml-24 relative z-20 shadow-[0_20px_40px_rgba(17,18,58,0.2)] rounded-2xl"
            >
              <h3 className="text-2xl font-black mb-8 border-b border-[#ffffff]/20 pb-4">
                Key Highlights
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8">
                {[
                  "BMRDA Approved Layout",
                  "Individual E-Khatha",
                  "100% Released Property",
                  "Ready for Registration",
                  "Up to 90% Bank Loans Available",
                  "12-ft Compound Wall & Security",
                  "Underground Infrastructure",
                  "Multiple Parks & Green Spaces",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2
                      size={20}
                      className="text-[#ffffff]/50 shrink-0"
                    />
                    <span className="text-[#ffffff]/90 font-medium text-sm">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* --- 3. AMENITIES (Modern Bento Grid) --- */}
      <section
        id="amenities"
        className="py-16 md:py-20 px-6 md:px-12 bg-[#171717] text-[#ffffff] relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#11123A]/30 rounded-2xl blur-[120px] pointer-events-none" />

        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8 border-b border-[#ffffff]/10 pb-8">
            <FadeIn className="max-w-2xl">
              <span className="text-[#ffffff]/50 text-[10px] font-bold tracking-[0.3em] uppercase mb-2 block">
                Premium Features
              </span>
              <h2 className="text-4xl md:text-[64px] font-black tracking-tighter text-[#ffffff] leading-[1.05]">
                Designed for a <br /> modern lifestyle.
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-[#ffffff]/60 font-medium text-lg leading-relaxed max-w-md md:text-right">
                With 4,000+ plants and trees, luxury amenities, and top-tier
                security, ARKA GRAND is designed to be your serene sanctuary.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Community & Lifestyle */}
            <FadeIn className="bg-[#11123A]/40 backdrop-blur-md border border-[#ffffff]/10 rounded-2xl p-10 md:p-14 hover:bg-[#11123A]/60 transition-colors duration-500">
              <div className="w-16 h-16 bg-[#ffffff] rounded-2xl text-[#11123A] flex items-center justify-center mb-6 shadow-lg">
                <Users size={32} />
              </div>
              <h3 className="text-3xl font-black text-[#ffffff] mb-6 tracking-tight">
                Community & Leisure
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: "Luxury Clubhouse", icon: <Award size={20} /> },
                  { title: "Swimming Pool", icon: <Droplets size={20} /> },
                  { title: "4 Theme Parks", icon: <Trees size={20} /> },
                  {
                    title: "Acupuncture Walk Track",
                    icon: <Activity size={20} />,
                  },
                  { title: "Party Lawn & Gazebo", icon: <Heart size={20} /> },
                  {
                    title: "Grand Entrance Arch",
                    icon: <Building size={20} />,
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="text-[#ffffff]/50">{item.icon}</div>
                    <span className="text-sm font-bold text-[#ffffff]/90">
                      {item.title}
                    </span>
                  </div>
                ))}
              </div>
            </FadeIn>

            {/* Infrastructure */}
            <FadeIn
              delay={0.2}
              className="bg-[#11123A]/40 backdrop-blur-md border border-[#ffffff]/10 rounded-2xl p-10 md:p-14 hover:bg-[#11123A]/60 transition-colors duration-500"
            >
              <div className="w-16 h-16 bg-[#ffffff] rounded-2xl text-[#11123A] flex items-center justify-center mb-6 shadow-lg">
                <Zap size={32} />
              </div>
              <h3 className="text-3xl font-black text-[#ffffff] mb-6 tracking-tight">
                Infrastructure & Security
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: "24-Hour Security", icon: <Cctv size={20} /> },
                  {
                    title: "12-ft Compound Wall",
                    icon: <ShieldCheck size={20} />,
                  },
                  {
                    title: "Underground Drainage",
                    icon: <Droplets size={20} />,
                  },
                  { title: "Underground Electricity", icon: <Zap size={20} /> },
                  { title: "Rainwater Harvesting", icon: <Trees size={20} /> },
                  { title: "STP & Borewell", icon: <Droplets size={20} /> },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="text-[#ffffff]/50">{item.icon}</div>
                    <span className="text-sm font-bold text-[#ffffff]/90">
                      {item.title}
                    </span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* --- 4. WHY CHOOSE & TARGET AUDIENCE (Split Grid) --- */}
      <section className="py-16 md:py-20 bg-[#ffffff] border-b border-[#171717]/10">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <FadeIn>
              <h2 className="text-4xl md:text-[64px] font-black tracking-tighter text-[#171717] leading-[1.05]">
                Why Invest in Arka Grand?
              </h2>
            </FadeIn>
          </div>

          <div className="flex overflow-x-auto pb-10 snap-x snap-mandatory no-scrollbar md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 -mx-6 px-6 md:mx-0 md:px-0">
            {[
              {
                title: "Prime Location",
                desc: "Located next to the proposed Swift City IT Hub (1,050+ acres).",
                bg: "bg-[#11123A]",
                text: "text-[#ffffff]",
              },
              {
                title: "Secure Ownership",
                desc: "BMRDA-approved, individual E-Khatha, and 100% released plots.",
                bg: "bg-[#fbfbfd]",
                text: "text-[#171717]",
                border: "border border-[#171717]/10",
              },
              {
                title: "Excellent Connectivity",
                desc: "Access to STRR, Bengaluru–Chennai Highway, and upcoming metro.",
                bg: "bg-[#fbfbfd]",
                text: "text-[#171717]",
                border: "border border-[#171717]/10",
              },
              {
                title: "Future Growth",
                desc: "Rapidly developing region creating long-term appreciation opportunities.",
                bg: "bg-[#171717]",
                text: "text-[#ffffff]",
              },
            ].map((item, i) => (
              <FadeIn
                key={i}
                delay={i * 0.1}
                className={`p-10 rounded-2xl flex flex-col justify-center min-h-[300px] shadow-sm hover:shadow-xl transition-shadow shrink-0 w-[85%] md:w-auto snap-center ${item.bg} ${item.text} ${item.border || ""}`}
              >
                <h4 className="text-2xl font-black tracking-tight mb-4">
                  {item.title}
                </h4>
                <p
                  className={`text-sm font-medium ${item.bg === "bg-[#fbfbfd]" ? "text-[#808080]" : "opacity-80"}`}
                >
                  {item.desc}
                </p>
              </FadeIn>
            ))}
          </div>

          {/* Who is this for? (Interactive Hover Cards) */}
          <div className="border-t border-[#171717]/10 pt-16">
            <FadeIn className="mb-8">
              <span className="text-[#11123A] text-[10px] font-bold tracking-[0.3em] uppercase mb-2 block">
                Perfect Fit
              </span>
              <h3 className="text-3xl md:text-4xl font-black text-[#171717]">
                Who is this project for?
              </h3>
            </FadeIn>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "First-Time Buyers",
                  desc: "Own a residential plot in a developing Bengaluru corridor.",
                  icon: <Heart size={32} />,
                },
                {
                  title: "Investors",
                  desc: "Strategic location near major employment hubs.",
                  icon: <TrendingUp size={32} />,
                },
                {
                  title: "NRIs & Outstation",
                  desc: "Established infrastructure & secure investment.",
                  icon: <Globe size={32} />,
                },
                {
                  title: "Families",
                  desc: "Build a safe home close to top schools & hospitals.",
                  icon: <Users size={32} />,
                },
              ].map((card, i) => (
                <FadeIn
                  key={i}
                  delay={i * 0.1}
                  className="p-8 border border-[#171717]/10 rounded-2xl hover:bg-[#11123A] group transition-all duration-500 cursor-default bg-[#fbfbfd]"
                >
                  <div className="text-[#11123A] mb-6 group-hover:scale-110 group-hover:text-[#ffffff] transition-all origin-left">
                    {card.icon}
                  </div>
                  <h4 className="text-xl font-bold text-[#171717] mb-2 group-hover:text-[#ffffff] transition-colors">
                    {card.title}
                  </h4>
                  <p className="text-[#808080] text-sm font-medium group-hover:text-[#ffffff]/70 transition-colors">
                    {card.desc}
                  </p>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- 5. LOCATION ADVANTAGE (Cinematic Map & Distances) --- */}
      <section
        id="location"
        className="relative bg-[#171717] text-[#ffffff] overflow-hidden"
      >
        {/* Embedded Google Map Background (Placeholder for actual Attibele map) */}
        <div className="absolute inset-0 z-0 opacity-40 mix-blend-luminosity grayscale pointer-events-none">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124474.37552554746!2d77.67156942055627!3d12.793755452668516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6de425263a23%3A0xc3c5f59c8cc681a2!2sAttibele%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1714000000000!5m2!1sen!2sin"
            className="w-full h-[150%] -top-[25%] object-cover filter contrast-125"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Arka Grand Location Map"
          ></iframe>
          <div className="absolute inset-0 bg-gradient-to-r from-[#171717] via-[#171717]/90 to-transparent" />
        </div>

        <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 py-20 items-center">
          <div>
            <FadeIn>
              <span className="text-[#ffffff]/50 text-[10px] font-bold tracking-[0.3em] uppercase mb-2 block">
                Strategic Location
              </span>
              <h2 className="text-4xl md:text-[64px] font-black tracking-tighter text-[#ffffff] leading-[1.05] mb-6">
                Strategically Located in Attibele–Jigala.
              </h2>
              <p className="text-[#ffffff]/80 font-medium text-lg leading-relaxed mb-8 max-w-md">
                Located next to the proposed Swift City IT Hub, ARKA GRAND
                connects you to major growth corridors, highways, and upcoming
                metros effortlessly.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8 mb-8 border-t border-[#ffffff]/20 pt-10">
                {[
                  { label: "Swift City IT Hub", dist: "200-300 m" },
                  { label: "Bengaluru–Chennai Hwy", dist: "1.7 km" },
                  { label: "Upcoming Metro", dist: "1.7 km" },
                  { label: "Time Square Mall", dist: "2.0 km" },
                  { label: "STRR", dist: "2-3 km" },
                  { label: "Chandapura Rly Station", dist: "6.5 km" },
                ].map((loc, i) => (
                  <div
                    key={i}
                    className="border-b border-[#ffffff]/10 pb-3 flex justify-between items-end group"
                  >
                    <span className="text-[#ffffff]/60 text-xs font-bold uppercase tracking-wide">
                      {loc.label}
                    </span>
                    <span className="text-[#ffffff] font-black text-xl group-hover:text-[#808080] transition-colors">
                      {loc.dist}
                    </span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          <FadeIn
            delay={0.2}
            className="relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden group shadow-2xl border border-white/10"
          >
            <img
              src="/arka-grand/image-3.jpeg"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s]"
              alt="Project Layout Map"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#11123A]/40 to-transparent pointer-events-none" />

            {/* Decorative Element */}
            <div className="absolute bottom-6 right-6 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl flex items-center gap-3">
              <div className="w-10 h-10 bg-white text-[#11123A] rounded-2xl flex items-center justify-center">
                <Navigation size={20} />
              </div>
              <div className="pr-4">
                <p className="text-[10px] font-bold text-white/60 uppercase tracking-widest">
                  Map View
                </p>
                <p className="text-sm font-bold text-white">
                  Project Surroundings
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* --- 6. INVESTMENT POTENTIAL (Textural Block) --- */}
      <section
        id="investment"
        className="py-16 md:py-20 bg-[#fbfbfd] border-b border-[#171717]/10"
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 text-center">
          <FadeIn>
            <span className="text-[#11123A] text-[10px] font-bold tracking-[0.3em] uppercase mb-2 block">
              Market Insights
            </span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-[#171717] leading-[1.1] mb-6 max-w-4xl mx-auto">
              Invest Where Bengaluru Is Expanding.
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 max-w-5xl mx-auto">
            {[
              {
                title: "Employment Growth",
                desc: "Proximity to the proposed Swift City IT Hub brings vast employment opportunities.",
              },
              {
                title: "Infrastructure",
                desc: "Benefiting from STRR, metro expansion, and highways.",
              },
              {
                title: "Lifestyle Expansion",
                desc: "Surrounded by leading schools, hospitals, and shopping destinations.",
              },
            ].map((item, i) => (
              <FadeIn
                key={i}
                delay={i * 0.1}
                className="bg-[#ffffff] border border-[#171717]/10 p-10 shadow-sm hover:shadow-lg transition-shadow rounded-2xl"
              >
                <div className="w-12 h-12 bg-[#fbfbfd] border border-[#171717]/10 flex items-center justify-center text-[#11123A] rounded-2xl mx-auto mb-6">
                  <TrendingUp size={20} />
                </div>
                <h3 className="text-xl font-bold text-[#171717] mb-3">
                  {item.title}
                </h3>
                <p className="text-[#808080] text-sm font-medium">
                  {item.desc}
                </p>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.4} className="mt-10">
            <p className="text-[#171717] font-black text-xl italic bg-[#ffffff] border border-[#171717]/10 inline-block px-8 py-6 rounded-2xl shadow-sm">
              “When employment, infrastructure, and connectivity converge, land
              value naturally appreciates.”
            </p>
          </FadeIn>
        </div>
      </section>

      {/* --- 7. PROJECT GALLERY (Cinematic Grid) --- */}
      <section id="gallery" className="py-16 md:py-20 bg-[#ffffff]">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-8">
            <FadeIn>
              <span className="text-[#11123A] text-[10px] font-bold tracking-[0.3em] uppercase mb-2 block">
                Visual Journey
              </span>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-[#171717]">
                Captured moments <br /> at Arka Grand.
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-[#808080] font-medium text-lg max-w-md md:text-right">
                A glimpse into the lifestyle, infrastructure, and green
                environment we are crafting.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[300px]">
            <FadeIn className="md:col-span-8 md:row-span-2 rounded-2xl overflow-hidden group">
              <img
                src="/arka-grand/image-4.jpeg"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                alt="Arka Grand Premium Layout"
              />
            </FadeIn>
            <FadeIn
              delay={0.1}
              className="md:col-span-4 rounded-2xl overflow-hidden group"
            >
              <img
                src="/arka-grand/image-5.jpeg"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                alt="Infrastructure"
              />
            </FadeIn>
            <FadeIn
              delay={0.2}
              className="md:col-span-4 rounded-2xl overflow-hidden group"
            >
              <img
                src="/arka-grand/image-6.jpeg"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                alt="Road Networks"
              />
            </FadeIn>
            <FadeIn
              delay={0.3}
              className="md:col-span-4 md:row-span-2 rounded-2xl overflow-hidden group"
            >
              <img
                src="/arka-grand/image-7.jpeg"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                alt="Parks and Greenery"
              />
            </FadeIn>
            <FadeIn
              delay={0.4}
              className="md:col-span-4 rounded-2xl overflow-hidden group"
            >
              <img
                src="/arka-grand/image-8.jpeg"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                alt="Available Plot Layout"
              />
            </FadeIn>
            <FadeIn
              delay={0.5}
              className="md:col-span-4 rounded-2xl overflow-hidden group"
            >
              <img
                src="/arka-grand/image-9.jpeg"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                alt="Entrance Arch Concept"
              />
            </FadeIn>

            {/* Additional Images */}
            <FadeIn
              delay={0.6}
              className="md:col-span-3 rounded-2xl overflow-hidden group"
            >
              <img
                src="/arka-grand/image-10.jpeg"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                alt="Security View"
              />
            </FadeIn>
            <FadeIn
              delay={0.7}
              className="md:col-span-3 rounded-2xl overflow-hidden group"
            >
              <img
                src="/arka-grand/image-11.jpeg"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                alt="Clubhouse Area"
              />
            </FadeIn>
            <FadeIn
              delay={0.8}
              className="md:col-span-3 rounded-2xl overflow-hidden group"
            >
              <img
                src="/arka-grand/image-12.jpeg"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                alt="Plot Dimensions"
              />
            </FadeIn>
            <FadeIn
              delay={0.9}
              className="md:col-span-3 rounded-2xl overflow-hidden group"
            >
              <img
                src="/arka-grand/image-13.jpeg"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                alt="Site Development"
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* --- 8. FINAL CTA (Solid Premium Action) --- */}
      <section className="py-16 px-6 md:px-12 bg-[#fbfbfd]">
        <div className="max-w-[1400px] mx-auto bg-[#11123A] rounded-2xl p-10 md:p-16 text-center shadow-[0_30px_60px_rgba(17,18,58,0.3)] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#ffffff]/10 rounded-2xl blur-[80px] pointer-events-none" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-[64px] font-black tracking-tighter text-[#ffffff] mb-4 leading-[1.05]">
              Ready to build <br />
              your dream home?
            </h2>
            <p className="text-[#ffffff]/70 font-medium text-lg md:text-xl mb-8">
              Book your plot at ARKA GRAND today. Available in 30x40, 30x50,
              40x40, and 40x50 configurations.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href="tel:9019800009"
                className="bg-[#ffffff] text-[#11123A] px-12 py-5 rounded-2xl font-bold text-sm tracking-widest uppercase hover:bg-[#808080] hover:text-[#ffffff] transition-all w-full sm:w-auto text-center flex items-center justify-center gap-3 shadow-xl"
              >
                <Phone size={18} fill="currentColor" /> 90198 00009
              </a>
              <button
                onClick={openBookVisit}
                className="bg-transparent border border-[#ffffff]/30 text-[#ffffff] px-12 py-5 rounded-2xl font-bold text-sm tracking-widest uppercase flex items-center justify-center gap-3 hover:bg-[#ffffff]/10 transition-all w-full sm:w-auto"
              >
                Book Site Visit
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
