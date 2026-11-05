"use client";

import Link from "next/link";
import { Calendar, Mail, MapPin, Phone } from "lucide-react";

import { FadeIn } from "@/components/motion/fade-in";
import { Leaf } from "@/components/seasonal/leaf";
import { LeafField } from "@/components/seasonal/leaf-field";
import { buttonVariants } from "@/components/ui/button";
import { business } from "@/lib/business";
import { cn } from "@/lib/utils";

export function ContactCta() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="section-padding bg-white"
    >
      <div className="container-narrow">
        <FadeIn>
          <div className="relative overflow-hidden rounded-[2rem] border border-brand/20 bg-accent shadow-[var(--shadow-premium)]">
            {business.showSeasonalDecor && (
              <LeafField density="band" className="opacity-40" />
            )}
            <div className="orange-glow -right-10 -top-10 size-56" aria-hidden />

            <div className="relative px-6 py-12 sm:px-12 sm:py-16">
              <div className="mx-auto max-w-2xl text-center">
                <Link
                  href="/services/deep-cleaning"
                  className="promo-chip"
                >
                  {business.showSeasonalDecor && (
                    <Leaf variant="maple" tone="brand" className="size-4" />
                  )}
                  {business.promo}
                </Link>
                <h2
                  id="contact-heading"
                  className="mt-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
                >
                  Ready for a Spotless Home or Office?
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Call or book online for a free in-home estimate — serving{" "}
                  {business.serviceRegion} from our Hales Corners home base.
                </p>
              </div>

              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap">
                <a
                  href={business.phoneHref}
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "h-13 gap-2 bg-brand px-8 text-base font-semibold text-white shadow-[var(--shadow-glow)] hover:bg-brand/90"
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
                    "h-13 gap-2 bg-primary px-8 text-base font-semibold text-white hover:bg-primary/90"
                  )}
                >
                  <Calendar className="size-5" aria-hidden />
                  Book Online
                </a>
                <a
                  href={business.emailHref}
                  className={cn(
                    buttonVariants({ size: "lg", variant: "outline" }),
                    "h-13 gap-2 border-brand/30 bg-white px-8 text-base hover:bg-accent/50"
                  )}
                >
                  <Mail className="size-5" aria-hidden />
                  Email Us
                </a>
              </div>

              <address className="mt-8 flex flex-col items-center gap-2 not-italic text-sm text-muted-foreground sm:flex-row sm:justify-center sm:gap-6">
                <span className="inline-flex items-center gap-2">
                  <MapPin className="size-4 text-brand" aria-hidden />
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
