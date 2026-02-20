import { sanityFetch } from "@/sanity/client";
import { SITE_SETTINGS_QUERY, CONTACT_PAGE_QUERY } from "@/sanity/queries";
import type { SanitySiteSettings, SanityContactPageSettings } from "@/sanity/types";
import ContactClient from "./ContactClient";

export default async function ContactPage() {
  const [{ data: settings }, { data: pageSettings }] = await Promise.all([
    sanityFetch<SanitySiteSettings>({ query: SITE_SETTINGS_QUERY }),
    sanityFetch<SanityContactPageSettings>({ query: CONTACT_PAGE_QUERY }),
  ]);

  const contactInfo = [
    {
      iconName: "MapPin" as const,
      title: "Visit Us",
      content: settings?.address || "",
      subtext: "Find a store near you",
    },
    {
      iconName: "Phone" as const,
      title: "Call Us",
      content: settings?.phone || "",
      subtext: settings?.phoneAvailability || "",
    },
    {
      iconName: "Mail" as const,
      title: "Email Us",
      content: settings?.email || "",
      subtext: "We'll respond within 24hrs",
    },
    {
      iconName: "Clock" as const,
      title: "Store Hours",
      content: settings?.storeHours || "",
      subtext: settings?.storeHoursNote || "",
    },
  ];

  return (
    <ContactClient
      contactInfo={contactInfo}
      phone={settings?.phone || ""}
      phoneAvailability={settings?.phoneAvailability || ""}
      faqs={settings?.faqs || []}
      heroLabel={pageSettings?.heroLabel}
      heroTitle={pageSettings?.heroTitle}
      heroTitleMuted={pageSettings?.heroTitleMuted}
      heroDescription={pageSettings?.heroDescription}
      mapTitle={pageSettings?.mapTitle}
      mapSubtitle={pageSettings?.mapSubtitle}
      mapAddress={pageSettings?.mapAddress}
      mapLink={pageSettings?.mapLink}
    />
  );
}
