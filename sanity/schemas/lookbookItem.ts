import { defineType, defineField } from "sanity";

export default defineType({
  name: "lookbookItem",
  title: "Lookbook Item",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: 'e.g. "Professional Elegance"',
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: ["Office Look", "Casual Look", "Travel Look", "Evening Look"],
      },
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      description: "800×1067px recommended (grid thumbnail)",
    }),
    defineField({
      name: "product",
      title: "Related Product",
      type: "reference",
      to: [{ type: "fashionProduct" }],
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Controls grid position",
    }),
    defineField({
      name: "isActive",
      title: "Active",
      type: "boolean",
      initialValue: true,
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
      title: "title",
      subtitle: "category",
      media: "image",
    },
  },
});
