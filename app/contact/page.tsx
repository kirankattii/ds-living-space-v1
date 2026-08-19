import React from 'react';
import { Metadata } from 'next';
import ContactHero from '@/components/contact/ContactHero';
import ContactFormSection from '@/components/contact/ContactFormSection';
import ContactMap from '@/components/contact/ContactMap';
import ContactFinalCTA from '@/components/contact/ContactFinalCTA';

export const metadata: Metadata = {
  title: "Contact DS Living Spaces | Book Site Visit",
  description: "Contact DS Living Spaces for premium plots in Bangalore. Call now or book your site visit.",
  openGraph: {
    title: "Contact DS Living Spaces",
    description: "Get in touch for plot booking and site visits.",
  },
  alternates: {
    canonical: '/contact',
  },
};

const ContactPage = () => {
  return (
    <main className="bg-white min-h-screen">
      <ContactHero />
      <ContactFormSection />
      <ContactMap />
      <ContactFinalCTA />
    </main>
  );
};

export default ContactPage;
