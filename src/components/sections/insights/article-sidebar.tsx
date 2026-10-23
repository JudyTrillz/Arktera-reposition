import { Button } from "@/components/ui/button";
import { assessmentHref } from "@/lib/site-config";

export function ArticleSidebar() {
  return (
    <aside className="lg:sticky lg:top-28">
      <div className="rounded-2xl bg-ink p-7 text-paper">
        <p className="font-sans text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-accent">
          Not Sure Where to Start?
        </p>
        <p className="mt-3 text-[0.95rem] leading-relaxed text-paper/65">
          The Free Business Growth Assessment helps us understand your goals
          and challenges so we can identify where closer investigation may
          help.
        </p>
        <div className="mt-6">
          <Button href={assessmentHref} tone="dark" variant="solid" className="w-full">
            Get a Free Assessment
          </Button>
        </div>
      </div>

      <div className="mt-6 rounded-2xl border border-ink/10 p-7">
        <p className="font-sans text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-accent">
          Have a Question?
        </p>
        <p className="mt-3 text-[0.92rem] leading-relaxed text-ink/60">
          Send us a message and we&apos;ll respond within one business day.
        </p>
        <a
          href="/contact"
          data-cursor-hover
          className="mt-3 inline-block font-sans text-[0.9rem] font-semibold text-ink underline decoration-accent/40 decoration-2 underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
        >
          Contact Arktera
        </a>
      </div>
    </aside>
  );
}
