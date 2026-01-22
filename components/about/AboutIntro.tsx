"use client";

import GradientText from "@/components/GradientText";
import SectionLabel from "../SectionLabel";
import DarkVeil from "@/components/DarkVeil";
import ScrollReveal from "@/components/ScrollReveal";
import { Highlighter } from "@/components/ui/highlighter";

interface WhatWeDoItemProps {
	icon: React.ReactNode;
	text: string;
	color: "primary" | "secondary" | "lime" | "accent";
}

const colorClasses: Record<string, string> = {
	primary: "bg-primary/20 text-primary",
	secondary: "bg-secondary/20 text-secondary",
	lime: "bg-lime/20 text-lime",
	accent: "bg-accent/20 text-accent",
};

export default function AboutIntro() {
	return (
		<>
			{/* Hero Section with DarkVeil */}
			<section className="relative min-h-screen overflow-hidden bg-background">
				{/* DarkVeil Background - Extended down */}
				<div className="absolute inset-0 w-full h-[60vh] opacity-60">
					<DarkVeil
						hueShift={264}
						noiseIntensity={0.05}
						scanlineIntensity={0.5}
						speed={0.5}
						scanlineFrequency={1}
					/>
				</div>

				{/* Hero Content */}
				<div className="relative z-10 px-6 md:px-12 pt-20 pb-20 max-w-4xl mx-auto min-h-screen flex flex-col items-center justify-start">
					<div className="mt-32 flex flex-col items-center">
						<SectionLabel>What is DSEC</SectionLabel>
						<h1 className="font-grotesk text-4xl md:text-5xl lg:text-6xl leading-tight text-foreground mb-8 text-center">
							About the Deakin Software Engineering Club
						</h1>

						{/* CTA Buttons */}
						<div className="flex flex-wrap items-center justify-center gap-4">
							<button className="px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full font-semibold transition-all">
								Join DSEC via DUSA
							</button>
							<button className="px-8 py-3 border border-foreground/20 text-foreground hover:bg-foreground/10 rounded-full font-semibold transition-all">
								Meet the exec team
							</button>
						</div>

						{/* Scroll Down Indicator */}
						<div className="mt-16 flex flex-col items-center animate-bounce bg-white/10 rounded-full p-2">
							<svg
								className="w-6 h-6 text-muted-foreground"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M19 14l-7 7m0 0l-7-7m7 7V3"
								/>
							</svg>
						</div>

						<div className="flex flex-col items-center mt-20">
							<div className="mb-6 text-center">
								<ScrollReveal
									baseOpacity={0.1}
									enableBlur
									baseRotation={3}
									blurStrength={4}
									containerClassName="text-white text-4xl md:text-5xl lg:text-7xl font-grotesk text-left"
								>
									Deakin&apos;s home for students who want to build real
									software, not just pass assignments.
								</ScrollReveal>
							</div>

							<div className="space-y-4 text-muted-foreground text-lg leading-relaxed mb-8">
								<p>
									The Deakin Software Engineering Club (DSEC) is an academic and
									professional student club based at the Melbourne Burwood
									campus. We bring together software engineering, computer
									science, IT, and design students who want to learn modern
									development, work in real project teams, and connect with
									industry while they study.
								</p>
								<p>
									DSEC is affiliated with the Deakin University Student
									Association (DUSA) and operates as the official software
									engineering club at Burwood. Our events and projects are run
									by students, for students, with support from Deakin and DUSA.
								</p>
							</div>

							{/* What we do list */}
							<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 w-full">
								<WhatWeDoItem
									icon={<CodeIcon />}
									text="Ship portfolio-ready software in small teams"
									color="primary"
								/>
								<WhatWeDoItem
									icon={<CalendarIcon />}
									text="Host workshops, coding nights, and hackathons"
									color="secondary"
								/>
								<WhatWeDoItem
									icon={<UsersIcon />}
									text="Invite industry guests and alumni speakers"
									color="lime"
								/>
								<WhatWeDoItem
									icon={<SparklesIcon />}
									text="Create a friendly community to grow together"
									color="accent"
								/>
							</div>

							<p className="text-foreground font-medium mb-8 text-xl lg:text-2xl text-center leading-loose">
								If you care about{" "}
								<Highlighter action="box" color="#00bcd4">
									building things
								</Highlighter>
								,{" "}
								<Highlighter action="circle" color="#00bcd4">
									learning from peers
								</Highlighter>
								, and getting closer to{" "}
								<Highlighter action="underline" color="#00bcd4">
									tech careers
								</Highlighter>
								,{" "}
								<Highlighter action="highlight" color="#e91e63">
									this is your club.
								</Highlighter>
							</p>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

function WhatWeDoItem({ icon, text, color }: WhatWeDoItemProps) {
	return (
		<div className="flex items-start gap-3">
			<div className={`p-2 rounded-lg ${colorClasses[color]} shrink-0`}>
				{icon}
			</div>
			<span className="text-muted-foreground text-sm leading-relaxed">
				{text}
			</span>
		</div>
	);
}

// Icons
function CodeIcon() {
	return (
		<svg
			className="w-5 h-5"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
				d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
			/>
		</svg>
	);
}

function CalendarIcon() {
	return (
		<svg
			className="w-5 h-5"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
				d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
			/>
		</svg>
	);
}

function UsersIcon() {
	return (
		<svg
			className="w-5 h-5"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
				d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
			/>
		</svg>
	);
}

function SparklesIcon() {
	return (
		<svg
			className="w-5 h-5"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
				d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
			/>
		</svg>
	);
}
