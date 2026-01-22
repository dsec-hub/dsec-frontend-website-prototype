'use client';

import GradientText from '@/components/GradientText';
import SectionLabel from '@/components/SectionLabel';
import TransitionLink from '../TransitionLink';

export default function PartnershipsHero() {
  return (
    <section className="relative min-h-[80vh] overflow-hidden bg-background">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <ConnectionLines />
        <CodePatternBackground />
      </div>

      {/* Gradient orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse-glow" />
      <div
        className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse-glow"
        style={{ animationDelay: '1.5s' }}
      />
      <div
        className="absolute top-1/2 right-1/3 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse-glow"
        style={{ animationDelay: '2s' }}
      />

      {/* Content */}
      <div className="relative z-10 px-6 md:px-12 pt-32 pb-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Text content */}
          <div>
            <SectionLabel>Partner with DSEC</SectionLabel>

            <h1 className="font-grotesk text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground mb-6">
              Connect with Deakin&apos;s next generation of{' '}
              <GradientText
                colors={['#00bcd4', '#9c27b0', '#e91e63', '#c6ff00']}
                animationSpeed={8}
                showBorder={false}
              >
                software engineers
              </GradientText>
            </h1>

            <p className="text-xl text-secondary font-medium mb-6">
              Partner with DSEC to support motivated students, share your expertise, and build relationships with emerging tech talent at Deakin University.
            </p>

            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed mb-10">
              <p>
                DSEC partnerships create meaningful connections between industry professionals and Deakin students who are serious about software engineering. Whether you&apos;re looking to mentor, recruit, or collaborate on projects, we offer flexible ways to engage with our community.
              </p>
              <p>
                From guest talks and workshops to hackathon sponsorships and portfolio reviews, our partnerships are designed to deliver real value for both companies and students while strengthening Melbourne&apos;s tech ecosystem.
              </p>
            </div>

            {/* Value props */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
              <ValueItem
                icon={<UsersIcon />}
                text="800+ student members"
                color="secondary"
              />
              <ValueItem
                icon={<CodeIcon />}
                text="Real-world projects"
                color="accent"
              />
              <ValueItem
                icon={<TrendingIcon />}
                text="Growing community"
                color="primary"
              />
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="px-8 py-3 bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-full font-semibold gap-2 flex items-center transition-all"
              >
                <HandshakeIcon />
                Start a partnership
              </a>
              <TransitionLink
                href="/about"
                className="px-8 py-3 border border-foreground/20 text-foreground hover:bg-foreground/10 rounded-full font-semibold gap-2 flex items-center transition-all"
              >
                Learn about DSEC
              </TransitionLink>
            </div>
          </div>

          {/* Right side - Decorative illustration */}
          <div className="relative flex items-center justify-center">
            <PartnershipIllustration />
          </div>
        </div>
      </div>

      {/* Decorative floating elements */}
      <div className="absolute top-20 right-20 text-6xl text-secondary/10 font-mono animate-float">🤝</div>
      <div className="absolute bottom-40 left-16 text-5xl text-accent/10 font-mono animate-float" style={{ animationDelay: '2s' }}>
        {'{ }'}
      </div>
      <div className="absolute top-1/2 right-12 text-4xl text-primary/10 font-mono animate-float" style={{ animationDelay: '1s' }}>
        {'</>'}
      </div>
    </section>
  );
}

interface ValueItemProps {
  icon: React.ReactNode;
  text: string;
  color: 'secondary' | 'accent' | 'primary';
}

const colorClasses: Record<string, string> = {
  secondary: 'bg-secondary/20 text-secondary',
  accent: 'bg-accent/20 text-accent',
  primary: 'bg-primary/20 text-primary',
};

function ValueItem({ icon, text, color }: ValueItemProps) {
  return (
    <div className="flex items-start gap-3">
      <div className={`p-2 rounded-lg ${colorClasses[color]} shrink-0`}>
        {icon}
      </div>
      <span className="text-muted-foreground text-sm leading-relaxed">{text}</span>
    </div>
  );
}

function ConnectionLines() {
  return (
    <div className="absolute inset-0">
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00bcd4" stopOpacity="0" />
            <stop offset="50%" stopColor="#00bcd4" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#00bcd4" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="lineGradient2" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#9c27b0" stopOpacity="0" />
            <stop offset="50%" stopColor="#9c27b0" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#9c27b0" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M 0 200 Q 400 100 800 300" stroke="url(#lineGradient1)" strokeWidth="2" fill="none" />
        <path d="M 200 0 Q 500 400 900 200" stroke="url(#lineGradient2)" strokeWidth="2" fill="none" />
      </svg>
    </div>
  );
}

function CodePatternBackground() {
  const codeSnippets = [
    'partnership.create()',
    'mentor.connect()',
    'talent.discover()',
    'collaborate.build()',
    'community.grow()',
    'opportunity.unlock()',
  ];

  return (
    <div className="absolute inset-0 opacity-[0.03]">
      {codeSnippets.map((snippet, i) => (
        <div
          key={i}
          className="absolute font-mono text-xs whitespace-nowrap text-foreground"
          style={{
            left: `${(i * 15) % 100}%`,
            top: `${(i * 12) % 100}%`,
            transform: `rotate(${-5 + (i % 3) * 5}deg)`,
          }}
        >
          {snippet}
        </div>
      ))}
    </div>
  );
}

function PartnershipIllustration() {
  return (
    <div className="relative w-full max-w-md aspect-square">
      {/* Main circular element */}
      <div className="absolute inset-0 rounded-full border border-border/30" />
      <div className="absolute inset-4 rounded-full border border-border/20" />
      <div className="absolute inset-8 rounded-full border border-border/10" />

      {/* Animated rotating ring */}
      <div className="absolute inset-0 animate-spin-slow">
        <svg viewBox="0 0 400 400" className="w-full h-full">
          <defs>
            <linearGradient id="partnerRingGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00bcd4" />
              <stop offset="100%" stopColor="#9c27b0" />
            </linearGradient>
          </defs>
          <circle
            cx="200"
            cy="200"
            r="180"
            fill="none"
            stroke="url(#partnerRingGradient1)"
            strokeWidth="2"
            strokeDasharray="20 10"
            opacity="0.6"
          />
        </svg>
      </div>

      <div
        className="absolute inset-0 animate-spin-slow"
        style={{ animationDirection: 'reverse', animationDuration: '30s' }}
      >
        <svg viewBox="0 0 400 400" className="w-full h-full">
          <defs>
            <linearGradient id="partnerRingGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#e91e63" />
              <stop offset="100%" stopColor="#c6ff00" />
            </linearGradient>
          </defs>
          <circle
            cx="200"
            cy="200"
            r="150"
            fill="none"
            stroke="url(#partnerRingGradient2)"
            strokeWidth="2"
            strokeDasharray="15 8"
            opacity="0.5"
          />
        </svg>
      </div>

      {/* Center content - Handshake icon */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <div className="w-24 h-24 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center">
            <HandshakeLargeIcon />
          </div>
          <div className="font-mono text-xs text-muted-foreground tracking-widest uppercase">
            Industry · Students · Future
          </div>
        </div>
      </div>

      {/* Orbital nodes representing partnership types */}
      {[0, 72, 144, 216, 288].map((angle, i) => {
        const colors = ['bg-secondary', 'bg-accent', 'bg-primary', 'bg-lime', 'bg-coral'];
        const labels = ['Workshops', 'Mentorship', 'Sponsorship', 'Hackathons', 'Recruitment'];
        const rad = (angle * Math.PI) / 180;
        const x = 50 + 42 * Math.cos(rad);
        const y = 50 + 42 * Math.sin(rad);
        return (
          <div
            key={i}
            className="absolute group"
            style={{ left: `${x}%`, top: `${y}%`, transform: 'translate(-50%, -50%)' }}
          >
            <div className={`w-4 h-4 ${colors[i]} rounded-full animate-pulse`} style={{ animationDelay: `${i * 0.2}s` }} />
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-xs text-muted-foreground">
              {labels[i]}
            </div>
          </div>
        );
      })}
    </div>
  );
}

// Icons
function UsersIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  );
}

function CodeIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  );
}

function TrendingIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  );
}

function HandshakeIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
    </svg>
  );
}

function HandshakeLargeIcon() {
  return (
    <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
    </svg>
  );
}
