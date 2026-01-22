'use client';

import GradientText from '@/components/GradientText';
import SectionLabel from '@/components/SectionLabel';

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  details: string[];
  icon: React.ReactNode;
  color: 'primary' | 'secondary' | 'accent' | 'coral';
}

const colorClasses: Record<string, {
  bg: string;
  border: string;
  icon: string;
  number: string;
}> = {
  primary: {
    bg: 'bg-primary/10',
    border: 'border-primary/30',
    icon: 'bg-primary/20 text-primary',
    number: 'text-primary',
  },
  secondary: {
    bg: 'bg-secondary/10',
    border: 'border-secondary/30',
    icon: 'bg-secondary/20 text-secondary',
    number: 'text-secondary',
  },
  accent: {
    bg: 'bg-accent/10',
    border: 'border-accent/30',
    icon: 'bg-accent/20 text-accent',
    number: 'text-accent',
  },
  coral: {
    bg: 'bg-coral/10',
    border: 'border-coral/30',
    icon: 'bg-coral/20 text-coral',
    number: 'text-coral',
  },
};

const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Reach out',
    description: 'Contact the DSEC executive team to start the conversation',
    details: [
      'Fill out the contact form or email us directly',
      'Share your company info and partnership interests',
      'Tell us about your goals and what you\'d like to achieve',
    ],
    icon: <MessageIcon />,
    color: 'primary',
  },
  {
    number: '02',
    title: 'Discovery call',
    description: 'We\'ll schedule a call to understand your needs and explore options',
    details: [
      'Discuss your company\'s objectives and student engagement goals',
      'Explore partnership options that fit your resources',
      'Answer questions about DSEC, our members, and events',
    ],
    icon: <PhoneIcon />,
    color: 'secondary',
  },
  {
    number: '03',
    title: 'Plan together',
    description: 'Co-create a partnership plan that works for everyone',
    details: [
      'Define specific engagement activities and timelines',
      'Align on deliverables, resources, and expectations',
      'Draft a simple partnership agreement or MOU',
    ],
    icon: <PlanIcon />,
    color: 'accent',
  },
  {
    number: '04',
    title: 'Launch and iterate',
    description: 'Execute the partnership and adjust based on feedback',
    details: [
      'Run workshops, events, or other agreed activities',
      'Gather feedback from students and your team',
      'Refine and improve for future engagements',
    ],
    icon: <RocketIcon />,
    color: 'coral',
  },
];

export default function PartnershipProcess() {
  return (
    <section className="relative bg-card py-20 md:py-32 overflow-hidden">
      {/* Decorative borders */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <SectionLabel>Simple and transparent process</SectionLabel>
          <h2 className="font-grotesk text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground mb-6">
            How to{' '}
            <GradientText
              colors={['#e91e63', '#00bcd4', '#9c27b0']}
              animationSpeed={6}
              showBorder={false}
            >
              become a partner
            </GradientText>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto">
            Getting started is easy. We've designed a straightforward process to help companies of all sizes partner with DSEC and start making an impact.
          </p>
        </div>

        {/* Process steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step, index) => (
            <ProcessStepCard key={index} step={step} isLast={index === processSteps.length - 1} />
          ))}
        </div>

        {/* Bottom info box */}
        <div className="mt-16 p-8 md:p-10 rounded-2xl bg-background border border-border">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-grotesk text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                <ClockIcon />
                Timeline expectations
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                From initial contact to first event, the process typically takes 2-4 weeks. We move quickly but ensure we align on goals and logistics before launching.
              </p>
            </div>
            <div>
              <h3 className="font-grotesk text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                <SupportIcon />
                Ongoing support
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You'll have a dedicated DSEC contact throughout the partnership. We handle promotion, logistics, and student coordination so you can focus on delivering value.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProcessStepCard({ step, isLast }: { step: ProcessStep; isLast: boolean }) {
  const styles = colorClasses[step.color];

  return (
    <div className="relative">
      {/* Connection arrow - hidden on last item and on mobile */}
      {!isLast && (
        <div className="hidden lg:block absolute top-20 -right-3 z-0">
          <ArrowIcon className="w-6 h-6 text-border" />
        </div>
      )}

      <div className={`relative p-6 rounded-2xl border ${styles.border} ${styles.bg} hover:shadow-lg transition-all duration-300 h-full`}>
        {/* Step number */}
        <div className="absolute -top-4 -left-2 z-10">
          <div className={`font-mono text-5xl font-bold ${styles.number} opacity-20`}>
            {step.number}
          </div>
        </div>

        <div className="relative z-10">
          {/* Icon */}
          <div className={`inline-flex p-3 rounded-xl ${styles.icon} mb-4`}>
            {step.icon}
          </div>

          {/* Title */}
          <h3 className="font-grotesk text-xl font-bold text-foreground mb-2">
            {step.title}
          </h3>

          {/* Description */}
          <p className="text-muted-foreground text-sm leading-relaxed mb-4">
            {step.description}
          </p>

          {/* Details */}
          <ul className="space-y-2">
            {step.details.map((detail, index) => (
              <li key={index} className="flex items-start gap-2">
                <div className={`mt-1.5 w-1 h-1 rounded-full ${styles.icon.split(' ')[1]} bg-current flex-shrink-0`} />
                <span className="text-xs text-muted-foreground leading-relaxed">
                  {detail}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

// Icons
function MessageIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}

function PlanIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
    </svg>
  );
}

function RocketIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
    </svg>
  );
}

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function SupportIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  );
}
