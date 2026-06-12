"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Bath,
  Building2,
  Home,
  Layers,
  LayoutGrid,
  PawPrint,
  Refrigerator,
  Sparkles,
  SquareStack,
  Stethoscope,
  Wrench,
} from "lucide-react";

import { FadeIn } from "@/components/motion/fade-in";
import { SectionHeader } from "@/components/landing/section-header";
import { buttonVariants } from "@/components/ui/button";
import {
  business,
  commercialServices,
  residentialServices,
} from "@/lib/business";
import {
  commercialFeaturedImages,
  commercialSecondaryImages,
  stockImages,
  type StockImage,
} from "@/lib/images";
import { seoServices } from "@/lib/seo/services";
import { cn } from "@/lib/utils";

const residentialIcons = [
  Home,
  Sparkles,
  Refrigerator,
  Bath,
  Layers,
  SquareStack,
  LayoutGrid,
];
const commercialIcons = [
  Building2,
  Bath,
  Building2,
  Sparkles,
  Wrench,
  Stethoscope,
  Sparkles,
  PawPrint,
];

const slugByTitle: Record<string, string> = {
  ...Object.fromEntries(seoServices.map((s) => [s.title, s.slug])),
  "Office Cleaning": "commercial-cleaning",
  "Commercial Restroom Cleaning": "commercial-restroom-cleaning",
  "Retail & Small Business": "commercial-cleaning",
  "Commercial Deep Cleaning": "commercial-cleaning",
  "Building Maintenance": "building-maintenance-cleaning",
  "Clinic Cleaning": "medical-clinic-cleaning",
  "Dental Clinic Cleaning": "dental-clinic-cleaning",
  "Veterinary Clinic Cleaning": "veterinary-clinic-cleaning",
};

const featuredImages = [
  stockImages.bedroomCleaning,
  stockImages.bathroomMirror,
  stockImages.livingRoomDetail,
];

type ServiceItem =
  | (typeof residentialServices)[number]
  | (typeof commercialServices)[number];

function ServiceCard({
  service,
  icon: Icon,
  index,
  image,
  showLink = true,
}: {
  service: ServiceItem;
  icon: typeof Home;
  index: number;
  image?: StockImage;
  showLink?: boolean;
}) {
  const slug = slugByTitle[service.title];

  if (image) {
    const featured = service.featured;
    return (
      <FadeIn delay={index * 0.1}>
        <article
          className={cn(
            "group relative h-full overflow-hidden border border-border bg-card transition-all duration-300 hover:-translate-y-1",
            featured
              ? "rounded-3xl shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)]"
              : "rounded-2xl hover:border-primary/30 hover:shadow-md"
          )}
        >
          <div
            className={cn(
              "relative overflow-hidden",
              featured ? "aspect-[16/10]" : "aspect-[16/9]"
            )}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-foreground/40" />
            <div className="absolute bottom-4 left-4 flex size-12 items-center justify-center rounded-xl border border-border bg-white text-primary shadow-lg">
              <Icon className="size-6" aria-hidden />
            </div>
          </div>
          <div className={cn(featured ? "p-6" : "p-5")}>
            <h3 className={cn(featured ? "text-xl" : "text-base", "font-semibold")}>
              {service.title}
            </h3>
            <p
              className={cn(
                "mt-2 text-muted-foreground",
                featured ? "leading-relaxed" : "text-sm"
              )}
            >
              {service.description}
            </p>
            {showLink && slug && (
              <Link
                href={`/services/${slug}`}
                className="mt-3 inline-flex text-sm font-semibold text-primary hover:underline"
              >
                Learn more →
              </Link>
            )}
            <span className="sr-only">{service.keywords}</span>
          </div>
        </article>
      </FadeIn>
    );
  }

  return (
    <FadeIn delay={0.2 + index * 0.05}>
      <article className="group h-full overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-primary/30 hover:shadow-md">
        <div className="p-6">
          <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <Icon className="size-5" aria-hidden />
          </div>
          <h3 className="mt-4 font-semibold">{service.title}</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            {service.description}
          </p>
          {showLink && slug && (
            <Link
              href={`/services/${slug}`}
              className="mt-3 inline-flex text-sm font-semibold text-primary hover:underline"
            >
              Learn more →
            </Link>
          )}
        </div>
      </article>
    </FadeIn>
  );
}

export function Services() {
  const resFeatured = residentialServices.filter((s) => s.featured);
  const resOther = residentialServices.filter((s) => !s.featured);
  const comFeatured = commercialServices.filter((s) => s.featured);
  const comOther = commercialServices.filter((s) => !s.featured);

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="section-padding relative overflow-hidden bg-secondary/30"
    >
      <div className="container-narrow relative">
        <SectionHeader
          id="services-heading"
          eyebrow="Our Services"
          title="Residential & Commercial Cleaning"
          description={`Homes and businesses across ${business.serviceRegion} — routine maintenance, deep cleans, organizing, and commercial facilities. Supplies included on every visit.`}
        />

        <div className="mt-16">
          <h3 className="flex items-center gap-2 text-xl font-semibold">
            <Home className="size-5 text-primary" aria-hidden />
            Residential Cleaning
          </h3>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {resFeatured.map((service, index) => (
              <ServiceCard
                key={service.title}
                service={service}
                icon={residentialIcons[index] ?? Sparkles}
                index={index}
                image={featuredImages[index]}
              />
            ))}
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {resOther.map((service, index) => (
              <ServiceCard
                key={service.title}
                service={service}
                icon={residentialIcons[index + 3] ?? Sparkles}
                index={index}
              />
            ))}
          </div>
        </div>

        <div className="mt-16 border-t border-border pt-16">
          <h3 className="flex items-center gap-2 text-xl font-semibold">
            <Building2 className="size-5 text-primary" aria-hidden />
            Commercial Cleaning
          </h3>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {comFeatured.map((service, index) => (
              <ServiceCard
                key={service.title}
                service={service}
                icon={commercialIcons[index] ?? Building2}
                index={index}
                image={commercialFeaturedImages[index]}
                showLink={!!slugByTitle[service.title]}
              />
            ))}
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {comOther.map((service, index) => (
              <ServiceCard
                key={service.title}
                service={service}
                icon={commercialIcons[index + 2] ?? Sparkles}
                index={index}
                image={commercialSecondaryImages[index]}
                showLink={!!slugByTitle[service.title]}
              />
            ))}
          </div>
        </div>

        <FadeIn className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href={business.phoneHref}
            className={cn(
              buttonVariants({ size: "lg" }),
              "bg-primary text-primary-foreground hover:bg-primary/90"
            )}
          >
            Get a Free Estimate
          </a>
          <Link
            href="/services"
            className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
          >
            View All Services
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
