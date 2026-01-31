"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, ShoppingBag, Eye } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Product } from "@/lib/types/product";
import ProductModal from "./ProductModal";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const discountPercentage = product.originalPrice
    ? Math.round(
        ((product.originalPrice - product.price) / product.originalPrice) * 100
      )
    : 0;

  const handleWishlistClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsWishlisted(!isWishlisted);
  };

  const handleQuickView = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsModalOpen(true);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: index * 0.1 }}
      >
        <Card
          className="group cursor-pointer overflow-hidden border-0 shadow-sm hover:shadow-xl transition-all duration-500 bg-white rounded-2xl"
          onClick={() => setIsModalOpen(true)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Image Container */}
          <div className="relative aspect-[4/5] bg-gray-100 overflow-hidden">
            {/* Product Image Placeholder */}
            <motion.div
              animate={{ scale: isHovered ? 1.05 : 1 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center"
            >
              <ShoppingBag className="w-16 h-16 text-gray-400" />
            </motion.div>

            {/* Badges */}
            <div className="absolute top-3 left-3 flex flex-col gap-2">
              {discountPercentage > 0 && (
                <Badge className="bg-red-500 text-white hover:bg-red-600 font-semibold">
                  -{discountPercentage}%
                </Badge>
              )}
              {!product.inStock && (
                <Badge variant="secondary" className="bg-gray-900 text-white">
                  Out of Stock
                </Badge>
              )}
            </div>

            {/* Wishlist Button */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleWishlistClick}
              className={cn(
                "absolute top-3 right-3 w-10 h-10 rounded-full flex items-center justify-center transition-colors shadow-lg",
                isWishlisted
                  ? "bg-red-500 text-white"
                  : "bg-white text-gray-600 hover:text-red-500"
              )}
              aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
            >
              <Heart
                className={cn("w-5 h-5", isWishlisted && "fill-current")}
              />
            </motion.button>

            {/* Quick View Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
              transition={{ duration: 0.3 }}
              className="absolute bottom-4 left-4 right-4"
            >
              <button
                onClick={handleQuickView}
                className="w-full py-3 bg-white/95 backdrop-blur-sm rounded-xl font-semibold text-gray-900 hover:bg-white transition-colors shadow-lg flex items-center justify-center gap-2"
              >
                <Eye className="w-4 h-4" />
                Quick View
              </button>
            </motion.div>

            {/* Color Options Preview */}
            {product.colors.length > 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovered ? 1 : 0 }}
                className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 py-2 px-3 bg-white/95 backdrop-blur-sm rounded-full shadow-lg"
                style={{ display: isHovered ? "flex" : "none" }}
              >
                {product.colors.slice(0, 4).map((color, idx) => (
                  <span
                    key={idx}
                    className="w-5 h-5 rounded-full border-2 border-white shadow-sm"
                    style={{ backgroundColor: color.hex }}
                    title={color.name}
                  />
                ))}
                {product.colors.length > 4 && (
                  <span className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center text-[10px] font-semibold text-gray-600">
                    +{product.colors.length - 4}
                  </span>
                )}
              </motion.div>
            )}
          </div>

          {/* Content */}
          <CardContent className="p-4 space-y-2">
            {/* Brand */}
            <p className="text-xs font-semibold text-amber-600 uppercase tracking-wider">
              {product.brand}
            </p>

            {/* Name */}
            <h3 className="font-semibold text-gray-900 leading-tight line-clamp-2 group-hover:text-amber-600 transition-colors">
              {product.name}
            </h3>

            {/* Category */}
            <p className="text-xs text-gray-500">{product.category}</p>

            {/* Price */}
            <div className="flex items-baseline gap-2 pt-1">
              <span className="text-lg font-bold text-gray-900">
                ₱{product.price.toLocaleString()}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-gray-400 line-through">
                  ₱{product.originalPrice.toLocaleString()}
                </span>
              )}
            </div>

            {/* Sizes Preview */}
            {product.sizes.length > 0 && (
              <div className="flex gap-1 pt-1">
                {product.sizes.slice(0, 5).map((size) => (
                  <span
                    key={size}
                    className="text-[10px] px-1.5 py-0.5 bg-gray-100 rounded text-gray-600"
                  >
                    {size}
                  </span>
                ))}
                {product.sizes.length > 5 && (
                  <span className="text-[10px] px-1.5 py-0.5 bg-gray-100 rounded text-gray-600">
                    +{product.sizes.length - 5}
                  </span>
                )}
              </div>
            )}
          </CardContent>
        </Card>
      </motion.div>

      {/* Product Modal */}
      <ProductModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        product={product}
      />
    </>
  );
}
