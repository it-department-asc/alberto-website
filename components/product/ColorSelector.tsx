"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ProductColor } from "@/lib/types/product";

interface ColorSelectorProps {
  colors: ProductColor[];
  selectedColor: ProductColor | null;
  onSelect: (color: ProductColor) => void;
  disabled?: boolean;
}

export default function ColorSelector({
  colors,
  selectedColor,
  onSelect,
  disabled = false,
}: ColorSelectorProps) {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <label className="text-sm font-semibold text-gray-900">
          Color
        </label>
        {selectedColor && (
          <span className="text-sm text-gray-500">
            Selected: <span className="font-medium text-gray-900">{selectedColor.name}</span>
          </span>
        )}
      </div>
      <div className="flex flex-wrap gap-3">
        {colors.map((color) => {
          const isSelected = selectedColor?.hex === color.hex;
          const isLight = isLightColor(color.hex);
          
          return (
            <motion.button
              key={color.hex}
              whileHover={{ scale: disabled ? 1 : 1.1 }}
              whileTap={{ scale: disabled ? 1 : 0.9 }}
              onClick={() => !disabled && onSelect(color)}
              disabled={disabled}
              className={cn(
                "relative w-10 h-10 rounded-full transition-all duration-200",
                isSelected
                  ? "ring-2 ring-offset-2 ring-gray-900"
                  : "hover:ring-2 hover:ring-offset-2 hover:ring-gray-300",
                disabled && "opacity-50 cursor-not-allowed"
              )}
              style={{ backgroundColor: color.hex }}
              aria-pressed={isSelected}
              aria-label={`Select color ${color.name}`}
              title={color.name}
            >
              {isSelected && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <Check
                    className={cn(
                      "w-5 h-5",
                      isLight ? "text-gray-900" : "text-white"
                    )}
                    strokeWidth={3}
                  />
                </motion.span>
              )}
              {/* Border for light colors */}
              {isLight && (
                <span className="absolute inset-0 rounded-full border border-gray-200" />
              )}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}

// Helper function to determine if a color is light
function isLightColor(hex: string): boolean {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.7;
}
