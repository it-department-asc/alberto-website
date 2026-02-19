"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface CampaignSectionProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  imagePosition: "left" | "right";
  ctaText?: string;
  ctaLink?: string;
}

export default function CampaignSection({
  title,
  subtitle,
  description,
  image,
  imagePosition,
  ctaText = "Learn More",
  ctaLink = "/about",
}: CampaignSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.3], ["30px", "0px"]);

  return (
    <section ref={sectionRef} className="py-24 md:py-32 lg:py-40 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div
          className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
            imagePosition === "right" ? "lg:grid-flow-dense" : ""
          }`}
        >
          {/* Image Side */}
          <motion.div
            style={{ y: imageY }}
            className={`relative ${imagePosition === "right" ? "lg:col-start-2" : ""}`}
          >
            <div className="aspect-[4/5] relative overflow-hidden rounded-2xl bg-neutral-100">
              {/* Image */}
              <div
                className="absolute inset-0 bg-neutral-200"
                style={{
                  backgroundImage: `url('${image}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              
              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
            </div>

            {/* Decorative element */}
            <div
              className={`absolute -z-10 w-full h-full rounded-2xl bg-neutral-100 top-6 ${
                imagePosition === "left" ? "-right-6" : "-left-6"
              }`}
            />
          </motion.div>

          {/* Content Side */}
          <motion.div
            style={{ opacity: contentOpacity, y: contentY }}
            className={`space-y-8 ${imagePosition === "right" ? "lg:col-start-1" : ""}`}
          >
            {/* Subtitle */}
            <div className="space-y-4">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-xs tracking-[0.3em] uppercase text-neutral-500"
              >
                {subtitle}
              </motion.span>
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-16 h-px bg-neutral-300 origin-left"
              />
            </div>

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-light text-neutral-900 leading-tight"
            >
              {title}
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-neutral-600 font-light leading-relaxed max-w-lg"
            >
              {description}
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Link href={ctaLink}>
                <motion.span
                  whileHover={{ x: 5 }}
                  className="inline-flex items-center gap-3 text-sm tracking-widest uppercase text-neutral-900 group cursor-pointer"
                >
                  {ctaText}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
