'use client';

import SectionLabel from '@/components/SectionLabel';

export default function ChallengeSection() {
  return (
    <section id="challenge" className="relative py-24 md:py-32 bg-muted/30 overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(233,30,99,0.03)_0%,transparent_70%)]" />
        {/* Floating code snippets background */}
        <div className="absolute inset-0 overflow-hidden opacity-[0.02]">
          <div className="absolute top-10 left-10 font-mono text-6xl text-primary rotate-12">{`{`}</div>
          <div className="absolute top-1/4 right-20 font-mono text-4xl text-secondary -rotate-6">{`</>`}</div>
          <div className="absolute bottom-20 left-1/4 font-mono text-5xl text-coral rotate-3">{`[]`}</div>
          <div className="absolute top-1/2 right-1/3 font-mono text-4xl text-lime -rotate-12">{`()`}</div>
          <div className="absolute bottom-1/3 right-10 font-mono text-6xl text-accent rotate-6">{`//`}</div>
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12">
        <div className="text-center flex flex-col items-center mb-16">
          <SectionLabel>The Challenge</SectionLabel>
          <h2 className="font-grotesk text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Build at the Intersection
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Software meets security. Your code, your creativity, real-world impact.
          </p>
        </div>

        {/* Challenge Preview Card */}
        <div className="relative max-w-4xl mx-auto">
          {/* Main Card */}
          <div className="bg-card border border-border rounded-2xl overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-primary/20 via-secondary/20 to-coral/20 p-6 border-b border-border">
              <div className="flex items-center gap-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-coral" />
                  <div className="w-3 h-3 rounded-full bg-lime" />
                  <div className="w-3 h-3 rounded-full bg-secondary" />
                </div>
                <span className="font-mono text-sm text-muted-foreground">challenge_brief.md</span>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 md:p-12">
              {/* Locked Content Teaser */}
              <div className="text-center mb-10">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/10 text-primary mb-6">
                  <LockIcon />
                </div>
                <h3 className="font-grotesk text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Full Brief Drops at Kickoff
                </h3>
                <p className="text-muted-foreground max-w-xl mx-auto">
                  The complete challenge brief will be revealed when the hackathon begins. Until then, here&apos;s what we can tell you...
                </p>
              </div>

              {/* What to Expect Grid */}
              <div className="grid md:grid-cols-2 gap-6 mb-10">
                <ExpectCard
                  icon={<WorldIcon />}
                  title="Real-World Problem Domains"
                  description="Tackle challenges inspired by actual industry problems in software and security."
                  color="primary"
                />
                <ExpectCard
                  icon={<CategoryIcon />}
                  title="Multiple Categories"
                  description="Different submission tracks to showcase different skills and approaches."
                  color="secondary"
                />
                <ExpectCard
                  icon={<ScaleIcon />}
                  title="Technical Depth"
                  description="Judging that rewards both innovative solutions and solid engineering."
                  color="coral"
                />
                <ExpectCard
                  icon={<ImpactIcon />}
                  title="Practical Impact"
                  description="Build something that could actually be used, not just a demo."
                  color="lime"
                />
              </div>

              {/* Teaser Text */}
              <div className="bg-muted/50 rounded-xl p-6 border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center text-accent shrink-0">
                    <HintIcon />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Theme Teaser Coming Soon</h4>
                    <p className="text-sm text-muted-foreground">
                      Follow our socials for hints and teasers leading up to the event. The full theme and challenge details will be announced at kickoff.
                    </p>
                    <div className="flex gap-3 mt-4">
                      <SocialLink icon={<DiscordIcon />} label="Discord" />
                      <SocialLink icon={<InstagramIcon />} label="Instagram" />
                      <SocialLink icon={<LinkedInIcon />} label="LinkedIn" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl rotate-12 -z-10 blur-sm" />
          <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-br from-coral/20 to-lime/20 rounded-2xl -rotate-6 -z-10 blur-sm" />
        </div>

        {/* Judging Criteria Preview */}
        <div className="mt-16 text-center">
          <h3 className="font-grotesk text-xl font-bold text-foreground mb-6">Judging Criteria (Preview)</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <CriteriaBadge text="Feasibility" />
            <CriteriaBadge text="Technical Execution" />
            <CriteriaBadge text="Problem Relevance" />
            <CriteriaBadge text="Impact Potential" />
          </div>
        </div>
      </div>
    </section>
  );
}

interface ExpectCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: 'primary' | 'secondary' | 'coral' | 'lime';
}

const expectColors = {
  primary: 'bg-primary/10 text-primary',
  secondary: 'bg-secondary/10 text-secondary',
  coral: 'bg-coral/10 text-coral',
  lime: 'bg-lime/10 text-lime',
};

function ExpectCard({ icon, title, description, color }: ExpectCardProps) {
  return (
    <div className="flex items-start gap-4 p-4 rounded-xl bg-background/50 border border-border/50">
      <div className={`w-10 h-10 rounded-lg ${expectColors[color]} flex items-center justify-center shrink-0`}>
        {icon}
      </div>
      <div>
        <h4 className="font-semibold text-foreground mb-1">{title}</h4>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}

interface SocialLinkProps {
  icon: React.ReactNode;
  label: string;
}

function SocialLink({ icon, label }: SocialLinkProps) {
  return (
    <button className="inline-flex items-center gap-2 px-4 py-2 bg-muted rounded-full text-sm text-muted-foreground hover:text-foreground transition-colors">
      {icon}
      {label}
    </button>
  );
}

function CriteriaBadge({ text }: { text: string }) {
  return (
    <span className="px-4 py-2 bg-card border border-border rounded-full text-sm text-muted-foreground">
      {text}
    </span>
  );
}

// Icons
function LockIcon() {
  return (
    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    </svg>
  );
}

function WorldIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function CategoryIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
    </svg>
  );
}

function ScaleIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
    </svg>
  );
}

function ImpactIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  );
}

function HintIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  );
}

function DiscordIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}
