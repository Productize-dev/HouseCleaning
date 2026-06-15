"use client";

import Image from "next/image";
import { Calendar, Mail, MapPin, Phone, Sparkles } from "lucide-react";

import { FadeIn } from "@/components/motion/fade-in";
import { buttonVariants } from "@/components/ui/button";
import { business } from "@/lib/business";
import { stockImages } from "@/lib/images";
import { cn } from "@/lib/utils";

export function ContactCta() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="section-padding"
    >
      <div className="container-narrow">
        <FadeIn>
          <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] shadow-[var(--shadow-premium)]">
            <Image
              src={stockImages.mirrorDetail.src}
              alt={stockImages.mirrorDetail.alt}
              fill
              className="object-cover"
              sizes="(max-width: 1152px) 100vw, 1152px"
            />
            <div
              className="absolute inset-0"
              style={{ background: "var(--gradient-cta)", opacity: 0.92 }}
            />
            <div className="pointer-events-none absolute -right-20 -top-20 size-64 rounded-full bg-white/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-16 -left-16 size-56 rounded-full bg-white/10 blur-3xl" />

            <div className="relative px-6 py-12 text-primary-foreground sm:px-12 sm:py-16">
              <div className="mx-auto max-w-2xl text-center">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-medium backdrop-blur-sm">
                  <Sparkles className="size-4" aria-hidden />
                  {business.promo}
                </div>
                <h2
                  id="contact-heading"
                  className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl"
                >
                  Ready for a Spotless Home or Office?
                </h2>
                <p className="mt-4 text-lg text-primary-foreground/90">
                  Call or book online for a free in-home estimate — serving{" "}
                  {business.serviceRegion} from our Hales Corners home base.
                </p>
              </div>

              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap">
                <a
                  href={business.phoneHref}
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "shine h-13 gap-2 bg-white px-8 text-base font-semibold text-brand hover:bg-white/90"
                  )}
                >
                  <Phone className="size-5" aria-hidden />
                  {business.phone}
                </a>
                <a
                  href={business.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "h-13 gap-2 bg-brand px-8 text-base font-semibold text-white hover:bg-brand/90"
                  )}
                >
                  <Calendar className="size-5" aria-hidden />
                  Book Online
                </a>
                <a
                  href={business.emailHref}
                  className={cn(
                    buttonVariants({ size: "lg", variant: "outline" }),
                    "h-13 gap-2 border-white/40 bg-transparent px-8 text-base text-white hover:bg-white/10"
                  )}
                >
                  <Mail className="size-5" aria-hidden />
                  Email Us
                </a>
              </div>

              <address className="mt-8 flex flex-col items-center gap-2 not-italic text-sm text-primary-foreground/85 sm:flex-row sm:justify-center sm:gap-6">
                <span className="inline-flex items-center gap-2">
                  <MapPin className="size-4" aria-hidden />
                  {business.address.full}
                </span>
                <span>{business.hours}</span>
              </address>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
