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
import TransitionLink from "../TransitionLink";

type ContactType = "question" | "suggestion";
type ContactTopic = "events" | "projects" | "membership" | "volunteering" | "community" | "discord" | "other";

interface ContactFormData {
  type: ContactType;
  name: string;
  email: string;
  topic: ContactTopic | "";
  message: string;
  website: string; // honeypot — must stay empty
}

export default function GeneralContactForm(): React.ReactElement {
  const [formData, setFormData] = useState<ContactFormData>({
    type: "question",
    name: "",
    email: "",
    topic: "",
    message: "",
    website: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    setSubmitError(null);
    setIsSubmitting(true);

    // Build a subject string from type + topic
    const topicLabel = formData.topic
      ? formData.topic.charAt(0).toUpperCase() + formData.topic.slice(1)
      : 'General';
    const typeLabel = formData.type === 'suggestion' ? 'Suggestion' : 'Question';
    const subject = `${typeLabel}: ${topicLabel}`;

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.type === 'suggestion' ? (formData.name || 'Anonymous') : formData.name,
          email: formData.type === 'suggestion' ? (formData.email || 'no-reply@dsec.club') : formData.email,
          subject,
          message: formData.message,
          website: formData.website, // honeypot
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setSubmitError(data.error ?? 'Something went wrong. Please try again.');
      } else {
        setIsSubmitted(true);
      }
    } catch {
      setSubmitError('Unable to send your message. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const isSuggestion = formData.type === "suggestion";

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
            {isSuggestion ? "Thanks for sharing your idea" : "Thank you for contacting DSEC"}
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            {isSuggestion
              ? "Thoughtful suggestions help us shape better events, projects, and support for Deakin students. We appreciate you taking the time."
              : "An executive team member will read your message and reply as soon as we can."}
          </p>
          <button
            onClick={() => {
              setIsSubmitted(false);
              setSubmitError(null);
              setFormData({ type: "question", name: "", email: "", topic: "", message: "", website: "" });
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
          <SectionLabel>Get in Touch</SectionLabel>
          <h2 className="mb-4 max-w-2xl font-grotesk text-3xl font-bold leading-tight text-foreground md:text-4xl">
            Send us a message
          </h2>
          <p className="max-w-2xl text-lg text-muted-foreground">
            Use this form for questions about events, projects, the Discord server, how the club works, or to share anonymous ideas and suggestions. Your message goes directly to the current DSEC executive team.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className={`relative rounded-2xl border p-8 ${isSuggestion ? "border-lime/20 bg-lime/5" : "border-accent/20 bg-accent/5"}`}>
            <div className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl ${isSuggestion ? "bg-gradient-to-br from-lime to-secondary" : "bg-gradient-to-br from-accent to-primary"}`}>
              {isSuggestion ? <LightbulbIcon /> : <MailIcon className="text-white" />}
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Message type toggle */}
              <div>
                <label className="mb-2 block text-sm font-medium text-foreground">
                  What would you like to do?
                </label>
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, type: "question" }))}
                    className={`flex-1 rounded-xl border px-4 py-3 text-sm font-medium transition-all ${
                      !isSuggestion
                        ? "border-accent bg-accent/20 text-accent"
                        : "border-border bg-background text-muted-foreground hover:border-accent/50"
                    }`}
                  >
                    Ask a question
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, type: "suggestion" }))}
                    className={`flex-1 rounded-xl border px-4 py-3 text-sm font-medium transition-all ${
                      isSuggestion
                        ? "border-lime bg-lime/20 text-lime"
                        : "border-border bg-background text-muted-foreground hover:border-lime/50"
                    }`}
                  >
                    Share a suggestion
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    Name {isSuggestion && <span className="text-muted-foreground">(optional)</span>}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required={!isSuggestion}
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className={`w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground transition-colors placeholder:text-muted-foreground focus:outline-none focus:ring-1 ${
                      isSuggestion ? "focus:border-lime focus:ring-lime" : "focus:border-accent focus:ring-accent"
                    }`}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    {isSuggestion ? (
                      <>Email <span className="text-muted-foreground">(optional, if you want a reply)</span></>
                    ) : (
                      "Deakin email or preferred email"
                    )}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required={!isSuggestion}
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={isSuggestion ? "you@email.com" : "you@deakin.edu.au"}
                    className={`w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground transition-colors placeholder:text-muted-foreground focus:outline-none focus:ring-1 ${
                      isSuggestion ? "focus:border-lime focus:ring-lime" : "focus:border-accent focus:ring-accent"
                    }`}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="topic"
                  className="mb-2 block text-sm font-medium text-foreground"
                >
                  {isSuggestion ? "Topic" : "What are you contacting us about?"}
                </label>
                <select
                  id="topic"
                  name="topic"
                  required
                  value={formData.topic}
                  onChange={handleChange}
                  className={`w-full cursor-pointer appearance-none rounded-xl border border-border bg-background px-4 py-3 text-foreground transition-colors focus:outline-none focus:ring-1 ${
                    isSuggestion ? "focus:border-lime focus:ring-lime" : "focus:border-accent focus:ring-accent"
                  }`}
                >
                  <option value="" disabled>
                    {isSuggestion ? "What's this about?" : "Select a topic"}
                  </option>
                  <option value="events">Events</option>
                  <option value="projects">Projects</option>
                  {!isSuggestion && <option value="membership">Membership</option>}
                  {!isSuggestion && <option value="volunteering">Volunteering</option>}
                  {isSuggestion && <option value="community">Community</option>}
                  {isSuggestion && <option value="discord">Discord</option>}
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-foreground"
                >
                  {isSuggestion ? "Your suggestion" : "Message"}
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={isSuggestion ? "Share your idea, feedback, or suggestion..." : "Tell us what's on your mind..."}
                  className={`w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-foreground transition-colors placeholder:text-muted-foreground focus:outline-none focus:ring-1 ${
                    isSuggestion ? "focus:border-lime focus:ring-lime" : "focus:border-accent focus:ring-accent"
                  }`}
                />
              </div>

              {/* Honeypot — hidden from real users, bots fill it in */}
              <div aria-hidden="true" style={{ display: 'none' }}>
                <label htmlFor="website">Leave this blank</label>
                <input
                  type="text"
                  id="website"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  value={formData.website}
                  onChange={handleChange}
                />
              </div>

              {/* Error message */}
              {submitError && (
                <div
                  role="alert"
                  className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400"
                >
                  {submitError}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                aria-busy={isSubmitting}
                className={`flex w-full items-center justify-center gap-2 rounded-xl px-6 py-4 font-semibold transition-all disabled:cursor-not-allowed disabled:opacity-50 ${
                  isSuggestion
                    ? "bg-lime hover:bg-lime/90 text-lime-foreground"
                    : "bg-accent hover:bg-accent/90 text-accent-foreground"
                }`}
              >
                {isSubmitting ? (
                  <>
                    <LoadingSpinner className="h-5 w-5" />
                    {isSuggestion ? "Submitting..." : "Sending..."}
                  </>
                ) : (
                  <>
                    <SendIcon />
                    {isSuggestion ? "Submit suggestion" : "Send message"}
                  </>
                )}
              </button>
            </form>

            <div className="absolute right-6 top-6">
              <svg
                width="60"
                height="60"
                viewBox="0 0 60 60"
                className={isSuggestion ? "text-lime/10" : "text-accent/10"}
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
            {/* Privacy note */}
            <div className="rounded-2xl border border-border bg-muted/30 p-6">
              <div className="flex items-start gap-4">
                <div className="shrink-0 rounded-lg bg-secondary/20 p-2 text-secondary">
                  <ShieldIcon />
                </div>
                <div>
                  <p className="mb-1 font-medium text-foreground">
                    {isSuggestion ? "Stay anonymous if you prefer" : "Privacy note"}
                  </p>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {isSuggestion
                      ? "Name and email are both optional. If you want a response, include your email. Otherwise, your suggestion will be completely anonymous."
                      : "We use these details to reply to your question and manage club admin. We do not sell or share your information, and we follow DUSA guidelines on handling member data."}
                  </p>
                </div>
              </div>
            </div>

            {/* Response time */}
            <div className="rounded-2xl border border-border bg-muted/30 p-6">
              <div className="flex items-start gap-4">
                <div className="shrink-0 rounded-lg bg-lime/20 p-2 text-lime">
                  <ClockIcon />
                </div>
                <div>
                  <p className="mb-1 font-medium text-foreground">
                    {isSuggestion ? "Every idea counts" : "When will you hear back?"}
                  </p>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {isSuggestion
                      ? "Thoughtful suggestions help us shape better events, projects, and support for Deakin students. Even a short idea can spark a new workshop or improve how we run things."
                      : "The DSEC exec team are all students too, so responses may take a few days during busy periods like exams. We read every message and will get back to you."}
                  </p>
                </div>
              </div>
            </div>

            {/* Quick links */}
            <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6">
              <h3 className="mb-4 font-grotesk text-lg font-bold text-foreground">
                {isSuggestion ? "Ideas we'd love to hear" : "Looking for something specific?"}
              </h3>
              {isSuggestion ? (
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-secondary">•</span>
                    <span>Workshop topics you want to learn</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary">•</span>
                    <span>Project ideas for the community</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary">•</span>
                    <span>Ways to improve events or socials</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary">•</span>
                    <span>Discord server improvements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary">•</span>
                    <span>Feedback on past events</span>
                  </li>
                </ul>
              ) : (
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
                    <TransitionLink
                      href="/partnerships"
                      className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
                    >
                      <ArrowSmallIcon />
                      <span>Partnership and recruiter enquiries</span>
                    </TransitionLink>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function LightbulbIcon() {
  return (
    <svg className="w-7 h-7 text-background" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  );
}
