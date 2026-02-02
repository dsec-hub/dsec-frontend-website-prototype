import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import PartnershipsHero from '@/components/partnerships/PartnershipsHero';
import PartnershipBenefits from '@/components/partnerships/PartnershipBenefits';
import PartnershipTiers from '@/components/partnerships/PartnershipTiers';
import SuccessStories from '@/components/partnerships/SuccessStories';
import PartnershipProcess from '@/components/partnerships/PartnershipProcess';
import PartnershipsCTA from '@/components/partnerships/PartnershipsCTA';
import SmoothScroll from '@/components/SmoothScroll';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Partner with DSEC | Deakin Software Engineering Club',
  description: 'Partner with the Deakin Software Engineering Club (DSEC) to connect with motivated student developers at Deakin University. Explore workshops, hackathons, mentorship, and collaboration opportunities.',
  keywords: [
    'DSEC partnerships',
    'Deakin partnerships',
    'student developer partnerships',
    'tech industry partnerships',
    'university tech partnerships',
    'hackathon sponsorship',
    'student mentorship',
    'Deakin collaboration',
    'Melbourne tech partnerships',
    'software engineering partnerships',
  ],
  openGraph: {
    title: 'Partner with DSEC | Deakin Software Engineering Club',
    description: 'Partner with the Deakin Software Engineering Club (DSEC) to connect with motivated student developers. Explore workshops, hackathons, mentorship, and collaboration opportunities.',
    type: 'website',
  },
};

export default function PartnershipsPage() {
  return (
    <SmoothScroll>
      <main className="min-h-screen bg-background">
        <Navbar />
        <PartnershipsHero />
        <PartnershipBenefits />
        <PartnershipTiers />
        <SuccessStories />
        <PartnershipProcess />
        <PartnershipsCTA />
        <Footer />
      </main>
    </SmoothScroll>
  );
}
