'use client';

import Image from 'next/image';
import SectionLabel from '@/components/SectionLabel';

const partners = [
  {
    name: 'DUCA',
    fullName: 'Deakin University Cybersecurity Association',
    logo: '/duca.png',
    rounded: true,
  },
  {
    name: 'Natural Velocity',
    fullName: 'Co-working & Venue Partner',
    logo: '/natural-velocity.png',
  },
  {
    name: 'Deakin Cyber',
    fullName: 'Deakin Cyber Research & Innovation Centre',
    logo: '/deakincyber.png',
  },
  {
    name: 'TapCraft',
    fullName: 'Prize Partner',
    logo: '/tapcraft.png',
  },
];

export default function OrganisersSection() {
  return (
    <section id="organisers" className="relative py-16 md:py-24 bg-muted/30 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12">
        {/* Organisers */}
        <div className="text-center mb-10 flex flex-col items-center">
          <SectionLabel>Organised By</SectionLabel>
        </div>

        <div className="flex flex-col md:flex-row items-stretch justify-center gap-8 md:gap-0 mb-20">
          {/* DSEC Card */}
          <div className="group relative bg-card border border-primary/20 rounded-2xl p-8 flex-1 max-w-[300px] transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
              <div className="flex items-center justify-center mb-4">
                <Image
                  src="/logo.svg"
                  alt="DSEC Logo"
                  width={76}
                  height={48}
                  className="h-12 w-auto"
                />
              </div>
              <h3 className="font-grotesk text-xl font-bold text-foreground mb-1">DSEC</h3>
              <p className="text-sm text-muted-foreground text-balance">Deakin Software Engineering Club</p>
            </div>
          </div>

          {/* Divider */}
          <div className="flex items-center justify-center md:px-10 py-2 md:py-0">
            <div className="flex items-center gap-3 md:flex-col md:gap-3">
              <div className="w-8 h-px bg-border md:w-px md:h-8" />
              <span className="text-muted-foreground font-mono text-sm">&times;</span>
              <div className="w-8 h-px bg-border md:w-px md:h-8" />
            </div>
          </div>

          {/* ACUCys Card */}
          <div className="group relative bg-card border border-coral/20 rounded-2xl p-8 flex-1 max-w-[300px] transition-all duration-300 hover:border-coral/40 hover:shadow-lg hover:shadow-coral/10">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-coral/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
              <div className="flex items-center justify-center mb-4">
                <Image
                  src="/acucys.png"
                  alt="ACUCys Logo"
                  width={56}
                  height={56}
                  className="h-14 w-auto"
                />
              </div>
              <h3 className="font-grotesk text-xl font-bold text-foreground mb-1">ACUCys</h3>
              <p className="text-sm text-muted-foreground text-balance">Australian University Cybersecurity Network</p>
            </div>
          </div>
        </div>

        {/* Partners */}
        <div className="text-center mb-10 flex flex-col items-center">
          <SectionLabel>Our Partners</SectionLabel>
          <p className="text-muted-foreground text-sm mt-2 max-w-lg text-balance">
            Made possible with support from these organisations.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="group bg-card border border-border rounded-xl p-6 text-center transition-all duration-300 hover:border-foreground/20 hover:shadow-lg flex flex-col items-center"
            >
              <div className="flex items-center justify-center h-16 mb-4">
                <Image
                  src={partner.logo}
                  alt={`${partner.name} Logo`}
                  width={64}
                  height={64}
                  className={`h-14 w-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity ${partner.rounded ? 'rounded-full' : ''}`}
                />
              </div>
              <h4 className="font-semibold text-foreground text-sm mb-1">{partner.name}</h4>
              <p className="text-xs text-muted-foreground text-balance">{partner.fullName}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
