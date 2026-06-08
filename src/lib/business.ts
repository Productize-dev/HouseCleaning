export const business = {
  name: "Fresh Cleaning Place LLC",
  shortName: "Fresh Cleaning Place",
  tagline:
    "Premium residential house cleaning in Hales Corners, Milwaukee County and surrounding areas",
  phone: "(414) 491-5526",
  phoneHref: "tel:+14144915526",
  email: "freshcleaning75@gmail.com",
  emailHref: "mailto:freshcleaning75@gmail.com",
  address: {
    street: "11421 W Abbott Ave",
    city: "Hales Corners",
    state: "WI",
    zip: "53130",
    country: "US",
    full: "11421 W Abbott Ave, Hales Corners, WI 53130",
  },
  geo: {
    latitude: 42.948457,
    longitude: -88.05593,
  },
  owner: "Jacky",
  hours: "Mon–Sat: 8:00 AM – 6:00 PM",
  foundedNote: "Trusted by neighbors across Milwaukee County and surrounding areas",
  serviceRegion: "Milwaukee County and surrounding areas",
  serviceRegionShort: "Milwaukee County & surroundings",
  promo: "20% OFF your first home cleaning — new clients",
  nextdoorUrl:
    "https://nextdoor.com/page/fresh-cleaning-greenfield-wi",
  satisfaction: "100% satisfaction guaranteed on every visit",
} as const;

export const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/#why-us", label: "Why Us" },
  { href: "/#gallery", label: "Our Work" },
  { href: "/#reviews", label: "Reviews" },
  { href: "/areas", label: "Areas" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#contact", label: "Contact" },
] as const;

export const stats = [
  { value: "100%", label: "Satisfaction guaranteed" },
  { value: "12+", label: "Cities served" },
  { value: "5★", label: "Neighbor reviews" },
  { value: "Local", label: "Hales Corners based" },
] as const;

export const trustPoints = [
  {
    title: "Locally Owned",
    description: "Your Hales Corners neighbors — not a national franchise",
    icon: "map" as const,
  },
  {
    title: "Satisfaction Guaranteed",
    description: business.satisfaction,
    icon: "shield" as const,
  },
  {
    title: "Fully Equipped",
    description: "Professional tools & supplies brought to every visit",
    icon: "sparkles" as const,
  },
  {
    title: "Flexible Plans",
    description: "Weekly, biweekly, monthly, or one-time deep cleans",
    icon: "calendar" as const,
  },
] as const;

export const processSteps = [
  {
    step: "01",
    title: "Free Home Estimate",
    description:
      "Call or email us about your home. We'll recommend the right cleaning plan for your space and schedule.",
  },
  {
    step: "02",
    title: "We Confirm Details",
    description:
      "Clear pricing, arrival window, and what to expect — outstanding communication from start to finish.",
  },
  {
    step: "03",
    title: "Expert Home Clean",
    description:
      "Jacky and her crew arrive on time with supplies, cleaning every room with meticulous care.",
  },
  {
    step: "04",
    title: "Enjoy Your Fresh Home",
    description:
      "Walk into a spotless, fresh-smelling home. Recurring clients get the same trusted team every visit.",
  },
] as const;

export const serviceAreas = [
  "Hales Corners",
  "Greenfield",
  "West Allis",
  "Muskego",
  "New Berlin",
  "Franklin",
  "Greendale",
  "Wauwatosa",
  "Brookfield",
  "Oak Creek",
  "South Milwaukee",
  "Milwaukee",
] as const;

export const services = [
  {
    title: "Regular House Cleaning",
    description:
      "Weekly, biweekly, or monthly maintenance for kitchens, bathrooms, bedrooms, and living areas — tailored to your home.",
    keywords: "house cleaning, maid service, home cleaning Hales Corners",
    featured: true,
  },
  {
    title: "Deep Cleaning",
    description:
      "Top-to-bottom deep cleans for move-ins, move-outs, spring cleaning, or homes needing extra attention.",
    keywords: "deep cleaning, spring cleaning, move out cleaning",
    featured: true,
  },
  {
    title: "Kitchen & Appliance Detail",
    description:
      "Stovetops, sinks, fridges, and appliances restored to a sparkling, sanitary finish.",
    keywords: "kitchen cleaning, appliance cleaning",
    featured: false,
  },
  {
    title: "Bathroom Deep Clean",
    description:
      "Tubs, showers, tile, and fixtures — including tough hard-water and soap scum buildup.",
    keywords: "bathroom cleaning, shower cleaning",
    featured: false,
  },
  {
    title: "Basement & Specialty",
    description:
      "Deep basement cleans and specialty rooms. We bring our own professional-grade supplies.",
    keywords: "basement cleaning",
    featured: false,
  },
  {
    title: "Window Cleaning",
    description:
      "Crystal-clear windows that brighten every room. Free estimates available.",
    keywords: "window cleaning Hales Corners",
    featured: false,
  },
  {
    title: "Home Organizing",
    description:
      "Declutter and organize closets, kitchens, and living spaces — calm, functional rooms you'll love.",
    keywords: "home organizing, decluttering",
    featured: true,
  },
] as const;

export const testimonials = [
  {
    quote:
      "I highly recommend Fresh Cleaning Place LLC. I have been using them for years for a monthly cleaning. Jacky's crew is amazing — very high work ethics and outstanding communication.",
    author: "J. B.",
    location: "Muskego, WI",
  },
  {
    quote:
      "Jacky is professional, timely, and friendly. Her deep cleaning left our home spotless and smelling fresh. Affordable, reliable, and great communication from start to finish.",
    author: "Verified Nextdoor neighbor",
    location: "Hales Corners area",
  },
  {
    quote:
      "Quick to respond, flexible with scheduling, and incredibly thorough. They took a lot of stress off our plate — our home looks sparkling clean every visit.",
    author: "G. O.",
    location: "North Prairie, WI",
  },
  {
    quote:
      "The cleaning crews do a fantastic job! Very reliable too. We look forward to their regular visits.",
    author: "L. B.",
    location: "Burlington, WI",
  },
] as const;

export const values = [
  {
    title: "Quality You Can See",
    description:
      "Meticulous attention to kitchens, bathrooms, and every living space",
  },
  {
    title: "Reliability",
    description: "On-time arrivals, consistent crews, and clear communication",
  },
  {
    title: "Trust & Respect",
    description:
      "Your home treated with care — loyalty and responsibility every visit",
  },
] as const;

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://freshcleaningplace.com";
