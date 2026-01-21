'use client';

import GradientText from '@/components/GradientText';
import SectionLabel from '../SectionLabel';

type ColorType = 'primary' | 'secondary' | 'lime' | 'accent' | 'coral';

interface ExecRole {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  color: ColorType;
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
  { id: 1, icon: <CrownIcon />, title: 'President', description: 'Leads the club, sets direction, and makes sure we actually deliver what we promise members', color: 'primary' },
  { id: 2, icon: <UsersIcon />, title: 'Vice-President', description: 'Supports the president, coordinates teams, and helps new volunteers succeed', color: 'secondary' },
  { id: 3, icon: <FileIcon />, title: 'Secretary', description: 'Keeps us organised, handles minutes, email, and DUSA paperwork', color: 'lime' },
  { id: 4, icon: <DollarIcon />, title: 'Treasurer', description: 'Keeps budgets, grants, and sponsorship money clean and compliant', color: 'accent' },
  { id: 5, icon: <PaletteIcon />, title: 'Head of Design', description: 'Creates visual identity, marketing materials, and event branding', color: 'coral' },
  { id: 6, icon: <CodeIcon />, title: 'Head of Development', description: 'Leads technical workshops, project sessions, and code review nights', color: 'secondary' },
  { id: 7, icon: <MegaphoneIcon />, title: 'Head of Marketing', description: 'Manages socials, communications, and member outreach', color: 'primary' },
  { id: 8, icon: <CalendarIcon />, title: 'Head of Events', description: 'Plans and executes hackathons, workshops, and social events', color: 'lime' },
  { id: 9, icon: <HeartIcon />, title: 'Head of Community', description: 'Moderates Discord, welcomes new members, and builds culture', color: 'accent' },
  { id: 10, icon: <GlobeIcon />, title: 'Head of External Affairs', description: 'Manages partnerships, sponsorships, and industry relationships', color: 'coral' },
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
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
    <div className={`group relative p-6 rounded-xl border bg-background/50 ${styles.bg} ${styles.border} transition-all duration-300`}>
      {/* Icon */}
      <div className={`inline-flex items-center justify-center w-10 h-10 rounded-lg ${styles.icon} mb-4`}>
        {role.icon}
      </div>

      {/* Title */}
      <h3 className="font-grotesk text-lg font-bold text-foreground mb-2">{role.title}</h3>

      {/* Description */}
      <p className="text-muted-foreground text-sm leading-relaxed">{role.description}</p>

      {/* Bottom accent line */}
      <div className={`absolute bottom-0 left-4 right-4 h-0.5 bg-border ${styles.accent} transition-colors duration-300 rounded-full`} />
    </div>
  );
}

// Icons
function CrownIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3l3.057 8.571L12 9.143l3.943 2.428L19 3l-2 10H7L5 3z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 13h10v3a2 2 0 01-2 2H9a2 2 0 01-2-2v-3z" />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  );
}

function FileIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  );
}

function DollarIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function PaletteIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
    </svg>
  );
}

function CodeIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  );
}

function MegaphoneIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}
