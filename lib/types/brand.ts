export interface BrandFeature {
  icon: string;
  title: string;
  description: string;
}

export interface BrandProduct {
  id: string;
  name: string;
  description: string;
  image: string;
  category: string;
}

export interface Brand {
  slug: string;
  name: string;
  tagline: string;
  heroImage: string;
  about: string;
  story: string;
  philosophy: string;
  lifestyleDescription: string;
  lifestyleImage: string;
  features: BrandFeature[];
  products: BrandProduct[];
}

export const BRAND_SLUGS = [
  "gng",
  "urban-muse",
  "geox",
  "kyo",
  "piccadilly",
  "vizzano",
  "moleca",
] as const;

export type BrandSlug = (typeof BRAND_SLUGS)[number];
