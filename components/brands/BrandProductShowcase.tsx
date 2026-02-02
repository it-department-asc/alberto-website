"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import type { BrandProduct } from "@/lib/types/brand";

interface BrandProductShowcaseProps {
  products: BrandProduct[];
  brandName: string;
}

export default function BrandProductShowcase({ products, brandName }: BrandProductShowcaseProps) {
  const [selectedProduct, setSelectedProduct] = useState<BrandProduct | null>(null);

  if (products.length === 0) {
    return (
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
              Collection
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-4">
              {brandName} Products
            </h2>
            <p className="text-muted-foreground text-lg">
              Product showcase coming soon.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
            Collection
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4">
            {brandName} Products
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Explore our curated selection of {brandName} products designed for style and comfort.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="group overflow-hidden border-0 shadow-sm hover:shadow-xl transition-all duration-300">
                <CardContent className="p-0">
                  {/* Product Image */}
                  <div className="relative aspect-square bg-gradient-to-br from-secondary to-muted overflow-hidden">
                    {product.image ? (
                      <div 
                        className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                        style={{ backgroundImage: `url(${product.image})` }}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-16 h-16 mx-auto rounded-full bg-foreground/5 flex items-center justify-center">
                            <span className="text-2xl font-bold text-foreground/30">
                              {product.name.charAt(0)}
                            </span>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileHover={{ opacity: 1, scale: 1 }}
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      >
                        <Button
                          variant="secondary"
                          size="lg"
                          className="rounded-full"
                          onClick={() => setSelectedProduct(product)}
                        >
                          <Eye className="w-5 h-5 mr-2" />
                          View Details
                        </Button>
                      </motion.div>
                    </div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 text-xs font-medium bg-background/90 backdrop-blur-sm rounded-full text-foreground">
                        {product.category}
                      </span>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {product.name}
                    </h3>
                    <p className="text-muted-foreground text-sm line-clamp-2">
                      {product.description}
                    </p>
                    <Button
                      variant="outline"
                      className="w-full mt-4 rounded-full"
                      onClick={() => setSelectedProduct(product)}
                    >
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Product Detail Modal */}
      <Dialog open={!!selectedProduct} onOpenChange={() => setSelectedProduct(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl">{selectedProduct?.name}</DialogTitle>
          </DialogHeader>
          
          {selectedProduct && (
            <div className="grid md:grid-cols-2 gap-6 mt-4">
              {/* Image */}
              <div className="aspect-square rounded-xl bg-gradient-to-br from-secondary to-muted overflow-hidden">
                {selectedProduct.image ? (
                  <div 
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${selectedProduct.image})` }}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-foreground/5 flex items-center justify-center">
                      <span className="text-3xl font-bold text-foreground/30">
                        {selectedProduct.name.charAt(0)}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Details */}
              <div className="flex flex-col">
                <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                  {selectedProduct.category}
                </span>
                <h3 className="text-2xl font-bold text-foreground mt-2 mb-4">
                  {selectedProduct.name}
                </h3>
                <p className="text-muted-foreground leading-relaxed flex-1">
                  {selectedProduct.description}
                </p>
                
                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-4">
                    Visit any Alberto Shoes branch to see this product in person.
                  </p>
                  <Button variant="outline" className="w-full rounded-full" asChild>
                    <a href="/branches">Find a Store</a>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
