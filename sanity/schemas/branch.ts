import { defineType, defineField } from "sanity";

export default defineType({
  name: "branch",
  title: "Branch",
  type: "document",
  fields: [
    defineField({
      name: "storeId",
      title: "Store ID",
      type: "string",
      validation: (Rule) => Rule.required(),
      description: 'e.g. "A0052"',
    }),
    defineField({
      name: "branchCode",
      title: "Branch Code",
      type: "string",
      validation: (Rule) => Rule.required(),
      description: 'e.g. "A3MEGAMALL"',
    }),
    defineField({
      name: "region",
      title: "Region",
      type: "string",
      options: {
        list: [
          "NCR",
          "CALABARZON",
          "Central Luzon",
          "Ilocos",
          "Cagayan Valley",
          "Bicol",
          "Central Visayas",
          "Western Visayas",
          "Eastern Visayas",
          "Northern Mindanao",
          "Caraga",
          "Davao",
          "Zamboanga Peninsula",
          "SOCCSKSARGEN",
        ],
      },
    }),
    defineField({
      name: "province",
      title: "Province",
      type: "string",
    }),
    defineField({
      name: "city",
      title: "City",
      type: "string",
    }),
    defineField({
      name: "lessor",
      title: "Lessor",
      type: "string",
      options: {
        list: [
          "SM",
          "Ayala",
          "Robinsons",
          "KCC",
          "Filinvest",
          "Greenhills",
          "Fishermall",
          "Ali Mall",
          "Sta. Lucia",
          "Limketkai",
          "ICM",
        ],
      },
    }),
    defineField({
      name: "mallName",
      title: "Mall Name",
      type: "string",
    }),
    defineField({
      name: "image",
      title: "Branch Image",
      type: "image",
      options: { hotspot: true },
      description: "Display image for this branch (shown in branch card)",
    }),
    defineField({
      name: "brands",
      title: "Brands",
      type: "array",
      of: [{ type: "reference", to: [{ type: "brand" }] }],
      description: "Select which brands are available at this branch",
    }),
    defineField({
      name: "branchType",
      title: "Branch Type",
      type: "string",
      options: {
        list: ["STAND ALONE", "HYBRID"],
      },
    }),
    defineField({
      name: "coordinates",
      title: "Coordinates",
      type: "object",
      fields: [
        defineField({ name: "lat", title: "Latitude", type: "number" }),
        defineField({ name: "lng", title: "Longitude", type: "number" }),
      ],
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
      title: "mallName",
      subtitle: "region",
    },
    prepare({ title, subtitle }) {
      return {
        title: title || "Untitled Branch",
        subtitle: subtitle || "",
      };
    },
  },
});
