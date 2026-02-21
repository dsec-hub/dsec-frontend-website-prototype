"use client";

import { Rocket, Clock, Bell, ArrowRight, Sparkles, Zap } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { subscribeToNewsletter } from "@/app/actions/newsletter";

interface ComingSoonProps {
  type: "login" | "join" | "blog" | "events" | "projects" | "partnerships" | "contact" | "about";
}

const subtitles: Record<ComingSoonProps["type"], string> = {
  login: "Member portal is getting ready for liftoff",
  join: "Registration is preparing for launch",
  blog: "Our blog is getting ready for liftoff",
  events: "Events page is preparing for launch",
  projects: "Projects showcase is getting ready",
  partnerships: "Partnerships page is preparing for launch",
  contact: "Contact page is preparing for launch",
  about: "About page is getting ready for liftoff",
};

const descriptions: Record<ComingSoonProps["type"], string> = {
  login: "We're building something amazing for DSEC members. The login feature will be available soon.",
  join: "We're putting the finishing touches on our membership system. Join the waitlist to be the first to know when we launch.",
  blog: "We're crafting insightful articles and tutorials for the DSEC community. Join the waitlist to be notified when we launch.",
  events: "We're preparing an exciting lineup of events for you. Join the waitlist to be the first to know when registration opens.",
  projects: "We're curating an amazing showcase of student projects. Join the waitlist to be notified when we launch.",
  partnerships: "We're building exciting partnership opportunities. Join the waitlist to be the first to know when this page goes live.",
  contact: "We're setting up our contact channels. Join the waitlist to be notified when we launch.",
  about: "We're crafting our story and team information. Join the waitlist to be notified when the about page goes live.",
};

export default function ComingSoon({ type }: ComingSoonProps) {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const handleNotify = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    setMessage("");
    setIsError(false);

    const result = await subscribeToNewsletter(email);

    setIsSubmitting(false);

    if (result.success) {
      setIsSubscribed(true);
      setMessage(result.message);
      setEmail("");
    } else {
      setIsError(true);
      setMessage(result.message);
    }
  };

  return (
    <div className="relative min-h-[80vh] flex items-center justify-center px-4">
      {/* Background gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-2xl mx-auto text-center">
        {/* Icon */}
        <div className="inline-block mb-8">
          <div className="relative w-[120px] h-[120px] bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-2xl mx-auto">
            <Rocket className="w-14 h-14 text-white transform -rotate-45" />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 font-[family-name:var(--font-space-grotesk)]">
          <span className="gradient-text">Launching Soon</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl text-muted-foreground mb-4">
          {subtitles[type]}
        </p>

        {/* Description */}
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          {descriptions[type]}
        </p>

        {/* Feature badges */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {[
            { icon: Clock, text: "Coming Soon" },
            { icon: Sparkles, text: "New Features" },
            { icon: Zap, text: "Better Experience" },
          ].map((badge, i) => (
            <div
              key={i}
              className="flex items-center gap-2 px-4 py-2 bg-card/50 backdrop-blur-sm border border-border rounded-full text-sm"
            >
              <badge.icon className="w-4 h-4 text-primary" />
              <span className="text-muted-foreground">{badge.text}</span>
            </div>
          ))}
        </div>

        {/* Notification Form */}
        <div className="max-w-md mx-auto">
          {!isSubscribed ? (
            <form onSubmit={handleNotify} className="relative">
              <div className="flex gap-3">
                <div className="relative flex-1">
                  <Bell className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email for updates"
                    required
                    disabled={isSubmitting}
                    className="w-full pl-12 pr-4 py-4 bg-card/80 backdrop-blur-sm border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-foreground placeholder:text-muted-foreground disabled:opacity-70"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-4 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary/90 transition-colors flex items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                      Subscribing...
                    </>
                  ) : (
                    <>
                      Notify Me
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
              {isError && message && (
                <p className="mt-4 text-sm text-red-500 text-center">{message}</p>
              )}
            </form>
          ) : (
            <div className="p-6 bg-green-500/10 border border-green-500/20 rounded-xl">
              <div className="flex items-center justify-center gap-3 text-green-500">
                <Sparkles className="w-5 h-5" />
                <span className="font-medium">{message || "You're on the list! We'll notify you when we launch."}</span>
              </div>
            </div>
          )}
        </div>

        {/* Back to home link */}
        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowRight className="w-4 h-4 rotate-180" />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
