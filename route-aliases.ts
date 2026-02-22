import type { Redirect } from "next/dist/lib/load-custom-routes";

/**
 * Route Aliases Configuration
 *
 * Maps alternative/intuitive URLs to their canonical routes using
 * permanent (301) redirects. This ensures:
 *   - Users who guess a URL (e.g. /signup) land on the right page
 *   - Search engines consolidate ranking to the canonical URL
 *   - No duplicate content issues across aliases
 *
 * Format: { source: "/alias", destination: "/canonical-route" }
 * All redirects are permanent (301) by default.
 *
 * To add a new alias, simply add an entry to the `aliasMap` object below.
 * The key is the canonical route, and the value is an array of alias paths.
 */

const aliasMap: Record<string, string[]> = {
  // ── Authentication ──────────────────────────────────────────────
  "/auth/join": [
    "/join",
    "/signup",
    "/sign-up",
    "/register",
    "/create-account",
    "/get-started",
  ],
  "/auth/login": [
    "/login",
    "/sign-in",
    "/signin",
  ],

  // ── Core Pages ──────────────────────────────────────────────────
  "/about": [
    "/about-us",
    "/who-we-are",
    "/team",
    "/our-team",
    "/the-club",
  ],
  "/blog": [
    "/blogs",
    "/articles",
    "/news",
    "/posts",
  ],
  "/contact": [
    "/contact-us",
    "/get-in-touch",
    "/reach-out",
    "/reach-us",
  ],
  "/events": [
    "/calendar",
    "/upcoming",
    "/meetups",
    "/workshops",
    "/upcoming-events",
  ],
  "/projects": [
    "/portfolio",
    "/work",
    "/showcase",
    "/our-projects",
    "/our-work",
  ],

  // ── Community & Engagement ──────────────────────────────────────
  "/hackathon": [
    "/hackathons",
    "/hack",
    "/hacknite",
  ],
  "/partnership": [
    "/partnerships",
    "/partners",
    "/sponsor",
    "/sponsors",
    "/sponsorship",
    "/collaborate",
  ],
  "/socials": [
    "/social",
    "/links",
    "/connect",
    "/follow-us",
    "/community",
  ],
  "/stall": [
    "/booth",
    "/stand",
    "/find-us",
    "/orientation",
    "/o-week",
  ],

  // ── Information & Support ───────────────────────────────────────
  "/faq": [
    "/faqs",
    "/help",
    "/support",
    "/questions",
    "/frequently-asked-questions",
  ],
  "/search": [
    "/find",
    "/lookup",
  ],
  "/status": [
    "/uptime",
    "/health",
    "/system-status",
  ],

  // ── Legal ───────────────────────────────────────────────────────
  "/privacy": [
    "/privacy-policy",
    "/data-policy",
  ],
  "/terms": [
    "/terms-of-service",
    "/tos",
    "/terms-and-conditions",
  ],
  "/accessibility": [
    "/a11y",
    "/accessibility-statement",
  ],

  // ── User Area ───────────────────────────────────────────────────
  "/dashboard": [
    "/dash",
    "/my-account",
    "/account",
    "/home",
  ],
};

/**
 * Generates an array of Next.js redirect objects from the alias map.
 * Each alias becomes a permanent (301) redirect to its canonical route.
 */
export function generateRouteAliases(): Redirect[] {
  const redirects: Redirect[] = [];

  for (const [canonical, aliases] of Object.entries(aliasMap)) {
    for (const alias of aliases) {
      redirects.push({
        source: alias,
        destination: canonical,
        permanent: true,
      });
    }
  }

  return redirects;
}

/**
 * Returns a flat set of all alias source paths.
 * Useful for middleware or other systems that need to know
 * which paths are aliases vs. canonical routes.
 */
export function getAllAliasPaths(): Set<string> {
  const paths = new Set<string>();
  for (const aliases of Object.values(aliasMap)) {
    for (const alias of aliases) {
      paths.add(alias);
    }
  }
  return paths;
}

export default aliasMap;
