"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentProps, MouseEvent } from "react";

type HomeLinkProps = Omit<ComponentProps<typeof Link>, "href">;

// A normal `<Link href="/">` is a no-op when you're already on "/" — there's
// no route change for Next to reset scroll position on, so the page just
// sits wherever it was. This is for the handful of links that always mean
// "go to the top of the homepage" (the logo, nav/footer "Home" links): when
// already on "/", it smooth-scrolls to top itself instead of doing nothing.
export function HomeLink({ onClick, ...props }: HomeLinkProps) {
  const pathname = usePathname();

  function handleClick(e: MouseEvent<HTMLAnchorElement>) {
    onClick?.(e);
    if (pathname === "/" && !e.defaultPrevented) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  return <Link href="/" onClick={handleClick} {...props} />;
}
