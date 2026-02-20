import { defineType, defineField } from "sanity";

export default defineType({
  name: "branchesPageSettings",
  title: "Branches Page",
  type: "document",
  groups: [
    { name: "hero", title: "Hero Section" },
    { name: "cta", title: "CTA Section" },
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

    // ── CTA ──
    defineField({
      name: "ctaTitle",
      title: "CTA Section Title",
      type: "string",
      group: "cta",
    }),
    defineField({
      name: "ctaText",
      title: "CTA Section Text",
      type: "string",
      group: "cta",
    }),
  ],
  preview: {
    prepare() {
      return { title: "Branches Page" };
    },
  },
});
