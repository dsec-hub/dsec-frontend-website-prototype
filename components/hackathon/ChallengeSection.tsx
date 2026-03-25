'use client';

import SectionLabel from '@/components/SectionLabel';

const judgingCriteria = [
  {
    title: 'Creativity & Innovation',
    description: 'Original thinking and novel approaches to infrastructure security challenges.',
  },
  {
    title: 'Technical Execution',
    description: 'Code quality, architecture decisions, and implementation depth.',
  },
  {
    title: 'Functional MVP',
    description: 'A working prototype that demonstrates core functionality.',
  },
  {
    title: 'Problem-Solving & Relevance',
    description: 'How well the solution addresses a real critical infrastructure problem.',
  },
  {
    title: 'Impact & Potential',
    description: 'Real-world applicability and potential to make a difference.',
  },
  {
    title: 'Final Pitch Video',
    description: 'Clear communication of the problem, solution, and value proposition.',
  },
];

const projectTypes = [
  {
    title: 'Web Apps',
    description: 'Dashboards, monitoring tools, simulations, alert systems.',
    icon: <WebIcon />,
    color: 'primary' as const,
  },
  {
    title: 'Software',
    description: 'Working prototypes and functional demos.',
    icon: <SoftwareIcon />,
    color: 'secondary' as const,
  },
  {
    title: 'Hardware',
    description: 'Physical builds, demonstrated via video.',
    icon: <HardwareIcon />,
    color: 'coral' as const,
  },
  {
    title: 'Presentation',
    description: 'Accepted, but scores 0 on Technical Execution & Functional MVP.',
    icon: <PresentationIcon />,
    color: 'lime' as const,
  },
];

const exampleProjects = [
  {
    title: 'Water Treatment Plant Monitor',
    description: 'Real-time dashboard for detecting anomalies in water treatment SCADA systems.',
    tags: ['React', 'Python', 'MQTT', 'Anomaly Detection'],
    color: 'secondary' as const,
  },
  {
    title: 'Ambulance RF Shield',
    description: 'Tool to detect and alert on RF interference targeting emergency vehicle communications.',
    tags: ['SDR', 'C++', 'Signal Processing', 'Hardware'],
    color: 'coral' as const,
  },
];

