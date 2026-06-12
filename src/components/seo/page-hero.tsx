import Image from "next/image";
import { Phone } from "lucide-react";

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
    <section className="relative overflow-hidden border-b border-primary/10">
      <div className="absolute inset-0">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{ background: "var(--gradient-hero)", opacity: 0.93 }}
        />
        <div className="mesh-bg absolute inset-0 opacity-60" />
      </div>

      <div className="container-narrow relative py-16 sm:py-20">
        {eyebrow && (
          <p className="inline-flex rounded-full border border-primary/20 bg-white/80 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary backdrop-blur-sm">
            {eyebrow}
          </p>
        )}
        <h1
          className={cn(
            "max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl",
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
              "gap-2 bg-primary text-primary-foreground shadow-[var(--shadow-glow)] hover:bg-primary/90"
            )}
          >
            <Phone className="size-5" aria-hidden />
            Get Free Estimate
          </a>
          <a
            href={business.emailHref}
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "border-primary/30 bg-white/70 backdrop-blur-sm hover:bg-white"
            )}
          >
            Email Us
          </a>
        </div>
      </div>
    </section>
  );
}
