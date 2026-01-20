'use client';

import { useState } from 'react';
import TransitionLink from './TransitionLink';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/events', label: 'Events' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Announcement Bar */}
      <div className="relative z-20 bg-primary py-2 text-center">
        <p className="text-sm font-medium text-primary-foreground px-4">
          Join us in T1 during the O-week stall to play games, win prizes, and take a gift hamper for your membership
        </p>
      </div>

      {/* Navigation */}
      <nav className="relative z-20 w-full py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <TransitionLink href="/" className="flex items-center">
              <DSECLogo />
            </TransitionLink>

            {/* Desktop Menu - Pill Container */}
            <div className="hidden md:flex items-center bg-foreground/5 border border-foreground/10 rounded-full px-2 py-1.5">
              {navLinks.map((link) => (
                <TransitionLink
                  key={link.href}
                  href={link.href}
                  className="px-4 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </TransitionLink>
              ))}
              <TransitionLink
                href="/community"
                className="ml-1 px-4 py-1.5 text-sm bg-foreground/10 rounded-full text-foreground/70 hover:bg-foreground/15 transition-colors"
              >
                Community
              </TransitionLink>
            </div>

            {/* CTA Button */}
            <button className="hidden md:block px-5 py-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full text-sm font-medium transition-all">
              Join Now
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-foreground hover:bg-muted rounded-md transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border">
            <div className="flex flex-col p-4 space-y-2">
              {navLinks.map((link) => (
                <TransitionLink
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-3 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                >
                  {link.label}
                </TransitionLink>
              ))}
              <TransitionLink
                href="/community"
                onClick={() => setIsOpen(false)}
                className="px-4 py-3 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              >
                Community
              </TransitionLink>
              <button className="w-full px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full font-medium transition-all">
                Join Now
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

function DSECLogo() {
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
        className="font-grotesk text-2xl font-bold fill-current"
        style={{ fontFamily: 'var(--font-grotesk)' }}
      >
        D
      </text>
      <text
        x="15"
        y="28"
        className="font-grotesk text-2xl font-bold fill-primary"
        style={{ fontFamily: 'var(--font-grotesk)' }}
      >
        S
      </text>
      <text
        x="30"
        y="28"
        className="font-grotesk text-2xl font-bold fill-current"
        style={{ fontFamily: 'var(--font-grotesk)' }}
      >
        EC
      </text>
      {/* Arrow/cursor mark */}
      <polygon points="16,32 20,40 24,32" className="fill-primary" />
    </svg>
  );
}
