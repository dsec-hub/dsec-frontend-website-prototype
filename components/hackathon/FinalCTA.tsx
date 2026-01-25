'use client';

import GradientText from '@/components/GradientText';

export default function FinalCTA() {
  return (
    <section id="register" className="relative py-24 md:py-32 bg-background overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(233,30,99,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(233,30,99,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

        {/* Gradient Orbs */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-primary/20 via-coral/10 to-transparent rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-tl from-secondary/20 via-lime/10 to-transparent rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: '1.5s' }} />

        {/* Floating Elements */}
        <div className="absolute top-20 right-20 w-4 h-4 bg-primary rounded-full animate-float opacity-50" />
        <div className="absolute top-1/3 left-10 w-3 h-3 bg-secondary rounded-full animate-float opacity-50" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-20 left-1/3 w-5 h-5 bg-coral rounded-full animate-float opacity-50" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-lime rounded-full animate-float opacity-50" style={{ animationDelay: '0.5s' }} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 text-center flex flex-col items-center">
        {/* Headline */}
        <div className="mb-8">
          <h2 className="font-grotesk text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight">
            36 hours.
            <br />
            Real problems.
          </h2>
          <GradientText
            colors={['#e91e63', '#ff6b6b', '#00bcd4', '#c6ff00']}
            animationSpeed={4}
            className="font-grotesk text-4xl md:text-5xl lg:text-6xl font-bold"
          >
            Ship something.
          </GradientText>
        </div>

        {/* Date Badge */}
        <div className="inline-flex items-center gap-3 px-6 py-3 bg-card border border-border rounded-full mb-10">
          <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
          <span className="font-mono text-lg text-foreground">
            March 28-29, 2026 — Melbourne + Online
          </span>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href="#"
            className="group relative px-10 py-5 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full font-bold text-lg transition-all overflow-hidden flex items-center gap-3"
          >
            <span className="relative z-10 flex items-center gap-3">
              <RocketIcon />
              Register for the Hackathon
            </span>
            {/* Shimmer effect */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          </a>
        </div>

        {/* Additional Info */}
        <p className="text-muted-foreground mb-8">
          Spots are limited for in-person participation.
          <br />
          Online participation open Australia-wide.
        </p>

        {/* Trust Badges */}
        <div className="flex flex-wrap items-center justify-center gap-6">
          <TrustBadge icon={<FreeIcon />} text="Free Entry" />
          <TrustBadge icon={<TeamIcon />} text="Solo or Team" />
          <TrustBadge icon={<SupportIcon />} text="Mentorship" />
          <TrustBadge icon={<PrizeIcon />} text="Cash Prizes" />
        </div>
      </div>

      {/* Bottom Gradient Line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-lime" />
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
function RocketIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  );
}

function FreeIcon() {
  return (
    <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function TeamIcon() {
  return (
    <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  );
}

function SupportIcon() {
  return (
    <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  );
}

function PrizeIcon() {
  return (
    <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  );
}
