/** Professional stock photography for marketing sections */
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
    alt: "Premium residential cleaning supplies organized in a professional caddy",
  },
  livingRoomDetail: {
    src: "/images/stock/living-room-detail.png",
    alt: "Cleaner carefully dusting and wiping surfaces in a modern living room",
  },
} as const;

export const showcaseItems = [
  {
    ...stockImages.mirrorDetail,
    label: "Streak-free detail",
    caption: "Mirrors, glass & fixtures",
  },
  {
    ...stockImages.suppliesCaddy,
    label: "Supplies included",
    caption: "Professional-grade products",
  },
  {
    ...stockImages.livingRoomDetail,
    label: "Every surface",
    caption: "Living rooms & bedrooms",
  },
] as const;
