import { Droplet, Filter, Repeat, ShieldCheck } from "lucide-react";
import type { InsightCategory } from "@/lib/insights";

// One icon + one brand color per category — reusing the site's existing
// Retention icon (Repeat) for continuity with the About and Revenue
// Systems pages. Only three non-neutral brand colors exist, so the fourth
// category cycles back to accent rather than inventing a new hue.
export const CATEGORY_META: Record<InsightCategory, { Icon: typeof Droplet; color: string }> = {
  "Fixing Revenue Leaks": { Icon: Droplet, color: "var(--color-accent)" },
  "Protecting Profit Margins": { Icon: ShieldCheck, color: "var(--color-gold)" },
  "Improving Pipeline Conversion": { Icon: Filter, color: "var(--color-accent-soft)" },
  "Strengthening Client Retention": { Icon: Repeat, color: "var(--color-accent)" },
};
