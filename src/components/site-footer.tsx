import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { LogoMark } from "@/components/ui/logo-mark";
import { HomeLink } from "@/components/ui/home-link";
import { ArrowIcon } from "@/components/ui/button";
import { LinkedInIcon, XIcon, FacebookIcon, InstagramIcon, TikTokIcon } from "@/components/ui/icons";
import { footerColumns, legalLinks, siteConfig, socialLinks, assessmentHref } from "@/lib/site-config";

const SOCIAL_ICONS = {
  linkedin: LinkedInIcon,
  x: XIcon,
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  tiktok: TikTokIcon,
} as const;

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-paper/10 bg-ink text-paper">
      <div className="container-arktera py-20 sm:py-28">
        <div className="flex flex-col gap-6 border-b border-paper/10 pb-16 sm:flex-row sm:items-end sm:justify-between">
          <Link href={assessmentHref} className="group block" data-cursor-hover>
            <span className="font-display text-[clamp(2.4rem,6vw,5.5rem)] leading-[0.95] tracking-tight text-paper transition-colors group-hover:text-accent">
              Let&apos;s talk revenue.
            </span>
          </Link>
          <span className="flex shrink-0 items-center gap-2 pb-2 text-paper/50 transition-colors group-hover:text-accent">
            <ArrowIcon className="h-6 w-6 -rotate-45" />
          </span>
        </div>

        <div className="mt-16 grid gap-14 lg:grid-cols-[1.3fr_2fr]">
          <div>
            <HomeLink className="flex items-center gap-2.5">
              <LogoMark />
              <span className="flex flex-col leading-none">
                <span className="font-display text-xl tracking-tight">
                  Arktera
                </span>
                <span className="mt-0.5 font-sans text-[0.62rem] font-semibold uppercase tracking-[0.26em] text-gold">
                  Systems
                </span>
              </span>
            </HomeLink>
            <p className="mt-5 max-w-xs text-[0.95rem] leading-relaxed text-paper/55">
              {siteConfig.tagline}. We help service businesses find and fix
              the problems holding back their revenue.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
            {footerColumns.map((col) => (
              <div key={col.heading}>
                <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-paper/40">
                  {col.heading}
                </h3>
                <ul className="mt-4 flex flex-col gap-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      {link.href === "/" ? (
                        <HomeLink className="text-[0.92rem] text-paper/70 transition-colors hover:text-accent">
                          {link.label}
                        </HomeLink>
                      ) : (
                        <Link
                          href={link.href}
                          className="text-[0.92rem] text-paper/70 transition-colors hover:text-accent"
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div>
              <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-paper/40">
                Contact
              </h3>
              <ul className="mt-4 flex flex-col gap-3">
                <li>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    data-cursor-hover
                    className="flex items-center gap-2.5 text-[0.92rem] text-paper/70 transition-colors hover:text-accent"
                  >
                    <Mail className="h-4 w-4 shrink-0" strokeWidth={1.75} aria-hidden="true" />
                    {siteConfig.email}
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${siteConfig.phone}`}
                    data-cursor-hover
                    className="flex items-center gap-2.5 text-[0.92rem] text-paper/70 transition-colors hover:text-accent"
                  >
                    <Phone className="h-4 w-4 shrink-0" strokeWidth={1.75} aria-hidden="true" />
                    {siteConfig.phoneDisplay}
                  </a>
                </li>
                <li className="flex items-center gap-2.5 text-[0.92rem] text-paper/70">
                  <MapPin className="h-4 w-4 shrink-0" strokeWidth={1.75} aria-hidden="true" />
                  {siteConfig.location}
                </li>
              </ul>

              <ul className="mt-6 flex items-center gap-4">
                {socialLinks.map((social) => {
                  const Icon = SOCIAL_ICONS[social.icon];
                  return (
                    <li key={social.label}>
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        data-cursor-hover
                        className="block text-paper/60 transition-colors hover:text-accent"
                      >
                        <Icon className="h-[1.35rem] w-[1.35rem]" />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-paper/10 pt-6 text-[0.82rem] text-paper/40 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {year} Arktera Systems. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {legalLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-paper">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
