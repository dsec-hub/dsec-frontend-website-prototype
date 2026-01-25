'use client';

import SectionLabel from '@/components/SectionLabel';

const partners = [
  {
    name: 'DUCA',
    fullName: 'Deakin University Cybersecurity Association',
    description: 'Leading the charge in cybersecurity education and community building.',
    color: 'secondary' as const,
  },
  {
    name: 'ACUSYS',
    fullName: 'Australian University Cybersecurity Network',
    description: 'Connecting cybersecurity communities across Australian universities.',
    color: 'primary' as const,
  },
];

export default function PartnersSection() {
  return (
    <section id="partners" className="relative py-24 md:py-32 bg-background overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16 flex flex-col items-center">
          <SectionLabel>Our Partners</SectionLabel>
          <h2 className="font-grotesk text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Building Together
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            ACUSYS x DSEC is made possible through collaboration with student organizations across Australia.
          </p>
        </div>

        {/* Current Partners */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {partners.map((partner, index) => (
            <PartnerCard key={index} {...partner} />
          ))}
        </div>

        {/* More Partners Coming */}
        <div className="bg-card border border-dashed border-border rounded-2xl p-8 md:p-12 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-muted text-muted-foreground mb-6">
            <PlusIcon />
          </div>
          <h3 className="font-grotesk text-2xl font-bold text-foreground mb-4">
            More Partners Joining Soon
          </h3>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Is your university club or organisation interested in collaborating? We&apos;re looking for partners to help spread the word, share logistics, and make this event bigger.
          </p>
          <a
            href="#partner"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full font-semibold transition-all"
          >
            <HandshakeIcon />
            Become a Partner
          </a>
        </div>

        {/* Partner Benefits Preview */}
        <div className="mt-12 grid sm:grid-cols-3 gap-6">
          <BenefitItem
            icon={<NetworkIcon />}
            title="Cross-Promotion"
            description="Reach students from universities across Australia"
          />
          <BenefitItem
            icon={<CollabIcon />}
            title="Shared Resources"
            description="Pool resources for a bigger, better event"
          />
          <BenefitItem
            icon={<BrandIcon />}
            title="Brand Visibility"
            description="Logo placement and recognition throughout"
          />
        </div>
      </div>
    </section>
  );
}

interface PartnerCardProps {
  name: string;
  fullName: string;
  description: string;
  color: 'primary' | 'secondary';
}

const partnerColors = {
  primary: {
    border: 'border-primary/20 hover:border-primary/40',
    bg: 'bg-primary/5',
    text: 'text-primary',
    glow: 'hover:shadow-primary/10',
  },
  secondary: {
    border: 'border-secondary/20 hover:border-secondary/40',
    bg: 'bg-secondary/5',
    text: 'text-secondary',
    glow: 'hover:shadow-secondary/10',
  },
};

function PartnerCard({ name, fullName, description, color }: PartnerCardProps) {
  const styles = partnerColors[color];

  return (
    <div className={`group bg-card border ${styles.border} rounded-2xl p-8 transition-all duration-300 hover:shadow-lg ${styles.glow}`}>
      <div className="flex items-start gap-4">
        {/* Logo Placeholder */}
        <div className={`w-16 h-16 rounded-xl ${styles.bg} ${styles.text} flex items-center justify-center shrink-0 font-grotesk text-2xl font-bold`}>
          {name.substring(0, 2)}
        </div>
        <div>
          <h3 className={`font-grotesk text-xl font-bold ${styles.text} mb-1`}>{name}</h3>
          <p className="text-sm text-foreground font-medium mb-2">{fullName}</p>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
    </div>
  );
}

interface BenefitItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function BenefitItem({ icon, title, description }: BenefitItemProps) {
  return (
    <div className="text-center">
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-muted text-muted-foreground mb-4">
        {icon}
      </div>
      <h4 className="font-semibold text-foreground mb-2">{title}</h4>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
}

// Icons
function PlusIcon() {
  return (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
    </svg>
  );
}

function HandshakeIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  );
}

function NetworkIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
    </svg>
  );
}

function CollabIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  );
}

function BrandIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
    </svg>
  );
}
