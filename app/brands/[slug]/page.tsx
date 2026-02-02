import { notFound } from "next/navigation";
import { getBrandBySlug, getAllBrands } from "@/lib/data/brands";
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
  const brands = getAllBrands();
  return brands.map((brand) => ({
    slug: brand.slug,
  }));
}

export async function generateMetadata({ params }: BrandPageProps) {
  const { slug } = await params;
  const brand = getBrandBySlug(slug);
  
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
  const brand = getBrandBySlug(slug);

  if (!brand) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <BrandHero
        name={brand.name}
        tagline={brand.tagline}
        heroImage={brand.heroImage}
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
        image={brand.lifestyleImage}
        brandName={brand.name}
      />
      
      <BrandProductShowcase
        products={brand.products}
        brandName={brand.name}
      />
    </main>
  );
}
