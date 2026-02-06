'use client';

import SectionLabel from '@/components/SectionLabel';
import GradientText from '@/components/GradientText';
import { Terminal, TypingAnimation, AnimatedSpan } from '@/components/ui/terminal';

export default function LiveDemosSection() {
  return (
    <section id="live-demos" className="relative py-24 md:py-32 bg-background overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-[100px]" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/5 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Visual - Terminal Demo */}
          <div className="relative order-2 lg:order-1">
            <Terminal className="max-w-full">
              <TypingAnimation className="text-secondary">{`// DSEC LIVE DEMOS`}</TypingAnimation>
              <AnimatedSpan className="text-muted-foreground">
                <span className="text-muted-foreground">projects:</span> [
              </AnimatedSpan>
              <AnimatedSpan className="text-muted-foreground pl-4">
                <span className="text-coral">&quot;robotics/arduino-builds&quot;</span>,
              </AnimatedSpan>
              <AnimatedSpan className="text-muted-foreground pl-4">
                <span className="text-secondary">&quot;web/portfolio-sites&quot;</span>,
              </AnimatedSpan>
              <AnimatedSpan className="text-muted-foreground pl-4">
                <span className="text-lime">&quot;apps/mobile-prototypes&quot;</span>,
              </AnimatedSpan>
              <AnimatedSpan className="text-muted-foreground">
                ]
              </AnimatedSpan>
              <AnimatedSpan className="text-muted-foreground">
                <span className="text-muted-foreground">status:</span>{' '}
                <span className="text-lime">&quot;live_at_stall&quot;</span>
              </AnimatedSpan>
              <AnimatedSpan className="text-muted-foreground">
                <span className="text-muted-foreground">github:</span>{' '}
                <span className="text-secondary">&quot;real_student_repos&quot;</span>
              </AnimatedSpan>
              <TypingAnimation className="text-muted-foreground">{`// Come see them in action...`}</TypingAnimation>
            </Terminal>

            {/* Floating decorations */}
            <div className="absolute -top-6 -left-6 w-12 h-12 bg-primary/20 rounded-lg rotate-12 animate-float" />
            <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-secondary/20 rounded-full animate-float" style={{ animationDelay: '1s' }} />
            <div className="absolute top-1/2 -left-8 w-4 h-4 bg-coral/30 rounded-sm animate-float" style={{ animationDelay: '2s' }} />
          </div>

          {/* Right Content */}
          <div className="order-1 lg:order-2">
            <SectionLabel>See It In Action</SectionLabel>
            <h2 className="font-grotesk text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight flex flex-wrap gap-3">
              Live
              <GradientText
                colors={['#e91e63', '#ff6b6b', '#00bcd4', '#e91e63']}
                animationSpeed={6}
                showBorder={false}
              >
                Demos
              </GradientText>
              at the Stall
            </h2>

            <div className="space-y-8 text-muted-foreground leading-relaxed">
              {/* Robotics */}
              <DemoItem
                icon={<RoboticsIcon />}
                title="Robotics Showcase"
                description="Arduino-powered builds from our hardware team. See real circuits, sensors, and automation in action."
                color="coral"
              />

              {/* Web Projects */}
              <DemoItem
                icon={<WebIcon />}
                title="Web Projects"
                description="See what last trimester's members shipped. Full-stack apps, portfolio sites, and more."
                color="secondary"
              />

              {/* App Prototypes */}
              <DemoItem
                icon={<AppIcon />}
                title="App Prototypes"
                description="Real student work, real GitHub repos. Mobile apps and desktop tools built by DSEC members."
                color="lime"
              />
            </div>

            <div className="mt-10 p-4 bg-card border border-border rounded-xl">
              <p className="text-muted-foreground text-sm">
                <span className="text-foreground font-semibold">Got questions?</span> Ask us anything about joining a project team, getting started in tech, or what workshops are running this trimester.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface DemoItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: 'primary' | 'secondary' | 'coral' | 'lime';
}

const colorMap = {
  primary: {
    bg: 'bg-primary/10',
    text: 'text-primary',
    border: 'border-primary/20',
  },
  secondary: {
    bg: 'bg-secondary/10',
    text: 'text-secondary',
    border: 'border-secondary/20',
  },
  coral: {
    bg: 'bg-coral/10',
    text: 'text-coral',
    border: 'border-coral/20',
  },
  lime: {
    bg: 'bg-lime/10',
    text: 'text-lime',
    border: 'border-lime/20',
  },
};

function DemoItem({ icon, title, description, color }: DemoItemProps) {
  const colors = colorMap[color];

  return (
    <div className={`flex gap-4 p-4 rounded-xl border ${colors.border} ${colors.bg} bg-opacity-50`}>
      <div className={`w-12 h-12 rounded-lg ${colors.bg} ${colors.text} flex items-center justify-center shrink-0`}>
        {icon}
      </div>
      <div>
        <h3 className="font-grotesk text-lg font-semibold text-foreground mb-1">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}

// Icons
function RoboticsIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
    </svg>
  );
}

function WebIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
    </svg>
  );
}

function AppIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
  );
}
