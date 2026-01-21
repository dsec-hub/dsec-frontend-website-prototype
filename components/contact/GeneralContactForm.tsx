"use client";

import { useState } from "react";

import {
  ArrowSmallIcon,
  CheckIcon,
  ClockIcon,
  LoadingSpinner,
  MailIcon,
  SendIcon,
  ShieldIcon,
} from "@/components/icons";
import SectionLabel from "@/components/SectionLabel";
import type { ContactFormData } from "@/types";

export default function GeneralContactForm(): React.ReactElement {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    topic: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  if (isSubmitted) {
    return (
      <section
        id="contact-form"
        className="relative overflow-hidden bg-card py-16 md:py-24"
      >
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div
            className="absolute right-0 top-1/4 h-80 w-80 rounded-full bg-accent/5 blur-3xl"
            style={{
              animation: "dsec-pulse-glow 3s ease-in-out infinite",
              animationDelay: "1s",
            }}
          />
          <div
            className="absolute bottom-1/4 left-0 h-64 w-64 rounded-full bg-secondary/5 blur-3xl"
            style={{
              animation: "dsec-pulse-glow 3s ease-in-out infinite",
              animationDelay: "2s",
            }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center md:px-12">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-lime to-secondary">
            <CheckIcon className="text-white" />
          </div>
          <h2 className="mb-4 font-grotesk text-3xl font-bold leading-tight text-foreground md:text-4xl">
            Thank you for contacting DSEC
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            An executive team member will read your message and reply as soon as
            we can.
          </p>
          <button
            onClick={() => {
              setIsSubmitted(false);
              setFormData({ name: "", email: "", topic: "", message: "" });
            }}
            className="mt-8 rounded-full border border-foreground/20 px-6 py-3 font-semibold text-foreground transition-all hover:bg-foreground/10"
          >
            Send another message
          </button>
        </div>
      </section>
    );
  }

  return (
    <section
      id="contact-form"
      className="relative overflow-hidden bg-card py-16 md:py-24"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute right-0 top-1/4 h-80 w-80 rounded-full bg-accent/5 blur-3xl"
          style={{
            animation: "dsec-pulse-glow 3s ease-in-out infinite",
            animationDelay: "1s",
          }}
        />
        <div
          className="absolute bottom-1/4 left-0 h-64 w-64 rounded-full bg-secondary/5 blur-3xl"
          style={{
            animation: "dsec-pulse-glow 3s ease-in-out infinite",
            animationDelay: "2s",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
        <div className="mb-12">
          <SectionLabel>General Enquiries</SectionLabel>
          <h2 className="mb-4 max-w-2xl font-grotesk text-3xl font-bold leading-tight text-foreground md:text-4xl">
            Contact the DSEC team
          </h2>
          <p className="max-w-2xl text-lg text-muted-foreground">
            Use this form for questions about events, projects, the Discord
            server, or how the club works. Your message goes directly to the
            current DSEC executive team.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="relative rounded-2xl border border-accent/20 bg-accent/5 p-8">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-accent to-primary">
              <MailIcon className="text-white" />
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-foreground"
                >
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
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground transition-colors placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-foreground"
                >
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
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground transition-colors placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                />
              </div>

              <div>
                <label
                  htmlFor="topic"
                  className="mb-2 block text-sm font-medium text-foreground"
                >
                  What are you contacting us about?
                </label>
                <select
                  id="topic"
                  name="topic"
                  required
                  value={formData.topic}
                  onChange={handleChange}
                  className="w-full cursor-pointer appearance-none rounded-xl border border-border bg-background px-4 py-3 text-foreground transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                >
                  <option value="" disabled>
                    Select a topic
                  </option>
                  <option value="events">Events</option>
                  <option value="projects">Projects</option>
                  <option value="membership">Membership</option>
                  <option value="volunteering">Volunteering</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-foreground"
                >
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
                  className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-foreground transition-colors placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-6 py-4 font-semibold text-accent-foreground transition-all hover:bg-accent/90 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <LoadingSpinner className="h-5 w-5" />
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

            <div className="absolute right-6 top-6">
              <svg
                width="60"
                height="60"
                viewBox="0 0 60 60"
                className="text-accent/10"
              >
                <circle
                  cx="30"
                  cy="30"
                  r="28"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                />
              </svg>
            </div>
          </div>

          <div className="space-y-8">
            <div className="rounded-2xl border border-border bg-muted/30 p-6">
              <div className="flex items-start gap-4">
                <div className="shrink-0 rounded-lg bg-secondary/20 p-2 text-secondary">
                  <ShieldIcon />
                </div>
                <div>
                  <p className="mb-1 font-medium text-foreground">
                    Privacy note
                  </p>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    We use these details to reply to your question and manage
                    club admin. We do not sell or share your information, and we
                    follow DUSA guidelines on handling member data.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-muted/30 p-6">
              <div className="flex items-start gap-4">
                <div className="shrink-0 rounded-lg bg-lime/20 p-2 text-lime">
                  <ClockIcon />
                </div>
                <div>
                  <p className="mb-1 font-medium text-foreground">
                    When will you hear back?
                  </p>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    The DSEC exec team are all students too, so responses may
                    take a few days during busy periods like exams. We read
                    every message and will get back to you.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6">
              <h3 className="mb-4 font-grotesk text-lg font-bold text-foreground">
                Looking for something specific?
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#membership"
                    className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
                  >
                    <ArrowSmallIcon />
                    <span>How to join DSEC through DUSA</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#work-with-us"
                    className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
                  >
                    <ArrowSmallIcon />
                    <span>Partnership and recruiter enquiries</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#suggestion"
                    className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
                  >
                    <ArrowSmallIcon />
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
