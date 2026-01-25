'use client';

import SectionLabel from '@/components/SectionLabel';
import GradientText from '@/components/GradientText';

const targetAudience = [
  {
    icon: <SoftwareIcon />,
    title: 'Software Engineering Students',
    description: 'Want hands-on security experience while building real applications.',
    color: 'primary' as const,
  },
  {
    icon: <SecurityIcon />,
    title: 'Cybersecurity Students',
    description: 'Ready to ship working code and build security tools.',
    color: 'secondary' as const,
  },
  {
    icon: <DeveloperIcon />,
    title: 'Developers',
    description: 'Looking to expand into security tooling and secure development practices.',
    color: 'coral' as const,
  },
  {
    icon: <PortfolioIcon />,
    title: 'Portfolio Builders',
    description: 'Want portfolio-ready projects and industry exposure.',
    color: 'lime' as const,
  },
];

export default function ParticipantsSection() {
  return (
    <section id="participants" className="relative py-24 md:py-32 bg-background overflow-x-clip">
      {/* Decorative Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-coral/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-lime/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Content */}
          <div className="lg:sticky lg:top-8 self-start">
            <SectionLabel>Who Should Join</SectionLabel>
            <h2 className="font-grotesk text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              You don&apos;t need to be an expert.
            </h2>
            <GradientText
              colors={['#ff6b6b', '#e91e63', '#9c27b0']}
              animationSpeed={6}
              className="font-grotesk text-2xl md:text-3xl font-bold mb-8"
            >
              You need to be willing to build.
            </GradientText>

            <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
              <p>
                This hackathon is designed for students who want to learn by doing. Whether you&apos;ve been coding for years or just started, if you&apos;re ready to put in the work, you belong here.
              </p>
              <p>
                Teams of up to 4 members. Solo participants are welcome — we&apos;ll help you find teammates before the event.
              </p>
            </div>

            {/* Team Formation Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-4 bg-card border border-border rounded-xl">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                <MatchIcon />
              </div>
              <div>
                <div className="font-semibold text-foreground">Solo? No problem.</div>
                <div className="text-sm text-muted-foreground">We&apos;ll match you with a team</div>
              </div>
            </div>
          </div>

          {/* Right - Audience Cards */}
          <div className="space-y-6">
            {targetAudience.map((item, index) => (
              <AudienceCard key={index} {...item} index={index} />
            ))}

            {/* Skill Level Note */}
            <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-coral/10 rounded-xl p-6 border border-border">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-foreground/10 flex items-center justify-center shrink-0">
                  <LevelIcon />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">All Skill Levels Welcome</h4>
                  <p className="text-sm text-muted-foreground">
                    Beginner, intermediate, or advanced — the hackathon is structured so everyone can contribute and learn. Mentors will be available to guide you throughout the event.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface AudienceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: 'primary' | 'secondary' | 'coral' | 'lime';
  index: number;
}

const cardColors = {
  primary: {
    icon: 'bg-primary/20 text-primary',
    border: 'hover:border-primary/30',
    number: 'text-primary/30',
  },
  secondary: {
    icon: 'bg-secondary/20 text-secondary',
    border: 'hover:border-secondary/30',
    number: 'text-secondary/30',
  },
  coral: {
    icon: 'bg-coral/20 text-coral',
    border: 'hover:border-coral/30',
    number: 'text-coral/30',
  },
  lime: {
    icon: 'bg-lime/20 text-lime',
    border: 'hover:border-lime/30',
    number: 'text-lime/30',
  },
};

function AudienceCard({ icon, title, description, color, index }: AudienceCardProps) {
  const styles = cardColors[color];

  return (
    <div className={`group relative bg-card border border-border rounded-xl p-6 transition-all duration-300 ${styles.border} hover:shadow-lg`}>
      {/* Index Number */}
      <div className={`absolute top-4 right-4 font-grotesk text-4xl font-bold ${styles.number}`}>
        {(index + 1).toString().padStart(2, '0')}
      </div>

      <div className="flex items-start gap-4">
        <div className={`w-12 h-12 rounded-xl ${styles.icon} flex items-center justify-center shrink-0`}>
          {icon}
        </div>
        <div className="pr-12">
          <h3 className="font-grotesk text-lg font-bold text-foreground mb-2">{title}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
}

// Icons
function SoftwareIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  );
}

function SecurityIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    </svg>
  );
}

function DeveloperIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

function PortfolioIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

function MatchIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  );
}

function LevelIcon() {
  return (
    <svg className="w-5 h-5 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  );
}
