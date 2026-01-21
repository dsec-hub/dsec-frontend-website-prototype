'use client';

import GradientText from '@/components/GradientText';

export default function ProjectsHero() {
  return (
    <section className="relative min-h-[70vh] overflow-hidden bg-background">
      {/* Animated code background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <CodeRainBackground />
      </div>

      {/* Gradient orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
      <div
        className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse-glow"
        style={{ animationDelay: '1.5s' }}
      />

      {/* Content */}
      <div className="relative z-10 px-6 md:px-12 pt-32 pb-20 max-w-7xl mx-auto">
        {/* Small note */}
        <div className="inline-flex items-center gap-2 bg-muted/50 border border-border/50 rounded-full px-4 py-2 mb-8">
          <GitHubIcon />
          <span className="text-sm text-muted-foreground">All projects shown here link directly to GitHub</span>
        </div>

        <GradientText
          colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
          animationSpeed={8}
          showBorder={false}
          className="mb-4 font-mono text-sm tracking-wider uppercase"
        >
          Student Software Projects
        </GradientText>

        <h1 className="font-grotesk text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground mb-6 max-w-4xl">
          Student software projects from the Deakin Software Engineering Club
        </h1>

        <p className="text-xl text-secondary font-medium mb-6 max-w-2xl">
          Real software engineering projects built by Deakin students at the Melbourne Burwood campus, with links to the GitHub repos behind the code.
        </p>

        <div className="space-y-4 text-muted-foreground text-lg leading-relaxed mb-10 max-w-3xl">
          <p>
            This page showcases projects created by members of the Deakin Software Engineering Club (DSEC). Every project started as an idea in a workshop, hackathon, development session, or late night Discord chat. Here you can see what Deakin students are building, what technologies they use, and how they collaborate in real software teams.
          </p>
          <p>
            Whether you are a first year student looking for inspiration, a current member choosing your next team, or a recruiter curious about what Deakin students can actually ship, this is the best place to start.
          </p>
        </div>

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

      {/* Decorative floating elements */}
      <div className="absolute top-20 right-20 text-6xl text-primary/10 font-mono animate-float">{'<>'}</div>
      <div className="absolute bottom-40 left-16 text-5xl text-secondary/10 font-mono animate-float" style={{ animationDelay: '2s' }}>
        {'{ }'}
      </div>
      <div className="absolute top-1/2 right-12 text-4xl text-lime/10 font-mono animate-float" style={{ animationDelay: '1s' }}>
        [ ]
      </div>
    </section>
  );
}

function CodeRainBackground() {
  const codeSnippets = [
    'const project = await build()',
    'git push origin main',
    'npm run dev',
    'export default function()',
    'import { useState }',
    'async function deploy()',
    'return <Component />',
    'interface Project {}',
    'type Status = "active"',
    '.then(res => res.json())',
  ];

  return (
    <div className="absolute inset-0 opacity-[0.03]">
      {codeSnippets.map((snippet, i) => (
        <div
          key={i}
          className="absolute font-mono text-xs whitespace-nowrap text-foreground"
          style={{
            left: `${(i * 10) % 100}%`,
            top: `${(i * 8) % 100}%`,
            transform: `rotate(${-5 + (i % 3) * 5}deg)`,
          }}
        >
          {snippet}
        </div>
      ))}
    </div>
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
