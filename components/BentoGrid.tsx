'use client';

import TransitionLink from './TransitionLink';

type ColorType = 'primary' | 'secondary' | 'lime' | 'accent';

interface BentoCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
  color: ColorType;
  className?: string;
  large?: boolean;
}

const colorClasses: Record<ColorType, {
  bg: string;
  border: string;
  icon: string;
  arrow: string;
  glow: string;
}> = {
  primary: {
    bg: 'bg-primary/10 hover:bg-primary/15',
    border: 'border-primary/20 hover:border-primary/40',
    icon: 'text-primary bg-primary/20',
    arrow: 'bg-primary text-primary-foreground',
    glow: 'group-hover:shadow-primary/20',
  },
  secondary: {
    bg: 'bg-secondary/10 hover:bg-secondary/15',
    border: 'border-secondary/20 hover:border-secondary/40',
    icon: 'text-secondary bg-secondary/20',
    arrow: 'bg-secondary text-secondary-foreground',
    glow: 'group-hover:shadow-secondary/20',
  },
  lime: {
    bg: 'bg-lime/10 hover:bg-lime/15',
    border: 'border-lime/20 hover:border-lime/40',
    icon: 'text-lime bg-lime/20',
    arrow: 'bg-lime text-lime-foreground',
    glow: 'group-hover:shadow-lime/20',
  },
  accent: {
    bg: 'bg-accent/10 hover:bg-accent/15',
    border: 'border-accent/20 hover:border-accent/40',
    icon: 'text-accent bg-accent/20',
    arrow: 'bg-accent text-accent-foreground',
    glow: 'group-hover:shadow-accent/20',
  },
};

export default function BentoGrid() {
  return (
    <section className="relative bg-background py-20 md:py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="mb-12 md:mb-16">
          <p className="mb-4 font-mono text-sm tracking-wider text-primary uppercase">
            Choose how you want to get involved
          </p>
          <h2 className="font-grotesk text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground mb-6 max-w-3xl">
            Your starting point
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl">
            Pick a path that fits where you are right now. Whether you want to join an event, ship a project, follow along on socials, or talk about a partnership, these tiles are your starting point.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {/* Card 1 - Events (Large) */}
          <BentoCard
            icon={<CalendarIcon />}
            title="Events and workshops"
            description="See what is happening this trimester across Burwood and online. From intro coding nights to deep dive tech talks and hands on project sprints, DSEC events are where you meet people and learn faster together."
            href="/events"
            color="primary"
            className="lg:col-span-2 lg:row-span-2"
            large
          />

          {/* Card 2 - Projects */}
          <BentoCard
            icon={<CodeIcon />}
            title="Student software projects"
            description="Browse real software built by Deakin students in DSEC teams. Explore web apps, tools, and experiments with links to GitHub."
            href="/projects"
            color="secondary"
            className="lg:col-span-2"
          />

          {/* Card 3 - Blog */}
          <BentoCard
            icon={<NewspaperIcon />}
            title="Blog and club updates"
            description="Catch up on event recaps, project launches, hackathon stories, and news from the Deakin software engineering community."
            href="/blog"
            color="lime"
          />

          {/* Card 4 - Community */}
          <BentoCard
            icon={<MessageIcon />}
            title="Community and socials"
            description="Join the DSEC Discord server and follow us on Instagram and LinkedIn to stay close to the club."
            href="/community"
            color="accent"
          />
        </div>
      </div>
    </section>
  );
}

function BentoCard({ icon, title, description, href, color, className = '', large }: BentoCardProps) {
  const styles = colorClasses[color];

  return (
    <TransitionLink
      href={href}
      className={`group relative flex flex-col justify-between p-6 md:p-8 rounded-2xl border transition-all duration-300 ${styles.bg} ${styles.border} ${styles.glow} group-hover:shadow-xl ${className} ${large ? 'min-h-[400px]' : 'min-h-[220px]'}`}
    >
      {/* Animated background pattern */}
      <div className="absolute inset-0 overflow-hidden rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <GridPattern color={color} />
      </div>

      <div className="relative z-10">
        <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${styles.icon} mb-4`}>
          {icon}
        </div>
        <h3 className={`font-grotesk font-bold text-foreground mb-3 ${large ? 'text-2xl md:text-3xl' : 'text-xl'}`}>
          {title}
        </h3>
        <p className={`text-muted-foreground leading-relaxed ${large ? 'text-base md:text-lg max-w-md' : 'text-sm'}`}>
          {description}
        </p>
      </div>

      <div className="relative z-10 mt-6">
        <div className={`inline-flex items-center justify-center w-10 h-10 rounded-full ${styles.arrow} opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-2 transition-all duration-300`}>
          <ArrowRightIcon />
        </div>
      </div>

      {/* Corner decoration for large cards */}
      {large && (
        <div className="absolute bottom-0 right-0 w-48 h-48 pointer-events-none opacity-20">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            {Array.from({ length: 5 }).map((_, i) => (
              <circle
                key={i}
                cx="100"
                cy="100"
                r={20 + i * 15}
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                className={color === 'primary' ? 'text-primary' : color === 'secondary' ? 'text-secondary' : color === 'lime' ? 'text-lime' : 'text-accent'}
              />
            ))}
          </svg>
        </div>
      )}
    </TransitionLink>
  );
}

function GridPattern({ color }: { color: string }) {
  const colorMap: Record<string, string> = {
    primary: '#e91e63',
    secondary: '#00bcd4',
    lime: '#c6ff00',
    accent: '#9c27b0',
  };

  return (
    <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id={`grid-${color}`} width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="1" fill={colorMap[color]} opacity="0.3" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#grid-${color})`} />
    </svg>
  );
}

// Icons
function CalendarIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  );
}

function CodeIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  );
}

function NewspaperIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
    </svg>
  );
}

function MessageIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  );
}
