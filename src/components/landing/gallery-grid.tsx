"use client";

import Image from "next/image";
import { useState } from "react";

import { FadeIn } from "@/components/motion/fade-in";
import { cn } from "@/lib/utils";
import { galleryItems, showcaseItems } from "@/lib/gallery";

const ROOM_FILTERS = ["All", "Kitchen", "Bathroom", "Bedroom"] as const;
type RoomFilter = (typeof ROOM_FILTERS)[number];

function matchesFilter(id: string, filter: RoomFilter): boolean {
  if (filter === "All") return true;
  if (filter === "Kitchen")
    return /kitchen|stove|range|sink|coffee|fridge|appliance/i.test(id);
  if (filter === "Bathroom") return /tub|toilet|bath|shower/i.test(id);
  if (filter === "Bedroom") return id.includes("bedroom");
  return true;
}

export function GalleryGrid() {
  const [filter, setFilter] = useState<RoomFilter>("All");
  const filtered = galleryItems.filter((item) => matchesFilter(item.id, filter));

  return (
    <>
      <div
        role="tablist"
        aria-label="Filter by room"
        className="mt-10 flex flex-wrap justify-center gap-2"
      >
        {ROOM_FILTERS.map((f) => (
          <button
            key={f}
            type="button"
            role="tab"
            aria-selected={filter === f}
            onClick={() => setFilter(f)}
            className={cn(
              "rounded-full px-5 py-2.5 text-sm font-semibold transition-all",
              filter === f
                ? "bg-gradient-to-r from-primary to-fresh text-white shadow-md"
                : "border border-border bg-white text-muted-foreground hover:border-primary/40 hover:text-foreground"
            )}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        {filtered.map((item, index) => (
          <FadeIn key={item.id} delay={index * 0.05}>
            <article className="group overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-card)] transition-shadow hover:shadow-[var(--shadow-card-hover)]">
              <div className="border-b border-border bg-gradient-to-r from-secondary/80 to-white px-5 py-4">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.location}</p>
              </div>
              <div className="grid grid-cols-2 gap-px bg-border">
                <figure className="relative aspect-[4/3] bg-muted">
                  <Image
                    src={item.before}
                    alt={item.altBefore}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                  <span className="absolute bottom-2 left-2 rounded-md bg-foreground/80 px-2 py-1 text-xs font-bold uppercase text-background">
                    Before
                  </span>
                </figure>
                <figure className="relative aspect-[4/3] bg-muted">
                  <Image
                    src={item.after}
                    alt={item.altAfter}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                  <span className="absolute bottom-2 left-2 rounded-md bg-primary px-2 py-1 text-xs font-bold uppercase text-primary-foreground">
                    After
                  </span>
                </figure>
              </div>
            </article>
          </FadeIn>
        ))}
      </div>

      {showcaseItems.length > 0 && (
        <FadeIn className="mt-16">
          <h3 className="text-center text-xl font-semibold">Featured Results</h3>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {showcaseItems.map((item) => (
              <figure
                key={item.id}
                className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
              >
                <div className="relative aspect-[16/10]">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                </div>
                <figcaption className="p-5">
                  <p className="font-semibold">{item.title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </FadeIn>
      )}
    </>
  );
}
