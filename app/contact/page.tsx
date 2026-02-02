import ComingSoon from '@/components/auth/ComingSoon';
import ContactHero from '@/components/contact/ContactHero';
import GeneralContactForm from '@/components/contact/GeneralContactForm';
import MembershipInfo from '@/components/contact/MembershipInfo';
import OtherContactMethods from '@/components/contact/OtherContactMethods';
import SuggestionForm from '@/components/contact/SuggestionForm';
import WorkWithUs from '@/components/contact/WorkWithUs';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { featureFlags } from '@/lib/feature-flags';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact DSEC | Deakin Software Engineering Club at Burwood',
  description: 'Contact the Deakin Software Engineering Club (DSEC) at the Melbourne Burwood campus. Ask questions, share suggestions, discuss partnerships, or learn how to join this Deakin tech club through DUSA.',
  keywords: [
    'Deakin Software Engineering Club',
    'DSEC',
    'Deakin tech club',
    'Burwood campus',
    'Deakin students',
    'contact',
    'join',
    'membership',
    'DUSA',
    'partnership',
    'sponsor',
    'recruiter',
  ],
  openGraph: {
    title: 'Contact DSEC | Deakin Software Engineering Club at Burwood',
    description: 'Contact the Deakin Software Engineering Club (DSEC) at the Melbourne Burwood campus. Ask questions, share suggestions, discuss partnerships, or learn how to join this Deakin tech club through DUSA.',
    type: 'website',
  },
};

export default function ContactPage() {
  // Show coming soon page if content pages are disabled
  if (featureFlags.CONTENT_PAGES_DISABLED) {
    return (
      <main className="min-h-screen bg-background">
        <Navbar />
        <ComingSoon type="contact" />
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <ContactHero />
      <GeneralContactForm />
      <SuggestionForm />
      <WorkWithUs />
      <MembershipInfo />
      <OtherContactMethods />
      <Footer />
    </main>
  );
}
