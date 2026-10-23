import { cloneElement, isValidElement, type ReactElement, type ReactNode } from "react";
import clsx from "clsx";

type FieldShellProps = {
  label: string;
  htmlFor?: string;
  /** Anchor id for scrolling a failed-validation field into view, when
   * there's no real form control to key off (e.g. a ChoiceGroup). */
  anchorId?: string;
  required?: boolean;
  optional?: boolean;
  helper?: string;
  error?: string;
  children: ReactNode;
  className?: string;
};

// `htmlFor` is only ever passed when `children` is exactly one native
// input/textarea (every ChoiceGroup or multi-control field uses `anchorId`
// instead — see callers) — so it's a safe, universal hook for wiring the
// control to its own error/helper text without touching every call site.
type Control = ReactElement<{
  "aria-invalid"?: boolean;
  "aria-describedby"?: string;
}>;

export function FieldShell({
  label,
  htmlFor,
  anchorId,
  required,
  optional,
  helper,
  error,
  children,
  className,
}: FieldShellProps) {
  const messageId = htmlFor && (helper || error) ? `${htmlFor}-msg` : undefined;
  const control =
    htmlFor && isValidElement(children)
      ? cloneElement(children as Control, {
          "aria-invalid": !!error,
          "aria-describedby": messageId,
        })
      : children;

  return (
    <div id={anchorId} className={className}>
      <label htmlFor={htmlFor} className="flex items-baseline gap-1.5 font-sans text-[0.85rem] font-medium text-ink/70">
        {label}
        {required && (
          <span className="text-accent" aria-hidden="true">
            *
          </span>
        )}
        {optional && <span className="text-ink/40">(optional)</span>}
      </label>
      <div className="mt-2.5">{control}</div>
      {(helper || error) && (
        <p
          id={messageId}
          className={clsx(
            "mt-2 text-[0.82rem] leading-relaxed",
            error ? "font-medium text-accent" : "text-ink/45",
          )}
          role={error ? "alert" : undefined}
        >
          {error || helper}
        </p>
      )}
    </div>
  );
}
