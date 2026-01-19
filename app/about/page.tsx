import Navbar from '@/components/Navbar';

export default function About() {
  return (
    <main className="min-h-screen bg-foundation-black">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-40 left-20 w-72 h-72 bg-creative-violet/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-action-pink/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="mb-6 inline-block">
            <div className="bg-gradient-to-r from-creative-violet to-action-pink p-[2px]">
              <div className="bg-foundation-black px-6 py-2">
                <span className="font-mono text-sm uppercase tracking-wider">Our Story</span>
              </div>
            </div>
          </div>
          <h1 className="font-grotesk font-bold text-5xl sm:text-6xl mb-6">
            About{' '}
            <span className="bg-gradient-to-r from-creative-violet to-action-pink bg-clip-text text-transparent">
              DSEC
            </span>
          </h1>
          <p className="text-xl text-clarity-white/70 leading-relaxed">
            The Deakin Software Engineering Club was founded to bridge the gap between classroom learning
            and real-world software development. We believe every student deserves the chance to build,
            ship, and showcase meaningful projects.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-grotesk font-bold text-3xl text-center mb-16">Our Journey</h2>
          <div className="space-y-12">
            <div className="flex gap-8">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-signal-lime to-tech-glow-cyan rounded-full flex items-center justify-center font-mono font-bold">22</div>
                <div className="w-0.5 h-full bg-clarity-white/20 mt-4"></div>
              </div>
              <div>
                <h3 className="font-grotesk font-bold text-xl mb-2">Founded</h3>
                <p className="text-clarity-white/70">Started with 15 passionate students who wanted more than just coursework.</p>
              </div>
            </div>
            <div className="flex gap-8">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-action-pink to-creative-violet rounded-full flex items-center justify-center font-mono font-bold">23</div>
                <div className="w-0.5 h-full bg-clarity-white/20 mt-4"></div>
              </div>
              <div>
                <h3 className="font-grotesk font-bold text-xl mb-2">First Hackathon</h3>
                <p className="text-clarity-white/70">Hosted our inaugural 48-hour hackathon with 50+ participants.</p>
              </div>
            </div>
            <div className="flex gap-8">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-energy-coral to-action-pink rounded-full flex items-center justify-center font-mono font-bold">24</div>
                <div className="w-0.5 h-full bg-clarity-white/20 mt-4"></div>
              </div>
              <div>
                <h3 className="font-grotesk font-bold text-xl mb-2">100+ Members</h3>
                <p className="text-clarity-white/70">Grew to over 100 active members across all Deakin campuses.</p>
              </div>
            </div>
            <div className="flex gap-8">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-tech-glow-cyan to-creative-violet rounded-full flex items-center justify-center font-mono font-bold">26</div>
              </div>
              <div>
                <h3 className="font-grotesk font-bold text-xl mb-2">Today</h3>
                <p className="text-clarity-white/70">A thriving community of builders shipping real projects every semester.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-clarity-white/[0.02]">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-grotesk font-bold text-3xl text-center mb-16">Meet the Team</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {['President', 'Vice President', 'Tech Lead', 'Events Lead'].map((role, i) => (
              <div key={role} className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-action-pink/20 to-creative-violet/20 rounded-full border border-clarity-white/10"></div>
                <h4 className="font-grotesk font-bold text-lg">Team Member</h4>
                <p className="text-clarity-white/60 text-sm">{role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-clarity-white/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <div className="relative">
                <div className="w-8 h-8 bg-gradient-to-br from-action-pink to-creative-violet rounded-lg rotate-45"></div>
                <div className="absolute top-1 left-1 w-6 h-6 bg-foundation-black rounded-sm rotate-45"></div>
              </div>
              <span className="font-grotesk font-bold text-xl">DSEC</span>
            </div>
            <div className="text-clarity-white/60 text-sm">
              © 2026 Deakin Software Engineering Club. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-clarity-white/60 hover:text-action-pink transition-colors">Discord</a>
              <a href="#" className="text-clarity-white/60 hover:text-action-pink transition-colors">Instagram</a>
              <a href="#" className="text-clarity-white/60 hover:text-action-pink transition-colors">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
