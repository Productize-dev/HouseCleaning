import { business } from "@/lib/business";

export type SeoAreaPage = {
  slug: string;
  city: string;
  state: "WI";
  isPrimary: boolean;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  localNote: string;
  faqs: readonly { question: string; answer: string }[];
};

export const seoAreas: SeoAreaPage[] = [
  {
    slug: "hales-corners-wi",
    city: "Hales Corners",
    state: "WI",
    isPrimary: true,
    metaTitle: "House Cleaning Hales Corners WI | Fresh Cleaning Place",
    metaDescription: `Residential house cleaning in Hales Corners, WI — weekly, deep cleaning & organizing. Locally owned at ${business.address.street}. Call ${business.phone}.`,
    h1: "House Cleaning Services in Hales Corners, Wisconsin",
    intro: `Looking for trusted house cleaning in Hales Corners? Fresh Cleaning Place LLC is based right here at ${business.address.full} — providing premium residential cleaning for neighbors across Hales Corners with supplies included and satisfaction guaranteed.`,
    localNote:
      "As a Hales Corners–based company, we are your neighborhood house cleaning team — not a distant franchise. Many of our longest-standing clients live right here in the village.",
    faqs: [
      {
        question: "Are you located in Hales Corners?",
        answer: `Yes. Our business address is ${business.address.full}. We serve Hales Corners homeowners and Milwaukee County and surrounding areas.`,
      },
      {
        question: "What house cleaning services do you offer in Hales Corners?",
        answer:
          "Regular weekly and biweekly cleaning, deep cleaning, kitchen and bathroom detailing, window cleaning, basement cleans, and home organizing — all residential.",
      },
    ],
  },
  {
    slug: "greenfield-wi",
    city: "Greenfield",
    state: "WI",
    isPrimary: false,
    metaTitle: "House Cleaning Greenfield WI | Fresh Cleaning Place",
    metaDescription: `Residential house cleaning in Greenfield, WI — weekly, deep cleaning & organizing. Locally owned, satisfaction guaranteed. Call ${business.phone}.`,
    h1: "House Cleaning Services in Greenfield, Wisconsin",
    intro:
      "Looking for trusted house cleaning in Greenfield? Fresh Cleaning Place LLC provides premium residential cleaning for homeowners across Greenfield and Milwaukee County and surrounding areas — with supplies included and satisfaction guaranteed on every visit.",
    localNote:
      "Greenfield homeowners trust Fresh Cleaning Place for reliable biweekly and deep cleaning just minutes from our Hales Corners headquarters.",
    faqs: [
      {
        question: "Do you offer house cleaning in Greenfield, WI?",
        answer: `Yes. We provide residential house cleaning throughout Greenfield and surrounding areas. Call ${business.phone} for a free estimate.`,
      },
      {
        question: "What services are available in Greenfield?",
        answer:
          "Regular weekly and biweekly cleaning, deep cleaning, kitchen and bathroom detailing, window cleaning, basement cleans, and home organizing — all residential.",
      },
    ],
  },
  {
    slug: "west-allis-wi",
    city: "West Allis",
    state: "WI",
    isPrimary: false,
    metaTitle: "House Cleaning West Allis WI | Fresh Cleaning Place",
    metaDescription: `Residential house cleaning in West Allis, WI — weekly, deep cleaning & organizing. Locally owned, satisfaction guaranteed. Call ${business.phone}.`,
    h1: "House Cleaning Services in West Allis, Wisconsin",
    intro:
      "Looking for trusted house cleaning in West Allis? Fresh Cleaning Place LLC provides premium residential cleaning for homeowners across West Allis and Milwaukee County and surrounding areas — with supplies included and satisfaction guaranteed on every visit.",
    localNote:
      "From ranch homes to duplexes, West Allis residents count on our crew for thorough kitchen, bathroom, and whole-home cleaning.",
    faqs: [
      {
        question: "Do you offer house cleaning in West Allis, WI?",
        answer: `Yes. We provide residential house cleaning throughout West Allis and surrounding areas. Call ${business.phone} for a free estimate.`,
      },
      {
        question: "What services are available in West Allis?",
        answer:
          "Regular weekly and biweekly cleaning, deep cleaning, kitchen and bathroom detailing, window cleaning, basement cleans, and home organizing — all residential.",
      },
    ],
  },
  {
    slug: "muskego-wi",
    city: "Muskego",
    state: "WI",
    isPrimary: false,
    metaTitle: "House Cleaning Muskego WI | Fresh Cleaning Place",
    metaDescription: `Residential house cleaning in Muskego, WI — weekly, deep cleaning & organizing. Locally owned, satisfaction guaranteed. Call ${business.phone}.`,
    h1: "House Cleaning Services in Muskego, Wisconsin",
    intro:
      "Looking for trusted house cleaning in Muskego? Fresh Cleaning Place LLC provides premium residential cleaning for homeowners across Muskego and Milwaukee County and surrounding areas — with supplies included and satisfaction guaranteed on every visit.",
    localNote:
      "Muskego clients praise our monthly cleaning plans and outstanding communication — many have used us for years.",
    faqs: [
      {
        question: "Do you offer house cleaning in Muskego, WI?",
        answer: `Yes. We provide residential house cleaning throughout Muskego and surrounding areas. Call ${business.phone} for a free estimate.`,
      },
      {
        question: "What services are available in Muskego?",
        answer:
          "Regular weekly and biweekly cleaning, deep cleaning, kitchen and bathroom detailing, window cleaning, basement cleans, and home organizing — all residential.",
      },
    ],
  },
  {
    slug: "new-berlin-wi",
    city: "New Berlin",
    state: "WI",
    isPrimary: false,
    metaTitle: "House Cleaning New Berlin WI | Fresh Cleaning Place",
    metaDescription: `Residential house cleaning in New Berlin, WI — weekly, deep cleaning & organizing. Locally owned, satisfaction guaranteed. Call ${business.phone}.`,
    h1: "House Cleaning Services in New Berlin, Wisconsin",
    intro:
      "Looking for trusted house cleaning in New Berlin? Fresh Cleaning Place LLC provides premium residential cleaning for homeowners across New Berlin and Milwaukee County and surrounding areas — with supplies included and satisfaction guaranteed on every visit.",
    localNote:
      "New Berlin families book recurring house cleaning and seasonal deep cleans with the same trusted team every visit.",
    faqs: [
      {
        question: "Do you offer house cleaning in New Berlin, WI?",
        answer: `Yes. We provide residential house cleaning throughout New Berlin and surrounding areas. Call ${business.phone} for a free estimate.`,
      },
      {
        question: "What services are available in New Berlin?",
        answer:
          "Regular weekly and biweekly cleaning, deep cleaning, kitchen and bathroom detailing, window cleaning, basement cleans, and home organizing — all residential.",
      },
    ],
  },
  {
    slug: "franklin-wi",
    city: "Franklin",
    state: "WI",
    isPrimary: false,
    metaTitle: "House Cleaning Franklin WI | Fresh Cleaning Place",
    metaDescription: `Residential house cleaning in Franklin, WI — weekly, deep cleaning & organizing. Locally owned, satisfaction guaranteed. Call ${business.phone}.`,
    h1: "House Cleaning Services in Franklin, Wisconsin",
    intro:
      "Looking for trusted house cleaning in Franklin? Fresh Cleaning Place LLC provides premium residential cleaning for homeowners across Franklin and Milwaukee County and surrounding areas — with supplies included and satisfaction guaranteed on every visit.",
    localNote:
      "Franklin homeowners choose Fresh Cleaning Place for detailed deep cleaning, organizing, and flexible scheduling.",
    faqs: [
      {
        question: "Do you offer house cleaning in Franklin, WI?",
        answer: `Yes. We provide residential house cleaning throughout Franklin and surrounding areas. Call ${business.phone} for a free estimate.`,
      },
      {
        question: "What services are available in Franklin?",
        answer:
          "Regular weekly and biweekly cleaning, deep cleaning, kitchen and bathroom detailing, window cleaning, basement cleans, and home organizing — all residential.",
      },
    ],
  },
  {
    slug: "greendale-wi",
    city: "Greendale",
    state: "WI",
    isPrimary: false,
    metaTitle: "House Cleaning Greendale WI | Fresh Cleaning Place",
    metaDescription: `Residential house cleaning in Greendale, WI — weekly, deep cleaning & organizing. Locally owned, satisfaction guaranteed. Call ${business.phone}.`,
    h1: "House Cleaning Services in Greendale, Wisconsin",
    intro:
      "Looking for trusted house cleaning in Greendale? Fresh Cleaning Place LLC provides premium residential cleaning for homeowners across Greendale and Milwaukee County and surrounding areas — with supplies included and satisfaction guaranteed on every visit.",
    localNote:
      "Greendale is part of our core service zone — expect on-time arrivals, supplies included, and spotless results.",
    faqs: [
      {
        question: "Do you offer house cleaning in Greendale, WI?",
        answer: `Yes. We provide residential house cleaning throughout Greendale and surrounding areas. Call ${business.phone} for a free estimate.`,
      },
      {
        question: "What services are available in Greendale?",
        answer:
          "Regular weekly and biweekly cleaning, deep cleaning, kitchen and bathroom detailing, window cleaning, basement cleans, and home organizing — all residential.",
      },
    ],
  },
  {
    slug: "wauwatosa-wi",
    city: "Wauwatosa",
    state: "WI",
    isPrimary: false,
    metaTitle: "House Cleaning Wauwatosa WI | Fresh Cleaning Place",
    metaDescription: `Residential house cleaning in Wauwatosa, WI — weekly, deep cleaning & organizing. Locally owned, satisfaction guaranteed. Call ${business.phone}.`,
    h1: "House Cleaning Services in Wauwatosa, Wisconsin",
    intro:
      "Looking for trusted house cleaning in Wauwatosa? Fresh Cleaning Place LLC provides premium residential cleaning for homeowners across Wauwatosa and Milwaukee County and surrounding areas — with supplies included and satisfaction guaranteed on every visit.",
    localNote:
      "Wauwatosa homes get premium residential cleaning with free estimates, clear pricing, and crews traveling from our Hales Corners base.",
    faqs: [
      {
        question: "Do you offer house cleaning in Wauwatosa, WI?",
        answer: `Yes. We provide residential house cleaning throughout Wauwatosa and surrounding areas. Call ${business.phone} for a free estimate.`,
      },
      {
        question: "What services are available in Wauwatosa?",
        answer:
          "Regular weekly and biweekly cleaning, deep cleaning, kitchen and bathroom detailing, window cleaning, basement cleans, and home organizing — all residential.",
      },
    ],
  },
  {
    slug: "brookfield-wi",
    city: "Brookfield",
    state: "WI",
    isPrimary: false,
    metaTitle: "House Cleaning Brookfield WI | Fresh Cleaning Place",
    metaDescription: `Residential house cleaning in Brookfield, WI — weekly, deep cleaning & organizing. Locally owned, satisfaction guaranteed. Call ${business.phone}.`,
    h1: "House Cleaning Services in Brookfield, Wisconsin",
    intro:
      "Looking for trusted house cleaning in Brookfield? Fresh Cleaning Place LLC provides premium residential cleaning for homeowners across Brookfield and Milwaukee County and surrounding areas — with supplies included and satisfaction guaranteed on every visit.",
    localNote:
      "Brookfield clients appreciate our meticulous bathrooms, kitchens, and move-in/move-out deep cleaning.",
    faqs: [
      {
        question: "Do you offer house cleaning in Brookfield, WI?",
        answer: `Yes. We provide residential house cleaning throughout Brookfield and surrounding areas. Call ${business.phone} for a free estimate.`,
      },
      {
        question: "What services are available in Brookfield?",
        answer:
          "Regular weekly and biweekly cleaning, deep cleaning, kitchen and bathroom detailing, window cleaning, basement cleans, and home organizing — all residential.",
      },
    ],
  },
  {
    slug: "oak-creek-wi",
    city: "Oak Creek",
    state: "WI",
    isPrimary: false,
    metaTitle: "House Cleaning Oak Creek WI | Fresh Cleaning Place",
    metaDescription: `Residential house cleaning in Oak Creek, WI — weekly, deep cleaning & organizing. Locally owned, satisfaction guaranteed. Call ${business.phone}.`,
    h1: "House Cleaning Services in Oak Creek, Wisconsin",
    intro:
      "Looking for trusted house cleaning in Oak Creek? Fresh Cleaning Place LLC provides premium residential cleaning for homeowners across Oak Creek and Milwaukee County and surrounding areas — with supplies included and satisfaction guaranteed on every visit.",
    localNote:
      "Oak Creek homeowners call us for biweekly maintenance, window cleaning, and basement specialty cleans.",
    faqs: [
      {
        question: "Do you offer house cleaning in Oak Creek, WI?",
        answer: `Yes. We provide residential house cleaning throughout Oak Creek and surrounding areas. Call ${business.phone} for a free estimate.`,
      },
      {
        question: "What services are available in Oak Creek?",
        answer:
          "Regular weekly and biweekly cleaning, deep cleaning, kitchen and bathroom detailing, window cleaning, basement cleans, and home organizing — all residential.",
      },
    ],
  },
  {
    slug: "south-milwaukee-wi",
    city: "South Milwaukee",
    state: "WI",
    isPrimary: false,
    metaTitle: "House Cleaning South Milwaukee WI | Fresh Cleaning Place",
    metaDescription: `Residential house cleaning in South Milwaukee, WI — weekly, deep cleaning & organizing. Locally owned, satisfaction guaranteed. Call ${business.phone}.`,
    h1: "House Cleaning Services in South Milwaukee, Wisconsin",
    intro:
      "Looking for trusted house cleaning in South Milwaukee? Fresh Cleaning Place LLC provides premium residential cleaning for homeowners across South Milwaukee and Milwaukee County and surrounding areas — with supplies included and satisfaction guaranteed on every visit.",
    localNote:
      "South Milwaukee families enjoy fresh, stress-free homes thanks to our satisfaction-guaranteed residential service.",
    faqs: [
      {
        question: "Do you offer house cleaning in South Milwaukee, WI?",
        answer: `Yes. We provide residential house cleaning throughout South Milwaukee and surrounding areas. Call ${business.phone} for a free estimate.`,
      },
      {
        question: "What services are available in South Milwaukee?",
        answer:
          "Regular weekly and biweekly cleaning, deep cleaning, kitchen and bathroom detailing, window cleaning, basement cleans, and home organizing — all residential.",
      },
    ],
  },
  {
    slug: "milwaukee-wi",
    city: "Milwaukee",
    state: "WI",
    isPrimary: false,
    metaTitle: "House Cleaning Milwaukee WI | Fresh Cleaning Place",
    metaDescription: `Residential house cleaning in Milwaukee, WI — weekly, deep cleaning & organizing. Locally owned in Hales Corners. Call ${business.phone}.`,
    h1: "House Cleaning Services in Milwaukee, Wisconsin",
    intro:
      "Looking for trusted house cleaning in Milwaukee? Fresh Cleaning Place LLC provides premium residential cleaning for homeowners in Milwaukee neighborhoods — house cleaning only, with crews traveling from our Hales Corners base.",
    localNote:
      "We serve residential neighborhoods throughout Milwaukee — not commercial offices. Expect the same meticulous care neighbors recommend on Nextdoor.",
    faqs: [
      {
        question: "Do you offer house cleaning in Milwaukee, WI?",
        answer: `Yes. We provide residential house cleaning in Milwaukee neighborhoods we can reach efficiently from Hales Corners. Call ${business.phone} to confirm your area.`,
      },
      {
        question: "Do you clean commercial offices in Milwaukee?",
        answer:
          "No. Fresh Cleaning Place focuses exclusively on residential house cleaning for homeowners and families.",
      },
    ],
  },
];

export function getAreaBySlug(slug: string): SeoAreaPage | undefined {
  return seoAreas.find((a) => a.slug === slug);
}

export function getAllAreaSlugs(): string[] {
  return seoAreas.map((a) => a.slug);
}

export function getOtherAreas(currentSlug: string, limit = 6) {
  return seoAreas.filter((a) => a.slug !== currentSlug).slice(0, limit);
}
