export type SeoServicePage = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  includes: readonly string[];
  benefits: readonly string[];
  faqs: readonly { question: string; answer: string }[];
};

export const seoServices: SeoServicePage[] = [
  {
    slug: "regular-house-cleaning",
    title: "Regular House Cleaning",
    metaTitle: "Regular House Cleaning Hales Corners WI",
    metaDescription:
      "Weekly, biweekly & monthly house cleaning in Hales Corners, Milwaukee County & surroundings. Reliable crews, supplies included. Free estimate — call (414) 348-5500.",
    h1: "Regular House Cleaning in Hales Corners, Milwaukee County & surroundings",
    intro:
      "Keep your home consistently fresh with recurring house cleaning from Fresh Cleaning Place LLC. Our residential team handles kitchens, bathrooms, bedrooms, and living areas on a schedule that fits your life — weekly, biweekly, or monthly.",
    includes: [
      "Kitchen counters, sinks, and appliance exteriors",
      "Bathroom sinks, toilets, mirrors, and showers",
      "Dusting furniture, shelves, and reachable surfaces",
      "Vacuuming carpets and mopping hard floors",
      "Trash removal and tidy finishing touches",
      "Professional supplies and tools brought to every visit",
    ],
    benefits: [
      "Same trusted crew for recurring clients",
      "Flexible weekly, biweekly, or monthly plans",
      "Outstanding communication and on-time arrivals",
      "100% satisfaction guaranteed every visit",
    ],
    faqs: [
      {
        question: "How often should I schedule house cleaning?",
        answer:
          "Most families choose biweekly cleaning for a consistently tidy home. Weekly works well for busy households or homes with pets; monthly is ideal for lighter maintenance between deeper cleans.",
      },
      {
        question: "Do I need to be home during cleaning?",
        answer:
          "Many clients provide entry instructions so our crew can clean while they are at work. We coordinate arrival windows and communicate clearly before every visit.",
      },
    ],
  },
  {
    slug: "deep-cleaning",
    title: "Deep Cleaning",
    metaTitle: "Deep House Cleaning Hales Corners WI",
    metaDescription:
      "Top-to-bottom deep cleaning for move-ins, move-outs & spring cleaning in Hales Corners, Greenfield & West Allis. Free estimates. Call (414) 348-5500.",
    h1: "Deep House Cleaning Services in Southeastern Wisconsin",
    intro:
      "When your home needs more than a maintenance clean, our deep cleaning service delivers top-to-bottom attention — perfect for spring cleaning, move-ins, move-outs, or homes that have not been professionally cleaned in a while.",
    includes: [
      "Detailed kitchen degreasing and appliance attention",
      "Grout, tile, and fixture scrubbing in bathrooms",
      "Baseboards, door frames, and light switch plates",
      "Inside reachable cabinets and drawers (on request)",
      "Bedroom closets and surfaces dusted thoroughly",
      "Living areas, hallways, and staircases cleaned end to end",
    ],
    benefits: [
      "Ideal before listing a home or after a renovation",
      "Removes built-up grime standard cleans may miss",
      "Fresh, sanitized feel throughout the entire home",
      "Can be scheduled as a one-time or seasonal service",
    ],
    faqs: [
      {
        question: "How is deep cleaning different from regular cleaning?",
        answer:
          "Deep cleaning covers detail work — baseboards, buildup in kitchens and baths, and areas that are not part of a routine maintenance visit. It takes longer and resets your home to a like-new baseline.",
      },
      {
        question: "How long does a deep clean take?",
        answer:
          "Timing depends on home size and condition. We provide a free estimate after learning about your rooms, layout, and priorities so you know what to expect.",
      },
    ],
  },
  {
    slug: "kitchen-appliance-cleaning",
    title: "Kitchen & Appliance Cleaning",
    metaTitle: "Kitchen Cleaning Hales Corners WI",
    metaDescription:
      "Professional kitchen & appliance cleaning — stoves, sinks, fridges & more in Hales Corners, Milwaukee County & surroundings. Homes & businesses. (414) 348-5500.",
    h1: "Kitchen & Appliance Cleaning for Milwaukee County & Surrounding Areas",
    intro:
      "Kitchens are the heart of the home — and the hardest-working room to keep clean. Fresh Cleaning Place restores stovetops, sinks, countertops, and appliances so your cooking space looks and feels sanitary again.",
    includes: [
      "Stovetop and range hood degreasing",
      "Sink and faucet polishing",
      "Countertop and backsplash wipe-down",
      "Microwave interior and exterior",
      "Refrigerator exterior and handles",
      "Small appliance surfaces and cabinet fronts",
    ],
    benefits: [
      "Tackles grease and food buildup safely",
      "Pairs with regular or deep home cleaning plans",
      "Great before holidays or family gatherings",
      "Supplies included — no shopping required",
    ],
    faqs: [
      {
        question: "Do you clean inside the oven or refrigerator?",
        answer:
          "Interior appliance cleaning can be added to your visit. Mention it when requesting your free estimate so we allow the right time and supplies.",
      },
      {
        question: "Can I book kitchen cleaning only?",
        answer:
          "Yes. Kitchen-focused visits are available for homeowners who want targeted help in this high-traffic area.",
      },
    ],
  },
  {
    slug: "bathroom-deep-clean",
    title: "Bathroom Deep Clean",
    metaTitle: "Bathroom Cleaning Hales Corners WI",
    metaDescription:
      "Bathroom deep cleaning — tubs, showers, tile & fixtures in Hales Corners, West Allis & Muskego. Hard water & soap scum specialists. (414) 348-5500.",
    h1: "Bathroom Deep Cleaning Services Near You",
    intro:
      "Bathrooms collect soap scum, hard-water stains, and grime faster than any other room. Our bathroom deep clean targets tubs, showers, tile, toilets, and fixtures for a sparkling, fresh result.",
    includes: [
      "Tub and shower scrubbing",
      "Tile and grout attention",
      "Toilet interior and exterior sanitizing",
      "Vanity, mirror, and fixture polishing",
      "Floor mopping and baseboard wipe-down",
      "Chrome and glass streak-free finish",
    ],
    benefits: [
      "Handles tough hard-water and soap buildup",
      "Sanitary finish families appreciate",
      "Ideal before guests or home showings",
      "Available as add-on or standalone service",
    ],
    faqs: [
      {
        question: "Can you remove hard-water stains?",
        answer:
          "We use professional products and techniques for common hard-water and soap scum on Wisconsin fixtures. Severe etching may need specialized treatment — we will advise during your estimate.",
      },
      {
        question: "How many bathrooms can you clean in one visit?",
        answer:
          "We clean one or multiple bathrooms in the same appointment. Let us know your count when booking so we schedule enough time.",
      },
    ],
  },
  {
    slug: "basement-specialty-cleaning",
    title: "Basement & Specialty Cleaning",
    metaTitle: "Basement Cleaning Hales Corners WI",
    metaDescription:
      "Basement deep cleaning & specialty room cleaning in Hales Corners, Milwaukee County & surroundings. Dust, floors & storage areas. Free estimate (414) 348-5500.",
    h1: "Basement & Specialty Room Cleaning",
    intro:
      "Finished basements, laundry rooms, and storage areas often get overlooked. Fresh Cleaning Place provides detailed basement and specialty cleaning so every level of your home feels fresh and usable.",
    includes: [
      "Dusting shelves, ledges, and exposed surfaces",
      "Vacuuming carpets and rugs",
      "Mopping hard floors and laundry areas",
      "Wiping down appliances and utility sinks",
      "Light organizing of visible clutter (on request)",
      "Trash removal and final walk-through",
    ],
    benefits: [
      "Makes basement living spaces guest-ready",
      "Reduces dust and allergens in lower levels",
      "Professional supplies brought to your home",
      "Combine with whole-home deep cleaning",
    ],
    faqs: [
      {
        question: "Do you clean unfinished basements?",
        answer:
          "Yes, for many homes we can dust, sweep, and mop accessible areas. Share photos or details when requesting an estimate.",
      },
      {
        question: "Can basement cleaning be added to a regular plan?",
        answer:
          "Absolutely. Add basement service to recurring visits or schedule a one-time deep clean.",
      },
    ],
  },
  {
    slug: "window-cleaning",
    title: "Window Cleaning",
    metaTitle: "Window Cleaning Hales Corners WI",
    metaDescription:
      "Residential window cleaning in Hales Corners, Milwaukee County & surroundings. Streak-free interiors & reachable exteriors. Free estimate (414) 348-5500.",
    h1: "Residential Window Cleaning in Hales Corners",
    intro:
      "Bright, streak-free windows change how every room feels. Fresh Cleaning Place offers residential window cleaning for interiors and reachable exteriors — perfect alongside a regular or deep home clean.",
    includes: [
      "Interior glass and window sills",
      "Reachable exterior windows (ground level)",
      "Sliding door and patio door glass",
      "Removal of fingerprints and light buildup",
      "Screens dusted when accessible",
      "Final inspection for streak-free results",
    ],
    benefits: [
      "More natural light throughout your home",
      "Pairs with seasonal deep cleaning",
      "Careful work on frames and sills",
      "Free estimates for homes of any size",
    ],
    faqs: [
      {
        question: "Do you clean second-story exterior windows?",
        answer:
          "We focus on safely reachable windows. Multi-story exterior work may require specialized equipment — ask during your estimate.",
      },
      {
        question: "Can windows be added to my regular cleaning?",
        answer:
          "Yes. Many clients add interior windows quarterly or before holidays.",
      },
    ],
  },
  {
    slug: "home-organizing",
    title: "Home Organizing",
    metaTitle: "Home Organizing Hales Corners WI",
    metaDescription:
      "Home organizing & decluttering in Hales Corners, Milwaukee County & surroundings. Closets, kitchens & storage — plus cleaning. (414) 348-5500.",
    h1: "Home Organizing & Decluttering Services",
    intro:
      "A clean home feels even better when everything has its place. Fresh Cleaning Place offers home organizing alongside our residential cleaning — transforming cluttered closets, kitchens, and living spaces into calm, functional rooms.",
    includes: [
      "Closet and bedroom organization",
      "Kitchen and pantry sorting",
      "Living room and entryway resets",
      "Basement and storage area systems",
      "Donation-sorting guidance",
      "Optional clean + organize same-day visits",
    ],
    benefits: [
      "Customized approach for your household",
      "Less stress finding everyday items",
      "Pairs with deep or regular cleaning",
      "100% satisfaction guaranteed",
    ],
    faqs: [
      {
        question: "Do you haul away donations or trash?",
        answer:
          "We help sort and bag items for donation or disposal. Haul-away depends on volume — discuss when booking.",
      },
      {
        question: "Can organizing be combined with cleaning?",
        answer:
          "Yes. Many clients book organize + clean visits for a full home refresh.",
      },
    ],
  },
  {
    slug: "commercial-cleaning",
    title: "Commercial Cleaning",
    metaTitle: "Commercial Cleaning Hales Corners WI",
    metaDescription:
      "Office & commercial cleaning in Hales Corners, Milwaukee County & surroundings. Restrooms, workspaces, retail. Free estimate — call (414) 348-5500.",
    h1: "Commercial Cleaning Services in Milwaukee County",
    intro:
      "Fresh Cleaning Place LLC keeps offices, retail spaces, and commercial facilities clean and professional. Flexible scheduling — before hours, after hours, or during slow periods — with supplies included.",
    includes: [
      "Office desks, common areas, and break rooms",
      "Floors vacuumed and mopped",
      "Trash removal and surface sanitizing",
      "Restroom cleaning and restocking (on request)",
      "Retail storefront and customer areas",
      "Professional supplies brought to every visit",
    ],
    benefits: [
      "Reliable crews for recurring commercial accounts",
      "Flexible scheduling around your business hours",
      "Same attention to detail as our residential service",
      "100% satisfaction guaranteed",
    ],
    faqs: [
      {
        question: "Do you clean offices and small businesses?",
        answer:
          "Yes. We serve offices, retail shops, and small commercial facilities throughout Milwaukee County and surrounding areas.",
      },
      {
        question: "Can you clean outside of business hours?",
        answer:
          "Yes. We offer flexible scheduling including early morning, evening, and weekend visits when needed.",
      },
    ],
  },
  {
    slug: "commercial-restroom-cleaning",
    title: "Commercial Restroom Cleaning",
    metaTitle: "Commercial Restroom Cleaning Milwaukee WI",
    metaDescription:
      "Commercial restroom & bathroom sanitization in Hales Corners & Milwaukee County. Offices, retail & facilities. Call (414) 348-5500.",
    h1: "Commercial Restroom Cleaning & Sanitization",
    intro:
      "Restrooms make a lasting impression on employees and customers. Our commercial restroom service targets urinals, stalls, fixtures, tile, and floors for a sanitary, professional finish.",
    includes: [
      "Toilets, urinals, and stall sanitization",
      "Sinks, mirrors, and fixture polishing",
      "Tile, grout, and floor mopping",
      "Soap and paper restocking (on request)",
      "Odor control and disinfecting",
      "Scheduled or one-time deep cleans",
    ],
    benefits: [
      "Ideal for offices, retail, and multi-stall facilities",
      "Handles tough buildup and high-traffic wear",
      "Pairs with full commercial cleaning plans",
      "Professional-grade products included",
    ],
    faqs: [
      {
        question: "Do you service multi-stall commercial restrooms?",
        answer:
          "Yes. We clean single and multi-stall restrooms in offices, retail locations, and commercial buildings.",
      },
      {
        question: "Can restroom cleaning be added to office cleaning?",
        answer:
          "Absolutely. Most commercial clients include restrooms in their regular cleaning schedule.",
      },
    ],
  },
  {
    slug: "building-maintenance-cleaning",
    title: "Building Maintenance Cleaning",
    metaTitle: "Building Maintenance Cleaning Milwaukee WI",
    metaDescription:
      "Building maintenance & facility cleaning in Hales Corners & Milwaukee County. Lobbies, hallways, common areas. Free estimate — call (414) 348-5500.",
    h1: "Building Maintenance Cleaning Services",
    intro:
      "Keep your building looking professional day after day. Fresh Cleaning Place provides recurring building maintenance cleaning for lobbies, hallways, elevators, common areas, and shared workspaces — with flexible scheduling around tenants and business hours.",
    includes: [
      "Lobby and reception area cleaning",
      "Hallways, stairwells, and elevator touchpoints",
      "Common-area floors vacuumed and mopped",
      "Trash removal and surface dusting",
      "Restroom cleaning and sanitization",
      "Professional supplies brought to every visit",
    ],
    benefits: [
      "Reliable recurring crews for multi-tenant buildings",
      "Flexible before-hours, after-hours, or daytime visits",
      "Consistent results across all common areas",
      "100% satisfaction guaranteed",
    ],
    faqs: [
      {
        question: "Do you clean multi-tenant office buildings?",
        answer:
          "Yes. We maintain lobbies, hallways, and shared spaces in office buildings and commercial properties throughout Milwaukee County and surrounding areas.",
      },
      {
        question: "Can building maintenance be scheduled daily or weekly?",
        answer:
          "Yes. We offer daily, weekly, biweekly, and custom schedules based on foot traffic and your facility's needs.",
      },
    ],
  },
  {
    slug: "medical-clinic-cleaning",
    title: "Medical Clinic Cleaning",
    metaTitle: "Medical Clinic Cleaning Hales Corners WI",
    metaDescription:
      "Medical clinic & healthcare office cleaning in Hales Corners & Milwaukee County. Waiting rooms, exam rooms & restrooms. (414) 348-5500.",
    h1: "Medical Clinic Cleaning Services",
    intro:
      "Medical clinics need a clean, welcoming environment for patients and staff. Fresh Cleaning Place cleans waiting rooms, exam rooms, restrooms, and common areas with careful attention to high-touch surfaces and professional presentation.",
    includes: [
      "Waiting room and reception area cleaning",
      "Exam room surfaces and floors",
      "Restroom sanitization and restocking (on request)",
      "High-touch surface wipe-downs",
      "Trash removal and floor care",
      "Professional-grade supplies included",
    ],
    benefits: [
      "Experienced with healthcare office environments",
      "Flexible scheduling around patient hours",
      "Thorough attention to restrooms and common areas",
      "Reliable recurring service available",
    ],
    faqs: [
      {
        question: "Do you clean small medical and healthcare offices?",
        answer:
          "Yes. We serve medical clinics, urgent care offices, and healthcare practices throughout southeastern Wisconsin.",
      },
      {
        question: "Can clinic cleaning happen after hours?",
        answer:
          "Yes. Many healthcare clients prefer early morning, evening, or weekend visits to avoid disrupting patients.",
      },
    ],
  },
  {
    slug: "dental-clinic-cleaning",
    title: "Dental Clinic Cleaning",
    metaTitle: "Dental Office Cleaning Milwaukee WI",
    metaDescription:
      "Dental clinic & dental office cleaning in Hales Corners & Milwaukee County. Operatories, reception & restrooms. Call (414) 348-5500.",
    h1: "Dental Clinic Cleaning Services",
    intro:
      "Dental offices require meticulous cleaning in operatories, reception areas, and restrooms. Fresh Cleaning Place helps dental practices maintain a spotless, professional environment that patients notice from the moment they walk in.",
    includes: [
      "Reception and waiting area cleaning",
      "Operatory surfaces and floors",
      "Restroom deep cleaning and sanitization",
      "Break room and staff area wipe-downs",
      "Trash removal and floor mopping",
      "Professional supplies brought to every visit",
    ],
    benefits: [
      "Tailored for dental office layouts and schedules",
      "Attention to patient-facing areas and restrooms",
      "Recurring plans for consistent results",
      "Flexible before-hours or after-hours visits",
    ],
    faqs: [
      {
        question: "Do you clean dental offices and operatories?",
        answer:
          "Yes. We clean reception areas, operatories, restrooms, and staff spaces in dental practices across our service area.",
      },
      {
        question: "How often should a dental office be professionally cleaned?",
        answer:
          "Most dental practices schedule daily or several-times-weekly cleaning depending on patient volume. We will recommend a plan during your free estimate.",
      },
    ],
  },
  {
    slug: "veterinary-clinic-cleaning",
    title: "Veterinary Clinic Cleaning",
    metaTitle: "Veterinary Clinic Cleaning Milwaukee WI",
    metaDescription:
      "Veterinary clinic cleaning in Hales Corners & Milwaukee County. Exam rooms, kennels, waiting areas & treatment spaces. (414) 348-5500.",
    h1: "Veterinary Clinic Cleaning Services",
    intro:
      "Veterinary clinics face unique cleaning challenges — exam rooms, kennels, waiting areas, and treatment spaces all need regular attention. Fresh Cleaning Place provides thorough, reliable cleaning tailored to animal care facilities.",
    includes: [
      "Waiting room and reception cleaning",
      "Exam and treatment room floors and surfaces",
      "Kennel and holding area cleaning",
      "Restroom sanitization",
      "Trash removal and odor-conscious floor care",
      "Professional supplies included on every visit",
    ],
    benefits: [
      "Experienced with vet clinic layouts and needs",
      "Flexible scheduling around appointments",
      "Thorough cleaning of high-traffic patient areas",
      "Recurring maintenance plans available",
    ],
    faqs: [
      {
        question: "Do you clean veterinary clinics and animal hospitals?",
        answer:
          "Yes. We serve veterinary clinics and animal care facilities throughout Milwaukee, Kenosha, Racine, and Waukesha Counties.",
      },
      {
        question: "Can vet clinic cleaning be scheduled after hours?",
        answer:
          "Yes. We offer early morning, evening, and weekend visits to work around your appointment schedule.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string): SeoServicePage | undefined {
  return seoServices.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return seoServices.map((s) => s.slug);
}
