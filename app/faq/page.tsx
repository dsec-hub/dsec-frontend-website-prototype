import FAQHero from '@/components/faq/FAQHero';
import FAQContent from '@/components/faq/FAQContent';
import FAQCTA from '@/components/faq/FAQCTA';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import SmoothScroll from '@/components/SmoothScroll';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Deakin Software Engineering Club FAQ | Join DSEC Burwood',
  description: 'Get answers about joining DSEC, working on real projects, attending workshops, and building your software portfolio at Deakin University Burwood campus.',
  keywords: [
    'Deakin software engineering club',
    'DSEC Burwood',
    'Deakin tech club',
    'Software projects Deakin',
    'Coding club Melbourne',
    'DSEC FAQ',
    'Deakin University clubs',
    'DUSA clubs',
    'software engineering portfolio',
    'Deakin student projects',
  ],
  openGraph: {
    title: 'Deakin Software Engineering Club FAQ | Join DSEC Burwood',
    description: 'Get answers about joining DSEC, working on real projects, attending workshops, and building your software portfolio at Deakin University Burwood campus.',
    type: 'website',
  },
};

export default function FAQPage() {
  // FAQ Schema for rich snippets
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Who can join the Deakin Software Engineering Club?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Any Deakin student can join DSEC, regardless of campus or experience level. You don\'t need a software engineering degree or prior coding knowledge. We welcome beginners through to advanced developers who want to work on real projects and build their portfolio.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is there a membership fee?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. DSEC is a free student club affiliated with DUSA (Deakin University Student Association). All workshops, events, and project opportunities are open to members at no cost.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I join DSEC?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Fill out our membership form on dsec.club, join our Discord server, and attend your first event or workshop. Membership is instant—no approval process required.',
        },
      },
      {
        '@type': 'Question',
        name: 'What kind of projects does DSEC work on?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We build production-ready software across web development, mobile apps, game development, and robotics. Every project is designed to give you GitHub contributions and portfolio pieces you can show employers. Recent projects include NFC-based reward systems, event management platforms, and automation tools.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do I need experience to contribute to projects?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. We operate on an open-source contribution model with beginner-friendly tasks. Our project leads assign issues based on your skill level, and you\'ll get code reviews and mentorship as you contribute.',
        },
      },
      {
        '@type': 'Question',
        name: 'How many projects can I work on?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'As many as you want, but we recommend focusing on 1-2 projects per trimester to ship quality work. Our goal is one strong portfolio piece per member per year.',
        },
      },
      {
        '@type': 'Question',
        name: 'What events does DSEC run?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We run hands-on workshops (web dev, game dev, robotics, app dev), hackathons, industry panels, and collaborative events with other tech clubs like DUCA (Deakin Cybersecurity Association). All events are career-focused with tangible takeaways.',
        },
      },
      {
        '@type': 'Question',
        name: 'Where are DSEC events held?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Most events are on Deakin\'s Burwood campus, with some online workshops and hybrid hackathons that include participants across Australia.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I find out about upcoming events?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Join our Discord server and follow us on social media. We post all events in our Discord announcements channel and on the DSEC website calendar.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does DSEC help with job opportunities?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. We partner with industry sponsors and recruiters who attend our events and review member portfolios. Our hackathons and project showcases are designed to connect you directly with hiring companies.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I get leadership experience at DSEC?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Absolutely. We hire committee leads, project leads, and team specialists throughout the year. Leadership roles include managing teams, running workshops, and coordinating events—all portfolio-worthy experience.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is DSEC officially recognized by Deakin University?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. DSEC is a DUSA-affiliated club, meaning we follow university policies and receive support for events, funding, and campus bookings.',
        },
      },
      {
        '@type': 'Question',
        name: 'How is DSEC funded?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Through DUSA club grants, industry sponsorships, and event partnerships. All finances are managed through DUSA\'s ledger system to ensure transparency and compliance.',
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <SmoothScroll>
        <main className="min-h-screen bg-background">
          <Navbar />
          <FAQHero />
          <FAQContent />
          <FAQCTA />
          <Footer />
        </main>
      </SmoothScroll>
    </>
  );
}
