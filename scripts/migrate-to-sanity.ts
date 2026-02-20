/**
 * One-time migration script to import existing hardcoded data into Sanity CMS.
 *
 * Usage:
 *   1. Set SANITY_API_WRITE_TOKEN in your .env.local (or export it)
 *   2. Run: npx tsx scripts/migrate-to-sanity.ts
 *
 * This script creates:
 *   - All brands
 *   - All branches (in batches of 50)
 *   - Fashion products (from homepage, products page, lookbook)
 *   - Lookbook items
 *   - Homepage settings singleton
 *   - Site settings singleton
 */

import { createClient } from "next-sanity";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "t4wjq9fn",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-01-01",
  useCdn: false,
  token: process.env.SANITY_API_WRITE_TOKEN,
});

// ═══════════════════════════════════════════════════════
// BRAND DATA (from lib/data/brands.ts)
// ═══════════════════════════════════════════════════════

const brandsData = [
  {
    _id: "brand-alberto",
    _type: "brand",
    slug: { _type: "slug", current: "alberto" },
    name: "ALBERTO",
    tagline: "Crafted for the Discerning Filipino",
    about: `ALBERTO is the flagship house brand of Alberto Shoes Corporation — a name that has been synonymous with quality footwear and accessories in the Philippines for decades. Rooted in heritage and refined through generations of craftsmanship, ALBERTO represents the pinnacle of locally driven fashion excellence.\n\nEvery ALBERTO piece reflects a deep respect for quality materials, thoughtful construction, and the sophisticated taste of the modern Filipino consumer.`,
    story: `Alberto Shoes Corporation was founded with a singular mission: to bring world-class footwear and fashion brands to the Filipino consumer while nurturing homegrown excellence. The ALBERTO house brand was born from that same mission — a direct expression of the corporation's values distilled into a label.\n\nFrom its early stores to a nationwide retail presence, ALBERTO has grown alongside the evolving tastes of Philippine fashion, always staying ahead while honoring its roots.`,
    philosophy: `Quality, heritage, and purpose. ALBERTO believes that every pair of shoes tells a story — of the artisan who made them, the person who wears them, and the life they live together.\n\nThe brand is committed to delivering products that not only look exceptional but are built to last, reflecting a philosophy that true luxury lies in enduring quality rather than fleeting trends.`,
    lifestyleDescription: `The ALBERTO customer is confident, cultured, and values the finer things in life without ostentation. Whether stepping into a boardroom, attending a formal occasion, or enjoying a refined casual moment, ALBERTO footwear is the perfect companion.\n\nWith curated collections that blend timeless silhouettes with contemporary refinement, ALBERTO dresses the discerning Filipino for every chapter of life.`,
    spotlightTagline: "Heritage & Excellence",
    spotlightStory: "The flagship house brand of Alberto Shoes Corporation. Decades of craftsmanship and quality, designed for the discerning Filipino who values timeless elegance.",
    features: [
      { _key: "f-alberto-1", icon: "Crown", title: "Heritage Craftsmanship", description: "Decades of expertise poured into every product, honoring traditional techniques with modern precision." },
      { _key: "f-alberto-2", icon: "Gem", title: "Premium Materials", description: "Carefully selected leathers, fabrics, and components sourced for their quality and longevity." },
      { _key: "f-alberto-3", icon: "Star", title: "Timeless Design", description: "Silhouettes that transcend seasons, designed to remain relevant and refined year after year." },
      { _key: "f-alberto-4", icon: "MapPin", title: "Filipino Pride", description: "A brand rooted in Philippine culture, built to serve and celebrate the modern Filipino lifestyle." },
    ],
    products: [
      { _key: "p-alberto-1", id: "alberto-1", name: "Heritage Oxford", description: "Full-grain leather oxford with hand-stitched detailing and leather sole — the quintessential dress shoe.", category: "Men's Footwear" },
      { _key: "p-alberto-2", id: "alberto-2", name: "Classic Derby", description: "Open-lacing derby in rich calfskin leather, perfect for formal and business occasions.", category: "Men's Footwear" },
      { _key: "p-alberto-3", id: "alberto-3", name: "Executive Loafer", description: "Slip-on loafer with penny keeper and cushioned footbed for all-day executive comfort.", category: "Men's Footwear" },
      { _key: "p-alberto-4", id: "alberto-4", name: "Refined Pump", description: "Elegant kitten-heel pump in supple leather, designed for the polished professional woman.", category: "Women's Footwear" },
      { _key: "p-alberto-5", id: "alberto-5", name: "Heritage Tote", description: "Structured leather tote with suede lining and brass hardware — a boardroom essential.", category: "Bags" },
      { _key: "p-alberto-6", id: "alberto-6", name: "Weekend Derbies", description: "Casual take on the classic derby in nubuck leather, bridging sophistication and leisure.", category: "Men's Footwear" },
    ],
    isActive: true,
    order: 1,
  },
  {
    _id: "brand-urban-muse",
    _type: "brand",
    slug: { _type: "slug", current: "urban-muse" },
    name: "URBAN MUSE",
    tagline: "Inspire Your Urban Journey",
    about: "URBAN MUSE captures the spirit of modern city life, creating footwear and accessories that transition seamlessly from work to weekend.",
    story: "Born from the bustling energy of urban landscapes, URBAN MUSE understands the needs of the contemporary city dweller.",
    philosophy: "City life demands versatility. URBAN MUSE creates pieces that adapt to your dynamic lifestyle.",
    lifestyleDescription: "For the modern urbanite who navigates life with style and purpose.",
    spotlightTagline: "City Chic Redefined",
    spotlightStory: "For the urban explorer who refuses to compromise. Urban Muse blends metropolitan sophistication with everyday comfort, designed for women who move through life with purpose and grace.",
    features: [
      { _key: "f-um-1", icon: "Building", title: "Urban Ready", description: "Designed for city life." },
      { _key: "f-um-2", icon: "Zap", title: "Versatile Styles", description: "From office to evening." },
      { _key: "f-um-3", icon: "TrendingUp", title: "On-Trend", description: "Current fashion forward designs." },
      { _key: "f-um-4", icon: "Footprints", title: "All-Day Comfort", description: "Comfortable for city exploration." },
    ],
    products: [],
    isActive: true,
    order: 2,
  },
  {
    _id: "brand-geox",
    _type: "brand",
    slug: { _type: "slug", current: "geox" },
    name: "GEOX",
    tagline: "Technology and Innovation for Everyday Comfort",
    about: `GEOX comes from Geo (earth) and X (advanced patented technology). The brand blends Italian innovation with everyday elegance, focusing on research-driven footwear and apparel designed for breathability, thermo-regulation, and comfort.\n\nSince its founding, GEOX has been committed to creating products that enhance well-being through cutting-edge technology, without compromising on style or quality.`,
    story: `Founded by Mario Moretti Polegato in 1992 after a revolutionary discovery. While walking in the Nevada desert, Polegato cut holes in his rubber-soled shoes to cool his feet—and the idea for breathable footwear was born.\n\nThis simple yet ingenious solution led to the development of patented breathable and temperature-regulating technology that has since transformed the footwear industry. What started as a personal innovation has grown into a global brand synonymous with comfort and innovation.`,
    philosophy: `Respira™ ("Breathe") represents GEOX's commitment to comfort, performance, and stylish technology. The philosophy is simple yet profound: feet need to breathe to stay healthy and comfortable.\n\nBy combining scientific research with Italian design excellence, GEOX creates footwear that adapts to the body's natural needs, providing optimal comfort in any condition.`,
    lifestyleDescription: `GEOX is designed for people on the move—those who value well-being without sacrificing style. Whether you're commuting to work, exploring a new city, or simply enjoying everyday life, GEOX footwear provides the comfort and support you need.\n\nThe brand's customer-centric approach extends to its retail experience, with premium stores designed to showcase the technology and craftsmanship behind every product.`,
    spotlightTagline: "The Shoe That Breathes",
    spotlightStory: "Revolutionary technology meets Italian design. Geox's patented breathable soles ensure comfort from morning to night, proving that innovation and style can coexist beautifully.",
    features: [
      { _key: "f-geox-1", icon: "Wind", title: "Breathable Technology", description: "Patented membrane allows vapor out while keeping water from getting in, keeping feet dry and comfortable." },
      { _key: "f-geox-2", icon: "Thermometer", title: "Thermo-Regulation", description: "Advanced materials that adapt to temperature changes, maintaining optimal foot climate in any weather." },
      { _key: "f-geox-3", icon: "Award", title: "60+ Patents Worldwide", description: "Continuous innovation backed by extensive research and development, with patents protecting groundbreaking technologies." },
      { _key: "f-geox-4", icon: "Palette", title: "Italian Research & Design", description: "Combining cutting-edge technology with Italian craftsmanship and style for products that perform and look exceptional." },
    ],
    products: [
      { _key: "p-geox-1", id: "geox-1", name: "Nebula Sneaker", description: "Lightweight sneaker with maximum breathability and flexible sole for ultimate comfort.", category: "Men's Footwear" },
      { _key: "p-geox-2", id: "geox-2", name: "Respira Loafer", description: "Classic loafer featuring patented breathing technology for all-day comfort.", category: "Men's Footwear" },
      { _key: "p-geox-3", id: "geox-3", name: "Aerantis Runner", description: "Performance runner with advanced cushioning and thermoregulation.", category: "Unisex" },
      { _key: "p-geox-4", id: "geox-4", name: "Spherica Sandal", description: "Ergonomic sandal with anatomical footbed and breathable straps.", category: "Women's Footwear" },
      { _key: "p-geox-5", id: "geox-5", name: "Symbol Oxford", description: "Elegant oxford shoe combining formal style with breathable comfort.", category: "Men's Footwear" },
      { _key: "p-geox-6", id: "geox-6", name: "Ophira Slip-On", description: "Stylish slip-on with flexible sole and moisture-wicking lining.", category: "Women's Footwear" },
    ],
    isActive: true,
    order: 3,
  },
  {
    _id: "brand-kyo",
    _type: "brand",
    slug: { _type: "slug", current: "kyo" },
    name: "KYO",
    tagline: "Style Today. Your Way.",
    about: `KYO, derived from the Japanese word for "today," is the Philippines' first modular customizable vegan-leather bag brand. Born from a desire to make fashion personal and accessible, KYO empowers individuals to express their unique style through innovative, interchangeable designs.\n\nEvery KYO bag is a canvas for self-expression, allowing you to create combinations as unique as you are.`,
    story: `KYO was founded by Germaine Gaerlan with a vision to revolutionize how Filipinos experience fashion accessories. Starting from humble beginnings at local bazaars, the brand's unique concept of customizable bags quickly captured the hearts of style-conscious consumers.\n\nThe journey from a small kiosk at SM North EDSA to a full store at SM Mall of Asia is a testament to the brand's resonance with customers who value individuality and creativity in their fashion choices.`,
    philosophy: `At the heart of KYO is the belief that fashion should be personal. The brand encourages personality-driven fashion, where customers can mix and match components to reflect their mood, occasion, or identity.\n\nWith the ability to create over 30,000 combinations, KYO transforms the shopping experience from passive consumption to active creation. Your bag becomes a reflection of who you are—today.`,
    lifestyleDescription: `KYO celebrates the creative spirit in everyone. Whether you're heading to the office, meeting friends for brunch, or exploring the city, your KYO bag adapts to your lifestyle and mood.\n\nThe brand embodies the entrepreneurial spirit of experimentation and self-expression. Each piece is crafted with care using premium vegan leather, ensuring that style doesn't come at the cost of ethics or quality.`,
    spotlightTagline: "Contemporary Craft",
    spotlightStory: "Minimalist aesthetics meet exceptional craftsmanship. KYO creates footwear that speaks softly but carries unmistakable presence, for those who appreciate understated luxury.",
    features: [
      { _key: "f-kyo-1", icon: "Puzzle", title: "Modular Bag System", description: "Revolutionary interchangeable design that lets you swap components to create your perfect bag." },
      { _key: "f-kyo-2", icon: "Leaf", title: "Premium Vegan Leather", description: "Ethically sourced, high-quality vegan leather that's durable, stylish, and animal-friendly." },
      { _key: "f-kyo-3", icon: "Sparkles", title: "30,000+ Combinations", description: "With 8 silhouettes, 6 colors, 44 straps, 15 wallets, and 14 KYObitz charms to choose from." },
      { _key: "f-kyo-4", icon: "Heart", title: "Express Yourself", description: "Create a bag that's uniquely yours, reflecting your personality and style every single day." },
    ],
    products: [
      { _key: "p-kyo-1", id: "kyo-1", name: "Classic Tote", description: "Versatile tote bag with multiple strap options and interior organization.", category: "Totes" },
      { _key: "p-kyo-2", id: "kyo-2", name: "Crossbody Sling", description: "Compact crossbody perfect for hands-free convenience and everyday essentials.", category: "Crossbody" },
      { _key: "p-kyo-3", id: "kyo-3", name: "Bucket Bag", description: "Trendy bucket silhouette with drawstring closure and detachable straps.", category: "Bucket Bags" },
      { _key: "p-kyo-4", id: "kyo-4", name: "Mini Pochette", description: "Elegant mini bag perfect for special occasions and evening events.", category: "Mini Bags" },
      { _key: "p-kyo-5", id: "kyo-5", name: "Modular Wallet", description: "Compact wallet that attaches to any KYO bag or works standalone.", category: "Accessories" },
      { _key: "p-kyo-6", id: "kyo-6", name: "KYObitz Charm Set", description: "Collection of playful charms to personalize your KYO bag.", category: "Accessories" },
    ],
    isActive: true,
    order: 4,
  },
  {
    _id: "brand-piccadilly",
    _type: "brand",
    slug: { _type: "slug", current: "piccadilly" },
    name: "PICCADILLY",
    tagline: "Comfort Meets Fashion",
    about: "PICCADILLY is Brazil's leading comfort footwear brand, combining cutting-edge comfort technology with fashionable designs that don't compromise on style.",
    story: "From Brazil to the Philippines, PICCADILLY has been revolutionizing comfortable footwear for women who refuse to choose between style and comfort.",
    philosophy: "Beauty and comfort should never be mutually exclusive. PICCADILLY proves you can have both.",
    lifestyleDescription: "For women who walk confidently through life, knowing they look good and feel even better.",
    spotlightTagline: "Comfort Without Compromise",
    spotlightStory: "Brazilian innovation meets global style. Piccadilly has revolutionized comfortable footwear, proving that you never have to choose between feeling good and looking great.",
    features: [
      { _key: "f-pic-1", icon: "Heart", title: "Bio Comfort", description: "Anatomical footbed technology." },
      { _key: "f-pic-2", icon: "Shield", title: "Anti-Fatigue", description: "Reduces leg fatigue." },
      { _key: "f-pic-3", icon: "Feather", title: "Lightweight", description: "Feather-light materials." },
      { _key: "f-pic-4", icon: "Sparkles", title: "Fashion Forward", description: "Trendy designs always." },
    ],
    products: [],
    isActive: true,
    order: 5,
  },
  {
    _id: "brand-vizzano",
    _type: "brand",
    slug: { _type: "slug", current: "vizzano" },
    name: "VIZZANO",
    tagline: "Bold, Trendy, Irresistible",
    about: "VIZZANO brings the vibrant energy of Brazilian fashion to the Philippines. Known for bold designs and trendy styles that make heads turn.",
    story: "VIZZANO captures the essence of Brazilian glamour—bold, colorful, and unapologetically fashionable.",
    philosophy: "Fashion should be fun and expressive. VIZZANO encourages you to embrace your bold side.",
    lifestyleDescription: "For the fashion-forward woman who isn't afraid to stand out and make a statement.",
    spotlightTagline: "Bold & Beautiful",
    spotlightStory: "For the woman who makes an entrance. Vizzano creates statement pieces that celebrate femininity and confidence, designed to turn heads and spark conversations.",
    features: [
      { _key: "f-viz-1", icon: "Flame", title: "Bold Designs", description: "Statement-making styles." },
      { _key: "f-viz-2", icon: "Palette", title: "Vibrant Colors", description: "Eye-catching palettes." },
      { _key: "f-viz-3", icon: "TrendingUp", title: "Latest Trends", description: "Always on-trend." },
      { _key: "f-viz-4", icon: "Sparkles", title: "Glamorous", description: "Head-turning elegance." },
    ],
    products: [],
    isActive: true,
    order: 6,
  },
  {
    _id: "brand-moleca",
    _type: "brand",
    slug: { _type: "slug", current: "moleca" },
    name: "MOLECA",
    tagline: "Young, Fresh, Energetic",
    about: "MOLECA is the youthful, energetic sister brand that brings playful designs and affordable fashion to the young and young-at-heart.",
    story: "MOLECA understands the pulse of youth fashion—fun, fresh, and always ready for the next adventure.",
    philosophy: "Youth is about expression and exploration. MOLECA gives you the freedom to experiment with style.",
    lifestyleDescription: "For the young and young-at-heart who embrace life with energy and enthusiasm.",
    spotlightTagline: "Everyday Elegance",
    spotlightStory: "Accessible luxury for the modern woman. Moleca brings fashion-forward designs within reach, ensuring every woman can step out in style, every single day.",
    features: [
      { _key: "f-mol-1", icon: "Zap", title: "Youthful Energy", description: "Designs that pop." },
      { _key: "f-mol-2", icon: "Heart", title: "Playful Styles", description: "Fun and expressive." },
      { _key: "f-mol-3", icon: "Wallet", title: "Accessible", description: "Fashion for everyone." },
      { _key: "f-mol-4", icon: "Smile", title: "Feel Good", description: "Comfortable and stylish." },
    ],
    products: [],
    isActive: true,
    order: 7,
  },
];

