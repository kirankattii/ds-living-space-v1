"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Trees,
  ArrowRight,
  FileText,
  Users,
  MapPin,
} from "lucide-react";
import FadeIn from "./FadeIn";

const projects = [
  {
    id: "arka-grand",
    title: "ARKA GRAND.",
    tagline: "The Development",
    description:
      "Premium villa plots for a grand life in Attibele–Jigala. Prime Location next to the proposed Swift City IT Hub.",
    image: "/arka-grand/image-5.jpeg",
    features: [
      { label: "Gated Community", icon: <ShieldCheck size={16} /> },
      { label: "Strategic Location", icon: <MapPin size={16} /> },
    ],
    details: [
      { label: "Sizes", value: "1200 - 2000 sq.ft" },
      {
        label: "Status",
        value: "Ready to Register",
        statusColor: "text-green-400",
      },
      { label: "Pricing", value: "₹5,499/sq.ft" },
    ],
    link: "/projects/arka-grand",
    brochure: null,
    community: "Growing Community",
    communityDesc: "Secure your future in Attibele.",
  },
  {
    id: "bird-song",
    title: "Bird Song.",
    tagline: "The Development",
    description:
      "Premium villa plots inside The Empyrean. A ready-to-construct ecosystem merging nature with modern infrastructure.",
    image: "/song-bird1.jpeg",
    features: [
      { label: "24/7 Security", icon: <ShieldCheck size={16} /> },
      { label: "Green Belts", icon: <Trees size={16} /> },
    ],
    details: [
      { label: "Sizes", value: "1200 - 3000 sq.ft" },
      {
        label: "Status",
        value: "Ready to Register",
        statusColor: "text-green-400",
      },
      { label: "Pricing", value: "₹42L Onwards" },
    ],
    link: "/projects/bird-song-yash-value-spaces",
    brochure: "/BIRD%20SONG%20BROCHURE.pdf",
    community: "Join 100+ Families",
    communityDesc: "A thriving community awaits you.",
  },
  {
    id: "the-meadows",
    title: "The Meadows.",
    tagline: "The Development",
    description:
      "Premium gated community plots in Taliparamba, Kerala. A perfect blend of peace & connectivity in a secure environment.",
    image: "/meados/meados-gateway.jpeg",
    features: [
      { label: "Gated Community", icon: <ShieldCheck size={16} /> },
      { label: "Strategic Location", icon: <MapPin size={16} /> },
    ],
    details: [
      { label: "Sizes", value: "Residential Plots" },
      {
        label: "Status",
        value: "Ready to Build",
        statusColor: "text-green-400",
      },
      { label: "Location", value: "Taliparamba, Kerala" },
    ],
    link: "/projects/the-meadows",
    brochure: null, // Add brochure link if available
    community: "Growing Community",
    communityDesc: "Secure your future in Taliparamba.",
  },
];

