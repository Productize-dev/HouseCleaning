"use client";

import Image from "next/image";

import { StaggerChildren, StaggerItem } from "@/components/motion/fade-in";
import { LeafField } from "@/components/seasonal/leaf-field";
import { business } from "@/lib/business";
import { showcaseItems } from "@/lib/images";

export function ShowcaseBand() {
  return (
    <section
      aria-label="Our cleaning standard"
      className="relative overflow-hidden border-y border-border bg-white py-0"
    >
      {business.showSeasonalDecor && (
        <LeafField density="band" className="z-10 opacity-35" />
      )}
      <StaggerChildren className="grid border-t border-border md:grid-cols-3">
        {showcaseItems.map((item, index) => (
          <StaggerItem key={item.src}>
            <figure
              className={
                index < showcaseItems.length - 1
                  ? "group relative aspect-[4/3] overflow-hidden border-b border-border md:aspect-[16/11] md:border-b-0 md:border-r"
                  : "group relative aspect-[4/3] overflow-hidden border-b border-border md:aspect-[16/11] md:border-b-0"
              }
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="image-overlay-bottom" />
              <figcaption className="absolute inset-x-0 bottom-0 p-6 text-white">
                <p className="text-xs font-bold uppercase tracking-widest text-amber">
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
