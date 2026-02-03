'use client';

import GradientText from '@/components/GradientText';

export default function FollowUsSection() {
  return (
    <section id="follow-us" className="relative py-24 md:py-32 bg-background overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,188,212,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,188,212,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

        {/* Gradient Orbs */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-secondary/20 via-lime/10 to-transparent rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-tl from-primary/20 via-coral/10 to-transparent rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: '1.5s' }} />

        {/* Floating Elements */}
        <div className="absolute top-20 right-20 w-4 h-4 bg-secondary rounded-full animate-float opacity-50" />
        <div className="absolute top-1/3 left-10 w-3 h-3 bg-lime rounded-full animate-float opacity-50" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-20 left-1/3 w-5 h-5 bg-coral rounded-full animate-float opacity-50" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-primary rounded-full animate-float opacity-50" style={{ animationDelay: '0.5s' }} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 text-center flex flex-col items-center">
        {/* Headline */}
        <div className="mb-8">
          <h2 className="font-grotesk text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight">
            Follow Us
            <br />
            <span className="text-muted-foreground">Before the Stall</span>
          </h2>
          <GradientText
            colors={['#00bcd4', '#c6ff00', '#00bcd4']}
            animationSpeed={4}
            className="font-grotesk text-2xl md:text-3xl font-bold"
          >
            Don&apos;t miss announcements, workshop drops, or last-minute perks
          </GradientText>
        </div>

        {/* Social Links */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 w-full max-w-xl">
          <a
            href="https://instagram.com/deakin.sec"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-full sm:w-auto px-8 py-5 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] rounded-full font-bold text-lg transition-all overflow-hidden flex items-center justify-center gap-3 text-white"
          >
            <span className="relative z-10 flex items-center gap-3">
              <InstagramIcon />
              @deakin.sec
            </span>
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          </a>

          <a
            href="https://linkedin.com/company/deakinsec"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-full sm:w-auto px-8 py-5 bg-[#0A66C2] hover:bg-[#0A66C2]/90 rounded-full font-bold text-lg transition-all overflow-hidden flex items-center justify-center gap-3 text-white"
          >
            <span className="relative z-10 flex items-center gap-3">
              <LinkedInIcon />
              Deakin SEC
            </span>
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          </a>
        </div>

        {/* Discord Callout */}
        <div className="bg-card border border-border rounded-2xl p-6 mb-12 max-w-md">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-xl bg-[#5865F2]/10 text-[#5865F2] flex items-center justify-center">
              <DiscordIcon />
            </div>
            <div className="text-left">
              <h3 className="font-grotesk font-bold text-foreground">Discord Server</h3>
              <p className="text-sm text-muted-foreground">Join link available at the stall</p>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="mb-8">
          <a
            href="/events"
            className="group relative px-10 py-5 bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-full font-bold text-lg transition-all overflow-hidden flex items-center gap-3"
          >
            <span className="relative z-10 flex items-center gap-3">
              <CalendarIcon />
              View T1 Events Calendar
            </span>
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          </a>
        </div>

        {/* Closing Message */}
        <div className="max-w-2xl">
          <p className="text-xl text-muted-foreground leading-relaxed">
            See you <span className="text-foreground font-semibold">Feb 23-24</span>. Bring questions, bring mates, leave with a plan to{' '}
            <span className="text-secondary">ship something real</span> this trimester.
          </p>
        </div>

        {/* Event Details Reminder */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
          <TrustBadge icon={<LocationIcon />} text="Burwood Sports Hall" />
          <TrustBadge icon={<CalendarSmallIcon />} text="Feb 23-24" />
          <TrustBadge icon={<ClockIcon />} text="11:30am - 2:30pm" />
          <TrustBadge icon={<PriceIcon />} text="$5 DUSA / $7.50" />
        </div>
      </div>

      {/* Bottom Gradient Line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary via-lime to-primary" />
    </section>
  );
}

interface TrustBadgeProps {
  icon: React.ReactNode;
  text: string;
}

function TrustBadge({ icon, text }: TrustBadgeProps) {
  return (
    <div className="flex items-center gap-2 text-muted-foreground">
      <span className="w-5 h-5">{icon}</span>
      <span className="text-sm">{text}</span>
    </div>
  );
}

// Icons
function InstagramIcon() {
  return (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function DiscordIcon() {
  return (
    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function CalendarSmallIcon() {
  return (
    <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function PriceIcon() {
  return (
    <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}
