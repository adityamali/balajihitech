import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Inria_Serif, Nunito } from "next/font/google";
import "./globals.css";

import { Navbar } from "@/components/ui";
import Footer from "@/components/ui/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";

const inriaSerif = Inria_Serif({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
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
        url: "/images/og.webp",
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
        <Script
          id="schema-organization"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
             __html: JSON.stringify({
               "@context": "https://schema.org",
               "@type": "Organization",
               name: "Balaji Hi-Tech Garments",
               url: "https://balajihitech.com",
               logo: "https://balajihitech.com/images/og.webp",
               description: "Premium garment manufacturing for babies and mothers. Specializing in reusable cloth diapers, period panties, and sustainable care products.",
               address: {
                 "@type": "PostalAddress",
                 streetAddress: "G.NO. -486, Bhatale Mala, Datt Nagar",
                 addressLocality: "Ichalkaranji",
                 postalCode: "416115",
                 addressCountry: "IN"
               },
               contactPoint: {
                 "@type": "ContactPoint",
                 telephone: "+91-9881372830",
                 contactType: "customer service",
                 email: "balajihitechg@gmail.com"
               },
               sameAs: [
                 "https://facebook.com",
                 "https://instagram.com"
               ]
             })
          }}
        />
        <Script
          id="google-analytics"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
          `}
        </Script>
      <body className={`${nunito.className} antialiased bg-background text-gray-800`}>
        <Navbar />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
