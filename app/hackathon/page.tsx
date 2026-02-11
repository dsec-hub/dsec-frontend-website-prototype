import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ACUSYS x DSEC Hackathon 2026 | Launching Soon',
  description: "Australia's premier cross-university hackathon is launching soon. Stay tuned for registration details.",
  keywords: [
    'hackathon australia 2026',
    'cybersecurity hackathon melbourne',
    'university hackathon australia',
    'software engineering hackathon',
    'student hackathon melbourne',
    'deakin hackathon',
    'coding competition australia',
    'ACUSYS hackathon',
    'DSEC hackathon',
  ],
  openGraph: {
    title: 'ACUSYS x DSEC Hackathon 2026 | Launching Soon',
    description: "Australia's premier cross-university hackathon is launching soon. Stay tuned for registration details.",
    type: 'website',
  },
};

export default function HackathonPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Launching Soon Section */}
      <div className="flex items-center justify-center min-h-[calc(100vh-80px)]">
        <div className="text-center px-4">
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">
            Launching Soon
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground">
            ACUSYS x DSEC Hackathon 2026
          </p>
        </div>
      </div>

      <Footer />
    </main>
  );
}
