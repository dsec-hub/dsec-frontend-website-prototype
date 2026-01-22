'use client';

import GradientText from '@/components/GradientText';
import SectionLabel from '../SectionLabel';
import Image from 'next/image';

type ColorType = 'primary' | 'secondary' | 'lime' | 'accent' | 'coral';

interface ExecRole {
  id: number;
  title: string;
  description: string;
  color: ColorType;
  filled: boolean;
  personName?: string;
  personImage?: string;
}

const colorClasses: Record<ColorType, {
  bg: string;
  border: string;
  icon: string;
  accent: string;
}> = {
  primary: {
    bg: 'hover:bg-primary/10',
    border: 'border-primary/20 hover:border-primary/40',
    icon: 'bg-primary/20 text-primary',
    accent: 'group-hover:bg-primary',
  },
  secondary: {
    bg: 'hover:bg-secondary/10',
    border: 'border-secondary/20 hover:border-secondary/40',
    icon: 'bg-secondary/20 text-secondary',
    accent: 'group-hover:bg-secondary',
  },
  lime: {
    bg: 'hover:bg-lime/10',
    border: 'border-lime/20 hover:border-lime/40',
    icon: 'bg-lime/20 text-lime',
    accent: 'group-hover:bg-lime',
  },
  accent: {
    bg: 'hover:bg-accent/10',
    border: 'border-accent/20 hover:border-accent/40',
    icon: 'bg-accent/20 text-accent',
    accent: 'group-hover:bg-accent',
  },
  coral: {
    bg: 'hover:bg-coral/10',
    border: 'border-coral/20 hover:border-coral/40',
    icon: 'bg-coral/20 text-coral',
    accent: 'group-hover:bg-coral',
  },
};

const execRoles: ExecRole[] = [
  { id: 1, title: 'President', description: 'Leads the club, sets direction, and makes sure we actually deliver what we promise members', color: 'primary', filled: true, personName: 'Sam Smith', personImage: '/sam.jpg' },
  { id: 2, title: 'Vice-President', description: 'Supports the president, coordinates teams, and helps new volunteers succeed', color: 'secondary', filled: true, personName: 'Sam Smith', personImage: '/sam.jpg' },
  { id: 3, title: 'Brand Executive', description: 'Creates visual identity, marketing materials, and manages socials and communications', color: 'coral', filled: true, personName: 'Sam Smith', personImage: '/sam.jpg' },
  { id: 4, title: 'Head of Community and Engagement', description: 'Moderates Discord, welcomes new members, and builds culture', color: 'accent', filled: false },
  { id: 6, title: 'Head of External Affairs', description: 'Manages partnerships, sponsorships, and industry relationships', color: 'primary', filled: false },
  { id: 7, title: 'Web Development Lead', description: 'Leads web development projects, workshops, and code reviews', color: 'secondary', filled: false },
  { id: 8, title: 'App Development Lead', description: 'Leads mobile and desktop app development projects and workshops', color: 'coral', filled: false },
  { id: 9, title: 'Game Development Lead', description: 'Leads game development projects, jams, and technical workshops', color: 'accent', filled: false },
  { id: 10, title: 'Automations Lead', description: 'Leads automation projects, bot development, and scripting workshops', color: 'lime', filled: false },
  { id: 11, title: 'Robotics Lead', description: 'Leads robotics projects, hardware workshops, and embedded systems sessions', color: 'primary', filled: false },
];

export default function ExecTeamSection() {
  return (
    <section className="relative bg-card py-20 md:py-32 overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
        <svg className="absolute inset-0 w-full h-full">
          <defs>
            <pattern id="execGrid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" className="text-foreground" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#execGrid)" />
        </svg>
      </div>

      <div className="relative z-10 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="mb-12 md:mb-16">
          <SectionLabel
          >
            Who runs DSEC
          </SectionLabel>
          <h2 className="font-grotesk text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground mb-6">
            Meet the DSEC executive team
          </h2>
          <div className="max-w-3xl space-y-4">
            <p className="text-muted-foreground text-lg leading-relaxed">
              DSEC is led by a volunteer executive committee of Deakin students who handle everything from event planning and sponsorship to Discord moderation and code review nights. Executives are elected at our Annual General Meeting each year, following DUSA club rules and requirements.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Below you&apos;ll find our executive roles. The exact people change every year, but the responsibilities stay consistent so the club can grow sustainably.
            </p>
          </div>
        </div>

        {/* Role cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {execRoles.map((role) => (
            <RoleCard key={role.id} role={role} />
          ))}
        </div>

        {/* Closing CTA */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground text-lg mb-6 max-w-2xl mx-auto">
            If you are a Deakin student who cares about building communities, this is one of the best ways to grow your leadership and project skills while you study.
          </p>
          <button className="px-8 py-3 border border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full font-semibold transition-all">
            See open volunteer roles
          </button>
        </div>
      </div>
    </section>
  );
}

function RoleCard({ role }: { role: ExecRole }) {
  const styles = colorClasses[role.color];

  return (
    <div className={`group relative rounded-xl border bg-background/50 ${styles.bg} ${styles.border} transition-all duration-300 overflow-hidden`}>
      {/* Image section */}
      <div className="relative w-full aspect-square bg-muted">
        {role.filled && role.personImage ? (
          <Image
            src={role.personImage}
            alt={role.personName || role.title}
            fill
            className="object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center p-6">
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${styles.icon} mb-3`}>
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <p className="text-sm font-semibold text-muted-foreground">Position Open</p>
            </div>
          </div>
        )}
      </div>

      {/* Content section */}
      <div className="p-6">
        {/* Name if filled */}
        {role.filled && role.personName && (
          <p className="text-sm font-semibold text-foreground mb-1">{role.personName}</p>
        )}

        {/* Title */}
        <h3 className="font-grotesk text-lg font-bold text-foreground mb-2">{role.title}</h3>

        {/* Description */}
        <p className="text-muted-foreground text-sm leading-relaxed">{role.description}</p>
      </div>

      {/* Bottom accent line */}
      <div className={`absolute bottom-0 left-4 right-4 h-0.5 bg-border ${styles.accent} transition-colors duration-300 rounded-full`} />
    </div>
  );
}

