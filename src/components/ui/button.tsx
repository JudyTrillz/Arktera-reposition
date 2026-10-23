"use client";

import Link from "next/link";
import clsx from "clsx";
import { useRef, type ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href: string;
  variant?: "solid" | "outline" | "ghost";
  tone?: "light" | "dark";
  className?: string;
  magnetic?: boolean;
};

const base =
  "group relative inline-flex min-h-13 items-center justify-center gap-2 rounded-full px-8 font-sans text-[0.95rem] font-medium transition-colors duration-300 ease-out";

const variants = {
  light: {
    solid: "bg-ink text-paper hover:bg-accent",
    outline: "border border-ink/25 text-ink hover:border-accent hover:text-accent",
    ghost: "px-0 min-h-0 text-ink hover:text-accent",
  },
  dark: {
    solid: "bg-paper text-ink hover:bg-accent hover:text-paper",
    outline: "border border-paper/30 text-paper hover:border-accent hover:text-accent",
    ghost: "px-0 min-h-0 text-paper hover:text-accent",
  },
} as const;

export function Button({
  children,
  href,
  variant = "solid",
  tone = "dark",
  className,
  magnetic = true,
}: ButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);

  function onMove(e: React.PointerEvent<HTMLAnchorElement>) {
    if (!magnetic || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const x = (e.clientX - r.left - r.width / 2) * 0.3;
    const y = (e.clientY - r.top - r.height / 2) * 0.3;
    ref.current.style.transform = `translate(${x}px, ${y}px)`;
  }
  function onLeave() {
    if (!ref.current) return;
    ref.current.style.transform = "translate(0, 0)";
  }

  const isExternal = href.startsWith("http") || href.startsWith("mailto:");
  const classes = clsx(base, variants[tone][variant], className, "transition-transform");

  if (isExternal) {
    return (
      <a href={href} className={classes} onPointerMove={onMove} onPointerLeave={onLeave} ref={ref}>
        {children}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className={classes}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      ref={ref}
      data-cursor-hover
    >
      {children}
    </Link>
  );
}

export function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      className={clsx(
        "h-4 w-4 shrink-0 transition-transform duration-300 ease-out group-hover:translate-x-1",
        className,
      )}
      aria-hidden="true"
    >
      <path
        d="M3 8h10M8.5 3.5 13 8l-4.5 4.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
