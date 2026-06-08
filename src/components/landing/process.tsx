"use client";

import Image from "next/image";

import {
  FadeIn,
  StaggerChildren,
  StaggerItem,
} from "@/components/motion/fade-in";
import { SectionHeader } from "@/components/landing/section-header";
import { processSteps } from "@/lib/business";
import { stockImages } from "@/lib/images";

export function Process() {
  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="section-padding relative overflow-hidden"
    >
      <div className="dot-pattern pointer-events-none absolute inset-0 opacity-15" />

      <div className="container-narrow relative">
        <div className="grid items-start gap-14 lg:grid-cols-[1fr_340px] lg:gap-16">
          <div>
            <SectionHeader
              id="process-heading"
              align="left"
              eyebrow="How It Works"
              title="Getting Started Is Simple"
              description="From your first call to a spotless home — here is what to expect when you hire Fresh Cleaning Place."
            />

            <StaggerChildren className="relative mt-12 space-y-0">
              <div
                className="absolute left-[27px] top-8 hidden h-[calc(100%-4rem)] w-0.5 bg-gradient-to-b from-primary via-fresh to-brand lg:block"
                aria-hidden
              />
              {processSteps.map((item) => (
                <StaggerItem key={item.step}>
                  <article className="relative flex gap-6 pb-8 last:pb-0">
                    <div className="relative z-10 flex size-14 shrink-0 items-center justify-center rounded-2xl border-2 border-primary/20 bg-white shadow-md">
                      <span className="text-lg font-bold text-primary">
                        {item.step}
                      </span>
                    </div>
                    <div className="rounded-2xl border border-border bg-card/80 p-5 shadow-sm backdrop-blur-sm">
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </article>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>

          <FadeIn delay={0.2} className="hidden lg:block">
            <div className="sticky top-28">
              <div className="image-frame relative aspect-[3/4]">
                <Image
                  src={stockImages.bathroomMirror.src}
                  alt={stockImages.bathroomMirror.alt}
                  fill
                  className="object-cover"
                  sizes="340px"
                />
                <div className="image-overlay-bottom" />
                <p className="absolute bottom-6 left-6 right-6 text-sm font-medium text-white/90">
                  Professional attention to bathrooms, kitchens & every detail
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
