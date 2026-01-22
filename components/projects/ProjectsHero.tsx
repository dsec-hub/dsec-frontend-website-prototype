'use client';

import SectionLabel from '@/components/SectionLabel';
import ScrollReveal from '@/components/ScrollReveal';
import CardSwap, { Card } from '@/components/CardSwap';

export default function ProjectsHero() {
  return (
    <>
      {/* Hero Section - 2 Column Layout */}
      <section className="relative min-h-screen overflow-hidden bg-background">
        {/* Two Column Hero Content */}
        <div className="relative z-10 w-full px-6 md:px-12 pt-32 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[70vh] max-w-7xl mx-auto">
            {/* Left Column - Title and Labels */}
            <div className="flex flex-col justify-center max-w-xl">
              {/* Small note */}
              <div className="inline-flex items-center gap-2 bg-muted/50 border border-border/50 rounded-full px-4 py-2 mb-8 w-fit">
                <GitHubIcon />
                <span className="text-sm text-muted-foreground">All projects shown here link directly to GitHub</span>
              </div>

              <SectionLabel>Student Software Projects</SectionLabel>

              <h1 className="font-grotesk text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground mb-6">
                Student software projects from the Deakin Software Engineering Club
              </h1>

              <p className="text-xl text-secondary font-medium mb-8">
                Real software engineering projects built by Deakin students at the Melbourne Burwood campus, with links to the GitHub repos behind the code.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <button className="px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full font-semibold gap-2 flex items-center transition-all">
                  <SparklesIcon />
                  Join a project through DSEC
                </button>
                <button className="px-8 py-3 border border-foreground/20 text-foreground hover:bg-foreground/10 rounded-full font-semibold gap-2 flex items-center transition-all">
                  <CodeIcon />
                  Talk to us about student projects
                </button>
              </div>
            </div>

            {/* Right Column - CardSwap */}
            <div className="relative h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center">
              <CardSwap
                width={340}
                height={420}
                cardDistance={50}
                verticalDistance={60}
                delay={4000}
                pauseOnHover={true}
                easing="elastic"
              >
                <Card className="flex flex-col overflow-hidden !p-0 !bg-black/80 !border-white/20">
                  {/* Card Header */}
                  <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-black/50">
                    <CodeBracketIcon />
                    <span className="text-white font-medium">Reliable</span>
                  </div>
                  {/* Card Body with gradient background */}
                  <div className="flex-1 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 via-violet-800/30 to-cyan-600/20" />
                    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-purple-600/40 to-transparent" />
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-8xl font-bold text-purple-500/60 font-grotesk">2</div>
                  </div>
                </Card>
                <Card className="flex flex-col overflow-hidden !p-0 !bg-black/80 !border-white/20">
                  {/* Card Header */}
                  <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-black/50">
                    <SlidersIcon />
                    <span className="text-white font-medium">Customizable</span>
                  </div>
                  {/* Card Body with gradient background */}
                  <div className="flex-1 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/50 via-purple-800/30 to-pink-600/20" />
                    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-indigo-600/40 to-transparent" />
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-8xl font-bold text-indigo-500/60 font-grotesk">1</div>
                  </div>
                </Card>
                <Card className="flex flex-col overflow-hidden !p-0 !bg-black/80 !border-white/20">
                  {/* Card Header */}
                  <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-black/50">
                    <CircleIcon />
                    <span className="text-white font-medium">Smooth</span>
                  </div>
                  {/* Card Body with gradient background */}
                  <div className="flex-1 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-violet-900/50 via-fuchsia-800/30 to-rose-600/20" />
                    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-violet-600/40 to-transparent" />
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-8xl font-bold text-violet-500/60 font-grotesk">3</div>
                  </div>
                </Card>
              </CardSwap>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section - Centered with ScrollReveal */}
      <section className="relative bg-background py-20">
        <div className="relative z-10 px-6 md:px-12 max-w-4xl mx-auto flex flex-col items-center">
          {/* Scroll Down Indicator */}
          <div className="mb-12 flex flex-col items-center animate-bounce bg-white/10 rounded-full p-2">
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

          <div className="mb-10 text-center">
            <ScrollReveal
              baseOpacity={0.1}
              enableBlur
              baseRotation={3}
              blurStrength={4}
              containerClassName="text-white text-4xl lg:text-6xl font-grotesk text-center"
            >
              What Deakin students are building, what technologies they use, and how they collaborate in real software teams.
            </ScrollReveal>
          </div>

          <div className="space-y-4 text-muted-foreground text-lg leading-relaxed text-center mb-10">
            <p>
              This page showcases projects created by members of the Deakin Software Engineering Club (DSEC). Every project started as an idea in a workshop, hackathon, development session, or late night Discord chat. Here you can see what Deakin students are building, what technologies they use, and how they collaborate in real software teams.
            </p>
            <p>
              Whether you are a first year student looking for inspiration, a current member choosing your next team, or a recruiter curious about what Deakin students can actually ship, this is the best place to start.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

// Icons
function GitHubIcon() {
  return (
    <svg className="w-4 h-4 text-secondary" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
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

function CodeIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  );
}

function CodeBracketIcon() {
  return (
    <svg className="w-4 h-4 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  );
}

function SlidersIcon() {
  return (
    <svg className="w-4 h-4 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
    </svg>
  );
}

function CircleIcon() {
  return (
    <svg className="w-4 h-4 text-white/70" fill="currentColor" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="6" />
    </svg>
  );
}
