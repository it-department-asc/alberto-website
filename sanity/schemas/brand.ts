import { defineType, defineField } from "sanity";

export default defineType({
  name: "brand",
  title: "Brand",
  type: "document",
  fields: [
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
    }),
    defineField({
      name: "heroImage",
      title: "Hero Image",
      type: "image",
      options: { hotspot: true },
      description: "1920×1080px recommended",
    }),
    defineField({
      name: "about",
      title: "About",
      type: "text",
      rows: 6,
      description: "Multiline – separate paragraphs with blank lines",
    }),
    defineField({
      name: "story",
      title: "Story",
      type: "text",
      rows: 6,
    }),
    defineField({
      name: "philosophy",
      title: "Philosophy",
      type: "text",
      rows: 6,
    }),
    defineField({
      name: "lifestyleDescription",
      title: "Lifestyle Description",
      type: "text",
      rows: 6,
    }),
    defineField({
      name: "lifestyleImage",
      title: "Lifestyle Image",
      type: "image",
      options: { hotspot: true },
      description: "960×1200px recommended",
    }),
    defineField({
      name: "spotlightImage",
      title: "Spotlight Image",
      type: "image",
      options: { hotspot: true },
      description: "800×1067px – used in BrandSpotlightCarousel (aspect-[4/5])",
    }),
    defineField({
      name: "spotlightTagline",
      title: "Spotlight Tagline",
      type: "string",
    }),
    defineField({
      name: "spotlightStory",
      title: "Spotlight Story",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      description: "200×80px transparent PNG – used in BrandLogoStrip",
    }),
    defineField({
      name: "features",
      title: "Features",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "icon",
              title: "Icon",
              type: "string",
              description: 'Lucide icon name e.g. "Wind", "Crown"',
            }),
            defineField({ name: "title", title: "Title", type: "string" }),
            defineField({ name: "description", title: "Description", type: "text", rows: 3 }),
          ],
          preview: {
            select: { title: "title", subtitle: "icon" },
          },
        },
      ],
    }),
    defineField({
      name: "products",
      title: "Products (brand showcase)",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "id", title: "ID", type: "string" }),
            defineField({ name: "name", title: "Name", type: "string" }),
            defineField({ name: "description", title: "Description", type: "text", rows: 3 }),
            defineField({
              name: "image",
              title: "Image",
              type: "image",
              options: { hotspot: true },
              description: "800×1067px recommended",
            }),
            defineField({ name: "category", title: "Category", type: "string" }),
          ],
          preview: {
            select: { title: "name", subtitle: "category", media: "image" },
          },
        },
      ],
    }),
    defineField({
      name: "isActive",
      title: "Active",
      type: "boolean",
      initialValue: true,
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Controls display order in navbar, logo strip, and carousel",
    }),
  ],
  orderings: [
    {
      title: "Display Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "tagline",
      media: "heroImage",
    },
  },
});
