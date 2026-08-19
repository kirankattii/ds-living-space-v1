import React from 'react';
import { Metadata } from 'next';
import ProjectsHero from '@/components/projects/ProjectsHero';
import ProjectsList from '@/components/projects/ProjectsList';
import ProjectsCTA from '@/components/projects/ProjectsCTA';

export const metadata: Metadata = {
  title: "Our Projects | Premium Gated Community Plots | DS Living Spaces",
  description: "Explore DS Living Spaces' portfolio of premium gated community plots and residential developments in Bangalore and Kerala. Discover your perfect plot today.",
  keywords: ["real estate projects Bangalore", "plots in Kerala", "gated community plots", "DS Living Spaces projects", "residential plots Bangalore", "Taliparamba real estate"],
  openGraph: {
    title: "Our Projects | Premium Gated Community Plots | DS Living Spaces",
    description: "Explore our exclusive range of residential plots and gated communities in prime locations across Bangalore and Kerala.",
    images: ["/song-bird1.jpeg"],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Our Projects | Premium Gated Community Plots | DS Living Spaces",
    description: "Discover premium residential plots and gated communities by DS Living Spaces.",
    images: ["/song-bird1.jpeg"],
  },
  alternates: {
    canonical: '/projects',
  },
};

const ProjectsPage = () => {
  return (
    <main className="bg-white min-h-screen">
      <ProjectsHero />
      <ProjectsList />
      <ProjectsCTA />
    </main>
  );
};

export default ProjectsPage;
