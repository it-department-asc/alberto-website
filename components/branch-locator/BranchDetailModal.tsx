"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  Building2,
  Tag,
  Hash,
  Globe,
  Navigation,
  Store,
  X,
} from "lucide-react";
import type { Branch, Brand } from "@/lib/types/branch";

interface BranchDetailModalProps {
  branch: Branch | null;
  isOpen: boolean;
  onClose: () => void;
}

const brandColors: Record<Brand, string> = {
  ALBERTO: "bg-gray-100 text-gray-800",
  "G&G": "bg-emerald-100 text-emerald-800",
  KYO: "bg-blue-100 text-blue-800",
  GEOX: "bg-purple-100 text-purple-800",
  PICCADILLY: "bg-rose-100 text-rose-800",
};



export default function BranchDetailModal({
  branch,
  isOpen,
  onClose,
}: BranchDetailModalProps) {
  if (!branch) return null;

  const getDirectionsUrl = () => {
    if (branch.coordinates) {
      return `https://www.google.com/maps/dir/?api=1&destination=${branch.coordinates.lat},${branch.coordinates.lng}`;
    }
    const query = encodeURIComponent(
      `${branch.mallName}, ${branch.city}, ${branch.province}, Philippines`
    );
    return `https://www.google.com/maps/search/?api=1&query=${query}`;
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          <DialogHeader>
            <DialogTitle className="flex items-start gap-3 pr-8">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                <Store className="w-5 h-5 text-foreground" />
              </div>
              <div>
                <span className="text-lg">{branch.mallName}</span>
                <p className="text-sm font-normal text-muted-foreground mt-0.5">
                  {branch.branchType} Store
                </p>
              </div>
            </DialogTitle>
          </DialogHeader>

          <div className="mt-6 space-y-4">
            {/* Location */}
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-4 h-4 text-gray-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">Location</p>
                <p className="text-sm text-muted-foreground">
                  {branch.city}, {branch.province}
                </p>
                <p className="text-xs text-muted-foreground">{branch.region}</p>
              </div>
            </div>

            {/* Lessor */}
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
                <Building2 className="w-4 h-4 text-gray-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">Lessor</p>
                <p className="text-sm text-muted-foreground">
                  {branch.lessor}
                </p>
              </div>
            </div>

            {/* Store Details */}
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
                <Hash className="w-4 h-4 text-gray-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">
                  Store Details
                </p>
                <div className="flex gap-4 text-sm text-muted-foreground">
                  <span>ID: {branch.storeId}</span>
                  <span>Code: {branch.branchCode}</span>
                </div>
              </div>
            </div>

            {/* Available Brands */}
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
                <Tag className="w-4 h-4 text-gray-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground mb-2">
                  Available Brands
                </p>
                <div className="flex flex-wrap gap-2">
                  {branch.brands.map((brand) => (
                    <Badge
                      key={brand}
                      className={`${brandColors[brand]} font-medium`}
                    >
                      {brand}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Coordinates */}
            {branch.coordinates && (
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
                  <Globe className="w-4 h-4 text-gray-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">
                    Coordinates
                  </p>
                  <p className="text-xs text-muted-foreground font-mono">
                    {branch.coordinates.lat.toFixed(4)},{" "}
                    {branch.coordinates.lng.toFixed(4)}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Actions */}
          <div className="mt-6 pt-4 border-t border-gray-100">
            <Button asChild className="w-full" size="lg">
              <a
                href={getDirectionsUrl()}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Navigation className="w-4 h-4 mr-2" />
                Get Directions
              </a>
            </Button>
          </div>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
}
