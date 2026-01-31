"use client";

import { motion } from "framer-motion";
import { MapPin, ExternalLink } from "lucide-react";
import type { Branch } from "@/lib/types/branch";

interface BranchCardProps {
  branch: Branch;
  isSelected: boolean;
  onClick: () => void;
  index: number;
}



export default function BranchCard({
  branch,
  isSelected,
  onClick,
  index,
}: BranchCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: Math.min(index * 0.03, 0.3) }}
      whileHover={{ x: 4 }}
      whileTap={{ scale: 0.98 }}
    >
      <div
        onClick={onClick}
        className={`
          group relative cursor-pointer rounded-xl p-4 transition-all duration-300
          ${isSelected 
            ? "bg-gray-50 border-2 border-gray-900 shadow-lg" 
            : "bg-white hover:bg-gray-50 border border-gray-100 hover:border-gray-200 hover:shadow-md"
          }
        `}
      >
        {/* Selection indicator */}
        {isSelected && (
          <motion.div
            layoutId="selectedIndicator"
            className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-12 bg-gray-900 rounded-r-full"
          />
        )}

        <div className="flex gap-3">
          {/* Lessor Icon */}
          <div className={`
            flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold
            ${isSelected ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-600 group-hover:bg-gray-200"}
            transition-all
          `}>
            {branch.lessor.slice(0, 2).toUpperCase()}
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            {/* Mall Name */}
            <h3 className={`
              font-bold text-[15px] leading-tight mb-1.5 truncate
              ${isSelected ? "text-gray-900" : "text-gray-900"}
            `}>
              {branch.mallName}
            </h3>

            {/* Location */}
            <div className="flex items-center gap-1.5 text-sm text-gray-500 mb-2">
              <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
              <span className="truncate">{branch.city}, {branch.province}</span>
            </div>

            {/* Brand Tags */}
            <div className="flex flex-wrap gap-1.5">
              {branch.brands.slice(0, 3).map((brand) => (
                <span
                  key={brand}
                  className="inline-flex items-center px-2 py-0.5 rounded-md text-[11px] font-semibold bg-gray-100 text-gray-700"
                >
                  {brand}
                </span>
              ))}
              {branch.brands.length > 3 && (
                <span className="inline-flex items-center px-2 py-0.5 rounded-md text-[11px] font-semibold bg-gray-100 text-gray-600">
                  +{branch.brands.length - 3}
                </span>
              )}
            </div>
          </div>

          {/* Arrow indicator on hover */}
          <div className={`
            flex-shrink-0 self-center opacity-0 group-hover:opacity-100 transition-opacity
            ${isSelected ? "opacity-100" : ""}
          `}>
            <ExternalLink className={`w-4 h-4 ${isSelected ? "text-gray-900" : "text-gray-400"}`} />
          </div>
        </div>

        {/* Lessor Badge */}
        <div className="absolute top-3 right-3">
          <span className={`
            inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium uppercase tracking-wider
            ${isSelected ? "bg-gray-200 text-gray-800" : "bg-gray-100 text-gray-500"}
          `}>
            {branch.lessor}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
