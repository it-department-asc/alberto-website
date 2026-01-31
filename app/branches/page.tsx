"use client";

import { motion } from "framer-motion";
import BranchList from "@/components/BranchList";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Clock, Store } from "lucide-react";

const stats = [
  { icon: Store, value: "80+", label: "Branches Nationwide" },
  { icon: MapPin, value: "5", label: "Major Regions" },
  { icon: Clock, value: "40+", label: "Years of Service" },
];

export default function BranchesPage() {
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
              Find Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Visit Our
              <br />
              <span className="text-muted-foreground">80 Branches Nationwide</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mt-6 max-w-2xl mx-auto leading-relaxed">
              From Metro Manila to Mindanao, Alberto Shoes is never far away. 
              Find a store near you and experience our quality products and 
              exceptional service firsthand.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow duration-300 bg-card">
                  <CardContent className="p-8 text-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-14 h-14 mx-auto rounded-2xl bg-secondary flex items-center justify-center mb-4"
                    >
                      <stat.icon className="w-7 h-7 text-foreground" />
                    </motion.div>
                    <div className="text-3xl font-bold text-foreground mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Placeholder Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Nationwide Coverage
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Our branches span across the Philippine archipelago, ensuring that 
              quality footwear is always within reach.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="aspect-[16/9] rounded-3xl bg-card shadow-lg overflow-hidden">
              <div className="w-full h-full flex items-center justify-center p-8">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto rounded-full bg-secondary flex items-center justify-center mb-6">
                    <MapPin className="w-12 h-12 text-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Philippines Map
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    80 Store Locations Across All Major Islands
                  </p>
                  
                  {/* Visual representation of regions */}
                  <div className="flex flex-wrap justify-center gap-4 mt-8">
                    {[
                      { name: "Metro Manila", count: 20 },
                      { name: "North Luzon", count: 12 },
                      { name: "South Luzon", count: 18 },
                      { name: "Visayas", count: 15 },
                      { name: "Mindanao", count: 15 },
                    ].map((region, index) => (
                      <motion.div
                        key={region.name}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="px-4 py-3 rounded-xl bg-secondary"
                      >
                        <div className="text-lg font-bold text-foreground">{region.count}+</div>
                        <div className="text-xs text-muted-foreground">{region.name}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Branch List Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Branch Directory
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Click on a region to view all branches in that area
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <BranchList />
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-24 bg-foreground text-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              Can't Find a Branch Near You?
            </h2>
            <p className="text-background/70 mt-6 text-lg">
              Contact our customer service team for assistance in locating the 
              nearest Alberto Shoes branch or for any other inquiries.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mt-12 max-w-2xl mx-auto">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-2xl bg-background/10"
              >
                <Phone className="w-8 h-8 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Call Us</h3>
                <p className="text-background/70">+63 (2) 8123 4567</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-2xl bg-background/10"
              >
                <Clock className="w-8 h-8 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Store Hours</h3>
                <p className="text-background/70">10:00 AM - 9:00 PM Daily</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
