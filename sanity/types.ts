// eslint-disable-next-line @typescript-eslint/no-explicit-any
type SanityImageSource = any;

// ── Shared image reference type ──
export interface SanityImage {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
  hotspot?: {
    x: number;
    y: number;
    height: number;
    width: number;
  };
}

// ── Homepage Settings ──
export interface CampaignSection {
  sectionKey: string;
  subtitle: string;
  title: string;
  description: string;
  image: SanityImageSource;
  imagePosition: "left" | "right";
  ctaText: string;
  ctaLink: string;
}

export interface ParallaxSectionData {
  sectionKey: string;
  image: SanityImageSource;
  title: string;
  subtitle: string;
}

export interface HomepageSettings {
  heroImage: SanityImageSource;
  heroTagline: string;
  heroHeadline: string;
  heroHeadlineItalic: string;
  heroSubtext: string;
  heroCTAText: string;
  heroCTALink: string;
  heroSideText: string;
  campaignSections: CampaignSection[];
  parallaxSections: ParallaxSectionData[];
  newArrivalsTitle: string;
  newArrivalsSubtitle: string;
  newArrivalProducts: SanityFashionProduct[];
  lookbookHeroImage?: SanityImageSource;
  lookbookHeroTitle?: string;
  lookbookHeroSubtitle?: string;
  lookbookHeroBody?: string;
}

// ── Brand ──
export interface SanityBrandFeature {
  icon: string;
  title: string;
  description: string;
}

export interface SanityBrandProduct {
  id: string;
  name: string;
  description: string;
  image: SanityImageSource;
  category: string;
}

export interface SanityBrand {
  _id: string;
  slug: { current: string };
  name: string;
  tagline: string;
  heroImage?: SanityImageSource;
  about: string;
  story: string;
  philosophy: string;
  lifestyleDescription: string;
  lifestyleImage?: SanityImageSource;
  spotlightImage?: SanityImageSource;
  spotlightTagline?: string;
  spotlightStory?: string;
  logo?: SanityImageSource;
  features: SanityBrandFeature[];
  products: SanityBrandProduct[];
  isActive: boolean;
  order: number;
}

// ── Fashion Product ──
export interface SanityFashionProductColor {
  name: string;
  hex: string;
}

export interface SanityFashionProduct {
  _id: string;
  id: { current: string };
  name: string;
  brand: {
    _id: string;
    name: string;
    slug: { current: string };
  };
  tagline: string;
  description: string;
  materials: string[];
  highlights: string[];
  colors: SanityFashionProductColor[];
  images: SanityImageSource[];
  moodImage?: SanityImageSource;
  category: string;
  subcategory: string;
  isFeatured: boolean;
  isActive: boolean;
}

// ── Lookbook Item ──
export interface SanityLookbookItem {
  _id: string;
  title: string;
  category: string;
  image: SanityImageSource;
  product: SanityFashionProduct;
  order: number;
  isActive: boolean;
}

// ── Branch ──
export interface SanityBranch {
  _id: string;
  storeId: string;
  branchCode: string;
  region: string;
  province: string;
  city: string;
  lessor: string;
  mallName: string;
  image?: any;
  brands: Array<{ _id: string; name: string; slug: { current: string } }>;
  branchType: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
  isActive: boolean;
}

// ── Site Settings ──
export interface SanityMilestone {
  year: string;
  event: string;
}

export interface SanityValue {
  icon: string;
  title: string;
  description: string;
}

export interface SanityFAQ {
  question: string;
  answer: string;
}

export interface SanityStat {
  value: string;
  label: string;
}

// Global site settings (contact, footer, FAQs)
export interface SanitySiteSettings {
  phone: string;
  email: string;
  address: string;
  storeHours: string;
  storeHoursNote: string;
  phoneAvailability: string;
  footerDescription: string;
  faqs: SanityFAQ[];
}

// About Page settings
export interface SanityAboutPageSettings {
  heroLabel: string;
  heroTitle: string;
  heroTitleMuted: string;
  heroDescription: string;
  storyTitle: string;
  storyTitleMuted: string;
  companyDescription: string;
  missionStatement: string;
  visionStatement: string;
  milestones: SanityMilestone[];
  values: SanityValue[];
  commitmentTitle: string;
  commitmentText: string;
  commitmentText2: string;
  stats: SanityStat[];
}

// Products Page settings
export interface SanityProductsPageSettings {
  heroLabel: string;
  heroTitle: string;
  heroTitleMuted: string;
  heroDescription: string;
}

// Contact Page settings
export interface SanityContactPageSettings {
  heroLabel: string;
  heroTitle: string;
  heroTitleMuted: string;
  heroDescription: string;
  mapTitle: string;
  mapSubtitle: string;
  mapAddress: string;
  mapLink: string;
}

// Branches Page settings
export interface SanityBranchesPageSettings {
  heroLabel: string;
  heroTitle: string;
  heroTitleMuted: string;
  heroDescription: string;
  ctaTitle: string;
  ctaText: string;
}

// Brands Page settings
export interface SanityBrandsPageSettings {
  heroLabel: string;
  heroTitle: string;
  heroDescription: string;
  ctaTitle: string;
  ctaText: string;
  ctaButtonText: string;
}

// ── Brand Spotlight (subset for carousel) ──
export interface BrandSpotlight {
  _id: string;
  name: string;
  slug: { current: string };
  spotlightTagline: string;
  spotlightStory: string;
  spotlightImage: SanityImageSource;
}

// ── Brand Logo (subset for logo strip) ──
export interface BrandLogo {
  _id: string;
  name: string;
  slug: { current: string };
  logo?: SanityImageSource;
}
