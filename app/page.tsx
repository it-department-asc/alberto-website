"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, MapPin, Star, Heart, ShoppingBag } from "lucide-react";

const categories = [
  {
    title: "Women's Collection",
    description: "Elegant sandals, trendy wedges, and fashionable pumps for the modern Filipina",
    image: "/images/womens.jpg",
    category: "Women",
  },
  {
    title: "Men's Collection",
    description: "Sophisticated formal shoes and comfortable loafers for the distinguished gentleman",
    image: "/images/mens.jpg",
    category: "Men",
  },
  {
    title: "Bags Collection",
    description: "Stylish and functional bags to complement your every outfit and occasion",
    image: "/images/bags.jpg",
    category: "Bags",
  },
];

const features = [
  {
    icon: Star,
    title: "Premium Quality",
    description: "Crafted with the finest materials for lasting comfort and style",
  },
  {
    icon: Heart,
    title: "Customer First",
    description: "Dedicated service ensuring your complete satisfaction",
  },
  {
    icon: ShoppingBag,
    title: "Wide Selection",
    description: "From casual to formal, find your perfect pair",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* About Preview Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                About Alberto
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 leading-tight">
                Crafting Excellence
                <br />
                <span className="text-muted-foreground">Since 1980</span>
              </h2>
              <p className="text-lg text-muted-foreground mt-6 leading-relaxed">
                For over four decades, Alberto Shoes Corporation has been the Philippines' 
                trusted destination for quality footwear and bags. We believe that every 
                step should be taken with confidence, and every style should reflect your 
                unique personality.
              </p>
              <p className="text-lg text-muted-foreground mt-4 leading-relaxed">
                With 80 branches nationwide, we're committed to bringing premium fashion 
                accessories closer to every Filipino family.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-8"
              >
                <Button variant="outline" size="lg" className="rounded-full" asChild>
                  <Link href="/about">
                    Learn More About Us
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-secondary to-muted overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-background/80 flex items-center justify-center">
                      <span className="text-4xl font-bold text-foreground">A</span>
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">Alberto Shoes</h3>
                    <p className="text-muted-foreground mt-2">Quality & Style Since 1980</p>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute top-8 right-8 w-20 h-20 rounded-full bg-background/50 blur-xl" />
                <div className="absolute bottom-8 left-8 w-32 h-32 rounded-full bg-background/30 blur-2xl" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Why Choose Alberto
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Experience the difference that over 40 years of excellence brings
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow duration-300 bg-card h-full">
                  <CardContent className="p-8 text-center">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-16 h-16 mx-auto rounded-2xl bg-secondary flex items-center justify-center mb-6"
                    >
                      <feature.icon className="w-8 h-8 text-foreground" />
                    </motion.div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories Section */}
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
              Our Collections
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4">
              Explore Our Categories
            </h2>
            <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
              From elegant women's footwear to sophisticated men's shoes and stylish bags, 
              discover the perfect addition to your wardrobe.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Link href="/products">
                  <ProductCard {...category} />
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mt-12"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" className="rounded-full px-8" asChild>
                <Link href="/products">
                  View All Products
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Branches Section */}
      <section className="py-24 bg-secondary relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-foreground blur-3xl" />
          <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-foreground blur-3xl" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                Nationwide Presence
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 leading-tight">
                80 Branches
                <br />
                <span className="text-muted-foreground">Across the Philippines</span>
              </h2>
              <p className="text-lg text-muted-foreground mt-6 leading-relaxed">
                From Metro Manila to Mindanao, Alberto Shoes is never far away. 
                Visit any of our 80 branches nationwide to experience our quality 
                products and exceptional customer service firsthand.
              </p>

              <div className="grid grid-cols-2 gap-6 mt-8">
                {[
                  { region: "Metro Manila", count: "20+" },
                  { region: "Luzon", count: "25+" },
                  { region: "Visayas", count: "20+" },
                  { region: "Mindanao", count: "15+" },
                ].map((item, index) => (
                  <motion.div
                    key={item.region}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="p-4 rounded-xl bg-background"
                  >
                    <div className="text-2xl font-bold text-foreground">{item.count}</div>
                    <div className="text-sm text-muted-foreground">{item.region}</div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-8"
              >
                <Button variant="outline" size="lg" className="rounded-full" asChild>
                  <Link href="/branches">
                    Find a Branch Near You
                    <MapPin className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Philippines Map Placeholder */}
              <div className="aspect-[4/5] rounded-3xl bg-background overflow-hidden relative shadow-xl">
                <div className="absolute inset-0 p-8 flex flex-col items-center justify-center">
                  <div className="w-full h-full rounded-2xl bg-gradient-to-br from-secondary to-muted flex items-center justify-center relative">
                    {/* Stylized map representation */}
                    <div className="text-center">
                      <MapPin className="w-16 h-16 text-foreground mx-auto mb-4" />
                      <h3 className="text-2xl font-bold text-foreground">Philippines</h3>
                      <p className="text-muted-foreground mt-2">80 Store Locations</p>
                      
                      {/* Dots representing branches */}
                      <div className="mt-8 flex flex-wrap justify-center gap-2 max-w-xs mx-auto">
                        {Array.from({ length: 20 }).map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                            className="w-3 h-3 rounded-full bg-foreground/60"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 bg-foreground text-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Discover Your Perfect Pair Today
            </h2>
            <p className="text-lg text-background/70 mt-6 leading-relaxed">
              Whether you're looking for the perfect dress sandals for a special occasion, 
              comfortable everyday loafers, or a stylish bag to complete your look — 
              Alberto has you covered.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" variant="secondary" className="rounded-full px-8 py-6" asChild>
                  <Link href="/products">
                    Browse Collections
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="rounded-full px-8 py-6 border-background/30 bg-transparent text-background hover:bg-background/10 hover:text-background" 
                  asChild
                >
                  <Link href="/branches">
                    Visit a Store
                  </Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
