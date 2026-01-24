import HackathonHero from '@/components/hackathon/HackathonHero';
import AboutSection from '@/components/hackathon/AboutSection';
import DetailsSection from '@/components/hackathon/DetailsSection';
import ParticipantsSection from '@/components/hackathon/ParticipantsSection';
import ChallengeSection from '@/components/hackathon/ChallengeSection';
import PartnersSection from '@/components/hackathon/PartnersSection';
import SponsorSection from '@/components/hackathon/SponsorSection';
import FAQSection from '@/components/hackathon/FAQSection';
import PartnerFormSection from '@/components/hackathon/PartnerFormSection';
import FinalCTA from '@/components/hackathon/FinalCTA';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ACUSYS x DSEC Hackathon 2026 | 36-Hour Australia-Wide Event',
  description: "Join Australia's cross-university hackathon. 36 hours. Software + Security. March 28-29, 2026. In-person Melbourne or online nationwide. Register now.",
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
    title: 'ACUSYS x DSEC Hackathon 2026 | 36-Hour Australia-Wide Event',
    description: "Join Australia's cross-university hackathon. 36 hours. Software + Security. March 28-29, 2026. In-person Melbourne or online nationwide.",
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
      <PartnersSection />
      <SponsorSection />
      <FAQSection />
      <PartnerFormSection />
      <FinalCTA />
      <Footer />
    </main>
  );
}
