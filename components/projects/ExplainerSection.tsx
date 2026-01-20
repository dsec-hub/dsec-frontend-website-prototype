'use client';

type ColorType = 'primary' | 'secondary' | 'lime';

interface LookForItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: ColorType;
}

const colorClasses: Record<ColorType, string> = {
  primary: 'bg-primary/20 text-primary border-primary/30',
  secondary: 'bg-secondary/20 text-secondary border-secondary/30',
  lime: 'bg-lime/20 text-lime border-lime/30',
};

export default function ExplainerSection() {
  return (
    <section className="relative bg-muted/30 py-16 md:py-24 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left side - Main content */}
          <div>
            <p className="mb-4 font-mono text-sm tracking-wider text-lime uppercase">How to Read These Projects</p>
            <h2 className="font-grotesk text-3xl md:text-4xl font-bold leading-tight text-foreground mb-6">
              What these projects say about our members
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              These projects are not assignments or group reports. They are things Deakin students chose to build in their own time, with the support of the Deakin Software Engineering Club and DUSA. When you browse this page, look for:
            </p>

            <div className="space-y-6">
              <LookForItem
                icon={<CodeIcon />}
                title="The skills used"
                description="Languages, frameworks, tools — see what technologies students are choosing to learn and apply"
                color="primary"
              />
              <LookForItem
                icon={<GitBranchIcon />}
                title="The way teams use GitHub"
                description="Branches, issues, pull requests, documentation — how students collaborate and ship code"
                color="secondary"
              />
              <LookForItem
                icon={<LightbulbIcon />}
                title="The kinds of problems students are solving"
                description="Club needs, student life, learning tools, experiments — real problems, real solutions"
                color="lime"
              />
            </div>
          </div>

          {/* Right side - Audience specific guidance */}
          <div className="space-y-8">
            {/* For students */}
            <div className="relative bg-card border border-border rounded-2xl p-6 md:p-8 overflow-hidden group hover:border-primary/30 transition-colors">
              {/* Gradient accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-primary" />

              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-xl bg-primary/20 text-primary">
                  <GraduationCapIcon />
                </div>
                <h3 className="font-grotesk text-xl font-bold text-foreground">If you are a student</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Use this page as inspiration. You do not need a perfect idea or a big team to start. Many projects here began as simple experiments and grew over time. The best way to learn is to build something real, even if it is small.
              </p>

              {/* Decorative corner */}
              <div className="absolute bottom-0 right-0 w-32 h-32 pointer-events-none opacity-10">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  {[0, 1, 2].map((i) => (
                    <circle
                      key={i}
                      cx="100"
                      cy="100"
                      r={30 + i * 20}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      className="text-primary"
                    />
                  ))}
                </svg>
              </div>
            </div>

            {/* For recruiters */}
            <div className="relative bg-card border border-border rounded-2xl p-6 md:p-8 overflow-hidden group hover:border-secondary/30 transition-colors">
              {/* Gradient accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary via-lime to-secondary" />

              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-xl bg-secondary/20 text-secondary">
                  <BriefcaseIcon />
                </div>
                <h3 className="font-grotesk text-xl font-bold text-foreground">If you are a recruiter or partner</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Treat this as a window into how Deakin students approach software engineering. You can see what technologies they self select, how they collaborate, and how they document and ship code. For deeper case studies, contact the project contributors or ask about them at a DSEC event.
              </p>

              {/* Decorative corner */}
              <div className="absolute bottom-0 right-0 w-32 h-32 pointer-events-none opacity-10">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  {[0, 1, 2].map((i) => (
                    <rect
                      key={i}
                      x={60 - i * 15}
                      y={60 - i * 15}
                      width={40 + i * 30}
                      height={40 + i * 30}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      className="text-secondary"
                      rx="4"
                    />
                  ))}
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function LookForItem({ icon, title, description, color }: LookForItemProps) {
  return (
    <div className="flex gap-4">
      <div className={`p-2.5 rounded-xl ${colorClasses[color]} shrink-0 h-fit`}>{icon}</div>
      <div>
        <h4 className="font-grotesk font-bold text-foreground mb-1">{title}</h4>
        <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
      </div>
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

function GitBranchIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M7 3v10M17 21v-4M7 13c0 4 10 4 10-4V3M7 13h10"
      />
    </svg>
  );
}

function LightbulbIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
      />
    </svg>
  );
}

function GraduationCapIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path d="M12 14l9-5-9-5-9 5 9 5z" />
      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
    </svg>
  );
}

function BriefcaseIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  );
}
