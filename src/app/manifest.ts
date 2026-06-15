import type { MetadataRoute } from "next";

import { business } from "@/lib/business";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: business.name,
    short_name: business.shortName,
    description: business.tagline,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#1a4d3e",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "48x48 96x96 192x192",
        type: "image/x-icon",
      },
      {
        src: "/icon.png",
        sizes: "96x96",
        type: "image/png",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
