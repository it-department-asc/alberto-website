"use client";

import { motion } from "framer-motion";

interface BrandLifestyleProps {
  description?: string | null;
  image?: string;
  brandName: string;
}

export default function BrandLifestyle({ description, image, brandName }: BrandLifestyleProps) {
  return (
    <section className="py-24 bg-secondary overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-br from-muted to-background">
              {image ? (
                <div 
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${image})` }}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-foreground/5 flex items-center justify-center">
                      <span className="text-3xl font-bold text-foreground/40">
                        {brandName.charAt(0)}
                      </span>
                    </div>
                    <p className="text-muted-foreground">Lifestyle Image</p>
                  </div>
                </div>
              )}
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-foreground/5 blur-2xl" />
            <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-foreground/5 blur-xl" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
              Lifestyle
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-8">
              The {brandName} Experience
            </h2>
            <div className="space-y-6">
              {(description || '').split('\n\n').filter(Boolean).map((paragraph, index) => (
                <p key={index} className="text-lg text-muted-foreground leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
