'use client';

import SectionLabel from '@/components/SectionLabel';

const sponsorBenefits = [
  {
    icon: <LogoIcon />,
    title: 'Logo Placement',
    description: 'Your brand featured on event materials, website, and communications.',
  },
  {
    icon: <JudgeIcon />,
    title: 'Judging Opportunities',
    description: 'Send representatives to judge submissions and interact with participants.',
  },
  {
    icon: <TrophyIcon />,
    title: 'Prize Category Naming',
    description: 'Name a prize category and define what you want to see from participants.',
  },
  {
    icon: <TalentIcon />,
    title: 'Direct Access',
    description: 'Connect directly with talented tech students from across Australia.',
  },
];

export default function SponsorSection() {
  return (
    <section id="sponsor" className="relative py-24 md:py-32 bg-muted/30 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-coral/10 via-primary/5 to-transparent rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-secondary/10 via-lime/5 to-transparent rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <SectionLabel>Sponsorship</SectionLabel>
            <h2 className="font-grotesk text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Sponsor the Hackathon
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Put your brand in front of tech students from universities across Australia.
              Connect with the next generation of software engineers and cybersecurity professionals.
            </p>

            {/* Benefits Grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {sponsorBenefits.map((benefit, index) => (
                <BenefitCard key={index} {...benefit} />
              ))}
            </div>

            <p className="text-muted-foreground mb-6">
              Custom sponsorship packages available. Let&apos;s discuss how we can make this partnership work for you.
            </p>

            <a
              href="#partner"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-coral to-primary hover:opacity-90 text-white rounded-full font-semibold transition-all"
            >
              <EmailIcon />
              Sponsorship Enquiry
            </a>
          </div>

          {/* Right - Sponsor Tiers Preview */}
          <div className="relative">
            {/* Tier Cards */}
            <div className="space-y-4">
              <TierCard
                tier="Gold"
                tagline="Maximum visibility and engagement"
                features={['Prime logo placement', 'Keynote opportunity', 'Named prize category', 'Judge seats', 'Talent pipeline access']}
                color="coral"
                featured
              />
              <TierCard
                tier="Silver"
                tagline="Strong presence and recognition"
                features={['Logo on materials', 'Booth space', 'Workshop slot', 'Recruitment access']}
                color="secondary"
              />
              <TierCard
                tier="Bronze"
                tagline="Support and visibility"
                features={['Logo recognition', 'Social mentions', 'Swag distribution']}
                color="primary"
              />
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 border-2 border-dashed border-coral/30 rounded-2xl rotate-12" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 border-2 border-dashed border-secondary/30 rounded-xl -rotate-6" />
          </div>
        </div>
      </div>
    </section>
  );
}

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function BenefitCard({ icon, title, description }: BenefitCardProps) {
  return (
    <div className="flex items-start gap-3">
      <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
        {icon}
      </div>
      <div>
        <h4 className="font-semibold text-foreground mb-1 text-sm">{title}</h4>
        <p className="text-xs text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}

interface TierCardProps {
  tier: string;
  tagline: string;
  features: string[];
  color: 'coral' | 'secondary' | 'primary';
  featured?: boolean;
}

const tierColors = {
  coral: {
    badge: 'bg-coral text-coral-foreground',
    border: 'border-coral/30',
    check: 'text-coral',
  },
  secondary: {
    badge: 'bg-secondary text-secondary-foreground',
    border: 'border-secondary/30',
    check: 'text-secondary',
  },
  primary: {
    badge: 'bg-primary text-primary-foreground',
    border: 'border-primary/30',
    check: 'text-primary',
  },
};

function TierCard({ tier, tagline, features, color, featured }: TierCardProps) {
  const styles = tierColors[color];

  return (
    <div className={`relative bg-card border ${styles.border} rounded-xl p-5 transition-all duration-300 hover:shadow-lg ${featured ? 'scale-[1.02]' : ''}`}>
      {featured && (
        <div className="absolute -top-3 right-4 px-3 py-1 bg-coral text-coral-foreground text-xs font-bold rounded-full">
          POPULAR
        </div>
      )}
      <div className="flex items-start justify-between gap-4">
        <div>
          <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${styles.badge} mb-2`}>
            {tier}
          </span>
          <p className="text-sm text-muted-foreground">{tagline}</p>
        </div>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {features.map((feature, index) => (
          <span key={index} className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
            <CheckIcon className={styles.check} />
            {feature}
          </span>
        ))}
      </div>
    </div>
  );
}

// Icons
function LogoIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
    </svg>
  );
}

function JudgeIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function TrophyIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  );
}

function TalentIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={`w-3 h-3 ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
    </svg>
  );
}
