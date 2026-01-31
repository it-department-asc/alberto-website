"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SizeSelectorProps {
  sizes: string[];
  selectedSize: string | null;
  onSelect: (size: string) => void;
  disabled?: boolean;
}

export default function SizeSelector({
  sizes,
  selectedSize,
  onSelect,
  disabled = false,
}: SizeSelectorProps) {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <label className="text-sm font-semibold text-gray-900">
          Size
        </label>
        {selectedSize && (
          <span className="text-sm text-gray-500">
            Selected: <span className="font-medium text-gray-900">{selectedSize}</span>
          </span>
        )}
      </div>
      <div className="flex flex-wrap gap-2">
        {sizes.map((size) => (
          <motion.button
            key={size}
            whileHover={{ scale: disabled ? 1 : 1.05 }}
            whileTap={{ scale: disabled ? 1 : 0.95 }}
            onClick={() => !disabled && onSelect(size)}
            disabled={disabled}
            className={cn(
              "min-w-[48px] h-11 px-4 rounded-xl text-sm font-medium transition-all duration-200",
              selectedSize === size
                ? "bg-gray-900 text-white shadow-lg shadow-gray-900/25"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200",
              disabled && "opacity-50 cursor-not-allowed"
            )}
            aria-pressed={selectedSize === size}
            aria-label={`Select size ${size}`}
          >
            {size}
          </motion.button>
        ))}
      </div>
    </div>
  );
}
