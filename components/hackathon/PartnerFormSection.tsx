'use client';

import { useState } from 'react';
import SectionLabel from '@/components/SectionLabel';

type PartnerType = 'university-club' | 'corporate-sponsor' | 'individual' | 'other';

interface FormData {
  name: string;
  email: string;
  organisation: string;
  type: PartnerType | '';
  message: string;
}

export default function PartnerFormSection() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    organisation: '',
    type: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  if (submitted) {
    return (
      <section id="partner" className="relative py-24 md:py-32 bg-muted/30 overflow-hidden">
        <div className="relative z-10 max-w-2xl mx-auto px-6 md:px-12 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-lime/20 text-lime mb-6">
            <CheckIcon />
          </div>
          <h2 className="font-grotesk text-3xl md:text-4xl font-bold text-foreground mb-4">
            Thanks for your interest!
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            We&apos;ve received your partnership enquiry and will be in touch within a few days.
          </p>
          <button
            onClick={() => {
              setSubmitted(false);
              setFormData({ name: '', email: '', organisation: '', type: '', message: '' });
            }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-card border border-border rounded-full text-sm font-medium text-foreground hover:bg-muted transition-colors"
          >
            Submit Another Enquiry
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="partner" className="relative py-24 md:py-32 bg-muted/30 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Content */}
          <div>
            <SectionLabel>Get Involved</SectionLabel>
            <h2 className="font-grotesk text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Partner With Us
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We&apos;re building Australia&apos;s cross-university hackathon and want more collaborators to make it even better.
            </p>

            {/* Partner Types */}
            <div className="space-y-4 mb-8">
              <PartnerTypeCard
                icon={<UniversityIcon />}
                title="University Clubs"
                description="Co-host, promote to your members, or provide venue support"
                color="secondary"
              />
              <PartnerTypeCard
                icon={<BuildingIcon />}
                title="Corporate Sponsors"
                description="Get your brand in front of Australia's future tech talent"
                color="primary"
              />
              <PartnerTypeCard
                icon={<UserIcon />}
                title="Industry Professionals"
                description="Mentor participants or judge submissions"
                color="coral"
              />
            </div>
          </div>

          {/* Right - Form */}
          <div>
            <form onSubmit={handleSubmit} className="bg-card border border-border rounded-2xl p-8">
              <h3 className="font-grotesk text-xl font-bold text-foreground mb-6">
                Partnership Interest Form
              </h3>

              <div className="space-y-5">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-muted border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                    placeholder="Your name"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email <span className="text-primary">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-muted border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Organisation Field */}
                <div>
                  <label htmlFor="organisation" className="block text-sm font-medium text-foreground mb-2">
                    Organisation / Club Name <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    id="organisation"
                    name="organisation"
                    required
                    value={formData.organisation}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-muted border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                    placeholder="Your organisation or club"
                  />
                </div>

                {/* Type Field */}
                <div>
                  <label htmlFor="type" className="block text-sm font-medium text-foreground mb-2">
                    Type <span className="text-primary">*</span>
                  </label>
                  <select
                    id="type"
                    name="type"
                    required
                    value={formData.type}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-muted border border-border rounded-xl text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all appearance-none cursor-pointer"
                  >
                    <option value="" disabled>Select your type</option>
                    <option value="university-club">University Club</option>
                    <option value="corporate-sponsor">Corporate Sponsor</option>
                    <option value="individual">Individual (Mentor/Judge)</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    How would you like to be involved?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-muted border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                    placeholder="Tell us about your interest and how you'd like to contribute..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-4 bg-primary hover:bg-primary/90 disabled:bg-primary/50 text-primary-foreground rounded-xl font-semibold transition-all flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <LoadingSpinner />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <SendIcon />
                      Submit Partnership Interest
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

interface PartnerTypeCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: 'primary' | 'secondary' | 'coral';
}

const typeColors = {
  primary: 'bg-primary/10 text-primary',
  secondary: 'bg-secondary/10 text-secondary',
  coral: 'bg-coral/10 text-coral',
};

function PartnerTypeCard({ icon, title, description, color }: PartnerTypeCardProps) {
  return (
    <div className="flex items-start gap-4 p-4 bg-card/50 border border-border/50 rounded-xl">
      <div className={`w-10 h-10 rounded-lg ${typeColors[color]} flex items-center justify-center shrink-0`}>
        {icon}
      </div>
      <div>
        <h4 className="font-semibold text-foreground mb-1">{title}</h4>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}

function LoadingSpinner() {
  return (
    <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );
}

// Icons
function CheckIcon() {
  return (
    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );
}

function UniversityIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
    </svg>
  );
}

function BuildingIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
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