// ═══════════════════════════════════════════════════════
// SITE SETTINGS
// ═══════════════════════════════════════════════════════

const siteSettingsDoc = {
  _id: "siteSettings",
  _type: "siteSettings",
  phone: "+63 (2) 8123 4567",
  email: "info@albertoshoes.ph",
  address: "Quezon City, Metro Manila, Philippines",
  storeHours: "10:00 AM - 9:00 PM",
  storeHoursNote: "Open daily",
  phoneAvailability: "Mon-Sat 9AM-6PM",
  footerDescription:
    "Alberto Shoes Corporation has been the Philippines' trusted destination for quality footwear and bags. With 80 branches nationwide, we bring style and comfort closer to every Filipino.",
  faqs: [
    { _key: "faq-1", question: "What are your store hours?", answer: "Most of our branches are open daily from 10:00 AM to 9:00 PM. Hours may vary by location." },
    { _key: "faq-2", question: "Do you offer returns or exchanges?", answer: "Yes! We accept returns and exchanges within 7 days of purchase with the original receipt." },
    { _key: "faq-3", question: "How can I find a branch near me?", answer: "Visit our Branches page to see all 80 locations organized by region." },
    { _key: "faq-4", question: "Do you offer gift cards?", answer: "Yes, Alberto Shoes gift cards are available at all branches in various denominations." },
  ],
};

