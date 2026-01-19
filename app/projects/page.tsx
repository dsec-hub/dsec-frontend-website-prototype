import Navbar from '@/components/Navbar';

export default function Projects() {
  const projects = [
    { name: 'StudySync', desc: 'AI-powered study group matching platform', tags: ['React', 'Node.js', 'AI'], color: 'from-action-pink to-creative-violet' },
    { name: 'CampusNav', desc: 'Indoor navigation for Deakin campuses', tags: ['Flutter', 'Firebase', 'Maps'], color: 'from-signal-lime to-tech-glow-cyan' },
    { name: 'CodeReview Bot', desc: 'Automated code review assistant for GitHub', tags: ['Python', 'GitHub API', 'ML'], color: 'from-energy-coral to-action-pink' },
    { name: 'EventHub', desc: 'Student event discovery and management', tags: ['Next.js', 'Supabase'], color: 'from-creative-violet to-tech-glow-cyan' },
    { name: 'BudgetBuddy', desc: 'Student finance tracking and tips', tags: ['React Native', 'Express'], color: 'from-tech-glow-cyan to-signal-lime' },
    { name: 'SkillSwap', desc: 'Peer-to-peer skill exchange platform', tags: ['Vue.js', 'MongoDB'], color: 'from-action-pink to-energy-coral' },
  ];

  return (
    <main className="min-h-screen bg-foundation-black">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-40 w-64 h-64 bg-tech-glow-cyan/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-20 w-80 h-80 bg-signal-lime/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="font-grotesk font-bold text-5xl sm:text-6xl mb-6">
            Our{' '}
            <span className="bg-gradient-to-r from-tech-glow-cyan to-signal-lime bg-clip-text text-transparent">
              Projects
            </span>
          </h1>
          <p className="text-xl text-clarity-white/70">
            Real projects built by DSEC members. From hackathon winners to ongoing community tools.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.name} className="group relative bg-gradient-to-br from-clarity-white/5 to-clarity-white/[0.02] border border-clarity-white/10 rounded-2xl p-6 hover:border-clarity-white/20 transition-all">
                <div className={`w-full h-40 bg-gradient-to-br ${project.color} rounded-xl mb-6 opacity-20 group-hover:opacity-30 transition-opacity`}></div>
                <h3 className="font-grotesk font-bold text-xl mb-2">{project.name}</h3>
                <p className="text-clarity-white/70 text-sm mb-4">{project.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-clarity-white/10 rounded-full text-xs font-mono">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-grotesk font-bold text-3xl mb-4">Have a Project Idea?</h2>
          <p className="text-clarity-white/70 mb-8">Join DSEC and turn your ideas into reality with our supportive community.</p>
          <button className="px-8 py-4 bg-action-pink hover:bg-action-pink/90 rounded-full font-medium transition-all hover:scale-105">
            Join & Start Building
          </button>
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
