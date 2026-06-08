import { GalleryGrid } from "@/components/landing/gallery-grid";
import { SectionHeader } from "@/components/landing/section-header";
import { business } from "@/lib/business";

export function Gallery() {
  return (
    <section
      id="gallery"
      aria-labelledby="gallery-heading"
      className="section-padding relative overflow-hidden bg-gradient-to-b from-muted/50 to-background"
    >
      <div className="dot-pattern pointer-events-none absolute inset-0 opacity-25" />
      <div className="container-narrow relative">
        <SectionHeader
          id="gallery-heading"
          eyebrow="Our Work"
          title="Before & After — Real Home Results"
          description="Photos from actual residential and commercial jobs across Milwaukee County."
        />
        <GalleryGrid />
      </div>
    </section>
  );
}
