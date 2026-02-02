"use client";

import { motion } from "framer-motion";
import type { FashionProductColor } from "@/lib/types/fashion-product";

interface ColorSwatchesProps {
  colors: FashionProductColor[];
}

export default function ColorSwatches({ colors }: ColorSwatchesProps) {
  if (!colors.length) return null;

  return (
    <section className="py-16 md:py-20 bg-neutral-50/50">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-neutral-400">
            Available Colors
          </span>
          <div className="w-12 h-px bg-neutral-200 mx-auto mt-4" />
        </motion.div>

        <div className="flex flex-wrap justify-center gap-8">
          {colors.map((color, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex flex-col items-center gap-3"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-14 h-14 rounded-full shadow-lg"
                style={{ backgroundColor: color.hex }}
                aria-label={color.name}
              />
              <span className="text-xs tracking-wide text-neutral-500 uppercase">
                {color.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
