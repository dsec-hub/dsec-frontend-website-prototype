'use client';

import { useState } from 'react';
import TransitionLink from './TransitionLink';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full z-50 bg-foundation-black py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <TransitionLink href="/" className="flex items-center space-x-2">
            <div className="relative">
              <div className="w-8 h-8 bg-gradient-to-br from-action-pink to-creative-violet rounded-lg rotate-45"></div>
              <div className="absolute top-1 left-1 w-6 h-6 bg-foundation-black rounded-sm rotate-45"></div>
            </div>
            <span className="font-grotesk font-bold text-xl">DSEC</span>
          </TransitionLink>

          {/* Desktop Menu - Pill Container */}
          <div className="hidden md:flex items-center bg-clarity-white/5 border border-clarity-white/10 rounded-full px-2 py-1.5">
            <TransitionLink href="/" className="flex items-center gap-1.5 px-4 py-1.5 text-sm text-clarity-white/90 hover:text-clarity-white transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Home
            </TransitionLink>
            <TransitionLink href="/about" className="px-4 py-1.5 text-sm text-clarity-white/60 hover:text-clarity-white transition-colors">About</TransitionLink>
            <TransitionLink href="/events" className="px-4 py-1.5 text-sm text-clarity-white/60 hover:text-clarity-white transition-colors">Events</TransitionLink>
            <TransitionLink href="/projects" className="px-4 py-1.5 text-sm text-clarity-white/60 hover:text-clarity-white transition-colors">Projects</TransitionLink>
            <TransitionLink href="/contact" className="px-4 py-1.5 text-sm text-clarity-white/60 hover:text-clarity-white transition-colors">Contact</TransitionLink>
            <TransitionLink href="/community" className="flex items-center gap-1.5 ml-1 px-4 py-1.5 text-sm bg-clarity-white/10 rounded-full text-clarity-white/90 hover:bg-clarity-white/15 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
              Community
            </TransitionLink>
          </div>

          {/* CTA Button */}
          <button className="hidden md:flex items-center gap-2 px-5 py-2 border border-clarity-white/20 hover:border-clarity-white/40 rounded-full text-sm font-medium transition-all">
            Join Now
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="space-y-1.5">
              <span className="block w-6 h-0.5 bg-clarity-white"></span>
              <span className="block w-6 h-0.5 bg-clarity-white"></span>
              <span className="block w-6 h-0.5 bg-clarity-white"></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-foundation-black mt-4">
          <div className="px-4 py-4 space-y-3">
            <TransitionLink href="/" className="block text-clarity-white/80 hover:text-clarity-white">Home</TransitionLink>
            <TransitionLink href="/about" className="block text-clarity-white/80 hover:text-clarity-white">About</TransitionLink>
            <TransitionLink href="/events" className="block text-clarity-white/80 hover:text-clarity-white">Events</TransitionLink>
            <TransitionLink href="/projects" className="block text-clarity-white/80 hover:text-clarity-white">Projects</TransitionLink>
            <TransitionLink href="/contact" className="block text-clarity-white/80 hover:text-clarity-white">Contact</TransitionLink>
            <TransitionLink href="/community" className="block text-clarity-white/80 hover:text-clarity-white">Community</TransitionLink>
            <button className="w-full px-6 py-2 border border-clarity-white/20 rounded-full font-medium">Join Now</button>
          </div>
        </div>
      )}
    </nav>
  );
}