import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { ContentBlocks } from "@/components/seo/content-blocks";
import { JsonLd } from "@/components/seo/json-ld";
import { PageHero } from "@/components/seo/page-hero";
import { SeoShell } from "@/components/seo/seo-shell";
import { business } from "@/lib/business";
import { commercialImages } from "@/lib/images";
import { getOtherAreas } from "@/lib/seo/areas";
import { absoluteUrl } from "@/lib/seo/pages";
import {
  getAllServiceSlugs,
  getServiceBySlug,
  seoServices,
} from "@/lib/seo/services";
import {
  breadcrumbJsonLd,
  faqPageJsonLd,
  servicePageJsonLd,
} from "@/lib/structured-data";

type PageProps = { params: Promise<{ slug: string }> };

const commercialSlugs = new Set([
  "commercial-cleaning",
  "commercial-restroom-cleaning",
]);

const serviceHeroImages: Record<string, { src: string; alt: string }> = {
  "commercial-cleaning": commercialImages.teamWalkway,
  "commercial-restroom-cleaning": commercialImages.professionalCrew,
};

export function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  const url = absoluteUrl(`/services/${slug}`);

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url,
    },
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const url = absoluteUrl(`/services/${slug}`);
  const otherServices = seoServices
    .filter((s) => s.slug !== slug)
    .slice(0, 4)
    .map((s) => ({ href: `/services/${s.slug}`, label: s.title }));
  const areaLinks = getOtherAreas("", 4).map((a) => ({
    href: `/areas/${a.slug}`,
    label: `Cleaning in ${a.city}`,
  }));

  const jsonLd = [
    breadcrumbJsonLd([
      { name: "Home", url: absoluteUrl("/") },
      { name: "Services", url: absoluteUrl("/services") },
      { name: service.title, url },
    ]),
    servicePageJsonLd({
      name: service.title,
      description: service.metaDescription,
      url,
    }),
    faqPageJsonLd(service.faqs),
  ];

  return (
    <SeoShell>
      <JsonLd data={jsonLd} />
      <PageHero
        eyebrow={
          commercialSlugs.has(slug) ? "Commercial Service" : "Residential Service"
        }
        title={service.h1}
        description={service.intro}
        image={serviceHeroImages[slug]}
      />
      <div className="container-narrow -mt-4 pb-4">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            { label: service.title },
          ]}
        />
      </div>
      <ContentBlocks
        intro={`${business.shortName} proudly serves homes and businesses in ${business.address.city} and across ${business.serviceRegion}. ${service.intro}`}
        includes={service.includes}
        benefits={service.benefits}
        faqs={service.faqs}
        relatedLinks={[...otherServices, ...areaLinks]}
        relatedTitle="Explore more"
      />
    </SeoShell>
  );
}
