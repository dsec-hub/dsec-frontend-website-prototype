"use client";

import { useState } from "react";

import { CloseIcon, MenuIcon } from "@/components/icons";
import TransitionLink from "@/components/TransitionLink";
import type { NavLink } from "@/types";

const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/events", label: "Events" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar(): React.ReactElement {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="relative z-20 bg-primary py-2 text-center">
        <p className="px-4 text-sm font-medium text-primary-foreground">
          Join us in T1 during the O-week stall to play games, win prizes, and
          take a gift hamper for your membership
        </p>
      </div>

      <nav className="relative z-20 w-full py-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <TransitionLink href="/" className="flex items-center">
              <DSECLogo />
            </TransitionLink>

            <div className="hidden items-center rounded-full border border-foreground/10 bg-foreground/5 px-2 py-1.5 md:flex">
              {navLinks.map((link) => (
                <TransitionLink
                  key={link.href}
                  href={link.href}
                  className="px-4 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </TransitionLink>
              ))}
              <TransitionLink
                href="/community"
                className="ml-1 rounded-full bg-foreground/10 px-4 py-1.5 text-sm text-foreground/70 transition-colors hover:bg-foreground/15"
              >
                Community
              </TransitionLink>
            </div>

            <button className="hidden rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 md:block">
              Join Now
            </button>

            <button
              className="rounded-md p-2 text-foreground transition-colors hover:bg-muted md:hidden"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="absolute left-0 right-0 top-full border-b border-border bg-background md:hidden">
            <div className="flex flex-col space-y-2 p-4">
              {navLinks.map((link) => (
                <TransitionLink
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-lg px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  {link.label}
                </TransitionLink>
              ))}
              <TransitionLink
                href="/community"
                onClick={() => setIsOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                Community
              </TransitionLink>
              <button className="w-full rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground transition-all hover:bg-primary/90">
                Join Now
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

function DSECLogo(): React.ReactElement {
  return (
    <svg
      width="60"
      height="40"
      viewBox="0 0 60 40"
      fill="none"
      className="text-foreground"
    >
      <text
        x="0"
        y="28"
        className="fill-current font-grotesk text-2xl font-bold"
        style={{ fontFamily: "var(--font-grotesk)" }}
      >
        D
      </text>
      <text
        x="15"
        y="28"
        className="fill-primary font-grotesk text-2xl font-bold"
        style={{ fontFamily: "var(--font-grotesk)" }}
      >
        S
      </text>
      <text
        x="30"
        y="28"
        className="fill-current font-grotesk text-2xl font-bold"
        style={{ fontFamily: "var(--font-grotesk)" }}
      >
        EC
      </text>
      <polygon points="16,32 20,40 24,32" className="fill-primary" />
    </svg>
  );
}
