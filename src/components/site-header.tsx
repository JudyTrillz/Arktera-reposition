"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { LogoMark } from "@/components/ui/logo-mark";
import { HomeLink } from "@/components/ui/home-link";
import { Button } from "@/components/ui/button";
import { navLinks, assessmentHref } from "@/lib/site-config";

function isLinkActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);
  const pathname = usePathname();

  useEffect(() => {
    lastY.current = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      const goingDown = y > lastY.current + 4;
      const goingUp = y < lastY.current - 4;
      if (y < 80) setHidden(false);
      else if (goingDown) setHidden(true);
      else if (goingUp) setHidden(false);
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-transform duration-500 ease-out ${
          hidden && !open ? "-translate-y-full" : "translate-y-0"
        }`}
      >
      <div className="border-b border-paper/10 bg-ink/70 backdrop-blur-xl">
        <div className="container-arktera flex h-20 items-center justify-between">
          <HomeLink className="flex items-center gap-2.5 text-paper" data-cursor-hover>
            <LogoMark />
            <span className="flex flex-col leading-none">
              <span className="font-display text-[1.15rem] tracking-tight">
                Arktera
              </span>
              <span className="mt-0.5 font-sans text-[0.58rem] font-semibold uppercase tracking-[0.26em] text-gold">
                Systems
              </span>
            </span>
          </HomeLink>

          <nav className="hidden items-center gap-9 lg:flex" aria-label="Primary">
            {navLinks.map((link) => {
              const active = isLinkActive(pathname, link.href);
              const linkClassName = clsx(
                "relative py-1.5 font-sans text-[0.9rem] font-medium tracking-wide transition-colors",
                active ? "text-paper" : "text-paper/70 hover:text-paper",
              );
              const underline = (
                <span
                  aria-hidden="true"
                  className={clsx(
                    "absolute inset-x-0 -bottom-1 h-px origin-center bg-accent transition-transform duration-300 ease-out",
                    active ? "scale-x-100" : "scale-x-0",
                  )}
                />
              );
              if (link.href === "/") {
                return (
                  <HomeLink
                    key={link.href}
                    data-cursor-hover
                    aria-current={active ? "page" : undefined}
                    className={linkClassName}
                  >
                    {link.label}
                    {underline}
                  </HomeLink>
                );
              }
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  data-cursor-hover
                  aria-current={active ? "page" : undefined}
                  className={linkClassName}
                >
                  {link.label}
                  {underline}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:block">
            <Button href={assessmentHref} tone="dark" variant="outline" className="min-h-11 px-6 text-[0.85rem]">
              Free Assessment
            </Button>
          </div>

          <button
            type="button"
            className="relative z-10 flex h-10 w-10 items-center justify-center text-paper lg:hidden"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            data-cursor-hover
          >
            <span className="relative block h-4 w-5">
              <span
                className={`absolute left-0 top-0 h-px w-5 bg-current transition-transform duration-300 ${
                  open ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[7px] h-px w-5 bg-current transition-opacity duration-200 ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 top-[14px] h-px w-5 bg-current transition-transform duration-300 ${
                  open ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>
      </header>

      {/* Rendered as a sibling of <header>, not a descendant: the header's
          own transform (for hide-on-scroll) creates a new containing block
          for `position: fixed` children, which would break this panel's
          viewport-relative fixed positioning if nested inside it. */}
      <div
        inert={!open}
        className={`fixed inset-0 top-20 z-40 bg-ink transition-opacity duration-300 lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <nav className="container-arktera flex flex-col gap-1 pt-10" aria-label="Mobile">
          {navLinks.map((link, i) => {
            const active = isLinkActive(pathname, link.href);
            const mobileClassName = clsx(
              "border-b border-paper/10 py-5 font-display text-3xl transition-all duration-500",
              active ? "text-accent" : "text-paper",
              open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
            );
            if (link.href === "/") {
              return (
                <HomeLink
                  key={link.href}
                  onClick={() => setOpen(false)}
                  aria-current={active ? "page" : undefined}
                  style={{ transitionDelay: open ? `${i * 50}ms` : "0ms" }}
                  className={mobileClassName}
                >
                  {link.label}
                </HomeLink>
              );
            }
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                aria-current={active ? "page" : undefined}
                style={{ transitionDelay: open ? `${i * 50}ms` : "0ms" }}
                className={mobileClassName}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="mt-8">
            <Button href={assessmentHref} tone="light" variant="solid" className="w-full">
              Get a Free Assessment
            </Button>
          </div>
        </nav>
      </div>
    </>
  );
}
