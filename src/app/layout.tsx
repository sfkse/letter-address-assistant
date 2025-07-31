import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "How to Write an Address on an Envelope (USPS Format)",
  description:
    "Interactive envelope formatter that helps you correctly format and visualize USPS mailing addresses. Learn proper address formatting with real-time preview and USPS standards compliance.",
  keywords: [
    "address formatting",
    "envelope format",
    "USPS standards",
    "mail address",
    "postal format",
  ],
  authors: [{ name: "Letter Address" }],
  robots: "index, follow",
  openGraph: {
    title: "How to Write an Address on an Envelope (USPS Format)",
    description:
      "Interactive envelope formatter that helps you correctly format and visualize USPS mailing addresses.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Write an Address on an Envelope (USPS Format)",
    description:
      "Interactive envelope formatter that helps you correctly format and visualize USPS mailing addresses.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
