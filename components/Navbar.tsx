"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/lookbook", label: "Lookbook" },
  { href: "/branches", label: "Branches" },
  { href: "/contact", label: "Contact" },
];

export interface NavBrand {
  href: string;
  label: string;
  tagline: string;
}

interface NavbarProps {
  brands?: NavBrand[];
}

export default function Navbar({ brands: brandsProp }: NavbarProps) {
  const brands = brandsProp || [];
  const [isOpen, setIsOpen] = useState(false);
  const [isBrandsOpen, setIsBrandsOpen] = useState(false);
  const [isMobileBrandsOpen, setIsMobileBrandsOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <motion.span
              whileHover={{ scale: 1.02 }}
              className="text-2xl font-bold tracking-tight text-foreground"
            >
              ALBERTO GROUP
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-foreground transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
            
            {/* Brands Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsBrandsOpen(true)}
              onMouseLeave={() => setIsBrandsOpen(false)}
            >
              <button className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 group">
                Brands
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isBrandsOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {isBrandsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[400px] bg-background/95 backdrop-blur-lg border border-border rounded-xl shadow-xl p-4"
                  >
                    <div className="grid grid-cols-2 gap-2">
                      {brands.map((brand, index) => (
                        <motion.div
                          key={brand.href}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.05 }}
                        >
                          <Link
                            href={brand.href}
                            className="block p-3 rounded-lg hover:bg-secondary transition-colors group"
                          >
                            <span className="font-semibold text-foreground group-hover:text-foreground">
                              {brand.label}
                            </span>
                            <span className="block text-xs text-muted-foreground mt-0.5">
                              {brand.tagline}
                            </span>
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                    <div className="mt-3 pt-3 border-t border-border">
                      <Link
                        href="/brands"
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        View All Brands →
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            {/* <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="rounded-full px-6">Shop Now</Button>
            </motion.div> */}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 space-y-4">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      className="block text-lg font-medium text-muted-foreground hover:text-foreground transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                
                {/* Mobile Brands Accordion */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.1 }}
                >
                  <button
                    onClick={() => setIsMobileBrandsOpen(!isMobileBrandsOpen)}
                    className="flex items-center justify-between w-full text-lg font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Brands
                    <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${isMobileBrandsOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  <AnimatePresence>
                    {isMobileBrandsOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-4 pt-2 space-y-2">
                          {brands.map((brand) => (
                            <Link
                              key={brand.href}
                              href={brand.href}
                              className="block py-2 text-muted-foreground hover:text-foreground transition-colors"
                              onClick={() => {
                                setIsOpen(false);
                                setIsMobileBrandsOpen(false);
                              }}
                            >
                              {brand.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
                
                {/* <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: (navLinks.length + 1) * 0.1 }}
                >
                  <Button className="w-full rounded-full mt-4">Shop Now</Button>
                </motion.div> */}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
