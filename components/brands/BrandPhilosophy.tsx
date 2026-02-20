"use client";

import { motion } from "framer-motion";

interface BrandPhilosophyProps {
  philosophy?: string | null;
  brandName: string;
}

export default function BrandPhilosophy({ philosophy, brandName }: BrandPhilosophyProps) {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
              Philosophy
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4">
              The {brandName} Identity
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Decorative quote marks */}
            <div className="absolute -top-8 -left-4 text-8xl text-muted-foreground/10 font-serif">
              "
            </div>
            <div className="absolute -bottom-16 -right-4 text-8xl text-muted-foreground/10 font-serif">
              "
            </div>

            <div className="bg-gradient-to-br from-secondary to-muted rounded-3xl p-10 md:p-16">
              <div className="space-y-6">
                {(philosophy || '').split('\n\n').filter(Boolean).map((paragraph, index) => (
                  <p 
                    key={index} 
                    className="text-xl md:text-2xl text-foreground/90 leading-relaxed font-light"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
