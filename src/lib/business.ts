export const business = {
  name: "Fresh Cleaning Place LLC",
  shortName: "Fresh Cleaning Place",
  tagline:
    "Residential and commercial cleaning across Milwaukee, Kenosha, Racine, and Waukesha Counties",
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
  hours: "Mon–Fri: 8:00 AM – 6:00 PM",
  foundedNote:
    "Trusted by neighbors and businesses across Milwaukee, Kenosha, Racine, and Waukesha Counties",
  serviceRegion: "Milwaukee, Kenosha, Racine, and Waukesha Counties",
  serviceRegionShort: "4-county service area",
  promo: "20% OFF your first cleaning — new clients",
  nextdoorUrl:
    "https://nextdoor.com/page/fresh-cleaning-greenfield-wi",
  facebookUrl:
    "https://www.facebook.com/share/1Ccbq2YWB8/?mibextid=wwXIfr",
  instagramUrl: "https://www.instagram.com/fresh_cleaning_place75/",
  satisfaction: "100% satisfaction guaranteed on every visit",
  nextdoorStory:
    "Specialized in Residential and Commercial cleaning!! providing quality, guarantee and reliability. is a company that provides the best service to our clients.",
  mission:
    "is to offer our clients a guarantee and the best satisfaction of our work, with great dedication and performance.",
  vision:
    "to reach many residential and commercial to offer the best cleaning service.",
  valuesStatement: "Loyalty, responsibility, and trust.",
  nextdoorClosing:
    "thanks to our clients for all their trust. Committed to our clients. The best place. Fresh Cleaning Place!!!!",
} as const;

export const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/#about", label: "About" },
  { href: "/#why-us", label: "Why Us" },
  { href: "/#gallery", label: "Our Work" },
  { href: "/#reviews", label: "Reviews" },
  { href: "/areas", label: "Areas" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#contact", label: "Contact" },
] as const;

export const stats = [
  { value: "100%", label: "Satisfaction guaranteed" },
  { value: "35", label: "Cities served" },
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
    description: "Residential & commercial — weekly, biweekly, or one-time",
    icon: "calendar" as const,
  },
] as const;

export const processSteps = [
  {
    step: "01",
    title: "Free Estimate",
    description:
      "Call or email us about your home or business. We'll recommend the right cleaning plan for your space and schedule.",
  },
  {
    step: "02",
    title: "We Confirm Details",
    description:
      "Clear pricing, arrival window, and what to expect — outstanding communication from start to finish.",
  },
  {
    step: "03",
    title: "Expert Clean",
    description:
      "Our crew arrives on time with supplies, cleaning every room with meticulous care.",
  },
  {
    step: "04",
    title: "Enjoy the Results",
    description:
      "Walk into a spotless, fresh-smelling space. Recurring clients get the same trusted team every visit.",
  },
] as const;

export const serviceCounties = [
  {
    name: "Milwaukee County",
    cities: [
      "Milwaukee",
      "Hales Corners",
      "Greenfield",
      "Greendale",
      "South Milwaukee",
      "Cudahy",
      "Franklin",
      "Oak Creek",
      "Glendale",
      "St. Francis",
      "Fox Point",
      "Bayside",
      "Shorewood",
      "Whitefish Bay",
      "West Allis",
      "Wauwatosa",
      "Mequon",
      "Cedarburg",
    ],
  },
  {
    name: "Kenosha County",
    cities: ["Kenosha", "Pleasant Prairie"],
  },
  {
    name: "Racine County",
    cities: ["Racine", "Burlington", "Waterford", "Franksville", "Caledonia"],
  },
  {
    name: "Waukesha County",
    cities: [
      "Waukesha",
      "Brookfield",
      "New Berlin",
      "Muskego",
      "Pewaukee",
      "Oconomowoc",
      "Menomonee Falls",
      "Elm Grove",
      "Hartland",
      "North Prairie",
    ],
  },
] as const;

export const serviceAreas = serviceCounties.flatMap(
  (county) => county.cities,
);

export const serviceAreaSummary =
  "35 cities across Milwaukee, Kenosha, Racine, and Waukesha Counties — including Milwaukee, Hales Corners, Greenfield, Kenosha, Racine, Waukesha, Brookfield, Muskego, North Prairie, Caledonia, and more.";

export const residentialServices = [
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

export const commercialServices = [
  {
    title: "Office Cleaning",
    description:
      "Regular maintenance for offices, workspaces, and common areas — professional results on your schedule.",
    keywords: "office cleaning, commercial cleaning Hales Corners",
    featured: true,
  },
  {
    title: "Commercial Restroom Cleaning",
    description:
      "Deep sanitization of restrooms, urinals, stalls, and fixtures for offices, retail, and facilities.",
    keywords: "commercial restroom cleaning, bathroom sanitization",
    featured: true,
  },
  {
    title: "Retail & Small Business",
    description:
      "Keep your storefront, break room, and customer areas spotless — flexible before-hours or after-hours visits.",
    keywords: "retail cleaning, small business cleaning",
    featured: false,
  },
  {
    title: "Commercial Deep Cleaning",
    description:
      "One-time or periodic deep cleans for move-ins, post-construction, or facilities needing extra attention.",
    keywords: "commercial deep cleaning",
    featured: false,
  },
] as const;

/** All services — residential first, then commercial */
export const services = [...residentialServices, ...commercialServices] as const;

export const testimonials = [
  {
    quote:
      "I highly recommend Fresh Cleaning Place LLC. I have been using them for years for a monthly cleaning. The crew is amazing — very high work ethics and outstanding communication.",
    author: "J. B.",
    location: "Muskego, WI",
  },
  {
    quote:
      "Professional, timely, and friendly. The deep cleaning left our home spotless and smelling fresh. Affordable, reliable, and great communication from start to finish.",
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
      "Meticulous attention to every room — homes, offices, and commercial spaces",
  },
  {
    title: "Reliability",
    description: "On-time arrivals, consistent crews, and clear communication",
  },
  {
    title: "Trust & Respect",
    description:
      "Your property treated with care — loyalty and responsibility every visit",
  },
] as const;

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://freshcleaningplace.com";
