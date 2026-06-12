import type { Metadata } from "next";

import { business, siteUrl } from "@/lib/business";

export const defaultOgImage = {
  url: "/images/team-cleaning.png",
  width: 1200,
  height: 630,
  alt: `${business.name} — residential and commercial cleaning in Hales Corners, WI`,
} as const;

export function createPageMetadata({
  title,
  description,
  path,
  ogImage = defaultOgImage,
}: {
  title: string;
  description: string;
  path: string;
  ogImage?: typeof defaultOgImage;
}): Metadata {
  const url = `${siteUrl}${path}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      title,
      description,
      url,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage.url],
    },
  };
}
