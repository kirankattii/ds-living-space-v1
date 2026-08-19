import React from 'react';
import { Metadata } from 'next';
import ProjectHero from '@/components/project/ProjectHero';
import ProjectOverview from '@/components/project/ProjectOverview';
import ProjectVision from '@/components/project/ProjectVision';
import ProjectAmenities from '@/components/project/ProjectAmenities';
import ProjectInfrastructure from '@/components/project/ProjectInfrastructure';
import ProjectGallery from '@/components/project/ProjectGallery';
import ProjectLocation from '@/components/project/ProjectLocation';
import ProjectInvestment from '@/components/project/ProjectInvestment';
import ProjectCTA from '@/components/project/ProjectCTA';

export const metadata: Metadata = {
  title: "Bird Song Villa Plots in Sarjapur | Premium Gated Community | DS Living Spaces",
  description: "Discover premium villa plots in Bird Song, Sarjapur. A RERA-approved gated community featuring a clubhouse, swimming pool, and modern amenities. Ready to register.",
  keywords: [
    "plots in Sarjapur", 
    "Bird Song villa plots", 
    "gated plots Bangalore", 
    "Sarjapur real estate", 
    "DS Living Spaces Bangalore",
    "villa plots near The Empyrean",
    "ready to register plots Sarjapur"
  ],
  openGraph: {
    title: "Bird Song Villa Plots in Sarjapur | DS Living Spaces",
    description: "Invest in premium villa plots near Sarjapur with world-class lifestyle amenities and a ready-to-construct ecosystem.",
    images: ["/song-bird1.jpeg"],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Bird Song Villa Plots in Sarjapur | DS Living Spaces",
    description: "Premium villa plots in a gated community in Sarjapur, Bangalore.",
    images: ["/song-bird1.jpeg"],
  },
  alternates: {
    canonical: '/projects/bird-song-yash-value-spaces',
  },
};

const ProjectPage = () => {
  return (
    <main className="bg-white min-h-screen">
      <ProjectHero />
      <ProjectOverview />
      <ProjectVision />
      <ProjectAmenities />
      <ProjectInfrastructure />
      <ProjectGallery />
      <ProjectLocation />
      <ProjectInvestment />
      <ProjectCTA />
    </main>
  );
};

export default ProjectPage;
