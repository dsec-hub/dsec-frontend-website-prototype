'use client';

import { useState } from 'react';
import SectionLabel from '@/components/SectionLabel';
import TransitionLink from '@/components/TransitionLink';

interface FAQItem {
  question: string;
  answer: string;
  cta?: {
    text: string;
    href: string;
  };
}

interface FAQSection {
  title: string;
  items: FAQItem[];
}

const faqSections: FAQSection[] = [
  {
    title: 'General & Membership',
    items: [
      {
        question: 'Who can join the Deakin Software Engineering Club?',
        answer: 'Any Deakin student can join DSEC, regardless of campus or experience level. You don\'t need a software engineering degree or prior coding knowledge. We welcome beginners through to advanced developers who want to work on real projects and build their portfolio.',
        cta: {
          text: 'Join DSEC',
          href: '/auth/join',
        },
      },
      {
        question: 'Is there a membership fee?',
        answer: 'No. DSEC is a free student club affiliated with DUSA (Deakin University Student Association). All workshops, events, and project opportunities are open to members at no cost.',
      },
      {
        question: 'How do I join DSEC?',
        answer: 'Fill out our membership form on dsec.club, join our Discord server, and attend your first event or workshop. Membership is instant—no approval process required.',
        cta: {
          text: 'Sign up here',
          href: '/auth/join',
        },
      },
    ],
  },
  {
    title: 'Projects & Portfolio Building',
    items: [
      {
        question: 'What kind of projects does DSEC work on?',
        answer: 'We build production-ready software across web development, mobile apps, game development, and robotics. Every project is designed to give you GitHub contributions and portfolio pieces you can show employers. Recent projects include NFC-based reward systems, event management platforms, and automation tools.',
      },
      {
        question: 'Do I need experience to contribute to projects?',
        answer: 'No. We operate on an open-source contribution model with beginner-friendly tasks. Our project leads assign issues based on your skill level, and you\'ll get code reviews and mentorship as you contribute.',
      },
      {
        question: 'How many projects can I work on?',
        answer: 'As many as you want, but we recommend focusing on 1-2 projects per trimester to ship quality work. Our goal is one strong portfolio piece per member per year.',
      },
    ],
  },
  {
    title: 'Events & Workshops',
    items: [
      {
        question: 'What events does DSEC run?',
        answer: 'We run hands-on workshops (web dev, game dev, robotics, app dev), hackathons, industry panels, and collaborative events with other tech clubs like DUCA (Deakin Cybersecurity Association). All events are career-focused with tangible takeaways.',
      },
      {
        question: 'Where are DSEC events held?',
        answer: 'Most events are on Deakin\'s Burwood campus, with some online workshops and hybrid hackathons that include participants across Australia.',
      },
      {
        question: 'How do I find out about upcoming events?',
        answer: 'Join our Discord server and follow us on social media. We post all events in our Discord announcements channel and on the DSEC website calendar.',
        cta: {
          text: 'View events',
          href: '/events',
        },
      },
    ],
  },
  {
    title: 'Career & Industry',
    items: [
      {
        question: 'Does DSEC help with job opportunities?',
        answer: 'Yes. We partner with industry sponsors and recruiters who attend our events and review member portfolios. Our hackathons and project showcases are designed to connect you directly with hiring companies.',
      },
      {
        question: 'Can I get leadership experience at DSEC?',
        answer: 'Absolutely. We hire committee leads, project leads, and team specialists throughout the year. Leadership roles include managing teams, running workshops, and coordinating events—all portfolio-worthy experience.',
        cta: {
          text: 'View open roles',
          href: '/contact',
        },
      },
    ],
  },
  {
    title: 'DUSA & Compliance',
    items: [
      {
        question: 'Is DSEC officially recognized by Deakin University?',
        answer: 'Yes. DSEC is a DUSA-affiliated club, meaning we follow university policies and receive support for events, funding, and campus bookings.',
      },
      {
        question: 'How is DSEC funded?',
        answer: 'Through DUSA club grants, industry sponsorships, and event partnerships. All finances are managed through DUSA\'s ledger system to ensure transparency and compliance.',
      },
    ],
  },
];

export default function FAQContent() {
  return (
    <section className="relative py-16 md:py-24 bg-background">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-80 h-80 bg-accent/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12">
        {faqSections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-16 last:mb-0">
            <div className="mb-8">
              <SectionLabel>{section.title}</SectionLabel>
            </div>
            <FAQList items={section.items} startIndex={sectionIndex * 10} />
          </div>
        ))}
      </div>
    </section>
  );
}

interface FAQListProps {
  items: FAQItem[];
  startIndex: number;
}

function FAQList({ items, startIndex }: FAQListProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <FAQItemComponent
          key={index}
          question={item.question}
          answer={item.answer}
          cta={item.cta}
          isOpen={openIndex === index}
          onClick={() => setOpenIndex(openIndex === index ? null : index)}
          index={startIndex + index}
        />
      ))}
    </div>
  );
}

interface FAQItemComponentProps {
  question: string;
  answer: string;
  cta?: {
    text: string;
    href: string;
  };
  isOpen: boolean;
  onClick: () => void;
  index: number;
}

function FAQItemComponent({ question, answer, cta, isOpen, onClick, index }: FAQItemComponentProps) {
  const colors = ['primary', 'secondary', 'coral', 'lime', 'accent'] as const;
  const color = colors[index % colors.length];

  const colorStyles = {
    primary: 'group-hover:border-primary/30',
    secondary: 'group-hover:border-secondary/30',
    coral: 'group-hover:border-coral/30',
    lime: 'group-hover:border-lime/30',
    accent: 'group-hover:border-accent/30',
  };

  const numberColors = {
    primary: 'text-primary/30',
    secondary: 'text-secondary/30',
    coral: 'text-coral/30',
    lime: 'text-lime/30',
    accent: 'text-accent/30',
  };

  const ctaColors = {
    primary: 'bg-primary/10 text-primary hover:bg-primary/20 border-primary/20',
    secondary: 'bg-secondary/10 text-secondary hover:bg-secondary/20 border-secondary/20',
    coral: 'bg-coral/10 text-coral hover:bg-coral/20 border-coral/20',
    lime: 'bg-lime/10 text-lime hover:bg-lime/20 border-lime/20',
    accent: 'bg-accent/10 text-accent hover:bg-accent/20 border-accent/20',
  };

  return (
    <div className={`group bg-card border border-border rounded-xl overflow-hidden transition-all duration-300 ${colorStyles[color]} ${isOpen ? 'shadow-lg' : ''}`}>
      <button
        onClick={onClick}
        className="w-full px-6 py-5 flex items-start justify-between text-left"
        aria-expanded={isOpen}
      >
        <div className="flex items-start gap-4 flex-1">
          <span className={`font-mono text-2xl font-bold ${numberColors[color]} mt-1`}>
            {(index + 1).toString().padStart(2, '0')}
          </span>
          <h3 className="font-semibold text-foreground pr-4 leading-relaxed">{question}</h3>
        </div>
        <div className={`w-8 h-8 rounded-full bg-muted flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <ChevronIcon />
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="px-6 pb-5 pl-[4.5rem]">
          <p className="text-muted-foreground leading-relaxed mb-4">{answer}</p>
          {cta && (
            <TransitionLink
              href={cta.href}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border transition-colors ${ctaColors[color]}`}
            >
              {cta.text}
              <ArrowIcon />
            </TransitionLink>
          )}
        </div>
      </div>
    </div>
  );
}

// Icons
function ChevronIcon() {
  return (
    <svg className="w-4 h-4 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  );
}
