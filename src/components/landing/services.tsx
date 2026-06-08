"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Bath,
  Home,
  Layers,
  LayoutGrid,
  Refrigerator,
  Sparkles,
  SquareStack,
} from "lucide-react";

import { FadeIn } from "@/components/motion/fade-in";
import { SectionHeader } from "@/components/landing/section-header";
import { buttonVariants } from "@/components/ui/button";
import { business, services } from "@/lib/business";
import { stockImages } from "@/lib/images";
import { seoServices } from "@/lib/seo/services";
import { cn } from "@/lib/utils";

const icons = [
  Home,
  Sparkles,
  Refrigerator,
  Bath,
  Layers,
  SquareStack,
  LayoutGrid,
];

const slugByTitle = Object.fromEntries(
  seoServices.map((s) => [s.title, s.slug])
);

const featuredImages = [
  stockImages.bedroomCleaning,
  stockImages.bathroomMirror,
  stockImages.livingRoomDetail,
];

export function Services() {
  const featured = services.filter((s) => s.featured);
  const other = services.filter((s) => !s.featured);

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="section-padding relative overflow-hidden bg-gradient-to-b from-secondary/40 to-background"
    >
      <div className="pointer-events-none absolute right-0 top-0 size-[500px] rounded-full bg-fresh/10 blur-3xl" />

      <div className="container-narrow relative">
        <SectionHeader
          id="services-heading"
          eyebrow="Residential Services"
          title="House Cleaning Services in Hales Corners"
          description="Every service is designed for homes — from routine maintenance to deep cleans and organizing. We bring supplies, care, and consistency to every room."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {featured.map((service, index) => {
            const Icon = icons[index] ?? Sparkles;
            const image = featuredImages[index] ?? stockImages.mirrorDetail;
            return (
              <FadeIn key={service.title} delay={index * 0.1}>
                <article className="group relative h-full overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)]">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent" />
                    <div className="absolute bottom-4 left-4 flex size-12 items-center justify-center rounded-xl bg-white/90 text-primary shadow-lg backdrop-blur-sm">
                      <Icon className="size-6" aria-hidden />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                    <p className="mt-2 leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>
                    <Link
                      href={`/services/${slugByTitle[service.title] ?? ""}`}
                      className="mt-4 inline-flex text-sm font-semibold text-primary hover:underline"
                    >
                      Learn more →
                    </Link>
                    <span className="sr-only">{service.keywords}</span>
                  </div>
                </article>
              </FadeIn>
            );
          })}
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {other.map((service, index) => {
            const Icon = icons[index + 3] ?? Sparkles;
            return (
              <FadeIn key={service.title} delay={0.2 + index * 0.05}>
                <article className="group h-full overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-primary/30 hover:shadow-md">
                  <div className="h-1 bg-gradient-to-r from-primary via-fresh to-brand opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="p-6">
                    <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="size-5" aria-hidden />
                    </div>
                    <h3 className="mt-4 font-semibold">{service.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                </article>
              </FadeIn>
            );
          })}
        </div>

        <FadeIn className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href={business.phoneHref}
            className={cn(
              buttonVariants({ size: "lg" }),
              "bg-primary text-primary-foreground hover:bg-primary/90"
            )}
          >
            Get a Free Home Estimate
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
