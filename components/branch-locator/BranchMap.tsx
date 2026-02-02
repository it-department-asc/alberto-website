"use client";

import { useEffect, useRef, useState } from "react";
import type { Branch } from "@/lib/types/branch";

// All markers use the same dark color for consistency
const MARKER_COLOR = "#1f2937";

interface BranchMapProps {
  branches: Branch[];
  selectedBranch: Branch | null;
  onSelectBranch: (branch: Branch) => void;
  onViewDetails: (branch: Branch) => void;
}

// Helper function defined at module level
const getDirectionsUrl = (branch: Branch) => {
  const query = encodeURIComponent(
    `${branch.mallName}, ${branch.city}, ${branch.province}, Philippines`
  );
  return `https://www.google.com/maps/search/?api=1&query=${query}`;
};

export default function BranchMap({
  branches,
  selectedBranch,
  onSelectBranch,
  onViewDetails,
}: BranchMapProps) {
  const [isClient, setIsClient] = useState(false);
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<any>(null);
  const markersRef = useRef<Map<string, any>>(new Map());
  const leafletRef = useRef<any>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient || !mapContainerRef.current) return;

    const containerEl = mapContainerRef.current;

    const initMap = async () => {
      const L = (await import("leaflet")).default;
      leafletRef.current = L;

      // Fix for default marker icons
      delete (L.Icon.Default.prototype as any)._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
        iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
        shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
      });

      // Philippines center
      const philippinesCenter: [number, number] = [12.8797, 121.7740];

      // Initialize map if not already done
      if (!mapRef.current && containerEl) {
        mapRef.current = L.map(containerEl, {
          zoomControl: true,
          scrollWheelZoom: true,
        }).setView(philippinesCenter, 6);

        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
          maxZoom: 19,
        }).addTo(mapRef.current);
      }

      // Clear existing markers
      markersRef.current.forEach((marker) => marker.remove());
      markersRef.current.clear();

      // Create custom icon function
      const createCustomIcon = (color: string, isSelected: boolean) => {
        const size = isSelected ? 32 : 26;
        return L.divIcon({
          className: "custom-marker",
          html: `
            <div style="
              position: relative;
              width: ${size}px;
              height: ${size}px;
            ">
              <div style="
                position: absolute;
                background: ${isSelected ? "#dc2626" : color};
                width: ${size}px;
                height: ${size}px;
                border-radius: 50% 50% 50% 0;
                transform: rotate(-45deg);
                border: 3px solid white;
                box-shadow: 0 3px 10px rgba(0,0,0,0.4);
                ${isSelected ? 'animation: pulse 1s ease-in-out infinite;' : ''}
              "></div>
            </div>
          `,
          iconSize: [size, size],
          iconAnchor: [size / 2, size],
          popupAnchor: [0, -size],
        });
      };

      // Add markers for each branch
      branches.forEach((branch) => {
        if (!branch.coordinates) return;

        const isSelected = selectedBranch?.storeId === branch.storeId;

        const marker = L.marker([branch.coordinates.lat, branch.coordinates.lng], {
          icon: createCustomIcon(MARKER_COLOR, isSelected),
        }).addTo(mapRef.current);

        // Create popup content
        const popupContent = document.createElement("div");
        popupContent.style.cssText = "min-width: 250px; min-height: 140px; padding: 12px; position: relative;";
        popupContent.innerHTML = `
          <button onclick="this.closest('.leaflet-popup').remove()" style="
            position: absolute;
            top: 8px;
            right: 8px;
            width: 24px;
            height: 24px;
            background: white;
            border: 1px solid #e5e7eb;
            border-radius: 6px;
            color: #6b7280;
            font-size: 16px;
            font-weight: bold;
            line-height: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: all 0.2s;
            z-index: 1000;
          " onmouseover="this.style.background='#f9fafb'; this.style.color='#374151'" onmouseout="this.style.background='white'; this.style.color='#6b7280'">×</button>
          <div style="margin-bottom: 12px;">
            <h4 style="font-weight: 700; font-size: 15px; color: #1f2937; margin: 0 0 6px 0; line-height: 1.3;">${branch.mallName}</h4>
            <p style="font-size: 13px; color: #6b7280; margin: 0; display: flex; align-items: center; gap: 4px;">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              ${branch.city}, ${branch.province}
            </p>
          </div>
          <div style="display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 14px;">
            ${branch.brands.map((brand) => {
              return `<span style="font-size: 11px; font-weight: 600; padding: 4px 10px; background: #f3f4f6; color: #374151; border-radius: 12px;">${brand}</span>`;
            }).join("")}
          </div>
          <div style="display: flex; gap: 8px;">
            <button id="view-details-${branch.storeId}" style="
              flex: 1;
              padding: 10px 16px;
              font-size: 13px;
              font-weight: 600;
              background: #1f2937;
              color: white;
              border: none;
              border-radius: 8px;
              cursor: pointer;
              transition: all 0.2s;
            ">View Details</button>
            <a href="${getDirectionsUrl(branch)}" target="_blank" rel="noopener noreferrer" style="
              display: flex;
              align-items: center;
              justify-content: center;
              padding: 10px 14px;
              background: #f3f4f6;
              color: #1f2937;
              border-radius: 8px;
              text-decoration: none;
              transition: all 0.2s;
            ">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="3 11 22 2 13 21 11 13 3 11"/></svg>
            </a>
          </div>
        `;

        // Bind popup with auto-open behavior
        const popup = L.popup({
          maxWidth: 280,
          closeButton: false,
          autoClose: true,
          className: "custom-popup",
        }).setContent(popupContent);

        marker.bindPopup(popup);

        // Single click opens popup immediately
        marker.on("click", (e: any) => {
          e.originalEvent?.stopPropagation();
          onSelectBranch(branch);
          marker.openPopup();
          
          // Add event listener for view details button after popup opens
          setTimeout(() => {
            const viewBtn = document.getElementById(`view-details-${branch.storeId}`);
            if (viewBtn) {
              viewBtn.onclick = () => {
                marker.closePopup();
                onViewDetails(branch);
              };
            }
          }, 10);
        });

        markersRef.current.set(branch.storeId, marker);
      });

      // Add custom CSS for popup
      const style = document.createElement("style");
      style.textContent = `
        .custom-popup .leaflet-popup-content-wrapper {
          border-radius: 12px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.15);
          padding: 0;
        }
        .custom-popup .leaflet-popup-content {
          margin: 0;
        }
        .custom-popup .leaflet-popup-tip {
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
        }
        @keyframes pulse {
          0%, 100% { transform: rotate(-45deg) scale(1); }
          50% { transform: rotate(-45deg) scale(1.1); }
        }
      `;
      if (!document.getElementById("map-custom-styles")) {
        style.id = "map-custom-styles";
        document.head.appendChild(style);
      }
    };

    initMap();

    return () => {
      // Don't destroy map on every rerender, only on unmount
    };
  }, [isClient, branches, onSelectBranch, onViewDetails, selectedBranch]);

  // Fly to selected branch and open popup
  useEffect(() => {
    if (!mapRef.current || !selectedBranch?.coordinates) return;
    
    mapRef.current.flyTo(
      [selectedBranch.coordinates.lat, selectedBranch.coordinates.lng],
      15,
      { duration: 0.8 }
    );

    // Open the popup for the selected branch
    const marker = markersRef.current.get(selectedBranch.storeId);
    if (marker) {
      setTimeout(() => {
        marker.openPopup();
      }, 800);
    }
  }, [selectedBranch]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  if (!isClient) {
    return (
      <div className="h-full w-full rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="relative w-12 h-12 mx-auto mb-4">
            <div className="absolute inset-0 rounded-full border-4 border-gray-200"></div>
            <div className="absolute inset-0 rounded-full border-4 border-gray-500 border-t-transparent animate-spin"></div>
          </div>
          <p className="text-sm font-medium text-gray-500">Loading map...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <link
        rel="stylesheet"
        href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
        integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
        crossOrigin=""
      />
      <div className="h-full w-full rounded-2xl overflow-hidden shadow-xl border border-gray-200/50 bg-white">
        <div ref={mapContainerRef} className="h-full w-full" />
      </div>
    </>
  );
}
