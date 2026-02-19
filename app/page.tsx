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
import type { FashionProduct } from "@/lib/types/fashion-product";

// Sample products for New Arrivals - featuring all brands
const newArrivals: FashionProduct[] = [
  // {
  //   id: "1",
  //   name: "Elegant Evening Sandal",
  //   brand: "G&G",
  //   tagline: "Where elegance meets everyday luxury",
  //   description: "Sophistication meets comfort in this exquisitely crafted evening sandal. Designed for the modern woman who appreciates timeless elegance, every detail speaks to our commitment to quality and style.",
  //   materials: ["Premium Italian Leather", "Cushioned Insole", "Non-slip Rubber Sole"],
  //   highlights: [
  //     "Crafted for all-day comfort",
  //     "Breathable premium leather",
  //     "Elegant minimalist design",
  //     "Versatile styling options",
  //   ],
  //   colors: [
  //     { name: "Black", hex: "#000000" },
  //     { name: "Nude", hex: "#D2B48C" },
  //   ],
  //   images: ["/images/products/gg-sandal-1.jpg", "/images/products/gg-sandal-2.jpg"],
  // },
  {
    id: "2",
    name: "Metropolitan Loafer",
    brand: "URBAN MUSE",
    tagline: "City chic redefined",
    description: "For the urban explorer who refuses to compromise. These loafers blend metropolitan sophistication with everyday comfort, designed for women who move through life with purpose.",
    materials: ["Soft Napa Leather", "Memory Foam Footbed", "Flexible Sole"],
    highlights: [
      "Slip-on convenience",
      "All-day comfort technology",
      "Modern minimalist aesthetic",
      "Versatile day-to-night wear",
    ],
    colors: [
      { name: "Cognac", hex: "#8B4513" },
      { name: "Black", hex: "#000000" },
    ],
    images: ["/images/products/urban-muse-loafer-1.jpg"],
  },
  {
    id: "3",
    name: "Breathable Oxford",
    brand: "GEOX",
    tagline: "The shoe that breathes",
    description: "Revolutionary technology meets Italian design. Geox's patented breathable soles ensure comfort from morning to night, proving that innovation and style can coexist beautifully.",
    materials: ["Premium Leather Upper", "Patented Breathable Technology", "Italian Craftsmanship"],
    highlights: [
      "Patented breathable technology",
      "Italian design excellence",
      "Professional versatility",
      "Climate comfort system",
    ],
    colors: [
      { name: "Brown", hex: "#8B4513" },
      { name: "Black", hex: "#000000" },
    ],
    images: ["/images/products/geox-oxford-1.jpg"],
  },
  {
    id: "4",
    name: "Minimalist Mule",
    brand: "KYO",
    tagline: "Contemporary craft",
    description: "Minimalist aesthetics meet exceptional craftsmanship. KYO creates footwear that speaks softly but carries unmistakable presence, for those who appreciate understated luxury.",
    materials: ["Smooth Leather", "Padded Insole", "Low Block Heel"],
    highlights: [
      "Clean architectural lines",
      "Premium leather finish",
      "Effortless slip-on style",
      "Timeless design approach",
    ],
    colors: [
      { name: "White", hex: "#FFFFFF" },
      { name: "Taupe", hex: "#C4B7A6" },
    ],
    images: ["/images/products/kyo-mule-1.jpg"],
  },
  {
    id: "5",
    name: "Comfort Platform",
    brand: "PICCADILLY",
    tagline: "Comfort without compromise",
    description: "Brazilian innovation meets global style. Piccadilly has revolutionized comfortable footwear, proving that you never have to choose between feeling good and looking great.",
    materials: ["Ultra-Soft Upper", "Ergonomic Footbed", "Shock-Absorbing Sole"],
    highlights: [
      "Superior comfort technology",
      "Lightweight construction",
      "Ergonomic design",
      "Fashion-forward styling",
    ],
    colors: [
      { name: "Blush", hex: "#E8C4B8" },
      { name: "Black", hex: "#000000" },
    ],
    images: ["/images/products/piccadilly-platform-1.jpg"],
  },
  {
    id: "6",
    name: "Statement Heel",
    brand: "VIZZANO",
    tagline: "Bold & beautiful",
    description: "For the woman who makes an entrance. Vizzano creates statement pieces that celebrate femininity and confidence, designed to turn heads and spark conversations.",
    materials: ["High-Shine Finish", "Padded Comfort Insole", "Sculpted Heel"],
    highlights: [
      "Statement-making design",
      "Comfortable padded insole",
      "Sculpted heel detail",
      "Special occasion ready",
    ],
    colors: [
      { name: "Red", hex: "#B22222" },
      { name: "Gold", hex: "#D4AF37" },
    ],
    images: ["/images/products/vizzano-heel-1.jpg"],
  },
  {
    id: "7",
    name: "Everyday Ballet Flat",
    brand: "MOLECA",
    tagline: "Everyday elegance",
    description: "Accessible luxury for the modern woman. Moleca brings fashion-forward designs within reach, ensuring every woman can step out in style, every single day.",
    materials: ["Soft Synthetic Upper", "Flexible Outsole", "Comfort Lining"],
    highlights: [
      "Versatile everyday style",
      "Flexible construction",
      "Easy care materials",
      "Budget-friendly luxury",
    ],
    colors: [
      { name: "Navy", hex: "#1E3A5F" },
      { name: "Beige", hex: "#F5F5DC" },
    ],
    images: ["/images/products/moleca-flat-1.jpg"],
  },
];

