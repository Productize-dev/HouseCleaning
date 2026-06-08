import type { MetadataRoute } from "next";

import { siteUrl } from "@/lib/business";
import { getAllSeoPages } from "@/lib/seo/pages";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const home: MetadataRoute.Sitemap[number] = {
    url: siteUrl,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 1,
  };

  const seoPages = getAllSeoPages().map((page) => ({
    url: `${siteUrl}${page.path}`,
    lastModified: now,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));

  return [home, ...seoPages];
}
