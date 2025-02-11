import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Navbar } from "@/components/ui";
import Footer from "@/components/ui/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://balajihitech.com"),
  title: {
    default:
      "Balaji Hi-Tech Garments - Premium Baby & Mother Care Products Manufacturing",
    template: "%s | Balaji Hi-Tech Garments",
  },
  description:
    "Premium garment manufacturing for babies and mothers. Specializing in reusable cloth diapers, nappies, and sustainable baby care products.",
  keywords: [
    "baby clothes",
    "mother care",
    "cloth diapers",
    "reusable diapers",
    "sustainable baby products",
    "Ichalkaranji garments",
  ],
  authors: [{ name: "Balaji Hi-Tech Garments" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://balajihitech.com",
    siteName: "Balaji Hi-Tech Garments",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@balajihitech",
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://balajihitech.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
