import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { sanityFetch, SanityLive } from "@/sanity/client";
import { NAV_BRANDS_QUERY, SITE_SETTINGS_QUERY } from "@/sanity/queries";
import type { SanitySiteSettings } from "@/sanity/types";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alberto Shoes Corporation | Premium Footwear & Bags",
  description: "Step into style with Alberto Shoes Corporation. Discover premium quality footwear and bags across 80 branches nationwide in the Philippines. From elegant dress sandals to sophisticated formal shoes.",
  keywords: ["Alberto Shoes", "footwear", "bags", "Philippines", "shoes", "sandals", "pumps", "loafers"],
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Fetch brands for Navbar dropdown — fail gracefully if Sanity is unavailable
  let navBrands: Array<{ href: string; label: string; tagline: string }> = [];
  let footerData: { description?: string; phone?: string; email?: string; address?: string } = {};
  try {
    const [{ data: sanityBrands }, { data: settings }] = await Promise.all([
      sanityFetch<Array<{ _id: string; name: string; slug: { current: string }; tagline?: string; spotlightTagline?: string }>>({ query: NAV_BRANDS_QUERY }),
      sanityFetch<SanitySiteSettings>({ query: SITE_SETTINGS_QUERY }),
    ]);
    navBrands = (sanityBrands || []).map((b) => ({
      href: `/brands/${b.slug.current}`,
      label: b.name,
      tagline: b.spotlightTagline || b.tagline || "",
    }));
    footerData = {
      description: settings?.footerDescription,
      phone: settings?.phone,
      email: settings?.email,
      address: settings?.address,
    };
  } catch {
    // Fall back to empty data
  }
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <Navbar brands={navBrands} />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer
          description={footerData.description}
          phone={footerData.phone}
          email={footerData.email}
          address={footerData.address}
        />
        <SanityLive />
      </body>
    </html>
  );
}
