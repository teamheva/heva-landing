import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import { headers } from "next/headers";
import { LanguageProvider } from "@/lib/LanguageContext";
import type { Lang } from "@/lib/translations";
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
        width: 1200,
        height: 630,
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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const hdrs = await headers();
  const country = hdrs.get("x-vercel-ip-country") ?? "";
  const initialLang: Lang = country === "EE" ? "et" : "en";

  return (
    <html
      lang={initialLang}
      className={`${dmSans.variable} ${dmSerifDisplay.variable}`}
    >
      <body
        className="min-h-full flex flex-col antialiased"
        style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
      >
        <LanguageProvider initialLang={initialLang}>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
