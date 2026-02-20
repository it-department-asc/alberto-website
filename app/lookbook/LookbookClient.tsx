"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FashionProductModal } from "@/components/fashion-modal";
import type { LookbookItemMapped, LookbookHero } from "./page";

const categories = ["All", "Office Look", "Casual Look", "Travel Look", "Evening Look"];

interface LookbookClientProps {
  items: LookbookItemMapped[];
  hero: LookbookHero;
}

export default function LookbookClient({ items, hero }: LookbookClientProps) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState<LookbookItemMapped["product"] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const filteredItems = items.filter(
    (item) => activeCategory === "All" || item.category === activeCategory
  );

  const handleItemClick = (item: LookbookItemMapped) => {
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
              backgroundImage: hero.image
                ? `url('${hero.image}')`
                : undefined,
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
            {hero.subtitle || ""}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-5xl md:text-7xl font-light text-white tracking-tight"
          >
            {hero.title || ""}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-6 text-lg text-white/80 font-light max-w-xl"
          >
            {hero.body || ""}
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
