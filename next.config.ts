import type { NextConfig } from "next";
import { generateRouteAliases } from "./route-aliases";

const nextConfig: NextConfig = {
  /**
   * Security Headers
   *
   * Applied to all routes. These follow OWASP recommendations for Next.js apps.
   * CSP is intentionally kept in report-only during development — switch to
   * enforcing ("Content-Security-Policy") for production once you've verified
   * no legitimate resources are blocked.
   */
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // Prevent clickjacking
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          // Prevent MIME-type sniffing
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          // Control referrer information
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          // Restrict browser features
          {
            key: "Permissions-Policy",
            value:
              "camera=(), microphone=(), geolocation=(), interest-cohort=()",
          },
          // Enforce HTTPS (1 year, include subdomains)
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains",
          },
          // XSS filter (legacy browsers)
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          // Content Security Policy
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "img-src 'self' data: blob: https:",
              "font-src 'self' https://fonts.gstatic.com",
              "connect-src 'self' https://www.google-analytics.com https://accounts.google.com https://github.com https://api.github.com",
              "frame-src 'self' https://accounts.google.com",
              "frame-ancestors 'none'",
              "base-uri 'self'",
              "form-action 'self'",
              "object-src 'none'",
              "upgrade-insecure-requests",
            ].join("; "),
          },
        ],
      },
    ];
  },

  /**
   * Route Aliases (Redirects)
   *
   * Maps alternative URLs (e.g. /signup, /login, /about-us) to their
   * canonical routes using permanent 301 redirects. Defined in route-aliases.ts.
   */
  async redirects() {
    return generateRouteAliases();
  },

  /**
   * API Proxy Rewrites
   *
   * Proxies requests from /api/proxy/* to the external backend API.
   * This keeps the real backend URL hidden from the browser and avoids
   * CORS issues. The client only ever talks to the Next.js origin.
   *
   * Requires NEXT_PUBLIC_API_URL to be set in .env.local.
   */
  async rewrites() {
    const backendUrl = process.env.NEXT_PUBLIC_API_URL;

    // Only set up proxy if a backend URL is configured
    if (!backendUrl) {
      return [];
    }

    return [
      {
        source: "/api/proxy/:path*",
        destination: `${backendUrl}/:path*`,
      },
    ];
  },

  /**
   * Powered-by header removal
   * Prevents leaking the framework to scanners.
   */
  poweredByHeader: false,
};

export default nextConfig;
