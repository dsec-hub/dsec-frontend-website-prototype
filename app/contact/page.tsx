import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import ContactHero from '@/components/contact/ContactHero';
import GeneralContactForm from '@/components/contact/GeneralContactForm';
import SuggestionForm from '@/components/contact/SuggestionForm';
import WorkWithUs from '@/components/contact/WorkWithUs';
import MembershipInfo from '@/components/contact/MembershipInfo';
import OtherContactMethods from '@/components/contact/OtherContactMethods';
import Footer from '@/components/Footer';

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
