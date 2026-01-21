"use client";

import {
  ArrowRightIcon,
  CalendarIcon,
  CodeIcon,
  MessageIcon,
  NewspaperIcon,
} from "@/components/icons";
import TransitionLink from "@/components/TransitionLink";
import { Globe } from "@/components/ui/globe";
import { bentoColorClasses, themeColors } from "@/lib/theme";
import type { BaseColor, BentoCardProps } from "@/types";
import type { COBEOptions } from "cobe";
import SectionLabel from "./SectionLabel";
import GradientText from "./GradientText";

const EVENTS_GLOBE_CONFIG: COBEOptions = {
  width: 800,
  height: 800,
  onRender: () => {},
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 1,
  diffuse: 0.4,
  mapSamples: 16000,
  mapBrightness: 6,
  baseColor: [0.91, 0.12, 0.39], // primary color #e91e63 converted to RGB 0-1
  markerColor: [1, 0.42, 0.42], // coral color for markers
  glowColor: [0.91, 0.12, 0.39], // primary glow
  markers: [
    { location: [-37.8136, 144.9631], size: 0.1 }, // Melbourne
    { location: [-37.8497, 145.1153], size: 0.08 }, // Burwood (Deakin)
    { location: [-33.8688, 151.2093], size: 0.06 }, // Sydney
    { location: [-27.4698, 153.0251], size: 0.05 }, // Brisbane
  ],
};

export default function BentoGrid(): React.ReactElement {
  return (
		<section className="relative overflow-hidden bg-background py-20">
			{/* Background decoration */}
			<div className="pointer-events-none absolute inset-0 overflow-hidden">
				<div className="absolute left-0 top-1/4 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
				<div className="absolute bottom-1/4 right-0 h-80 w-80 rounded-full bg-secondary/5 blur-3xl" />
			</div>

			<div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
				<div className="mb-12 md:mb-16">
					<SectionLabel>Choose how you want to get involved</SectionLabel>
					<h2 className="mb-6 font-grotesk text-4xl leading-tight text-foreground md:text-5xl lg:text-6xl flex gap-4">
						Your
						<GradientText
							colors={["#e91e63", "#ff6b6b", "#9c27b0", "#00bcd4"]}
							animationSpeed={8}
							showBorder={false}
						>
							Starting Point
						</GradientText>
					</h2>
					<p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
						Pick a path that fits where you are right now. Whether you want to
						join an event, ship a project, follow along on socials, or talk
						about a partnership.
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
						backgroundComponent={
							<Globe
								config={EVENTS_GLOBE_CONFIG}
								className="inset-auto! absolute right-0 bottom-0 translate-x-1/3 translate-y-1/3 size-125 opacity-50 md:size-162.5"
							/>
						}
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
  backgroundComponent,
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

      {backgroundComponent && (
        <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl">
          {backgroundComponent}
        </div>
      )}

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
