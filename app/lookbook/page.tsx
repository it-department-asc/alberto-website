"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FashionProductModal } from "@/components/fashion-modal";
import type { FashionProduct } from "@/lib/types/fashion-product";

// Lookbook categories
const categories = ["All", "Office Look", "Casual Look", "Travel Look", "Evening Look"];

// Lookbook items with fashion product data
interface LookbookItem {
  id: string;
  image: string;
  category: string;
  title: string;
  product: FashionProduct;
}

const lookbookItems: LookbookItem[] = [
  // Office Looks
  {
    id: "1",
    image: "/images/lookbook/office-1.jpg",
    category: "Office Look",
    title: "Professional Elegance",
    product: {
      id: "lb-1",
      name: "Executive Oxford",
      brand: "GEOX",
      tagline: "The shoe that breathes",
      description: "Command the boardroom with these impeccably crafted oxfords. Geox's patented breathable technology ensures comfort through long meetings and presentations, while the refined silhouette speaks to your professional excellence.",
      materials: ["Premium Full-Grain Leather", "Breathable Membrane Technology", "Cushioned Footbed"],
      highlights: [
        "Patented breathable sole technology",
        "Professional sophistication",
        "All-day comfort design",
        "Italian craftsmanship",
      ],
      colors: [
        { name: "Black", hex: "#000000" },
        { name: "Cognac", hex: "#8B4513" },
      ],
      images: ["/images/lookbook/office-1.jpg", "/images/lookbook/office-1-detail.jpg"],
    },
  },
  {
    id: "2",
    image: "/images/lookbook/office-2.jpg",
    category: "Office Look",
    title: "Modern Workwear",
    product: {
      id: "lb-2",
      name: "Metropolitan Pump",
      brand: "G&G",
      tagline: "Where elegance meets everyday luxury",
      description: "Transition seamlessly from morning meetings to evening events. This refined pump combines professional polish with modern comfort technology, designed for the woman who leads with grace.",
      materials: ["Italian Leather Upper", "Memory Foam Insole", "Premium Sole Construction"],
      highlights: [
        "Versatile day-to-night styling",
        "Comfortable block heel",
        "Premium leather finish",
        "Timeless silhouette",
      ],
      colors: [
        { name: "Nude", hex: "#D2B48C" },
        { name: "Black", hex: "#000000" },
      ],
      images: ["/images/lookbook/office-2.jpg"],
    },
  },
  {
    id: "3",
    image: "/images/lookbook/office-3.jpg",
    category: "Office Look",
    title: "Classic Professional",
    product: {
      id: "lb-3",
      name: "Business Loafer",
      brand: "KYO",
      tagline: "Contemporary craft",
      description: "Minimalist design meets maximum impact. These loafers speak to refined taste and attention to detail, perfect for the professional who appreciates understated luxury.",
      materials: ["Smooth Calfskin Leather", "Leather Lined Interior", "Flexible Rubber Sole"],
      highlights: [
        "Clean architectural lines",
        "Slip-on convenience",
        "Premium leather construction",
        "Versatile styling options",
      ],
      colors: [
        { name: "Burgundy", hex: "#722F37" },
        { name: "Black", hex: "#000000" },
      ],
      images: ["/images/lookbook/office-3.jpg"],
    },
  },

  // Casual Looks
  {
    id: "4",
    image: "/images/lookbook/casual-1.jpg",
    category: "Casual Look",
    title: "Weekend Wanderer",
    product: {
      id: "lb-4",
      name: "Comfort Sneaker",
      brand: "PICCADILLY",
      tagline: "Comfort without compromise",
      description: "Embrace effortless style with these fashion-forward sneakers. Brazilian comfort technology meets contemporary design, perfect for your most active days.",
      materials: ["Soft Knit Upper", "Ergonomic Footbed", "Lightweight EVA Sole"],
      highlights: [
        "All-day comfort technology",
        "Breathable mesh design",
        "Lightweight construction",
        "Trendy silhouette",
      ],
      colors: [
        { name: "White", hex: "#FFFFFF" },
        { name: "Blush", hex: "#E8C4B8" },
      ],
      images: ["/images/lookbook/casual-1.jpg"],
    },
  },
  {
    id: "5",
    image: "/images/lookbook/casual-2.jpg",
    category: "Casual Look",
    title: "Effortless Chic",
    product: {
      id: "lb-5",
      name: "Everyday Flat",
      brand: "MOLECA",
      tagline: "Everyday elegance",
      description: "Simple, sophisticated, and supremely comfortable. These flats prove that everyday footwear can be both practical and beautiful.",
      materials: ["Soft Synthetic Upper", "Padded Insole", "Flexible Sole"],
      highlights: [
        "Easy slip-on style",
        "Versatile neutral colors",
        "Lightweight construction",
        "Budget-friendly luxury",
      ],
      colors: [
        { name: "Tan", hex: "#D2B48C" },
        { name: "White", hex: "#FFFFFF" },
      ],
      images: ["/images/lookbook/casual-2.jpg"],
    },
  },
  {
    id: "6",
    image: "/images/lookbook/casual-3.jpg",
    category: "Casual Look",
    title: "City Ready",
    product: {
      id: "lb-6",
      name: "Urban Slide",
      brand: "URBAN MUSE",
      tagline: "City chic redefined",
      description: "Navigate the urban landscape in style. These slides combine metropolitan sophistication with easy wearability, designed for the woman on the move.",
      materials: ["Soft Leather Upper", "Contoured Footbed", "Durable Outsole"],
      highlights: [
        "Effortless slide-on design",
        "Modern minimalist aesthetic",
        "Comfortable padded strap",
        "Versatile styling",
      ],
      colors: [
        { name: "Black", hex: "#000000" },
        { name: "Cream", hex: "#FFFDD0" },
      ],
      images: ["/images/lookbook/casual-3.jpg"],
    },
  },

  // Travel Looks
  {
    id: "7",
    image: "/images/lookbook/travel-1.jpg",
    category: "Travel Look",
    title: "Jet Setter",
    product: {
      id: "lb-7",
      name: "Travel Comfort Wedge",
      brand: "PICCADILLY",
      tagline: "Comfort without compromise",
      description: "From airport lounges to cobblestone streets, these wedges deliver style and comfort for every adventure. Lightweight design means you can explore longer without fatigue.",
      materials: ["Soft Textile Upper", "Shock-Absorbing Midsole", "Durable Rubber Outsole"],
      highlights: [
        "Lightweight travel design",
        "All-day walking comfort",
        "Easy pack-and-go styling",
        "Versatile vacation wear",
      ],
      colors: [
        { name: "Navy", hex: "#1E3A5F" },
        { name: "Beige", hex: "#F5F5DC" },
      ],
      images: ["/images/lookbook/travel-1.jpg"],
    },
  },
  {
    id: "8",
    image: "/images/lookbook/travel-2.jpg",
    category: "Travel Look",
    title: "Explorer's Essential",
    product: {
      id: "lb-8",
      name: "Adventure Sandal",
      brand: "GEOX",
      tagline: "The shoe that breathes",
      description: "Breathable technology for wanderlust souls. Whether you're exploring ancient ruins or seaside villages, these sandals keep you comfortable mile after mile.",
      materials: ["Premium Leather Straps", "Breathable Sole Technology", "Cushioned Footbed"],
      highlights: [
        "Patented breathable design",
        "Secure adjustable straps",
        "Walking comfort technology",
        "Travel-friendly style",
      ],
      colors: [
        { name: "Brown", hex: "#8B4513" },
        { name: "Black", hex: "#000000" },
      ],
      images: ["/images/lookbook/travel-2.jpg"],
    },
  },
  {
    id: "9",
    image: "/images/lookbook/travel-3.jpg",
    category: "Travel Look",
    title: "Destination Ready",
    product: {
      id: "lb-9",
      name: "Resort Espadrille",
      brand: "VIZZANO",
      tagline: "Bold & beautiful",
      description: "Channel Mediterranean elegance wherever your travels take you. These espadrilles combine vacation-ready style with unexpected comfort.",
      materials: ["Canvas Upper", "Traditional Jute Platform", "Padded Insole"],
      highlights: [
        "Classic espadrille styling",
        "Comfortable platform height",
        "Resort-ready design",
        "Statement vacation piece",
      ],
      colors: [
        { name: "White", hex: "#FFFFFF" },
        { name: "Red", hex: "#B22222" },
      ],
      images: ["/images/lookbook/travel-3.jpg"],
    },
  },

  // Evening Looks
  {
    id: "10",
    image: "/images/lookbook/evening-1.jpg",
    category: "Evening Look",
    title: "Gala Ready",
    product: {
      id: "lb-10",
      name: "Statement Stiletto",
      brand: "VIZZANO",
      tagline: "Bold & beautiful",
      description: "Make an unforgettable entrance. These stilettos are designed for women who understand that great shoes aren't just worn—they're experienced.",
      materials: ["High-Shine Patent Leather", "Padded Insole", "Sculpted Heel"],
      highlights: [
        "Show-stopping design",
        "Comfortable padded insole",
        "Red carpet ready",
        "Conversation-starting style",
      ],
      colors: [
        { name: "Gold", hex: "#D4AF37" },
        { name: "Black", hex: "#000000" },
      ],
      images: ["/images/lookbook/evening-1.jpg"],
    },
  },
  {
    id: "11",
    image: "/images/lookbook/evening-2.jpg",
    category: "Evening Look",
    title: "Cocktail Hour",
    product: {
      id: "lb-11",
      name: "Elegant Strappy Sandal",
      brand: "G&G",
      tagline: "Where elegance meets everyday luxury",
      description: "Sophisticated straps create an elegant dance around the foot. Perfect for cocktail parties and special occasions where every detail matters.",
      materials: ["Premium Satin Finish", "Delicate Strap Construction", "Padded Insole"],
      highlights: [
        "Elegant strappy design",
        "Special occasion ready",
        "Comfortable heel height",
        "Timeless sophistication",
      ],
      colors: [
        { name: "Silver", hex: "#C0C0C0" },
        { name: "Champagne", hex: "#F7E7CE" },
      ],
      images: ["/images/lookbook/evening-2.jpg"],
    },
  },
  {
    id: "12",
    image: "/images/lookbook/evening-3.jpg",
    category: "Evening Look",
    title: "Night Out",
    product: {
      id: "lb-12",
      name: "Evening Mule",
      brand: "KYO",
      tagline: "Contemporary craft",
      description: "Modern elegance for the contemporary woman. These mules blend minimalist design with evening-worthy sophistication, perfect for dinner dates and gallery openings.",
      materials: ["Smooth Satin Upper", "Architectural Heel", "Leather Lining"],
      highlights: [
        "Minimalist evening design",
        "Sculptural heel detail",
        "Easy slip-on styling",
        "Contemporary sophistication",
      ],
      colors: [
        { name: "Black", hex: "#000000" },
        { name: "Wine", hex: "#722F37" },
      ],
      images: ["/images/lookbook/evening-3.jpg"],
    },
  },
];

