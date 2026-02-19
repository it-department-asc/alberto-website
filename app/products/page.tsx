"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ProductCard from "@/components/ProductCard";
import { FashionProductModal } from "@/components/fashion-modal";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { FashionProduct } from "@/lib/types/fashion-product";

interface ProductItem {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  subcategory: string;
  // Fashion modal fields
  brand: string;
  tagline: string;
  materials: string[];
  highlights: string[];
  colors: Array<{
    name: string;
    hex: string;
  }>;
  images: string[];
  moodImage?: string;
}

const products: ProductItem[] = [
  // Dress Sandals
  {
    id: 1,
    title: "Elegant Evening Sandal",
    description: "Sophistication meets comfort in this exquisitely crafted evening sandal. Designed for the modern woman who appreciates timeless elegance, every detail speaks to our commitment to quality and style. The graceful silhouette and premium materials create a statement piece that transitions seamlessly from formal occasions to elegant evenings.",
    image: "/images/dress-sandal-1.jpg",
    category: "women",
    subcategory: "Dress Sandals",
    brand: "ALBERTO",
    tagline: "Where elegance meets everyday luxury",
    materials: ["Premium Italian Leather", "Cushioned Insole", "Non-slip Rubber Sole"],
    highlights: [
      "Crafted for all-day comfort",
      "Breathable premium leather",
      "Elegant minimalist design",
      "Versatile styling options",
      "Handcrafted finishing",
    ],
    colors: [
      { name: "Black", hex: "#000000" },
      { name: "Nude", hex: "#D2B48C" },
    ],
    images: ["/images/dress-sandal-1.jpg", "/images/dress-sandal-1-2.jpg", "/images/dress-sandal-1-3.jpg"],
  },
  {
    id: 2,
    title: "Classic Strappy Sandal",
    description: "A timeless strappy design that embodies understated sophistication. Each strap is carefully positioned to provide both visual appeal and exceptional support. This sandal represents the perfect balance between fashion-forward design and everyday practicality.",
    image: "/images/dress-sandal-2.jpg",
    category: "women",
    subcategory: "Dress Sandals",
    brand: "ALBERTO",
    tagline: "Timeless design, modern comfort",
    materials: ["Soft Leather Upper", "Memory Foam Footbed", "Durable Sole Construction"],
    highlights: [
      "Adjustable straps for perfect fit",
      "Arch support technology",
      "Lightweight construction",
      "Easy on/off design",
    ],
    colors: [
      { name: "Black", hex: "#000000" },
      { name: "Gold", hex: "#FFD700" },
    ],
    images: ["/images/dress-sandal-2.jpg", "/images/dress-sandal-2-2.jpg"],
  },
  {
    id: 3,
    title: "Pearl Accent Sandal",
    description: "Delicate pearl embellishments transform this sandal into a work of art. Each pearl is thoughtfully placed to catch the light and add a touch of refined glamour. Perfect for special occasions or whenever you want to feel extraordinary.",
    image: "/images/dress-sandal-3.jpg",
    category: "women",
    subcategory: "Dress Sandals",
    brand: "ALBERTO",
    tagline: "Subtle luxury in every step",
    materials: ["Premium Satin", "Genuine Pearl Accents", "Padded Leather Insole"],
    highlights: [
      "Hand-placed pearl details",
      "Comfortable padded footbed",
      "Premium satin finish",
      "Perfect for special occasions",
    ],
    colors: [
      { name: "White", hex: "#FFFFFF" },
      { name: "Silver", hex: "#C0C0C0" },
    ],
    images: ["/images/dress-sandal-3.jpg", "/images/dress-sandal-3-2.jpg"],
  },
  // Wedges
  {
    id: 4,
    title: "Summer Platform Wedge",
    description: "Embrace the warmth of summer with this beautifully designed platform wedge. The elevated silhouette adds height while maintaining exceptional comfort. Crafted with summer adventures in mind, this wedge pairs effortlessly with flowing dresses or casual denim.",
    image: "/images/wedge-1.jpg",
    category: "women",
    subcategory: "Wedges",
    brand: "PICCADILLY",
    tagline: "Elevate your summer style",
    materials: ["Natural Jute Platform", "Soft Leather Straps", "Comfort Tech Footbed"],
    highlights: [
      "Platform design for added height",
      "Comfort technology cushioning",
      "Summer-ready materials",
      "Secure ankle support",
    ],
    colors: [
      { name: "Beige", hex: "#F5F5DC" },
      { name: "Brown", hex: "#8B4513" },
    ],
    images: ["/images/wedge-1.jpg", "/images/wedge-1-2.jpg"],
  },
  {
    id: 5,
    title: "Cork Wedge Sandal",
    description: "Natural cork meets artisanal craftsmanship in this stunning wedge design. The organic texture of cork provides both visual interest and lightweight comfort. Soft leather straps wrap the foot in luxury while maintaining a casual, effortless aesthetic.",
    image: "/images/wedge-2.jpg",
    category: "women",
    subcategory: "Wedges",
    brand: "PICCADILLY",
    tagline: "Natural beauty, refined comfort",
    materials: ["Sustainable Cork Heel", "Soft Napa Leather", "Eco-conscious Sole"],
    highlights: [
      "Natural cork material",
      "Butter-soft leather straps",
      "Sustainable design approach",
      "All-day wearability",
    ],
    colors: [
      { name: "Natural", hex: "#DEB887" },
      { name: "Black", hex: "#000000" },
    ],
    images: ["/images/wedge-2.jpg", "/images/wedge-2-2.jpg"],
  },
  {
    id: 6,
    title: "Espadrille Wedge",
    description: "A classic espadrille reimagined with modern comfort features. The traditional rope-wrapped platform meets contemporary cushioning technology. This versatile wedge captures Mediterranean charm while delivering the support you need for any adventure.",
    image: "/images/wedge-3.jpg",
    category: "women",
    subcategory: "Wedges",
    brand: "PICCADILLY",
    tagline: "Mediterranean charm meets modern comfort",
    materials: ["Traditional Rope Platform", "Canvas Upper", "Advanced Comfort Insole"],
    highlights: [
      "Classic espadrille styling",
      "Modern comfort features",
      "Versatile seasonal wear",
      "Lightweight construction",
    ],
    colors: [
      { name: "White", hex: "#FFFFFF" },
      { name: "Navy", hex: "#000080" },
    ],
    images: ["/images/wedge-3.jpg", "/images/wedge-3-2.jpg"],
  },
  // Men's products
  {
    id: 10,
    title: "Oxford Dress Shoe",
    description: "The quintessential gentleman's shoe, redefined for the modern era. This Oxford represents the pinnacle of formal footwear craftsmanship, featuring time-honored construction techniques and premium materials. Every stitch tells a story of dedication to excellence.",
    image: "/images/formal-1.jpg",
    category: "men",
    subcategory: "Men's Formal Shoes",
    brand: "ALBERTO",
    tagline: "Distinguished craftsmanship for the modern gentleman",
    materials: ["Full-grain Leather", "Goodyear Welt Construction", "Leather Sole"],
    highlights: [
      "Premium leather craftsmanship",
      "Traditional Goodyear welt",
      "Formal elegance",
      "Timeless silhouette",
      "Exceptional durability",
    ],
    colors: [
      { name: "Black", hex: "#000000" },
      { name: "Brown", hex: "#8B4513" },
    ],
    images: ["/images/formal-1.jpg", "/images/formal-1-2.jpg", "/images/formal-1-3.jpg"],
  },
  // Bags
  {
    id: 16,
    title: "Classic Tote Bag",
    description: "Spacious sophistication defines this essential tote bag. Designed to transition seamlessly from boardroom to weekend brunch, it offers generous interior space without compromising on style. Premium materials and thoughtful details make this tote a worthy companion for your daily journey.",
    image: "/images/bag-1.jpg",
    category: "bags",
    subcategory: "Bags",
    brand: "KYO",
    tagline: "Everyday elegance, effortless style",
    materials: ["Premium Vegan Leather", "Gold-tone Hardware", "Microfiber Lining"],
    highlights: [
      "Spacious interior compartment",
      "Durable construction",
      "Versatile styling",
      "Comfortable shoulder straps",
      "Multiple interior pockets",
    ],
    colors: [
      { name: "Black", hex: "#000000" },
      { name: "Brown", hex: "#8B4513" },
      { name: "Beige", hex: "#F5F5DC" },
    ],
    images: ["/images/bag-1.jpg", "/images/bag-1-2.jpg", "/images/bag-1-3.jpg"],
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