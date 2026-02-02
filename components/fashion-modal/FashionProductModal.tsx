"use client";

import { useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import type { FashionProduct } from "@/lib/types/fashion-product";
import HeroSection from "./HeroSection";
import ImageStorySection from "./ImageStorySection";
import HighlightsSection from "./HighlightsSection";
import MaterialsSection from "./MaterialsSection";
import ColorSwatches from "./ColorSwatches";
import BrandFooter from "./BrandFooter";

interface FashionProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: FashionProduct | null;
}

export default function FashionProductModal({
  isOpen,
  onClose,
  product,
}: FashionProductModalProps) {
  // Handle ESC key
  const handleEscKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleEscKey);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscKey);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, handleEscKey]);

  if (!product) return null;

  // Generate brand slug from brand name
  const brandSlug = product.brand.toLowerCase().replace(/[&\s]+/g, "-");

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent 
        className="w-[98vw] !max-w-[1600px] sm:!max-w-[1600px] h-[95vh] p-0 gap-0 overflow-hidden bg-white rounded-2xl border-0 shadow-2xl"
        showCloseButton={false}
      >
        {/* Accessibility Title */}
        <DialogTitle className="sr-only">
          {product.name} by {product.brand}
        </DialogTitle>

        {/* Close Button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          onClick={onClose}
          className="absolute right-6 top-6 z-50 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-white hover:scale-110 active:scale-95 transition-all duration-300"
          aria-label="Close modal"
        >
          <X className="w-5 h-5 text-neutral-600" />
        </motion.button>

        {/* Scrollable Content */}
        <ScrollArea className="h-[95vh]">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* Hero Section */}
            <HeroSection
              brand={product.brand}
              name={product.name}
              tagline={product.tagline}
              moodImage={product.moodImage}
            />

            {/* Image Story Section */}
            <ImageStorySection
              images={product.images}
              productName={product.name}
              description={product.description}
            />

            {/* Design Highlights */}
            <HighlightsSection highlights={product.highlights} />

            {/* Materials */}
            <MaterialsSection materials={product.materials} />

            {/* Color Swatches */}
            <ColorSwatches colors={product.colors} />

            {/* Brand Footer */}
            <BrandFooter brand={product.brand} brandSlug={brandSlug} />
          </motion.div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
