import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { ContentBlocks } from "@/components/seo/content-blocks";
import { JsonLd } from "@/components/seo/json-ld";
import { PageHero } from "@/components/seo/page-hero";
import { SeoShell } from "@/components/seo/seo-shell";
import {
  getAllAreaSlugs,
  getAreaBySlug,
  getOtherAreas,
} from "@/lib/seo/areas";
import { absoluteUrl } from "@/lib/seo/pages";
import { seoServices } from "@/lib/seo/services";
import {
  areaPageJsonLd,
  breadcrumbJsonLd,
  faqPageJsonLd,
} from "@/lib/structured-data";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllAreaSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const area = getAreaBySlug(slug);
  if (!area) return {};

  const url = absoluteUrl(`/areas/${slug}`);

  return {
    title: area.metaTitle,
    description: area.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: area.metaTitle,
      description: area.metaDescription,
      url,
    },
  };
}

export default async function AreaPage({ params }: PageProps) {
  const { slug } = await params;
  const area = getAreaBySlug(slug);
  if (!area) notFound();

  const url = absoluteUrl(`/areas/${slug}`);
  const otherAreas = getOtherAreas(slug, 5).map((a) => ({
    href: `/areas/${a.slug}`,
    label: `${a.city}, WI`,
  }));
  const serviceLinks = seoServices.slice(0, 4).map((s) => ({
    href: `/services/${s.slug}`,
    label: s.title,
  }));

  const jsonLd = [
    breadcrumbJsonLd([
      { name: "Home", url: absoluteUrl("/") },
      { name: "Service Areas", url: absoluteUrl("/areas") },
      { name: `${area.city}, ${area.state}`, url },
    ]),
    areaPageJsonLd({
      city: area.city,
      description: area.metaDescription,
      url,
    }),
    faqPageJsonLd(area.faqs),
  ];

  return (
    <SeoShell>
      <JsonLd data={jsonLd} />
      <PageHero
        eyebrow={`${area.city}, ${area.state}`}
        title={area.h1}
        description={area.intro}
      />
      <div className="container-narrow -mt-4 pb-4">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Service Areas", href: "/areas" },
            { label: `${area.city}, ${area.state}` },
          ]}
        />
      </div>
      <ContentBlocks
        intro={area.intro}
        localNote={area.localNote}
        faqs={area.faqs}
        relatedGroups={[
          { title: "Our services", links: serviceLinks },
          { title: "Nearby areas", links: otherAreas },
        ]}
        relatedTitle="Services & nearby areas"
      />
    </SeoShell>
  );
}
