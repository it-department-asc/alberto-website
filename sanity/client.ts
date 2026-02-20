import { createClient } from "next-sanity";
import { defineLive } from "next-sanity/live";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: "2024-01-01",
  useCdn: true,
  token: process.env.SANITY_API_READ_TOKEN,
});

// Live content client — useCdn must be false for real-time updates
const liveClient = client.withConfig({
  useCdn: false,
  token: process.env.SANITY_API_READ_TOKEN,
});

const { sanityFetch: _sanityFetch, SanityLive } = defineLive({
  client: liveClient,
});

export { SanityLive };

// Typed wrapper so pages can pass an explicit return type: sanityFetch<MyType>({ query })
export async function sanityFetch<T>({
  query,
  params,
}: {
  query: string;
  params?: Record<string, unknown>;
}): Promise<{ data: T }> {
  const result = await _sanityFetch({ query, params });
  return { data: result.data as T };
}
