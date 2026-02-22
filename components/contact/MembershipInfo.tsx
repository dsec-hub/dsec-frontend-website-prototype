'use client';

import SectionLabel from '../SectionLabel';

export default function MembershipInfo() {
  return (
    <section className="relative bg-background py-16 md:py-24 overflow-hidden">
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
          <SectionLabel>Membership</SectionLabel>
          <h2 className="font-grotesk text-3xl md:text-4xl font-bold leading-tight text-foreground mb-4">
            Two ways to be part of DSEC
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Everyone is welcome at DSEC. Create an account and start showing up — that makes you a community member. But if you want the full experience with all perks and benefits, you&apos;ll also want to become an official member through DUSA.
          </p>
        </div>

        {/* Two-tier comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {/* Community Member */}
          <div className="relative p-8 rounded-2xl bg-card/50 border border-border">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-secondary to-cyan flex items-center justify-center">
                <UsersIcon />
              </div>
              <div>
                <h3 className="font-grotesk text-xl font-bold text-foreground">Community Member</h3>
                <p className="text-muted-foreground text-sm">Free — just create an account</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
              Create an account on our website and you&apos;re in. Show up to events, join our Discord, and start building with the community.
            </p>
            <div className="space-y-3">
              {[
                'Attend workshops and events',
                'Join project teams and collaborate on GitHub',
                'Access our Discord community',
                'Earn coins for event attendance',
                'Get featured in our showcase gallery',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <CheckIcon className="shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <a
                href="#join-form"
                className="inline-flex items-center gap-2 px-6 py-3 bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-xl font-semibold transition-all text-sm"
              >
                Create your account
                <ArrowIcon />
              </a>
            </div>
          </div>

          {/* Full DUSA Member */}
          <div className="relative p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20">
            <div className="absolute -top-3 right-6 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider">
              Full Access
            </div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <StarIcon />
              </div>
              <div>
                <h3 className="font-grotesk text-xl font-bold text-foreground">Official DUSA Member</h3>
                <p className="text-muted-foreground text-sm">Account + DUSA signup</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
              Everything a community member gets, plus full access to all DSEC perks, partnerships, voting rights, and eligibility for executive roles.
            </p>
            <div className="space-y-3">
              {[
                'Everything community members get',
                'Full access to partnership perks and sponsor benefits',
                'Voting rights at club meetings',
                'Eligibility for executive and leadership roles',
                'Priority access to industry events and panels',
                'Official Deakin club membership on your record',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <CheckIcon className="shrink-0 mt-0.5 text-primary" />
                  <span className="text-sm text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <a
                href="https://www.dusa.org.au/clubs/deakin-software-engineering-club-dsec"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl font-semibold transition-all text-sm"
              >
                <ExternalLinkIcon />
                Join on DUSA website
              </a>
            </div>
          </div>
        </div>

        {/* How to become a full member */}
        <div className="mb-12">
          <h3 className="font-grotesk text-2xl font-bold text-foreground mb-6">How to become an official member</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                number: 1,
                title: 'Create your DSEC account',
                description: 'Sign up on this page to join the community and get access to events and projects.',
                icon: <UserPlusIcon />,
                color: 'secondary',
              },
              {
                number: 2,
                title: 'Check your eligibility',
                description: 'Full DUSA membership requires current Deakin enrolment. Non-Deakin members can join as associates.',
                icon: <UserCheckIcon />,
                color: 'primary',
              },
              {
                number: 3,
                title: 'Sign up through DUSA',
                description: 'Visit the DUSA website and join the Deakin Software Engineering Club to unlock full membership.',
                icon: <GlobeIcon />,
                color: 'accent',
              },
              {
                number: 4,
                title: 'Join Discord and say hi',
                description: 'Join our Discord server where we share updates, coordinate project teams, and hang out.',
                icon: <DiscordIcon />,
                color: 'lime',
              },
            ].map((step) => (
              <StepCard key={step.number} step={step} />
            ))}
          </div>
        </div>

        {/* Help / Questions */}
        <div className="p-8 rounded-2xl bg-muted/30 border border-border">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-secondary/20 text-secondary shrink-0">
              <HelpIcon />
            </div>
            <div>
              <h3 className="font-grotesk text-xl font-bold text-foreground mb-2">Got questions?</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Not sure which membership is right for you, or have any other questions? Drop us a message through our contact form and we&apos;ll get back to you as soon as we can. You can also reach us on our community Discord or any of our socials.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-secondary/10 hover:bg-secondary/20 text-secondary rounded-xl font-medium transition-all text-sm border border-secondary/20"
                >
                  <MessageIcon />
                  Contact form
                </a>
                <a
                  href="/socials"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-muted hover:bg-muted/80 text-foreground rounded-xl font-medium transition-all text-sm border border-border"
                >
                  Our socials
                  <ArrowIcon />
                </a>
              </div>
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
    <div className={`relative p-5 rounded-2xl ${colors.bg} ${colors.border} border`}>
      <div className="absolute -top-3 -left-3 w-7 h-7 rounded-full bg-foreground text-background font-bold text-xs flex items-center justify-center">
        {step.number}
      </div>
      <div className={`w-10 h-10 rounded-xl ${colors.iconBg} flex items-center justify-center mb-3`}>
        {step.icon}
      </div>
      <h4 className="font-grotesk text-sm font-bold text-foreground mb-1">{step.title}</h4>
      <p className="text-muted-foreground text-xs leading-relaxed">{step.description}</p>
    </div>
  );
}

// Icons
function CheckIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={`w-4 h-4 text-secondary ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
    </svg>
  );
}

function UserPlusIcon() {
  return (
    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
    </svg>
  );
}

function UserCheckIcon() {
  return (
    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
    </svg>
  );
}

function DiscordIcon() {
  return (
    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
