import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";

import { ChatbaseWidget } from "@/components/chatbase/chatbase-widget";
import { business, siteUrl } from "@/lib/business";
import { defaultOgImage } from "@/lib/seo/metadata";
import {
  faqJsonLd,
  localBusinessJsonLd,
  webPageJsonLd,
  websiteJsonLd,
} from "@/lib/structured-data";

import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const title =
  "Cleaning Services Hales Corners WI | Fresh Cleaning Place LLC";
const description =
  `Residential & commercial cleaning across Milwaukee, Kenosha, Racine & Waukesha Counties. House cleaning, offices, deep cleans & free estimates. Call ${business.phone}.`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: `%s | ${business.shortName}`,
  },
  description,
  authors: [{ name: business.name }],
  creator: business.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: business.name,
    title,
    description,
    images: [defaultOgImage],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [defaultOgImage.url],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  category: "House Cleaning Service",
};

const jsonLd = [
  localBusinessJsonLd(),
  websiteJsonLd(),
  webPageJsonLd(),
  faqJsonLd(),
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${outfit.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans antialiased">
        <Script
          id="structured-data"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <ChatbaseWidget />
      </body>
    </html>
  );
}
