'use client';

import GradientText from '@/components/GradientText';
import { useState } from 'react';

export default function PartnershipsCTA() {
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    partnershipType: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitStatus('success');

    // Reset form
    setTimeout(() => {
      setFormData({
        companyName: '',
        contactName: '',
        email: '',
        phone: '',
        partnershipType: '',
        message: '',
      });
      setSubmitStatus('idle');
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="relative bg-background py-20 md:py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse-glow" />
        <div
          className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse-glow"
          style={{ animationDelay: '1.5s' }}
        />
      </div>

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="cta-grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="1" cy="1" r="1" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cta-grid)" />
        </svg>
      </div>

      <div className="relative z-10 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left side - Info */}
          <div className="lg:col-span-2">
            <div className="sticky top-32">
              <h2 className="font-grotesk text-4xl md:text-5xl font-bold leading-tight text-foreground mb-6">
                Let&apos;s build something{' '}
                <GradientText
                  colors={['#00bcd4', '#e91e63', '#c6ff00']}
                  animationSpeed={6}
                  showBorder={false}
                >
                  together
                </GradientText>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Ready to partner with DSEC? Fill out the form and we'll get back to you within 48 hours to start the conversation.
              </p>

              {/* Contact options */}
              <div className="space-y-4">
                <ContactOption
                  icon={<EmailIcon />}
                  label="Email us directly"
                  value="partnerships@dsec.club"
                  href="mailto:partnerships@dsec.club"
                />
                <ContactOption
                  icon={<LinkedInIcon />}
                  label="Connect on LinkedIn"
                  value="Deakin Software Engineering Club"
                  href="https://linkedin.com/company/dsec"
                />
                <ContactOption
                  icon={<DiscordIcon />}
                  label="Join our Discord"
                  value="discord.gg/dsec"
                  href="https://discord.gg/dsec"
                />
              </div>

              {/* Quick stats */}
              <div className="mt-12 p-6 rounded-2xl border border-border bg-card/50 backdrop-blur-sm">
                <p className="text-sm text-muted-foreground mb-4">
                  Join these organizations already partnering with DSEC:
                </p>
                <div className="flex flex-wrap gap-4">
                  <PartnerBadge name="Deakin" />
                  <PartnerBadge name="DUSA" />
                  <PartnerBadge name="Tech Melbourne" />
                  <PartnerBadge name="Startup VIC" />
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Form */}
          <div className="lg:col-span-3">
            <div className="p-8 md:p-10 rounded-2xl border border-border bg-card/80 backdrop-blur-sm">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Company Name */}
                <div>
                  <label htmlFor="companyName" className="block text-sm font-semibold text-foreground mb-2">
                    Company / Organization Name *
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all"
                    placeholder="Acme Corp"
                  />
                </div>

                {/* Contact Name */}
                <div>
                  <label htmlFor="contactName" className="block text-sm font-semibold text-foreground mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="contactName"
                    name="contactName"
                    value={formData.contactName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all"
                    placeholder="Jane Smith"
                  />
                </div>

                {/* Email and Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all"
                      placeholder="jane@acme.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all"
                      placeholder="+61 400 000 000"
                    />
                  </div>
                </div>

                {/* Partnership Type */}
                <div>
                  <label htmlFor="partnershipType" className="block text-sm font-semibold text-foreground mb-2">
                    Partnership Interest *
                  </label>
                  <select
                    id="partnershipType"
                    name="partnershipType"
                    value={formData.partnershipType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all"
                  >
                    <option value="">Select a partnership type</option>
                    <option value="workshop">Guest Workshops & Talks</option>
                    <option value="hackathon">Hackathon Sponsorship</option>
                    <option value="project">Project Collaboration</option>
                    <option value="mentorship">Portfolio Reviews & Mentorship</option>
                    <option value="custom">Custom Partnership</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                    Tell us about your goals *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all resize-none"
                    placeholder="What are you hoping to achieve through a partnership with DSEC? What kind of engagement would you like to explore?"
                  />
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting || submitStatus === 'success'}
                    className="w-full px-8 py-4 bg-secondary hover:bg-secondary/90 disabled:bg-secondary/50 text-secondary-foreground rounded-xl font-semibold transition-all flex items-center justify-center gap-2 group"
                  >
                    {isSubmitting ? (
                      <>
                        <LoadingIcon />
                        Sending...
                      </>
                    ) : submitStatus === 'success' ? (
                      <>
                        <CheckIcon />
                        Message sent!
                      </>
                    ) : (
                      <>
                        Send message
                        <SendIcon />
                      </>
                    )}
                  </button>
                </div>

                {submitStatus === 'success' && (
                  <div className="p-4 rounded-xl bg-lime/10 border border-lime/30 text-lime text-sm">
                    Thanks for reaching out! We'll get back to you within 48 hours.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface ContactOptionProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
}

function ContactOption({ icon, label, value, href }: ContactOptionProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card/50 hover:bg-card transition-all group"
    >
      <div className="flex-shrink-0 p-2 rounded-lg bg-secondary/20 text-secondary">
        {icon}
      </div>
      <div>
        <p className="text-xs text-muted-foreground">{label}</p>
        <p className="text-sm font-semibold text-foreground group-hover:text-secondary transition-colors">
          {value}
        </p>
      </div>
    </a>
  );
}

function PartnerBadge({ name }: { name: string }) {
  return (
    <div className="px-3 py-1.5 rounded-lg bg-muted/50 border border-border">
      <span className="text-xs font-medium text-muted-foreground">{name}</span>
    </div>
  );
}

// Icons
function EmailIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function DiscordIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  );
}

function LoadingIcon() {
  return (
    <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );
}
