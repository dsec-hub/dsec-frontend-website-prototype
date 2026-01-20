'use client';

export default function AboutCTA() {
  return (
    <section className="relative bg-card py-20 md:py-32 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
        <div
          className="absolute bottom-1/4 right-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse-glow"
          style={{ animationDelay: '1.5s' }}
        />

        {/* Decorative lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#e91e63" />
              <stop offset="50%" stopColor="#00bcd4" />
              <stop offset="100%" stopColor="#c6ff00" />
            </linearGradient>
          </defs>
          <line x1="0" y1="30%" x2="100%" y2="30%" stroke="url(#lineGradient)" strokeWidth="1" />
          <line x1="0" y1="70%" x2="100%" y2="70%" stroke="url(#lineGradient)" strokeWidth="1" />
        </svg>
      </div>

      <div className="relative z-10 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-grotesk text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground mb-4">
            Want to be part of the next chapter?
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* For Students */}
          <div className="relative group p-8 md:p-10 rounded-2xl border border-primary/20 bg-primary/5 hover:bg-primary/10 transition-all duration-300">
            {/* Corner accent */}
            <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
              <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-primary animate-pulse" />
            </div>

            <div className="mb-6">
              <span className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-mono uppercase tracking-wider">
                For Students
              </span>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              If you&apos;re a Deakin student who wants to build real projects, meet other developers, and feel more confident about internships and grad roles, we&apos;d love to see you at a DSEC event this trimester.
            </p>

            <button className="w-full sm:w-auto px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full font-semibold group flex items-center justify-center gap-2 transition-all">
              Join the club via DUSA
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>

          {/* For Partners */}
          <div className="relative group p-8 md:p-10 rounded-2xl border border-secondary/20 bg-secondary/5 hover:bg-secondary/10 transition-all duration-300">
            {/* Corner accent */}
            <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
              <div
                className="absolute top-4 right-4 w-3 h-3 rounded-full bg-secondary animate-pulse"
                style={{ animationDelay: '0.5s' }}
              />
            </div>

            <div className="mb-6">
              <span className="inline-block px-3 py-1 rounded-full bg-secondary/20 text-secondary text-xs font-mono uppercase tracking-wider">
                For Partners
              </span>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              If you&apos;re an industry partner, recruiter, or staff member who wants to work with motivated Deakin students, reach out. We can help with guest talks, workshops, hackathons, and project collaborations.
            </p>

            <button className="w-full sm:w-auto px-8 py-3 border border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground rounded-full font-semibold group flex items-center justify-center gap-2 transition-all">
              Talk to us about partnerships
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom gradient bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-lime" />
    </section>
  );
}
