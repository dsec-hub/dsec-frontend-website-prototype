'use client';

interface WhatWeDoItemProps {
  icon: React.ReactNode;
  text: string;
  color: 'primary' | 'secondary' | 'lime' | 'accent';
}

const colorClasses: Record<string, string> = {
  primary: 'bg-primary/20 text-primary',
  secondary: 'bg-secondary/20 text-secondary',
  lime: 'bg-lime/20 text-lime',
  accent: 'bg-accent/20 text-accent',
};

export default function AboutIntro() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-background">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <FloatingShapes />
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 md:px-12 pt-32 pb-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Text content */}
          <div>
            <p className="mb-4 font-mono text-sm tracking-wider text-primary uppercase">
              What is DSEC
            </p>
            <h1 className="font-grotesk text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground mb-6">
              About the Deakin Software Engineering Club
            </h1>
            <p className="text-xl text-secondary font-medium mb-6">
              Deakin&apos;s home for students who want to build real software, not just pass assignments.
            </p>

            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed mb-8">
              <p>
                The Deakin Software Engineering Club (DSEC) is an academic and professional student club based at the Melbourne Burwood campus. We bring together software engineering, computer science, IT, and design students who want to learn modern development, work in real project teams, and connect with industry while they study.
              </p>
              <p>
                DSEC is affiliated with the Deakin University Student Association (DUSA) and operates as the official software engineering club at Burwood. Our events and projects are run by students, for students, with support from Deakin and DUSA.
              </p>
            </div>

            {/* What we do list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              <WhatWeDoItem
                icon={<CodeIcon />}
                text="Ship portfolio-ready software in small teams"
                color="primary"
              />
              <WhatWeDoItem
                icon={<CalendarIcon />}
                text="Host workshops, coding nights, and hackathons"
                color="secondary"
              />
              <WhatWeDoItem
                icon={<UsersIcon />}
                text="Invite industry guests and alumni speakers"
                color="lime"
              />
              <WhatWeDoItem
                icon={<SparklesIcon />}
                text="Create a friendly community to grow together"
                color="accent"
              />
            </div>

            <p className="text-foreground font-medium mb-8 text-lg">
              If you care about building things, learning from peers, and getting closer to tech careers, this is your club.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button className="px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full font-semibold transition-all">
                Join DSEC via DUSA
              </button>
              <button className="px-8 py-3 border border-foreground/20 text-foreground hover:bg-foreground/10 rounded-full font-semibold transition-all">
                Meet the exec team
              </button>
            </div>
          </div>

          {/* Right side - Decorative illustration */}
          <div className="relative flex items-center justify-center">
            <AbstractIllustration />
          </div>
        </div>
      </div>
    </section>
  );
}

function WhatWeDoItem({ icon, text, color }: WhatWeDoItemProps) {
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
      {/* Large gradient orb */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
      <div
        className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse-glow"
        style={{ animationDelay: '1s' }}
      />

      {/* Floating code brackets */}
      <div className="absolute top-20 right-20 text-6xl text-primary/20 font-mono animate-float">{'{'}</div>
      <div
        className="absolute bottom-32 left-16 text-5xl text-secondary/20 font-mono animate-float"
        style={{ animationDelay: '2s' }}
      >
        {'</>'}
      </div>
      <div
        className="absolute top-1/2 right-16 text-4xl text-lime/20 font-mono animate-float"
        style={{ animationDelay: '1s' }}
      >
        [ ]
      </div>
    </div>
  );
}

function AbstractIllustration() {
  return (
    <div className="relative w-full max-w-md aspect-square">
      {/* Main circular element */}
      <div className="absolute inset-0 rounded-full border border-border/30" />
      <div className="absolute inset-4 rounded-full border border-border/20" />
      <div className="absolute inset-8 rounded-full border border-border/10" />

      {/* Animated rotating rings */}
      <div className="absolute inset-0 animate-spin-slow">
        <svg viewBox="0 0 400 400" className="w-full h-full">
          <defs>
            <linearGradient id="ringGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#e91e63" />
              <stop offset="100%" stopColor="#9c27b0" />
            </linearGradient>
          </defs>
          <circle
            cx="200"
            cy="200"
            r="180"
            fill="none"
            stroke="url(#ringGradient1)"
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
            <linearGradient id="ringGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00bcd4" />
              <stop offset="100%" stopColor="#c6ff00" />
            </linearGradient>
          </defs>
          <circle
            cx="200"
            cy="200"
            r="150"
            fill="none"
            stroke="url(#ringGradient2)"
            strokeWidth="2"
            strokeDasharray="15 8"
            opacity="0.5"
          />
        </svg>
      </div>

      {/* Center content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <div className="font-grotesk text-6xl md:text-7xl font-bold text-foreground mb-2">
            D<span className="text-primary">S</span>EC
          </div>
          <div className="font-mono text-xs text-muted-foreground tracking-widest uppercase">
            Est. Late 2010s
          </div>
        </div>
      </div>

      {/* Orbital dots */}
      {[0, 60, 120, 180, 240, 300].map((angle, i) => {
        const colors = ['bg-primary', 'bg-secondary', 'bg-lime', 'bg-accent', 'bg-coral', 'bg-cyan'];
        const rad = (angle * Math.PI) / 180;
        const x = 50 + 45 * Math.cos(rad);
        const y = 50 + 45 * Math.sin(rad);
        return (
          <div
            key={i}
            className={`absolute w-3 h-3 ${colors[i]} rounded-full`}
            style={{ left: `${x}%`, top: `${y}%`, transform: 'translate(-50%, -50%)' }}
          />
        );
      })}
    </div>
  );
}

// Icons
function CodeIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
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

function UsersIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
      />
    </svg>
  );
}

function SparklesIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
      />
    </svg>
  );
}
