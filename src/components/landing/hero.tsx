"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { business, stats } from "@/lib/business";
import { stockImages } from "@/lib/images";
import { cn } from "@/lib/utils";

const highlights = [
  "Residential & commercial cleaning",
  "Weekly, biweekly & monthly plans",
  "Deep cleans & home organizing",
  "Supplies & tools included",
] as const;

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative min-h-[92vh] overflow-hidden bg-background"
    >
      {/* Subtle left rule — flat background, no gradients */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-px bg-border"
        aria-hidden
      />

      <div className="container-narrow relative flex min-h-[92vh] flex-col justify-center py-24 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Copy */}
          <div className="max-w-xl lg:max-w-none">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-md border border-border bg-white px-4 py-2 text-sm font-semibold text-foreground shadow-sm"
            >
              <Sparkles className="size-4 shrink-0 text-primary" aria-hidden />
              {business.promo}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2"
            >
              <span className="inline-flex items-center gap-1.5 rounded-md border border-border bg-white px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-foreground">
                <MapPin className="size-3.5 text-primary" aria-hidden />
                Hales Corners, WI
              </span>
              <span
                className="hidden text-muted-foreground/40 sm:inline"
                aria-hidden
              >
                |
              </span>
              <span className="block text-[11px] font-bold uppercase tracking-[0.12em] text-muted-foreground sm:tracking-[0.18em]">
                {business.serviceRegionShort}
              </span>
            </motion.div>

            <motion.h1
              id="hero-heading"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.12 }}
              className="mt-5"
            >
              <span className="block text-[2.65rem] font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-[3.5rem]">
                House Cleaning Services in{" "}
                <span className="hero-headline-accent">Hales Corners, WI</span>
              </span>
              <span className="mt-4 block border-t border-border pt-4 text-lg font-normal leading-relaxed text-muted-foreground sm:text-xl">
                Premium residential &amp; commercial cleaning trusted across{" "}
                <span className="font-semibold text-foreground">
                  {business.serviceRegionShort}
                </span>
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.22 }}
              className="hero-lead-block mt-8 border-l-4 border-l-primary pl-5 sm:pl-6"
            >
              <p className="text-lg font-semibold leading-snug text-foreground sm:text-xl">
                Spotless homes and businesses — supplies included on every visit.
              </p>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                {business.name} serves {business.serviceRegion} with thorough
                residential and commercial cleaning. Same trusted crew, clear
                communication, and results you can see from the moment you walk
                in.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {[
                  "Homes & offices",
                  "Free estimates",
                  "Satisfaction guaranteed",
                ].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-border bg-secondary/50 px-3 py-1 text-xs font-medium text-foreground"
                    >
                      {tag}
                    </span>
                ))}
              </div>
            </motion.div>

            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              className="mt-8 grid gap-2.5 sm:grid-cols-2"
            >
              {highlights.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + i * 0.08 }}
                  className="flex items-center gap-2.5 rounded-lg border border-border bg-white px-3 py-2.5 text-sm font-medium text-foreground"
                >
                  <CheckCircle2
                    className="size-4 shrink-0 text-fresh"
                    aria-hidden
                  />
                  {item}
                </motion.li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-10 flex flex-col gap-3 sm:flex-row"
            >
              <a
                href={business.phoneHref}
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "group h-13 gap-2 bg-primary px-8 text-base shadow-sm hover:bg-primary/90"
                )}
              >
                <Phone className="size-5" aria-hidden />
                Get Free Estimate
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#gallery"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "h-13 border-border bg-white px-8 text-base hover:bg-secondary/50"
                )}
              >
                See Before & After
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.65 }}
              className="mt-8 inline-flex items-center gap-2 rounded-lg border border-border bg-white px-4 py-3 shadow-sm"
            >
              <div className="flex text-amber-500" aria-hidden>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-current" />
                ))}
              </div>
              <p className="text-sm font-medium">
                Top-rated on{" "}
                <span className="font-semibold text-brand">Nextdoor</span>
              </p>
            </motion.div>
          </div>

          {/* Photo collage + quote card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="relative mx-auto w-full max-w-lg lg:max-w-none"
          >
            {/* Main hero image */}
            <div className="image-frame relative aspect-[4/5] sm:aspect-[5/6]">
              <Image
                src={stockImages.mirrorDetail.src}
                alt={stockImages.mirrorDetail.alt}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 90vw, 45vw"
              />
              <div className="absolute inset-x-0 bottom-0 h-2/5 bg-foreground/50" aria-hidden />

              {/* Floating accent photo */}
              <div className="absolute -left-4 top-8 hidden w-32 overflow-hidden rounded-2xl border-4 border-white shadow-[var(--shadow-premium)] sm:block sm:w-36">
                <div className="relative aspect-square">
                  <Image
                    src={stockImages.suppliesCaddy.src}
                    alt={stockImages.suppliesCaddy.alt}
                    fill
                    className="object-cover"
                    sizes="144px"
                  />
                </div>
              </div>

              {/* Glass quote card — overlaid on photo */}
              <aside
                aria-label="Request a quote"
                className="absolute inset-x-4 bottom-4 rounded-xl border border-border bg-white p-5 shadow-[var(--shadow-premium)] sm:inset-x-6 sm:bottom-6 sm:p-6"
              >
                <div className="flex items-center gap-3">
                  <Image
                    src="/images/logo.png"
                    alt={`${business.name} logo`}
                    width={48}
                    height={48}
                    className="size-12 object-contain"
                  />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-brand">
                      Free estimate
                    </p>
                    <p className="font-semibold">{business.shortName}</p>
                  </div>
                </div>

                <div className="mt-4 flex items-start gap-2 rounded-lg border border-border bg-secondary/60 px-3 py-2.5">
                  <ShieldCheck
                    className="mt-0.5 size-4 shrink-0 text-primary"
                    aria-hidden
                  />
                  <p className="text-xs font-medium leading-snug text-primary sm:text-sm">
                    {business.satisfaction}
                  </p>
                </div>

                <div className="mt-4 flex items-end justify-between gap-4">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                      Call or text
                    </p>
                    <a
                      href={business.phoneHref}
                      className="text-xl font-bold tabular-nums text-primary hover:underline sm:text-2xl lg:text-3xl"
                    >
                      {business.phone}
                    </a>
                  </div>
                  <a
                    href={business.phoneHref}
                    className={cn(
                      buttonVariants({ size: "sm" }),
                      "hidden shrink-0 bg-primary sm:inline-flex"
                    )}
                  >
                    Book Now
                  </a>
                </div>

                <div className="mt-3 flex gap-2 sm:hidden">
                  <a
                    href={business.phoneHref}
                    className={cn(
                      buttonVariants({ size: "sm" }),
                      "flex-1 bg-primary"
                    )}
                  >
                    Book Now
                  </a>
                  <a
                    href={business.emailHref}
                    className={cn(
                      buttonVariants({ variant: "outline", size: "sm" }),
                      "gap-1"
                    )}
                  >
                    <Mail className="size-3.5" aria-hidden />
                    Email
                  </a>
                </div>
              </aside>
            </div>
          </motion.div>
        </div>

        {/* Stats strip */}
        <motion.ul
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16 grid grid-cols-2 gap-4 border-t border-border pt-10 sm:grid-cols-4"
        >
          {stats.map((stat) => (
            <li
              key={stat.label}
              className="rounded-xl border border-border bg-white px-4 py-5 text-center shadow-sm"
            >
              <p className="text-2xl font-bold text-primary sm:text-3xl">
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
