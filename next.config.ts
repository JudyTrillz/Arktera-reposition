import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* This is a fully static marketing site with no server data fetching, so
     Cache Components' Activity-based route preservation and prerender
     validation add experimental complexity with no benefit here. */
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
