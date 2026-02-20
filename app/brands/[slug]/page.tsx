import { notFound } from "next/navigation";
import { client, sanityFetch } from "@/sanity/client";
import { urlFor } from "@/sanity/image";
import { BRAND_BY_SLUG_QUERY, ALL_BRANDS_QUERY } from "@/sanity/queries";
import type { SanityBrand } from "@/sanity/types";
import {
  BrandHero,
  BrandAbout,
  BrandFeatures,
  BrandPhilosophy,
  BrandLifestyle,
  BrandProductShowcase,
} from "@/components/brands";

interface BrandPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const brands = await client.fetch<SanityBrand[]>(ALL_BRANDS_QUERY);
  return brands.map((brand) => ({
    slug: brand.slug.current,
  }));
}

export async function generateMetadata({ params }: BrandPageProps) {
  const { slug } = await params;
  const { data: brand } = await sanityFetch<SanityBrand | null>({ query: BRAND_BY_SLUG_QUERY, params: { slug } });
  
  if (!brand) {
    return {
      title: "Brand Not Found",
    };
  }

  return {
    title: `${brand.name} | Alberto Shoes Corporation`,
    description: brand.tagline,
  };
}

export default async function BrandPage({ params }: BrandPageProps) {
  const { slug } = await params;
  const { data: brand } = await sanityFetch<SanityBrand | null>({ query: BRAND_BY_SLUG_QUERY, params: { slug } });

  if (!brand) {
    notFound();
  }

  const heroImageUrl = brand.heroImage
    ? urlFor(brand.heroImage).width(1920).height(1080).fit("crop").auto("format").url()
    : "";
  
  const lifestyleImageUrl = brand.lifestyleImage
    ? urlFor(brand.lifestyleImage).width(960).height(1200).fit("crop").auto("format").url()
    : "";

  // Map brand products to include resolved image URLs
  const products = (brand.products || []).map((p) => ({
    ...p,
    image: p.image ? urlFor(p.image).width(800).height(1067).fit("crop").auto("format").url() : "",
  }));

  return (
    <main className="min-h-screen">
      <BrandHero
        name={brand.name}
        tagline={brand.tagline}
        heroImage={heroImageUrl}
      />
      
      <BrandAbout
        name={brand.name}
        about={brand.about}
        story={brand.story}
      />
      
      <BrandFeatures
        features={brand.features}
        brandName={brand.name}
      />
      
      <BrandPhilosophy
        philosophy={brand.philosophy}
        brandName={brand.name}
      />
      
      <BrandLifestyle
        description={brand.lifestyleDescription}
        image={lifestyleImageUrl}
        brandName={brand.name}
      />
      
      <BrandProductShowcase
        products={products}
        brandName={brand.name}
      />
    </main>
  );
}