// ═══════════════════════════════════════════════════════
// ABOUT PAGE SETTINGS
// ═══════════════════════════════════════════════════════

const aboutPageSettingsDoc = {
  _id: "aboutPageSettings",
  _type: "aboutPageSettings",
  heroLabel: "Our Story",
  heroTitle: "Crafting Quality Footwear",
  heroTitleMuted: "For Over 40 Years",
  heroDescription:
    "Alberto Shoes Corporation has been the Philippines' trusted partner in style and comfort, bringing premium footwear and bags to Filipino families since 1980.",
  storyTitle: "From Humble Beginnings",
  storyTitleMuted: "To Nationwide Success",
  companyDescription:
    "Alberto Shoes Corporation began as a small footwear shop in Manila with a simple vision: to provide quality shoes that every Filipino could afford. Founded in 1980, we started with just a handful of employees and a commitment to excellence.\n\nOver the decades, our dedication to quality craftsmanship and customer satisfaction has allowed us to grow from that single store to a network of 80 branches spanning the entire Philippine archipelago — from the bustling malls of Metro Manila to the vibrant cities of Visayas and Mindanao.\n\nToday, Alberto Shoes is more than just a footwear retailer. We're a fashion destination that offers a complete range of products including dress sandals, trendy wedges, fashionable pumps, stylish bags, formal shoes, and comfortable loafers — all designed to help every Filipino step into style with confidence.",
  missionStatement:
    "To provide every Filipino with access to quality, stylish, and affordable footwear and accessories that enhance their confidence and complement their lifestyle. We are committed to exceptional customer service and maintaining the highest standards of product quality across all our 80 branches nationwide.",
  visionStatement:
    "To be the Philippines' most trusted and beloved footwear and accessories brand, recognized for our unwavering commitment to quality, innovation, and customer satisfaction. We envision Alberto Shoes as a household name synonymous with style, comfort, and exceptional value for every generation of Filipino consumers.",
  milestones: [
    { _key: "m-1980", year: "1980", event: "Alberto Shoes Corporation founded in Manila" },
    { _key: "m-1990", year: "1990", event: "Expanded to 10 branches across Metro Manila" },
    { _key: "m-2000", year: "2000", event: "Reached 30 branches nationwide" },
    { _key: "m-2010", year: "2010", event: "Launched premium bags collection" },
    { _key: "m-2020", year: "2020", event: "Celebrated 40 years with 70+ branches" },
    { _key: "m-2024", year: "2024", event: "80 branches serving Filipinos nationwide" },
  ],
  values: [
    { _key: "v-quality", icon: "Award", title: "Quality First", description: "Every product undergoes rigorous quality checks to ensure you receive only the finest footwear and accessories." },
    { _key: "v-customer", icon: "Users", title: "Customer-Centric", description: "Our customers are at the heart of everything we do. Your satisfaction is our ultimate measure of success." },
    { _key: "v-innovation", icon: "Sparkles", title: "Innovation", description: "We continuously evolve our designs and processes to bring you the latest trends and technologies." },
    { _key: "v-integrity", icon: "Heart", title: "Integrity", description: "Honest dealings and transparent business practices form the foundation of our relationships." },
  ],
  commitmentTitle: "Our Commitment to You",
  commitmentText:
    "At Alberto Shoes, we don't just sell footwear — we build relationships. Every pair of shoes, every bag, every product that bears our name represents our promise to you: quality you can trust, style you'll love, and value that respects your hard-earned money.",
  commitmentText2:
    "With 80 branches across the Philippines, we're always here for you. Whether you need help finding the perfect fit, have questions about care and maintenance, or simply want style advice — our team is ready to serve with a smile.",
  stats: [
    { _key: "stat-branches", value: "80+", label: "Branches" },
    { _key: "stat-years", value: "40+", label: "Years" },
    { _key: "stat-customers", value: "1M+", label: "Customers" },
  ],
};

