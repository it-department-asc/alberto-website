"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface BrandItem {
  slug: string;
  name: string;
  tagline: string;
  heroImage: string;
}

interface BrandsClientProps {
  brands: BrandItem[];
  heroLabel?: string;
  heroTitle?: string;
  heroDescription?: string;
  ctaTitle?: string;
  ctaText?: string;
  ctaButtonText?: string;
}

export default function BrandsClient({
  brands,
  heroLabel,
  heroTitle,
  heroDescription,
  ctaTitle,
  ctaText,
  ctaButtonText,
}: BrandsClientProps) {
  return (
    <main className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-secondary to-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
              {heroLabel}
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mt-4 mb-6">
              {heroTitle}
            </h1>
            <p className="text-xl text-muted-foreground">
              {heroDescription}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Brands Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {brands.map((brand, index) => (
              <motion.div
                key={brand.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link href={`/brands/${brand.slug}`}>
                  <Card className="group overflow-hidden border-0 shadow-sm hover:shadow-xl transition-all duration-300 h-full">
                    <CardContent className="p-0">
                      {/* Brand Image */}
                      <div className="aspect-[4/3] bg-gradient-to-br from-secondary via-muted to-background relative overflow-hidden">
                        {brand.heroImage ? (
                          <div
                            className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                            style={{ backgroundImage: `url(${brand.heroImage})` }}
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <motion.div
                              whileHover={{ scale: 1.05 }}
                              className="text-center"
                            >
                              <div className="w-20 h-20 mx-auto rounded-full bg-foreground/5 flex items-center justify-center mb-4">
                                <span className="text-3xl font-bold text-foreground/40">
                                  {brand.name.charAt(0)}
                                </span>
                              </div>
                              <span className="text-2xl font-bold text-foreground/60">
                                {brand.name}
                              </span>
                            </motion.div>
                          </div>
                        )}

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                        {/* Brand Name on Image */}
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <h3 className="text-2xl font-bold text-white">
                            {brand.name}
                          </h3>
                        </div>
                      </div>

                      {/* Brand Info */}
                      <div className="p-6">
                        <p className="text-muted-foreground mb-4 line-clamp-2">
                          {brand.tagline}
                        </p>
                        <div className="flex items-center text-foreground font-medium group-hover:text-foreground/80 transition-colors">
                          Explore Brand
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              {ctaTitle}
            </h2>
            <p className="text-muted-foreground mb-8">
              {ctaText}
            </p>
            <Link
              href="/branches"
              className="inline-flex items-center px-8 py-4 bg-foreground text-background rounded-full font-medium hover:bg-foreground/90 transition-colors"
            >
              {ctaButtonText}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
