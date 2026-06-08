import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { PageHero } from "@/components/seo/page-hero";
import { SeoShell } from "@/components/seo/seo-shell";
import { business } from "@/lib/business";
import { seoAreas } from "@/lib/seo/areas";
import { absoluteUrl } from "@/lib/seo/pages";

export const metadata: Metadata = {
  title: `House Cleaning Service Areas | ${business.serviceRegionShort}`,
  description: `Residential & commercial cleaning in ${business.serviceRegion}. Hales Corners, Greenfield, West Allis, Muskego & more. Call ${business.phone}.`,
  alternates: { canonical: absoluteUrl("/areas") },
};

export default function AreasIndexPage() {
  return (
    <SeoShell>
      <PageHero
        eyebrow="Service Areas"
        title={`House Cleaning in ${business.serviceRegionShort}`}
        description={`Based at ${business.address.full}, we travel throughout ${business.serviceRegion} for residential and commercial cleaning.`}
      />
      <div className="container-narrow py-12 sm:py-16">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Service Areas" },
          ]}
        />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {seoAreas.map((area) => (
            <li key={area.slug}>
              <Link
                href={`/areas/${area.slug}`}
                className="group flex h-full items-start gap-3 rounded-2xl border border-border bg-card p-5 shadow-sm transition-all hover:border-primary/30 hover:shadow-md"
              >
                <MapPin
                  className="mt-0.5 size-5 shrink-0 text-primary"
                  aria-hidden
                />
                <div>
                  <h2 className="font-semibold group-hover:text-primary">
                    {area.city}, {area.state}
                  </h2>
                  <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                    {area.intro}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                    View area
                    <ArrowRight className="size-4" />
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </SeoShell>
  );
}
