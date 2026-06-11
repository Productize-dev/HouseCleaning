import {
  business,
  serviceAreaSummary,
  serviceAreas,
  services,
  siteUrl,
} from "./business";

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "CleaningService",
    "@id": `${siteUrl}/#organization`,
    name: business.name,
    alternateName: business.shortName,
    description: business.tagline,
    url: siteUrl,
    telephone: business.phone,
    email: business.email,
    image: `${siteUrl}/images/og-logo.png`,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address.street,
      addressLocality: business.address.city,
      addressRegion: business.address.state,
      postalCode: business.address.zip,
      addressCountry: business.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: business.geo.latitude,
      longitude: business.geo.longitude,
    },
    areaServed: serviceAreas.map((city) => ({
      "@type": "City",
      name: `${city}, WI`,
    })),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: "08:00",
        closes: "18:00",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Cleaning Services",
      itemListElement: services.map((service, index) => ({
        "@type": "Offer",
        position: index + 1,
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.description,
          provider: { "@id": `${siteUrl}/#organization` },
        },
      })),
    },
    sameAs: [business.nextdoorUrl],
  };
}

export function webPageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${siteUrl}/#webpage`,
    url: siteUrl,
    name: `House Cleaning Hales Corners WI | ${business.name}`,
    description: business.tagline,
    isPartOf: { "@id": `${siteUrl}/#website` },
    about: { "@id": `${siteUrl}/#organization` },
    inLanguage: "en-US",
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: business.name,
    publisher: { "@id": `${siteUrl}/#organization` },
  };
}

export function breadcrumbJsonLd(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function servicePageJsonLd(params: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: params.name,
    description: params.description,
    url: params.url,
    provider: { "@id": `${siteUrl}/#organization` },
    areaServed: {
      "@type": "State",
      name: "Wisconsin",
    },
    serviceType: "Residential and commercial cleaning",
  };
}

export function areaPageJsonLd(params: {
  city: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `House Cleaning ${params.city}, WI`,
    description: params.description,
    url: params.url,
    provider: { "@id": `${siteUrl}/#organization` },
    areaServed: {
      "@type": "City",
      name: `${params.city}, WI`,
    },
  };
}

export function faqPageJsonLd(
  faqs: readonly { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function faqJsonLd() {
  const faqs = [
    {
      question: "What areas does Fresh Cleaning Place serve?",
      answer: `We provide residential and commercial cleaning throughout ${business.serviceRegion} — ${serviceAreaSummary}`,
    },
    {
      question: "Do you offer commercial cleaning?",
      answer: `Yes. We clean offices, retail spaces, and commercial restrooms throughout ${business.serviceRegion}.`,
    },
    {
      question: "Do you bring your own cleaning supplies?",
      answer:
        "Yes. Our professional crews arrive with their own tools and cleaning products for every home and business visit, including deep cleans and commercial restroom service.",
    },
    {
      question: "How do I get a cleaning estimate?",
      answer: `Call ${business.phone} for a free estimate. We offer house cleaning, commercial cleaning, deep cleaning, window cleaning, and home organizing with flexible scheduling.`,
    },
    {
      question: "Does Fresh Cleaning Place offer recurring cleaning?",
      answer:
        "Yes. We offer weekly, biweekly, and monthly cleaning plans for homes and businesses with consistent crews and outstanding communication.",
    },
  ];

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
