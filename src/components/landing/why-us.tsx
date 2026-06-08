"use client";

import Image from "next/image";
import { HeartHandshake, Sparkles, Timer } from "lucide-react";

import {
  FadeIn,
  StaggerChildren,
  StaggerItem,
} from "@/components/motion/fade-in";
import { SectionHeader } from "@/components/landing/section-header";
import { business, values } from "@/lib/business";
import { stockImages } from "@/lib/images";

const icons = [Sparkles, Timer, HeartHandshake];

export function WhyUs() {
  return (
    <section
      id="why-us"
      aria-labelledby="why-us-heading"
      className="section-padding relative overflow-hidden bg-white"
    >
      <div className="pointer-events-none absolute -right-40 top-0 size-[500px] rounded-full bg-fresh/10 blur-3xl" />

      <div className="container-narrow relative">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
          <FadeIn className="order-2 lg:order-1">
            <SectionHeader
              id="why-us-heading"
              align="left"
              eyebrow="Why Fresh Cleaning Place"
              title="A Local Team You Can Count On"
              description={`We've built our reputation in Hales Corners and ${business.serviceRegion} on thorough residential and commercial work, honest communication, and spaces that truly feel fresh.`}
            />

            <StaggerChildren className="mt-10 space-y-4">
              {values.map((value, index) => {
                const Icon = icons[index] ?? Sparkles;
                return (
                  <StaggerItem key={value.title}>
                    <article className="group flex gap-4 rounded-2xl border border-border bg-gradient-to-r from-secondary/40 to-white p-5 shadow-sm transition-all hover:border-primary/25 hover:shadow-md">
                      <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand to-primary text-white shadow-md">
                        <Icon className="size-5" aria-hidden />
                      </div>
                      <div>
                        <h3 className="font-semibold">{value.title}</h3>
                        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                          {value.description}
                        </p>
                      </div>
                    </article>
                  </StaggerItem>
                );
              })}
            </StaggerChildren>

            <p className="mt-8 text-sm font-medium text-muted-foreground">
              Residential homes and commercial spaces — offices, retail, and
              facilities throughout {business.serviceRegionShort}.
            </p>
          </FadeIn>

          <FadeIn delay={0.15} className="order-1 lg:order-2">
            <div className="relative">
              <div className="image-frame relative aspect-[4/5]">
                <Image
                  src={stockImages.livingRoomDetail.src}
                  alt={stockImages.livingRoomDetail.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="image-overlay-bottom" />
                <p className="absolute bottom-6 left-6 right-6 text-lg font-semibold text-white">
                  Meticulous care in every room we enter
                </p>
              </div>

              <div className="absolute -bottom-6 -right-4 w-2/5 overflow-hidden rounded-2xl border-4 border-white shadow-[var(--shadow-premium)] sm:-right-8 sm:w-[45%]">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={stockImages.bedroomCleaning.src}
                    alt={stockImages.bedroomCleaning.alt}
                    fill
                    className="object-cover"
                    sizes="200px"
                  />
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
