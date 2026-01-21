import PixelBlast from './PixelBlast';

export default function Hero(): React.ReactElement {
  return (
    <section className="relative min-h-[70vh] overflow-hidden bg-background">
      {/* PixelBlast background */}
      <div className="absolute inset-0 w-full h-full opacity-70">
        <PixelBlast
          variant="square"
          pixelSize={4}
          color="#E91E63"
          patternScale={2}
          patternDensity={1}
          pixelSizeJitter={0}
          liquid={false}
          speed={0.5}
          edgeFade={0.25}
          transparent
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 px-6 md:px-12 pt-12 md:pt-20 pb-32 max-w-7xl mx-auto">
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
