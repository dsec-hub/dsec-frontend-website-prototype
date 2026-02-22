'use client';

import SectionLabel from '@/components/SectionLabel';
import TransitionLink from '../TransitionLink';

export default function WorkWithUs() {
  return (
    <section id="work-with-us" className="relative bg-card py-16 md:py-24 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/4 right-0 w-80 h-80 bg-coral/5 rounded-full blur-3xl animate-pulse-glow"
          style={{ animationDelay: '1s' }}
        />
        <div
          className="absolute bottom-1/4 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse-glow"
          style={{ animationDelay: '2s' }}
        />
      </div>

      <div className="relative z-10 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="mb-12">
          <SectionLabel>Partnerships & Collaborations</SectionLabel>
          <h2 className="font-grotesk text-3xl md:text-4xl font-bold leading-tight text-foreground mb-4 max-w-2xl">
            Work with Deakin software engineering students
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl">
            If you are a company, startup, recruiter, or Deakin staff member who wants to work with DSEC, we collaborate on guest talks, technical workshops, hackathons, project briefs, and sponsorships that connect you with motivated Deakin students who are building real software.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Main CTA card */}
          <div className="p-8 rounded-2xl bg-gradient-to-br from-coral/10 to-primary/10 border border-coral/20">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-coral to-primary flex items-center justify-center">
                <BriefcaseIcon />
              </div>
              <div>
                <h3 className="font-grotesk text-xl font-bold text-foreground">Interested in partnering?</h3>
                <p className="text-muted-foreground text-sm">Visit our partnerships page to learn more</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Head to our partnerships page to see how we work with companies and organisations, what collaboration options are available, and how to submit a partnership enquiry.
            </p>
            <TransitionLink
              href="/partnerships"
              className="inline-flex items-center gap-2 px-6 py-3 bg-coral hover:bg-coral/90 text-coral-foreground rounded-xl font-semibold transition-all"
            >
              <ArrowIcon />
              Go to partnerships page
            </TransitionLink>
          </div>

          {/* Ways to collaborate */}
          <div className="p-8 rounded-2xl border border-primary/20 bg-primary/5">
            <h3 className="font-grotesk text-lg font-bold text-foreground mb-6">Ways we can collaborate</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="p-1.5 rounded-lg bg-coral/20 text-coral shrink-0 mt-0.5">
                  <MicIcon />
                </div>
                <div>
                  <span className="text-foreground font-medium">Guest talks</span>
                  <p className="text-sm text-muted-foreground">Share your experience with students</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="p-1.5 rounded-lg bg-primary/20 text-primary shrink-0 mt-0.5">
                  <CodeIcon />
                </div>
                <div>
                  <span className="text-foreground font-medium">Technical workshops</span>
                  <p className="text-sm text-muted-foreground">Hands-on sessions with your tech stack</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="p-1.5 rounded-lg bg-secondary/20 text-secondary shrink-0 mt-0.5">
                  <TrophyIcon />
                </div>
                <div>
                  <span className="text-foreground font-medium">Hackathons</span>
                  <p className="text-sm text-muted-foreground">Sponsor or mentor at our events</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="p-1.5 rounded-lg bg-lime/20 text-lime shrink-0 mt-0.5">
                  <FolderIcon />
                </div>
                <div>
                  <span className="text-foreground font-medium">Project briefs</span>
                  <p className="text-sm text-muted-foreground">Real-world challenges for student teams</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// Icons
function BriefcaseIcon() {
  return (
    <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  );
}

function MicIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
    </svg>
  );
}

function CodeIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  );
}

function TrophyIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  );
}

function FolderIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
    </svg>
  );
}
