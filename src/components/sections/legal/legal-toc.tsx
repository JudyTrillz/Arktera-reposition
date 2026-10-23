"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";
import type { LegalSection } from "@/lib/legal";

export function LegalToc({ sections }: { sections: LegalSection[] }) {
  const [active, setActive] = useState<string>(sections[0]?.id ?? "");

  useEffect(() => {
    const elements = sections
      .map((section) => document.getElementById(section.id))
      .filter((el): el is HTMLElement => el !== null);
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-15% 0px -70% 0px", threshold: 0 },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sections]);

  return (
    <nav aria-label="Table of contents" className="hidden lg:sticky lg:top-28 lg:block">
      <p className="font-sans text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-accent">
        On This Page
      </p>
      <ul className="mt-4 flex max-h-[60vh] flex-col gap-0.5 overflow-y-auto border-l border-ink/10">
        {sections.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              data-cursor-hover
              className={clsx(
                "block border-l-2 py-1.5 pl-4 text-[0.86rem] leading-snug transition-colors",
                active === section.id
                  ? "border-accent font-medium text-ink"
                  : "border-transparent text-ink/50 hover:text-ink/80",
              )}
            >
              {section.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
