import { business, serviceAreaSummary } from "@/lib/business";

export const homepageFaqs = [
  {
    question: "What areas does Fresh Cleaning Place serve?",
    answer: `We provide residential and commercial cleaning throughout ${business.serviceRegion} — ${serviceAreaSummary}`,
  },
  {
    question: "Do you offer both residential and commercial cleaning?",
    answer:
      "Yes. We clean homes, offices, retail spaces, clinics, dental offices, veterinary clinics, and commercial restrooms. Many clients use us for recurring house cleaning; we also serve small businesses and facility maintenance.",
  },
  {
    question: "Do you bring your own cleaning supplies?",
    answer:
      "Yes. Our professional crews arrive with their own tools and cleaning products for every visit — residential deep cleans, commercial restrooms, and specialty jobs included.",
  },
  {
    question: "How do I get a cleaning estimate?",
    answer: `Call ${business.phone} or email ${business.email} for a free estimate. We offer house cleaning, commercial cleaning, deep cleaning, window cleaning, and home organizing with flexible scheduling.`,
  },
  {
    question: "Do you offer recurring cleaning?",
    answer:
      "Yes. We offer weekly, biweekly, and monthly plans for homes and businesses with consistent crews and outstanding communication.",
  },
  {
    question: "Is there a discount for first-time customers?",
    answer: business.promo,
  },
  {
    question: "Do you offer maid service and house cleaning near Hales Corners?",
    answer: `Yes. We provide maid service and regular house cleaning in Hales Corners, Greenfield, West Allis, Milwaukee, and across ${business.serviceRegion}. Call ${business.phone} for a free estimate.`,
  },
  {
    question: "Do you clean dental offices, medical clinics, and vet clinics?",
    answer:
      "Yes. We offer specialized commercial cleaning for dental clinics, medical clinics, veterinary clinics, and building maintenance for offices and shared facilities.",
  },
] as const;
