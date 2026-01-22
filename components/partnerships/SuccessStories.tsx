'use client';

import GradientText from '@/components/GradientText';
import SectionLabel from '@/components/SectionLabel';

type ColorType = 'primary' | 'secondary' | 'accent' | 'coral' | 'lime';

interface PartnerStory {
  id: number;
  partnerName: string;
  partnerType: string;
  engagementType: string;
  quote: string;
  impact: string[];
  color: ColorType;
}

const colorClasses: Record<ColorType, {
  bg: string;
  border: string;
  accent: string;
  icon: string;
}> = {
  primary: {
    bg: 'bg-primary/10',
    border: 'border-primary/30',
    accent: 'bg-primary',
    icon: 'text-primary',
  },
  secondary: {
    bg: 'bg-secondary/10',
    border: 'border-secondary/30',
    accent: 'bg-secondary',
    icon: 'text-secondary',
  },
  accent: {
    bg: 'bg-accent/10',
    border: 'border-accent/30',
    accent: 'bg-accent',
    icon: 'text-accent',
  },
  coral: {
    bg: 'bg-coral/10',
    border: 'border-coral/30',
    accent: 'bg-coral',
    icon: 'text-coral',
  },
  lime: {
    bg: 'bg-lime/10',
    border: 'border-lime/30',
    accent: 'bg-lime',
    icon: 'text-lime',
  },
};

const partnerStories: PartnerStory[] = [
  {
    id: 1,
    partnerName: 'Tech Melbourne',
    partnerType: 'Community Partner',
    engagementType: 'Workshops & Networking',
    quote: 'Partnering with DSEC connects us with passionate students who are building the future of Melbourne\'s tech scene.',
    impact: [
      'Co-hosted 3 industry panel discussions',
      'Connected 50+ students with local startups',
      'Shared insights on Melbourne tech ecosystem',
    ],
    color: 'secondary',
  },
  {
    id: 2,
    partnerName: 'Startup Victoria',
    partnerType: 'Industry Association',
    engagementType: 'Hackathon Sponsorship',
    quote: 'DSEC students bring fresh ideas and technical skills to real startup challenges. It\'s a win-win collaboration.',
    impact: [
      'Sponsored annual hackathon with $2K in prizes',
      'Mentored 15 student teams over 48 hours',
      'Recruited 2 interns from hackathon participants',
    ],
    color: 'primary',
  },
  {
    id: 3,
    partnerName: 'Local Development Firm',
    partnerType: 'Software Company',
    engagementType: 'Guest Talks & Mentorship',
    quote: 'Working with DSEC helps us give back to the community while identifying talented developers early in their careers.',
    impact: [
      'Delivered 4 technical workshops on React and Node.js',
      'Provided portfolio reviews for 30+ students',
      'Hired 3 graduates for junior developer roles',
    ],
    color: 'accent',
  },
  {
    id: 4,
    partnerName: 'Deakin University',
    partnerType: 'Academic Partner',
    engagementType: 'Ongoing Collaboration',
    quote: 'DSEC bridges the gap between classroom learning and industry practice, creating better outcomes for our students.',
    impact: [
      'Joint events with School of IT faculty',
      'Student projects aligned with coursework',
      'Venue and resource support for DSEC events',
    ],
    color: 'lime',
  },
];

export default function SuccessStories() {
  return (
    <section className="relative bg-background py-20 md:py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 px-6 md:px-12 max-w-7xl mx-auto mb-12">
        <SectionLabel>Partnership success stories</SectionLabel>
        <h2 className="font-grotesk text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground mb-6">
          Our{' '}
          <GradientText
            colors={['#e91e63', '#9c27b0', '#00bcd4']}
            animationSpeed={6}
            showBorder={false}
          >
            partners and impact
          </GradientText>
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl">
          DSEC has partnered with companies, organizations, and institutions across Melbourne to create meaningful opportunities for students and value for our partners.
        </p>
      </div>

      {/* Stories grid */}
      <div className="relative z-10 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {partnerStories.map((story) => (
            <StoryCard key={story.id} story={story} />
          ))}
        </div>
      </div>

      {/* Stats section */}
      <div className="relative z-10 px-6 md:px-12 max-w-7xl mx-auto mt-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <StatCard
            number="15+"
            label="Active partnerships"
            color="primary"
          />
          <StatCard
            number="50+"
            label="Industry events"
            color="secondary"
          />
          <StatCard
            number="800+"
            label="Student members"
            color="accent"
          />
          <StatCard
            number="20+"
            label="Guest speakers"
            color="lime"
          />
        </div>
      </div>
    </section>
  );
}

function StoryCard({ story }: { story: PartnerStory }) {
  const styles = colorClasses[story.color];

  return (
    <div className={`relative p-8 rounded-2xl border ${styles.border} ${styles.bg} hover:shadow-xl transition-all duration-300 group`}>
      {/* Quote mark decoration */}
      <div className="absolute top-4 right-4 opacity-10">
        <QuoteIcon className="w-20 h-20" />
      </div>

      <div className="relative z-10">
        {/* Partner info */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-2">
            <div className={`w-12 h-12 rounded-xl ${styles.bg} border ${styles.border} flex items-center justify-center font-grotesk font-bold text-xl ${styles.icon}`}>
              {story.partnerName.charAt(0)}
            </div>
            <div>
              <h3 className="font-grotesk text-xl font-bold text-foreground">
                {story.partnerName}
              </h3>
              <p className="text-sm text-muted-foreground">
                {story.partnerType}
              </p>
            </div>
          </div>
          <div className={`inline-flex px-3 py-1 rounded-full ${styles.bg} border ${styles.border}`}>
            <span className={`text-xs font-medium ${styles.icon}`}>
              {story.engagementType}
            </span>
          </div>
        </div>

        {/* Quote */}
        <blockquote className="mb-6">
          <p className="text-foreground leading-relaxed italic">
            &ldquo;{story.quote}&rdquo;
          </p>
        </blockquote>

        {/* Impact metrics */}
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-3">
            Partnership Impact
          </p>
          <ul className="space-y-2">
            {story.impact.map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <div className={`mt-1 w-1.5 h-1.5 rounded-full ${styles.accent} flex-shrink-0`} />
                <span className="text-sm text-muted-foreground leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

interface StatCardProps {
  number: string;
  label: string;
  color: ColorType;
}

function StatCard({ number, label, color }: StatCardProps) {
  const styles = colorClasses[color];

  return (
    <div className={`relative p-6 rounded-xl border ${styles.border} ${styles.bg} text-center group hover:scale-105 transition-transform duration-300`}>
      <div className={`font-grotesk text-3xl md:text-4xl font-bold ${styles.icon} mb-2`}>
        {number}
      </div>
      <div className="text-sm text-muted-foreground">
        {label}
      </div>
    </div>
  );
}

function QuoteIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
    </svg>
  );
}
