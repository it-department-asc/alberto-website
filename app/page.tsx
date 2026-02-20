import { sanityFetch } from "@/sanity/client";
import { urlFor } from "@/sanity/image";
import {
  HOMEPAGE_QUERY,
  BRAND_SPOTLIGHT_QUERY,
  BRAND_LOGO_STRIP_QUERY,
} from "@/sanity/queries";
import type {
  HomepageSettings,
  BrandSpotlight,
  BrandLogo,
} from "@/sanity/types";
import HomepageClient from "./HomepageClient";

export default async function HomePage() {
  const [{ data: homepage }, { data: spotlightBrands }, { data: logoBrands }] = await Promise.all([
    sanityFetch<HomepageSettings>({ query: HOMEPAGE_QUERY }),
    sanityFetch<BrandSpotlight[]>({ query: BRAND_SPOTLIGHT_QUERY }),
    sanityFetch<BrandLogo[]>({ query: BRAND_LOGO_STRIP_QUERY }),
  ]);

  // Resolve hero image
  const heroImage = homepage?.heroImage
    ? urlFor(homepage.heroImage).width(1920).auto("format").url()
    : undefined;

  // Resolve campaign section images
  const campaignSections = (homepage?.campaignSections || []).map((cs) => ({
    ...cs,
    image: cs.image ? urlFor(cs.image).width(1200).auto("format").url() : "",
  }));

  // Resolve parallax section images
  const parallaxSections = (homepage?.parallaxSections || []).map((ps) => ({
    ...ps,
    image: ps.image ? urlFor(ps.image).width(1920).auto("format").url() : "",
  }));

  // Resolve new arrival products
  const newArrivals = (homepage?.newArrivalProducts || []).map((p) => ({
    id: p._id || p.id?.current || "",
    name: p.name,
    brand: p.brand?.name || "ALBERTO",
    tagline: p.tagline || "",
    description: p.description || "",
    materials: p.materials || [],
    highlights: p.highlights || [],
    colors: p.colors || [],
    images: (p.images || []).map((img: any) =>
      urlFor(img).width(800).height(1067).fit("crop").auto("format").url()
    ),
    moodImage: p.moodImage
      ? urlFor(p.moodImage).width(1920).auto("format").url()
      : undefined,
  }));

  // Resolve brand spotlight images
  const spotlightData = spotlightBrands.map((b) => ({
    id: b._id,
    name: b.name,
    slug: b.slug.current,
    tagline: b.spotlightTagline || "",
    story: b.spotlightStory || "",
    image: b.spotlightImage
      ? urlFor(b.spotlightImage).width(1200).height(1600).fit("crop").auto("format").url()
      : "",
  }));

  // Resolve brand logo images
  const logoData = logoBrands.map((b) => ({
    name: b.name,
    slug: b.slug.current,
    logo: b.logo ? urlFor(b.logo).height(80).auto("format").url() : undefined,
  }));

  return (
    <HomepageClient
      heroImage={heroImage}
      heroTagline={homepage?.heroTagline}
      heroHeadline={homepage?.heroHeadline}
      heroHeadlineItalic={homepage?.heroHeadlineItalic}
      heroSubtext={homepage?.heroSubtext}
      heroCTAText={homepage?.heroCTAText}
      heroCTALink={homepage?.heroCTALink}
      heroSideText={homepage?.heroSideText}
      campaignSections={campaignSections}
      parallaxSections={parallaxSections}
      newArrivals={newArrivals}
      spotlightBrands={spotlightData}
      logoBrands={logoData}
    />
  );
}
