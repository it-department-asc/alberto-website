import { sanityFetch } from "@/sanity/client";
import { urlFor } from "@/sanity/image";
import { ALL_FASHION_PRODUCTS_QUERY, PRODUCTS_PAGE_QUERY } from "@/sanity/queries";
import type { SanityFashionProduct, SanityProductsPageSettings } from "@/sanity/types";
import ProductsClient from "./ProductsClient";

export default async function ProductsPage() {
  const [{ data: products }, { data: settings }] = await Promise.all([
    sanityFetch<SanityFashionProduct[]>({ query: ALL_FASHION_PRODUCTS_QUERY }),
    sanityFetch<SanityProductsPageSettings>({ query: PRODUCTS_PAGE_QUERY }),
  ]);

  // Resolve images and map to the shape expected by ProductsClient
  const mappedProducts = products.map((p, index) => ({
    id: index + 1,
    title: p.name,
    description: p.description || "",
    image: p.images?.[0] ? urlFor(p.images[0]).width(800).height(1067).fit("crop").auto("format").url() : "",
    category: p.category || "women",
    subcategory: p.subcategory || "",
    brand: p.brand?.name || "ALBERTO",
    tagline: p.tagline || "",
    materials: p.materials || [],
    highlights: p.highlights || [],
    colors: p.colors || [],
    images: (p.images || []).map((img: any) =>
      urlFor(img).width(800).height(1067).fit("crop").auto("format").url()
    ),
    moodImage: p.moodImage
      ? urlFor(p.moodImage).width(1920).auto("format").url()
      : undefined,
  }));

  return (
    <ProductsClient
      products={mappedProducts}
      heroLabel={settings?.heroLabel}
      heroTitle={settings?.heroTitle}
      heroTitleMuted={settings?.heroTitleMuted}
      heroDescription={settings?.heroDescription}
    />
  );
}
