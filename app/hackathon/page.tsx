import HackathonHero from '@/components/hackathon/HackathonHero';
import AboutSection from '@/components/hackathon/AboutSection';
import DetailsSection from '@/components/hackathon/DetailsSection';
import ParticipantsSection from '@/components/hackathon/ParticipantsSection';
import ChallengeSection from '@/components/hackathon/ChallengeSection';
import FAQSection from '@/components/hackathon/FAQSection';
import OrganisersSection from '@/components/hackathon/OrganisersSection';
import FinalCTA from '@/components/hackathon/FinalCTA';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ACUCys Hackathon 2026 | Securing Critical Infrastructure',
  description: "36-hour hackathon securing critical infrastructure. Power grids, healthcare, transport, water systems. March 28-29, 2026. In-person Melbourne Docklands or online Australia-wide. Free entry.",
  keywords: [
    'hackathon australia 2026',
    'cybersecurity hackathon melbourne',
    'critical infrastructure hackathon',
    'university hackathon australia',
    'software engineering hackathon',
    'student hackathon melbourne',
    'ACUCys hackathon',
    'DSEC hackathon',
    'critical infrastructure hackathon',
  ],
  openGraph: {
    title: 'ACUCys Hackathon 2026 | Securing Critical Infrastructure',
    description: "36-hour hackathon securing critical infrastructure. March 28-29, 2026. In-person Melbourne Docklands or online Australia-wide.",
    type: 'website',
  },
};

export default function HackathonPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HackathonHero />
      <AboutSection />
      <DetailsSection />
      <ParticipantsSection />
      <ChallengeSection />
      <FAQSection />
      <OrganisersSection />
      <FinalCTA />
      <Footer />
    </main>
  );
}
