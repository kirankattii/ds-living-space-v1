import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "DS Living Spaces | Premium Real Estate in Bangalore",
    template: "%s | DS Living Spaces"
  },
  description: "DS Living Spaces offers premium villa plots and gated community plots in Bangalore near Sarjapur with modern amenities.",
  keywords: ["villa plots in Bangalore", "plots near Sarjapur", "gated community plots Bangalore", "DS Living Spaces"],
  authors: [{ name: "DS Living Spaces" }],
  creator: "DS Living Spaces",
  publisher: "DS Living Spaces",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://dslivingspaces.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "DS Living Spaces | Premium Real Estate in Bangalore",
    description: "DS Living Spaces offers premium villa plots and gated community plots in Bangalore near Sarjapur.",
    url: 'https://dslivingspaces.com',
    siteName: 'DS Living Spaces',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "DS Living Spaces | Premium Real Estate in Bangalore",
    description: "DS Living Spaces offers premium villa plots and gated community plots in Bangalore near Sarjapur.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import { ModalProvider } from "@/context/ModalContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans" suppressHydrationWarning>
        <ModalProvider>
          <Navbar />
          {children}
          <Footer />
          <WhatsAppButton />
        </ModalProvider>
      </body>
    </html>
  );
}
