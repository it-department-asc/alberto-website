"use client";

import { motion } from "framer-motion";

interface HeroSectionProps {
  brand: string;
  name: string;
  tagline: string;
  moodImage?: string;
}

export default function HeroSection({
  brand,
  name,
  tagline,
  moodImage,
}: HeroSectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="relative"
    >
      {/* Hero Image Background */}
      <div className="relative h-[50vh] min-h-[400px] bg-gradient-to-br from-neutral-100 via-neutral-50 to-neutral-100 overflow-hidden">
        {/* Mood Image */}
        {moodImage && (
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${moodImage}')` }}
          />
        )}
        {/* Overlay - darker when image is present */}
        <div className={`absolute inset-0 ${moodImage ? "bg-black/40" : "opacity-30"}`}>
          {!moodImage && (
            <>
              <div className="absolute top-0 right-0 w-96 h-96 bg-neutral-200 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-neutral-200 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
            </>
          )}
        </div>

        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8">
          {/* Brand Name */}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xs tracking-[0.3em] uppercase mb-6"
            style={{ color: moodImage ? 'rgba(255,255,255,0.7)' : undefined }}
          >
            {brand}
          </motion.span>

          {/* Product Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-tight max-w-3xl"
            style={{ color: moodImage ? 'white' : undefined }}
          >
            {name}
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 text-lg md:text-xl font-light tracking-wide max-w-xl"
            style={{ color: moodImage ? 'rgba(255,255,255,0.85)' : undefined }}
          >
            {tagline}
          </motion.p>

          {/* Decorative Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-10 w-16 h-px bg-neutral-300"
          />
        </div>
      </div>
    </motion.section>
  );
}
