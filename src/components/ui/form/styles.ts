import clsx from "clsx";

// A visible resting state (tinted background, not just a faint border) plus
// a genuine focus glow (colored ring + soft blur), not just a border-color
// swap — shared by every text input/textarea on the Contact and Assessment
// forms so the fix lands everywhere at once.
export function inputClasses(hasError?: boolean) {
  return clsx(
    "w-full rounded-xl border bg-ink/[0.03] px-4 py-3 font-sans text-[0.95rem] text-ink placeholder:text-ink/35 transition-all duration-200",
    "focus:bg-paper focus:outline-none focus:shadow-[0_0_0_4px_rgba(255,59,48,0.14),0_0_24px_-6px_rgba(255,59,48,0.55)]",
    hasError
      ? "border-accent/70 focus:border-accent"
      : "border-ink/25 hover:border-ink/40 focus:border-accent",
  );
}
