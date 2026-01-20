'use client';

type EventType = 'workshop' | 'hackathon' | 'talk' | 'social' | 'coding';
type LocationType = 'burwood' | 'online';

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  timezone: string;
  location: string;
  locationType: LocationType;
  description: string;
  type: EventType;
  humanitixUrl: string;
}

// Example events - these would typically come from an API or CMS
const upcomingEvents: Event[] = [
  {
    id: '1',
    title: 'Intro to Git and GitHub for Deakin students',
    date: 'Wed 12 March',
    time: '5:30 pm – 7:30 pm',
    timezone: 'AEDT',
    location: 'Melbourne Burwood Campus',
    locationType: 'burwood',
    description: 'A beginner-friendly coding workshop hosted by the Deakin Software Engineering Club. Learn how to use Git and GitHub to track your code, work in branches, open pull requests, and collaborate with other Deakin students on projects.',
    type: 'workshop',
    humanitixUrl: '#',
  },
  {
    id: '2',
    title: 'React crash course: build your first web app',
    date: 'Thu 27 March',
    time: '4:00 pm – 7:00 pm',
    timezone: 'AEDT',
    location: 'Online (Zoom link after registration)',
    locationType: 'online',
    description: 'A practical online workshop where DSEC members walk you through building a small React app from scratch. Perfect for students who know some HTML/CSS/JS and want to see how modern web apps are built.',
    type: 'workshop',
    humanitixUrl: '#',
  },
  {
    id: '3',
    title: 'DSEC mini-hackathon: build a student tool in one day',
    date: 'Sat 5 April',
    time: '10:00 am – 6:00 pm',
    timezone: 'AEDT',
    location: 'Melbourne Burwood Campus',
    locationType: 'burwood',
    description: 'A one-day hackathon for Deakin students interested in software engineering, computer science, or IT. Form a team, pick a problem related to student life or campus, and build a working prototype by the end of the day. Includes mentoring and pizza.',
    type: 'hackathon',
    humanitixUrl: '#',
  },
];

const typeColors: Record<EventType, { bg: string; text: string; border: string; icon: string }> = {
  workshop: { bg: 'bg-secondary/10', text: 'text-secondary', border: 'border-secondary/30 hover:border-secondary/50', icon: 'bg-secondary' },
  hackathon: { bg: 'bg-coral/10', text: 'text-coral', border: 'border-coral/30 hover:border-coral/50', icon: 'bg-coral' },
  talk: { bg: 'bg-accent/10', text: 'text-accent', border: 'border-accent/30 hover:border-accent/50', icon: 'bg-accent' },
  social: { bg: 'bg-lime/10', text: 'text-lime', border: 'border-lime/30 hover:border-lime/50', icon: 'bg-lime' },
  coding: { bg: 'bg-primary/10', text: 'text-primary', border: 'border-primary/30 hover:border-primary/50', icon: 'bg-primary' },
};

const typeLabels: Record<EventType, string> = {
  workshop: 'Workshop',
  hackathon: 'Hackathon',
  talk: 'Industry Talk',
  social: 'Social',
  coding: 'Coding Night',
};

