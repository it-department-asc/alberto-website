"use client";

import { motion } from "framer-motion";

interface BrandAboutProps {
  name: string;
  about?: string | null;
  story?: string | null;
}

export default function BrandAbout({ name, about, story }: BrandAboutProps) {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* About */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
              About
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-8">
              The {name} Story
            </h2>
            <div className="space-y-4">
              {(about || '').split('\n\n').filter(Boolean).map((paragraph, index) => (
                <p key={index} className="text-lg text-muted-foreground leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>

          {/* Origin Story */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:pt-20"
          >
            <div className="bg-secondary rounded-2xl p-8 md:p-10">
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                Origin
              </span>
              <h3 className="text-2xl font-bold text-foreground mt-3 mb-6">
                How It All Began
              </h3>
              <div className="space-y-4">
                {(story || '').split('\n\n').filter(Boolean).map((paragraph, index) => (
                  <p key={index} className="text-muted-foreground leading-relaxed">
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
