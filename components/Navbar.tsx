'use client';

import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-foundation-black/80 backdrop-blur-md border-b border-clarity-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="relative">
              <div className="w-8 h-8 bg-gradient-to-br from-action-pink to-creative-violet rounded-lg rotate-45"></div>
              <div className="absolute top-1 left-1 w-6 h-6 bg-foundation-black rounded-sm rotate-45"></div>
            </div>
            <span className="font-grotesk font-bold text-xl">DSEC</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-clarity-white/80 hover:text-action-pink transition-colors">Home</a>
            <a href="#about" className="text-clarity-white/80 hover:text-action-pink transition-colors">About</a>
            <a href="#events" className="text-clarity-white/80 hover:text-action-pink transition-colors">Events</a>
            <a href="#projects" className="text-clarity-white/80 hover:text-action-pink transition-colors">Projects</a>
          </div>

          {/* CTA Button */}
          <button className="hidden md:block px-6 py-2 bg-action-pink hover:bg-action-pink/90 rounded-full font-medium transition-all hover:scale-105">
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
        <div className="md:hidden bg-foundation-black border-t border-clarity-white/10">
          <div className="px-4 py-4 space-y-3">
            <a href="#" className="block text-clarity-white/80 hover:text-action-pink">Home</a>
            <a href="#about" className="block text-clarity-white/80 hover:text-action-pink">About</a>
            <a href="#events" className="block text-clarity-white/80 hover:text-action-pink">Events</a>
            <a href="#projects" className="block text-clarity-white/80 hover:text-action-pink">Projects</a>
            <button className="w-full px-6 py-2 bg-action-pink rounded-full font-medium">Join Now</button>
          </div>
        </div>
      )}
    </nav>
  );
}