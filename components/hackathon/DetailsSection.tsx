'use client';

import SectionLabel from '@/components/SectionLabel';

const eventDetails = [
  {
    icon: <CalendarIcon />,
    label: 'Date',
    value: 'March 28-29, 2026',
    description: 'Weekend event',
    color: 'primary' as const,
  },
  {
    icon: <ClockIcon />,
    label: 'Duration',
    value: '36 Hours',
    description: 'Non-stop hacking',
    color: 'coral' as const,
  },
  {
    icon: <LocationIcon />,
    label: 'Location',
    value: 'Hybrid Event',
    description: 'Melbourne (Burwood) + Online',
    color: 'secondary' as const,
  },
  {
    icon: <TeamIcon />,
    label: 'Team Size',
    value: 'Up to 4',
    description: 'Solo welcome too',
    color: 'lime' as const,
  },
  {
    icon: <TrophyIcon />,
    label: 'Prizes',
    value: 'Cash + More',
    description: 'Details coming soon',
    color: 'accent' as const,
  },
  {
    icon: <TicketIcon />,
    label: 'Cost',
    value: 'FREE',
    description: 'No entry fee',
    color: 'primary' as const,
  },
];

export default function DetailsSection() {
  return (
    <section id="details" className="relative py-24 md:py-32 bg-muted/30 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,188,212,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,188,212,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Decorative Orbs */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <SectionLabel>Event Details</SectionLabel>
          <h2 className="font-grotesk text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Everything You Need to Know
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Mark your calendar and prepare for 36 hours of innovation, collaboration, and code.
          </p>
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {eventDetails.map((detail, index) => (
            <DetailCard key={index} {...detail} />
          ))}
        </div>

        {/* Additional Info Box */}
        <div className="mt-12 bg-card border border-border rounded-2xl p-8 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-coral" />

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-grotesk text-xl font-bold text-foreground mb-4 flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl bg-secondary/20 flex items-center justify-center">
                  <MapPinIcon />
                </span>
                Melbourne In-Person Venue
              </h3>
              <p className="text-muted-foreground mb-4">
                In-person attendees will hack at <span className="text-foreground font-semibold">Deakin University Burwood Campus</span>. Exact building and room details will be shared closer to the event.
              </p>
              <div className="flex flex-wrap gap-3">
                <InfoBadge icon={<WifiIcon />} text="Fast WiFi" />
                <InfoBadge icon={<FoodIcon />} text="Food Provided" />
                <InfoBadge icon={<PowerIcon />} text="Power Outlets" />
              </div>
            </div>

            <div>
              <h3 className="font-grotesk text-xl font-bold text-foreground mb-4 flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl bg-lime/20 flex items-center justify-center text-lime">
                  <OnlineIcon />
                </span>
                Online Participation
              </h3>
              <p className="text-muted-foreground mb-4">
                Can&apos;t make it to Melbourne? Join from anywhere in Australia through our <span className="text-foreground font-semibold">Discord server</span> with full access to mentors, workshops, and judging.
              </p>
              <div className="flex flex-wrap gap-3">
                <InfoBadge icon={<DiscordIcon />} text="Discord Server" />
                <InfoBadge icon={<MentorIcon />} text="Online Mentors" />
                <InfoBadge icon={<JudgeIcon />} text="Equal Judging" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface DetailCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  description: string;
  color: 'primary' | 'secondary' | 'coral' | 'lime' | 'accent';
}

const colorStyles = {
  primary: {
    bg: 'bg-primary/10',
    text: 'text-primary',
    border: 'hover:border-primary/50',
    glow: 'group-hover:shadow-primary/10',
  },
  secondary: {
    bg: 'bg-secondary/10',
    text: 'text-secondary',
    border: 'hover:border-secondary/50',
    glow: 'group-hover:shadow-secondary/10',
  },
  coral: {
    bg: 'bg-coral/10',
    text: 'text-coral',
    border: 'hover:border-coral/50',
    glow: 'group-hover:shadow-coral/10',
  },
  lime: {
    bg: 'bg-lime/10',
    text: 'text-lime',
    border: 'hover:border-lime/50',
    glow: 'group-hover:shadow-lime/10',
  },
  accent: {
    bg: 'bg-accent/10',
    text: 'text-accent',
    border: 'hover:border-accent/50',
    glow: 'group-hover:shadow-accent/10',
  },
};

function DetailCard({ icon, label, value, description, color }: DetailCardProps) {
  const styles = colorStyles[color];

  return (
    <div className={`group bg-card border border-border rounded-xl p-6 transition-all duration-300 ${styles.border} hover:shadow-lg ${styles.glow}`}>
      <div className={`w-12 h-12 rounded-xl ${styles.bg} ${styles.text} flex items-center justify-center mb-4`}>
        {icon}
      </div>
      <div className="text-sm text-muted-foreground font-mono uppercase tracking-wider mb-1">
        {label}
      </div>
      <div className="font-grotesk text-2xl font-bold text-foreground mb-1">
        {value}
      </div>
      <div className="text-sm text-muted-foreground">
        {description}
      </div>
    </div>
  );
}

interface InfoBadgeProps {
  icon: React.ReactNode;
  text: string;
}

function InfoBadge({ icon, text }: InfoBadgeProps) {
  return (
    <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-muted rounded-full text-sm text-muted-foreground">
      {icon}
      {text}
    </span>
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

function ClockIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function TeamIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  );
}

function TrophyIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  );
}

function TicketIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg className="w-5 h-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function OnlineIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function WifiIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
    </svg>
  );
}

function FoodIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  );
}

function PowerIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  );
}

function DiscordIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
    </svg>
  );
}

function MentorIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  );
}

function JudgeIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}
