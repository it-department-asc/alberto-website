import { defineType, defineField } from "sanity";

export default defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  // Singleton: managed via desk structure — global contact & footer info only
  fields: [
    defineField({
      name: "phone",
      title: "Phone",
      type: "string",
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
    }),
    defineField({
      name: "address",
      title: "Address",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "storeHours",
      title: "Store Hours",
      type: "string",
    }),
    defineField({
      name: "storeHoursNote",
      title: "Store Hours Note",
      type: "string",
      description: 'e.g. "Open daily"',
    }),
    defineField({
      name: "phoneAvailability",
      title: "Phone Availability",
      type: "string",
      description: 'e.g. "Mon-Sat 9AM-6PM"',
    }),
    defineField({
      name: "footerDescription",
      title: "Footer Description",
      type: "text",
      rows: 3,
      description: "Short description shown in the footer",
    }),
    defineField({
      name: "faqs",
      title: "FAQs",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "question", title: "Question", type: "string" }),
            defineField({ name: "answer", title: "Answer", type: "text", rows: 3 }),
          ],
          preview: {
            select: { title: "question" },
          },
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: "Site Settings" };
    },
  },
});
