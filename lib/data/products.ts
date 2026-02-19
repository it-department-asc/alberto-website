import type { Product } from "@/lib/types/product";

export const sampleProducts: Product[] = [
  {
    id: "1",
    name: "Classic Leather Oxford",
    brand: "ALBERTO",
    category: "Men's Formal Shoes",
    price: 3495,
    originalPrice: 4495,
    description:
      "Elevate your formal attire with our Classic Leather Oxford. Crafted from premium full-grain leather, these shoes feature a timeless design that seamlessly transitions from boardroom meetings to evening events. The cushioned insole provides all-day comfort, while the durable rubber sole ensures lasting wear.",
    features: [
      "Premium full-grain leather upper",
      "Cushioned memory foam insole",
      "Durable rubber outsole",
      "Classic cap-toe design",
      "Breathable leather lining",
    ],
    sizes: ["39", "40", "41", "42", "43", "44", "45"],
    colors: [
      { name: "Black", hex: "#1a1a1a" },
      { name: "Brown", hex: "#8B4513" },
      { name: "Burgundy", hex: "#722F37" },
      { name: "Tan", hex: "#D2B48C" },
    ],
    images: [
      "/products/oxford-1.jpg",
      "/products/oxford-2.jpg",
      "/products/oxford-3.jpg",
      "/products/oxford-4.jpg",
    ],
    inStock: true,
  },
  {
    id: "2",
    name: "Women's Stiletto Heels",
    brand: "PICCADILLY",
    category: "Women's Heels",
    price: 2995,
    originalPrice: 3795,
    description:
      "Make a statement with our elegant Stiletto Heels. Designed for the modern woman who appreciates style and comfort, these heels feature a sleek silhouette with a comfortable 3-inch heel height. Perfect for special occasions or elevating your everyday look.",
    features: [
      "Patent leather finish",
      "Padded insole for comfort",
      "Slip-resistant sole",
      "Elegant pointed toe",
      "Adjustable ankle strap",
    ],
    sizes: ["35", "36", "37", "38", "39", "40"],
    colors: [
      { name: "Red", hex: "#DC143C" },
      { name: "Black", hex: "#1a1a1a" },
      { name: "Nude", hex: "#E3BC9A" },
      { name: "Navy", hex: "#000080" },
    ],
    images: [
      "/products/stiletto-1.jpg",
      "/products/stiletto-2.jpg",
      "/products/stiletto-3.jpg",
    ],
    inStock: true,
  },
  {
    id: "3",
    name: "Casual Leather Loafers",
    brand: "ALBERTO",
    category: "Men's Casual Shoes",
    price: 2795,
    description:
      "The perfect blend of casual and sophisticated. Our Leather Loafers are crafted for comfort and style, featuring a slip-on design that makes them ideal for everyday wear. The genuine leather construction ensures durability while the flexible sole provides exceptional comfort.",
    features: [
      "Genuine leather upper",
      "Easy slip-on design",
      "Flexible rubber sole",
      "Moccasin stitching detail",
      "Breathable interior",
    ],
    sizes: ["40", "41", "42", "43", "44"],
    colors: [
      { name: "Cognac", hex: "#9A4D2E" },
      { name: "Navy", hex: "#1B2A4E" },
      { name: "Gray", hex: "#6B6B6B" },
    ],
    images: [
      "/products/loafer-1.jpg",
      "/products/loafer-2.jpg",
    ],
    inStock: true,
  },
  {
    id: "4",
    name: "Sport Running Shoes",
    brand: "GEOX",
    category: "Athletic Shoes",
    price: 4995,
    originalPrice: 5995,
    description:
      "Engineered for performance, our Sport Running Shoes feature breathable mesh construction and responsive cushioning technology. Whether you're hitting the gym or running errands, these shoes provide the support and comfort you need.",
    features: [
      "Breathable mesh upper",
      "Responsive foam cushioning",
      "Lightweight design",
      "Anti-slip rubber outsole",
      "Reflective details for visibility",
    ],
    sizes: ["38", "39", "40", "41", "42", "43", "44", "45"],
    colors: [
      { name: "White/Blue", hex: "#FFFFFF" },
      { name: "Black/Red", hex: "#1a1a1a" },
      { name: "Gray/Green", hex: "#808080" },
    ],
    images: [
      "/products/running-1.jpg",
      "/products/running-2.jpg",
      "/products/running-3.jpg",
      "/products/running-4.jpg",
    ],
    inStock: true,
  },
  {
    id: "5",
    name: "Kids Velcro Sneakers",
    brand: "KYO",
    category: "Kids Shoes",
    price: 1495,
    description:
      "Designed with active kids in mind, our Velcro Sneakers make it easy for little ones to put on their own shoes. The durable construction withstands playground adventures while the cushioned sole keeps feet comfortable all day long.",
    features: [
      "Easy velcro closure",
      "Durable canvas upper",
      "Non-marking rubber sole",
      "Cushioned footbed",
      "Machine washable",
    ],
    sizes: ["28", "29", "30", "31", "32", "33", "34"],
    colors: [
      { name: "Blue", hex: "#4169E1" },
      { name: "Pink", hex: "#FF69B4" },
      { name: "Green", hex: "#32CD32" },
      { name: "Orange", hex: "#FF8C00" },
    ],
    images: [
      "/products/kids-1.jpg",
      "/products/kids-2.jpg",
    ],
    inStock: false,
  },
  {
    id: "6",
    name: "Women's Ballet Flats",
    brand: "PICCADILLY",
    category: "Women's Flats",
    price: 1995,
    description:
      "Timeless elegance meets everyday comfort in our Ballet Flats. These versatile shoes feature a classic round-toe design with a cushioned insole, making them perfect for all-day wear. Dress them up or down for any occasion.",
    features: [
      "Soft faux leather upper",
      "Cushioned insole",
      "Flexible sole",
      "Classic bow detail",
      "Slip-resistant bottom",
    ],
    sizes: ["35", "36", "37", "38", "39", "40"],
    colors: [
      { name: "Black", hex: "#1a1a1a" },
      { name: "Blush", hex: "#DE5D83" },
      { name: "Leopard", hex: "#C19A6B" },
      { name: "White", hex: "#FFFFFF" },
      { name: "Red", hex: "#B22222" },
    ],
    images: [
      "/products/ballet-1.jpg",
      "/products/ballet-2.jpg",
      "/products/ballet-3.jpg",
    ],
    inStock: true,
  },
];

export default sampleProducts;
