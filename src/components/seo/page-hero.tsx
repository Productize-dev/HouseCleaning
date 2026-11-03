import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";

import { Leaf } from "@/components/seasonal/leaf";
import { buttonVariants } from "@/components/ui/button";
import { business } from "@/lib/business";
import { stockImages } from "@/lib/images";
import { cn } from "@/lib/utils";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  image?: { src: string; alt: string };
};

export function PageHero({
  eyebrow,
  title,
  description,
  image = stockImages.livingRoomDetail,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-white">
      <div className="mesh-bg pointer-events-none absolute inset-0 opacity-70" aria-hidden />
      {business.showSeasonalDecor && (
        <>
          <Leaf
            variant="maple"
            tone="brand"
            className="pointer-events-none absolute right-6 top-8 size-12 rotate-[18deg] opacity-25 sm:right-16 sm:size-16"
          />
          <Leaf
            variant="oak"
            tone="amber"
            className="pointer-events-none absolute bottom-8 right-[28%] size-10 -rotate-[16deg] opacity-20"
          />
        </>
      )}

      <div className="container-narrow relative grid items-center gap-10 py-14 sm:py-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12 lg:py-20">
        <div>
          {eyebrow && (
            <p className="inline-flex rounded-full border border-brand/25 bg-accent px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand">
              {eyebrow}
            </p>
          )}
          <h1
            className={cn(
              "max-w-3xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl",
              eyebrow && "mt-4"
            )}
          >
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {description}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={business.phoneHref}
              className={cn(
                buttonVariants({ size: "lg" }),
                "gap-2 bg-gradient-to-r from-brand to-amber text-white shadow-[var(--shadow-glow)] hover:opacity-95"
              )}
            >
              <Phone className="size-5" aria-hidden />
              Get Free Estimate
            </a>
            <a
              href={business.emailHref}
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "border-brand/30 bg-white hover:bg-accent/60"
              )}
            >
              Email Us
            </a>
          </div>
          {business.showSeasonalDecor && (
            <Link
              href="/services/deep-cleaning"
              className="promo-chip mt-6"
            >
              <Leaf variant="maple" tone="brand" className="size-4" />
              {business.promo}
            </Link>
          )}
        </div>

        <div className="relative mx-auto hidden w-full max-w-md lg:block lg:max-w-none">
          <div className="image-frame relative aspect-[4/3] ring-1 ring-brand/15">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 0vw, 40vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
