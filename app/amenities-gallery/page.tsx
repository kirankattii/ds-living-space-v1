import React from 'react';
import { Metadata } from 'next';
import GalleryHero from '@/components/gallery/GalleryHero';
import GalleryIntro from '@/components/gallery/GalleryIntro';
import GalleryAmenitiesLeisure from '@/components/gallery/GalleryAmenitiesLeisure';
import GalleryAmenitiesFitness from '@/components/gallery/GalleryAmenitiesFitness';
import GalleryMidCTA from '@/components/gallery/GalleryMidCTA';
import GalleryAmenitiesFamilyNature from '@/components/gallery/GalleryAmenitiesFamilyNature';
import GalleryInfrastructure from '@/components/gallery/GalleryInfrastructure';
import GalleryShowcase from '@/components/gallery/GalleryShowcase';
import GalleryConclusion from '@/components/gallery/GalleryConclusion';
import GalleryFinalCTA from '@/components/gallery/GalleryFinalCTA';

export const metadata: Metadata = {
  title: "Amenities & Lifestyle | DS Living Spaces Projects",
  description: "Explore modern amenities including clubhouse, pool, parks, and more in our premium plotted developments.",
  openGraph: {
    title: "Amenities at DS Living Spaces",
    description: "Modern lifestyle amenities for comfortable living.",
  },
  alternates: {
    canonical: '/amenities-gallery',
  },
};

const AmenitiesGalleryPage = () => {
  return (
    <main className="bg-white min-h-screen">
      <GalleryHero />
      <GalleryIntro />
      <GalleryAmenitiesLeisure />
      <GalleryAmenitiesFitness />
      <GalleryMidCTA />
      <GalleryAmenitiesFamilyNature />
      <GalleryInfrastructure />
      <GalleryShowcase />
      <GalleryConclusion />
      <GalleryFinalCTA />
    </main>
  );
};

export default AmenitiesGalleryPage;
