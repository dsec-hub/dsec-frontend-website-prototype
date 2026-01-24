'use client';

import SectionLabel from '@/components/SectionLabel';

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 md:py-32 bg-background overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-secondary/5 rounded-full blur-[100px]" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <SectionLabel>About the Event</SectionLabel>
            <h2 className="font-grotesk text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              What is ACUSYS x DSEC?
            </h2>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                ACUSYS x DSEC is a <span className="text-foreground font-semibold">36-hour hackathon</span> bringing together students from universities across Australia to solve real-world problems at the intersection of software development and cybersecurity.
              </p>
              <p>
                Whether you&apos;re a developer who wants to understand security, a security enthusiast who wants to build tools, or somewhere in between — <span className="text-coral">this is your event</span>.
              </p>
              <p>
                In-person participation available in Melbourne. Online participation open Australia-wide.
              </p>
            </div>

            {/* Feature Tags */}
            <div className="flex flex-wrap gap-3 mt-8">
              <FeatureTag icon={<CodeIcon />} text="Software Dev" color="primary" />
              <FeatureTag icon={<ShieldIcon />} text="Cybersecurity" color="secondary" />
              <FeatureTag icon={<BridgeIcon />} text="Cross-University" color="coral" />
              <FeatureTag icon={<AustraliaIcon />} text="Australia-Wide" color="lime" />
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            {/* Main Card */}
            <div className="relative bg-card border border-border rounded-2xl p-8 overflow-hidden">
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 border-primary/50 rounded-tl-2xl" />
              <div className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-secondary/50 rounded-br-2xl" />

              {/* Code-like visualization */}
              <div className="font-mono text-sm space-y-3">
                <div className="flex items-center gap-2">
                  <span className="text-muted-foreground">//</span>
                  <span className="text-primary">HACKATHON_CONFIG</span>
                </div>
                <div className="pl-4 space-y-2">
                  <CodeLine label="name" value='"ACUSYS x DSEC 2026"' color="lime" />
                  <CodeLine label="duration" value="36" suffix="hours" color="coral" />
                  <CodeLine label="focus" value='["software", "security"]' color="secondary" />
                  <CodeLine label="teams" value="{ max: 4, solo: true }" color="primary" />
                  <CodeLine label="prizes" value='"cash + sponsor rewards"' color="accent" />
                </div>
                <div className="flex items-center gap-2 pt-2">
                  <span className="text-muted-foreground">//</span>
                  <span className="text-muted-foreground animate-pulse">Ready to initialize...</span>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-3 -right-3 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-bold rotate-12 shadow-lg shadow-primary/25">
                FREE ENTRY
              </div>
            </div>

            {/* Decorative floating elements */}
            <div className="absolute -top-6 -left-6 w-12 h-12 bg-secondary/20 rounded-lg rotate-12 animate-float" />
            <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-primary/20 rounded-full animate-float" style={{ animationDelay: '1s' }} />
            <div className="absolute top-1/2 -left-8 w-4 h-4 bg-coral/30 rounded-sm animate-float" style={{ animationDelay: '2s' }} />
          </div>
        </div>
      </div>
    </section>
  );
}

interface CodeLineProps {
  label: string;
  value: string;
  suffix?: string;
  color: 'primary' | 'secondary' | 'coral' | 'lime' | 'accent';
}

const colorMap = {
  primary: 'text-primary',
  secondary: 'text-secondary',
  coral: 'text-coral',
  lime: 'text-lime',
  accent: 'text-accent',
};

function CodeLine({ label, value, suffix, color }: CodeLineProps) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-muted-foreground">{label}:</span>
      <span className={colorMap[color]}>{value}</span>
      {suffix && <span className="text-muted-foreground">// {suffix}</span>}
    </div>
  );
}

interface FeatureTagProps {
  icon: React.ReactNode;
  text: string;
  color: 'primary' | 'secondary' | 'coral' | 'lime';
}

const tagColorMap = {
  primary: 'bg-primary/10 text-primary border-primary/20',
  secondary: 'bg-secondary/10 text-secondary border-secondary/20',
  coral: 'bg-coral/10 text-coral border-coral/20',
  lime: 'bg-lime/10 text-lime border-lime/20',
};

function FeatureTag({ icon, text, color }: FeatureTagProps) {
  return (
    <div className={`flex items-center gap-2 px-4 py-2 rounded-full border ${tagColorMap[color]}`}>
      {icon}
      <span className="text-sm font-medium">{text}</span>
    </div>
  );
}

// Icons
function CodeIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  );
}

function BridgeIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  );
}

function AustraliaIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}