export default function ChallengeSection() {
  return (
    <section id="challenge" className="relative py-24 md:py-32 bg-muted/30 overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(233,30,99,0.03)_0%,transparent_70%)]" />
        <div className="absolute inset-0 overflow-hidden opacity-[0.02]">
          <div className="absolute top-10 left-10 font-mono text-6xl text-primary rotate-12">{`{`}</div>
          <div className="absolute top-1/4 right-20 font-mono text-4xl text-secondary -rotate-6">{`</>`}</div>
          <div className="absolute bottom-20 left-1/4 font-mono text-5xl text-coral rotate-3">{`[]`}</div>
          <div className="absolute top-1/2 right-1/3 font-mono text-4xl text-lime -rotate-12">{`()`}</div>
          <div className="absolute bottom-1/3 right-10 font-mono text-6xl text-accent rotate-6">{`//`}</div>
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center flex flex-col items-center mb-16">
          <SectionLabel>The Challenge</SectionLabel>
          <h2 className="font-grotesk text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Securing Critical Infrastructure
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Power grids, healthcare systems, transport networks, water treatment, emergency services — build solutions that protect the systems society depends on.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="font-grotesk text-xl font-bold text-foreground mb-6 text-center">Event Timeline</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <TimelineCard
              step="01"
              title="Saturday 9AM"
              description="Kickoff & hacking begins"
              color="primary"
            />
            <TimelineCard
              step="02"
              title="Sunday 9PM"
              description="Submissions close & judging begins"
              color="secondary"
            />
            <TimelineCard
              step="03"
              title="Tue-Wed by 9PM"
              description="Results announced"
              color="coral"
            />
          </div>
        </div>

        {/* Project Types */}
        <div className="mb-16">
          <h3 className="font-grotesk text-xl font-bold text-foreground mb-6 text-center">Project Types</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {projectTypes.map((type, index) => (
              <ProjectTypeCard key={index} {...type} />
            ))}
          </div>
        </div>

        {/* Judging Criteria */}
        <div className="mb-16">
          <h3 className="font-grotesk text-xl font-bold text-foreground mb-2 text-center">Judging Criteria</h3>
          <p className="text-sm text-muted-foreground text-center mb-6">6 equally weighted criteria</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {judgingCriteria.map((criterion, index) => (
              <CriterionCard key={index} index={index} {...criterion} />
            ))}
          </div>
        </div>

        {/* Submissions */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-card border border-border rounded-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-primary/20 via-secondary/20 to-coral/20 p-6 border-b border-border">
              <div className="flex items-center gap-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-coral" />
                  <div className="w-3 h-3 rounded-full bg-lime" />
                  <div className="w-3 h-3 rounded-full bg-secondary" />
                </div>
                <span className="font-mono text-sm text-muted-foreground">submission_requirements.md</span>
              </div>
            </div>
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                    <RequiredIcon />
                    Required
                  </h4>
                  <ul className="space-y-3">
                    <SubmissionItem text="Video presentation (clear audio, no webcam needed)" />
                    <SubmissionItem text="Project summary" />
                    <SubmissionItem text="Team members listed" />
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-muted-foreground mb-4 flex items-center gap-2">
                    <OptionalIcon />
                    Optional
                  </h4>
                  <ul className="space-y-3">
                    <SubmissionItem text="Slide deck" muted />
                    <SubmissionItem text="Code repositories" muted />
                    <SubmissionItem text="Supporting materials" muted />
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Example Project Ideas */}
        <div>
          <h3 className="font-grotesk text-xl font-bold text-foreground mb-6 text-center">Example Project Ideas</h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {exampleProjects.map((project, index) => (
              <ExampleCard key={index} {...project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface TimelineCardProps {
  step: string;
  title: string;
  description: string;
  color: 'primary' | 'secondary' | 'coral';
}

const timelineColors = {
  primary: 'text-primary border-primary/30',
  secondary: 'text-secondary border-secondary/30',
  coral: 'text-coral border-coral/30',
};

function TimelineCard({ step, title, description, color }: TimelineCardProps) {
  return (
    <div className={`bg-card border rounded-xl p-6 text-center ${timelineColors[color]}`}>
      <div className={`font-mono text-sm ${timelineColors[color].split(' ')[0]} mb-2`}>{step}</div>
      <div className="font-grotesk text-lg font-bold text-foreground mb-1">{title}</div>
      <div className="text-sm text-muted-foreground">{description}</div>
    </div>
  );
}

interface ProjectTypeCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: 'primary' | 'secondary' | 'coral' | 'lime';
}

const typeColors = {
  primary: 'bg-primary/10 text-primary',
  secondary: 'bg-secondary/10 text-secondary',
  coral: 'bg-coral/10 text-coral',
  lime: 'bg-lime/10 text-lime',
};

function ProjectTypeCard({ title, description, icon, color }: ProjectTypeCardProps) {
  return (
    <div className="bg-card border border-border rounded-xl p-5">
      <div className={`w-10 h-10 rounded-lg ${typeColors[color]} flex items-center justify-center mb-3`}>
        {icon}
      </div>
      <h4 className="font-semibold text-foreground mb-1">{title}</h4>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
}

interface CriterionCardProps {
  title: string;
  description: string;
  index: number;
}

function CriterionCard({ title, description, index }: CriterionCardProps) {
  const colors = ['primary', 'secondary', 'coral', 'lime', 'accent', 'primary'] as const;
  const color = colors[index % colors.length];

  const numberColors = {
    primary: 'text-primary/30',
    secondary: 'text-secondary/30',
    coral: 'text-coral/30',
    lime: 'text-lime/30',
    accent: 'text-accent/30',
  };

  return (
    <div className="bg-card border border-border rounded-xl p-5">
      <div className="flex items-start gap-3">
        <span className={`font-mono text-2xl font-bold ${numberColors[color]} shrink-0`}>
          {(index + 1).toString().padStart(2, '0')}
        </span>
        <div>
          <h4 className="font-semibold text-foreground mb-1">{title}</h4>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
    </div>
  );
}

function SubmissionItem({ text, muted }: { text: string; muted?: boolean }) {
  return (
    <li className={`flex items-start gap-2 text-sm ${muted ? 'text-muted-foreground' : 'text-foreground'}`}>
      <CheckIcon className={muted ? 'text-muted-foreground/50' : 'text-lime'} />
      {text}
    </li>
  );
}

interface ExampleCardProps {
  title: string;
  description: string;
  tags: string[];
  color: 'secondary' | 'coral';
}

const exampleColors = {
  secondary: 'border-secondary/20 hover:border-secondary/40',
  coral: 'border-coral/20 hover:border-coral/40',
};

function ExampleCard({ title, description, tags, color }: ExampleCardProps) {
  return (
    <div className={`bg-card border ${exampleColors[color]} rounded-xl p-6 transition-all`}>
      <h4 className="font-grotesk text-lg font-bold text-foreground mb-2">{title}</h4>
      <p className="text-sm text-muted-foreground mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span key={index} className="px-3 py-1 bg-muted rounded-full text-xs text-muted-foreground">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

// Icons
function WebIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function SoftwareIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  );
}

function HardwareIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
    </svg>
  );
}

function PresentationIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
    </svg>
  );
}

function RequiredIcon() {
  return (
    <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function OptionalIcon() {
  return (
    <svg className="w-5 h-5 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={`w-4 h-4 shrink-0 mt-0.5 ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );
}
