'use client';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-72 h-72 bg-creative-violet/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-action-pink/20 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-tech-glow-cyan/10 rounded-full blur-3xl"></div>
        
        {/* Geometric Shapes */}
        <div className="absolute top-32 left-32 w-24 h-24 border-2 border-signal-lime/30 rotate-45"></div>
        <div className="absolute bottom-40 right-40 w-32 h-32 border-2 border-energy-coral/30 rotate-12"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Tape Strip */}
        <div className="mb-8 inline-block">
          <div className="bg-gradient-to-r from-signal-lime via-tech-glow-cyan to-action-pink p-[2px] rotate-[-2deg]">
            <div className="bg-foundation-black px-6 py-2">
              <span className="font-mono text-sm uppercase tracking-wider">Learn • Build • Ship</span>
            </div>
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="font-grotesk font-bold text-5xl sm:text-6xl lg:text-7xl mb-6 leading-tight">
          Deakin's Home for{' '}
          <span className="bg-gradient-to-r from-action-pink via-creative-violet to-tech-glow-cyan bg-clip-text text-transparent">
            Software Engineers
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-xl sm:text-2xl text-clarity-white/70 mb-12 max-w-3xl mx-auto leading-relaxed">
          Join the Deakin Software Engineering Club to design, build, and ship hackathon-level projects. 
          Turn ideas into real products, develop in-demand skills, and build friendships that last beyond graduation.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="px-8 py-4 bg-action-pink hover:bg-action-pink/90 rounded-full font-medium text-lg transition-all hover:scale-105 shadow-lg shadow-action-pink/50">
            Join Now
          </button>
          <button className="px-8 py-4 border-2 border-clarity-white/30 hover:border-tech-glow-cyan rounded-full font-medium text-lg transition-all hover:scale-105">
            Learn More
          </button>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="font-grotesk text-4xl font-bold bg-gradient-to-r from-signal-lime to-tech-glow-cyan bg-clip-text text-transparent">100+</div>
            <div className="text-clarity-white/60 mt-2">Members</div>
          </div>
          <div className="text-center">
            <div className="font-grotesk text-4xl font-bold bg-gradient-to-r from-action-pink to-creative-violet bg-clip-text text-transparent">50+</div>
            <div className="text-clarity-white/60 mt-2">Projects</div>
          </div>
          <div className="text-center">
            <div className="font-grotesk text-4xl font-bold bg-gradient-to-r from-energy-coral to-action-pink bg-clip-text text-transparent">20+</div>
            <div className="text-clarity-white/60 mt-2">Events</div>
          </div>
          <div className="text-center">
            <div className="font-grotesk text-4xl font-bold bg-gradient-to-r from-creative-violet to-tech-glow-cyan bg-clip-text text-transparent">4</div>
            <div className="text-clarity-white/60 mt-2">Years</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-clarity-white/30 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-action-pink rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}