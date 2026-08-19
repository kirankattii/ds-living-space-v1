import { Metadata } from "next";
import Hero from "@/components/home/Hero";
import Intro from "@/components/home/Intro";
import About from "@/components/home/About";
import WhyInvest from "@/components/home/WhyInvest";
import MidCTA from "@/components/home/MidCTA";
import ProjectHighlight from "@/components/home/ProjectHighlight";
import Lifestyle from "@/components/home/Lifestyle";
import InvestmentAdvantage from "@/components/home/InvestmentAdvantage";
import FAQ from "@/components/home/FAQ";
import FinalCTA from "@/components/home/FinalCTA";

export const metadata: Metadata = {
  title: "Premium Villa Plots in Bangalore | DS Living Spaces",
  description: "Buy premium villa plots in Bangalore near Sarjapur. Gated community plots with modern amenities. Book your site visit today.",
  keywords: ["villa plots in Bangalore", "plots near Sarjapur", "gated community plots Bangalore"],
  openGraph: {
    title: "Premium Villa Plots in Bangalore",
    description: "Explore premium villa plots with world-class amenities in Bangalore.",
    images: ["/home.jpg"], // Assuming this image exists in public folder
  },
  alternates: {
    canonical: '/',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateAgent',
  name: 'DS Living Spaces',
  url: 'https://dslivingspaces.com',
  logo: 'https://dslivingspaces.com/logo.png', // Assuming logo exists
  description: 'Premium villa plots and gated community plots in Bangalore.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Bangalore',
    addressRegion: 'Karnataka',
    addressCountry: 'IN'
  },
  sameAs: [
    'https://www.facebook.com/dslivingspaces',
    'https://www.instagram.com/dslivingspaces'
  ]
};

export default function Home() {
  return (
    <div className="bg-off-white text-dark font-sans antialiased selection:bg-green-500 selection:text-white overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <Intro />
      <About />
      <WhyInvest />
      <MidCTA />
      <ProjectHighlight />
      <Lifestyle />
      <InvestmentAdvantage />
      <FAQ />
      <FinalCTA />
    </div>
  );
}
