"use client";

import { SocialIcon } from "@/components/icons";
import TransitionLink from "@/components/TransitionLink";
import { socials } from "@/lib/socials";
import type { NavLink, ResourceLink, SocialLink } from "@/types";

const socialLinks: SocialLink[] = [
  { name: "Discord", href: socials.discord },
  { name: "Instagram", href: socials.instagram },
  { name: "LinkedIn", href: socials.linkedin },
  { name: "GitHub", href: socials.github },
];

const quickLinks: NavLink[] = [
  { label: "About the club", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Events", href: "/events" },
  { label: "Blog", href: "/blog" },
  { label: "Partner with us", href: "/partnership" },
  { label: "Contact and join", href: "/contact" },
];

const resourceLinks: ResourceLink[] = [
  {
    name: "DUSA club listing",
    href: socials.dusa,
    external: true,
  },
  { name: "Discord server", href: socials.discord, external: true },
  { name: "Partner with us", href: "/partners" },
  { name: "FAQ", href: "/faq" },
];

export default function Footer(): React.ReactElement {
  return (
    <footer className="relative border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2">
              <img src="/logo-s.svg" alt="DSEC" width={14.4} height={3} />
              <div>
                <span className="font-grotesk text-xl font-bold text-foreground">
                  DSEC
                </span>
                <p className="text-xs text-muted-foreground">
                  Deakin Software Engineering Club
                </p>
              </div>
            </div>
            <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">
              The Deakin Software Engineering Club is a student led club
              affiliated with the Deakin University Student Association. We are
              based at the Burwood campus and welcome students from all Deakin
              disciplines who are interested in software engineering, coding,
              and technology.
            </p>

            <div className="mt-6 flex items-center gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-muted-foreground transition-all hover:bg-primary/20 hover:text-primary"
                >
                  <SocialIcon name={link.name} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-grotesk font-bold text-foreground">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <TransitionLink
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </TransitionLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-grotesk font-bold text-foreground">
              Resources
            </h4>
            <ul className="space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.name}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <TransitionLink
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.name}
                    </TransitionLink>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-6 md:px-12">
          <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
            DSEC acknowledges the Traditional Owners of the lands on which we
            meet, learn, and collaborate. We pay our respects to Elders past,
            present, and emerging. We also welcome and celebrate the diversity
            of our community, including members of LGBTQIA+ communities.
          </p>

          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div className="flex flex-wrap items-center gap-4 text-sm">
              <TransitionLink
                href="/terms"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                Terms
              </TransitionLink>
              <span className="text-border">|</span>
              <TransitionLink
                href="/privacy"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                Privacy
              </TransitionLink>
              <span className="text-border">|</span>
              <TransitionLink
                href="/accessibility"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                Accessibility
              </TransitionLink>
            </div>
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Deakin Software Engineering
              Club. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      <div className="h-1 bg-gradient-to-r from-primary via-secondary to-lime" />
    </footer>
  );
}