// ═══════════════════════════════════════════════════════
// PRODUCTS PAGE SETTINGS
// ═══════════════════════════════════════════════════════

const productsPageSettingsDoc = {
  _id: "productsPageSettings",
  _type: "productsPageSettings",
  heroLabel: "Our Collection",
  heroTitle: "Discover Your",
  heroTitleMuted: "Perfect Style",
  heroDescription:
    "Explore our curated collection of premium footwear and bags, designed to complement every occasion and elevate your personal style.",
};

// ═══════════════════════════════════════════════════════
// CONTACT PAGE SETTINGS
// ═══════════════════════════════════════════════════════

const contactPageSettingsDoc = {
  _id: "contactPageSettings",
  _type: "contactPageSettings",
  heroLabel: "Get In Touch",
  heroTitle: "We'd Love to",
  heroTitleMuted: "Hear From You",
  heroDescription:
    "Have questions about our products, need help finding a branch, or want to share feedback? Our team is here to help.",
  mapTitle: "Visit Our Main Office",
  mapSubtitle: "Corporate Headquarters",
  mapAddress: "Quezon City, Metro Manila\nPhilippines",
  mapLink: "https://www.google.com/maps/search/?api=1&query=J28V%2BFR+Quezon+City+Metro+Manila",
};

// ═══════════════════════════════════════════════════════
// BRANCHES PAGE SETTINGS
// ═══════════════════════════════════════════════════════

