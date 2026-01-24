'use client';

import { useState } from 'react';
import SectionLabel from '@/components/SectionLabel';

const faqs = [
  {
    question: 'Do I need a team to register?',
    answer: 'No. You can register solo and we\'ll help you find teammates before the event. We\'ll have team formation activities and a Discord channel dedicated to finding team members.',
  },
  {
    question: 'What skill level do I need?',
    answer: 'All levels welcome. If you\'re willing to learn and build, you belong here. We\'ll have mentors available throughout the event to help you tackle challenges regardless of your experience level.',
  },
  {
    question: 'Can I participate online?',
    answer: 'Yes. Online participation is fully supported with Discord, mentorship, and equal judging. You\'ll have access to the same resources, workshops, and support as in-person attendees.',
  },
  {
    question: 'Is it free?',
    answer: 'Yes. Free to participate. No entry fee, no hidden costs. For in-person attendees, we\'ll also provide food and drinks throughout the event.',
  },
  {
    question: 'What should I bring?',
    answer: 'Laptop, charger, and willingness to ship something. Food and drinks provided for in-person attendees. If you\'re attending in person, consider bringing a water bottle, snacks, and maybe a hoodie for the air conditioning.',
  },
  {
    question: 'How are teams judged?',
    answer: 'Judging criteria will be shared at kickoff. Expect assessment on feasibility, technical execution, problem relevance, and impact. Each submission category may have slightly different weighting based on the track.',
  },
  {
    question: 'Can I start working before the event?',
    answer: 'No. All work must be done during the 36-hour hackathon period. You can brainstorm ideas and learn technologies beforehand, but no code should be written until the official start.',
  },
  {
    question: 'What technology stack can I use?',
    answer: 'Any technology you want! We encourage you to use tools and languages you\'re comfortable with, but also feel free to experiment and learn something new. The challenge will be flexible enough to accommodate various approaches.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 md:py-32 bg-background overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-80 h-80 bg-accent/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-primary/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <SectionLabel>FAQ</SectionLabel>
          <h2 className="font-grotesk text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-lg">
            Got questions? We&apos;ve got answers.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              index={index}
            />
          ))}
        </div>

        {/* Additional Help */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Still have questions?
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://discord.gg/dsec"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-card border border-border rounded-full text-sm font-medium text-foreground hover:bg-muted transition-colors"
            >
              <DiscordIcon />
              Ask on Discord
            </a>
            <a
              href="#partner"
              className="inline-flex items-center gap-2 px-6 py-3 bg-card border border-border rounded-full text-sm font-medium text-foreground hover:bg-muted transition-colors"
            >
              <EmailIcon />
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
  index: number;
}

function FAQItem({ question, answer, isOpen, onClick, index }: FAQItemProps) {
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

  return (
    <div className={`group bg-card border border-border rounded-xl overflow-hidden transition-all duration-300 ${colorStyles[color]} ${isOpen ? 'shadow-lg' : ''}`}>
      <button
        onClick={onClick}
        className="w-full px-6 py-5 flex items-center justify-between text-left"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-4">
          <span className={`font-mono text-2xl font-bold ${numberColors[color]}`}>
            {(index + 1).toString().padStart(2, '0')}
          </span>
          <h3 className="font-semibold text-foreground pr-4">{question}</h3>
        </div>
        <div className={`w-8 h-8 rounded-full bg-muted flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <ChevronIcon />
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="px-6 pb-5 pl-[4.5rem]">
          <p className="text-muted-foreground leading-relaxed">{answer}</p>
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

function DiscordIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}
