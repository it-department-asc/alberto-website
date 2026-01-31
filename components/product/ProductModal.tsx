"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import {
  ShoppingCart,
  Heart,
  Share2,
  Check,
  X,
  Truck,
  Shield,
  RotateCcw,
} from "lucide-react";
import { cn } from "@/lib/utils";
import type { Product, ProductColor } from "@/lib/types/product";
import ImageCarousel from "./ImageCarousel";
import SizeSelector from "./SizeSelector";
import ColorSelector from "./ColorSelector";
import QuantitySelector from "./QuantitySelector";

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product | null;
}

export default function ProductModal({
  isOpen,
  onClose,
  product,
}: ProductModalProps) {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<ProductColor | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  // Reset state when product changes
  useEffect(() => {
    if (product) {
      setSelectedSize(null);
      setSelectedColor(product.colors[0] || null);
      setQuantity(1);
      setAddedToCart(false);
    }
  }, [product]);

  const handleAddToCart = async () => {
    if (!selectedSize || !selectedColor || !product) return;

    setIsAddingToCart(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsAddingToCart(false);
    setAddedToCart(true);

    // Reset after showing success
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const handleWishlist = () => {
    setIsWishlisted(!isWishlisted);
  };

  const canAddToCart = product?.inStock && selectedSize && selectedColor;

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        damping: 25,
        stiffness: 300,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      y: 20,
      transition: {
        duration: 0.2,
      },
    },
  };

  if (!product) return null;

  const discountPercentage = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <AnimatePresence>
        {isOpen && (
          <DialogContent
            className="max-w-5xl w-[95vw] max-h-[90vh] p-0 gap-0 overflow-hidden bg-white rounded-2xl border-0 shadow-2xl"
            asChild
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {/* Visually hidden title for accessibility */}
              <DialogTitle className="sr-only">{product.name}</DialogTitle>

              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="absolute right-4 top-4 z-50 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5 text-gray-600" />
              </motion.button>

              <ScrollArea className="max-h-[90vh]">
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Left Side - Image Carousel */}
                  <div className="p-6 md:p-8 bg-gray-50/50">
                    <ImageCarousel
                      images={product.images}
                      productName={product.name}
                    />
                  </div>

                  {/* Right Side - Product Details */}
                  <div className="p-6 md:p-8 flex flex-col">
                    {/* Header */}
                    <div className="space-y-3">
                      {/* Brand & Category */}
                      <div className="flex items-center gap-2 flex-wrap">
                        <Badge
                          variant="secondary"
                          className="bg-amber-100 text-amber-800 hover:bg-amber-200 font-semibold"
                        >
                          {product.brand}
                        </Badge>
                        <span className="text-sm text-gray-500">
                          {product.category}
                        </span>
                      </div>

                      {/* Product Name */}
                      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                        {product.name}
                      </h2>

                      {/* Price */}
                      <div className="flex items-baseline gap-3">
                        <span className="text-3xl font-bold text-gray-900">
                          ₱{product.price.toLocaleString()}
                        </span>
                        {product.originalPrice && (
                          <>
                            <span className="text-lg text-gray-400 line-through">
                              ₱{product.originalPrice.toLocaleString()}
                            </span>
                            <Badge className="bg-red-500 text-white hover:bg-red-600">
                              -{discountPercentage}%
                            </Badge>
                          </>
                        )}
                      </div>

                      {/* Stock Status */}
                      <div className="flex items-center gap-2">
                        {product.inStock ? (
                          <>
                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                            <span className="text-sm font-medium text-green-600">
                              In Stock
                            </span>
                          </>
                        ) : (
                          <>
                            <span className="w-2 h-2 bg-red-500 rounded-full" />
                            <span className="text-sm font-medium text-red-600">
                              Out of Stock
                            </span>
                          </>
                        )}
                      </div>
                    </div>

                    <Separator className="my-6" />

                    {/* Description */}
                    <div className="space-y-3">
                      <h3 className="text-sm font-semibold text-gray-900">
                        Description
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {product.description}
                      </p>
                    </div>

                    {/* Features */}
                    {product.features.length > 0 && (
                      <div className="mt-4 space-y-3">
                        <h3 className="text-sm font-semibold text-gray-900">
                          Features
                        </h3>
                        <ul className="space-y-2">
                          {product.features.map((feature, index) => (
                            <motion.li
                              key={index}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                              className="flex items-start gap-2 text-sm text-gray-600"
                            >
                              <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                              {feature}
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <Separator className="my-6" />

                    {/* Selectors */}
                    <div className="space-y-6">
                      {/* Size Selector */}
                      {product.sizes.length > 0 && (
                        <SizeSelector
                          sizes={product.sizes}
                          selectedSize={selectedSize}
                          onSelect={setSelectedSize}
                          disabled={!product.inStock}
                        />
                      )}

                      {/* Color Selector */}
                      {product.colors.length > 0 && (
                        <ColorSelector
                          colors={product.colors}
                          selectedColor={selectedColor}
                          onSelect={setSelectedColor}
                          disabled={!product.inStock}
                        />
                      )}

                      {/* Quantity Selector */}
                      <QuantitySelector
                        quantity={quantity}
                        onQuantityChange={setQuantity}
                        disabled={!product.inStock}
                      />
                    </div>

                    <Separator className="my-6" />

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <motion.div
                        whileHover={{ scale: canAddToCart ? 1.02 : 1 }}
                        whileTap={{ scale: canAddToCart ? 0.98 : 1 }}
                        className="flex-1"
                      >
                        <Button
                          onClick={handleAddToCart}
                          disabled={!canAddToCart || isAddingToCart}
                          className={cn(
                            "w-full h-14 rounded-xl text-base font-semibold transition-all duration-300",
                            addedToCart
                              ? "bg-green-500 hover:bg-green-600"
                              : "bg-gray-900 hover:bg-gray-800"
                          )}
                        >
                          {isAddingToCart ? (
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{
                                duration: 1,
                                repeat: Infinity,
                                ease: "linear",
                              }}
                              className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                            />
                          ) : addedToCart ? (
                            <>
                              <Check className="w-5 h-5 mr-2" />
                              Added to Cart
                            </>
                          ) : (
                            <>
                              <ShoppingCart className="w-5 h-5 mr-2" />
                              Add to Cart
                            </>
                          )}
                        </Button>
                      </motion.div>

                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={handleWishlist}
                          className={cn(
                            "w-14 h-14 rounded-xl border-2 transition-all duration-300",
                            isWishlisted
                              ? "bg-red-50 border-red-200 text-red-500 hover:bg-red-100"
                              : "border-gray-200 hover:border-gray-300"
                          )}
                          aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
                        >
                          <Heart
                            className={cn("w-5 h-5", isWishlisted && "fill-current")}
                          />
                        </Button>
                      </motion.div>

                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button
                          variant="outline"
                          size="icon"
                          className="w-14 h-14 rounded-xl border-2 border-gray-200 hover:border-gray-300"
                          aria-label="Share product"
                        >
                          <Share2 className="w-5 h-5" />
                        </Button>
                      </motion.div>
                    </div>

                    {/* Validation Message */}
                    {!selectedSize && product.inStock && (
                      <p className="text-sm text-amber-600 mt-3">
                        Please select a size to continue
                      </p>
                    )}

                    {/* Trust Badges */}
                    <div className="mt-6 pt-6 border-t border-gray-100">
                      <div className="grid grid-cols-3 gap-4">
                        <div className="flex flex-col items-center text-center gap-2">
                          <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                            <Truck className="w-5 h-5 text-gray-600" />
                          </div>
                          <span className="text-xs text-gray-600">Free Delivery</span>
                        </div>
                        <div className="flex flex-col items-center text-center gap-2">
                          <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                            <Shield className="w-5 h-5 text-gray-600" />
                          </div>
                          <span className="text-xs text-gray-600">Warranty</span>
                        </div>
                        <div className="flex flex-col items-center text-center gap-2">
                          <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                            <RotateCcw className="w-5 h-5 text-gray-600" />
                          </div>
                          <span className="text-xs text-gray-600">7-Day Return</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollArea>
            </motion.div>
          </DialogContent>
        )}
      </AnimatePresence>
    </Dialog>
  );
}
