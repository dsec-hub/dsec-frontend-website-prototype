'use client';

import SectionLabel from '@/components/SectionLabel';
import GradientText from '@/components/GradientText';

export default function AfterYouJoinSection() {
  return (
    <section id="after-you-join" className="relative py-24 md:py-32 bg-background overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-secondary/5 rounded-full blur-[100px]" />
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-lime/5 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16 flex flex-col items-center">
          <SectionLabel>Your Journey</SectionLabel>
          <h2 className="font-grotesk text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight flex flex-wrap justify-center gap-3">
            What Happens
            <GradientText
              colors={['#00bcd4', '#c6ff00', '#00e5ff', '#00bcd4']}
              animationSpeed={6}
              showBorder={false}
            >
              After You Join?
            </GradientText>
          </h2>
        </div>

        {/* Steps */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute left-8 top-8 bottom-8 w-px bg-gradient-to-b from-secondary via-lime to-primary hidden md:block" />

            <div className="space-y-8">
              <StepCard
                number={1}
                title="Access Discord Server"
                description="Join 400+ members in our active daily community. Get help, share projects, and connect with fellow developers."
                color="secondary"
                highlight="400+ members"
              />
              <StepCard
                number={2}
                title="T1 Workshop Roster"
                description="Get added to the Trimester 1 workshop schedule. Learn new technologies and build your skills."
                color="lime"
                highlight="Starts March 9th"
              />
              <StepCard
                number={3}
                title="Choose Your Team"
                description="Pick a project team that matches your interests: web development, mobile apps, robotics, or automations."
                color="coral"
                highlight="Web • App • Robotics • Automations"
              />
              <StepCard
                number={4}
                title="Start Earning Coins"
                description="From day one, participate in activities to earn coins. Redeem them for merch and perks."
                color="primary"
                highlight="Day One"
              />
            </div>
          </div>
        </div>

        {/* First Event Callout */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col items-center bg-card border border-border rounded-2xl p-8 max-w-md">
            <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
              <CalendarIcon />
            </div>
            <span className="font-mono text-sm text-muted-foreground uppercase tracking-wider mb-2">
              First Event
            </span>
            <h3 className="font-grotesk text-2xl font-bold text-foreground mb-2">
              Welcome Mixer
            </h3>
            <p className="text-muted-foreground mb-4">
              Meet the team, your fellow members, and learn what&apos;s coming this trimester.
            </p>
            <div className="flex items-center gap-4 text-sm">
              <span className="flex items-center gap-2 text-primary">
                <CalendarSmallIcon />
                March 9th
              </span>
              <span className="flex items-center gap-2 text-primary">
                <ClockIcon />
                5:30pm
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface StepCardProps {
  number: number;
  title: string;
  description: string;
  color: 'primary' | 'secondary' | 'lime' | 'coral';
  highlight: string;
}

const stepColorMap = {
  primary: {
    bg: 'bg-primary',
    light: 'bg-primary/10',
    text: 'text-primary',
    border: 'border-primary/20',
  },
  secondary: {
    bg: 'bg-secondary',
    light: 'bg-secondary/10',
    text: 'text-secondary',
    border: 'border-secondary/20',
  },
  lime: {
    bg: 'bg-lime',
    light: 'bg-lime/10',
    text: 'text-lime',
    border: 'border-lime/20',
  },
  coral: {
    bg: 'bg-coral',
    light: 'bg-coral/10',
    text: 'text-coral',
    border: 'border-coral/20',
  },
};

function StepCard({ number, title, description, color, highlight }: StepCardProps) {
  const colors = stepColorMap[color];

  return (
    <div className="flex gap-6 items-start">
      {/* Number Circle */}
      <div className={`relative z-10 w-16 h-16 rounded-full ${colors.bg} flex items-center justify-center shrink-0`}>
        <span className="font-grotesk text-2xl font-bold text-background">{number}</span>
      </div>

      {/* Content */}
      <div className={`flex-1 bg-card border ${colors.border} rounded-xl p-6 transition-all duration-300 hover:shadow-lg`}>
        <div className="flex items-start justify-between gap-4 mb-2">
          <h3 className="font-grotesk text-xl font-bold text-foreground">{title}</h3>
          <span className={`px-3 py-1 ${colors.light} ${colors.text} rounded-full text-xs font-mono shrink-0`}>
            {highlight}
          </span>
        </div>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}

// Icons
function CalendarIcon() {
  return (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  );
}

function CalendarSmallIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}
