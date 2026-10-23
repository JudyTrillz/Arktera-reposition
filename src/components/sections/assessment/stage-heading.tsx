export function StageHeading({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body?: string;
}) {
  return (
    <div className="mb-9">
      <p className="font-sans text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-accent">
        {eyebrow}
      </p>
      <h2 className="mt-3 font-display text-[clamp(1.6rem,2.2vw+1rem,2.4rem)] leading-[1.1] tracking-tight text-ink text-balance">
        {title}
      </h2>
      {body && <p className="mt-3 max-w-2xl text-[0.98rem] leading-relaxed text-ink/60">{body}</p>}
    </div>
  );
}
