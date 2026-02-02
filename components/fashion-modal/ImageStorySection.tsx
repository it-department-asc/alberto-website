"use client";

import { motion } from "framer-motion";
import FashionImageCarousel from "./FashionImageCarousel";

interface ImageStorySectionProps {
  images: string[];
  productName: string;
  description: string;
}

export default function ImageStorySection({
  images,
  productName,
  description,
}: ImageStorySectionProps) {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Carousel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <FashionImageCarousel images={images} productName={productName} />
          </motion.div>

          {/* Story Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-2">
              <span className="text-xs tracking-[0.3em] uppercase text-neutral-400">
                The Story
              </span>
              <div className="w-12 h-px bg-neutral-200" />
            </div>

            <p className="text-lg md:text-xl text-neutral-700 font-light leading-relaxed">
              {description}
            </p>

            <blockquote className="pl-6 border-l-2 border-neutral-200">
              <p className="text-neutral-500 italic font-light">
                "Every detail tells a story of craftsmanship and dedication to quality."
              </p>
            </blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
