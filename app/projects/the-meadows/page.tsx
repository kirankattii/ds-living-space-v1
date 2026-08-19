import React from 'react';
import { Metadata } from 'next';
import TheMeadows from '@/components/project/TheMeadows';

export const metadata: Metadata = {
  title: "The Meadows | Premium Gated Community Plots in Taliparamba, Kerala",
  description: "Secure your future with a premium plot at The Meadows, Taliparamba's most sought-after gated community. Modern amenities, strategic location, and serene living in Kerala.",
  keywords: [
    "plots in Taliparamba", 
    "The Meadows Kerala", 
    "gated community Taliparamba", 
    "real estate Kerala", 
    "residential plots Taliparamba", 
    "DS Living Spaces Kerala",
    "premium plots Kerala",
    "investment plots Taliparamba"
  ],
  openGraph: {
    title: "The Meadows | Premium Gated Community Plots in Taliparamba",
    description: "Build your dream home in a secure, modern, and well-connected gated community in the heart of Taliparamba, Kerala.",
    images: ["/meados/meados-gateway.jpeg"],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: "The Meadows | Premium Gated Community Plots in Taliparamba",
    description: "Invest in secure, modern community plots in Taliparamba, Kerala.",
    images: ["/meados/meados-gateway.jpeg"],
  },
  alternates: {
    canonical: '/projects/the-meadows',
  },
};

const ProjectPage = () => {
  return (
    <main className="min-h-screen">
      <TheMeadows />
    </main>
  );
};

export default ProjectPage;
