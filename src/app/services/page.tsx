import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { PageHero } from "@/components/seo/page-hero";
import { SeoShell } from "@/components/seo/seo-shell";
import { business } from "@/lib/business";
import { absoluteUrl } from "@/lib/seo/pages";
import { seoServices } from "@/lib/seo/services";

export const metadata: Metadata = {
  title: "House Cleaning Services | Hales Corners WI",
  description: `Residential & commercial cleaning — regular, deep, kitchen, bathroom, offices & restrooms. ${business.shortName} serves ${business.serviceRegion}. Call ${business.phone}.`,
  alternates: { canonical: absoluteUrl("/services") },
};

export default function ServicesIndexPage() {
  return (
    <SeoShell>
      <PageHero
        eyebrow="All Services"
        title="Residential & Commercial Cleaning Services"
        description={`Homes and businesses in Hales Corners and ${business.serviceRegion} — routine maintenance, deep cleans, organizing, and commercial facilities.`}
      />
      <div className="container-narrow py-12 sm:py-16">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Services" },
          ]}
        />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {seoServices.map((service) => (
            <li key={service.slug}>
              <Link
                href={`/services/${service.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-[var(--shadow-card-hover)]"
              >
                <h2 className="text-lg font-semibold group-hover:text-primary">
                  {service.title}
                </h2>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">
                  {service.metaDescription}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                  Learn more
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </SeoShell>
  );
}
