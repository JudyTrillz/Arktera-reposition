import type { SVGProps } from "react";

// Bold, solid brand marks for social links. Lucide (imported directly from
// "lucide-react" where used) dropped brand/logo icons a while back for
// trademark reasons, so these five are hand-drawn in the same flat,
// single-path style the rest of the icon set follows.

export function LinkedInIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function XIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M18.9 2H22l-7.6 8.7L23 22h-7l-5.5-7.2L4 22H1l8.1-9.3L1 2h7.2l5 6.6L18.9 2Zm-1.2 18h1.7L6.4 3.9H4.6L17.7 20Z" />
    </svg>
  );
}

export function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M13.5 9H16V5.5h-2.5C11 5.5 9.5 7 9.5 9.5V11H7v3.5h2.5V22h3.5v-7.5H16l.5-3.5h-3.5V9.3c0-.6.2-.8.8-.8Z" />
    </svg>
  );
}

export function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.5a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11Zm0 2a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7ZM18 6a1.2 1.2 0 1 1 0 2.4A1.2 1.2 0 0 1 18 6Z"
      />
    </svg>
  );
}

export function TikTokIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M16.5 2h-3.2v13.6a2.9 2.9 0 1 1-2.9-2.9c.2 0 .5 0 .7.1V9.5a6.1 6.1 0 1 0 5.4 6V9.1a8.3 8.3 0 0 0 4.8 1.6V7.5a5 5 0 0 1-4.8-5.5Z" />
    </svg>
  );
}
