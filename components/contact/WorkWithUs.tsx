'use client';

import { useState } from 'react';
import SectionLabel from '@/components/SectionLabel';

type CollaborationType = 'guest-talk' | 'workshop' | 'project-brief' | 'hackathon' | 'sponsorship' | 'other';

interface FormData {
  name: string;
  organisation: string;
  email: string;
  collaborationType: CollaborationType | '';
  description: string;
}

export default function WorkWithUs() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    organisation: '',
    email: '',
    collaborationType: '',
    description: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission - replace with actual API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  if (isSubmitted) {
    return (
      <section id="work-with-us" className="relative bg-card py-16 md:py-24 overflow-hidden">
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

        <div className="relative z-10 px-6 md:px-12 max-w-3xl mx-auto text-center">
          <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-coral to-primary flex items-center justify-center">
            <CheckIcon />
          </div>
          <h2 className="font-grotesk text-3xl md:text-4xl font-bold leading-tight text-foreground mb-4">
            Thanks for reaching out
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            We&apos;ve received your enquiry. A member of the exec team will follow up to discuss what&apos;s possible and how it could work within Deakin and DUSA guidelines.
          </p>
          <button
            onClick={() => {
              setIsSubmitted(false);
              setFormData({ name: '', organisation: '', email: '', collaborationType: '', description: '' });
            }}
            className="mt-8 px-6 py-3 border border-foreground/20 text-foreground hover:bg-foreground/10 rounded-full font-semibold transition-all"
          >
            Submit another enquiry
          </button>
        </div>
      </section>
    );
  }

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
        {/* Section header */}
        <div className="mb-12">
          <SectionLabel>Partnerships & Collaborations</SectionLabel>
          <h2 className="font-grotesk text-3xl md:text-4xl font-bold leading-tight text-foreground mb-4 max-w-2xl">
            Work with Deakin software engineering students
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl">
            If you are a company, startup, recruiter, or Deakin staff member who wants to work with DSEC, this is the best place to start. We collaborate on guest talks, technical workshops, hackathons, project briefs, and sponsorships that connect you with motivated Deakin students who are building real software.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Form - takes more space */}
          <div className="lg:col-span-3 relative p-8 rounded-2xl border border-coral/20 bg-coral/5">
            {/* Icon */}
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-coral to-primary flex items-center justify-center mb-6">
              <BriefcaseIcon />
            </div>

            <h3 className="font-grotesk text-xl font-bold text-foreground mb-6">Partnership enquiry form</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name field */}
                <div>
                  <label htmlFor="partner-name" className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="partner-name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-coral focus:outline-none focus:ring-1 focus:ring-coral transition-colors"
                  />
                </div>

                {/* Organisation field */}
                <div>
                  <label htmlFor="partner-organisation" className="block text-sm font-medium text-foreground mb-2">
                    Organisation
                  </label>
                  <input
                    type="text"
                    id="partner-organisation"
                    name="organisation"
                    required
                    value={formData.organisation}
                    onChange={handleChange}
                    placeholder="Company or team name"
                    className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-coral focus:outline-none focus:ring-1 focus:ring-coral transition-colors"
                  />
                </div>
              </div>

              {/* Email field */}
              <div>
                <label htmlFor="partner-email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="partner-email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@company.com"
                  className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-coral focus:outline-none focus:ring-1 focus:ring-coral transition-colors"
                />
              </div>

              {/* Collaboration type field */}
              <div>
                <label htmlFor="collaborationType" className="block text-sm font-medium text-foreground mb-2">
                  How would you like to work with DSEC?
                </label>
                <select
                  id="collaborationType"
                  name="collaborationType"
                  required
                  value={formData.collaborationType}
                  onChange={handleChange}
                  className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground focus:border-coral focus:outline-none focus:ring-1 focus:ring-coral transition-colors appearance-none cursor-pointer"
                >
                  <option value="" disabled>Select an option</option>
                  <option value="guest-talk">Guest talk or panel</option>
                  <option value="workshop">Technical workshop</option>
                  <option value="project-brief">Project brief or challenge</option>
                  <option value="hackathon">Hackathon partnership</option>
                  <option value="sponsorship">Sponsorship</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Description field */}
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-foreground mb-2">
                  Short description of your idea or need
                </label>
                <textarea
                  id="description"
                  name="description"
                  required
                  rows={4}
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Tell us about what you have in mind, your ideal timeline, and what you'd like to achieve..."
                  className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-coral focus:outline-none focus:ring-1 focus:ring-coral transition-colors resize-none"
                />
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-4 bg-coral hover:bg-coral/90 text-coral-foreground rounded-xl font-semibold gap-2 flex items-center justify-center transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <LoadingSpinner />
                    Sending...
                  </>
                ) : (
                  <>
                    <SendIcon />
                    Submit enquiry
                  </>
                )}
              </button>
            </form>

            {/* Decorative corner */}
            <div className="absolute top-6 right-6">
              <svg width="60" height="60" viewBox="0 0 60 60" className="text-coral/10">
                <rect x="2" y="2" width="56" height="56" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" rx="8" />
              </svg>
            </div>
          </div>

          {/* Side info */}
          <div className="lg:col-span-2 space-y-6">
            {/* What we can do */}
            <div className="p-6 rounded-2xl border border-primary/20 bg-primary/5">
              <h3 className="font-grotesk text-lg font-bold text-foreground mb-4">Ways we can collaborate</h3>
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

            {/* Expectations note */}
            <div className="p-6 rounded-2xl bg-muted/30 border border-border">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-secondary/20 text-secondary shrink-0">
                  <InfoIcon />
                </div>
                <div>
                  <p className="text-foreground font-medium mb-1">What to expect</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    We are a student led club and follow DUSA policies for clubs and sponsorships. Once we receive your message, a member of the exec team will follow up to discuss what is possible and how it could work within Deakin and DUSA guidelines.
                  </p>
                </div>
              </div>
            </div>

            {/* Alternative contact */}
            <div className="p-6 rounded-2xl bg-muted/30 border border-border">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-accent/20 text-accent shrink-0">
                  <MailIcon />
                </div>
                <div>
                  <p className="text-foreground font-medium mb-1">Prefer email?</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    You can also reach the DSEC executive team directly at{' '}
                    <a href="mailto:dsec@deakin.edu.au" className="text-accent hover:underline">
                      dsec@deakin.edu.au
                    </a>
                  </p>
                </div>
              </div>
            </div>
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

function SendIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
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

function InfoIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

function LoadingSpinner() {
  return (
    <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
    </svg>
  );
}
