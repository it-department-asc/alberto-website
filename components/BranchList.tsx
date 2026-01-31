"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MapPin } from "lucide-react";

interface Branch {
  name: string;
  address: string;
  city: string;
}

interface Region {
  name: string;
  branches: Branch[];
}

const branchData: Region[] = [
  {
    name: "Metro Manila",
    branches: [
      { name: "Alberto SM Mall of Asia", address: "SM Mall of Asia, Pasay City", city: "Pasay" },
      { name: "Alberto SM Megamall", address: "SM Megamall, Ortigas", city: "Mandaluyong" },
      { name: "Alberto SM North EDSA", address: "SM North EDSA, Quezon City", city: "Quezon City" },
      { name: "Alberto Glorietta", address: "Glorietta Mall, Makati", city: "Makati" },
      { name: "Alberto Robinsons Galleria", address: "Robinsons Galleria, Ortigas", city: "Pasig" },
      { name: "Alberto Market! Market!", address: "Market! Market!, BGC", city: "Taguig" },
      { name: "Alberto Gateway Mall", address: "Gateway Mall, Cubao", city: "Quezon City" },
      { name: "Alberto Trinoma", address: "Trinoma Mall, North EDSA", city: "Quezon City" },
      { name: "Alberto SM Aura", address: "SM Aura Premier, BGC", city: "Taguig" },
      { name: "Alberto Ayala Malls Manila Bay", address: "Ayala Malls Manila Bay", city: "Parañaque" },
    ],
  },
  {
    name: "Luzon - North",
    branches: [
      { name: "Alberto SM Baguio", address: "SM City Baguio", city: "Baguio" },
      { name: "Alberto SM Clark", address: "SM City Clark, Pampanga", city: "Clark" },
      { name: "Alberto Marquee Mall", address: "Marquee Mall, Angeles", city: "Angeles" },
      { name: "Alberto SM Rosales", address: "SM Rosales, Pangasinan", city: "Rosales" },
      { name: "Alberto Robinsons Place Pangasinan", address: "Robinsons Pangasinan", city: "Pangasinan" },
      { name: "Alberto SM Urdaneta", address: "SM Urdaneta Central", city: "Urdaneta" },
      { name: "Alberto SM Tarlac", address: "SM City Tarlac", city: "Tarlac" },
      { name: "Alberto SM Cabanatuan", address: "SM City Cabanatuan", city: "Cabanatuan" },
    ],
  },
  {
    name: "Luzon - South",
    branches: [
      { name: "Alberto SM Batangas", address: "SM City Batangas", city: "Batangas" },
      { name: "Alberto SM Lipa", address: "SM City Lipa, Batangas", city: "Lipa" },
      { name: "Alberto SM Lucena", address: "SM City Lucena", city: "Lucena" },
      { name: "Alberto Robinsons Place Lipa", address: "Robinsons Lipa", city: "Lipa" },
      { name: "Alberto SM Calamba", address: "SM City Calamba", city: "Calamba" },
      { name: "Alberto SM San Pablo", address: "SM City San Pablo", city: "San Pablo" },
      { name: "Alberto SM Dasmariñas", address: "SM City Dasmariñas", city: "Dasmariñas" },
      { name: "Alberto SM Bacoor", address: "SM City Bacoor", city: "Bacoor" },
      { name: "Alberto Ayala Malls Solenad", address: "Ayala Solenad, Nuvali", city: "Sta. Rosa" },
      { name: "Alberto Festival Mall", address: "Festival Mall, Alabang", city: "Muntinlupa" },
    ],
  },
  {
    name: "Visayas",
    branches: [
      { name: "Alberto SM City Cebu", address: "SM City Cebu", city: "Cebu" },
      { name: "Alberto SM Seaside City Cebu", address: "SM Seaside City", city: "Cebu" },
      { name: "Alberto Ayala Center Cebu", address: "Ayala Center Cebu", city: "Cebu" },
      { name: "Alberto SM City Iloilo", address: "SM City Iloilo", city: "Iloilo" },
      { name: "Alberto Robinsons Place Iloilo", address: "Robinsons Iloilo", city: "Iloilo" },
      { name: "Alberto SM City Bacolod", address: "SM City Bacolod", city: "Bacolod" },
      { name: "Alberto Robinsons Place Bacolod", address: "Robinsons Bacolod", city: "Bacolod" },
      { name: "Alberto SM City Tacloban", address: "SM City Tacloban", city: "Tacloban" },
    ],
  },
  {
    name: "Mindanao",
    branches: [
      { name: "Alberto SM Lanang Premier", address: "SM Lanang Premier, Davao", city: "Davao" },
      { name: "Alberto SM City Davao", address: "SM City Davao", city: "Davao" },
      { name: "Alberto Abreeza Mall", address: "Abreeza Ayala Mall", city: "Davao" },
      { name: "Alberto SM City CDO", address: "SM City Cagayan de Oro", city: "Cagayan de Oro" },
      { name: "Alberto Centrio Mall", address: "Centrio Mall, CDO", city: "Cagayan de Oro" },
      { name: "Alberto SM City General Santos", address: "SM City GenSan", city: "General Santos" },
      { name: "Alberto Gaisano Mall GenSan", address: "Gaisano Mall", city: "General Santos" },
      { name: "Alberto SM City Zamboanga", address: "SM City Zamboanga", city: "Zamboanga" },
    ],
  },
];

export default function BranchList() {
  return (
    <div className="w-full">
      <Accordion type="single" collapsible className="w-full space-y-4">
        {branchData.map((region, index) => (
          <motion.div
            key={region.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <AccordionItem
              value={region.name}
              className="border border-border rounded-xl px-6 bg-card shadow-sm hover:shadow-md transition-shadow"
            >
              <AccordionTrigger className="hover:no-underline py-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-foreground" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold text-foreground">
                      {region.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {region.branches.length} branches
                    </p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid gap-4 pb-4">
                  {region.branches.map((branch, branchIndex) => (
                    <motion.div
                      key={branch.name}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: branchIndex * 0.05 }}
                      className="flex items-start gap-4 p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                    >
                      <div className="w-2 h-2 rounded-full bg-foreground mt-2 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-foreground">
                          {branch.name}
                        </h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          {branch.address}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </motion.div>
        ))}
      </Accordion>
    </div>
  );
}
