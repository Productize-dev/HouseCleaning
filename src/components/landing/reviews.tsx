"use client";

import { ExternalLink, Quote, Star } from "lucide-react";

import { FadeIn, StaggerChildren, StaggerItem } from "@/components/motion/fade-in";
import { SectionHeader } from "@/components/landing/section-header";
import { business, testimonials } from "@/lib/business";

export function Reviews() {
  return (
    <section
      id="reviews"
      aria-labelledby="reviews-heading"
      className="section-padding relative overflow-hidden"
    >
      <div className="pointer-events-none absolute right-0 top-0 size-80 rounded-full bg-fresh/15 blur-3xl" />
      <div className="container-narrow relative">
        <SectionHeader
          id="reviews-heading"
          eyebrow="Customer Reviews"
          title={`Trusted by Neighbors Across ${business.serviceRegionShort}`}
          description="Verified neighbors on Nextdoor recommend Fresh Cleaning Place for reliable, thorough house cleaning."
        />

        <FadeIn className="mt-8 flex flex-col items-center justify-center gap-3">
          <div
            className="flex items-center gap-1 text-amber-500"
            aria-label="5 out of 5 stars"
          >
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="size-6 fill-current" aria-hidden />
            ))}
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={business.nextdoorUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-semibold text-primary hover:bg-primary/10"
            >
              Read more on Nextdoor
              <ExternalLink className="size-3.5" aria-hidden />
            </a>
            <a
              href={business.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-semibold text-primary hover:bg-primary/10"
            >
              Follow on Facebook
              <ExternalLink className="size-3.5" aria-hidden />
            </a>
            <a
              href={business.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-semibold text-primary hover:bg-primary/10"
            >
              Follow on Instagram
              <ExternalLink className="size-3.5" aria-hidden />
            </a>
          </div>
        </FadeIn>

        <StaggerChildren className="mt-12 grid gap-6 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <StaggerItem key={testimonial.quote.slice(0, 48)}>
              <blockquote className="flex h-full flex-col rounded-3xl border border-border bg-gradient-to-br from-white to-secondary/30 p-8 shadow-[var(--shadow-card)]">
                <Quote className="size-10 text-primary/25" aria-hidden />
                <p className="mt-4 flex-1 text-lg leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <footer className="mt-6 border-t border-border/80 pt-4 text-sm text-muted-foreground">
                  <cite className="not-italic font-medium">
                    — {testimonial.author}, {testimonial.location}
                  </cite>
                </footer>
              </blockquote>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
