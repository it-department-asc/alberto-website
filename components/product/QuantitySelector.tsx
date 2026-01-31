"use client";

import { motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

interface QuantitySelectorProps {
  quantity: number;
  onQuantityChange: (quantity: number) => void;
  min?: number;
  max?: number;
  disabled?: boolean;
}

export default function QuantitySelector({
  quantity,
  onQuantityChange,
  min = 1,
  max = 99,
  disabled = false,
}: QuantitySelectorProps) {
  const handleDecrease = () => {
    if (quantity > min) {
      onQuantityChange(quantity - 1);
    }
  };

  const handleIncrease = () => {
    if (quantity < max) {
      onQuantityChange(quantity + 1);
    }
  };

  return (
    <div className="space-y-3">
      <label className="text-sm font-semibold text-gray-900">
        Quantity
      </label>
      <div className="flex items-center gap-3">
        <div className={cn(
          "flex items-center bg-gray-100 rounded-xl overflow-hidden",
          disabled && "opacity-50"
        )}>
          <motion.button
            whileHover={{ scale: disabled || quantity <= min ? 1 : 1.1 }}
            whileTap={{ scale: disabled || quantity <= min ? 1 : 0.9 }}
            onClick={handleDecrease}
            disabled={disabled || quantity <= min}
            className={cn(
              "w-11 h-11 flex items-center justify-center transition-colors",
              quantity <= min
                ? "text-gray-300 cursor-not-allowed"
                : "text-gray-700 hover:bg-gray-200"
            )}
            aria-label="Decrease quantity"
          >
            <Minus className="w-4 h-4" />
          </motion.button>
          
          <span className="w-14 text-center font-semibold text-gray-900 text-lg">
            {quantity}
          </span>
          
          <motion.button
            whileHover={{ scale: disabled || quantity >= max ? 1 : 1.1 }}
            whileTap={{ scale: disabled || quantity >= max ? 1 : 0.9 }}
            onClick={handleIncrease}
            disabled={disabled || quantity >= max}
            className={cn(
              "w-11 h-11 flex items-center justify-center transition-colors",
              quantity >= max
                ? "text-gray-300 cursor-not-allowed"
                : "text-gray-700 hover:bg-gray-200"
            )}
            aria-label="Increase quantity"
          >
            <Plus className="w-4 h-4" />
          </motion.button>
        </div>
        
        {quantity >= max && (
          <span className="text-xs text-amber-600 font-medium">
            Max quantity reached
          </span>
        )}
      </div>
    </div>
  );
}
