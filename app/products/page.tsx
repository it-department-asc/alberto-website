"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  subcategory: string;
}

const products: Product[] = [
  // Dress Sandals
  {
    id: 1,
    title: "Elegant Evening Sandal",
    description: "Sophisticated design perfect for formal occasions and evening events",
    image: "/images/dress-sandal-1.jpg",
    category: "women",
    subcategory: "Dress Sandals",
  },
  {
    id: 2,
    title: "Classic Strappy Sandal",
    description: "Timeless strappy design with comfortable heel for all-day wear",
    image: "/images/dress-sandal-2.jpg",
    category: "women",
    subcategory: "Dress Sandals",
  },
  {
    id: 3,
    title: "Pearl Accent Sandal",
    description: "Delicate pearl embellishments for a touch of elegance",
    image: "/images/dress-sandal-3.jpg",
    category: "women",
    subcategory: "Dress Sandals",
  },
  // Wedges
  {
    id: 4,
    title: "Summer Platform Wedge",
    description: "Comfortable platform wedge perfect for summer outings",
    image: "/images/wedge-1.jpg",
    category: "women",
    subcategory: "Wedges",
  },
  {
    id: 5,
    title: "Cork Wedge Sandal",
    description: "Natural cork heel with soft leather straps for casual elegance",
    image: "/images/wedge-2.jpg",
    category: "women",
    subcategory: "Wedges",
  },
  {
    id: 6,
    title: "Espadrille Wedge",
    description: "Classic espadrille style with modern comfort features",
    image: "/images/wedge-3.jpg",
    category: "women",
    subcategory: "Wedges",
  },
  // Pumps
  {
    id: 7,
    title: "Classic Stiletto Pump",
    description: "Iconic stiletto heel for the confident modern woman",
    image: "/images/pump-1.jpg",
    category: "women",
    subcategory: "Pumps",
  },
  {
    id: 8,
    title: "Block Heel Pump",
    description: "Stable block heel combining style with all-day comfort",
    image: "/images/pump-2.jpg",
    category: "women",
    subcategory: "Pumps",
  },
  {
    id: 9,
    title: "Pointed Toe Kitten Heel",
    description: "Elegant kitten heel with sophisticated pointed toe",
    image: "/images/pump-3.jpg",
    category: "women",
    subcategory: "Pumps",
  },
  // Men's Formal
  {
    id: 10,
    title: "Oxford Dress Shoe",
    description: "Classic oxford style in premium leather for formal occasions",
    image: "/images/formal-1.jpg",
    category: "men",
    subcategory: "Men's Formal Shoes",
  },
  {
    id: 11,
    title: "Derby Business Shoe",
    description: "Versatile derby design perfect for business settings",
    image: "/images/formal-2.jpg",
    category: "men",
    subcategory: "Men's Formal Shoes",
  },
  {
    id: 12,
    title: "Cap Toe Oxford",
    description: "Distinguished cap toe detailing for the modern gentleman",
    image: "/images/formal-3.jpg",
    category: "men",
    subcategory: "Men's Formal Shoes",
  },
  // Loafers
  {
    id: 13,
    title: "Penny Loafer",
    description: "Timeless penny loafer in soft premium leather",
    image: "/images/loafer-1.jpg",
    category: "men",
    subcategory: "Loafers",
  },
  {
    id: 14,
    title: "Tassel Loafer",
    description: "Sophisticated tassel detail for a refined casual look",
    image: "/images/loafer-2.jpg",
    category: "men",
    subcategory: "Loafers",
  },
  {
    id: 15,
    title: "Suede Driving Loafer",
    description: "Comfortable driving loafer in luxurious suede",
    image: "/images/loafer-3.jpg",
    category: "men",
    subcategory: "Loafers",
  },
  // Bags
  {
    id: 16,
    title: "Classic Tote Bag",
    description: "Spacious tote perfect for work and everyday use",
    image: "/images/bag-1.jpg",
    category: "bags",
    subcategory: "Bags",
  },
  {
    id: 17,
    title: "Crossbody Shoulder Bag",
    description: "Versatile crossbody design for hands-free convenience",
    image: "/images/bag-2.jpg",
    category: "bags",
    subcategory: "Bags",
  },
  {
    id: 18,
    title: "Evening Clutch",
    description: "Elegant clutch perfect for special occasions",
    image: "/images/bag-3.jpg",
    category: "bags",
    subcategory: "Bags",
  },
  {
    id: 19,
    title: "Structured Handbag",
    description: "Professional structured bag for the modern businesswoman",
    image: "/images/bag-4.jpg",
    category: "bags",
    subcategory: "Bags",
  },
  {
    id: 20,
    title: "Casual Hobo Bag",
    description: "Relaxed hobo style for everyday casual wear",
    image: "/images/bag-5.jpg",
    category: "bags",
    subcategory: "Bags",
  },
];

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

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeSubcategory, setActiveSubcategory] = useState("All");

  const filteredProducts = products.filter((product) => {
    const categoryMatch = activeCategory === "all" || product.category === activeCategory;
    const subcategoryMatch = activeSubcategory === "All" || product.subcategory === activeSubcategory;
    return categoryMatch && subcategoryMatch;
  });

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
              Our Collection
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Discover Your
              <br />
              <span className="text-muted-foreground">Perfect Style</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mt-6 max-w-2xl mx-auto leading-relaxed">
              Explore our curated collection of premium footwear and bags, 
              designed to complement every occasion and elevate your personal style.
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
              Find exactly what you're looking for in our organized collections
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
    </div>
  );
}
