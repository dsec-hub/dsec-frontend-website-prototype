import TransitionLink from '@/components/TransitionLink';

export default function FAQCTA() {
  return (
    <section className="relative py-24 md:py-32 bg-background overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[200px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 text-center">
        <h2 className="font-grotesk text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
          Still have questions?
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
          Reach out on Discord or email us at{' '}
          <a
            href="mailto:contact@dsec.club"
            className="text-primary hover:underline"
          >
            contact@dsec.club
          </a>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="https://discord.gg/dsec"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
          >
            <DiscordIcon />
            Join our Discord
          </a>
          <TransitionLink
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-card border border-border rounded-full font-medium text-foreground hover:bg-muted transition-colors"
          >
            <EmailIcon />
            Contact us
          </TransitionLink>
        </div>

        {/* Quick Links */}
        <div className="mt-16 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground mb-4">
            Quick Links
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <TransitionLink
              href="/auth/join"
              className="text-sm text-primary hover:underline"
            >
              Join DSEC
            </TransitionLink>
            <span className="text-muted-foreground">•</span>
            <TransitionLink
              href="/events"
              className="text-sm text-primary hover:underline"
            >
              View Events
            </TransitionLink>
            <span className="text-muted-foreground">•</span>
            <TransitionLink
              href="/projects"
              className="text-sm text-primary hover:underline"
            >
              Browse Projects
            </TransitionLink>
            <span className="text-muted-foreground">•</span>
            <TransitionLink
              href="/contact"
              className="text-sm text-primary hover:underline"
            >
              Get in Touch
            </TransitionLink>
          </div>
        </div>
      </div>
    </section>
  );
}

// Icons
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
