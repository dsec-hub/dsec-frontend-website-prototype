import Navbar from '@/components/Navbar';

export default function Events() {
  const upcomingEvents = [
    { name: 'Intro to Web Dev Workshop', date: 'Feb 15, 2026', time: '6:00 PM', location: 'Building B, Room 2.01', type: 'Workshop' },
    { name: 'DSEC Hackathon 2026', date: 'Mar 8-9, 2026', time: '48 Hours', location: 'Deakin Burwood', type: 'Hackathon' },
    { name: 'Industry Night: Tech Careers', date: 'Mar 22, 2026', time: '5:30 PM', location: 'Online', type: 'Networking' },
  ];

  const pastEvents = [
    { name: 'Git & GitHub Masterclass', attendees: 45 },
    { name: 'AI/ML Workshop Series', attendees: 60 },
    { name: 'Summer Hackathon 2025', attendees: 80 },
    { name: 'React Fundamentals', attendees: 35 },
  ];

  return (
    <main className="min-h-screen bg-foundation-black">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-32 left-1/4 w-72 h-72 bg-energy-coral/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-1/4 w-64 h-64 bg-action-pink/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="font-grotesk font-bold text-5xl sm:text-6xl mb-6">
            <span className="bg-gradient-to-r from-energy-coral to-action-pink bg-clip-text text-transparent">
              Events
            </span>
          </h1>
          <p className="text-xl text-clarity-white/70">
            Workshops, hackathons, and networking events to level up your skills.
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-grotesk font-bold text-3xl mb-8">Upcoming Events</h2>
          <div className="space-y-6">
            {upcomingEvents.map((event) => (
              <div key={event.name} className="bg-gradient-to-br from-clarity-white/5 to-clarity-white/[0.02] border border-clarity-white/10 rounded-2xl p-6 flex flex-col md:flex-row md:items-center gap-6">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-action-pink to-energy-coral rounded-xl flex items-center justify-center">
                    <span className="font-mono text-sm text-center leading-tight">{event.date.split(',')[0]}</span>
                  </div>
                </div>
                <div className="flex-grow">
                  <span className="inline-block px-3 py-1 bg-action-pink/20 text-action-pink rounded-full text-xs font-mono mb-2">{event.type}</span>
                  <h3 className="font-grotesk font-bold text-xl">{event.name}</h3>
                  <div className="flex flex-wrap gap-4 mt-2 text-sm text-clarity-white/60">
                    <span>{event.time}</span>
                    <span>•</span>
                    <span>{event.location}</span>
                  </div>
                </div>
                <button className="px-6 py-3 border border-action-pink text-action-pink hover:bg-action-pink hover:text-white rounded-full font-medium transition-all">
                  RSVP
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-clarity-white/[0.02]">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-grotesk font-bold text-3xl mb-8">Past Events</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {pastEvents.map((event) => (
              <div key={event.name} className="bg-foundation-black border border-clarity-white/10 rounded-xl p-6">
                <h3 className="font-grotesk font-bold text-lg mb-2">{event.name}</h3>
                <p className="text-clarity-white/60 text-sm">{event.attendees} attendees</p>
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
