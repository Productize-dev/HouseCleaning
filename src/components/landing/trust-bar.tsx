"use client";

import { Award, Calendar, MapPin, ShieldCheck, Sparkles } from "lucide-react";

import { FadeIn, StaggerChildren, StaggerItem } from "@/components/motion/fade-in";
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
      className="relative overflow-hidden border-y border-primary/10 bg-white py-16"
    >
      <div className="dot-pattern pointer-events-none absolute inset-0 opacity-30" />
      <div className="container-narrow relative">
        <StaggerChildren className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trustPoints.map((point) => {
            const Icon = iconMap[point.icon] ?? Award;
            return (
              <StaggerItem key={point.title}>
                <div className="group h-full rounded-2xl border border-border/80 bg-gradient-to-br from-white to-secondary/50 p-6 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)]">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-fresh text-white shadow-md transition-transform group-hover:scale-110">
                    <Icon className="size-5" aria-hidden />
                  </div>
                  <h3 className="mt-4 font-semibold">{point.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {point.description}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerChildren>

        <FadeIn className="mt-10 text-center" delay={0.3}>
          <p className="text-sm text-muted-foreground">
            Residential house cleaning · {business.address.city} &amp;{" "}
            {business.serviceRegionShort} ·{" "}
            <a
              href={business.nextdoorUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-primary hover:underline"
            >
              Top-rated on Nextdoor
            </a>
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