export default function EventCardsGrid() {
  const hasEvents = upcomingEvents.length > 0;

  return (
    <section id="events" className="relative bg-background py-16 md:py-24">
      <div className="px-6 md:px-12 max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-12">
          <p className="mb-4 font-mono text-sm tracking-wider text-coral uppercase">Upcoming DSEC Events</p>
          <h2 className="font-grotesk text-3xl md:text-4xl font-bold leading-tight text-foreground mb-4 max-w-2xl">
            Browse upcoming tech events for Deakin students
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl">
            Each event card shows the basics—what it is, when it runs, where it is—and links to Humanitix for full details and registration.
          </p>
        </div>

        {/* Events grid */}
        {hasEvents ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <EventCard key={event.id} event={event} index={index} />
            ))}
          </div>
        ) : (
          <EventsEmptyState />
        )}

        {/* Helper text */}
        <div className="mt-10 p-6 rounded-2xl bg-muted/30 border border-border">
          <div className="flex items-start gap-4">
            <div className="p-2 rounded-lg bg-secondary/20 text-secondary shrink-0">
              <InfoIcon />
            </div>
            <div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                All final details—room, accessibility, catering, and ticket info—are always kept up to date on the Humanitix page linked from each card. Click &quot;Register on Humanitix&quot; to see full event information and secure your spot.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function EventCard({ event, index }: { event: Event; index: number }) {
  const typeStyle = typeColors[event.type];

  return (
    <div
      className={`group relative flex flex-col bg-card border ${typeStyle.border} rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary/5`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Animated background on hover */}
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 ${typeStyle.bg} transition-opacity duration-300`} />

      {/* Corner decoration */}
      <div className="absolute top-0 right-0 w-24 h-24 overflow-hidden pointer-events-none">
        <div className={`absolute -top-12 -right-12 w-24 h-24 ${typeStyle.icon} opacity-10 rounded-full`} />
      </div>

      <div className="relative z-10 flex flex-col flex-1 p-6">
        {/* Header with type badge and location */}
        <div className="flex items-start justify-between mb-4">
          <div className={`flex items-center gap-2 px-3 py-1 rounded-full ${typeStyle.bg}`}>
            <EventTypeIcon type={event.type} />
            <span className={`text-xs font-medium ${typeStyle.text}`}>{typeLabels[event.type]}</span>
          </div>
          <LocationBadge type={event.locationType} />
        </div>

        {/* Date and time */}
        <div className="flex items-center gap-2 mb-3 text-muted-foreground">
          <CalendarIcon />
          <span className="text-sm font-medium">
            {event.date} · {event.time} ({event.timezone})
          </span>
        </div>

        {/* Content */}
        <div className="flex-1">
          <h3 className="font-grotesk text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
            {event.title}
          </h3>

          <div className="flex items-center gap-2 mb-3 text-muted-foreground text-sm">
            <LocationIcon />
            <span>{event.location}</span>
          </div>

          <p className="text-muted-foreground text-sm leading-relaxed mb-6">
            {event.description}
          </p>
        </div>

        {/* CTA */}
        <a
          href={event.humanitixUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-coral hover:bg-coral/90 text-coral-foreground rounded-xl font-medium transition-all group/btn"
        >
          <TicketIcon />
          Register on Humanitix
          <ExternalLinkIcon />
        </a>
      </div>
    </div>
  );
}

function LocationBadge({ type }: { type: LocationType }) {
  if (type === 'online') {
    return (
      <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-lime/10 text-lime text-xs font-medium">
        <div className="w-2 h-2 rounded-full bg-lime animate-pulse" />
        Online
      </div>
    );
  }
  return (
    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-medium">
      <div className="w-2 h-2 rounded-full bg-secondary" />
      On campus – Burwood
    </div>
  );
}

function EventsEmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-6 text-center rounded-2xl border border-border bg-card">
      <div className="w-20 h-20 mb-6 rounded-full bg-muted flex items-center justify-center">
        <CalendarEmptyIcon />
      </div>
      <h3 className="font-grotesk text-2xl font-bold text-foreground mb-3">
        No public events are scheduled yet
      </h3>
      <p className="text-muted-foreground max-w-lg mb-8">
        We don&apos;t have any public events listed at the moment—most likely because we are between trimesters or finalising approvals with DUSA. As soon as new DSEC events are confirmed for Deakin students at Burwood or online, they will appear here with Humanitix registration links.
      </p>

      <div className="space-y-4 text-left max-w-md">
        <p className="text-muted-foreground text-sm font-medium">In the meantime, you can:</p>
        <ul className="space-y-3 text-muted-foreground text-sm">
          <li className="flex items-start gap-3">
            <div className="p-1.5 rounded-lg bg-accent/20 text-accent shrink-0 mt-0.5">
              <DiscordSmallIcon />
            </div>
            <span>Join the DSEC Discord server to hear about new events first</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="p-1.5 rounded-lg bg-primary/20 text-primary shrink-0 mt-0.5">
              <SocialIcon />
            </div>
            <span>Follow us on Instagram and LinkedIn for announcements and recaps</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="p-1.5 rounded-lg bg-secondary/20 text-secondary shrink-0 mt-0.5">
              <ExternalLinkSmallIcon />
            </div>
            <span>Check the DUSA &quot;What&apos;s On&quot; page for other student events across Deakin</span>
          </li>
        </ul>
      </div>

      <div className="mt-8 pt-6 border-t border-border w-full max-w-md">
        <p className="text-muted-foreground text-xs">
          If you are a company or staff member interested in running a workshop, panel, or hackathon with DSEC, contact us via the Work with us form—we can plan something for a future trimester.
        </p>
      </div>
    </div>
  );
}

// Icons
function EventTypeIcon({ type }: { type: EventType }) {
  switch (type) {
    case 'workshop':
      return (
        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      );
    case 'hackathon':
      return (
        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      );
    case 'talk':
      return (
        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
        </svg>
      );
    case 'social':
      return (
        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      );
    case 'coding':
      return (
        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      );
    default:
      return null;
  }
}

function CalendarIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  );
}

function CalendarEmptyIcon() {
  return (
    <svg className="w-10 h-10 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function TicketIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg className="w-3.5 h-3.5 opacity-0 group-hover/btn:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
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

function DiscordSmallIcon() {
  return (
    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
    </svg>
  );
}

function SocialIcon() {
  return (
    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  );
}

function ExternalLinkSmallIcon() {
  return (
    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  );
}
