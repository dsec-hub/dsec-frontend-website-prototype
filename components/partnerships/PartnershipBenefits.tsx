'use client';

import GradientText from '@/components/GradientText';
import SectionLabel from '@/components/SectionLabel';

interface BenefitItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: 'primary' | 'secondary' | 'accent' | 'lime';
}

const colorClasses: Record<string, { bg: string; icon: string; border: string }> = {
  primary: {
    bg: 'bg-primary/5',
    icon: 'bg-primary/20 text-primary',
    border: 'border-primary/20',
  },
  secondary: {
    bg: 'bg-secondary/5',
    icon: 'bg-secondary/20 text-secondary',
    border: 'border-secondary/20',
  },
  accent: {
    bg: 'bg-accent/5',
    icon: 'bg-accent/20 text-accent',
    border: 'border-accent/20',
  },
  lime: {
    bg: 'bg-lime/5',
    icon: 'bg-lime/20 text-lime',
    border: 'border-lime/20',
  },
};

const benefits: BenefitItemProps[] = [
  {
    icon: <TalentIcon />,
    title: 'Access to motivated student developers',
    description: 'Connect with hundreds of software engineering students who are actively building projects, learning new technologies, and preparing for industry careers at Deakin University.',
    color: 'secondary',
  },
  {
    icon: <BrandIcon />,
    title: 'Strengthen your employer brand',
    description: 'Position your company as an industry leader in the eyes of emerging talent by supporting hands-on learning experiences and engaging directly with the next generation of developers.',
    color: 'primary',
  },
  {
    icon: <InsightsIcon />,
    title: 'Early talent pipeline and recruitment',
    description: 'Build relationships with students before they graduate, identify promising candidates through events and projects, and establish your company as an employer of choice for junior roles.',
    color: 'accent',
  },
  {
    icon: <CommunityIcon />,
    title: 'Contribute to the tech community',
    description: 'Support the growth of Melbourne\'s tech ecosystem by helping students develop practical skills, confidence, and industry connections that will benefit the entire software community.',
    color: 'lime',
  },
  {
    icon: <NetworkIcon />,
    title: 'Networking with peers and industry',
    description: 'Connect with other companies, Deakin faculty, and alumni partners at DSEC events, creating opportunities for collaboration and knowledge sharing across the Melbourne tech scene.',
    color: 'primary',
  },
  {
    icon: <FeedbackIcon />,
    title: 'Shape future software engineers',
    description: 'Share feedback on curriculum, teach in-demand skills, and help students understand what real software teams need from new graduates—while showcasing your company\'s tools and practices.',
    color: 'secondary',
  },
];

export default function PartnershipBenefits() {
  return (
    <section className="relative bg-background py-20 md:py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl" />
      </div>

      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="benefits-grid"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#benefits-grid)" />
        </svg>
      </div>

      <div className="relative z-10 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <SectionLabel>Why partner with DSEC</SectionLabel>
          <h2 className="font-grotesk text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground mb-6">
            Benefits for{' '}
            <GradientText
              colors={['#00bcd4', '#9c27b0', '#e91e63']}
              animationSpeed={6}
              showBorder={false}
            >
              industry partners
            </GradientText>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto">
            Partnering with DSEC creates meaningful value for your company while supporting the next generation of software engineers. Here&apos;s what you gain by working with us.
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} {...benefit} />
          ))}
        </div>

        {/* Bottom callout */}
        <div className="mt-16 p-8 md:p-10 rounded-2xl border border-border bg-card/50 backdrop-blur-sm">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center">
                <SparkleIcon />
              </div>
            </div>
            <div className="flex-grow">
              <h3 className="font-grotesk text-2xl font-bold text-foreground mb-2">
                Flexible partnership models
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                We understand that every company has different goals and resources. Whether you&apos;re a startup, scale-up, or enterprise, we can create a partnership that fits your objectives—from one-off workshops to ongoing mentorship programs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BenefitCard({ icon, title, description, color }: BenefitItemProps) {
  const styles = colorClasses[color];

  return (
    <div className={`group relative p-6 rounded-2xl border ${styles.border} ${styles.bg} hover:shadow-lg transition-all duration-300`}>
      {/* Decorative corner accent */}
      <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden rounded-tr-2xl opacity-20">
        <div className={`absolute -top-10 -right-10 w-20 h-20 rounded-full ${styles.icon}`} />
      </div>

      <div className="relative z-10">
        <div className={`inline-flex p-3 rounded-xl ${styles.icon} mb-4`}>
          {icon}
        </div>
        <h3 className="font-grotesk text-xl font-bold text-foreground mb-3 group-hover:text-${color} transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

// Icons
function TalentIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  );
}

function BrandIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  );
}

function InsightsIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  );
}

function CommunityIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function NetworkIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  );
}

function FeedbackIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  );
}

function SparkleIcon() {
  return (
    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  );
}
