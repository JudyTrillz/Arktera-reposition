import { pageMetadata } from "@/lib/seo";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ContactHero } from "@/components/sections/contact/hero";
import { ContactForm } from "@/components/sections/contact/contact-form";

export const metadata = pageMetadata({
  title: "Contact",
  description:
    "Have a question about Arktera, our approach, or how we work? Send us a message and we'll respond within one business day.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <ContactHero />
        <ContactForm />
      </main>
      <SiteFooter />
    </>
  );
}
