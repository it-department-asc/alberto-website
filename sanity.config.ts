"use client";

/**
 * This configuration is used to for the Sanity Studio that's mounted on the
 * `/app/studio/[[...tool]]/page.tsx` route
 */

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./sanity/schemas";

// Custom desk structure
const structure = (S: any) =>
  S.list()
    .title("Content")
    .items([
      // Global Settings
      S.listItem()
        .title("Site Settings")
        .id("siteSettings")
        .child(
          S.document().schemaType("siteSettings").documentId("siteSettings")
        ),
      S.divider(),
      // Page Settings
      S.listItem()
        .title("Homepage")
        .id("homepageSettings")
        .child(
          S.document()
            .schemaType("homepageSettings")
            .documentId("homepageSettings")
        ),
      S.listItem()
        .title("About Page")
        .id("aboutPageSettings")
        .child(
          S.document()
            .schemaType("aboutPageSettings")
            .documentId("aboutPageSettings")
        ),
      S.listItem()
        .title("Products Page")
        .id("productsPageSettings")
        .child(
          S.document()
            .schemaType("productsPageSettings")
            .documentId("productsPageSettings")
        ),
      S.listItem()
        .title("Contact Page")
        .id("contactPageSettings")
        .child(
          S.document()
            .schemaType("contactPageSettings")
            .documentId("contactPageSettings")
        ),
      S.listItem()
        .title("Branches Page")
        .id("branchesPageSettings")
        .child(
          S.document()
            .schemaType("branchesPageSettings")
            .documentId("branchesPageSettings")
        ),
      S.listItem()
        .title("Brands Page")
        .id("brandsPageSettings")
        .child(
          S.document()
            .schemaType("brandsPageSettings")
            .documentId("brandsPageSettings")
        ),
      S.divider(),
      // Document lists
      S.documentTypeListItem("brand").title("Brands"),
      S.documentTypeListItem("fashionProduct").title("Products"),
      S.documentTypeListItem("lookbookItem").title("Lookbook"),
      S.documentTypeListItem("branch").title("Branches"),
    ]);

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "t4wjq9fn";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

export default defineConfig({
  name: "alberto-website",
  title: "Alberto Shoes CMS",

  projectId,
  dataset,

  plugins: [
    structureTool({ structure }),
    visionTool({ defaultApiVersion: "2024-01-01" }),
  ],

  schema: {
    types: schemaTypes,
    // Filter out singleton types from the global "New document" menu
    templates: (templates) =>
      templates.filter(
        ({ schemaType }) =>
          ![
            "homepageSettings",
            "siteSettings",
            "aboutPageSettings",
            "productsPageSettings",
            "contactPageSettings",
            "branchesPageSettings",
            "brandsPageSettings",
          ].includes(schemaType)
      ),
  },
});
