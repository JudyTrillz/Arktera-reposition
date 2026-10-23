"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

type Props = {
  text: string;
  className?: string;
  trigger?: "mount" | "scroll";
  delay?: number;
  as?: "h1" | "h2" | "h3" | "p";
};

export function SplitHeadline({
  text,
  className,
  trigger = "scroll",
  delay = 0.1,
  as: Tag = "h2",
}: Props) {
  const ref = useRef<HTMLElement>(null);
  const words = text.split(" ");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const inners = el.querySelectorAll<HTMLElement>(".word-inner");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduced) {
      gsap.set(inners, { yPercent: 0, opacity: 1 });
      return;
    }

    gsap.set(inners, { yPercent: 115, opacity: 0 });

    const ctx = gsap.context(() => {
      const anim = {
        yPercent: 0,
        opacity: 1,
        duration: 0.9,
        ease: "power4.out",
        stagger: 0.045,
        delay,
      };

      if (trigger === "mount") {
        gsap.to(inners, anim);
      } else {
        gsap.to(inners, {
          ...anim,
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            once: true,
          },
        });
      }
    });

    return () => ctx.revert();
  }, [trigger, delay]);

  return (
    // @ts-expect-error — dynamic tag ref typing
    <Tag ref={ref} className={className}>
      {words.map((w, i) => (
        <span key={i}>
          <span className="inline-block overflow-hidden pb-[0.08em] align-top">
            <span className="word-inner inline-block">{w}</span>
          </span>
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </Tag>
  );
}
