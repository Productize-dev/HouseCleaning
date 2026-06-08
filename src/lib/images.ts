export type StockImage = {
  src: string;
  alt: string;
};

/** Residential marketing photography */
export const stockImages = {
  bedroomCleaning: {
    src: "/images/stock/bedroom-cleaning.png",
    alt: "Professional cleaners making a bed and sweeping in a bright residential bedroom",
  },
  mirrorDetail: {
    src: "/images/stock/mirror-detail.png",
    alt: "Close-up of professional mirror cleaning with yellow gloves and streak-free finish",
  },
  bathroomMirror: {
    src: "/images/stock/bathroom-mirror.png",
    alt: "Detailed bathroom mirror cleaning with professional supplies and soap suds",
  },
  suppliesCaddy: {
    src: "/images/stock/supplies-caddy.png",
    alt: "Premium cleaning supplies organized in a professional caddy",
  },
  livingRoomDetail: {
    src: "/images/stock/living-room-detail.png",
    alt: "Cleaner carefully dusting and wiping surfaces in a modern living room",
  },
} as const satisfies Record<string, StockImage>;

/** Commercial cleaning photography */
export const commercialImages = {
  officeWindows: {
    src: "/images/stock/commercial/office-windows.png",
    alt: "Commercial window cleaner servicing large office building glass with professional equipment",
  },
  teamWalkway: {
    src: "/images/stock/commercial/team-walkway.png",
    alt: "Uniformed commercial cleaning crew maintaining a modern office walkway",
  },
  exteriorWindows: {
    src: "/images/stock/commercial/exterior-windows.png",
    alt: "Professional exterior window cleaning at a commercial property",
  },
  restaurantFloor: {
    src: "/images/stock/commercial/restaurant-floor.png",
    alt: "Commercial floor cleaning in a restaurant after hours with professional mop equipment",
  },
  professionalCrew: {
    src: "/images/stock/commercial/professional-crew.png",
    alt: "Professional commercial cleaning team in uniform with vacuum and equipment",
  },
  windowSpecialist: {
    src: "/images/stock/commercial/window-specialist.png",
    alt: "Specialized commercial window cleaning with professional safety equipment",
  },
} as const satisfies Record<string, StockImage>;

export const showcaseItems = [
  {
    ...stockImages.mirrorDetail,
    label: "Residential detail",
    caption: "Homes & living spaces",
  },
  {
    ...commercialImages.teamWalkway,
    label: "Commercial crews",
    caption: "Offices & facilities",
  },
  {
    ...commercialImages.officeWindows,
    label: "Business cleaning",
    caption: "Windows & storefronts",
  },
] as const;

export const commercialFeaturedImages = [
  commercialImages.officeWindows,
  commercialImages.teamWalkway,
] as const;

export const commercialSecondaryImages = [
  commercialImages.restaurantFloor,
  commercialImages.windowSpecialist,
] as const;
