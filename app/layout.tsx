import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
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
});

export const metadata: Metadata = {
  title: "Heva — Kaubavedude platvorm Eestis",
  description:
    "Heva ühendab kaubasaatjad ja vedajad reaalajas. Telli vedu minutitega, jälgi kaupa kaardil, maks toimub automaatselt. Bolt, aga kaubale.",
  keywords: ["kaubavedude platvorm", "vedu", "kaubavedajad", "logistika Eesti", "heva"],
  authors: [{ name: "Heva OÜ" }],
  creator: "Heva OÜ",
  metadataBase: new URL("https://heva.me"),
  openGraph: {
    title: "Heva — Kaup kohale. Lihtsalt ja kiiresti.",
    description:
      "Heva ühendab sind lähima vaba vedajaga minutitega. Kaubasaatjatele ja vedajatele — üks äpp, null bürokraatiat.",
    url: "https://heva.me",
    siteName: "Heva",
    locale: "et_EE",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Heva — Kaubavedude platvorm Eestis",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Heva — Kaup kohale. Lihtsalt ja kiiresti.",
    description: "Kaubavedude platvorm Eestis. Telli vedu minutitega.",
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
        {children}
      </body>
    </html>
  );
}
