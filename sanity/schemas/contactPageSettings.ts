import { defineType, defineField } from "sanity";

export default defineType({
  name: "contactPageSettings",
  title: "Contact Page",
  type: "document",
  groups: [
    { name: "hero", title: "Hero Section" },
    { name: "map", title: "Map Section" },
  ],
  fields: [
    // ── Hero ──
    defineField({
      name: "heroLabel",
      title: "Hero Label",
      type: "string",
      group: "hero",
    }),
    defineField({
      name: "heroTitle",
      title: "Hero Title",
      type: "string",
      group: "hero",
    }),
    defineField({
      name: "heroTitleMuted",
      title: "Hero Title (Muted)",
      type: "string",
      group: "hero",
    }),
    defineField({
      name: "heroDescription",
      title: "Hero Description",
      type: "text",
      rows: 3,
      group: "hero",
    }),

    // ── Map ──
    defineField({
      name: "mapTitle",
      title: "Map Section Title",
      type: "string",
      group: "map",
    }),
    defineField({
      name: "mapSubtitle",
      title: "Map Section Subtitle",
      type: "string",
      group: "map",
    }),
    defineField({
      name: "mapAddress",
      title: "Map Address Text",
      type: "text",
      rows: 2,
      group: "map",
    }),
    defineField({
      name: "mapLink",
      title: "Google Maps Link",
      type: "url",
      group: "map",
    }),
  ],
  preview: {
    prepare() {
      return { title: "Contact Page" };
    },
  },
});
