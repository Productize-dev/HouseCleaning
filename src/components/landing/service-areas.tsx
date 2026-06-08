"use client";

import { MapPin } from "lucide-react";

import { FadeIn } from "@/components/motion/fade-in";
import { SectionHeader } from "@/components/landing/section-header";
import { Badge } from "@/components/ui/badge";
import { business, serviceAreas } from "@/lib/business";

export function ServiceAreas() {
  return (
    <section
      id="areas"
      aria-labelledby="areas-heading"
      className="section-padding relative overflow-hidden"
    >
      <div className="pointer-events-none absolute left-0 top-1/2 size-72 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />
      <div className="container-narrow relative">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <FadeIn>
            <SectionHeader
              id="areas-heading"
              align="left"
              eyebrow="Service Areas"
              title="House Cleaning in Milwaukee County & Surroundings"
              description={`Locally based at ${business.address.street}, we proudly serve homeowners throughout ${business.serviceRegion}.`}
            />

            <p className="mt-6 leading-relaxed text-muted-foreground">
              Whether you need biweekly house cleaning in Hales Corners, a deep
              clean in West Allis, or organizing help in Muskego, our crews
              travel throughout {business.serviceRegion} with the same
              attention to detail neighbors recommend on Nextdoor.
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="rounded-3xl border border-border bg-gradient-to-br from-white to-secondary/50 p-6 shadow-[var(--shadow-card)] sm:p-8">
              <h3 className="flex items-center gap-2 text-lg font-semibold">
                <MapPin className="size-5 text-primary" aria-hidden />
                Cities We Serve
              </h3>
              <ul className="mt-5 flex flex-wrap gap-2">
                {serviceAreas.map((area) => (
                  <li key={area}>
                    <Badge
                      variant="outline"
                      className="border-primary/20 bg-primary/5 px-3 py-1.5 text-sm font-normal"
                    >
                      {area}, WI
                    </Badge>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-muted-foreground">
                Don&apos;t see your city listed? Call{" "}
                <a
                  href={business.phoneHref}
                  className="font-semibold text-primary hover:underline"
                >
                  {business.phone}
                </a>{" "}
                — we may still be able to serve your area.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
