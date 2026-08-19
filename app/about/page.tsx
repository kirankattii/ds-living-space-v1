import React from 'react';
import { Metadata } from 'next';
import AboutHero from '@/components/about/AboutHero';
import AboutStory from '@/components/about/AboutStory';
import AboutServices from '@/components/about/AboutServices';
import AboutVision from '@/components/about/AboutVision';
import AboutTrust from '@/components/about/AboutTrust';
import AboutExpertise from '@/components/about/AboutExpertise';
import AboutProjectSpotlight from '@/components/about/AboutProjectSpotlight';
import AboutApproach from '@/components/about/AboutApproach';
import AboutCommitment from '@/components/about/AboutCommitment';
import AboutFinalCTA from '@/components/about/AboutFinalCTA';

export const metadata: Metadata = {
  title: "About DS Living Spaces | Real Estate Experts in Bangalore",
  description: "Learn about DS Living Spaces, a trusted real estate company offering premium plots in Bangalore.",
  openGraph: {
    title: "About DS Living Spaces",
    description: "Trusted real estate company in Bangalore.",
  },
  alternates: {
    canonical: '/about',
  },
};

const AboutPage = () => {
  return (
    <main className="bg-white min-h-screen">
      <AboutHero />
      <AboutStory />
      <AboutServices />
      <AboutVision />
      <AboutTrust />
      <AboutExpertise />
      <AboutProjectSpotlight />
      <AboutApproach />
      <AboutCommitment />
      <AboutFinalCTA />
    </main>
  );
};

export default AboutPage;