const ProjectHighlight = () => {
  return (
    <section
      id="projects"
      className="py-20 pb-10 px-6 max-w-[1400px] mx-auto space-y-10 lg:space-y-20"
    >
      {projects.map((project, index) => (
        <div key={project.id} className="relative">
          {/* --- PROJECT HEADER --- */}
          <div className="mb-10 flex flex-col md:flex-row justify-between items-end gap-6 border-b border-[#808080]/20 pb-6">
            <div>
              <span className="text-[#11123A] text-xs font-bold tracking-[0.2em] uppercase mb-2 block">
                {project.tagline}
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-[#171717] tracking-tight">
                {project.title}
              </h2>
            </div>
            <p className="text-[#808080] font-medium max-w-md text-sm md:text-base md:text-right">
              {project.description}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-auto lg:min-h-[500px]">
            {/* Main Highlight Image */}
            <div className="lg:col-span-8 rounded-2xl overflow-hidden relative group min-h-[350px] lg:min-h-full">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 800px"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#11123A]/90 via-[#11123A]/20 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 flex flex-col sm:flex-row justify-between items-end gap-4">
                <div>
                  <h3 className="text-3xl font-bold text-[#ffffff] mb-2 drop-shadow-lg">
                    Premium Living
                  </h3>
                  <div className="flex items-center gap-4 text-[#ffffff]/90 text-sm font-bold">
                    {project.features.map((feature, fIndex) => (
                      <span
                        key={fIndex}
                        className="flex items-center gap-1 bg-[#ffffff]/20 px-3 py-1 rounded-md backdrop-blur-sm"
                      >
                        {feature.icon} {feature.label}
                      </span>
                    ))}
                  </div>
                </div>
                <Link
                  href={project.link}
                  className="bg-[#ffffff] text-[#11123A] px-6 py-3 rounded-lg font-bold text-sm shadow-xl hover:bg-[#11123A] hover:text-[#ffffff] transition-all flex items-center gap-2 group/btn"
                >
                  Explore Project{" "}
                  <ArrowRight
                    size={16}
                    className="group-hover/btn:translate-x-1 transition-transform"
                  />
                </Link>
              </div>
            </div>

            {/* Details Column */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              <div className="bg-[#11123A] rounded-2xl p-8 h-full flex flex-col justify-center shadow-lg relative overflow-hidden">
                <div className="absolute -right-10 -top-10 text-[#ffffff]/5">
                  <FileText size={150} />
                </div>
                <h4 className="text-[#ffffff] text-2xl font-bold mb-6 relative z-10">
                  Key Details
                </h4>
                <ul className="space-y-4 relative z-10">
                  {project.details.map((detail, dIndex) => (
                    <li
                      key={dIndex}
                      className={`flex justify-between ${dIndex !== project.details.length - 1 ? "border-b border-[#ffffff]/10 pb-3" : "pb-3"}`}
                    >
                      <span className="text-[#ffffff]/60 text-sm font-bold uppercase">
                        {detail.label}
                      </span>
                      <span
                        className={`text-[#ffffff] font-bold ${detail.statusColor || ""}`}
                      >
                        {detail.value}
                      </span>
                    </li>
                  ))}
                </ul>
                {project.brochure && (
                  <a
                    href={project.brochure}
                    download
                    className="w-full mt-6 bg-[#ffffff]/10 hover:bg-[#ffffff]/20 border border-[#ffffff]/20 text-[#ffffff] py-3 rounded-lg font-bold text-sm transition-colors relative z-10 text-center block"
                  >
                    Download Brochure
                  </a>
                )}
                {!project.brochure && (
                  <Link
                    href={project.link}
                    className="w-full mt-6 bg-[#ffffff]/10 hover:bg-[#ffffff]/20 border border-[#ffffff]/20 text-[#ffffff] py-3 rounded-lg font-bold text-sm transition-colors relative z-10 text-center block"
                  >
                    View Details
                  </Link>
                )}
              </div>

              <div className="bg-[#ffffff] border border-[#808080]/20 rounded-2xl p-6 flex items-center gap-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-[#11123A]/5 rounded-xl flex items-center justify-center shrink-0">
                  <Users size={24} className="text-[#11123A]" />
                </div>
                <div>
                  <h4 className="font-bold text-[#171717]">
                    {project.community}
                  </h4>
                  <p className="text-[#808080] text-xs font-medium">
                    {project.communityDesc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="pt-0 text-center">
        <Link
          href="/projects"
          className="inline-flex items-center gap-4 bg-primary text-white px-12 py-5 rounded-2xl font-bold text-sm tracking-widest uppercase hover:bg-dark transition-all shadow-[0_20px_40px_rgba(17,18,58,0.15)] group"
        >
          Explore All Projects{" "}
          <ArrowRight
            size={18}
            className="group-hover:translate-x-2 transition-transform"
          />
        </Link>
      </div>
    </section>
  );
};

export default ProjectHighlight;
