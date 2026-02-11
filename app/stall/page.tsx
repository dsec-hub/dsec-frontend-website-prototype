import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DSEC T1 Market Day 2026 | Deakin Software Engineering Club Burwood',
  description: 'Join Deakin Software Engineering Club at T1 Market Day Feb 23-24. Free giveaways, limited merch, $5 membership. Open to all students. Burwood Sports Hall 11:30am-2:30pm.',
  keywords: [
    'Deakin Software Engineering Club',
    'Coding clubs Melbourne',
    'Deakin tech clubs',
    'Student developer groups Burwood',
    'DSEC market day',
    'software engineering societies',
    'Melbourne hackathons and workshops',
  ],
  openGraph: {
    title: 'DSEC T1 Market Day 2026 | Deakin Software Engineering Club Burwood',
    description: 'Join Deakin Software Engineering Club at T1 Market Day Feb 23-24. Free giveaways, limited merch, $5 membership. Open to all students.',
    type: 'website',
  },
};

export default function StallPage() {
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
            DSEC T1 Market Day 2026
          </p>
        </div>
      </div>

      <Footer />
    </main>
  );
}
