import { defineType, defineField } from "sanity";

export default defineType({
  name: "aboutPageSettings",
  title: "About Page",
  type: "document",
  groups: [
    { name: "hero", title: "Hero Section" },
    { name: "story", title: "Company Story" },
    { name: "missionVision", title: "Mission & Vision" },
    { name: "values", title: "Core Values" },
    { name: "milestones", title: "Milestones" },
    { name: "commitment", title: "Commitment Section" },
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

    // ── Company Story ──
    defineField({
      name: "storyTitle",
      title: "Story Section Title",
      type: "string",
      group: "story",
    }),
    defineField({
      name: "storyTitleMuted",
      title: "Story Section Title (Muted)",
      type: "string",
      group: "story",
    }),
    defineField({
      name: "companyDescription",
      title: "Company Description",
      type: "text",
      rows: 6,
      description: "Separate paragraphs with double newlines",
      group: "story",
    }),

    // ── Mission & Vision ──
    defineField({
      name: "missionStatement",
      title: "Mission Statement",
      type: "text",
      rows: 5,
      group: "missionVision",
    }),
    defineField({
      name: "visionStatement",
      title: "Vision Statement",
      type: "text",
      rows: 5,
      group: "missionVision",
    }),

    // ── Core Values ──
    defineField({
      name: "values",
      title: "Core Values",
      type: "array",
      group: "values",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "icon",
              title: "Icon",
              type: "string",
              description: "Lucide icon name",
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

    // ── Milestones ──
    defineField({
      name: "milestones",
      title: "Milestones",
      type: "array",
      group: "milestones",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "year", title: "Year", type: "string" }),
            defineField({ name: "event", title: "Event", type: "string" }),
          ],
          preview: {
            select: { title: "year", subtitle: "event" },
          },
        },
      ],
    }),

    // ── Commitment Section ──
    defineField({
      name: "commitmentTitle",
      title: "Section Title",
      type: "string",
      group: "commitment",
    }),
    defineField({
      name: "commitmentText",
      title: "Paragraph 1",
      type: "text",
      rows: 4,
      group: "commitment",
    }),
    defineField({
      name: "commitmentText2",
      title: "Paragraph 2",
      type: "text",
      rows: 4,
      group: "commitment",
    }),
    defineField({
      name: "stats",
      title: "Stats",
      type: "array",
      group: "commitment",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "value", title: "Value", type: "string" }),
            defineField({ name: "label", title: "Label", type: "string" }),
          ],
          preview: {
            select: { title: "value", subtitle: "label" },
          },
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: "About Page" };
    },
  },
});
