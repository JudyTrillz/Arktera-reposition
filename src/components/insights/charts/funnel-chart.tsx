type FunnelStage = {
  label: string;
  value: number;
  display?: string;
};

type FunnelChartProps = {
  title?: string;
  stages: FunnelStage[];
  unitLabel?: string;
  caption?: string;
};

// Cap the longest bar well under 100% of the row so the value/label column
// beside it always keeps enough room to wrap, even on narrow screens.
const MAX_BAR_PCT = 58;

export function FunnelChart({ title, stages, unitLabel = "", caption }: FunnelChartProps) {
  const max = Math.max(...stages.map((s) => s.value));

  return (
    <div className="not-prose my-10 rounded-2xl border border-ink/10 bg-ink/[0.02] p-6 sm:p-8">
      {title && (
        <p className="font-sans text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-accent">
          {title}
        </p>
      )}
      <div className="mt-6 flex flex-col">
        {stages.map((stage, i) => {
          const widthPct = Math.max((stage.value / max) * MAX_BAR_PCT, 8);
          const prev = i > 0 ? stages[i - 1].value : null;
          const pct = prev ? Math.round((stage.value / prev) * 100) : null;

          return (
            <div key={stage.label}>
              {i > 0 && pct !== null && (
                <div className="flex items-center gap-2 py-2 pl-1 font-sans text-[0.78rem] font-medium text-ink/40">
                  <svg viewBox="0 0 16 16" fill="none" className="h-3.5 w-3.5 shrink-0" aria-hidden="true">
                    <path
                      d="M8 3v9m0 0 3.5-3.5M8 12 4.5 8.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {pct}% of the previous stage
                </div>
              )}
              <div className="flex min-w-0 items-center gap-3 sm:gap-6">
                <div
                  className="h-12 shrink-0 rounded-lg bg-gradient-to-r from-accent to-accent-soft transition-all duration-700 ease-out sm:h-14"
                  style={{ width: `${widthPct}%` }}
                  aria-hidden="true"
                />
                <div className="flex min-w-0 flex-1 flex-col">
                  <span className="font-display text-[1.3rem] leading-none text-ink sm:text-[1.6rem]">
                    {stage.display ?? stage.value.toLocaleString()}
                    {unitLabel}
                  </span>
                  <span className="mt-1 text-[0.85rem] leading-snug text-ink/55">{stage.label}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {caption && <p className="mt-6 text-[0.8rem] leading-relaxed text-ink/40">{caption}</p>}
    </div>
  );
}
