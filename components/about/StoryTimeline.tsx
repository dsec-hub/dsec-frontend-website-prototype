'use client';

import SectionLabel from "../SectionLabel";

type ColorType = 'primary' | 'secondary' | 'coral' | 'lime';

interface StoryPanel {
  id: number;
  icon: React.ReactNode;
  label: string;
  heading: string;
  copy: string[];
  color: ColorType;
}

const colorClasses: Record<ColorType, {
  bg: string;
  border: string;
  icon: string;
  accent: string;
  glow: string;
}> = {
  primary: {
    bg: 'bg-primary/10',
    border: 'border-primary/30',
    icon: 'bg-primary/20 text-primary',
    accent: 'bg-primary',
    glow: 'shadow-primary/20',
  },
  secondary: {
    bg: 'bg-secondary/10',
    border: 'border-secondary/30',
    icon: 'bg-secondary/20 text-secondary',
    accent: 'bg-secondary',
    glow: 'shadow-secondary/20',
  },
  coral: {
    bg: 'bg-coral/10',
    border: 'border-coral/30',
    icon: 'bg-coral/20 text-coral',
    accent: 'bg-coral',
    glow: 'shadow-coral/20',
  },
  lime: {
    bg: 'bg-lime/10',
    border: 'border-lime/30',
    icon: 'bg-lime/20 text-lime',
    accent: 'bg-lime',
    glow: 'shadow-lime/20',
  },
};

const storyPanels: StoryPanel[] = [
  {
    id: 1,
    icon: <GamepadIcon />,
    label: 'Early Days',
    heading: 'From game jams to our first hackathon',
    copy: [
      'The club started in the late 2010s, when a small group of Deakin students decided they wanted more than just lectures. Early events focused on mini game jams, hackathons, and casual dev nights where people could experiment with code, eat pizza, and build weird little projects together.',
      'We hosted events like LeadHack, an annual hackathon that challenged students to design and ship working prototypes in a single day, plus small game jams where teams made their first playable games in a weekend. Those events set the tone for DSEC as a place where it is okay to try, fail, and learn in public.',
    ],
    color: 'primary',
  },
  {
    id: 2,
    icon: <BuildingIcon />,
    label: 'Growing Up',
    heading: 'Workshops, industry panels, and a bigger community',
    copy: [
      'Over time, DSEC moved from just hackathons into a wider mix of technical and career events. We ran sessions with companies like Amazon and Macquarie, datathons with Alteryx and other Deakin clubs, and regular skills workshops on topics like Git, backend development, and cloud.',
      'We also started collaborating more across campus with groups like DUCA, DDSC, DBAS, and BAP, running joint hackathons, trivia nights, and networking evenings that brought together software, data, business, and cyber students in the same room.',
    ],
    color: 'secondary',
  },
  {
    id: 3,
    icon: <RefreshIcon />,
    label: 'Reset',
    heading: 'Losing momentum and rebuilding trust',
    copy: [
      'Behind the scenes, 2025 was one of the toughest years in DSEC\'s history. Executive transitions were messy, knowledge was lost, and we struggled to communicate clearly with members. Event momentum dropped, trust in the club slipped, and it felt like DSEC might quietly fade away.',
      'In Trimester 2, a new executive team stepped in mid-trimester with almost no handover. We started with basics: talking honestly about what went wrong, listening to feedback, running smaller events we knew we could deliver, and rebuilding a bigger volunteer team around clearer roles and expectations.',
    ],
    color: 'coral',
  },
  {
    id: 4,
    icon: <RocketIcon />,
    label: 'Today',
    heading: 'DSEC today — build real projects together',
    copy: [
      'Today, DSEC is focused on helping Deakin students ship real, portfolio-ready software while feeling part of a supportive community. We run development sessions that simulate a real software team environment, where members learn version control, code reviews, agile planning, and how to collaborate in GitHub.',
      'Around those sessions, we run React workshops, coding nights, speaker events, and stalls at O-Fest and T-stalls to meet new members in person. We also launched a new Discord server so members can keep learning, asking questions, and sharing wins between events.',
    ],
    color: 'lime',
  },
];

