"use client";

import { motion } from "framer-motion";

interface MaterialsSectionProps {
  materials: string[];
}

export default function MaterialsSection({ materials }: MaterialsSectionProps) {
  if (!materials.length) return null;

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-neutral-400">
            Crafted With Care
          </span>
          <h2 className="mt-4 text-2xl md:text-3xl font-light text-neutral-900">
            Premium Materials
          </h2>
          <div className="w-12 h-px bg-neutral-200 mx-auto mt-6" />
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {materials.map((material, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="px-6 py-3 bg-white rounded-full shadow-sm border border-neutral-100 hover:shadow-md transition-shadow duration-300"
            >
              <span className="text-sm text-neutral-700 tracking-wide font-light">
                {material}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
