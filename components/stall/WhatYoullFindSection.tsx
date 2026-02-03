'use client';

import SectionLabel from '@/components/SectionLabel';
import GradientText from '@/components/GradientText';

export default function WhatYoullFindSection() {
  return (
    <section id="what-youll-find" className="relative py-24 md:py-32 bg-background overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-secondary/5 rounded-full blur-[100px]" />
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-lime/5 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16 flex flex-col items-center">
          <SectionLabel>At Our Stall</SectionLabel>
          <h2 className="font-grotesk text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight flex flex-wrap justify-center gap-3">
            What You&apos;ll
            <GradientText
              colors={['#00bcd4', '#c6ff00', '#00e5ff', '#00bcd4']}
              animationSpeed={6}
              showBorder={false}
            >
              Find
            </GradientText>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Stop by our stall for freebies, exclusive gear, and everything you need to get started with DSEC.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Free Giveaways Card */}
          <div className="group relative bg-card border border-border rounded-2xl p-8 transition-all duration-300 hover:border-secondary/50 hover:shadow-lg hover:shadow-secondary/10 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,188,212,0.05)_1px,transparent_1px)] bg-[size:20px_20px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10">
              <div className="w-14 h-14 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center mb-6">
                <GiftIcon />
              </div>
              <h3 className="font-grotesk text-2xl font-bold text-foreground mb-4">
                Free Giveaways
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <ListItem>DSEC stickers</ListItem>
                <ListItem>Event calendars & workshop flyers</ListItem>
                <ListItem>Info on T1 events, workshops, and the March hackathon</ListItem>
              </ul>
            </div>

            {/* Floating badge */}
            <div className="absolute top-4 right-4 bg-secondary/20 text-secondary px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider">
              Free
            </div>
          </div>

          {/* Limited Merch Card */}
          <div className="group relative bg-card border border-border rounded-2xl p-8 transition-all duration-300 hover:border-coral/50 hover:shadow-lg hover:shadow-coral/10 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,107,107,0.05)_1px,transparent_1px)] bg-[size:20px_20px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10">
              <div className="w-14 h-14 rounded-xl bg-coral/10 text-coral flex items-center justify-center mb-6">
                <ShirtIcon />
              </div>
              <h3 className="font-grotesk text-2xl font-bold text-foreground mb-4">
                Limited Merch
              </h3>
              <p className="text-muted-foreground mb-4">
                <span className="text-coral font-semibold">First 20 people only!</span>
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <ListItem>Exclusive DSEC t-shirts</ListItem>
                <ListItem>Hoodies & tech accessories</ListItem>
                <ListItem>Once they&apos;re gone, they&apos;re gone</ListItem>
              </ul>
            </div>

            {/* Floating badge */}
            <div className="absolute top-4 right-4 bg-coral/20 text-coral px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-coral animate-pulse" />
              Limited
            </div>
          </div>

          {/* Membership Card */}
          <div className="group relative bg-card border border-border rounded-2xl p-8 transition-all duration-300 hover:border-lime/50 hover:shadow-lg hover:shadow-lime/10 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(198,255,0,0.05)_1px,transparent_1px)] bg-[size:20px_20px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10">
              <div className="w-14 h-14 rounded-xl bg-lime/10 text-lime flex items-center justify-center mb-6">
                <MembershipIcon />
              </div>
              <h3 className="font-grotesk text-2xl font-bold text-foreground mb-4">
                Membership Sign-Up
              </h3>

              {/* Pricing */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between bg-muted/50 rounded-lg px-4 py-3">
                  <span className="text-muted-foreground">DUSA members</span>
                  <span className="font-grotesk font-bold text-lime text-xl">$5</span>
                </div>
                <div className="flex items-center justify-between bg-muted/50 rounded-lg px-4 py-3">
                  <span className="text-muted-foreground">Non-DUSA</span>
                  <span className="font-grotesk font-bold text-lime text-xl">$7.50</span>
                </div>
              </div>

              <p className="text-sm text-muted-foreground">
                Deakin students + anyone outside Deakin welcome. Instant access to all T1 workshops, Discord server, and project teams.
              </p>
            </div>

            {/* Floating badge */}
            <div className="absolute top-4 right-4 bg-lime/20 text-lime px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider">
              Join
            </div>
          </div>
        </div>

        {/* Location Info */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-8 bg-card border border-border rounded-2xl px-8 py-6">
            <div className="flex items-center gap-3">
              <LocationIcon className="w-5 h-5 text-secondary" />
              <span className="text-muted-foreground">
                <span className="text-foreground font-semibold">Sports Hall</span>, Deakin Burwood Campus
              </span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-border" />
            <div className="flex items-center gap-3">
              <CalendarIcon className="w-5 h-5 text-secondary" />
              <span className="text-muted-foreground">
                <span className="text-foreground font-semibold">Sun 23rd & Mon 24th</span> February
              </span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-border" />
            <div className="flex items-center gap-3">
              <ClockIcon className="w-5 h-5 text-secondary" />
              <span className="text-muted-foreground">
                <span className="text-foreground font-semibold">11:30am - 2:30pm</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ListItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <CheckIcon className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
      <span>{children}</span>
    </li>
  );
}

// Icons
function GiftIcon() {
  return (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
    </svg>
  );
}

function ShirtIcon() {
  return (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 3v4a2 2 0 002 2h4" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 13h6M9 17h4" />
    </svg>
  );
}

function MembershipIcon() {
  return (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
    </svg>
  );
}

function CheckIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );
}

function LocationIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function CalendarIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  );
}

function ClockIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}
