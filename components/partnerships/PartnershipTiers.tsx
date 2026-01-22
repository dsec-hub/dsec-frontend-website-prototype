'use client';

import GradientText from '@/components/GradientText';
import SectionLabel from '@/components/SectionLabel';

interface EngagementOption {
  id: number;
  icon: React.ReactNode;
  title: string;
  tagline: string;
  description: string;
  offerings: string[];
  color: 'primary' | 'secondary' | 'accent' | 'coral';
  featured?: boolean;
}

const colorClasses: Record<string, {
  bg: string;
  border: string;
  icon: string;
  badge: string;
  glow: string;
}> = {
  primary: {
    bg: 'bg-primary/10',
    border: 'border-primary/30',
    icon: 'bg-primary/20 text-primary',
    badge: 'bg-primary text-primary-foreground',
    glow: 'shadow-primary/20',
  },
  secondary: {
    bg: 'bg-secondary/10',
    border: 'border-secondary/30',
    icon: 'bg-secondary/20 text-secondary',
    badge: 'bg-secondary text-secondary-foreground',
    glow: 'shadow-secondary/20',
  },
  accent: {
    bg: 'bg-accent/10',
    border: 'border-accent/30',
    icon: 'bg-accent/20 text-accent',
    badge: 'bg-accent text-accent-foreground',
    glow: 'shadow-accent/20',
  },
  coral: {
    bg: 'bg-coral/10',
    border: 'border-coral/30',
    icon: 'bg-coral/20 text-coral',
    badge: 'bg-coral text-coral-foreground',
    glow: 'shadow-coral/20',
  },
};

const engagementOptions: EngagementOption[] = [
  {
    id: 1,
    icon: <WorkshopIcon />,
    title: 'Guest workshops and talks',
    tagline: 'Share your expertise with students',
    description: 'Run technical workshops, guest talks, or panel discussions at DSEC events. Share your company\'s tech stack, best practices, and career advice with motivated students.',
    offerings: [
      'Technical workshops on your tools or frameworks',
      'Career panels and industry insights sessions',
      'Lightning talks at DSEC development nights',
      'Office hours for student questions and mentorship',
    ],
    color: 'primary',
  },
  {
    id: 2,
    icon: <TrophyIcon />,
    title: 'Hackathon and event sponsorship',
    tagline: 'Support hands-on learning experiences',
    description: 'Sponsor DSEC hackathons, coding challenges, or major events. Provide prizes, mentorship, and direct engagement with students tackling real problems.',
    offerings: [
      'Sponsor challenges using your API or platform',
      'Provide prizes and swag for hackathon winners',
      'Send mentors to guide students during events',
      'Logo placement and recognition across event materials',
    ],
    color: 'secondary',
    featured: true,
  },
  {
    id: 3,
    icon: <CodeIcon />,
    title: 'Project collaboration',
    tagline: 'Work with students on real software',
    description: 'Partner with DSEC on student-led software projects. Provide problem statements, mentorship, and feedback as students build real applications.',
    offerings: [
      'Define project briefs aligned with your product',
      'Review code and provide technical feedback',
      'Showcase student work to your team',
      'Identify promising candidates for internships',
    ],
    color: 'accent',
  },
  {
    id: 4,
    icon: <ReviewIcon />,
    title: 'Portfolio reviews and mentorship',
    tagline: 'Help students prepare for industry',
    description: 'Offer resume reviews, portfolio feedback, and mock interviews. Help students understand what companies look for in junior developers.',
    offerings: [
      'Resume and portfolio review sessions',
      'Mock technical interviews and feedback',
      'Career advice and networking opportunities',
      'LinkedIn profile optimization workshops',
    ],
    color: 'coral',
  },
];

export default function PartnershipTiers() {
  return (
    <section className="relative bg-card py-20 md:py-32 overflow-hidden">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <SectionLabel>Ways to engage with DSEC</SectionLabel>
          <h2 className="font-grotesk text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground mb-6">
            Partnership{' '}
            <GradientText
              colors={['#e91e63', '#00bcd4', '#c6ff00']}
              animationSpeed={6}
              showBorder={false}
            >
              opportunities
            </GradientText>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto">
            We offer flexible partnership models to fit your company's goals and resources. Choose one or combine multiple options to create a custom engagement plan.
          </p>
        </div>

        {/* Engagement options grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {engagementOptions.map((option) => (
            <EngagementCard key={option.id} {...option} />
          ))}
        </div>

        {/* Custom partnerships callout */}
        <div className="relative p-8 md:p-10 rounded-2xl border-2 border-dashed border-border bg-background/50 backdrop-blur-sm">
          <div className="text-center">
            <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-primary via-secondary to-accent mb-6">
              <CustomIcon />
            </div>
            <h3 className="font-grotesk text-2xl md:text-3xl font-bold text-foreground mb-4">
              Custom partnership packages
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto mb-6">
              Have a unique idea or want to combine multiple options? We're open to creating custom partnership packages that align with your company's specific objectives and the needs of our student community.
            </p>
            <a
              href="#contact"
              className="inline-flex px-8 py-3 bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-full font-semibold transition-all"
            >
              Let&apos;s talk about your ideas
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function EngagementCard({ icon, title, tagline, description, offerings, color, featured }: EngagementOption) {
  const styles = colorClasses[color];

  return (
    <div className={`relative group p-8 rounded-2xl border ${styles.border} ${styles.bg} hover:shadow-xl ${styles.glow} transition-all duration-300 ${featured ? 'lg:scale-[1.02]' : ''}`}>
      {/* Featured badge */}
      {featured && (
        <div className="absolute -top-3 -right-3 z-10">
          <div className={`${styles.badge} px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider shadow-lg`}>
            Popular
          </div>
        </div>
      )}

      {/* Decorative corner pattern */}
      <div className="absolute top-0 left-0 w-24 h-24 overflow-hidden rounded-tl-2xl opacity-20">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle cx="0" cy="0" r="80" fill="none" stroke="currentColor" strokeWidth="1" className={styles.icon.split(' ')[1]} />
          <circle cx="0" cy="0" r="60" fill="none" stroke="currentColor" strokeWidth="1" className={styles.icon.split(' ')[1]} />
          <circle cx="0" cy="0" r="40" fill="none" stroke="currentColor" strokeWidth="1" className={styles.icon.split(' ')[1]} />
        </svg>
      </div>

      <div className="relative z-10">
        {/* Icon */}
        <div className={`inline-flex p-4 rounded-xl ${styles.icon} mb-4`}>
          {icon}
        </div>

        {/* Title and tagline */}
        <h3 className="font-grotesk text-2xl font-bold text-foreground mb-2">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground mb-4 font-medium">
          {tagline}
        </p>

        {/* Description */}
        <p className="text-muted-foreground leading-relaxed mb-6">
          {description}
        </p>

        {/* Offerings list */}
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-3">
            What this includes
          </p>
          <ul className="space-y-2">
            {offerings.map((offering, index) => (
              <li key={index} className="flex items-start gap-2">
                <CheckIcon className={styles.icon.split(' ')[1]} />
                <span className="text-sm text-muted-foreground leading-relaxed">
                  {offering}
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
function WorkshopIcon() {
  return (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  );
}

function TrophyIcon() {
  return (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
    </svg>
  );
}

function CodeIcon() {
  return (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  );
}

function ReviewIcon() {
  return (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  );
}

function CustomIcon() {
  return (
    <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
    </svg>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={`w-4 h-4 flex-shrink-0 mt-0.5 ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );
}
