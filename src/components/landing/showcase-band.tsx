"use client";

import Image from "next/image";

import { StaggerChildren, StaggerItem } from "@/components/motion/fade-in";
import { showcaseItems } from "@/lib/images";

export function ShowcaseBand() {
  return (
    <section
      aria-label="Our cleaning standard"
      className="relative overflow-hidden border-y border-primary/10 bg-foreground py-0"
    >
      <StaggerChildren className="grid md:grid-cols-3">
        {showcaseItems.map((item) => (
          <StaggerItem key={item.src}>
            <figure className="group relative aspect-[4/3] overflow-hidden md:aspect-[16/11]">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="image-overlay-bottom" />
              <figcaption className="absolute inset-x-0 bottom-0 p-6 text-white">
                <p className="text-xs font-bold uppercase tracking-widest text-fresh">
                  {item.label}
                </p>
                <p className="mt-1 text-lg font-semibold">{item.caption}</p>
              </figcaption>
            </figure>
          </StaggerItem>
        ))}
      </StaggerChildren>
    </section>
  );
}
