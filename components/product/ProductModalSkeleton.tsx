"use client";

import { motion } from "framer-motion";

export default function ProductModalSkeleton() {
  return (
    <div className="grid md:grid-cols-2 gap-0 animate-pulse">
      {/* Left Side - Image Skeleton */}
      <div className="p-6 md:p-8 bg-gray-50/50">
        <div className="aspect-square bg-gray-200 rounded-2xl" />
        <div className="flex gap-2 mt-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="w-16 h-16 bg-gray-200 rounded-lg" />
          ))}
        </div>
      </div>

      {/* Right Side - Content Skeleton */}
      <div className="p-6 md:p-8 space-y-6">
        {/* Brand & Category */}
        <div className="flex gap-2">
          <div className="h-6 w-20 bg-gray-200 rounded-full" />
          <div className="h-6 w-24 bg-gray-200 rounded" />
        </div>

        {/* Title */}
        <div className="space-y-2">
          <div className="h-8 w-3/4 bg-gray-200 rounded" />
          <div className="h-8 w-1/2 bg-gray-200 rounded" />
        </div>

        {/* Price */}
        <div className="h-10 w-32 bg-gray-200 rounded" />

        {/* Stock */}
        <div className="h-5 w-24 bg-gray-200 rounded" />

        <div className="h-px bg-gray-200" />

        {/* Description */}
        <div className="space-y-2">
          <div className="h-5 w-24 bg-gray-200 rounded" />
          <div className="h-4 w-full bg-gray-200 rounded" />
          <div className="h-4 w-full bg-gray-200 rounded" />
          <div className="h-4 w-3/4 bg-gray-200 rounded" />
        </div>

        <div className="h-px bg-gray-200" />

        {/* Size Selector */}
        <div className="space-y-3">
          <div className="h-5 w-12 bg-gray-200 rounded" />
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="w-12 h-11 bg-gray-200 rounded-xl" />
            ))}
          </div>
        </div>

        {/* Color Selector */}
        <div className="space-y-3">
          <div className="h-5 w-12 bg-gray-200 rounded" />
          <div className="flex gap-3">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-10 h-10 bg-gray-200 rounded-full" />
            ))}
          </div>
        </div>

        {/* Quantity */}
        <div className="space-y-3">
          <div className="h-5 w-16 bg-gray-200 rounded" />
          <div className="h-11 w-36 bg-gray-200 rounded-xl" />
        </div>

        <div className="h-px bg-gray-200" />

        {/* Buttons */}
        <div className="flex gap-3">
          <div className="flex-1 h-14 bg-gray-200 rounded-xl" />
          <div className="w-14 h-14 bg-gray-200 rounded-xl" />
          <div className="w-14 h-14 bg-gray-200 rounded-xl" />
        </div>
      </div>
    </div>
  );
}
