'use client';

export default function ProjectsCTA() {
  return (
    <section className="relative bg-background py-20 md:py-32 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse-glow"
          style={{ animationDelay: '1s' }}
        />
        <div
          className="absolute top-1/2 right-1/3 w-64 h-64 bg-lime/5 rounded-full blur-3xl animate-pulse-glow"
          style={{ animationDelay: '2s' }}
        />

        {/* Floating shapes */}
        <FloatingShapes />
      </div>

      <div className="relative z-10 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="mb-4 font-mono text-sm tracking-wider text-accent uppercase">Want to Build Something?</p>
          <h2 className="font-grotesk text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground mb-6 max-w-3xl mx-auto">
            Build your own project with DSEC
          </h2>
        </div>

        {/* Two-column CTA cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {/* For Students */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative bg-card border border-border hover:border-primary/50 rounded-3xl p-8 md:p-10 transition-all duration-300 h-full flex flex-col">
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6">
                <RocketIcon />
              </div>

              <h3 className="font-grotesk text-2xl font-bold text-foreground mb-4">For Deakin Students</h3>
              <p className="text-muted-foreground leading-relaxed mb-8 flex-1">
                If you are a Deakin student who wants to see your own project on this page, the best way to start is by joining a DSEC development session or hackathon. You do not need to be an expert. We welcome beginners and experienced students who want to learn by building together, improving their problem solving skills, and growing their software portfolios.
              </p>

              <button className="w-full px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl font-semibold gap-2 flex items-center justify-center transition-all">
                <SparklesIcon />
                Join the club and build with us
              </button>

              {/* Decorative corner */}
              <div className="absolute top-6 right-6">
                <svg width="60" height="60" viewBox="0 0 60 60" className="text-primary/10">
                  <path d="M0 0 L60 0 L60 60" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
                </svg>
              </div>
            </div>
          </div>

          {/* For Partners */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-lime/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative bg-card border border-border hover:border-secondary/50 rounded-3xl p-8 md:p-10 transition-all duration-300 h-full flex flex-col">
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-secondary to-lime flex items-center justify-center mb-6">
                <MessageIcon />
              </div>

              <h3 className="font-grotesk text-2xl font-bold text-foreground mb-4">For Partners & Companies</h3>
              <p className="text-muted-foreground leading-relaxed mb-8 flex-1">
                If you are a company, startup, or team and you have an idea for a student friendly project brief, reach out. We can work with you to design sponsored challenges, hackathons, or long running projects that give Deakin students real experience while solving real problems.
              </p>

              <button className="w-full px-8 py-3 border border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground rounded-xl font-semibold gap-2 flex items-center justify-center transition-all">
                <MessageIcon />
                Talk to us about project ideas
              </button>

              {/* Decorative corner */}
              <div className="absolute top-6 right-6">
                <svg width="60" height="60" viewBox="0 0 60 60" className="text-secondary/10">
                  <circle cx="30" cy="30" r="28" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary via-lime to-accent" />
    </section>
  );
}

function FloatingShapes() {
  return (
    <>
      {/* Floating code symbols */}
      <div className="absolute top-20 left-[15%] text-5xl text-primary/10 font-mono animate-float">{'<'}</div>
      <div className="absolute top-40 right-[10%] text-6xl text-secondary/10 font-mono animate-float" style={{ animationDelay: '1s' }}>
        {'>'}
      </div>
      <div className="absolute bottom-32 left-[20%] text-4xl text-lime/10 font-mono animate-float" style={{ animationDelay: '2s' }}>
        {'/'}
      </div>
      <div className="absolute bottom-48 right-[25%] text-5xl text-accent/10 font-mono animate-float" style={{ animationDelay: '1.5s' }}>
        {'*'}
      </div>

      {/* Geometric shapes */}
      <div className="absolute top-1/3 left-[8%] w-4 h-4 bg-primary/20 rounded-full animate-float" style={{ animationDelay: '0.5s' }} />
      <div
        className="absolute bottom-1/3 right-[12%] w-6 h-6 border-2 border-secondary/20 rounded-lg rotate-45 animate-float"
        style={{ animationDelay: '1.5s' }}
      />
      <div className="absolute top-1/2 left-[5%] w-3 h-3 bg-lime/20 rotate-45 animate-float" style={{ animationDelay: '2.5s' }} />
    </>
  );
}

// Icons
function RocketIcon() {
  return (
    <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
      />
    </svg>
  );
}

function MessageIcon() {
  return (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
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
