import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import Script from "next/script";
import { LanguageProvider } from "@/lib/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DeferredOverlays from "@/components/DeferredOverlays";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const dmSerifDisplay = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: {
    default: "Heva - Kaup kohale. Lihtsalt ja kiiresti.",
    template: "%s | Heva",
  },
  description: "Heva ühendab sind lähima vaba vedajaga minutitega.",
  keywords: ["kaubavedude platvorm", "vedu", "kaubavedajad", "logistika Eesti", "heva", "freight", "delivery Estonia"],
  authors: [{ name: "Heva OÜ" }],
  creator: "Heva OÜ",
  metadataBase: new URL("https://heva.me"),
  openGraph: {
    title: "Heva - Kaup kohale. Lihtsalt ja kiiresti.",
    description: "Heva ühendab sind lähima vaba vedajaga minutitega.",
    url: "https://heva.me",
    siteName: "Heva",
    locale: "et_EE",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1080,
        height: 1080,
        alt: "Heva - Kaup kohale. Lihtsalt ja kiiresti.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Heva - Kaup kohale. Lihtsalt ja kiiresti.",
    description: "Heva ühendab sind lähima vaba vedajaga minutitega.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "https://heva.me",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="et"
      className={`${dmSans.variable} ${dmSerifDisplay.variable}`}
    >
      <body
        className="min-h-full flex flex-col antialiased"
        style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
      >
        <Script id="ld-org" type="application/ld+json" strategy="beforeInteractive">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Heva",
          legalName: "Heva OÜ",
          url: "https://heva.me",
          logo: "https://heva.me/logo-blue.png",
          email: "info@heva.me",
          telephone: "+372 510 0017",
          areaServed: "EE",
          sameAs: [
            "https://apps.apple.com/ee/app/heva-client/id6762511309",
            "https://play.google.com/store/apps/details?id=me.heva.customer",
          ],
        })}</Script>
        <Script id="ld-website" type="application/ld+json" strategy="beforeInteractive">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Heva",
          url: "https://heva.me",
          inLanguage: ["et-EE", "en"],
        })}</Script>
        <LanguageProvider initialLang="et">
          <Navbar />
          {children}
          <Footer />
          <DeferredOverlays />
        </LanguageProvider>
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="lazyOnload"
            />
            <Script id="ga-init" strategy="lazyOnload">{`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
            `}</Script>
          </>
        )}
      </body>
    </html>
  );
}
