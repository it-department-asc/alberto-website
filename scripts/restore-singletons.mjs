import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "t4wjq9fn",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
  token: process.env.SANITY_API_WRITE_TOKEN,
});

async function restore() {
  // Create homepageSettings singleton
  await client.createOrReplace({
    _id: "homepageSettings",
    _type: "homepageSettings",
  });
  console.log("✓ homepageSettings restored");

  // Create siteSettings singleton
  await client.createOrReplace({
    _id: "siteSettings",
    _type: "siteSettings",
  });
  console.log("✓ siteSettings restored");

  console.log("\nDone! Refresh your Studio.");
}

restore().catch((err) => {
  console.error("Error:", err.message);
  process.exit(1);
});
