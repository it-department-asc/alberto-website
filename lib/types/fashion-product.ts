export interface FashionProductColor {
  name: string;
  hex: string;
}

export interface FashionProduct {
  id: string;
  name: string;
  brand: string;
  tagline: string;
  description: string;
  materials: string[];
  highlights: string[];
  colors: FashionProductColor[];
  images: string[];
  moodImage?: string;
}
