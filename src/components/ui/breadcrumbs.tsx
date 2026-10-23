import Link from "next/link";

type Crumb = {
  label: string;
  /** Omit on the current page's own crumb — it renders as plain text. */
  href?: string;
};

type BreadcrumbsProps = {
  /** Trail after Home, e.g. [{ label: "Insights", href: "/insights" }, { label: "Pricing Strategy" }]. */
  items: Crumb[];
  className?: string;
};

// Shared breadcrumb trail for page heroes — Home is always implicit and
// first. Matches the nav pattern this site already used ad hoc on the
// Contact, legal, and article pages; this is that pattern made reusable.
export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={`mb-7 flex flex-wrap items-center gap-2 font-sans text-[0.82rem] text-paper/45 ${className ?? ""}`}
    >
      <Link href="/" className="transition-colors hover:text-paper" data-cursor-hover>
        Home
      </Link>
      {items.map((item, i) => {
        const isLast = i === items.length - 1;
        return (
          <span key={item.label} className="flex items-center gap-2">
            <span aria-hidden="true">/</span>
            {item.href && !isLast ? (
              <Link href={item.href} className="transition-colors hover:text-paper" data-cursor-hover>
                {item.label}
              </Link>
            ) : (
              <span className="text-paper/70" aria-current={isLast ? "page" : undefined}>
                {item.label}
              </span>
            )}
          </span>
        );
      })}
    </nav>
  );
}
