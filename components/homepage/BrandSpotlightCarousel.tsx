"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import Link from "next/link";

export interface BrandSpotlightItem {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  story: string;
  image: string;
}

interface BrandSpotlightCarouselProps {
  brands?: BrandSpotlightItem[];
}

export default function BrandSpotlightCarousel({ brands: brandsProp }: BrandSpotlightCarouselProps) {
  const brands = brandsProp || [];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = useCallback((newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) nextIndex = brands.length - 1;
      if (nextIndex >= brands.length) nextIndex = 0;
      return nextIndex;
    });
  }, []);

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 6000);

    return () => clearInterval(timer);
  }, [paginate]);

  const currentBrand = brands[currentIndex];

  if (!brands.length || !currentBrand) return null;

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const textVariants = {
    enter: { opacity: 0, y: 30 },
    center: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -30 },
  };

  return (
    <section className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs tracking-[0.3em] uppercase text-neutral-500"
          >
            Our Curated Brands
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-light text-neutral-900 mt-4"
          >
            Brand Spotlight
          </motion.h2>
        </div>

        {/* Carousel Content */}
        <div className="relative">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[500px] md:min-h-[600px]">
            {/* Image Side */}
            <div className="relative aspect-[4/5] lg:aspect-[3/4] overflow-hidden rounded-2xl bg-neutral-100">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={currentBrand.id}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.4 },
                  }}
                  className="absolute inset-0"
                >
                  <div
                    className="absolute inset-0 bg-neutral-200"
                    style={{
                      backgroundImage: `url('${currentBrand.image}')`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                </motion.div>
              </AnimatePresence>

              {/* Brand badge on image */}
              <div className="absolute bottom-6 left-6 z-10">
                <span className="px-4 py-2 bg-white/90 backdrop-blur-sm text-neutral-900 text-xs tracking-widest uppercase">
                  Featured Brand
                </span>
              </div>
            </div>

            {/* Content Side */}
            <div className="flex flex-col justify-center py-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentBrand.id}
                  variants={textVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.5 }}
                  className="space-y-8"
                >
                  {/* Tagline */}
                  <span className="text-xs tracking-[0.3em] uppercase text-neutral-500">
                    {currentBrand.tagline}
                  </span>

                  {/* Brand Name */}
                  <h3 className="text-5xl md:text-6xl lg:text-7xl font-light text-neutral-900 leading-tight">
                    {currentBrand.name}
                  </h3>

                  {/* Decorative line */}
                  <div className="w-20 h-px bg-neutral-300" />

                  {/* Story */}
                  <p className="text-lg md:text-xl text-neutral-600 font-light leading-relaxed max-w-lg">
                    {currentBrand.story}
                  </p>

                  {/* CTA Button */}
                  <Link href={`/brands/${currentBrand.slug}`}>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="group inline-flex items-center gap-3 px-8 py-4 bg-neutral-900 text-white text-sm tracking-widest uppercase transition-all duration-300 hover:bg-neutral-800"
                    >
                      Explore Brand
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </motion.button>
                  </Link>
                </motion.div>
              </AnimatePresence>

              {/* Navigation */}
              <div className="flex items-center gap-6 mt-12">
                <button
                  onClick={() => paginate(-1)}
                  className="w-12 h-12 rounded-full border border-neutral-300 flex items-center justify-center transition-all duration-300 hover:bg-neutral-900 hover:text-white hover:border-neutral-900"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => paginate(1)}
                  className="w-12 h-12 rounded-full border border-neutral-300 flex items-center justify-center transition-all duration-300 hover:bg-neutral-900 hover:text-white hover:border-neutral-900"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Progress indicators */}
                <div className="flex items-center gap-2 ml-auto">
                  {brands.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setDirection(index > currentIndex ? 1 : -1);
                        setCurrentIndex(index);
                      }}
                      className={`h-1 rounded-full transition-all duration-500 ${
                        index === currentIndex
                          ? "w-8 bg-neutral-900"
                          : "w-2 bg-neutral-300 hover:bg-neutral-400"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
