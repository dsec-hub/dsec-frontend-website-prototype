export default function Hero(): React.ReactElement {
  return (
    <section className="relative min-h-screen overflow-hidden bg-background">
      {/* Halftone dot pattern background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[80%] h-[80%] opacity-60">
          <HalftonePattern />
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 px-6 md:px-12 pt-12 md:pt-20 pb-32">
        <div className="max-w-4xl">
          <p className="mb-4 font-mono text-sm tracking-wider text-primary">
            JOIN US FOR T1 STALL
          </p>
          <h1 className="font-grotesk text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight text-foreground mb-6">
            Deakin&apos;s Home
            <br />
            for Software
            <br />
            Engineers
          </h1>
          <p className="max-w-md text-muted-foreground text-lg mb-8 leading-relaxed">
            Join the Deakin Software Engineering Club at Burwood to design, build, and ship real software with other students.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <button className="px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full font-semibold transition-all">
              Join Now
            </button>
            <button className="px-8 py-3 text-foreground hover:text-foreground/80 font-semibold transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Decorative grid lines */}
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none opacity-20">
        <div className="absolute inset-0 grid grid-cols-12 gap-px">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="border-r border-muted-foreground/20" />
          ))}
        </div>
      </div>
    </section>
  );
}

function HalftonePattern() {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 400 400"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0"
    >
      <defs>
        <radialGradient id="dotGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="1" />
          <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0" />
        </radialGradient>
      </defs>
      {/* Generate halftone dots with varying sizes based on position */}
      {Array.from({ length: 40 }).map((_, row) =>
        Array.from({ length: 40 }).map((_, col) => {
          const x = col * 10 + 5;
          const y = row * 10 + 5;
          const distFromCenter = Math.sqrt(Math.pow(x - 200, 2) + Math.pow(y - 200, 2));
          const wave = Math.sin(distFromCenter * 0.05) * 0.5 + 0.5;
          const baseSize = 2 + wave * 3;
          const fadeX = 1 - Math.abs(x - 200) / 200;
          const fadeY = 1 - Math.abs(y - 200) / 200;
          const fade = fadeX * fadeY;
          const size = baseSize * fade;

          if (size < 0.5) return null;

          return (
            <circle
              key={`${row}-${col}`}
              cx={x}
              cy={y}
              r={size}
              fill="var(--color-primary)"
              opacity={0.6 + wave * 0.4}
            />
          );
        })
      )}
    </svg>
  );
}
