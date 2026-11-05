"use client";

import { Award, Calendar, MapPin, ShieldCheck, Sparkles } from "lucide-react";

import { FadeIn, StaggerChildren, StaggerItem } from "@/components/motion/fade-in";
import { Leaf } from "@/components/seasonal/leaf";
import { business, trustPoints } from "@/lib/business";

const iconMap = {
  map: MapPin,
  shield: ShieldCheck,
  sparkles: Sparkles,
  calendar: Calendar,
} as const;

export function TrustBar() {
  return (
    <section
      aria-label="Why customers trust us"
      className="relative overflow-hidden border-y border-border bg-white py-16 sm:py-20"
    >
      {business.showSeasonalDecor && (
        <Leaf
          variant="maple"
          tone="brand"
          className="pointer-events-none absolute right-6 top-6 size-10 opacity-15 sm:size-14"
        />
      )}

      <div className="container-narrow relative">
        <FadeIn className="mx-auto mb-12 max-w-2xl text-center">
          <p className="inline-flex rounded-full border border-brand/25 bg-accent px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand">
            Why neighbors choose us
          </p>
          <h2 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl">
            Clean homes. Clear standards.
          </h2>
          <div className="section-divider" aria-hidden />
        </FadeIn>

        <StaggerChildren className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {trustPoints.map((point) => {
            const Icon = iconMap[point.icon] ?? Award;
            return (
              <StaggerItem key={point.title}>
                <article className="group relative flex h-full flex-col border border-border bg-white p-6 transition-colors hover:border-brand/40 hover:bg-accent/40 sm:p-7">
                  <div
                    className="absolute inset-x-0 top-0 h-1 bg-brand opacity-0 transition-opacity group-hover:opacity-100"
                    aria-hidden
                  />
                  <div className="flex size-11 items-center justify-center rounded-lg border border-brand/20 bg-accent text-brand">
                    <Icon className="size-5" aria-hidden />
                  </div>
                  <h3 className="mt-5 text-base font-semibold tracking-tight">
                    {point.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {point.description}
                  </p>
                </article>
              </StaggerItem>
            );
          })}
        </StaggerChildren>

        <FadeIn className="mt-10 text-center" delay={0.3}>
          <p className="text-sm text-muted-foreground">
            Residential &amp; commercial cleaning · {business.address.city} &amp;{" "}
            {business.serviceRegionShort} ·{" "}
            <a
              href={business.nextdoorUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-brand hover:underline"
            >
              Top-rated on Nextdoor
            </a>
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
