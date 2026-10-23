import clsx from "clsx";
import { STAGE_META } from "@/lib/assessment-form";

const STEPS = [...STAGE_META.map((s) => s.shortLabel), "Review"];

type ProgressStepperProps = {
  step: number;
  /** Whether each of the 4 stages (independent of current position) holds
   * valid, complete data — so jumping back to edit one from Review doesn't
   * make the stages ahead of it look undone. */
  completedStages?: boolean[];
};

export function ProgressStepper({ step, completedStages }: ProgressStepperProps) {
  const percent = (step / (STEPS.length - 1)) * 100;

  return (
    <div>
      {/* Mobile: compact label + bar */}
      <div className="flex items-center justify-between font-sans text-[0.82rem] text-ink/50 sm:hidden">
        <span>
          Step {Math.min(step + 1, STEPS.length)} of {STEPS.length}
        </span>
        <span className="font-semibold text-ink">{STEPS[step]}</span>
      </div>
      <div className="mt-2.5 h-1 w-full overflow-hidden rounded-full bg-ink/10 sm:hidden">
        <div
          className="h-full rounded-full bg-accent transition-[width] duration-500 ease-out"
          style={{ width: `${percent}%` }}
        />
      </div>

      {/* Desktop: full stepper */}
      <ol className="relative hidden items-start sm:flex">
        <div className="absolute left-0 top-[0.9rem] h-px w-full bg-ink/10" aria-hidden="true" />
        <div
          className="absolute left-0 top-[0.9rem] h-px bg-accent transition-[width] duration-500 ease-out"
          style={{ width: `${percent}%` }}
          aria-hidden="true"
        />
        {STEPS.map((label, i) => {
          const isDone = i < step || (i !== step && !!completedStages?.[i]);
          const isCurrent = i === step;
          return (
            <li
              key={label}
              aria-current={isCurrent ? "step" : undefined}
              className="relative flex flex-1 flex-col items-center gap-2.5 text-center"
            >
              <span
                className={clsx(
                  "relative z-10 flex h-[1.9rem] w-[1.9rem] items-center justify-center rounded-full border font-sans text-[0.8rem] font-semibold transition-colors duration-300",
                  isDone
                    ? "border-accent bg-accent text-paper"
                    : isCurrent
                      ? "border-accent bg-paper text-accent"
                      : "border-ink/15 bg-paper text-ink/35",
                )}
              >
                {isDone ? (
                  <svg viewBox="0 0 16 16" fill="none" className="h-3.5 w-3.5" aria-hidden="true">
                    <path d="M3.5 8.3l2.8 2.8L12.5 4.8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ) : (
                  i + 1
                )}
              </span>
              <span
                className={clsx(
                  "font-sans text-[0.78rem] font-medium transition-colors duration-300",
                  isCurrent ? "text-ink" : "text-ink/40",
                )}
              >
                {label}
              </span>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
