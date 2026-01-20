import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import EventsHero from '@/components/events/EventsHero';
import EventCardsGrid from '@/components/events/EventCardsGrid';
import AccessibilitySection from '@/components/events/AccessibilitySection';
import EventsCTA from '@/components/events/EventsCTA';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Tech Events at Deakin Burwood | Deakin Software Engineering Club (DSEC)',
  description: 'See upcoming events from the Deakin Software Engineering Club (DSEC) at the Melbourne Burwood campus and online. Join coding workshops, dev sessions, hackathons, and industry talks run by Deakin students, with tickets via Humanitix.',
  keywords: [
    'Deakin Software Engineering Club events',
    'DSEC events',
    'Deakin tech events',
    'coding workshops Deakin',
    'hackathons Deakin',
    'Burwood campus events',
    'student events',
    'Humanitix tickets',
  ],
  openGraph: {
    title: 'Tech Events at Deakin Burwood | Deakin Software Engineering Club (DSEC)',
    description: 'See upcoming events from the Deakin Software Engineering Club (DSEC) at the Melbourne Burwood campus and online. Join coding workshops, dev sessions, hackathons, and industry talks run by Deakin students.',
    type: 'website',
  },
};

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <EventsHero />
      <EventCardsGrid />
      <AccessibilitySection />
      <EventsCTA />
      <Footer />
    </main>
  );
}
