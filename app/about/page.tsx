"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Heart, Award, Users, Sparkles } from "lucide-react";

const values = [
  {
    icon: Award,
    title: "Quality First",
    description: "Every product undergoes rigorous quality checks to ensure you receive only the finest footwear and accessories.",
  },
  {
    icon: Users,
    title: "Customer-Centric",
    description: "Our customers are at the heart of everything we do. Your satisfaction is our ultimate measure of success.",
  },
  {
    icon: Sparkles,
    title: "Innovation",
    description: "We continuously evolve our designs and processes to bring you the latest trends and technologies.",
  },
  {
    icon: Heart,
    title: "Integrity",
    description: "Honest dealings and transparent business practices form the foundation of our relationships.",
  },
];

const milestones = [
  { year: "1980", event: "Alberto Shoes Corporation founded in Manila" },
  { year: "1990", event: "Expanded to 10 branches across Metro Manila" },
  { year: "2000", event: "Reached 30 branches nationwide" },
  { year: "2010", event: "Launched premium bags collection" },
  { year: "2020", event: "Celebrated 40 years with 70+ branches" },
  { year: "2024", event: "80 branches serving Filipinos nationwide" },
];

export default function AboutPage() {
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
              Our Story
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Crafting Quality Footwear
              <br />
              <span className="text-muted-foreground">For Over 40 Years</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mt-6 max-w-2xl mx-auto leading-relaxed">
              Alberto Shoes Corporation has been the Philippines' trusted partner in 
              style and comfort, bringing premium footwear and bags to Filipino families 
              since 1980.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
                From Humble Beginnings
                <br />
                <span className="text-muted-foreground">To Nationwide Success</span>
              </h2>
              <div className="space-y-6 mt-8 text-muted-foreground leading-relaxed">
                <p>
                  Alberto Shoes Corporation began as a small footwear shop in Manila with 
                  a simple vision: to provide quality shoes that every Filipino could afford. 
                  Founded in 1980, we started with just a handful of employees and a 
                  commitment to excellence.
                </p>
                <p>
                  Over the decades, our dedication to quality craftsmanship and customer 
                  satisfaction has allowed us to grow from that single store to a network 
                  of 80 branches spanning the entire Philippine archipelago — from the 
                  bustling malls of Metro Manila to the vibrant cities of Visayas and Mindanao.
                </p>
                <p>
                  Today, Alberto Shoes is more than just a footwear retailer. We're a 
                  fashion destination that offers a complete range of products including 
                  dress sandals, trendy wedges, fashionable pumps, stylish bags, formal 
                  shoes, and comfortable loafers — all designed to help every Filipino 
                  step into style with confidence.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-secondary to-muted overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-background flex items-center justify-center shadow-lg">
                      <span className="text-3xl font-bold text-foreground">40+</span>
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">Years of Excellence</h3>
                    <p className="text-muted-foreground mt-2">Serving Filipino Families</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="border-0 shadow-lg h-full bg-card">
                <CardContent className="p-10">
                  <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center mb-6">
                    <Target className="w-7 h-7 text-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To provide every Filipino with access to quality, stylish, and 
                    affordable footwear and accessories that enhance their confidence 
                    and complement their lifestyle. We are committed to exceptional 
                    customer service and maintaining the highest standards of product 
                    quality across all our 80 branches nationwide.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="border-0 shadow-lg h-full bg-card">
                <CardContent className="p-10">
                  <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center mb-6">
                    <Eye className="w-7 h-7 text-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To be the Philippines' most trusted and beloved footwear and 
                    accessories brand, recognized for our unwavering commitment to 
                    quality, innovation, and customer satisfaction. We envision Alberto 
                    Shoes as a household name synonymous with style, comfort, and 
                    exceptional value for every generation of Filipino consumers.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
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
              What We Stand For
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4">
              Our Core Values
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              The principles that guide every decision we make and every product we create
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow duration-300 h-full bg-card">
                  <CardContent className="p-8 text-center">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-14 h-14 mx-auto rounded-2xl bg-secondary flex items-center justify-center mb-6"
                    >
                      <value.icon className="w-7 h-7 text-foreground" />
                    </motion.div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">
                      {value.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
              Our Journey
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4">
              Milestones Through The Years
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex gap-6 mb-8 last:mb-0"
              >
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-foreground text-background flex items-center justify-center font-bold text-sm">
                    {milestone.year}
                  </div>
                  {index !== milestones.length - 1 && (
                    <div className="w-0.5 h-full bg-border mt-2" />
                  )}
                </div>
                <Card className="flex-1 border-0 shadow-sm bg-card">
                  <CardContent className="p-6">
                    <p className="text-foreground font-medium">{milestone.event}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-24 bg-foreground text-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Our Commitment to You
            </h2>
            <p className="text-lg text-background/70 mt-6 leading-relaxed">
              At Alberto Shoes, we don't just sell footwear — we build relationships. 
              Every pair of shoes, every bag, every product that bears our name represents 
              our promise to you: quality you can trust, style you'll love, and value 
              that respects your hard-earned money.
            </p>
            <p className="text-lg text-background/70 mt-4 leading-relaxed">
              With 80 branches across the Philippines, we're always here for you. 
              Whether you need help finding the perfect fit, have questions about care 
              and maintenance, or simply want style advice — our team is ready to serve 
              with a smile.
            </p>
            <div className="mt-10 flex justify-center">
              <div className="inline-flex items-center space-x-8 text-background/80">
                <div className="text-center">
                  <div className="text-4xl font-bold text-background">80+</div>
                  <div className="text-sm">Branches</div>
                </div>
                <div className="w-px h-12 bg-background/30" />
                <div className="text-center">
                  <div className="text-4xl font-bold text-background">40+</div>
                  <div className="text-sm">Years</div>
                </div>
                <div className="w-px h-12 bg-background/30" />
                <div className="text-center">
                  <div className="text-4xl font-bold text-background">1M+</div>
                  <div className="text-sm">Customers</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
