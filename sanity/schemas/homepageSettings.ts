import { defineType, defineField } from "sanity";

export default defineType({
  name: "homepageSettings",
  title: "Homepage Settings",
  type: "document",
  // Singleton: managed via desk structure
  groups: [
    { name: "hero", title: "Hero Section" },
    { name: "campaigns", title: "Campaign Sections" },
    { name: "parallax", title: "Parallax Sections" },
    { name: "newArrivals", title: "New Arrivals" },
    { name: "lookbook", title: "Lookbook Hero" },
  ],
  fields: [
    // ── Hero ──
    defineField({
      name: "heroImage",
      title: "Hero Image",
      type: "image",
      options: { hotspot: true },
      description: "Main homepage hero image – recommended 1920×2300px",
      group: "hero",
    }),
    defineField({
      name: "heroTagline",
      title: "Hero Tagline",
      type: "string",
      description: 'e.g. "Spring/Summer Collection 2026"',
      group: "hero",
    }),
    defineField({
      name: "heroHeadline",
      title: "Hero Headline",
      type: "string",
      description: 'e.g. "Elegance"',
      group: "hero",
    }),
    defineField({
      name: "heroHeadlineItalic",
      title: "Hero Headline (Italic)",
      type: "string",
      description: 'e.g. "Redefined"',
      group: "hero",
    }),
    defineField({
      name: "heroSubtext",
      title: "Hero Subtext",
      type: "text",
      rows: 3,
      group: "hero",
    }),
    defineField({
      name: "heroCTAText",
      title: "Hero CTA Text",
      type: "string",
      description: 'e.g. "Discover the Collection"',
      group: "hero",
    }),
    defineField({
      name: "heroCTALink",
      title: "Hero CTA Link",
      type: "string",
      description: 'e.g. "/products"',
      group: "hero",
    }),
    defineField({
      name: "heroSideText",
      title: "Hero Side Text",
      type: "string",
      description: 'e.g. "Alberto · Est. 1980"',
      group: "hero",
    }),

    // ── Campaign Sections ──
    defineField({
      name: "campaignSections",
      title: "Campaign Sections",
      type: "array",
      group: "campaigns",
      validation: (Rule) => Rule.max(3),
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "sectionKey", title: "Section Key", type: "string" }),
            defineField({ name: "subtitle", title: "Subtitle", type: "string" }),
            defineField({ name: "title", title: "Title", type: "string" }),
            defineField({ name: "description", title: "Description", type: "text", rows: 4 }),
            defineField({
              name: "image",
              title: "Image",
              type: "image",
              options: { hotspot: true },
              description: "960×1200px recommended",
            }),
            defineField({
              name: "imagePosition",
              title: "Image Position",
              type: "string",
              options: { list: ["left", "right"] },
            }),
            defineField({ name: "ctaText", title: "CTA Text", type: "string" }),
            defineField({ name: "ctaLink", title: "CTA Link", type: "string" }),
          ],
          preview: {
            select: { title: "title", subtitle: "subtitle" },
          },
        },
      ],
    }),

    // ── Parallax Sections ──
    defineField({
      name: "parallaxSections",
      title: "Parallax Sections",
      type: "array",
      group: "parallax",
      validation: (Rule) => Rule.max(2),
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "sectionKey", title: "Section Key", type: "string" }),
            defineField({
              name: "image",
              title: "Image",
              type: "image",
              options: { hotspot: true },
              description: "1920×2160px recommended (extra height for parallax effect)",
            }),
            defineField({ name: "title", title: "Title", type: "string" }),
            defineField({ name: "subtitle", title: "Subtitle", type: "string" }),
          ],
          preview: {
            select: { title: "title", subtitle: "subtitle" },
          },
        },
      ],
    }),

    // ── New Arrivals ──
    defineField({
      name: "newArrivalsTitle",
      title: "New Arrivals Section Title",
      type: "string",
      group: "newArrivals",
    }),
    defineField({
      name: "newArrivalsSubtitle",
      title: "New Arrivals Subtitle",
      type: "string",
      group: "newArrivals",
    }),
    defineField({
      name: "newArrivalProducts",
      title: "New Arrival Products",
      type: "array",
      group: "newArrivals",
      of: [{ type: "reference", to: [{ type: "fashionProduct" }] }],
    }),

    // ── Lookbook Hero ──
    defineField({
      name: "lookbookHeroImage",
      title: "Lookbook Hero Image",
      type: "image",
      options: { hotspot: true },
      description: "1920×1080px recommended",
      group: "lookbook",
    }),
    defineField({
      name: "lookbookHeroTitle",
      title: "Lookbook Hero Title",
      type: "string",
      group: "lookbook",
    }),
    defineField({
      name: "lookbookHeroSubtitle",
      title: "Lookbook Hero Subtitle",
      type: "string",
      group: "lookbook",
    }),
    defineField({
      name: "lookbookHeroBody",
      title: "Lookbook Hero Body",
      type: "text",
      rows: 3,
      group: "lookbook",
    }),
  ],
  preview: {
    prepare() {
      return { title: "Homepage Settings" };
    },
  },
});