export default function LookbookPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState<FashionProduct | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const filteredItems = lookbookItems.filter(
    (item) => activeCategory === "All" || item.category === activeCategory
  );

  const handleItemClick = (item: LookbookItem) => {
    setSelectedProduct(item.product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-neutral-900">
          <div
            className="absolute inset-0 opacity-60"
            style={{
              backgroundImage: `url('/images/lookbook/hero.jpg')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/70" />
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1 }}
            className="w-20 h-px bg-white/50 mb-8"
          />

          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xs tracking-[0.4em] uppercase text-white/70 mb-4"
          >
            Style Inspiration
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-5xl md:text-7xl font-light text-white tracking-tight"
          >
            Lookbook
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-6 text-lg text-white/80 font-light max-w-xl"
          >
            Discover curated styles for every occasion.
            <br />
            Click any look to explore the featured product.
          </motion.p>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="w-20 h-px bg-white/50 mt-8"
          />
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 border-b border-neutral-100">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap justify-center gap-4 md:gap-8"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`text-sm tracking-widest uppercase transition-all duration-300 pb-2 ${
                  activeCategory === category
                    ? "text-neutral-900 border-b-2 border-neutral-900"
                    : "text-neutral-400 hover:text-neutral-600"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Lookbook Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: index * 0.05 }}
                  className={`relative cursor-pointer group ${
                    index % 5 === 0 ? "md:col-span-2 md:row-span-2" : ""
                  }`}
                  onClick={() => handleItemClick(item)}
                  onMouseEnter={() => setHoveredId(item.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  {/* Image Container */}
                  <div
                    className={`relative overflow-hidden rounded-xl bg-neutral-100 ${
                      index % 5 === 0
                        ? "aspect-[4/5] md:aspect-[3/4]"
                        : "aspect-[3/4]"
                    }`}
                  >
                    {/* Image */}
                    <motion.div
                      className="absolute inset-0 bg-neutral-200"
                      style={{
                        backgroundImage: `url('${item.image}')`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                      animate={{
                        scale: hoveredId === item.id ? 1.05 : 1,
                      }}
                      transition={{ duration: 0.6 }}
                    />

                    {/* Overlay */}
                    <motion.div
                      className="absolute inset-0 bg-black/0 transition-colors duration-500"
                      animate={{
                        backgroundColor:
                          hoveredId === item.id
                            ? "rgba(0,0,0,0.3)"
                            : "rgba(0,0,0,0)",
                      }}
                    />

                    {/* Content Overlay */}
                    <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                      {/* Category Badge */}
                      <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{
                          opacity: hoveredId === item.id ? 1 : 0,
                          y: hoveredId === item.id ? 0 : 10,
                        }}
                        transition={{ duration: 0.3 }}
                        className="inline-block mb-3 px-3 py-1 bg-white/90 backdrop-blur-sm text-neutral-900 text-xs tracking-widest uppercase w-fit"
                      >
                        {item.category}
                      </motion.span>

                      {/* Title */}
                      <motion.h3
                        animate={{
                          y: hoveredId === item.id ? 0 : 20,
                          opacity: hoveredId === item.id ? 1 : 0,
                        }}
                        transition={{ duration: 0.4 }}
                        className="text-xl md:text-2xl font-light text-white"
                      >
                        {item.title}
                      </motion.h3>

                      {/* Product Info */}
                      <motion.div
                        animate={{
                          y: hoveredId === item.id ? 0 : 20,
                          opacity: hoveredId === item.id ? 1 : 0,
                        }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        className="mt-2"
                      >
                        <span className="text-sm text-white/80">
                          {item.product.brand} · {item.product.name}
                        </span>
                      </motion.div>

                      {/* View Details Indicator */}
                      <motion.div
                        animate={{
                          y: hoveredId === item.id ? 0 : 20,
                          opacity: hoveredId === item.id ? 1 : 0,
                        }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                        className="mt-4"
                      >
                        <span className="inline-flex items-center text-xs tracking-widest uppercase text-white">
                          View Product →
                        </span>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 bg-neutral-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <span className="text-xs tracking-[0.3em] uppercase text-neutral-500">
              Your Story Awaits
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-light text-neutral-900">
              Find Your Perfect Style
            </h2>
            <p className="mt-6 text-lg text-neutral-600 font-light">
              Every look tells a story. Explore our complete collection to discover
              the perfect pieces for your journey.
            </p>
            <motion.a
              href="/products"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block mt-8 px-10 py-4 bg-neutral-900 text-white text-sm tracking-widest uppercase transition-colors hover:bg-neutral-800"
            >
              Explore Collection
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Fashion Product Modal */}
      <FashionProductModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        product={selectedProduct}
      />
    </div>
  );
}
