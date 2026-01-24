"use client";

import { motion } from "framer-motion";
import { PenLine, ArrowRight, Users, Sparkles } from "lucide-react";
import TransitionLink from "@/components/TransitionLink";

interface BlogCTAProps {
  variant?: "inline" | "card";
}

export default function BlogCTA({ variant = "card" }: BlogCTAProps) {
  if (variant === "inline") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="my-8 rounded-xl border border-primary/30 bg-gradient-to-r from-primary/10 to-secondary/10 p-6"
      >
        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20">
              <PenLine className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h4 className="font-semibold text-foreground">
                Want to write for DSEC?
              </h4>
              <p className="text-sm text-muted-foreground">
                Share your knowledge with the community
              </p>
            </div>
          </div>
          <TransitionLink
            href="/contact?topic=blog"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90"
          >
            Get in touch
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </TransitionLink>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative overflow-hidden rounded-2xl border border-border bg-card"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-secondary/10 blur-3xl" />

      <div className="relative px-6 py-12 md:px-12 md:py-16">
        <div className="mx-auto max-w-3xl text-center">
          {/* Icon */}
          <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
            <PenLine className="h-8 w-8 text-primary" />
          </div>

          {/* Content */}
          <h2 className="mb-4 font-grotesk text-2xl font-bold text-foreground md:text-3xl">
            Have a Blog to Share?
          </h2>
          <p className="mb-8 text-lg text-muted-foreground">
            We're always looking for passionate writers to contribute to our
            community. Whether you're an expert in your field or just getting
            started, your insights can help others learn and grow.
          </p>

          {/* Benefits */}
          <div className="mb-8 grid gap-4 sm:grid-cols-3">
            <div className="flex flex-col items-center gap-2 rounded-xl bg-muted/50 p-4">
              <Users className="h-6 w-6 text-primary" />
              <span className="text-sm font-medium text-foreground">
                Reach 5K+ readers
              </span>
            </div>
            <div className="flex flex-col items-center gap-2 rounded-xl bg-muted/50 p-4">
              <Sparkles className="h-6 w-6 text-secondary" />
              <span className="text-sm font-medium text-foreground">
                Build your portfolio
              </span>
            </div>
            <div className="flex flex-col items-center gap-2 rounded-xl bg-muted/50 p-4">
              <PenLine className="h-6 w-6 text-lime" />
              <span className="text-sm font-medium text-foreground">
                Get featured on socials
              </span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <TransitionLink
              href="/contact?topic=blog"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-base font-medium text-primary-foreground transition-all hover:bg-primary/90"
            >
              Submit Your Article
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
            </TransitionLink>
            <a
              href="https://docs.google.com/document/d/example"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-base font-medium text-muted-foreground transition-all hover:border-primary/50 hover:text-foreground"
            >
              View Writing Guidelines
            </a>
          </div>

          {/* Testimonial */}
          <div className="mt-10 rounded-xl border border-border bg-muted/30 p-6">
            <blockquote className="italic text-muted-foreground">
              "Writing for DSEC helped me land my first tech job. The exposure
              and feedback from the community was invaluable."
            </blockquote>
            <div className="mt-4 flex items-center justify-center gap-3">
              <div className="h-10 w-10 rounded-full bg-primary/20" />
              <div className="text-left">
                <p className="text-sm font-medium text-foreground">
                  Sarah Mitchell
                </p>
                <p className="text-xs text-muted-foreground">
                  Former DSEC Contributor
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
