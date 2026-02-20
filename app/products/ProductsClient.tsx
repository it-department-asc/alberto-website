"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ProductCard from "@/components/ProductCard";
import { FashionProductModal } from "@/components/fashion-modal";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export interface ProductItem {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  subcategory: string;
  brand: string;
  tagline: string;
  materials: string[];
  highlights: string[];
  colors: Array<{ name: string; hex: string }>;
  images: string[];
  moodImage?: string;
}

interface ProductsClientProps {
  products: ProductItem[];
  heroLabel?: string;
  heroTitle?: string;
  heroTitleMuted?: string;
  heroDescription?: string;
}

const categories = [
  { value: "all", label: "All Products" },
  { value: "women", label: "Women's Collection" },
  { value: "men", label: "Men's Collection" },
  { value: "bags", label: "Bags" },
];

const subcategories = [
  "All",
  "Dress Sandals",
  "Wedges",
  "Pumps",
  "Men's Formal Shoes",
  "Loafers",
  "Bags",
];

export default function ProductsClient({ products, heroLabel, heroTitle, heroTitleMuted, heroDescription }: ProductsClientProps) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeSubcategory, setActiveSubcategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredProducts = products.filter((product) => {
    const categoryMatch = activeCategory === "all" || product.category === activeCategory;
    const subcategoryMatch = activeSubcategory === "All" || product.subcategory === activeSubcategory;
    return categoryMatch && subcategoryMatch;
  });

  const handleViewProduct = (product: ProductItem) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-background via-secondary to-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-2 bg-secondary rounded-full text-sm font-medium text-muted-foreground mb-6">
              {heroLabel}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              {heroTitle}
              <br />
              <span className="text-muted-foreground">{heroTitleMuted}</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mt-6 max-w-2xl mx-auto leading-relaxed">
              {heroDescription}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          {/* Category Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Tabs defaultValue="all" className="w-full" onValueChange={setActiveCategory}>
              <TabsList className="w-full flex flex-wrap justify-center gap-2 bg-transparent h-auto mb-8">
                {categories.map((category) => (
                  <TabsTrigger
                    key={category.value}
                    value={category.value}
                    className="px-6 py-3 rounded-full data-[state=active]:bg-foreground data-[state=active]:text-background"
                  >
                    {category.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </motion.div>

          {/* Subcategory Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-wrap justify-center gap-2 mb-12"
          >
            {subcategories.map((subcategory) => (
              <Button
                key={subcategory}
                variant={activeSubcategory === subcategory ? "default" : "outline"}
                size="sm"
                className="rounded-full"
                onClick={() => setActiveSubcategory(subcategory)}
              >
                {subcategory}
              </Button>
            ))}
          </motion.div>

          {/* Products Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          >
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <ProductCard
                  title={product.title}
                  description={product.description}
                  image={product.image}
                  category={product.subcategory}
                  onViewDetails={() => handleViewProduct(product)}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Empty State */}
          {filteredProducts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <p className="text-muted-foreground text-lg">
                No products found for the selected filters.
              </p>
              <Button
                variant="outline"
                className="mt-4 rounded-full"
                onClick={() => {
                  setActiveCategory("all");
                  setActiveSubcategory("All");
                }}
              >
                Clear Filters
              </Button>
            </motion.div>
          )}

          {/* Product Count */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-12"
          >
            <p className="text-muted-foreground">
              Showing {filteredProducts.length} of {products.length} products
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories Overview */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Shop By Category
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Find exactly what you&apos;re looking for in our organized collections
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Dress Sandals",
                description: "Elegant sandals for special occasions and formal events",
                count: products.filter(p => p.subcategory === "Dress Sandals").length,
              },
              {
                title: "Wedges",
                description: "Comfortable and stylish wedge heels for everyday wear",
                count: products.filter(p => p.subcategory === "Wedges").length,
              },
              {
                title: "Pumps",
                description: "Classic pumps from kitten heels to statement stilettos",
                count: products.filter(p => p.subcategory === "Pumps").length,
              },
              {
                title: "Men's Formal Shoes",
                description: "Distinguished formal footwear for the modern gentleman",
                count: products.filter(p => p.subcategory === "Men's Formal Shoes").length,
              },
              {
                title: "Loafers",
                description: "Versatile loafers combining comfort with sophistication",
                count: products.filter(p => p.subcategory === "Loafers").length,
              },
              {
                title: "Bags",
                description: "Stylish bags and accessories to complete your look",
                count: products.filter(p => p.subcategory === "Bags").length,
              },
            ].map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-card rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer"
                onClick={() => setActiveSubcategory(category.title)}
              >
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {category.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {category.description}
                </p>
                <span className="text-sm font-medium text-foreground">
                  {category.count} Products →
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Modal */}
      <FashionProductModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        product={selectedProduct ? {
          id: selectedProduct.id.toString(),
          name: selectedProduct.title,
          brand: selectedProduct.brand,
          tagline: selectedProduct.tagline,
          description: selectedProduct.description,
          materials: selectedProduct.materials,
          highlights: selectedProduct.highlights,
          colors: selectedProduct.colors,
          images: selectedProduct.images,
          moodImage: selectedProduct.moodImage,
        } : null}
      />
    </div>
  );
}
