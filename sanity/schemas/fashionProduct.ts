import { defineType, defineField } from "sanity";

export default defineType({
  name: "fashionProduct",
  title: "Fashion Product",
  type: "document",
  fields: [
    defineField({
      name: "id",
      title: "Product ID",
      type: "slug",
      description: "Unique identifier for the product",
    }),
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "brand",
      title: "Brand",
      type: "reference",
      to: [{ type: "brand" }],
    }),
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 5,
    }),
    defineField({
      name: "materials",
      title: "Materials",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "highlights",
      title: "Highlights",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "colors",
      title: "Colors",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "name", title: "Color Name", type: "string" }),
            defineField({ name: "hex", title: "Hex Code", type: "string" }),
          ],
          preview: {
            select: { title: "name", subtitle: "hex" },
          },
        },
      ],
    }),
    defineField({
      name: "images",
      title: "Images",
      type: "array",
      of: [
        {
          type: "image",
          options: { hotspot: true },
        },
      ],
      description: "800×1067px recommended per image",
    }),
    defineField({
      name: "moodImage",
      title: "Mood Image",
      type: "image",
      options: { hotspot: true },
      description: "Optional – used in modal hero section",
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Women", value: "women" },
          { title: "Men", value: "men" },
          { title: "Bags", value: "bags" },
        ],
      },
    }),
    defineField({
      name: "subcategory",
      title: "Subcategory",
      type: "string",
      options: {
        list: [
          "Dress Sandals",
          "Wedges",
          "Pumps",
          "Men's Formal Shoes",
          "Loafers",
          "Bags",
        ],
      },
    }),
    defineField({
      name: "isFeatured",
      title: "Featured (New Arrivals)",
      type: "boolean",
      initialValue: false,
      description: "If true, appears in the NewArrivalsCarousel on the homepage",
    }),
    defineField({
      name: "isActive",
      title: "Active",
      type: "boolean",
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "brand.name",
      media: "images.0",
    },
  },
});
