import { business, serviceCounties } from "@/lib/business";
import { citySlug } from "./slug";

export type SeoAreaPage = {
  slug: string;
  city: string;
  county: string;
  state: "WI";
  isPrimary: boolean;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  localNote: string;
  faqs: readonly { question: string; answer: string }[];
};

const SERVICES_ANSWER =
  "House cleaning, office cleaning, commercial restrooms, deep cleaning, kitchen and bathroom detailing, window cleaning, and home organizing.";

type AreaOverrides = Partial<
  Pick<SeoAreaPage, "intro" | "localNote" | "metaDescription" | "faqs">
>;

const areaOverrides: Record<string, AreaOverrides> = {
  "Hales Corners": {
    metaDescription: `Residential & commercial cleaning in Hales Corners, WI — weekly, deep cleaning & organizing. Locally owned at ${business.address.street}. Call ${business.phone}.`,
    intro: `Looking for trusted residential and commercial cleaning in Hales Corners? Fresh Cleaning Place LLC is based right here at ${business.address.full} — providing premium residential cleaning for neighbors across Hales Corners with supplies included and satisfaction guaranteed.`,
    localNote:
      "As a Hales Corners–based company, we are your neighborhood house cleaning team — not a distant franchise. Many of our longest-standing clients live right here in the village.",
    faqs: [
      {
        question: "Are you located in Hales Corners?",
        answer: `Yes. Our business address is ${business.address.full}. We serve Hales Corners homes and businesses throughout ${business.serviceRegion}.`,
      },
      {
        question: "What house cleaning services do you offer in Hales Corners?",
        answer: SERVICES_ANSWER,
      },
    ],
  },
  Greenfield: {
    localNote:
      "Greenfield clients trust Fresh Cleaning Place for reliable biweekly and deep cleaning just minutes from our Hales Corners headquarters.",
  },
  "West Allis": {
    localNote:
      "From ranch homes to duplexes, West Allis residents count on our crew for thorough kitchen, bathroom, and whole-home cleaning.",
  },
  Muskego: {
    localNote:
      "Muskego clients praise our monthly cleaning plans and outstanding communication — many have used us for years.",
  },
  "New Berlin": {
    localNote:
      "New Berlin families book recurring house cleaning and seasonal deep cleans with the same trusted team every visit.",
  },
  Franklin: {
    localNote:
      "Franklin clients choose Fresh Cleaning Place for detailed deep cleaning, organizing, and flexible scheduling.",
  },
  Greendale: {
    localNote:
      "Greendale is part of our core service zone — expect on-time arrivals, supplies included, and spotless results.",
  },
  Wauwatosa: {
    localNote:
      "Wauwatosa homes get premium residential cleaning with free estimates, clear pricing, and crews traveling from our Hales Corners base.",
  },
  Brookfield: {
    localNote:
      "Brookfield clients appreciate our meticulous bathrooms, kitchens, and move-in/move-out deep cleaning.",
  },
  "Oak Creek": {
    localNote:
      "Oak Creek businesses call us for biweekly maintenance, window cleaning, and basement specialty cleans.",
  },
  "South Milwaukee": {
    localNote:
      "South Milwaukee families enjoy fresh, stress-free homes thanks to our satisfaction-guaranteed residential service.",
  },
  Milwaukee: {
    metaDescription: `Residential & commercial cleaning in Milwaukee, WI — weekly, deep cleaning & organizing. Locally owned in Hales Corners. Call ${business.phone}.`,
    intro:
      "Looking for trusted residential and commercial cleaning in Milwaukee? Fresh Cleaning Place LLC provides cleaning for homes and businesses in Milwaukee neighborhoods, with crews traveling from our Hales Corners base.",
    localNote:
      "We serve residential and commercial clients throughout Milwaukee. Expect the same meticulous care neighbors recommend on Nextdoor.",
    faqs: [
      {
        question: "Do you offer house cleaning in Milwaukee, WI?",
        answer: `Yes. We provide residential house cleaning in Milwaukee neighborhoods we can reach efficiently from Hales Corners. Call ${business.phone} to confirm your area.`,
      },
      {
        question: "Do you clean commercial offices in Milwaukee?",
        answer:
          "Yes. We offer office cleaning, commercial restroom service, and flexible scheduling for Milwaukee businesses.",
      },
    ],
  },
  Burlington: {
    localNote:
      "Burlington neighbors recommend our reliable crews — the same team trusted across Racine County.",
  },
};

function buildArea(city: string, county: string): SeoAreaPage {
  const isPrimary = city === "Hales Corners";
  const overrides = areaOverrides[city];
  const metaDescription =
    overrides?.metaDescription ??
    `Residential & commercial cleaning in ${city}, WI — weekly, deep cleaning & organizing. Locally owned, satisfaction guaranteed. Call ${business.phone}.`;

  return {
    slug: citySlug(city),
    city,
    county,
    state: "WI",
    isPrimary,
    metaTitle: `House Cleaning ${city} WI | Fresh Cleaning Place`,
    metaDescription,
    h1: `Residential & Commercial Cleaning in ${city}, Wisconsin`,
    intro:
      overrides?.intro ??
      `Looking for trusted residential and commercial cleaning in ${city}? Fresh Cleaning Place LLC provides residential and commercial cleaning for homes and businesses across ${city} and ${county} — with supplies included and satisfaction guaranteed on every visit.`,
    localNote:
      overrides?.localNote ??
      `${city} clients trust Fresh Cleaning Place for reliable residential and commercial cleaning throughout ${county}.`,
    faqs: overrides?.faqs ?? [
      {
        question: `Do you offer house cleaning in ${city}, WI?`,
        answer: `Yes. We provide residential and commercial cleaning throughout ${city}. Call ${business.phone} for a free estimate.`,
      },
      {
        question: `What residential and commercial services are available in ${city}?`,
        answer: SERVICES_ANSWER,
      },
    ],
  };
}

export const seoAreas: SeoAreaPage[] = serviceCounties.flatMap((county) =>
  county.cities.map((city) => buildArea(city, county.name)),
);

export function getAreaBySlug(slug: string): SeoAreaPage | undefined {
  return seoAreas.find((a) => a.slug === slug);
}

export function getAllAreaSlugs(): string[] {
  return seoAreas.map((a) => a.slug);
}

export function getOtherAreas(currentSlug: string, limit = 6) {
  return seoAreas.filter((a) => a.slug !== currentSlug).slice(0, limit);
}
