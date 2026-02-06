'use client';

import SectionLabel from '@/components/SectionLabel';
import GradientText from '@/components/GradientText';

export default function WhoCanJoinSection() {
  return (
    <section id="who-can-join" className="relative py-24 md:py-32 bg-muted/30 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(233,30,99,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(233,30,99,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Decorative Orbs */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16 flex flex-col items-center">
          <SectionLabel>Open to All</SectionLabel>
          <h2 className="font-grotesk text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight flex flex-wrap justify-center gap-3">
            Who Can
            <GradientText
              colors={['#e91e63', '#9c27b0', '#00bcd4', '#e91e63']}
              animationSpeed={6}
              showBorder={false}
            >
              Join?
            </GradientText>
          </h2>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto font-semibold text-foreground">
            Everyone.
          </p>
        </div>

        {/* Who Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
          <WhoCard
            icon={<StudentIcon />}
            title="Deakin Students"
            color="primary"
          />
          <WhoCard
            icon={<GlobeIcon />}
            title="Non-Deakin Students"
            color="secondary"
          />
          <WhoCard
            icon={<BeginnerIcon />}
            title="Beginners"
            color="lime"
          />
          <WhoCard
            icon={<ExpertIcon />}
            title="Experienced Devs"
            color="coral"
          />
        </div>

        {/* Message */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-lg text-muted-foreground leading-relaxed mb-10">
            If you want to <span className="text-foreground font-semibold">build real projects</span> and add actual work to your portfolio, <span className="text-primary">you belong here</span>.
          </p>

          {/* Popular Searches */}
          <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
            <h3 className="font-mono text-sm text-muted-foreground uppercase tracking-wider mb-4">
              People searching for:
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              <SearchTag>Coding clubs Melbourne</SearchTag>
              <SearchTag>Deakin tech clubs</SearchTag>
              <SearchTag>Software engineering societies</SearchTag>
              <SearchTag>Student developer groups Burwood</SearchTag>
              <SearchTag>Melbourne hackathons and workshops</SearchTag>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface WhoCardProps {
  icon: React.ReactNode;
  title: string;
  color: 'primary' | 'secondary' | 'lime' | 'coral';
}

const cardColorMap = {
  primary: {
    bg: 'bg-primary/10',
    text: 'text-primary',
    border: 'hover:border-primary/50',
    glow: 'hover:shadow-primary/10',
  },
  secondary: {
    bg: 'bg-secondary/10',
    text: 'text-secondary',
    border: 'hover:border-secondary/50',
    glow: 'hover:shadow-secondary/10',
  },
  lime: {
    bg: 'bg-lime/10',
    text: 'text-lime',
    border: 'hover:border-lime/50',
    glow: 'hover:shadow-lime/10',
  },
  coral: {
    bg: 'bg-coral/10',
    text: 'text-coral',
    border: 'hover:border-coral/50',
    glow: 'hover:shadow-coral/10',
  },
};

function WhoCard({ icon, title, color }: WhoCardProps) {
  const colors = cardColorMap[color];

  return (
    <div className={`group bg-card border border-border rounded-xl p-6 text-center transition-all duration-300 ${colors.border} hover:shadow-lg ${colors.glow}`}>
      <div className={`w-14 h-14 rounded-xl ${colors.bg} ${colors.text} flex items-center justify-center mx-auto mb-4`}>
        {icon}
      </div>
      <h3 className="font-grotesk font-semibold text-foreground">{title}</h3>
    </div>
  );
}

function SearchTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="px-4 py-2 bg-muted rounded-full text-sm text-muted-foreground hover:text-foreground transition-colors cursor-default">
      {children}
    </span>
  );
}

// Icons
function StudentIcon() {
  return (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path d="M12 14l9-5-9-5-9 5 9 5z" />
      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function BeginnerIcon() {
  return (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  );
}

function ExpertIcon() {
  return (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  );
}
