import Image from "next/image";
import clsx from "clsx";

// Arktera's actual brand mark — cropped from the approved logo render
// (public/images/logo.png) with its background removed. Always paired with
// the "Arktera" wordmark in a Link, so it's decorative here (empty alt).
export function LogoMark({ className }: { className?: string }) {
  return (
    <Image
      src="/images/logo-icon.png"
      alt=""
      width={427}
      height={317}
      className={clsx("h-7 w-auto", className)}
    />
  );
}
