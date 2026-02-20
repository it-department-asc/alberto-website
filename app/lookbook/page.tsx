import { sanityFetch } from "@/sanity/client";
import { urlFor } from "@/sanity/image";
import { LOOKBOOK_ITEMS_QUERY, LOOKBOOK_HERO_QUERY } from "@/sanity/queries";
import type { SanityLookbookItem, HomepageSettings } from "@/sanity/types";
import LookbookClient from "./LookbookClient";

export interface LookbookItemMapped {
  id: string;
  image: string;
  category: string;
  title: string;
  product: {
    id: string;
    name: string;
    brand: string;
    tagline: string;
    description: string;
    materials: string[];
    highlights: string[];
    colors: Array<{ name: string; hex: string }>;
    images: string[];
    moodImage?: string;
  };
}

export interface LookbookHero {
  image?: string;
  title?: string;
  subtitle?: string;
  body?: string;
}

export default async function LookbookPage() {
  const [{ data: items }, { data: heroData }] = await Promise.all([
    sanityFetch<SanityLookbookItem[]>({ query: LOOKBOOK_ITEMS_QUERY }),
    sanityFetch<Pick<HomepageSettings, "lookbookHeroImage" | "lookbookHeroTitle" | "lookbookHeroSubtitle" | "lookbookHeroBody">>({ query: LOOKBOOK_HERO_QUERY }),
  ]);

  const mappedItems: LookbookItemMapped[] = items.map((item, index) => ({
    id: item._id || String(index + 1),
    image: item.image ? urlFor(item.image).width(800).height(1067).fit("crop").auto("format").url() : "",
    category: item.category || "Office Look",
    title: item.title || "",
    product: {
      id: item.product?._id || `lb-${index + 1}`,
      name: item.product?.name || "",
      brand: item.product?.brand?.name || "ALBERTO",
      tagline: item.product?.tagline || "",
      description: item.product?.description || "",
      materials: item.product?.materials || [],
      highlights: item.product?.highlights || [],
      colors: item.product?.colors || [],
      images: (item.product?.images || []).map((img: any) =>
        urlFor(img).width(800).height(1067).fit("crop").auto("format").url()
      ),
      moodImage: item.product?.moodImage
        ? urlFor(item.product.moodImage).width(1920).auto("format").url()
        : undefined,
    },
  }));

  const hero: LookbookHero = {
    image: heroData?.lookbookHeroImage
      ? urlFor(heroData.lookbookHeroImage).width(1920).auto("format").url()
      : undefined,
    title: heroData?.lookbookHeroTitle,
    subtitle: heroData?.lookbookHeroSubtitle,
    body: heroData?.lookbookHeroBody,
  };

  return <LookbookClient items={mappedItems} hero={hero} />;
}
