'use client';

export default function AboutSection() {
  return (
    <section className="relative bg-background py-20 md:py-32 overflow-hidden">
      <div className="relative z-10 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Content */}
          <div>
            <p className="mb-4 font-mono text-sm tracking-wider text-primary uppercase">
              Why DSEC Exists
            </p>
            <h2 className="font-grotesk text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground mb-8">
              More Than a Coding Club
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-12 max-w-lg">
              The Deakin Software Engineering Club is the official home for students who want to turn lectures into real software experience. We bring together software engineering, computer science, IT, and design students at the Burwood campus to collaborate on projects, share knowledge, and support each other through uni.
            </p>

            {/* Two columns for benefits */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* For Students */}
              <div>
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="font-grotesk text-5xl font-bold text-foreground">01</span>
                  <div className="h-px flex-1 bg-border" />
                </div>
                <h3 className="font-grotesk text-xl font-semibold text-foreground mb-3">
                  For Students
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Build portfolio ready software in project teams, not just solo assignments. Join coding nights, technical workshops, and guest talks with engineers and alumni. Prepare for internships and grad roles with peer support and practical experience.
                </p>
              </div>

              {/* For Industry & Deakin Staff */}
              <div>
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="font-grotesk text-5xl font-bold text-foreground">02</span>
                  <div className="h-px flex-1 bg-border" />
                </div>
                <h3 className="font-grotesk text-xl font-semibold text-foreground mb-3">
                  For Industry & Deakin Staff
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Meet motivated Deakin students who are already working in project teams. Explore collaboration on hackathons, workshops, and sponsored challenges. Partner with DSEC to share tools, datasets, or problem statements for student projects.
                </p>
              </div>
            </div>

            <button className="px-8 py-3 border border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full font-semibold transition-all">
              Become a Partner
            </button>
          </div>

          {/* Right Side - Decorative Element */}
          <div className="relative flex items-center justify-center lg:justify-end">
            <SpinningLogo />
          </div>
        </div>
      </div>

      {/* Partner Logos Marquee */}
      <div className="mt-20 border-t border-border pt-8">
        <PartnerMarquee />
      </div>
    </section>
  );
}

function SpinningLogo() {
  return (
    <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
      {/* Outer spinning ring */}
      <div className="absolute inset-0 animate-spin-slow">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <defs>
            <path
              id="textCircle"
              d="M 100, 100 m -80, 0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0"
              fill="none"
            />
          </defs>
          <text className="fill-muted-foreground text-[10px] font-mono uppercase tracking-[0.3em]">
            <textPath href="#textCircle">
              SOFTWARE • ENGINEERING • CLUB • DEAKIN •
            </textPath>
          </text>
        </svg>
      </div>

      {/* Inner static content with gradient lines */}
      <div className="absolute inset-8 flex items-center justify-center">
        <div className="relative w-full h-full">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            {Array.from({ length: 12 }).map((_, i) => {
              const angle = (i * 30 * Math.PI) / 180;
              const startX = 100 + Math.cos(angle) * 30;
              const startY = 100 + Math.sin(angle) * 30;
              const endX = 100 + Math.cos(angle) * 80;
              const endY = 100 + Math.sin(angle) * 80;
              const controlX = 100 + Math.cos(angle + 0.5) * 60;
              const controlY = 100 + Math.sin(angle + 0.5) * 60;

              const colors = ['#e91e63', '#00bcd4', '#c6ff00', '#9c27b0', '#ff6b6b'];
              const color = colors[i % colors.length];

              return (
                <path
                  key={i}
                  d={`M ${startX} ${startY} Q ${controlX} ${controlY} ${endX} ${endY}`}
                  stroke={color}
                  strokeWidth="3"
                  fill="none"
                  opacity="0.8"
                  strokeLinecap="round"
                />
              );
            })}
          </svg>
        </div>
      </div>
    </div>
  );
}

function PartnerMarquee() {
  const partners = [
    { name: 'DEAKIN', subtitle: 'UNIVERSITY', hasIcon: true },
    { name: 'DUSA', subtitle: null, hasIcon: false },
  ];

  return (
    <div className="overflow-hidden">
      <div className="flex animate-marquee">
        {Array.from({ length: 8 }).map((_, setIndex) => (
          <div key={setIndex} className="flex items-center">
            {partners.map((partner, index) => (
              <div
                key={`${setIndex}-${index}`}
                className="flex items-center gap-2 mx-8 opacity-60 hover:opacity-100 transition-opacity"
              >
                {partner.hasIcon && (
                  <div className="w-8 h-8 rounded bg-muted flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <rect x="2" y="2" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
                      <path d="M6 10h8M10 6v8" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                  </div>
                )}
                <div className="flex flex-col">
                  <span className="font-grotesk font-bold text-lg text-foreground tracking-wide">{partner.name}</span>
                  {partner.subtitle && (
                    <span className="text-xs text-muted-foreground tracking-wider">{partner.subtitle}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
