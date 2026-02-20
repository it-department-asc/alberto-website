import { sanityFetch } from "@/sanity/client";
import { ABOUT_PAGE_QUERY } from "@/sanity/queries";
import type { SanityAboutPageSettings } from "@/sanity/types";
import AboutClient from "./AboutClient";

export default async function AboutPage() {
  const { data: settings } = await sanityFetch<SanityAboutPageSettings>({ query: ABOUT_PAGE_QUERY });

  return (
    <AboutClient
      heroLabel={settings?.heroLabel}
      heroTitle={settings?.heroTitle}
      heroTitleMuted={settings?.heroTitleMuted}
      heroDescription={settings?.heroDescription}
      storyTitle={settings?.storyTitle}
      storyTitleMuted={settings?.storyTitleMuted}
      companyDescription={settings?.companyDescription}
      missionStatement={settings?.missionStatement}
      visionStatement={settings?.visionStatement}
      milestones={settings?.milestones || []}
      values={settings?.values || []}
      commitmentTitle={settings?.commitmentTitle}
      commitmentText={settings?.commitmentText}
      commitmentText2={settings?.commitmentText2}
      aboutStats={settings?.stats || []}
    />
  );
}
