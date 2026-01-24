"use client";

import { MenuIcon } from "@/components/icons";
import TransitionLink from "@/components/TransitionLink";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { useState } from "react";
import type { NavLink } from "@/types";

const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/events", label: "Events" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/partnership", label: "Partner" },
  { href: "/contact", label: "Contact" },
];

const floatingNavItems = navLinks.map((link) => ({
  name: link.label,
  link: link.href,
}));

export default function Navbar(): React.ReactElement {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <FloatingNav
        navItems={floatingNavItems}
        className="border-white/20 bg-background/80 backdrop-blur-md"
        onMenuClick={() => setIsOpen(true)}
      />

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
              <img src="/logo.svg" alt="DSEC" width={63} height={40} />
            </TransitionLink>

            <div className="hidden items-center rounded-full border border-foreground/10 bg-neutral-900/20 px-2 py-1.5 md:flex">
              {navLinks.map((link) => (
                <TransitionLink
                  key={link.href}
                  href={link.href}
                  className="px-4 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </TransitionLink>
              ))}
            </div>

            <div className="hidden items-center gap-3 md:flex">
              <TransitionLink
                href="/auth/login"
                className="px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Login
              </TransitionLink>
              <TransitionLink
                href="/auth/join"
                className="rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90"
              >
                Join Now
              </TransitionLink>
            </div>

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <button
                className="rounded-md p-2 text-foreground transition-colors hover:bg-muted md:hidden"
                onClick={() => setIsOpen(true)}
                aria-label="Open menu"
              >
                <MenuIcon />
              </button>
              <SheetContent
                side="right"
                className="w-75 border-border bg-background p-0"
              >
                <SheetHeader className="border-b border-border px-6 py-4">
                  <SheetTitle className="text-left">
                    <img src="/logo.svg" alt="DSEC" width={76} height={48} />
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col p-4">
                  {navLinks.map((link) => (
                    <SheetClose asChild key={link.href}>
                      <TransitionLink
                        href={link.href}
                        className="rounded-lg px-4 py-3 text-base font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                      >
                        {link.label}
                      </TransitionLink>
                    </SheetClose>
                  ))}
                  <div className="my-4 border-t border-border" />
                  <SheetClose asChild>
                    <TransitionLink
                      href="/auth/login"
                      className="rounded-lg px-4 py-3 text-base font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                    >
                      Login
                    </TransitionLink>
                  </SheetClose>
                  <SheetClose asChild>
                    <TransitionLink
                      href="/auth/join"
                      className="mt-2 rounded-full bg-primary px-6 py-3 text-center text-base font-medium text-primary-foreground transition-all hover:bg-primary/90"
                    >
                      Join Now
                    </TransitionLink>
                  </SheetClose>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </>
  );
}

