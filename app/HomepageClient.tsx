"use client";

import { useState } from "react";
import {
  FashionHero,
  CampaignSection,
  NewArrivalsCarousel,
  BrandSpotlightCarousel,
  BrandLogoStrip,
  ParallaxSection,
} from "@/components/homepage";
import { FashionProductModal } from "@/components/fashion-modal";
import type { FashionHeroProps } from "@/components/homepage/FashionHero";
import type { BrandSpotlightItem } from "@/components/homepage/BrandSpotlightCarousel";
import type { BrandLogoItem } from "@/components/homepage/BrandLogoStrip";

interface NewArrivalProduct {
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
}

interface CampaignSectionData {
  sectionKey: string;
  subtitle: string;
  title: string;
  description: string;
  image: string;
  imagePosition: "left" | "right";
  ctaText: string;
  ctaLink: string;
}

interface ParallaxSectionData {
  sectionKey: string;
  image: string;
  title: string;
  subtitle: string;
}

interface HomepageClientProps extends FashionHeroProps {
  campaignSections: CampaignSectionData[];
  parallaxSections: ParallaxSectionData[];
  newArrivals: NewArrivalProduct[];
  spotlightBrands: BrandSpotlightItem[];
  logoBrands: BrandLogoItem[];
}

export default function HomepageClient({
  heroImage,
  heroTagline,
  heroHeadline,
  heroHeadlineItalic,
  heroSubtext,
  heroCTAText,
  heroCTALink,
  heroSideText,
  campaignSections,
  parallaxSections,
  newArrivals,
  spotlightBrands,
  logoBrands,
}: HomepageClientProps) {
  const [selectedProduct, setSelectedProduct] = useState<NewArrivalProduct | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProductClick = (product: NewArrivalProduct) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const campaigns = campaignSections;
  const parallax = parallaxSections;

  return (
    <>
      {/* Full-Width Fashion Hero */}
      <FashionHero
        heroImage={heroImage}
        heroTagline={heroTagline}
        heroHeadline={heroHeadline}
        heroHeadlineItalic={heroHeadlineItalic}
        heroSubtext={heroSubtext}
        heroCTAText={heroCTAText}
        heroCTALink={heroCTALink}
        heroSideText={heroSideText}
      />

      {/* Brand Logo Strip */}
      <BrandLogoStrip brands={logoBrands} />

      {/* Campaign Section 1 */}
      {campaigns[0] && (
        <CampaignSection
          title={campaigns[0].title}
          subtitle={campaigns[0].subtitle}
          description={campaigns[0].description}
          image={campaigns[0].image}
          imagePosition={campaigns[0].imagePosition}
          ctaText={campaigns[0].ctaText}
          ctaLink={campaigns[0].ctaLink}
        />
      )}

      {/* Parallax Section 1 */}
      {parallax[0] && (
        <ParallaxSection
          image={parallax[0].image}
          title={parallax[0].title}
          subtitle={parallax[0].subtitle}
        />
      )}

      {/* Campaign Section 2 */}
      {campaigns[1] && (
        <CampaignSection
          title={campaigns[1].title}
          subtitle={campaigns[1].subtitle}
          description={campaigns[1].description}
          image={campaigns[1].image}
          imagePosition={campaigns[1].imagePosition}
          ctaText={campaigns[1].ctaText}
          ctaLink={campaigns[1].ctaLink}
        />
      )}

      {/* New Arrivals Carousel */}
      <NewArrivalsCarousel
        products={newArrivals as any}
        onProductClick={handleProductClick as any}
      />

      {/* Brand Spotlight Carousel */}
      <BrandSpotlightCarousel brands={spotlightBrands} />

      {/* Parallax Section 2 */}
      {parallax[1] && (
        <ParallaxSection
          image={parallax[1].image}
          title={parallax[1].title}
          subtitle={parallax[1].subtitle}
        />
      )}

      {/* Campaign Section 3 */}
      {campaigns[2] && (
        <CampaignSection
          title={campaigns[2].title}
          subtitle={campaigns[2].subtitle}
          description={campaigns[2].description}
          image={campaigns[2].image}
          imagePosition={campaigns[2].imagePosition}
          ctaText={campaigns[2].ctaText}
          ctaLink={campaigns[2].ctaLink}
        />
      )}

      {/* Fashion Product Modal */}
      <FashionProductModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        product={selectedProduct}
      />
    </>
  );
}
