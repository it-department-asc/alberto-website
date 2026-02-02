"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
  category?: string;
  onViewDetails?: () => void;
}

export default function ProductCard({ title, description, image, category, onViewDetails }: ProductCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="cursor-pointer"
      onClick={onViewDetails}
    >
      <Card className="group overflow-hidden border-0 shadow-sm hover:shadow-xl transition-shadow duration-500 bg-card">
        <div className="relative aspect-[4/5] overflow-hidden bg-secondary">
          {/* Placeholder gradient when no actual image */}
          <div className="absolute inset-0 bg-gradient-to-br from-muted to-secondary" />

          {/* Image placeholder with icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center p-6">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-background/80 flex items-center justify-center">
                <svg
                  className="w-10 h-10 text-muted-foreground"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <span className="text-sm text-muted-foreground font-medium">
                {category || "Product Image"}
              </span>
            </div>
          </div>

          {/* Hover overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-foreground/10 flex items-center justify-center"
          >
            <motion.span
              initial={{ scale: 0.8, opacity: 0 }}
              whileHover={{ scale: 1, opacity: 1 }}
              className="px-6 py-3 bg-background rounded-full text-sm font-medium shadow-lg"
            >
              View Details
            </motion.span>
          </motion.div>
        </div>

        <CardContent className="p-6">
          {category && (
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
              {category}
            </span>
          )}
          <h3 className="text-lg font-semibold text-foreground mt-1 group-hover:text-foreground/80 transition-colors">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
            {description}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
}