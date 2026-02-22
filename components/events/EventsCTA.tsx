'use client';

import SectionLabel from '@/components/SectionLabel';
import { socials } from '@/lib/socials';
import TransitionLink from '../TransitionLink';

export default function EventsCTA() {
  return (
    <section className="relative bg-background py-20 md:py-32 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-coral/10 rounded-full blur-3xl animate-pulse-glow" />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse-glow"
          style={{ animationDelay: '1s' }}
        />
        <div
          className="absolute top-1/2 right-1/3 w-64 h-64 bg-secondary/5 rounded-full blur-3xl animate-pulse-glow"
          style={{ animationDelay: '2s' }}
        />

        {/* Floating shapes */}
        <FloatingShapes />
      </div>

      <div className="relative z-10 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-12 flex flex-col items-center">
          <SectionLabel>Stay Connected</SectionLabel>
          <h2 className="font-grotesk text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground mb-6 max-w-3xl mx-auto">
            Never miss a DSEC event
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Join our community to hear about new events first, get reminders, and connect with other Deakin students interested in software engineering.
          </p>
        </div>

        {/* Three-column CTA cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {/* Discord */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative bg-card border border-border hover:border-accent/50 rounded-3xl p-8 transition-all duration-300 h-full flex flex-col">
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent to-primary flex items-center justify-center mb-6">
                <DiscordIcon />
              </div>

              <h3 className="font-grotesk text-xl font-bold text-foreground mb-3">Join Discord</h3>
              <p className="text-muted-foreground leading-relaxed mb-6 flex-1">
                Get event announcements, chat with other members, and hear about new opportunities first.
              </p>

              <a
                href={socials.discord}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-6 py-3 bg-accent hover:bg-accent/90 text-accent-foreground rounded-xl font-semibold gap-2 flex items-center justify-center transition-all"
              >
                <DiscordIcon small />
                Join our Discord
              </a>

              {/* Decorative corner */}
              <div className="absolute top-6 right-6">
                <svg width="40" height="40" viewBox="0 0 40 40" className="text-accent/10">
                  <path d="M0 0 L40 0 L40 40" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
                </svg>
              </div>
            </div>
          </div>

          {/* Instagram */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-coral/20 to-primary/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative bg-card border border-border hover:border-coral/50 rounded-3xl p-8 transition-all duration-300 h-full flex flex-col">
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-coral to-primary flex items-center justify-center mb-6">
                <InstagramIcon />
              </div>

              <h3 className="font-grotesk text-xl font-bold text-foreground mb-3">Follow on Instagram</h3>
              <p className="text-muted-foreground leading-relaxed mb-6 flex-1">
                See event photos, recaps, and behind-the-scenes content from DSEC workshops and hackathons.
              </p>

              <a
                href={socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-6 py-3 border border-coral text-coral hover:bg-coral hover:text-coral-foreground rounded-xl font-semibold gap-2 flex items-center justify-center transition-all"
              >
                <InstagramIcon small />
                Follow @dsec.deakin
              </a>

              {/* Decorative corner */}
              <div className="absolute top-6 right-6">
                <svg width="40" height="40" viewBox="0 0 40 40" className="text-coral/10">
                  <circle cx="20" cy="20" r="18" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
                </svg>
              </div>
            </div>
          </div>

          {/* LinkedIn */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-lime/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative bg-card border border-border hover:border-secondary/50 rounded-3xl p-8 transition-all duration-300 h-full flex flex-col">
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-secondary to-lime flex items-center justify-center mb-6">
                <LinkedInIcon />
              </div>

              <h3 className="font-grotesk text-xl font-bold text-foreground mb-3">Connect on LinkedIn</h3>
              <p className="text-muted-foreground leading-relaxed mb-6 flex-1">
                Stay updated on industry events, guest speakers, and professional development opportunities.
              </p>

              <a
                href={socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-6 py-3 border border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground rounded-xl font-semibold gap-2 flex items-center justify-center transition-all"
              >
                <LinkedInIcon small />
                Follow on LinkedIn
              </a>

              {/* Decorative corner */}
              <div className="absolute top-6 right-6">
                <svg width="40" height="40" viewBox="0 0 40 40" className="text-secondary/10">
                  <rect x="2" y="2" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" rx="4" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Partner/Company note */}
        <div className="mt-16 text-center max-w-2xl mx-auto">
          <p className="text-muted-foreground mb-4">
            If you&apos;re a company or staff member interested in running a workshop, panel, or hackathon with DSEC, we&apos;d love to hear from you.
          </p>
          <TransitionLink
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 border border-foreground/20 text-foreground hover:bg-foreground/10 rounded-full font-semibold transition-all group"
          >
            <BriefcaseIcon />
            Work with us
            <ArrowIcon />
          </TransitionLink>
        </div>
      </div>

      {/* Bottom gradient bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-coral via-accent via-secondary to-lime" />
    </section>
  );
}

function FloatingShapes() {
  return (
    <>
      {/* Floating code symbols */}
      <div className="absolute top-20 left-[15%] text-5xl text-coral/10 font-mono animate-float">@</div>
      <div className="absolute top-40 right-[10%] text-6xl text-accent/10 font-mono animate-float" style={{ animationDelay: '1s' }}>
        #
      </div>
      <div className="absolute bottom-32 left-[20%] text-4xl text-secondary/10 font-mono animate-float" style={{ animationDelay: '2s' }}>
        &
      </div>
      <div className="absolute bottom-48 right-[25%] text-5xl text-lime/10 font-mono animate-float" style={{ animationDelay: '1.5s' }}>
        *
      </div>

      {/* Geometric shapes */}
      <div className="absolute top-1/3 left-[8%] w-4 h-4 bg-coral/20 rounded-full animate-float" style={{ animationDelay: '0.5s' }} />
      <div
        className="absolute bottom-1/3 right-[12%] w-6 h-6 border-2 border-accent/20 rounded-lg rotate-45 animate-float"
        style={{ animationDelay: '1.5s' }}
      />
      <div className="absolute top-1/2 left-[5%] w-3 h-3 bg-secondary/20 rotate-45 animate-float" style={{ animationDelay: '2.5s' }} />
    </>
  );
}

// Icons
function DiscordIcon({ small }: { small?: boolean }) {
  const size = small ? 'w-5 h-5' : 'w-7 h-7';
  return (
    <svg className={`${size} ${small ? '' : 'text-white'}`} fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
    </svg>
  );
}

function InstagramIcon({ small }: { small?: boolean }) {
  const size = small ? 'w-5 h-5' : 'w-7 h-7';
  return (
    <svg className={`${size} ${small ? '' : 'text-white'}`} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  );
}

function LinkedInIcon({ small }: { small?: boolean }) {
  const size = small ? 'w-5 h-5' : 'w-7 h-7';
  return (
    <svg className={`${size} ${small ? '' : 'text-white'}`} fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

function BriefcaseIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  );
}
