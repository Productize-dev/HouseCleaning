"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  CheckCircle2,
  MapPin,
  Phone,
  Star,
} from "lucide-react";

import { Leaf } from "@/components/seasonal/leaf";
import { LeafField } from "@/components/seasonal/leaf-field";
import { buttonVariants } from "@/components/ui/button";
import {
  business,
  heroServiceArea,
  heroServiceCities,
  stats,
} from "@/lib/business";
import { stockImages } from "@/lib/images";
import { cn } from "@/lib/utils";

const trustLine = [
  "Supplies included",
  "Residential & commercial",
  "Free estimates",
] as const;

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-white"
    >
      {business.showSeasonalDecor && (
        <LeafField density="hero" className="opacity-50" />
      )}

      <div className="container-narrow relative z-10 py-16 sm:py-20 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          {/* Copy column */}
          <div className="relative max-w-xl lg:max-w-none">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link
                href="/services/deep-cleaning"
                className="group relative flex w-full max-w-lg items-stretch overflow-hidden rounded-2xl border-2 border-brand/40 bg-accent shadow-[var(--shadow-glow)] transition hover:border-brand hover:shadow-[var(--shadow-card-hover)] sm:max-w-xl"
              >
                <div className="flex shrink-0 flex-col items-center justify-center bg-brand px-4 py-4 text-white sm:px-5 sm:py-5">
                  {business.showSeasonalDecor && (
                    <Leaf
                      variant="maple"
                      className="mb-1 size-5 text-[#ffe0a8] sm:size-6"
                    />
                  )}
                  <span className="text-3xl font-black leading-none tracking-tight sm:text-4xl lg:text-5xl">
                    20%
                  </span>
                  <span className="mt-1 text-[10px] font-bold uppercase tracking-[0.18em] sm:text-xs">
                    Off
                  </span>
                </div>
                <div className="flex min-w-0 flex-1 flex-col justify-center gap-1 px-4 py-4 sm:px-5 sm:py-5">
                  <p className="text-base font-bold leading-snug text-foreground sm:text-lg">
                    First cleaning — Thanksgiving special
                  </p>
                  <p className="text-sm leading-snug text-muted-foreground sm:text-base">
                    Guest-ready deep clean before the holiday. New clients only.
                  </p>
                  <span className="mt-1 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                    Claim offer
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="mt-7 flex items-center gap-3"
            >
              <div className="rounded-xl border border-border bg-white p-1.5 shadow-sm">
                <Image
                  src="/images/logo.png"
                  alt=""
                  width={48}
                  height={48}
                  className="size-11 object-contain sm:size-12"
                  priority
                />
              </div>
              <div>
                <p className="text-lg font-bold tracking-tight text-foreground sm:text-xl">
                  {business.shortName}
                </p>
                <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-brand">
                  <MapPin className="size-3.5" aria-hidden />
                  Hales Corners, WI
                </p>
              </div>
            </motion.div>

            {/* SEO H1 — unchanged wording */}
            <motion.h1
              id="hero-heading"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-7"
            >
              <span className="block text-[2.35rem] font-bold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-[3.2rem]">
                Residential &amp; Commercial Cleaning in{" "}
                <span className="hero-headline-accent">{heroServiceArea}</span>
              </span>
              <span className="mt-5 block border-t border-border pt-4 text-base font-normal leading-relaxed text-muted-foreground sm:text-lg">
                Homes, offices, clinics &amp; facilities across{" "}
                <span className="font-semibold text-foreground">
                  {heroServiceCities}
                </span>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.18 }}
              className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              {business.name} serves {business.serviceRegion} with thorough
              residential and commercial cleaning — supplies included, same
              trusted crew, results you can see.
            </motion.p>

            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.24 }}
              className="mt-6 flex flex-wrap gap-x-4 gap-y-2"
            >
              {trustLine.map((item) => (
                <li
                  key={item}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground"
                >
                  <CheckCircle2
                    className="size-4 shrink-0 text-brand"
                    aria-hidden
                  />
                  {item}
                </li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
            >
              <a
                href={business.phoneHref}
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "group h-13 gap-2 bg-brand px-8 text-base text-white shadow-[var(--shadow-glow)] hover:bg-brand/90"
                )}
              >
                <Phone className="size-5" aria-hidden />
                Call {business.phone}
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href={business.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "h-13 gap-2 bg-primary px-8 text-base text-white hover:bg-primary/90"
                )}
              >
                <Calendar className="size-5" aria-hidden />
                Book Online
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.38 }}
              className="mt-7 inline-flex items-center gap-2.5 rounded-full border border-border bg-white px-4 py-2.5 shadow-sm"
            >
              <div className="flex text-amber" aria-hidden>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-current" />
                ))}
              </div>
              <p className="text-sm font-medium text-foreground">
                Top-rated on{" "}
                <span className="font-semibold text-brand">Nextdoor</span>
              </p>
            </motion.div>
          </div>

          {/* Clean photo panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2 }}
            className="relative mx-auto w-full max-w-lg lg:max-w-none"
          >
            {business.showSeasonalDecor && (
              <>
                <Leaf
                  variant="maple"
                  tone="brand"
                  className="absolute -right-2 -top-3 z-20 size-12 rotate-[16deg] opacity-80 animate-leaf-drift sm:size-16"
                />
                <Leaf
                  variant="oak"
                  tone="amber"
                  className="absolute -bottom-3 -left-2 z-20 size-10 -rotate-[18deg] opacity-70 animate-leaf-drift-delayed sm:size-14"
                />
              </>
            )}

            <Link
              href="/services/deep-cleaning"
              className="image-frame relative block aspect-square ring-1 ring-brand/15 transition hover:ring-brand/35"
              aria-label="Thanksgiving cleaning special — 20% off first cleaning. Learn about deep cleaning."
            >
              <Image
                src={stockImages.thanksgivingFlyer.src}
                alt={stockImages.thanksgivingFlyer.alt}
                fill
                priority
                className="object-cover object-center"
                sizes="(max-width: 1024px) 90vw, 45vw"
              />
            </Link>
          </motion.div>
        </div>

        <motion.ul
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.42 }}
          className="mt-14 grid grid-cols-2 gap-3 border-t border-border pt-10 sm:grid-cols-4 sm:gap-4"
        >
          {stats.map((stat) => (
            <li
              key={stat.label}
              className="rounded-2xl border border-border bg-white px-4 py-5 text-center shadow-sm"
            >
              <p className="text-2xl font-bold text-brand sm:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs font-medium text-muted-foreground sm:text-sm">
                {stat.label}
              </p>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
