import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Complete Guide: How to Write an Address on an Envelope (USPS Format)",
  description:
    "Comprehensive guide to proper envelope addressing and formatting. Learn USPS standards, professional presentation tips, common mistakes to avoid, and creative approaches to envelope writing.",
  keywords: [
    "how to write envelope address",
    "USPS envelope format",
    "how to write an address",
    "how to write an address on an envelope",
    "mail addressing guide",
    "envelope writing tutorial",
    "postal address format",
    "envelope etiquette",
    "business envelope format",
  ],
  authors: [{ name: "Letter Address" }],
  robots: "index, follow",
  openGraph: {
    title: "Complete Guide: How to Write an Address on an Envelope",
    description:
      "Learn proper envelope addressing with our comprehensive USPS-compliant guide. Includes formatting rules, professional tips, and common mistakes to avoid.",
    type: "article",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Complete Guide: How to Write an Address on an Envelope",
    description:
      "Learn proper envelope addressing with our comprehensive USPS-compliant guide.",
  },
};

export default function HowToLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
