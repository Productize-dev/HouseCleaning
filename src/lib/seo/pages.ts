import { siteUrl } from "@/lib/business";

import { getAllAreaSlugs, seoAreas } from "./areas";
import { getAllServiceSlugs, seoServices } from "./services";

export type SeoPageEntry = {
  path: string;
  title: string;
  priority: number;
  changeFrequency: "weekly" | "monthly";
};

export const seoHubPages: SeoPageEntry[] = [
  {
    path: "/services",
    title: "House Cleaning Services",
    priority: 0.9,
    changeFrequency: "weekly",
  },
  {
    path: "/areas",
    title: "Service Areas",
    priority: 0.9,
    changeFrequency: "weekly",
  },
];

export function getAllSeoPages(): SeoPageEntry[] {
  const servicePages: SeoPageEntry[] = seoServices.map((s) => ({
    path: `/services/${s.slug}`,
    title: s.title,
    priority: 0.85,
    changeFrequency: "monthly" as const,
  }));

  const areaPages: SeoPageEntry[] = seoAreas.map((a) => ({
    path: `/areas/${a.slug}`,
    title: `House Cleaning ${a.city}`,
    priority: a.isPrimary ? 0.9 : 0.8,
    changeFrequency: "monthly" as const,
  }));

  return [...seoHubPages, ...servicePages, ...areaPages];
}

export function absoluteUrl(path: string): string {
  return `${siteUrl}${path}`;
}

export { getAllAreaSlugs, getAllServiceSlugs, seoAreas, seoServices };
