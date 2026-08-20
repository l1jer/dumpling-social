import type { NextConfig } from "next";

/**
 * The WordPress site this replaces served every URL with a trailing slash, so
 * `trailingSlash` keeps existing inbound links and search results resolving.
 *
 * GitHub Pages is static hosting, so this app is exported to `out/` and cannot
 * use the Next.js image optimisation server or custom response headers.
 */
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
