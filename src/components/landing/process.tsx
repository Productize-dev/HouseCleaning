"use client";

import Image from "next/image";

import { FadeIn } from "@/components/motion/fade-in";
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

            <ol className="relative mt-12 flex flex-col gap-6 sm:gap-8">
              <div
                className="absolute bottom-8 left-7 top-8 hidden w-0.5 bg-gradient-to-b from-primary via-fresh to-brand lg:block"
                aria-hidden
              />
              {processSteps.map((item, index) => (
                <li key={item.step}>
                  <FadeIn delay={index * 0.08}>
                    <article className="flex items-start gap-4 sm:gap-6">
                      <div className="relative z-10 flex size-14 shrink-0 items-center justify-center rounded-2xl border-2 border-primary/20 bg-white shadow-md">
                        <span className="text-lg font-bold text-primary">
                          {item.step}
                        </span>
                      </div>
                      <div className="min-w-0 flex-1 rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-6">
                        <h3 className="font-semibold">{item.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                          {item.description}
                        </p>
                      </div>
                    </article>
                  </FadeIn>
                </li>
              ))}
            </ol>
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
