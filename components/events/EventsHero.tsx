'use client';

import SectionLabel from '@/components/SectionLabel';
import TransitionLink from '../TransitionLink';
import { Globe } from '@/components/ui/globe';
import ScrollReveal from '@/components/ScrollReveal';
import type { COBEOptions } from 'cobe';

const EVENTS_GLOBE_CONFIG: COBEOptions = {
  width: 800,
  height: 800,
  onRender: () => {},
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 1,
  diffuse: 0.4,
  mapSamples: 16000,
  mapBrightness: 6,
  baseColor: [0.91, 0.12, 0.39],
  markerColor: [1, 0.42, 0.42],
  glowColor: [0.91, 0.12, 0.39],
  markers: [
    { location: [-37.8136, 144.9631], size: 0.1 },
    { location: [-37.8497, 145.1153], size: 0.08 },
    { location: [-33.8688, 151.2093], size: 0.06 },
    { location: [-27.4698, 153.0251], size: 0.05 },
  ],
};

export default function EventsHero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-background">
      {/* Globe Background - Centered at top, bottom half visible */}
      <div className="absolute inset-x-0 top-0 w-full h-[50vh] flex justify-center overflow-hidden">
        <Globe
          config={EVENTS_GLOBE_CONFIG}
          className="absolute mx-auto -top-100 md:-top-125 lg:-top-150 w-200 h-200 md:w-250 md:h-250 lg:w-300 lg:h-300 opacity-70"
        />
        {/* Gradient overlay to block lower half of globe */}
        <div className="absolute inset-x-0 bottom-0 h-3/4 bg-linear-to-t from-background via-background to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 md:px-12 pt-20 pb-20 max-w-4xl mx-auto min-h-screen flex flex-col items-center justify-start">
        <div className="mt-56 md:mt-64 lg:mt-72 flex flex-col items-center">
          <SectionLabel>DSEC Events</SectionLabel>
          <h1 className="font-grotesk text-4xl md:text-5xl lg:text-6xl leading-tight text-foreground mb-8 text-center">
            Tech events for Deakin students at Burwood and online
          </h1>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#events"
              className="px-8 py-3 bg-coral hover:bg-coral/90 text-coral-foreground rounded-full font-semibold transition-all flex items-center gap-2"
            >
              <CalendarIcon />
              See upcoming events
            </a>
            <TransitionLink
              href="/about"
              className="px-8 py-3 border border-foreground/20 text-foreground hover:bg-foreground/10 rounded-full font-semibold transition-all"
            >
              Learn about DSEC
            </TransitionLink>
          </div>

          {/* Scroll Down Indicator */}
          <div className="mt-16 flex flex-col items-center animate-bounce bg-white/10 rounded-full p-2">
            <svg
              className="w-6 h-6 text-muted-foreground"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>

          {/* Main content section */}
          <div className="flex flex-col items-center mt-20">
            <div className="mb-6 text-center">
              <ScrollReveal
                baseOpacity={0.1}
                enableBlur
                baseRotation={3}
                blurStrength={4}
                containerClassName="text-white text-5xl lg:text-7xl font-grotesk leading-loose text-left text-balance"
              >
                Join events from DSEC to learn new skills, meet other developers, and connect with industry.
              </ScrollReveal>
            </div>

            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed mb-8">
              <p>
                DSEC events are run by students, for students. We host coding workshops, development sessions, hackathons, industry talks, and casual meetups that help Deakin students turn theory into practical software engineering experience. Most events are held at the Burwood campus, with some online options so you can join from anywhere.
              </p>
              <p>
                Every event is designed to be friendly, beginner-aware, and useful for your portfolio or career. You will see events focused on hands-on coding, tools like Git and GitHub, web development, cloud, and more—plus guest speakers from industry and alumni who share how they got into tech.
              </p>
            </div>

            {/* Who this page is for */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 w-full">
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
              <AudienceItem
                icon={<HumanitixIcon />}
                text="Events registered through Humanitix"
                color="lime"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface AudienceItemProps {
  icon: React.ReactNode;
  text: string;
  color: 'coral' | 'secondary' | 'primary' | 'lime';
}

const colorClasses: Record<string, string> = {
  coral: 'bg-coral/20 text-coral',
  secondary: 'bg-secondary/20 text-secondary',
  primary: 'bg-primary/20 text-primary',
  lime: 'bg-lime/20 text-lime',
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

// Icons
function HumanitixIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
