"use client";

import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Search, X, SlidersHorizontal, Building, Globe, Tag } from "lucide-react";
import type { Brand, BranchFilters } from "@/lib/types/branch";
import { BRANDS, REGIONS, LESSORS } from "@/lib/types/branch";

interface BranchFiltersProps {
  filters: BranchFilters;
  onFilterChange: (filters: BranchFilters) => void;
  totalResults: number;
}



export default function BranchFiltersComponent({
  filters,
  onFilterChange,
  totalResults,
}: BranchFiltersProps) {
  const handleSearchChange = (value: string) => {
    onFilterChange({ ...filters, search: value });
  };

  const handleBrandChange = (value: string) => {
    onFilterChange({ ...filters, brand: value as Brand | "ALL" });
  };

  const handleLessorChange = (value: string) => {
    onFilterChange({ ...filters, lessor: value });
  };

  const handleRegionChange = (value: string) => {
    onFilterChange({ ...filters, region: value });
  };

  const clearFilters = () => {
    onFilterChange({
      search: "",
      brand: "ALL",
      lessor: "ALL",
      region: "ALL",
    });
  };

  const hasActiveFilters =
    filters.search ||
    filters.brand !== "ALL" ||
    filters.lessor !== "ALL" ||
    filters.region !== "ALL";

  const activeFilterCount = [
    filters.search,
    filters.brand !== "ALL",
    filters.lessor !== "ALL",
    filters.region !== "ALL",
  ].filter(Boolean).length;

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white rounded-2xl shadow-lg shadow-gray-200/50 border border-gray-100 overflow-hidden mb-6"
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 px-5 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/10 backdrop-blur rounded-xl flex items-center justify-center">
              <SlidersHorizontal className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-white text-lg">Find a Store</h3>
              <p className="text-gray-300 text-sm">Search from {totalResults} locations</p>
            </div>
          </div>
          {hasActiveFilters && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="bg-white text-gray-900 px-3 py-1 rounded-full text-sm font-bold"
            >
              {activeFilterCount} active
            </motion.div>
          )}
        </div>
      </div>

      {/* Filters */}
      <div className="p-5 space-y-4">
        {/* Search Input */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <Input
            type="text"
            placeholder="Search by mall name or city..."
            value={filters.search}
            onChange={(e) => handleSearchChange(e.target.value)}
            className="pl-12 pr-4 h-12 bg-gray-50 border-gray-200 rounded-xl text-base focus:bg-white focus:ring-2 focus:ring-gray-900/20 focus:border-gray-900 transition-all"
          />
          {filters.search && (
            <button
              onClick={() => handleSearchChange("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center transition-colors"
            >
              <X className="w-3.5 h-3.5 text-gray-600" />
            </button>
          )}
        </div>

        {/* Filter Dropdowns */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {/* Brand Filter */}
          <div className="space-y-1.5">
            <label className="flex items-center gap-1.5 text-xs font-semibold text-gray-500 uppercase tracking-wide px-1">
              <Tag className="w-3.5 h-3.5" />
              Brand
            </label>
            <Select value={filters.brand} onValueChange={handleBrandChange}>
              <SelectTrigger className="h-11 bg-gray-50 border-gray-200 rounded-xl hover:bg-gray-100 transition-colors">
                <SelectValue placeholder="All Brands" />
              </SelectTrigger>
              <SelectContent className="rounded-xl">
                <SelectItem value="ALL" className="rounded-lg">All Brands</SelectItem>
                {BRANDS.map((brand) => (
                  <SelectItem key={brand} value={brand} className="rounded-lg">
                    {brand}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Lessor Filter */}
          <div className="space-y-1.5">
            <label className="flex items-center gap-1.5 text-xs font-semibold text-gray-500 uppercase tracking-wide px-1">
              <Building className="w-3.5 h-3.5" />
              Lessor
            </label>
            <Select value={filters.lessor} onValueChange={handleLessorChange}>
              <SelectTrigger className="h-11 bg-gray-50 border-gray-200 rounded-xl hover:bg-gray-100 transition-colors">
                <SelectValue placeholder="All Lessors" />
              </SelectTrigger>
              <SelectContent className="rounded-xl">
                <SelectItem value="ALL" className="rounded-lg">All Lessors</SelectItem>
                {LESSORS.map((lessor) => (
                  <SelectItem key={lessor} value={lessor} className="rounded-lg">
                    {lessor}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Region Filter */}
          <div className="space-y-1.5">
            <label className="flex items-center gap-1.5 text-xs font-semibold text-gray-500 uppercase tracking-wide px-1">
              <Globe className="w-3.5 h-3.5" />
              Region
            </label>
            <Select value={filters.region} onValueChange={handleRegionChange}>
              <SelectTrigger className="h-11 bg-gray-50 border-gray-200 rounded-xl hover:bg-gray-100 transition-colors">
                <SelectValue placeholder="All Regions" />
              </SelectTrigger>
              <SelectContent className="rounded-xl max-h-[280px]">
                <SelectItem value="ALL" className="rounded-lg">All Regions</SelectItem>
                {REGIONS.map((region) => (
                  <SelectItem key={region} value={region} className="rounded-lg">
                    {region}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Clear Filters Button */}
        {hasActiveFilters && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="pt-2"
          >
            <Button
              variant="outline"
              size="sm"
              onClick={clearFilters}
              className="w-full h-10 rounded-xl border-2 border-dashed border-gray-300 text-gray-600 hover:text-gray-900 hover:border-gray-400 hover:bg-gray-50 transition-all"
            >
              <X className="w-4 h-4 mr-2" />
              Clear all filters
            </Button>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
