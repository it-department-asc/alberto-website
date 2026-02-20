import { sanityFetch } from "@/sanity/client";
import { urlFor } from "@/sanity/image";
import { ALL_BRANCHES_QUERY, BRANCHES_PAGE_QUERY, SITE_SETTINGS_QUERY } from "@/sanity/queries";
import type { SanityBranch, SanityBranchesPageSettings, SanitySiteSettings } from "@/sanity/types";
import BranchesClient from "./BranchesClient";

export default async function BranchesPage() {
  const [{ data: branches }, { data: pageSettings }, { data: siteSettings }] = await Promise.all([
    sanityFetch<SanityBranch[]>({ query: ALL_BRANCHES_QUERY }),
    sanityFetch<SanityBranchesPageSettings>({ query: BRANCHES_PAGE_QUERY }),
    sanityFetch<SanitySiteSettings>({ query: SITE_SETTINGS_QUERY }),
  ]);

  // Map Sanity branches to the shape expected by existing components
  const branchData = branches.map((b) => ({
    storeId: b.storeId,
    branchCode: b.branchCode,
    region: b.region,
    province: b.province,
    city: b.city,
    lessor: b.lessor,
    mallName: b.mallName,
    image: b.image ? urlFor(b.image).width(80).height(80).fit("crop").auto("format").url() : undefined,
    brands: (b.brands || []).filter(Boolean).map((brand) => brand.name),
    branchType: b.branchType as any,
    coordinates: b.coordinates,
  }));

  return (
    <BranchesClient
      branches={branchData}
      heroLabel={pageSettings?.heroLabel}
      heroTitle={pageSettings?.heroTitle}
      heroTitleMuted={pageSettings?.heroTitleMuted}
      heroDescription={pageSettings?.heroDescription}
      ctaTitle={pageSettings?.ctaTitle}
      ctaText={pageSettings?.ctaText}
      phone={siteSettings?.phone}
      storeHours={siteSettings?.storeHours}
      storeHoursNote={siteSettings?.storeHoursNote}
    />
  );
}
