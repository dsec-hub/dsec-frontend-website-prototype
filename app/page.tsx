import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Mission from '@/components/Mission';

export default function Home() {
  return (
    <main className="min-h-screen bg-foundation-black">
      <Navbar />
      <Hero />
      <Mission />
      
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
              <a href="#" className="text-clarity-white/60 hover:text-action-pink transition-colors">
                Discord
              </a>
              <a href="#" className="text-clarity-white/60 hover:text-action-pink transition-colors">
                Instagram
              </a>
              <a href="#" className="text-clarity-white/60 hover:text-action-pink transition-colors">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}