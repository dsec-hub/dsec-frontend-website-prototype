'use client';

import TransitionLink from '../TransitionLink';

export default function ContactHero() {
  return (
    <section className="relative min-h-[70vh] overflow-hidden bg-background">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <FloatingShapes />
        <ContactBackground />
      </div>

      {/* Gradient orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-glow" />
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
              <DUSAIcon />
              <span className="text-sm text-muted-foreground">DUSA affiliated student club</span>
            </div>

            <p className="mb-4 font-mono text-sm tracking-wider text-accent uppercase">Contact DSEC</p>

            <h1 className="font-grotesk text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground mb-6">
              Contact DSEC and join the Deakin software engineering community
            </h1>

            <p className="text-xl text-secondary font-medium mb-6">
              Use this page to contact the Deakin Software Engineering Club at the Melbourne Burwood campus. Ask questions, share ideas, explore partnerships, or learn how to become a club member through DUSA.
            </p>

            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed mb-10">
              <p>
                The Deakin Software Engineering Club (DSEC) is a DUSA affiliated student club for anyone at Deakin who cares about coding, software engineering, and building real projects. We use this contact page for three main things:
              </p>
              <ul className="list-none space-y-2">
                <li className="flex items-start gap-3">
                  <CheckIcon className="text-accent mt-1 shrink-0" />
                  <span>General questions from students and staff</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="text-accent mt-1 shrink-0" />
                  <span>Anonymous ideas and suggestions from members</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="text-accent mt-1 shrink-0" />
                  <span>Partnership and recruiter enquiries from companies and teams</span>
                </li>
              </ul>
            </div>

            {/* Who this page is for */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
              <AudienceItem
                icon={<StudentIcon />}
                text="Deakin students with questions"
                color="accent"
              />
              <AudienceItem
                icon={<LightbulbIcon />}
                text="Members sharing ideas"
                color="secondary"
              />
              <AudienceItem
                icon={<BriefcaseIcon />}
                text="Companies exploring partnerships"
                color="primary"
              />
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#contact-form"
                className="px-8 py-3 bg-accent hover:bg-accent/90 text-accent-foreground rounded-full font-semibold gap-2 flex items-center transition-all"
              >
                <MessageIcon />
                Send a message
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
            <ContactIllustration />
          </div>
        </div>
      </div>

      {/* Decorative floating elements */}
      <div className="absolute top-20 right-20 text-6xl text-accent/10 font-mono animate-float">{'@'}</div>
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
  color: 'accent' | 'secondary' | 'primary';
}

const colorClasses: Record<string, string> = {
  accent: 'bg-accent/20 text-accent',
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
      <div className="absolute top-20 right-20 text-6xl text-accent/20 font-mono animate-float">{'{'}</div>
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

function ContactBackground() {
  const contactItems = [
    'message.send()',
    'ideas.share()',
    'team.connect()',
    'community.join()',
    'partner.collaborate()',
    'member.become()',
    'feedback.submit()',
    'question.ask()',
  ];

  return (
    <div className="absolute inset-0 opacity-[0.03]">
      {contactItems.map((item, i) => (
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

function ContactIllustration() {
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
            <linearGradient id="contactRingGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#9c27b0" />
              <stop offset="100%" stopColor="#e91e63" />
            </linearGradient>
          </defs>
          <circle
            cx="200"
            cy="200"
            r="180"
            fill="none"
            stroke="url(#contactRingGradient1)"
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
            <linearGradient id="contactRingGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00bcd4" />
              <stop offset="100%" stopColor="#c6ff00" />
            </linearGradient>
          </defs>
          <circle
            cx="200"
            cy="200"
            r="150"
            fill="none"
            stroke="url(#contactRingGradient2)"
            strokeWidth="2"
            strokeDasharray="15 8"
            opacity="0.5"
          />
        </svg>
      </div>

      {/* Center content - Message icon */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <div className="w-24 h-24 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-accent to-primary flex items-center justify-center">
            <MessageLargeIcon />
          </div>
          <div className="font-mono text-xs text-muted-foreground tracking-widest uppercase">
            Questions · Ideas · Partners
          </div>
        </div>
      </div>

      {/* Orbital dots representing contact types */}
      {[0, 72, 144, 216, 288].map((angle, i) => {
        const colors = ['bg-accent', 'bg-primary', 'bg-secondary', 'bg-lime', 'bg-coral'];
        const labels = ['Contact', 'Suggest', 'Partner', 'Join', 'Connect'];
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
function DUSAIcon() {
  return (
    <svg className="w-4 h-4 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  );
}

function MessageIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
  );
}

function MessageLargeIcon() {
  return (
    <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
      />
    </svg>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={`w-5 h-5 ${className || ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
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

function LightbulbIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
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
