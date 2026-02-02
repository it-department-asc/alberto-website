"use client";

import { motion } from "framer-motion";
import { Sparkles, Wind, Feather, Gem, Heart, Star } from "lucide-react";

interface HighlightsSectionProps {
  highlights: string[];
}

const iconMap = [Sparkles, Wind, Feather, Gem, Heart, Star];

export default function HighlightsSection({ highlights }: HighlightsSectionProps) {
  if (!highlights.length) return null;

  return (
    <section className="py-16 md:py-24 bg-neutral-50/50">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-neutral-400">
            Design Highlights
          </span>
          <div className="w-12 h-px bg-neutral-200 mx-auto mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => {
            const Icon = iconMap[index % iconMap.length];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-4 group"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-4 h-4 text-neutral-600" />
                </div>
                <p className="text-neutral-700 font-light leading-relaxed pt-2">
                  {highlight}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
