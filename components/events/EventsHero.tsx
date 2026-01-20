'use client';

import TransitionLink from '../TransitionLink';

export default function EventsHero() {
  return (
    <section className="relative min-h-[80vh] overflow-hidden bg-background">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <FloatingShapes />
        <CalendarBackground />
      </div>

      {/* Gradient orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-coral/10 rounded-full blur-3xl animate-pulse-glow" />
      <div
        className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse-glow"
        style={{ animationDelay: '1.5s' }}
      />
      <div
        className="absolute top-1/2 right-1/3 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse-glow"
        style={{ animationDelay: '2s' }}
      />

      {/* Content */}
      <div className="relative z-10 px-6 md:px-12 pt-32 pb-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Text content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-muted/50 border border-border/50 rounded-full px-4 py-2 mb-8">
              <HumanitixIcon />
              <span className="text-sm text-muted-foreground">Events registered through Humanitix</span>
            </div>

            <p className="mb-4 font-mono text-sm tracking-wider text-coral uppercase">DSEC Events</p>

            <h1 className="font-grotesk text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground mb-6">
              Tech events for Deakin students at Burwood and online
            </h1>

            <p className="text-xl text-secondary font-medium mb-6">
              Join events from the Deakin Software Engineering Club (DSEC) to learn new skills, meet other developers, and connect with industry—on campus at Melbourne Burwood and in online sessions.
            </p>

            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed mb-10">
              <p>
                DSEC events are run by students, for students. We host coding workshops, development sessions, hackathons, industry talks, and casual meetups that help Deakin students turn theory into practical software engineering experience. Most events are held at the Burwood campus, with some online options so you can join from anywhere.
              </p>
              <p>
                Every event is designed to be friendly, beginner-aware, and useful for your portfolio or career. You will see events focused on hands-on coding, tools like Git and GitHub, web development, cloud, and more—plus guest speakers from industry and alumni who share how they got into tech.
              </p>
            </div>

            {/* Who this page is for */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
              <AudienceItem
                icon={<StudentIcon />}
                text="Deakin students looking for tech events"
                color="coral"
              />
              <AudienceItem
                icon={<CalendarCheckIcon />}
                text="Members checking dates and registration"
                color="secondary"
              />
              <AudienceItem
                icon={<BriefcaseIcon />}
                text="Companies wanting to engage students"
                color="primary"
              />
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#events"
                className="px-8 py-3 bg-coral hover:bg-coral/90 text-coral-foreground rounded-full font-semibold gap-2 flex items-center transition-all"
              >
                <CalendarIcon />
                See upcoming events
              </a>
              <TransitionLink
                href="/about"
                className="px-8 py-3 border border-foreground/20 text-foreground hover:bg-foreground/10 rounded-full font-semibold gap-2 flex items-center transition-all"
              >
                Learn about DSEC
              </TransitionLink>
            </div>
          </div>

          {/* Right side - Decorative illustration */}
          <div className="relative flex items-center justify-center">
            <EventIllustration />
          </div>
        </div>
      </div>

      {/* Decorative floating elements */}
      <div className="absolute top-20 right-20 text-6xl text-coral/10 font-mono animate-float">{'📅'}</div>
      <div className="absolute bottom-40 left-16 text-5xl text-secondary/10 font-mono animate-float" style={{ animationDelay: '2s' }}>
        {'{ }'}
      </div>
      <div className="absolute top-1/2 right-12 text-4xl text-primary/10 font-mono animate-float" style={{ animationDelay: '1s' }}>
        {'</>'}
      </div>
    </section>
  );
}

interface AudienceItemProps {
  icon: React.ReactNode;
  text: string;
  color: 'coral' | 'secondary' | 'primary';
}

const colorClasses: Record<string, string> = {
  coral: 'bg-coral/20 text-coral',
  secondary: 'bg-secondary/20 text-secondary',
  primary: 'bg-primary/20 text-primary',
};

function AudienceItem({ icon, text, color }: AudienceItemProps) {
  return (
    <div className="flex items-start gap-3">
      <div className={`p-2 rounded-lg ${colorClasses[color]} shrink-0`}>
        {icon}
      </div>
      <span className="text-muted-foreground text-sm leading-relaxed">{text}</span>
    </div>
  );
}

function FloatingShapes() {
  return (
    <div className="absolute inset-0">
      {/* Floating code brackets */}
      <div className="absolute top-20 right-20 text-6xl text-coral/20 font-mono animate-float">{'{'}</div>
      <div
        className="absolute bottom-32 left-16 text-5xl text-secondary/20 font-mono animate-float"
        style={{ animationDelay: '2s' }}
      >
        {'</>'}
      </div>
      <div
        className="absolute top-1/2 right-16 text-4xl text-primary/20 font-mono animate-float"
        style={{ animationDelay: '1s' }}
      >
        {'[ ]'}
      </div>
    </div>
  );
}

function CalendarBackground() {
  const calendarItems = [
    'workshop.register()',
    'hackathon.start()',
    'event.join()',
    'skills.learn()',
    'network.connect()',
    'project.build()',
    'mentor.meet()',
    'code.collaborate()',
  ];

  return (
    <div className="absolute inset-0 opacity-[0.03]">
      {calendarItems.map((item, i) => (
        <div
          key={i}
          className="absolute font-mono text-xs whitespace-nowrap text-foreground"
          style={{
            left: `${(i * 12) % 100}%`,
            top: `${(i * 10) % 100}%`,
            transform: `rotate(${-5 + (i % 3) * 5}deg)`,
          }}
        >
          {item}
        </div>
      ))}
    </div>
  );
}

function EventIllustration() {
  return (
    <div className="relative w-full max-w-md aspect-square">
      {/* Main circular element */}
      <div className="absolute inset-0 rounded-full border border-border/30" />
      <div className="absolute inset-4 rounded-full border border-border/20" />
      <div className="absolute inset-8 rounded-full border border-border/10" />

      {/* Animated rotating ring */}
      <div className="absolute inset-0 animate-spin-slow">
        <svg viewBox="0 0 400 400" className="w-full h-full">
          <defs>
            <linearGradient id="eventRingGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ff6b6b" />
              <stop offset="100%" stopColor="#e91e63" />
            </linearGradient>
          </defs>
          <circle
            cx="200"
            cy="200"
            r="180"
            fill="none"
            stroke="url(#eventRingGradient1)"
            strokeWidth="2"
            strokeDasharray="20 10"
            opacity="0.6"
          />
        </svg>
      </div>

      <div
        className="absolute inset-0 animate-spin-slow"
        style={{ animationDirection: 'reverse', animationDuration: '30s' }}
      >
        <svg viewBox="0 0 400 400" className="w-full h-full">
          <defs>
            <linearGradient id="eventRingGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00bcd4" />
              <stop offset="100%" stopColor="#c6ff00" />
            </linearGradient>
          </defs>
          <circle
            cx="200"
            cy="200"
            r="150"
            fill="none"
            stroke="url(#eventRingGradient2)"
            strokeWidth="2"
            strokeDasharray="15 8"
            opacity="0.5"
          />
        </svg>
      </div>

      {/* Center content - Calendar icon */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <div className="w-24 h-24 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-coral to-primary flex items-center justify-center">
            <CalendarLargeIcon />
          </div>
          <div className="font-mono text-xs text-muted-foreground tracking-widest uppercase">
            Workshops · Hackathons · Talks
          </div>
        </div>
      </div>

      {/* Orbital dots representing event types */}
      {[0, 72, 144, 216, 288].map((angle, i) => {
        const colors = ['bg-coral', 'bg-primary', 'bg-secondary', 'bg-lime', 'bg-accent'];
        const labels = ['Workshop', 'Hackathon', 'Talk', 'Social', 'Coding'];
        const rad = (angle * Math.PI) / 180;
        const x = 50 + 42 * Math.cos(rad);
        const y = 50 + 42 * Math.sin(rad);
        return (
          <div
            key={i}
            className="absolute group"
            style={{ left: `${x}%`, top: `${y}%`, transform: 'translate(-50%, -50%)' }}
          >
            <div className={`w-4 h-4 ${colors[i]} rounded-full`} />
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-xs text-muted-foreground">
              {labels[i]}
            </div>
          </div>
        );
      })}
    </div>
  );
}

// Icons
function HumanitixIcon() {
  return (
    <svg className="w-4 h-4 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
      />
    </svg>
  );
}

function CalendarLargeIcon() {
  return (
    <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
      />
    </svg>
  );
}

function StudentIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
    </svg>
  );
}

function CalendarCheckIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
    </svg>
  );
}

function BriefcaseIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}
