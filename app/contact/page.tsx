import Navbar from '@/components/Navbar';

export default function Contact() {
  return (
    <main className="min-h-screen bg-foundation-black">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-40 right-1/3 w-80 h-80 bg-creative-violet/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-1/3 w-64 h-64 bg-tech-glow-cyan/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="font-grotesk font-bold text-5xl sm:text-6xl mb-6">
            Get in{' '}
            <span className="bg-gradient-to-r from-tech-glow-cyan to-creative-violet bg-clip-text text-transparent">
              Touch
            </span>
          </h1>
          <p className="text-xl text-clarity-white/70">
            Have questions? Want to partner with us? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gradient-to-br from-clarity-white/5 to-clarity-white/[0.02] border border-clarity-white/10 rounded-2xl p-8">
            <h2 className="font-grotesk font-bold text-2xl mb-6">Send a Message</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-sm text-clarity-white/70 mb-2">Name</label>
                <input type="text" className="w-full bg-foundation-black border border-clarity-white/20 rounded-lg px-4 py-3 focus:border-action-pink focus:outline-none transition-colors" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm text-clarity-white/70 mb-2">Email</label>
                <input type="email" className="w-full bg-foundation-black border border-clarity-white/20 rounded-lg px-4 py-3 focus:border-action-pink focus:outline-none transition-colors" placeholder="you@email.com" />
              </div>
              <div>
                <label className="block text-sm text-clarity-white/70 mb-2">Message</label>
                <textarea rows={4} className="w-full bg-foundation-black border border-clarity-white/20 rounded-lg px-4 py-3 focus:border-action-pink focus:outline-none transition-colors resize-none" placeholder="Your message..."></textarea>
              </div>
              <button type="submit" className="w-full px-6 py-4 bg-action-pink hover:bg-action-pink/90 rounded-full font-medium transition-all hover:scale-[1.02]">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="font-grotesk font-bold text-2xl mb-6">Other Ways to Reach Us</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-action-pink to-creative-violet rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-grotesk font-bold">Email</h3>
                    <p className="text-clarity-white/70">dsec@deakin.edu.au</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-signal-lime to-tech-glow-cyan rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-grotesk font-bold">Discord</h3>
                    <p className="text-clarity-white/70">Join our community server</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-energy-coral to-action-pink rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-grotesk font-bold">Location</h3>
                    <p className="text-clarity-white/70">Deakin University, Burwood Campus</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8 border-t border-clarity-white/10">
              <h3 className="font-grotesk font-bold text-lg mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 bg-clarity-white/10 hover:bg-action-pink/20 rounded-xl flex items-center justify-center transition-colors">
                  <span className="text-sm font-mono">DC</span>
                </a>
                <a href="#" className="w-12 h-12 bg-clarity-white/10 hover:bg-action-pink/20 rounded-xl flex items-center justify-center transition-colors">
                  <span className="text-sm font-mono">IG</span>
                </a>
                <a href="#" className="w-12 h-12 bg-clarity-white/10 hover:bg-action-pink/20 rounded-xl flex items-center justify-center transition-colors">
                  <span className="text-sm font-mono">GH</span>
                </a>
                <a href="#" className="w-12 h-12 bg-clarity-white/10 hover:bg-action-pink/20 rounded-xl flex items-center justify-center transition-colors">
                  <span className="text-sm font-mono">LI</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-clarity-white/10 py-12 mt-16">
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