const branchesPageSettingsDoc = {
  _id: "branchesPageSettings",
  _type: "branchesPageSettings",
  heroLabel: "Store Locator",
  heroTitle: "Find a Store",
  heroTitleMuted: "Near You",
  heroDescription:
    "With stores across the Philippines, quality footwear from Alberto, GEOX, KYO, and Piccadilly is always within reach.",
  ctaTitle: "Can't Find a Branch Near You?",
  ctaText: "Contact our customer service team for assistance.",
};

// ═══════════════════════════════════════════════════════
// BRANDS PAGE SETTINGS
// ═══════════════════════════════════════════════════════

const brandsPageSettingsDoc = {
  _id: "brandsPageSettings",
  _type: "brandsPageSettings",
  heroLabel: "Our Portfolio",
  heroTitle: "Our Brands",
  heroDescription:
    "Discover our curated collection of premium footwear and accessories brands, each with its own unique story and identity.",
  ctaTitle: "Experience Our Brands In Person",
  ctaText:
    "Visit any of our 80+ branches nationwide to discover the full range of our brand collections.",
  ctaButtonText: "Find a Store Near You",
};

// ═══════════════════════════════════════════════════════
// HOMEPAGE SETTINGS
// ═══════════════════════════════════════════════════════

const homepageSettingsDoc = {
  _id: "homepageSettings",
  _type: "homepageSettings",
  heroTagline: "Spring/Summer Collection 2026",
  heroHeadline: "Elegance",
  heroHeadlineItalic: "Redefined",
  heroSubtext:
    "Where craftsmanship meets contemporary design.\nDiscover footwear that tells your story.",
  heroCTAText: "Discover the Collection",
  heroCTALink: "/products",
  heroSideText: "Alberto · Est. 1980",
  campaignSections: [
    {
      _key: "philosophy",
      sectionKey: "philosophy",
      subtitle: "Our Philosophy",
      title: "Crafted for Those Who Walk With Purpose",
      description:
        "Every pair we create tells a story of dedication to craft and attention to detail. We believe that great footwear doesn't just complete an outfit—it empowers the person wearing it.",
      imagePosition: "left",
      ctaText: "Discover Our Story",
      ctaLink: "/about",
    },
    {
      _key: "craftsmanship",
      sectionKey: "craftsmanship",
      subtitle: "Craftsmanship",
      title: "The Art of Fine Footwear",
      description:
        "From selecting the finest leathers to the final stitch, every step in our process is guided by a commitment to excellence. Our artisans bring decades of expertise to every pair.",
      imagePosition: "right",
      ctaText: "Our Craft",
      ctaLink: "/about",
    },
    {
      _key: "comfort",
      sectionKey: "comfort",
      subtitle: "Innovation",
      title: "Comfort That Doesn't Compromise",
      description:
        "We've reimagined what comfort means in fashion footwear. Through innovative design and advanced materials, we ensure that every step feels as good as it looks.",
      imagePosition: "left",
      ctaText: "Explore Technology",
      ctaLink: "/products",
    },
  ],
  parallaxSections: [
    {
      _key: "parallax1",
      sectionKey: "parallax1",
      title: "Where Style Meets Substance",
      subtitle: "Craftsmanship",
    },
    {
      _key: "parallax2",
      sectionKey: "parallax2",
      title: "Step Into Your Story",
      subtitle: "Collection 2026",
    },
  ],
  newArrivalsTitle: "New Arrivals",
  newArrivalsSubtitle: "Just Arrived",
  // newArrivalProducts will be references → added after fashionProducts are created
  lookbookHeroTitle: "Lookbook",
  lookbookHeroSubtitle: "Style Inspiration",
  lookbookHeroBody:
    "Discover curated styles for every occasion.\nClick any look to explore the featured product.",
};