export default function StoryTimeline() {
  return (
    <section className="relative bg-card py-20 md:py-32 overflow-hidden">
      <div className="px-6 md:px-12 max-w-7xl mx-auto mb-12">
        <SectionLabel>
          Our story at Deakin
        </SectionLabel>
        <h2 className="font-grotesk text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground mb-6">
          Our journey so far
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl">
          DSEC has been part of Deakin&apos;s tech community for years. The logo has changed a little, the exec teams have changed a lot, but the core idea has stayed the same: help Deakin students learn, build, and find their people through software engineering.
        </p>
      </div>

      {/* Horizontal scroll timeline */}
      <div className="overflow-x-auto pb-8 scrollbar-hide">
        <div className="flex gap-6 px-6 md:px-12 min-w-max">
          {storyPanels.map((panel, index) => (
            <TimelineCard key={panel.id} panel={panel} index={index} isLast={index === storyPanels.length - 1} />
          ))}
        </div>
      </div>

      {/* Timeline progress dots */}
      <div className="flex justify-center gap-3 mt-8">
        {storyPanels.map((panel) => (
          <div key={panel.id} className={`w-3 h-3 rounded-full ${colorClasses[panel.color].accent}`} />
        ))}
      </div>

      {/* Closing copy */}
      <div className="px-6 md:px-12 max-w-7xl mx-auto mt-16">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-muted-foreground text-lg leading-relaxed">
            The club is still evolving, but the goal is simple: if you stay engaged with DSEC through your degree, you should graduate with a real project portfolio, industry connections, and friends who were there for every late-night debugging session.
          </p>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}

function TimelineCard({ panel, index, isLast }: { panel: StoryPanel; index: number; isLast: boolean }) {
  const styles = colorClasses[panel.color];

  return (
    <div className="relative flex flex-col">
      {/* Connection line */}
      {!isLast && <div className="absolute top-8 left-full w-6 h-0.5 bg-border z-0" />}

      <div
        className={`relative w-[380px] md:w-[420px] p-8 rounded-2xl border ${styles.bg} ${styles.border} hover:shadow-xl ${styles.glow} transition-all duration-300 group`}
      >
        {/* Panel number */}
        <div className="absolute -top-4 -left-2 font-grotesk text-7xl font-bold text-foreground/5">
          0{index + 1}
        </div>

        {/* Icon and label */}
        <div className="flex items-center gap-3 mb-6 relative z-10">
          <div className={`p-3 rounded-xl ${styles.icon}`}>{panel.icon}</div>
          <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">{panel.label}</span>
          <div className={`ml-auto w-2 h-2 rounded-full ${styles.accent}`} />
        </div>

        {/* Heading */}
        <h3 className="font-grotesk text-2xl font-bold text-foreground mb-4 relative z-10">{panel.heading}</h3>

        {/* Copy */}
        <div className="space-y-4 relative z-10">
          {panel.copy.map((paragraph, i) => (
            <p key={i} className="text-muted-foreground text-sm leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Bottom accent line */}
        <div className={`absolute bottom-0 left-8 right-8 h-1 ${styles.accent} rounded-full opacity-50`} />
      </div>
    </div>
  );
}

// Icons
function GamepadIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a2 2 0 012 2v3a2 2 0 01-2 2h-1a1 1 0 00-1 1v1a2 2 0 01-2 2H9a2 2 0 01-2-2v-1a1 1 0 00-1-1H5a2 2 0 01-2-2V8a2 2 0 012-2h3a1 1 0 001-1V4z"
      />
    </svg>
  );
}

function BuildingIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
      />
    </svg>
  );
}

function RefreshIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
      />
    </svg>
  );
}

function RocketIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
      />
    </svg>
  );
}
