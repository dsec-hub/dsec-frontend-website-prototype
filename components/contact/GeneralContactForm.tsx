'use client';

import { useState } from 'react';

type ContactTopic = 'events' | 'projects' | 'membership' | 'volunteering' | 'other';

interface FormData {
  name: string;
  email: string;
  topic: ContactTopic | '';
  message: string;
}

export default function GeneralContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    topic: '',
    message: '',
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
      <section id="contact-form" className="relative bg-card py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute top-1/4 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse-glow"
            style={{ animationDelay: '1s' }}
          />
          <div
            className="absolute bottom-1/4 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl animate-pulse-glow"
            style={{ animationDelay: '2s' }}
          />
        </div>

        <div className="relative z-10 px-6 md:px-12 max-w-3xl mx-auto text-center">
          <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-lime to-secondary flex items-center justify-center">
            <CheckIcon />
          </div>
          <h2 className="font-grotesk text-3xl md:text-4xl font-bold leading-tight text-foreground mb-4">
            Thank you for contacting DSEC
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            An executive team member will read your message and reply as soon as we can.
          </p>
          <button
            onClick={() => {
              setIsSubmitted(false);
              setFormData({ name: '', email: '', topic: '', message: '' });
            }}
            className="mt-8 px-6 py-3 border border-foreground/20 text-foreground hover:bg-foreground/10 rounded-full font-semibold transition-all"
          >
            Send another message
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="contact-form" className="relative bg-card py-16 md:py-24 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/4 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse-glow"
          style={{ animationDelay: '1s' }}
        />
        <div
          className="absolute bottom-1/4 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl animate-pulse-glow"
          style={{ animationDelay: '2s' }}
        />
      </div>

      <div className="relative z-10 px-6 md:px-12 max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-12">
          <p className="mb-4 font-mono text-sm tracking-wider text-accent uppercase">General Enquiries</p>
          <h2 className="font-grotesk text-3xl md:text-4xl font-bold leading-tight text-foreground mb-4 max-w-2xl">
            Contact the DSEC team
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Use this form for questions about events, projects, the Discord server, or how the club works. Your message goes directly to the current DSEC executive team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <div className="relative p-8 rounded-2xl border border-accent/20 bg-accent/5">
            {/* Icon */}
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent to-primary flex items-center justify-center mb-6">
              <MessageIcon />
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors"
                />
              </div>

              {/* Email field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Deakin email or preferred email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@deakin.edu.au"
                  className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors"
                />
              </div>

              {/* Topic field */}
              <div>
                <label htmlFor="topic" className="block text-sm font-medium text-foreground mb-2">
                  What are you contacting us about?
                </label>
                <select
                  id="topic"
                  name="topic"
                  required
                  value={formData.topic}
                  onChange={handleChange}
                  className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors appearance-none cursor-pointer"
                >
                  <option value="" disabled>Select a topic</option>
                  <option value="events">Events</option>
                  <option value="projects">Projects</option>
                  <option value="membership">Membership</option>
                  <option value="volunteering">Volunteering</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Message field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us what's on your mind..."
                  className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors resize-none"
                />
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-4 bg-accent hover:bg-accent/90 text-accent-foreground rounded-xl font-semibold gap-2 flex items-center justify-center transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <LoadingSpinner />
                    Sending...
                  </>
                ) : (
                  <>
                    <SendIcon />
                    Send message
                  </>
                )}
              </button>
            </form>

            {/* Decorative corner */}
            <div className="absolute top-6 right-6">
              <svg width="60" height="60" viewBox="0 0 60 60" className="text-accent/10">
                <circle cx="30" cy="30" r="28" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
              </svg>
            </div>
          </div>

          {/* Privacy note and info */}
          <div className="space-y-8">
            {/* Privacy note */}
            <div className="p-6 rounded-2xl bg-muted/30 border border-border">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-secondary/20 text-secondary shrink-0">
                  <ShieldIcon />
                </div>
                <div>
                  <p className="text-foreground font-medium mb-1">Privacy note</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    We use these details to reply to your question and manage club admin. We do not sell or share your information, and we follow DUSA guidelines on handling member data.
                  </p>
                </div>
              </div>
            </div>

            {/* Response time info */}
            <div className="p-6 rounded-2xl bg-muted/30 border border-border">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-lime/20 text-lime shrink-0">
                  <ClockIcon />
                </div>
                <div>
                  <p className="text-foreground font-medium mb-1">When will you hear back?</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    The DSEC exec team are all students too, so responses may take a few days during busy periods like exams. We read every message and will get back to you.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick links */}
            <div className="p-6 rounded-2xl border border-primary/20 bg-primary/5">
              <h3 className="font-grotesk text-lg font-bold text-foreground mb-4">Looking for something specific?</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#membership" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                    <ArrowIcon />
                    <span>How to join DSEC through DUSA</span>
                  </a>
                </li>
                <li>
                  <a href="#work-with-us" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                    <ArrowIcon />
                    <span>Partnership and recruiter enquiries</span>
                  </a>
                </li>
                <li>
                  <a href="#suggestion" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                    <ArrowIcon />
                    <span>Share an anonymous suggestion</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Icons
function MessageIcon() {
  return (
    <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
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

function ShieldIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
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

function LoadingSpinner() {
  return (
    <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
    </svg>
  );
}
