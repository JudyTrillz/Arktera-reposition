import clsx from "clsx";

type CompareItem = {
  label: string;
  value: number;
  display: string;
  sublabel?: string;
  accent?: boolean;
};

type ComparisonBarsProps = {
  title?: string;
  items: CompareItem[];
  caption?: string;
};

const BAR_MAX_PX = 180;
const BAR_MIN_PX = 20;

export function ComparisonBars({ title, items, caption }: ComparisonBarsProps) {
  const max = Math.max(...items.map((i) => i.value));

  return (
    <div className="not-prose my-10 rounded-2xl border border-ink/10 bg-ink/[0.02] p-6 sm:p-8">
      {title && (
        <p className="font-sans text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-accent">
          {title}
        </p>
      )}
      <div className="mt-8 flex items-end justify-center gap-6 sm:gap-12">
        {items.map((item) => {
          const height = Math.max((item.value / max) * BAR_MAX_PX, BAR_MIN_PX);
          return (
            <div key={item.label} className="flex flex-col items-center gap-3">
              <div className="flex flex-col items-center">
                <span className="font-display text-lg leading-none text-ink sm:text-xl">{item.display}</span>
                {item.sublabel && (
                  <span className="mt-1 text-[0.78rem] text-ink/45">{item.sublabel}</span>
                )}
              </div>
              <div className="flex h-[180px] items-end">
                <div
                  className={clsx(
                    "w-14 rounded-t-lg transition-all duration-700 ease-out sm:w-20",
                    item.accent ? "bg-accent" : "bg-ink/20",
                  )}
                  style={{ height: `${height}px` }}
                  aria-hidden="true"
                />
              </div>
              <span className="max-w-[8rem] text-center text-[0.82rem] leading-snug text-ink/55">
                {item.label}
              </span>
            </div>
          );
        })}
      </div>
      {caption && <p className="mt-7 text-center text-[0.8rem] leading-relaxed text-ink/40">{caption}</p>}
    </div>
  );
}
