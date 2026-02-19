"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { FashionProduct } from "@/lib/types/fashion-product";

interface NewArrivalsCarouselProps {
  products: FashionProduct[];
  onProductClick: (product: FashionProduct) => void;
}

export default function NewArrivalsCarousel({
  products,
  onProductClick,
}: NewArrivalsCarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const handleScroll = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = direction === "left" ? -400 : 400;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="py-24 md:py-32 bg-neutral-50">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <div className="space-y-4">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs tracking-[0.3em] uppercase text-neutral-500"
            >
              Just Arrived
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-light text-neutral-900"
            >
              New Arrivals
            </motion.h2>
          </div>

          {/* Navigation Arrows */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="hidden md:flex items-center gap-3"
          >
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className={`w-12 h-12 rounded-full border border-neutral-300 flex items-center justify-center transition-all duration-300 ${
                canScrollLeft
                  ? "hover:bg-neutral-900 hover:text-white hover:border-neutral-900"
                  : "opacity-30 cursor-not-allowed"
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className={`w-12 h-12 rounded-full border border-neutral-300 flex items-center justify-center transition-all duration-300 ${
                canScrollRight
                  ? "hover:bg-neutral-900 hover:text-white hover:border-neutral-900"
                  : "opacity-30 cursor-not-allowed"
              }`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>

        {/* Carousel */}
        <div
          ref={carouselRef}
          onScroll={handleScroll}
          className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 -mx-6 px-6 snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex-shrink-0 w-[300px] md:w-[350px] snap-start"
            >
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ duration: 0.4 }}
                onClick={() => onProductClick(product)}
                className="cursor-pointer group"
              >
                {/* Product Image */}
                <div className="aspect-[3/4] bg-neutral-100 rounded-xl overflow-hidden mb-5 relative">
                  <div
                    className="absolute inset-0 bg-neutral-200 transition-transform duration-700 group-hover:scale-105"
                    style={{
                      backgroundImage: `url('${product.images[0]}')`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                  
                  {/* Quick view indicator */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="px-6 py-3 bg-white text-neutral-900 text-xs tracking-widest uppercase">
                      View Details
                    </span>
                  </div>
                </div>

                {/* Product Info */}
                <div className="space-y-2">
                  <span className="text-xs tracking-[0.2em] uppercase text-neutral-500">
                    {product.brand}
                  </span>
                  <h3 className="text-lg font-light text-neutral-900 group-hover:text-neutral-600 transition-colors">
                    {product.name}
                  </h3>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
