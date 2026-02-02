"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface BrandFooterProps {
  brand: string;
  brandSlug?: string;
}

export default function BrandFooter({ brand, brandSlug }: BrandFooterProps) {
  const href = brandSlug ? `/brands/${brandSlug}` : "/brands";

  return (
    <section className="py-16 md:py-20 border-t border-neutral-100">
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          {/* Brand Statement */}
          <div className="space-y-4">
            <span className="text-xs tracking-[0.3em] uppercase text-neutral-400">
              {brand}
            </span>
            <p className="text-lg md:text-xl text-neutral-600 font-light max-w-2xl mx-auto">
              Discover the complete collection and explore more exceptional designs
              crafted with passion and precision.
            </p>
          </div>

          {/* Divider */}
          <div className="w-16 h-px bg-neutral-200 mx-auto" />

          {/* CTA Link */}
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link
              href={href}
              className="inline-flex items-center gap-3 text-neutral-900 hover:text-neutral-600 transition-colors duration-300 group"
            >
              <span className="text-sm tracking-wide">
                Discover more from {brand}
              </span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
