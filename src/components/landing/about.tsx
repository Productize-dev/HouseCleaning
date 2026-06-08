import Image from "next/image";

import { FadeIn } from "@/components/motion/fade-in";
import { SectionHeader } from "@/components/landing/section-header";
import { business, values } from "@/lib/business";
import { stockImages } from "@/lib/images";

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="section-padding relative overflow-hidden bg-gradient-to-b from-background to-secondary/40"
    >
      <div className="container-narrow">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <FadeIn>
            <SectionHeader
              id="about-heading"
              align="left"
              eyebrow="About Us"
              title={`Meet ${business.shortName}`}
              description={`Based at ${business.address.full}, we are a locally owned cleaning company serving homes and businesses with quality, reliability, and respect for every property we care for.`}
            />

            <div className="mt-8 space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                {business.name} is a dedicated local crew known across{" "}
                {business.serviceRegion} for thorough work and outstanding
                communication — residential and commercial.
              </p>
              <p className="leading-relaxed">
                Our mission is simple: deliver guaranteed satisfaction on every
                visit. Whether it is a weekly clean in Hales Corners, a deep
                clean in West Allis, or kitchen and bathroom detailing, we treat
                every room with the same care and attention to detail.
              </p>
              <p className="leading-relaxed">
                Our values — loyalty, responsibility, and trust — guide
                everything we do. {business.foundedNote}.
              </p>
            </div>

            <ul className="mt-8 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {values.map((value) => (
                <li
                  key={value.title}
                  className="rounded-2xl border border-border bg-card/80 px-4 py-4 backdrop-blur-sm"
                >
                  <h3 className="text-sm font-semibold">{value.title}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                    {value.description}
                  </p>
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="grid grid-cols-2 gap-4">
              <div className="image-frame relative col-span-2 aspect-[16/10]">
                <Image
                  src={stockImages.bedroomCleaning.src}
                  alt={stockImages.bedroomCleaning.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="image-frame relative aspect-square">
                <Image
                  src={stockImages.suppliesCaddy.src}
                  alt={stockImages.suppliesCaddy.alt}
                  fill
                  className="object-cover"
                  sizes="250px"
                />
              </div>
              <div className="image-frame relative aspect-square">
                <Image
                  src="/images/flyer-promo.png"
                  alt="Fresh Cleaning Place promotional flyer — 20% off first home cleaning"
                  fill
                  className="object-cover object-top"
                  sizes="250px"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
