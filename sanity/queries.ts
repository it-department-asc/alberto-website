import { groq } from "next-sanity";

// ── Nav Brands (for Navbar dropdown) ──
export const NAV_BRANDS_QUERY = groq`
  *[_type == "brand" && isActive == true] | order(order asc) {
    _id,
    name,
    slug,
    tagline,
    spotlightTagline
  }
`;

// ── Homepage ──
export const HOMEPAGE_QUERY = groq`
  *[_type == "homepageSettings"][0]{
    heroImage,
    heroTagline,
    heroHeadline,
    heroHeadlineItalic,
    heroSubtext,
    heroCTAText,
    heroCTALink,
    heroSideText,
    campaignSections[]{
      sectionKey,
      subtitle,
      title,
      description,
      image,
      imagePosition,
      ctaText,
      ctaLink
    },
    parallaxSections[]{
      sectionKey,
      image,
      title,
      subtitle
    },
    newArrivalsTitle,
    newArrivalsSubtitle,
    newArrivalProducts[]->{
      _id,
      id,
      name,
      brand->{_id, name, slug},
      tagline,
      description,
      materials,
      highlights,
      colors,
      images,
      moodImage,
      category,
      subcategory,
      isFeatured,
      isActive
    }
  }
`;

// ── Brand Spotlight Carousel ──
export const BRAND_SPOTLIGHT_QUERY = groq`
  *[_type == "brand" && isActive == true] | order(order asc) {
    _id,
    name,
    slug,
    spotlightTagline,
    spotlightStory,
    spotlightImage
  }
`;

// ── Brand Logo Strip ──
export const BRAND_LOGO_STRIP_QUERY = groq`
  *[_type == "brand" && isActive == true] | order(order asc) {
    _id,
    name,
    slug,
    logo
  }
`;

// ── All Brands ──
export const ALL_BRANDS_QUERY = groq`
  *[_type == "brand" && isActive == true] | order(order asc) {
    _id,
    slug,
    name,
    tagline,
    heroImage,
    about,
    story,
    philosophy,
    lifestyleDescription,
    lifestyleImage,
    spotlightImage,
    spotlightTagline,
    spotlightStory,
    logo,
    features,
    products,
    isActive,
    order
  }
`;

// ── Brand by Slug ──
export const BRAND_BY_SLUG_QUERY = groq`
  *[_type == "brand" && slug.current == $slug][0]{
    _id,
    slug,
    name,
    tagline,
    heroImage,
    about,
    story,
    philosophy,
    lifestyleDescription,
    lifestyleImage,
    spotlightImage,
    spotlightTagline,
    spotlightStory,
    logo,
    features,
    products,
    isActive,
    order
  }
`;

// ── All Fashion Products ──
export const ALL_FASHION_PRODUCTS_QUERY = groq`
  *[_type == "fashionProduct" && isActive == true]{
    _id,
    id,
    name,
    brand->{_id, name, slug},
    tagline,
    description,
    materials,
    highlights,
    colors,
    images,
    moodImage,
    category,
    subcategory,
    isFeatured,
    isActive
  }
`;

// ── Fashion Products by Brand ──
export const FASHION_PRODUCTS_BY_BRAND_QUERY = groq`
  *[_type == "fashionProduct" && isActive == true && brand->slug.current == $brandSlug]{
    _id,
    id,
    name,
    brand->{_id, name, slug},
    tagline,
    description,
    materials,
    highlights,
    colors,
    images,
    moodImage,
    category,
    subcategory,
    isFeatured,
    isActive
  }
`;

// ── Lookbook Items ──
export const LOOKBOOK_ITEMS_QUERY = groq`
  *[_type == "lookbookItem" && isActive == true] | order(order asc) {
    _id,
    title,
    category,
    image,
    order,
    isActive,
    product->{
      _id,
      id,
      name,
      brand->{_id, name, slug},
      tagline,
      description,
      materials,
      highlights,
      colors,
      images,
      moodImage,
      category,
      subcategory,
      isFeatured,
      isActive
    }
  }
`;

// ── Lookbook Hero ──
export const LOOKBOOK_HERO_QUERY = groq`
  *[_type == "homepageSettings"][0]{
    lookbookHeroImage,
    lookbookHeroTitle,
    lookbookHeroSubtitle,
    lookbookHeroBody
  }
`;

// ── All Branches ──
export const ALL_BRANCHES_QUERY = groq`
  *[_type == "branch" && isActive == true]{
    _id,
    storeId,
    branchCode,
    region,
    province,
    city,
    lessor,
    mallName,
    image,
    brands[]->{ _id, name, slug },
    branchType,
    coordinates,
    isActive
  }
`;

// ── Site Settings (global contact / footer) ──
export const SITE_SETTINGS_QUERY = groq`
  *[_type == "siteSettings"][0]{
    phone,
    email,
    address,
    storeHours,
    storeHoursNote,
    phoneAvailability,
    footerDescription,
    faqs
  }
`;

// ── About Page Settings ──
export const ABOUT_PAGE_QUERY = groq`
  *[_type == "aboutPageSettings"][0]{
    heroLabel,
    heroTitle,
    heroTitleMuted,
    heroDescription,
    storyTitle,
    storyTitleMuted,
    companyDescription,
    missionStatement,
    visionStatement,
    milestones,
    values,
    commitmentTitle,
    commitmentText,
    commitmentText2,
    stats
  }
`;

// ── Products Page Settings ──
export const PRODUCTS_PAGE_QUERY = groq`
  *[_type == "productsPageSettings"][0]{
    heroLabel,
    heroTitle,
    heroTitleMuted,
    heroDescription
  }
`;

// ── Contact Page Settings ──
export const CONTACT_PAGE_QUERY = groq`
  *[_type == "contactPageSettings"][0]{
    heroLabel,
    heroTitle,
    heroTitleMuted,
    heroDescription,
    mapTitle,
    mapSubtitle,
    mapAddress,
    mapLink
  }
`;

// ── Branches Page Settings ──
export const BRANCHES_PAGE_QUERY = groq`
  *[_type == "branchesPageSettings"][0]{
    heroLabel,
    heroTitle,
    heroTitleMuted,
    heroDescription,
    ctaTitle,
    ctaText
  }
`;

// ── Brands Page Settings ──
export const BRANDS_PAGE_QUERY = groq`
  *[_type == "brandsPageSettings"][0]{
    heroLabel,
    heroTitle,
    heroDescription,
    ctaTitle,
    ctaText,
    ctaButtonText
  }
`;
