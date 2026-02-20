import { defineType, defineField } from "sanity";

export default defineType({
  name: "productsPageSettings",
  title: "Products Page",
  type: "document",
  fields: [
    defineField({
      name: "heroLabel",
      title: "Hero Label",
      type: "string",
    }),
    defineField({
      name: "heroTitle",
      title: "Hero Title",
      type: "string",
    }),
    defineField({
      name: "heroTitleMuted",
      title: "Hero Title (Muted)",
      type: "string",
    }),
    defineField({
      name: "heroDescription",
      title: "Hero Description",
      type: "text",
      rows: 3,
    }),
  ],
  preview: {
    prepare() {
      return { title: "Products Page" };
    },
  },
});
