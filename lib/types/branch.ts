export type Brand = "ALBERTO" | /* "G&G" | */ "KYO" | "GEOX" | "PICCADILLY";

export type BranchType = "STAND ALONE" | "HYBRID";

export interface Branch {
  storeId: string;
  branchCode: string;
  region: string;
  province: string;
  city: string;
  lessor: string;
  mallName: string;
  brands: Brand[];
  branchType: BranchType;
  coordinates?: {
    lat: number;
    lng: number;
  };
}

export interface BranchFilters {
  search: string;
  brand: Brand | "ALL";
  lessor: string;
  region: string;
}

export const BRANDS: Brand[] = ["ALBERTO", /* "G&G", */ "KYO", "GEOX", "PICCADILLY"];

export const LESSORS = [
  "SM",
  "Ayala",
  "Robinsons",
  "KCC",
  "Filinvest",
  "Greenhills",
  "Fishermall",
  "Ali Mall",
  "Sta. Lucia",
  "Limketkai",
  "ICM",
];

export const REGIONS = [
  "NCR",
  "CALABARZON",
  "Central Luzon",
  "Ilocos",
  "Cagayan Valley",
  "Bicol",
  "Central Visayas",
  "Western Visayas",
  "Eastern Visayas",
  "Northern Mindanao",
  "Caraga",
  "Davao",
  "Zamboanga Peninsula",
  "SOCCSKSARGEN",
];

