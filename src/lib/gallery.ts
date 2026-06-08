export type GalleryItem = {
  id: string;
  title: string;
  location: string;
  before: string;
  after: string;
  altBefore: string;
  altAfter: string;
  category?: "residential" | "commercial";
};

export type ShowcaseItem = {
  id: string;
  title: string;
  description: string;
  image: string;
  alt: string;
};

/** Residential before/after pairs */
export const galleryItems: GalleryItem[] = [
  {
    id: "kitchen-sink",
    title: "Kitchen Sink Deep Clean",
    location: "Home — Milwaukee area",
    before: "/images/gallery/sink-before.png",
    after: "/images/gallery/sink-after.png",
    altBefore:
      "Dirty stainless steel kitchen sink before professional house cleaning",
    altAfter:
      "Sparkling clean kitchen sink after Fresh Cleaning Place",
  },
  {
    id: "stovetop",
    title: "Stovetop Grease Removal",
    location: "Kitchen",
    before: "/images/gallery/stove-before.png",
    after: "/images/gallery/stove-after.png",
    altBefore: "Greasy white stovetop before house cleaning",
    altAfter: "Spotless stovetop after kitchen deep clean",
  },
  {
    id: "gas-range",
    title: "Gas Range Detail",
    location: "Kitchen",
    before: "/images/gallery/range-before.png",
    after: "/images/gallery/range-after.png",
    altBefore: "Dirty stainless steel gas range before cleaning",
    altAfter: "Polished gas range after residential cleaning",
  },
  {
    id: "kitchen-appliances",
    title: "Appliance Polish",
    location: "Kitchen",
    before: "/images/gallery/appliances-before.png",
    after: "/images/gallery/appliances-after.png",
    altBefore: "Streaky kitchen appliances before cleaning",
    altAfter: "Streak-free appliances after house cleaning",
  },
  {
    id: "coffee-station",
    title: "Coffee Station Detail",
    location: "Kitchen",
    before: "/images/gallery/coffee-before.png",
    after: "/images/gallery/coffee-after.png",
    altBefore: "Dusty home coffee station before cleaning",
    altAfter: "Organized spotless coffee station after cleaning",
  },
  {
    id: "fridge-interior",
    title: "Refrigerator Interior",
    location: "Kitchen",
    before: "/images/gallery/fridge-interior-before.png",
    after: "/images/gallery/fridge-interior-after.png",
    altBefore: "Dirty refrigerator interior before deep clean",
    altAfter: "Spotless refrigerator after house cleaning",
  },
  {
    id: "bathtub-tile",
    title: "Bathtub Stain Removal",
    location: "Bathroom",
    before: "/images/gallery/tub-tile-before.png",
    after: "/images/gallery/tub-tile-after.png",
    altBefore: "Stained bathtub before bathroom deep cleaning",
    altAfter: "Bright white bathtub after house cleaning",
  },
  {
    id: "bathtub-mosaic",
    title: "Tub & Tile Scrub",
    location: "Bathroom",
    before: "/images/gallery/tub-mosaic-before.png",
    after: "/images/gallery/tub-mosaic-after.png",
    altBefore: "Grimy bathtub before residential cleaning",
    altAfter: "Sparkling bathtub after deep clean",
  },
  {
    id: "toilet-decor",
    title: "Bathroom Deep Clean",
    location: "Bathroom",
    before: "/images/gallery/toilet-decor-before.png",
    after: "/images/gallery/toilet-decor-after.png",
    altBefore: "Dirty bathroom before house cleaning",
    altAfter: "Spotless bathroom after professional cleaning",
  },
  {
    id: "toilet-bowl",
    title: "Toilet Stain Removal",
    location: "Bathroom",
    before: "/images/gallery/toilet-bowl-before.png",
    after: "/images/gallery/toilet-bowl-after.png",
    altBefore: "Stained toilet bowl before cleaning",
    altAfter: "Clean toilet after bathroom deep clean",
  },
  {
    id: "bedroom",
    title: "Bedroom Reset",
    location: "Family home",
    before: "/images/gallery/bedroom-before.png",
    after: "/images/gallery/bedroom-after.png",
    altBefore: "Messy bedroom before house cleaning",
    altAfter: "Tidy bedroom after Fresh Cleaning Place",
  },
  {
    id: "commercial-toilet",
    title: "Commercial Restroom",
    location: "Office facility",
    before: "/images/gallery/commercial-toilet-before.png",
    after: "/images/gallery/commercial-toilet-after.png",
    altBefore: "Commercial restroom before professional cleaning",
    altAfter: "Sanitized commercial restroom after Fresh Cleaning Place",
    category: "commercial",
  },
  {
    id: "commercial-urinal",
    title: "Urinal Deep Clean",
    location: "Commercial bathroom",
    before: "/images/gallery/urinal-before.png",
    after: "/images/gallery/urinal-after.png",
    altBefore: "Stained commercial urinal before cleaning",
    altAfter: "Spotless urinal after commercial restroom cleaning",
    category: "commercial",
  },
];

export const showcaseItems: ShowcaseItem[] = [
  {
    id: "luxury-bathroom",
    title: "Premium Bathroom Finish",
    description:
      "Marble, jetted tub, and streak-free glass — meticulous care for beautiful homes.",
    image: "/images/gallery/luxury-bathroom.png",
    alt: "Luxury bathroom after professional house cleaning in Hales Corners WI",
  },
  {
    id: "shower-glass",
    title: "Hard Water & Soap Scum",
    description:
      "We restore shower glass clouded by years of mineral deposits and buildup.",
    image: "/images/gallery/shower-glass-before.png",
    alt: "Shower glass hard water stains before house cleaning service",
  },
];
