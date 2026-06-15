import { business, serviceAreas, services, siteUrl, testimonials } from "./business";
import { homepageFaqs } from "./faqs";

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
    image: `${siteUrl}/images/team-cleaning.png`,
    logo: {
      "@type": "ImageObject",
      url: `${siteUrl}/images/og-logo.png`,
      width: 578,
      height: 578,
    },
    priceRange: "$$",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: business.phone,
      contactType: "customer service",
      areaServed: "US",
      availableLanguage: "English",
    },
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
    hasMap: business.googleMapsUrl,
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
    sameAs: [
      business.nextdoorUrl,
      business.facebookUrl,
      business.instagramUrl,
    ].filter(Boolean),
    potentialAction: [
      {
        "@type": "ReserveAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: business.bookingUrl,
          actionPlatform: [
            "http://schema.org/DesktopWebPlatform",
            "http://schema.org/MobileWebPlatform",
          ],
        },
        name: business.bookingLabel,
      },
      {
        "@type": "ReserveAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: business.phoneHref,
          actionPlatform: [
            "http://schema.org/DesktopWebPlatform",
            "http://schema.org/MobileWebPlatform",
          ],
        },
        name: "Call for a free cleaning estimate",
      },
    ],
    review: testimonials.map((testimonial) => ({
      "@type": "Review",
      reviewBody: testimonial.quote,
      author: {
        "@type": "Person",
        name: testimonial.author,
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: 5,
        bestRating: 5,
      },
    })),
  };
}

export function webPageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${siteUrl}/#webpage`,
    url: siteUrl,
    name: `House Cleaning Hales Corners & Milwaukee County | ${business.name}`,
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
  return faqPageJsonLd(homepageFaqs);
}
