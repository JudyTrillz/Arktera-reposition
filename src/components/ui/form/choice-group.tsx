"use client";

import clsx from "clsx";
import type { Option } from "@/lib/assessment-form";

type ChoiceGroupProps = {
  options: Option[];
  value: string[];
  onToggle: (value: string) => void;
  multiple?: boolean;
  max?: number;
  variant?: "card" | "pill";
  columns?: 2 | 3;
  name: string;
  disabled?: (value: string) => boolean;
};

function CheckGlyph({ multiple }: { multiple: boolean }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" className="h-full w-full" aria-hidden="true">
      {multiple ? (
        <path
          d="M3.5 8.3l2.8 2.8L12.5 4.8"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ) : (
        <circle cx="8" cy="8" r="3.5" fill="currentColor" />
      )}
    </svg>
  );
}

export function ChoiceGroup({
  options,
  value,
  onToggle,
  multiple = false,
  max,
  variant = "card",
  columns = 3,
  name,
  disabled,
}: ChoiceGroupProps) {
  const role = multiple ? "group" : "radiogroup";

  if (variant === "pill") {
    return (
      <div role={role} aria-label={name} className="flex flex-wrap gap-2.5">
        {options.map((opt) => {
          const selected = value.includes(opt.value);
          const isDisabled = !selected && (disabled?.(opt.value) ?? (multiple && !!max && value.length >= max));
          return (
            <button
              key={opt.value}
              type="button"
              role={multiple ? "checkbox" : "radio"}
              aria-checked={selected}
              disabled={isDisabled}
              data-cursor-hover
              onClick={() => onToggle(opt.value)}
              className={clsx(
                "rounded-full border px-4 py-2.5 text-left font-sans text-[0.88rem] font-medium transition-all duration-200",
                selected
                  ? "border-ink bg-ink text-paper"
                  : isDisabled
                    ? "cursor-not-allowed border-ink/10 text-ink/30"
                    : "border-ink/15 text-ink/70 hover:border-ink/40 hover:text-ink",
              )}
            >
              {opt.label}
            </button>
          );
        })}
      </div>
    );
  }

  return (
    <div
      role={role}
      aria-label={name}
      className={clsx(
        "grid gap-3.5",
        columns === 3 ? "sm:grid-cols-2 lg:grid-cols-3" : "sm:grid-cols-2",
      )}
    >
      {options.map((opt) => {
        const selected = value.includes(opt.value);
        const isDisabled = !selected && (disabled?.(opt.value) ?? (multiple && !!max && value.length >= max));
        return (
          <button
            key={opt.value}
            type="button"
            role={multiple ? "checkbox" : "radio"}
            aria-checked={selected}
            disabled={isDisabled}
            data-cursor-hover
            onClick={() => onToggle(opt.value)}
            className={clsx(
              "group relative flex h-full flex-col gap-1.5 rounded-2xl border p-5 text-left transition-all duration-200",
              selected
                ? "border-accent bg-accent/[0.05] shadow-[0_0_0_1px_rgba(255,59,48,0.15)]"
                : isDisabled
                  ? "cursor-not-allowed border-ink/10 opacity-40"
                  : "border-ink/12 hover:border-ink/30 hover:bg-ink/[0.015]",
            )}
          >
            <span
              className={clsx(
                "absolute right-4 top-4 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border p-[3px] transition-colors duration-200",
                selected ? "border-accent bg-accent text-paper" : "border-ink/20 text-transparent",
              )}
              aria-hidden="true"
            >
              <CheckGlyph multiple={multiple} />
            </span>
            <span className="pr-7 font-sans text-[0.98rem] font-semibold leading-snug text-ink">
              {opt.label}
            </span>
            {opt.description && (
              <span className="pr-4 text-[0.85rem] leading-relaxed text-ink/55">{opt.description}</span>
            )}
          </button>
        );
      })}
    </div>
  );
}
