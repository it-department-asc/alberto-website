"use client";

import { useState, useMemo, useCallback } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Store, Building2, Users, ChevronUp, Phone, Clock } from "lucide-react";
import { BranchCard, BranchFilters, BranchDetailModal } from "@/components/branch-locator";
import type { Branch, BranchFilters as BranchFiltersType } from "@/lib/types/branch";

// Dynamically import the map component to avoid SSR issues with Leaflet
const BranchMap = dynamic(
  () => import("@/components/branch-locator/BranchMap"),
  {
    ssr: false,
    loading: () => (
      <div className="h-full w-full rounded-xl bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin w-8 h-8 border-4 border-amber-500 border-t-transparent rounded-full mx-auto mb-3"></div>
          <p className="text-sm text-muted-foreground">Loading map...</p>
        </div>
      </div>
    ),
  }
);

interface BranchesClientProps {
  branches: Branch[];
  heroLabel?: string;
  heroTitle?: string;
  heroTitleMuted?: string;
  heroDescription?: string;
  ctaTitle?: string;
  ctaText?: string;
  phone?: string;
  storeHours?: string;
  storeHoursNote?: string;
}

export default function BranchesClient({
  branches: branchData,
  heroLabel,
  heroTitle,
  heroTitleMuted,
  heroDescription,
  ctaTitle,
  ctaText,
  phone,
  storeHours,
  storeHoursNote,
}: BranchesClientProps) {
  const stats = [
    {
      icon: Store,
      value: branchData.length.toString(),
      label: "Total Stores",
      color: "text-amber-600",
      bg: "bg-amber-50",
    },
    {
      icon: MapPin,
      value: [...new Set(branchData.map((b) => b.region))].length.toString(),
      label: "Regions Covered",
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
    {
      icon: Building2,
      value: [...new Set(branchData.map((b) => b.lessor))].length.toString(),
      label: "Mall Partners",
      color: "text-purple-600",
      bg: "bg-purple-50",
    },
    {
      icon: Users,
      value: [...new Set(branchData.flatMap((b) => b.brands))].length.toString(),
      label: "Brands Available",
      color: "text-emerald-600",
      bg: "bg-emerald-50",
    },
  ];

  const [filters, setFilters] = useState<BranchFiltersType>({
    search: "",
    brand: "ALL",
    lessor: "ALL",
    region: "ALL",
  });

  const [selectedBranch, setSelectedBranch] = useState<Branch | null>(null);
  const [detailBranch, setDetailBranch] = useState<Branch | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Filter branches based on current filters
  const filteredBranches = useMemo(() => {
    let result = [...branchData];

    // Search filter
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      result = result.filter(
        (branch) =>
          branch.mallName.toLowerCase().includes(searchLower) ||
          branch.city.toLowerCase().includes(searchLower) ||
          branch.province.toLowerCase().includes(searchLower) ||
          branch.branchCode.toLowerCase().includes(searchLower) ||
          branch.storeId.toLowerCase().includes(searchLower)
      );
    }

    // Brand filter
    if (filters.brand !== "ALL") {
      result = result.filter((branch) => branch.brands.includes(filters.brand as any));
    }

    // Lessor filter
    if (filters.lessor !== "ALL") {
      result = result.filter((branch) => branch.lessor === filters.lessor);
    }

    // Region filter
    if (filters.region !== "ALL") {
      result = result.filter((branch) => branch.region === filters.region);
    }

    return result;
  }, [filters, branchData]);

  const handleSelectBranch = useCallback((branch: Branch) => {
    setSelectedBranch(branch);
  }, []);

  const handleViewDetails = useCallback((branch: Branch) => {
    setDetailBranch(branch);
    setIsModalOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
    setDetailBranch(null);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-b from-background to-secondary/30">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-background via-secondary to-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-2 bg-secondary rounded-full text-sm font-medium text-muted-foreground mb-6">
              {heroLabel}
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              {heroTitle}
              <br />
              <span className="text-muted-foreground">{heroTitleMuted}</span>
            </h1>
            <p className="text-base md:text-xl text-muted-foreground mt-6 max-w-2xl mx-auto leading-relaxed">
              {heroDescription}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 md:py-12 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="border-0 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <CardContent className="p-4 md:p-6 text-center">
                    <div
                      className={`w-10 h-10 md:w-12 md:h-12 mx-auto rounded-xl ${stat.bg} flex items-center justify-center mb-2 md:mb-3`}
                    >
                      <stat.icon className={`w-5 h-5 md:w-6 md:h-6 ${stat.color}`} />
                    </div>
                    <div className="text-2xl md:text-3xl font-bold text-foreground">
                      {stat.value}
                    </div>
                    <div className="text-xs md:text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4 md:px-6">
          {/* Filters */}
          <BranchFilters
            filters={filters}
            onFilterChange={setFilters}
            totalResults={filteredBranches.length}
          />

          {/* Branch List + Map Layout */}
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Branch List */}
            <div className="order-2 lg:order-1">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-foreground">
                    Store Directory
                  </h3>
                  <span className="text-sm text-muted-foreground">
                    Showing {filteredBranches.length} stores
                  </span>
                </div>

                {filteredBranches.length === 0 ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-12"
                  >
                    <Store className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                    <h4 className="text-lg font-medium text-foreground mb-2">
                      No stores found
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Try adjusting your filters to find more stores.
                    </p>
                  </motion.div>
                ) : (
                  <div className="grid gap-3 max-h-[600px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                    {filteredBranches.map((branch, index) => (
                      <BranchCard
                        key={branch.storeId}
                        branch={branch}
                        isSelected={selectedBranch?.storeId === branch.storeId}
                        onClick={() => {
                          handleSelectBranch(branch);
                          handleViewDetails(branch);
                        }}
                        index={index}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Map */}
            <div className="order-1 lg:order-2">
              <div className="h-[400px] lg:h-[650px] sticky top-24">
                <BranchMap
                  branches={filteredBranches}
                  selectedBranch={selectedBranch}
                  onSelectBranch={handleSelectBranch}
                  onViewDetails={handleViewDetails}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 bg-foreground text-background">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold">
              {ctaTitle}
            </h2>
            <p className="text-background/70 mt-4 text-base md:text-lg">
              {ctaText}
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mt-8 max-w-xl mx-auto">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-5 rounded-2xl bg-background/10"
              >
                <Phone className="w-6 h-6 mx-auto mb-3" />
                <h3 className="font-semibold mb-1">Call Us</h3>
                <p className="text-background/70 text-sm">{phone}</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-5 rounded-2xl bg-background/10"
              >
                <Clock className="w-6 h-6 mx-auto mb-3" />
                <h3 className="font-semibold mb-1">Store Hours</h3>
                <p className="text-background/70 text-sm">{storeHours} {storeHoursNote}</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Detail Modal */}
      <BranchDetailModal
        branch={detailBranch}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />

      {/* Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: showScrollTop ? 1 : 0,
          scale: showScrollTop ? 1 : 0,
        }}
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-12 h-12 bg-foreground text-background rounded-full shadow-lg flex items-center justify-center hover:bg-foreground/90 transition-colors z-50"
      >
        <ChevronUp className="w-6 h-6" />
      </motion.button>
    </div>
  );
}