export default function HomePage() {
  const [selectedProduct, setSelectedProduct] = useState<FashionProduct | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProductClick = (product: FashionProduct) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <>
      {/* Full-Width Fashion Hero */}
      <FashionHero />

      {/* Brand Logo Strip */}
      <BrandLogoStrip />

      {/* Campaign Section 1 - Brand Philosophy */}
      <CampaignSection
        title="Crafted for Those Who Walk With Purpose"
        subtitle="Our Philosophy"
        description="Every pair we create tells a story of dedication to craft and attention to detail. We believe that great footwear doesn't just complete an outfit—it empowers the person wearing it."
        image="/images/campaign/philosophy.jpg"
        imagePosition="left"
        ctaText="Discover Our Story"
        ctaLink="/about"
      />

      {/* Parallax Section - Visual Break */}
      <ParallaxSection
        image="/images/campaign/parallax-1.jpg"
        title="Where Style Meets Substance"
        subtitle="Craftsmanship"
      />

      {/* Campaign Section 2 - Craftsmanship */}
      <CampaignSection
        title="The Art of Fine Footwear"
        subtitle="Craftsmanship"
        description="From selecting the finest leathers to the final stitch, every step in our process is guided by a commitment to excellence. Our artisans bring decades of expertise to every pair."
        image="/images/campaign/craftsmanship.jpg"
        imagePosition="right"
        ctaText="Our Craft"
        ctaLink="/about"
      />

      {/* New Arrivals Carousel */}
      <NewArrivalsCarousel
        products={newArrivals}
        onProductClick={handleProductClick}
      />

      {/* Brand Spotlight Carousel */}
      <BrandSpotlightCarousel />

      {/* Parallax Section - Visual Break */}
      <ParallaxSection
        image="/images/campaign/parallax-2.jpg"
        title="Step Into Your Story"
        subtitle="Collection 2026"
      />

      {/* Campaign Section 3 - Comfort & Design */}
      <CampaignSection
        title="Comfort That Doesn't Compromise"
        subtitle="Innovation"
        description="We've reimagined what comfort means in fashion footwear. Through innovative design and advanced materials, we ensure that every step feels as good as it looks."
        image="/images/campaign/comfort.jpg"
        imagePosition="left"
        ctaText="Explore Technology"
        ctaLink="/products"
      />



      {/* Fashion Product Modal */}
      <FashionProductModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        product={selectedProduct}
      />
    </>
  );
}