// Accurate coordinates for Philippine malls/cities
export const COORDINATES_MAP: Record<string, { lat: number; lng: number }> = {
  // NCR - Metro Manila
  "SM Megamall": { lat: 14.5847, lng: 121.0565 },
  "Greenhills Shopping Center": { lat: 14.6013, lng: 121.0505 },
  "SM City Fairview": { lat: 14.7273, lng: 121.0758 },
  "SM Novaliches": { lat: 14.708042, lng: 121.037584 },
  "SM City San Jose Del Monte": { lat: 14.8137, lng: 121.0453 },
  "SM City Grand Central": { lat: 14.6559, lng: 120.9843 },
  "Fishermall-Quezon Ave": { lat: 14.6507, lng: 121.0172 },
  "SM City North EDSA": { lat: 14.6567, lng: 121.0287 },
  "Trinoma": { lat: 14.6521, lng: 121.0320 },
  "Alimall Cubao": { lat: 14.6205, lng: 121.0527 },
  "Robinsons Magnolia": { lat: 14.6163, lng: 121.0346 },
  "Sta. Lucia East": { lat: 14.5805, lng: 121.1135 },
  "SM City San Mateo": { lat: 14.6972, lng: 121.1201 },
  "SM Cherry Antipolo": { lat: 14.6245, lng: 121.1215 },
  "Glorietta 3": { lat: 14.5513, lng: 121.0247 },
  "Market Market": { lat: 14.5499, lng: 121.0505 },
  "Ayala Mall One Ayala": { lat: 14.5524, lng: 121.0194 },
  "SM Mall of Asia": { lat: 14.5350, lng: 120.9830 },
  "Robinsons Place Ermita": { lat: 14.5760, lng: 120.9850 },
  "SM City Manila": { lat: 14.5987, lng: 120.9799 },
  "SM San Lazaro": { lat: 14.6200, lng: 120.9826 },
  "Ayala Mall By The Bay": { lat: 14.5330, lng: 120.9820 },
  "SM Bicutan": { lat: 14.4893, lng: 121.0424 },
  "SM Sucat": { lat: 14.4678, lng: 121.0329 },
  "SM Center Las Piñas": { lat: 14.4451, lng: 120.9921 },
  "SM Southmall": { lat: 14.4282, lng: 120.9867 },
  "Festival": { lat: 14.4170, lng: 121.0388 },
  "Alabang Town Center": { lat: 14.4225, lng: 121.0238 },
  "Feliz": { lat: 14.5886, lng: 121.0742 },

  // CALABARZON
  "SM Center San Pedro": { lat: 14.3600, lng: 121.0492 },
  "Solenad 2": { lat: 14.2347, lng: 121.0412 },
  "SM City Dasmariñas": { lat: 14.3271, lng: 120.9397 },
  "SM Center Lemery": { lat: 13.8733, lng: 120.9045 },
  "SM City Lucena": { lat: 13.9364, lng: 121.6168 },

  // Central Luzon
  "Robinsons Place Malolos": { lat: 14.8430, lng: 120.8100 },
  "SM City Pampanga": { lat: 15.0289, lng: 120.6869 },
  "SM City Tarlac": { lat: 15.4820, lng: 120.5970 },
  "Marquee": { lat: 15.1617, lng: 120.5818 },
  "Marquee Mall": { lat: 15.1617, lng: 120.5818 },
  "SM City Telebastagan": { lat: 15.0392, lng: 120.6575 },
  "SM Olongapo": { lat: 14.8369, lng: 120.2850 },
  "SM City Baliwag": { lat: 14.9574, lng: 120.9028 },
  "SM City Cabanatuan": { lat: 15.4912, lng: 120.9679 },
  "SM Mega Center Cabanatuan": { lat: 15.4868, lng: 120.9705 },
  "Robinsons Gapan": { lat: 15.3078, lng: 120.9485 },

  // Ilocos
  "Robinsons Place Pangasinan": { lat: 16.0036, lng: 120.2086 },
  "SM City Rosales": { lat: 15.8933, lng: 120.6320 },
  "Robinsons Place Ilocos": { lat: 18.1988, lng: 120.5938 },
  "Robinsons Place La Union": { lat: 16.6161, lng: 120.3181 },

  // Cagayan Valley
  "SM Tuguegarao-Downtown": { lat: 17.6134, lng: 121.7272 },
  "SM City Tuguegarao": { lat: 17.6170, lng: 121.7340 },
  "SM Cauayan": { lat: 16.9310, lng: 121.7748 },
  "Robinsons Place Tuguegarao": { lat: 17.6122, lng: 121.7258 },
  "Robinsons Place Santiago": { lat: 16.6840, lng: 121.5568 },

  // Bicol
  "SM City Daet": { lat: 14.1125, lng: 122.9555 },
  "Robinsons Place Naga": { lat: 13.6220, lng: 123.1950 },
  "SM City Legazpi": { lat: 13.1394, lng: 123.7440 },
  "SM Sorsogon": { lat: 12.9744, lng: 124.0052 },

  // Central Visayas
  "Ayala Central Bloc": { lat: 10.3160, lng: 123.8857 },
  "Ayala Center Cebu": { lat: 10.3180, lng: 123.9055 },
  "Robinsons Place Cebu": { lat: 10.3120, lng: 123.9160 },
  "SM City Cebu": { lat: 10.3118, lng: 123.9185 },
  "SM City Seaside": { lat: 10.2812, lng: 123.8812 },
  "SM City Consolacion": { lat: 10.3770, lng: 123.9582 },
  "Island City Mall": { lat: 9.6545, lng: 123.8535 },
  "Robinsons Place Dumaguete": { lat: 9.3070, lng: 123.3055 },

  // Western Visayas
  "Capitol": { lat: 10.6715, lng: 122.9528 },
  "SM City Bacolod": { lat: 10.6752, lng: 122.9502 },
  "Robinsons Place Iloilo": { lat: 10.7205, lng: 122.5623 },
  "SM City Iloilo": { lat: 10.6972, lng: 122.5648 },
  "Robinsons Place Pavia": { lat: 10.7742, lng: 122.5367 },
  "SM City Roxas": { lat: 11.5855, lng: 122.7513 },
  "Robinsons Place Roxas": { lat: 11.5830, lng: 122.7491 },
  "Robinsons Place Antique": { lat: 10.7717, lng: 121.9438 },
  "Robinsons Place Palawan": { lat: 9.7577, lng: 118.7356 },
  "SM City Palawan": { lat: 9.7520, lng: 118.7498 },
  "Robinsons Place Bacolod": { lat: 10.6682, lng: 122.9558 },

  // Eastern Visayas
  "Robinsons North Tacloban": { lat: 11.2546, lng: 124.9600 },
  "Robinsons Place Tacloban": { lat: 11.2451, lng: 124.9995 },
  "Robinsons Place Ormoc": { lat: 11.0070, lng: 124.6078 },

  // Northern Mindanao
  "SM City Cagayan De Oro": { lat: 8.4810, lng: 124.6475 },
  "Centrio": { lat: 8.4820, lng: 124.6442 },
  "Limketkai": { lat: 8.4800, lng: 124.6470 },
  "Robinsons Place Iligan": { lat: 8.2283, lng: 124.2455 },
  "Robinsons Place Valencia": { lat: 7.9068, lng: 125.0928 },

  // Caraga
  "Robinsons Place Butuan": { lat: 8.9458, lng: 125.5352 },

  // Davao
  "Abreeza": { lat: 7.0848, lng: 125.6150 },
  "Abreeza Mall": { lat: 7.0848, lng: 125.6150 },
  "Robinsons Place Tagum": { lat: 7.4480, lng: 125.8085 },

  // Zamboanga Peninsula
  "KCC de Zamboanga": { lat: 6.9216, lng: 122.0792 },
  "KCC Mall de Zamboanga": { lat: 6.9216, lng: 122.0792 },
  "Robinsons Place Pagadian": { lat: 7.8271, lng: 123.4323 },

  // SOCCSKSARGEN
  "KCC Mall": { lat: 6.1141, lng: 125.1762 },
  "KCC Mall Cotabato": { lat: 7.2050, lng: 124.2312 },
  "Veranza": { lat: 6.1110, lng: 125.1720 },
  "Veranza Mall": { lat: 6.1110, lng: 125.1720 },
};
