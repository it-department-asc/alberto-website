"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export interface BrandLogoItem {
  name: string;
  slug: string;
  logo?: string;
}

interface BrandLogoStripProps {
  brands?: BrandLogoItem[];
}

export default function BrandLogoStrip({ brands: brandsProp }: BrandLogoStripProps) {
  const brands = brandsProp || [];
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-16 md:py-20 bg-neutral-100/50 border-y border-neutral-200/50">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-neutral-400">
            Our Partner Brands
          </span>
        </motion.div>

        {/* Logo Strip */}
        <div
          ref={containerRef}
          className="flex items-center justify-center gap-8 md:gap-12 lg:gap-16 flex-wrap"
        >
          {brands.map((brand, index) => (
            <motion.div
              key={brand.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <Link href={`/brands/${brand.slug}`}>
                <motion.div
                  whileHover={{ scale: 1.1, opacity: 1 }}
                  className="px-6 py-4 opacity-60 transition-opacity duration-300 hover:opacity-100 cursor-pointer"
                >
                  {brand.logo ? (
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      className="h-8 md:h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  ) : (
                    <span className="text-lg md:text-xl font-light tracking-widest text-neutral-700">
                      {brand.name}
                    </span>
                  )}
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
