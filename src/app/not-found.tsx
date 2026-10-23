import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { NotFoundHero } from "@/components/sections/not-found/not-found-hero";

export const metadata: Metadata = {
  title: "Page Not Found",
  description:
    "The page you're looking for may have moved, been renamed, or no longer exists.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <NotFoundHero />
      </main>
      <SiteFooter />
    </>
  );
}