// ═══════════════════════════════════════════════════════
// HELPER: batch create
// ═══════════════════════════════════════════════════════

async function batchCreate(docs: any[], label: string, batchSize = 50) {
  console.log(`\n📦 Creating ${docs.length} ${label} documents...`);
  for (let i = 0; i < docs.length; i += batchSize) {
    const batch = docs.slice(i, i + batchSize);
    const transaction = client.transaction();
    for (const doc of batch) {
      transaction.createOrReplace(doc);
    }
    await transaction.commit();
    console.log(
      `  ✓ Batch ${Math.floor(i / batchSize) + 1}: ${batch.length} docs`
    );
  }
  console.log(`  ✅ Done: ${docs.length} ${label}`);
}

// ═══════════════════════════════════════════════════════
// MAIN
// ═══════════════════════════════════════════════════════

async function main() {
  console.log("🚀 Starting migration to Sanity CMS...\n");

  // 1. Brands
  await batchCreate(brandsData, "brands");

  // 2. Site Settings (singleton – global/contact/footer only)
  console.log("\n⚙️  Creating Site Settings...");
  await client.createOrReplace(siteSettingsDoc);
  console.log("  ✅ Site Settings created");

  // 3. Per-page settings singletons
  console.log("\n📄 Creating per-page settings...");

  await client.createOrReplace(aboutPageSettingsDoc);
  console.log("  ✅ About Page Settings created");

  await client.createOrReplace(productsPageSettingsDoc);
  console.log("  ✅ Products Page Settings created");

  await client.createOrReplace(contactPageSettingsDoc);
  console.log("  ✅ Contact Page Settings created");

  await client.createOrReplace(branchesPageSettingsDoc);
  console.log("  ✅ Branches Page Settings created");

  await client.createOrReplace(brandsPageSettingsDoc);
  console.log("  ✅ Brands Page Settings created");

  // 4. Homepage Settings (singleton – without image refs and product refs)
  console.log("\n🏠 Creating Homepage Settings...");
  await client.createOrReplace(homepageSettingsDoc);
  console.log("  ✅ Homepage Settings created");

  // 4. Branches – import from the data file
  //    We import dynamically to avoid TS config issues
  console.log("\n🏪 Importing branch data...");
  console.log(
    "  ⚠️  Branch data must be imported from Sanity Studio or via a separate script that reads lib/data/branches.ts"
  );
  console.log(
    "  ℹ️  The branch schema is ready. You can use the Sanity import CLI:"
  );
  console.log(
    '     sanity dataset import branches.ndjson production --type "branch"'
  );

  console.log("\n✨ Migration complete!");
  console.log("\nNext steps:");
  console.log("  1. Upload images to Sanity Media Library");
  console.log(
    "  2. Link images to documents (heroImage, spotlightImage, etc.)"
  );
  console.log(
    "  3. Create fashionProduct documents in Sanity Studio for the products page"
  );
  console.log("  4. Create lookbookItem documents referencing those products");
  console.log(
    "  5. Add newArrivalProducts references in the Homepage Settings"
  );
  console.log(
    "  6. Import branches using the NDJSON export script or Sanity Studio"
  );
}

main().catch((err) => {
  console.error("❌ Migration failed:", err);
  process.exit(1);
});
