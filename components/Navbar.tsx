'use client';

import { useState } from 'react';
import Image from 'next/image';
import TransitionLink from './TransitionLink';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full z-50 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <TransitionLink href="/" className="flex items-center">
            <Image src="/logo.svg" alt="DSEC" width={76} height={48} />
          </TransitionLink>

          {/* Desktop Menu - Pill Container */}
          <div className="hidden md:flex items-center bg-clarity-white/5 border border-clarity-white/10 rounded-full px-2 py-1.5">
            <TransitionLink href="/" className="px-4 py-1.5 text-sm text-clarity-white/50 hover:text-clarity-white transition-colors">Home</TransitionLink>
            <TransitionLink href="/about" className="px-4 py-1.5 text-sm text-clarity-white/50 hover:text-clarity-white transition-colors">About</TransitionLink>
            <TransitionLink href="/events" className="px-4 py-1.5 text-sm text-clarity-white/50 hover:text-clarity-white transition-colors">Events</TransitionLink>
            <TransitionLink href="/projects" className="px-4 py-1.5 text-sm text-clarity-white/50 hover:text-clarity-white transition-colors">Projects</TransitionLink>
            <TransitionLink href="/contact" className="px-4 py-1.5 text-sm text-clarity-white/50 hover:text-clarity-white transition-colors">Contact</TransitionLink>
            <TransitionLink href="/community" className="ml-1 px-4 py-1.5 text-sm bg-clarity-white/10 rounded-full text-clarity-white/70 hover:bg-clarity-white/15 transition-colors">Community</TransitionLink>
          </div>

          {/* CTA Button */}
          <button className="hidden md:block px-5 py-2 bg-action-pink hover:bg-action-pink/90 rounded-full text-sm font-medium transition-all">
            Join Now
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
        <div className="md:hidden mt-4">
          <div className="px-4 py-4 space-y-3">
            <TransitionLink href="/" className="block text-clarity-white/50 hover:text-clarity-white">Home</TransitionLink>
            <TransitionLink href="/about" className="block text-clarity-white/50 hover:text-clarity-white">About</TransitionLink>
            <TransitionLink href="/events" className="block text-clarity-white/50 hover:text-clarity-white">Events</TransitionLink>
            <TransitionLink href="/projects" className="block text-clarity-white/50 hover:text-clarity-white">Projects</TransitionLink>
            <TransitionLink href="/contact" className="block text-clarity-white/50 hover:text-clarity-white">Contact</TransitionLink>
            <TransitionLink href="/community" className="block text-clarity-white/50 hover:text-clarity-white">Community</TransitionLink>
            <button className="w-full px-6 py-2 bg-action-pink rounded-full font-medium">Join Now</button>
          </div>
        </div>
      )}
    </nav>
  );
}