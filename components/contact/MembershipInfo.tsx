'use client';

import GradientText from '@/components/GradientText';
import SectionLabel from '../SectionLabel';

export default function MembershipInfo() {
  const steps = [
    {
      number: 1,
      title: 'Make sure you are eligible',
      description: 'Only current enrolled Deakin students can join as Deakin Student Members with voting rights and eligibility for executive roles. Non-Deakin students can often join as associate members with some limitations, as set out in DUSA membership terms.',
      icon: <UserCheckIcon />,
      color: 'secondary',
    },
    {
      number: 2,
      title: 'Visit the DUSA website',
      description: 'Go to the DUSA website and open the DSEC club page. Look for Deakin Software Engineering Club in the clubs list, or use the Join this club link on our DUSA profile.',
      icon: <GlobeIcon />,
      color: 'primary',
    },
    {
      number: 3,
      title: 'Purchase your membership',
      description: 'Follow the prompts on the DUSA checkout to join the club for the current year. Membership is rolling and usually lasts for twelve months from the date of signup.',
      icon: <TicketIcon />,
      color: 'accent',
    },
    {
      number: 4,
      title: 'Join our Discord and say hi',
      description: 'After you join through DUSA, use the links on our website or Instagram to join the DSEC Discord server, which is where we share updates, answer questions, and coordinate project teams.',
      icon: <DiscordIcon />,
      color: 'lime',
    },
  ];

  return (
    <section id="membership" className="relative bg-background py-16 md:py-24 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse-glow"
          style={{ animationDelay: '1s' }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse-glow"
          style={{ animationDelay: '2s' }}
        />
      </div>

      <div className="relative z-10 px-6 md:px-12 max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-12 max-w-3xl">
          <SectionLabel
          >
            Join DSEC
          </SectionLabel>
          <h2 className="font-grotesk text-3xl md:text-4xl font-bold leading-tight text-foreground mb-4">
            How to join the Deakin Software Engineering Club
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            DSEC is a DUSA affiliated club. That means official membership is handled through the DUSA website, not through our own forms. Joining through DUSA gives you voting rights at meetings and helps DUSA support clubs across Deakin.
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {steps.map((step) => (
            <StepCard key={step.number} step={step} />
          ))}
        </div>

        {/* CTA and help note */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Join button */}
          <div className="p-8 rounded-2xl bg-gradient-to-br from-secondary/10 to-accent/10 border border-secondary/20">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center">
                <DUSAIcon />
              </div>
              <div>
                <h3 className="font-grotesk text-xl font-bold text-foreground">Ready to join?</h3>
                <p className="text-muted-foreground text-sm">Become a DSEC member through DUSA</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Head to the DUSA website to officially join DSEC. You&apos;ll need your Deakin student login to complete the membership process.
            </p>
            <a
              href="https://www.dusa.org.au/clubs/deakin-software-engineering-club-dsec"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-xl font-semibold transition-all"
            >
              <ExternalLinkIcon />
              Join on DUSA website
            </a>
          </div>

          {/* Help note */}
          <div className="p-8 rounded-2xl bg-muted/30 border border-border">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-lime/20 text-lime shrink-0">
                <HelpIcon />
              </div>
              <div>
                <h3 className="font-grotesk text-xl font-bold text-foreground mb-2">Not sure about your membership?</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  If you are not sure whether you have an active membership, you can still contact us through this page and we will help you check.
                </p>
                <a
                  href="#contact-form"
                  className="inline-flex items-center gap-2 text-lime hover:text-lime/80 font-medium transition-colors"
                >
                  <MessageIcon />
                  Ask us about membership
                  <ArrowIcon />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Important note */}
        <div className="mt-8 p-6 rounded-2xl bg-primary/5 border border-primary/20">
          <div className="flex items-start gap-4">
            <div className="p-2 rounded-lg bg-primary/20 text-primary shrink-0">
              <InfoIcon />
            </div>
            <div>
              <p className="text-foreground font-medium mb-1">Important: DUSA membership is required for full access</p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                If you want to become a financial member of DSEC, you do that through the DUSA website, not through contact forms on this page. Only current Deakin students who hold a valid DUSA club membership can be full club members with voting rights and eligibility for executive roles.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface Step {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const colorClasses: Record<string, { bg: string; border: string; iconBg: string }> = {
  secondary: { bg: 'bg-secondary/5', border: 'border-secondary/20', iconBg: 'bg-gradient-to-br from-secondary to-cyan' },
  primary: { bg: 'bg-primary/5', border: 'border-primary/20', iconBg: 'bg-gradient-to-br from-primary to-coral' },
  accent: { bg: 'bg-accent/5', border: 'border-accent/20', iconBg: 'bg-gradient-to-br from-accent to-primary' },
  lime: { bg: 'bg-lime/5', border: 'border-lime/20', iconBg: 'bg-gradient-to-br from-lime to-secondary' },
};

function StepCard({ step }: { step: Step }) {
  const colors = colorClasses[step.color];

  return (
    <div className={`relative p-6 rounded-2xl ${colors.bg} ${colors.border} border`}>
      {/* Step number badge */}
      <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-foreground text-background font-bold text-sm flex items-center justify-center">
        {step.number}
      </div>

      <div className="flex items-start gap-4">
        {/* Icon */}
        <div className={`w-12 h-12 rounded-xl ${colors.iconBg} flex items-center justify-center shrink-0`}>
          {step.icon}
        </div>

        <div>
          <h3 className="font-grotesk text-lg font-bold text-foreground mb-2">{step.title}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
        </div>
      </div>
    </div>
  );
}

// Icons
function UserCheckIcon() {
  return (
    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
    </svg>
  );
}

function TicketIcon() {
  return (
    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
    </svg>
  );
}

function DiscordIcon() {
  return (
    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
    </svg>
  );
}

function DUSAIcon() {
  return (
    <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  );
}

function HelpIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function MessageIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  );
}

function InfoIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}
