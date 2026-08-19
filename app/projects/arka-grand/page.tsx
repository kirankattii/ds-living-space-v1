import React from 'react';
import { Metadata } from 'next';
import ArkaGrand from '@/components/project/ArkaGrand';

export const metadata: Metadata = {
  title: "ARKA GRAND | Premium Villa Plots in Attibele–Jigala, Bengaluru",
  description: "Secure your future with a premium plot at ARKA GRAND, Attibele–Jigala's strategically located gated community next to Swift City IT Hub.",
  keywords: [
    "plots in Attibele",
    "ARKA GRAND Bengaluru",
    "gated community Attibele-Jigala",
    "real estate Bengaluru",
    "residential plots Bengaluru",
    "DS Living Spaces",
    "premium villa plots",
    "Swift City IT Hub"
  ],
  openGraph: {
    title: "ARKA GRAND | Premium Villa Plots in Attibele–Jigala",
    description: "Build your dream home in a secure, modern, and well-connected gated community in Bengaluru.",
    images: ["/arka-grand/image-1.jpeg"],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: "ARKA GRAND | Premium Villa Plots in Attibele–Jigala",
    description: "Invest in secure, modern community plots in Bengaluru near the proposed Swift City IT Hub.",
    images: ["/arka-grand/image-1.jpeg"],
  },
  alternates: {
    canonical: '/projects/arka-grand',
  },
};

const ProjectPage = () => {
  return (
    <main className="min-h-screen">
      <ArkaGrand />
    </main>
  );
};

export default ProjectPage;
