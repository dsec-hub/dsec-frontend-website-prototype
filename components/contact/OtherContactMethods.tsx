'use client';

import TransitionLink from '../TransitionLink';

export default function OtherContactMethods() {
  const channels = [
    {
      name: 'Discord',
      description: 'Our main community space for chat, help, and project teams',
      icon: <DiscordIcon />,
      href: 'https://discord.gg/dsec',
      color: 'accent',
      buttonText: 'Join Discord',
    },
    {
      name: 'Instagram',
      description: 'Event announcements, recaps, and behind the scenes',
      icon: <InstagramIcon />,
      href: 'https://instagram.com/_deakinsec',
      color: 'coral',
      buttonText: 'Follow us',
    },
    {
      name: 'LinkedIn',
      description: 'More formal updates and highlights for industry and alumni',
      icon: <LinkedInIcon />,
      href: 'https://au.linkedin.com/company/deakin-software-engineering-club',
      color: 'secondary',
      buttonText: 'Connect',
    },
    {
      name: 'DUSA',
      description: 'Our official listing on the DUSA website with membership links',
      icon: <DUSAIcon />,
      href: 'https://www.dusa.org.au/clubs/deakin-software-engineering-club-dsec',
      color: 'lime',
      buttonText: 'View profile',
    },
  ];

  return (
    <section className="relative bg-card py-20 md:py-32 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-glow" />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse-glow"
          style={{ animationDelay: '1s' }}
        />
        <div
          className="absolute top-1/2 right-1/3 w-64 h-64 bg-coral/5 rounded-full blur-3xl animate-pulse-glow"
          style={{ animationDelay: '2s' }}
        />

        {/* Floating shapes */}
        <FloatingShapes />
      </div>

      <div className="relative z-10 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="mb-4 font-mono text-sm tracking-wider text-secondary uppercase">Stay Connected</p>
          <h2 className="font-grotesk text-4xl md:text-5xl font-bold leading-tight text-foreground mb-6 max-w-3xl mx-auto">
            Other ways to connect with DSEC
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            If you prefer not to use a form, you can still reach and follow the Deakin Software Engineering Club in a few other ways. These channels are linked from our navigation and footer so you can get to them from any page.
          </p>
        </div>

        {/* Channel cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {channels.map((channel) => (
            <ChannelCard key={channel.name} channel={channel} />
          ))}
        </div>

        {/* Quick navigation */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6">
            Looking for something else? Explore more about DSEC.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <TransitionLink
              href="/events"
              className="inline-flex items-center gap-2 px-6 py-3 border border-coral/30 text-coral hover:bg-coral/10 rounded-full font-semibold transition-all"
            >
              <CalendarIcon />
              Upcoming events
            </TransitionLink>
            <TransitionLink
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 border border-accent/30 text-accent hover:bg-accent/10 rounded-full font-semibold transition-all"
            >
              <FolderIcon />
              Our projects
            </TransitionLink>
            <TransitionLink
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-3 border border-secondary/30 text-secondary hover:bg-secondary/10 rounded-full font-semibold transition-all"
            >
              <UsersIcon />
              About DSEC
            </TransitionLink>
          </div>
        </div>
      </div>

      {/* Bottom gradient bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-secondary via-lime to-coral" />
    </section>
  );
}

interface Channel {
  name: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  color: string;
  buttonText: string;
}

const colorClasses: Record<string, { border: string; bg: string; hover: string; button: string; buttonHover: string }> = {
  accent: {
    border: 'border-accent/50',
    bg: 'from-accent/20 to-primary/20',
    hover: 'hover:border-accent',
    button: 'bg-accent hover:bg-accent/90 text-accent-foreground',
    buttonHover: 'text-accent',
  },
  coral: {
    border: 'border-coral/50',
    bg: 'from-coral/20 to-primary/20',
    hover: 'hover:border-coral',
    button: 'border border-coral text-coral hover:bg-coral hover:text-coral-foreground',
    buttonHover: 'text-coral',
  },
  secondary: {
    border: 'border-secondary/50',
    bg: 'from-secondary/20 to-lime/20',
    hover: 'hover:border-secondary',
    button: 'border border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground',
    buttonHover: 'text-secondary',
  },
  lime: {
    border: 'border-lime/50',
    bg: 'from-lime/20 to-secondary/20',
    hover: 'hover:border-lime',
    button: 'border border-lime text-lime hover:bg-lime hover:text-lime-foreground',
    buttonHover: 'text-lime',
  },
};

function ChannelCard({ channel }: { channel: Channel }) {
  const colors = colorClasses[channel.color];

  return (
    <div className="relative group">
      <div className={`absolute inset-0 bg-gradient-to-br ${colors.bg} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
      <div className={`relative bg-background border ${colors.border} ${colors.hover} rounded-3xl p-6 transition-all duration-300 h-full flex flex-col`}>
        {/* Icon */}
        <div className="w-12 h-12 rounded-xl bg-muted/50 flex items-center justify-center mb-4">
          {channel.icon}
        </div>

        <h3 className="font-grotesk text-lg font-bold text-foreground mb-2">{channel.name}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
          {channel.description}
        </p>

        <a
          href={channel.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`w-full px-4 py-2.5 ${colors.button} rounded-xl font-medium text-sm flex items-center justify-center gap-2 transition-all`}
        >
          {channel.buttonText}
          <ExternalLinkIcon />
        </a>
      </div>
    </div>
  );
}

function FloatingShapes() {
  return (
    <>
      {/* Floating code symbols */}
      <div className="absolute top-20 left-[15%] text-5xl text-accent/10 font-mono animate-float">{'@'}</div>
      <div className="absolute top-40 right-[10%] text-6xl text-secondary/10 font-mono animate-float" style={{ animationDelay: '1s' }}>
        {'#'}
      </div>
      <div className="absolute bottom-32 left-[20%] text-4xl text-coral/10 font-mono animate-float" style={{ animationDelay: '2s' }}>
        {'&'}
      </div>
      <div className="absolute bottom-48 right-[25%] text-5xl text-lime/10 font-mono animate-float" style={{ animationDelay: '1.5s' }}>
        {'*'}
      </div>

      {/* Geometric shapes */}
      <div className="absolute top-1/3 left-[8%] w-4 h-4 bg-accent/20 rounded-full animate-float" style={{ animationDelay: '0.5s' }} />
      <div
        className="absolute bottom-1/3 right-[12%] w-6 h-6 border-2 border-secondary/20 rounded-lg rotate-45 animate-float"
        style={{ animationDelay: '1.5s' }}
      />
      <div className="absolute top-1/2 left-[5%] w-3 h-3 bg-coral/20 rotate-45 animate-float" style={{ animationDelay: '2.5s' }} />
    </>
  );
}

// Icons
function DiscordIcon() {
  return (
    <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg className="w-6 h-6 text-coral" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg className="w-6 h-6 text-secondary" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

function DUSAIcon() {
  return (
    <svg className="w-6 h-6 text-lime" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  );
}

function FolderIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  );
}
