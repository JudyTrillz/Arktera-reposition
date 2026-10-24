import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* This is a fully static marketing site with no server data fetching, so
     Cache Components' Activity-based route preservation and prerender
     validation add experimental complexity with no benefit here. */
  // Lets a phone on the same Wi-Fi load the dev server via its LAN IP
  // (`next dev`'s printed "Network:" URL) for real-device testing. Without
  // this, Next.js blocks cross-origin requests to dev-only resources like
  // the HMR endpoint, which breaks client-side JS (GSAP/Motion included)
  // for anyone who isn't on localhost — this is dev-only and has no effect
  // on a production build. Update/extend this if your machine's LAN IP
  // changes (new network, DHCP renewal, etc).
  allowedDevOrigins: ["192.168.0.3"],
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
