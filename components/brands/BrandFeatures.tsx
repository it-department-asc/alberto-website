"use client";

import { motion } from "framer-motion";
import {
  Wind,
  Thermometer,
  Award,
  Palette,
  Puzzle,
  Leaf,
  Sparkles,
  Heart,
  Crown,
  Gem,
  Clock,
  Star,
  Building,
  Zap,
  TrendingUp,
  Footprints,
  Shield,
  Feather,
  Flame,
  Wallet,
  Smile,
} from "lucide-react";
import type { BrandFeature } from "@/lib/types/brand";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Wind,
  Thermometer,
  Award,
  Palette,
  Puzzle,
  Leaf,
  Sparkles,
  Heart,
  Crown,
  Gem,
  Clock,
  Star,
  Building,
  Zap,
  TrendingUp,
  Footprints,
  Shield,
  Feather,
  Flame,
  Wallet,
  Smile,
};

interface BrandFeaturesProps {
  features: BrandFeature[];
  brandName: string;
}

export default function BrandFeatures({ features, brandName }: BrandFeaturesProps) {
  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
            Innovation
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4">
            What Makes {brandName} Special
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const IconComponent = iconMap[feature.icon] || Star;
            
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="bg-background rounded-2xl p-8 h-full hover:shadow-lg transition-shadow duration-300">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-14 h-14 rounded-xl bg-foreground/5 flex items-center justify-center mb-6"
                  >
                    <IconComponent className="w-7 h-7 text-foreground" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
