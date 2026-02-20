import { sanityFetch } from "@/sanity/client";
import { urlFor } from "@/sanity/image";
import { ALL_BRANDS_QUERY, BRANDS_PAGE_QUERY } from "@/sanity/queries";
import type { SanityBrand, SanityBrandsPageSettings } from "@/sanity/types";
import BrandsClient from "./BrandsClient";

export default async function BrandsPage() {
  const [{ data: brands }, { data: settings }] = await Promise.all([
    sanityFetch<SanityBrand[]>({ query: ALL_BRANDS_QUERY }),
    sanityFetch<SanityBrandsPageSettings>({ query: BRANDS_PAGE_QUERY }),
  ]);

  // Resolve image URLs on the server
  const brandsWithImages = brands.map((brand) => ({
    slug: brand.slug.current,
    name: brand.name,
    tagline: brand.tagline,
    heroImage: brand.heroImage
      ? urlFor(brand.heroImage).width(800).height(600).fit("crop").auto("format").url()
      : "",
  }));

  return (
    <BrandsClient
      brands={brandsWithImages}
      heroLabel={settings?.heroLabel}
      heroTitle={settings?.heroTitle}
      heroDescription={settings?.heroDescription}
      ctaTitle={settings?.ctaTitle}
      ctaText={settings?.ctaText}
      ctaButtonText={settings?.ctaButtonText}
    />
  );
}
