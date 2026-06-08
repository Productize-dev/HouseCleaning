"use client";

import Image from "next/image";
import { LayoutGrid, Phone } from "lucide-react";

import { FadeIn } from "@/components/motion/fade-in";
import { SectionHeader } from "@/components/landing/section-header";
import { buttonVariants } from "@/components/ui/button";
import { business } from "@/lib/business";
import { cn } from "@/lib/utils";

export function Organizing() {
  return (
    <section
      id="organizing"
      aria-labelledby="organizing-heading"
      className="section-padding bg-white"
    >
      <div className="container-narrow">
        <div className="relative overflow-hidden rounded-[2rem] border border-primary/15 shadow-[var(--shadow-card)]">
          <div className="grid lg:grid-cols-2">
            <FadeIn className="relative min-h-[320px] lg:min-h-full">
              <Image
                src="/images/flyer-organizing.png"
                alt="Home organizing services by Fresh Cleaning Place"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20 lg:bg-gradient-to-r lg:from-transparent lg:to-white" />
            </FadeIn>

            <div className="relative bg-gradient-to-br from-accent/80 via-white to-secondary/50 p-8 sm:p-12">
              <div className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full bg-fresh/15 blur-3xl" />

              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
                <LayoutGrid className="size-4" aria-hidden />
                Home Organizing
              </div>

              <SectionHeader
                id="organizing-heading"
                align="left"
                className="mt-4"
                title="Declutter Your Life — Organizing Made Easy"
                description="Our expert team transforms cluttered spaces into calm, functional rooms — alongside our professional house cleaning services."
              />

              <p className="mt-4 text-muted-foreground">
                <strong className="font-semibold text-foreground">
                  {business.satisfaction}
                </strong>{" "}
                Reclaim your space and enjoy a more peaceful, organized home.
              </p>

              <ul className="mt-6 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
                {[
                  "Closets, bedrooms, and living areas",
                  "Home offices and study nooks",
                  "Kitchen and pantry organization",
                  "Basement and storage resets",
                  "Combined clean + organize visits",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex gap-2 rounded-lg border border-border/60 bg-white/70 px-3 py-2"
                  >
                    <span className="font-bold text-primary" aria-hidden>
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href={business.phoneHref}
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "mt-8 gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
                )}
              >
                <Phone className="size-5" aria-hidden />
                Call {business.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
