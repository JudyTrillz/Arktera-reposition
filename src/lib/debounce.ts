// Coalesces rapid-fire calls (window `resize` during an active drag) into
// one trailing call — used ahead of expensive recomputation (canvas particle
// regeneration, layout measurement) that would otherwise re-run on every
// intermediate resize event instead of once the size settles.
export function debounce<Args extends unknown[]>(
  fn: (...args: Args) => void,
  waitMs: number,
): (...args: Args) => void {
  let timer: ReturnType<typeof setTimeout> | null = null;
  return (...args: Args) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => fn(...args), waitMs);
  };
}
