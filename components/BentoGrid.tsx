"use client";

import {
  ArrowRightIcon,
  CalendarIcon,
  CodeIcon,
  MessageIcon,
  NewspaperIcon,
} from "@/components/icons";
import TransitionLink from "@/components/TransitionLink";
import { bentoColorClasses, themeColors } from "@/lib/theme";
import type { BaseColor, BentoCardProps } from "@/types";
import SectionLabel from "./SectionLabel";

export default function BentoGrid(): React.ReactElement {
  return (
    <section className="relative overflow-hidden bg-background py-20 md:py-32">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-1/4 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-0 h-80 w-80 rounded-full bg-secondary/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
        <div className="mb-12 md:mb-16">
          <SectionLabel>
            Choose how you want to get involved
          </SectionLabel>
          <h2 className="mb-6 max-w-3xl font-grotesk text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
            Your starting point
          </h2>
          <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Pick a path that fits where you are right now. Whether you want to
            join an event, ship a project, follow along on socials, or talk
            about a partnership, these tiles are your starting point.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-4">
          <BentoCard
            icon={<CalendarIcon />}
            title="Events and workshops"
            description="See what is happening this trimester across Burwood and online. From intro coding nights to deep dive tech talks and hands on project sprints, DSEC events are where you meet people and learn faster together."
            href="/events"
            color="primary"
            className="lg:col-span-2 lg:row-span-2"
            large
          />

          <BentoCard
            icon={<CodeIcon />}
            title="Student software projects"
            description="Browse real software built by Deakin students in DSEC teams. Explore web apps, tools, and experiments with links to GitHub."
            href="/projects"
            color="secondary"
            className="lg:col-span-2"
          />

          <BentoCard
            icon={<NewspaperIcon />}
            title="Blog and club updates"
            description="Catch up on event recaps, project launches, hackathon stories, and news from the Deakin software engineering community."
            href="/blog"
            color="lime"
          />

          <BentoCard
            icon={<MessageIcon />}
            title="Community and socials"
            description="Join the DSEC Discord server and follow us on Instagram and LinkedIn to stay close to the club."
            href="/community"
            color="accent"
          />
        </div>
      </div>
    </section>
  );
}

function BentoCard({
  icon,
  title,
  description,
  href,
  color,
  className = "",
  large,
}: BentoCardProps): React.ReactElement {
  const styles = bentoColorClasses[color];

  return (
    <TransitionLink
      href={href}
      className={`group relative flex flex-col justify-between rounded-2xl border p-6 transition-all duration-300 md:p-8 ${styles.bg} ${styles.border} ${styles.glow} group-hover:shadow-xl ${className} ${large ? "min-h-[400px]" : "min-h-[220px]"}`}
    >
      <div className="absolute inset-0 overflow-hidden rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <GridPattern color={color} />
      </div>

      <div className="relative z-10">
        <div
          className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl ${styles.icon}`}
        >
          {icon}
        </div>
        <h3
          className={`mb-3 font-grotesk font-bold text-foreground ${large ? "text-2xl md:text-3xl" : "text-xl"}`}
        >
          {title}
        </h3>
        <p
          className={`leading-relaxed text-muted-foreground ${large ? "max-w-md text-base md:text-lg" : "text-sm"}`}
        >
          {description}
        </p>
      </div>

      <div className="relative z-10 mt-6">
        <div
          className={`inline-flex h-10 w-10 translate-x-0 transform items-center justify-center rounded-full opacity-0 transition-all duration-300 group-hover:translate-x-2 group-hover:opacity-100 ${styles.arrow}`}
        >
          <ArrowRightIcon />
        </div>
      </div>

      {large && (
        <div className="pointer-events-none absolute bottom-0 right-0 h-48 w-48 opacity-20">
          <svg viewBox="0 0 100 100" className="h-full w-full">
            {Array.from({ length: 5 }).map((_, i) => (
              <circle
                key={i}
                cx="100"
                cy="100"
                r={20 + i * 15}
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                className={
                  color === "primary"
                    ? "text-primary"
                    : color === "secondary"
                      ? "text-secondary"
                      : color === "lime"
                        ? "text-lime"
                        : "text-accent"
                }
              />
            ))}
          </svg>
        </div>
      )}
    </TransitionLink>
  );
}

function GridPattern({ color }: { color: BaseColor }): React.ReactElement {
  return (
    <svg
      className="absolute inset-0 h-full w-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id={`grid-${color}`}
          width="20"
          height="20"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="1" cy="1" r="1" fill={themeColors[color]} opacity="0.3" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#grid-${color})`} />
    </svg>
  );
}
