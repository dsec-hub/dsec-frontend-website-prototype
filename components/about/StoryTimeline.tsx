"use client";

import SectionLabel from "../SectionLabel";
import ScrollStackGSAP, { ScrollStackGSAPItem } from "../ScrollStackGSAP";

type ColorType = "primary" | "secondary" | "coral" | "lime";

interface StoryPanel {
	id: number;
	icon: React.ReactNode;
	label: string;
	heading: string;
	copy: string;
	color: ColorType;
}

const colorClasses: Record<
	ColorType,
	{
		bg: string;
		border: string;
		icon: string;
		number: string;
	}
> = {
	primary: {
		bg: "bg-primary",
		border: "border-primary",
		icon: "bg-white/20 text-white",
		number: "text-white/30",
	},
	secondary: {
		bg: "bg-secondary",
		border: "border-secondary",
		icon: "bg-white/20 text-white",
		number: "text-white/30",
	},
	coral: {
		bg: "bg-coral",
		border: "border-coral",
		icon: "bg-white/20 text-white",
		number: "text-white/30",
	},
	lime: {
		bg: "bg-lime",
		border: "border-lime",
		icon: "bg-background/20 text-background",
		number: "text-background/30",
	},
};

const storyPanels: StoryPanel[] = [
	{
		id: 1,
		icon: <GamepadIcon />,
		label: "Early Days",
		heading: "From game jams to our first hackathon",
		copy: "DSEC started in the late 2010s with game jams, hackathons, and casual dev nights. Events like LeadHack set the tone — a place where it's okay to try, fail, and learn in public.",
		color: "primary",
	},
	{
		id: 2,
		icon: <BuildingIcon />,
		label: "Growing Up",
		heading: "Workshops, industry panels, and a bigger community",
		copy: "We expanded beyond hackathons into industry sessions with Amazon and Macquarie, datathons, and skills workshops. Collaborations with DUCA, DDSC, and other clubs brought diverse students together.",
		color: "secondary",
	},
	{
		id: 3,
		icon: <RefreshIcon />,
		label: "Reset",
		heading: "Losing momentum and rebuilding trust",
		copy: "2025 was tough — messy transitions, lost knowledge, and declining trust. A new exec team stepped in mid-trimester and rebuilt from basics: honest communication, smaller events, and clearer roles.",
		color: "coral",
	},
	{
		id: 4,
		icon: <RocketIcon />,
		label: "Today",
		heading: "DSEC today — build real projects together",
		copy: "Today we help students ship portfolio-ready software in a real team environment. We run workshops, coding nights, speaker events, and an active Discord community.",
		color: "lime",
	},
];

export default function StoryTimeline() {
	return (
		<section className="relative bg-card overflow-hidden">
			<div className="px-6 md:px-12 max-w-7xl mx-auto pt-20 md:pt-32 mb-12">
				<SectionLabel>Our story at Deakin</SectionLabel>
				<h2 className="font-grotesk text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground mb-6">
					Our journey so far
				</h2>
				<p className="text-muted-foreground text-lg leading-relaxed max-w-3xl">
					DSEC has been part of Deakin&apos;s tech community for years. The logo
					has changed a little, the exec teams have changed a lot, but the core
					idea has stayed the same: help Deakin students learn, build, and find
					their people through software engineering.
				</p>
			</div>

			<ScrollStackGSAP stackPosition="25%" cardOffset={10} stackOffset={40}>
				{storyPanels.map((panel, index) => (
					<ScrollStackGSAPItem key={panel.id}>
						<TimelineCard panel={panel} index={index} />
					</ScrollStackGSAPItem>
				))}
			</ScrollStackGSAP>

			{/* Closing copy */}
			<div className="px-6 md:px-12 max-w-7xl mx-auto pt-10 pb-20 md:pb-32">
				<div className="max-w-3xl mx-auto text-center">
					<p className="text-muted-foreground text-lg leading-relaxed">
						The club is still evolving, but the goal is simple: if you stay
						engaged with DSEC through your degree, you should graduate with a
						real project portfolio, industry connections, and friends who were
						there for every late-night debugging session.
					</p>
				</div>
			</div>
		</section>
	);
}

function TimelineCard({
	panel,
	index,
}: {
	panel: StoryPanel;
	index: number;
}) {
	const styles = colorClasses[panel.color];
	const isLime = panel.color === "lime";
	const textColor = isLime ? "text-background" : "text-white";
	const mutedTextColor = isLime ? "text-background/70" : "text-white/70";

	return (
		<div className={`gsap-stack-card-inner w-full h-full ${styles.bg} rounded-2xl`}>
			<div className="max-w-5xl mx-auto px-6 md:px-12 py-12 md:py-16 h-full">
				<div className="flex flex-col md:flex-row gap-6 md:gap-10">
					{/* Number column */}
					<div className="shrink-0">
						<span className={`font-mono text-5xl md:text-6xl lg:text-7xl font-bold ${styles.number}`}>
							0{index + 1}
						</span>
					</div>

					{/* Content column */}
					<div className="flex-1 flex flex-col justify-start">
						{/* Icon and label */}
						<div className="flex items-center gap-3 mb-4">
							<div className={`p-2 rounded-lg ${styles.icon}`}>{panel.icon}</div>
							<span className={`font-mono text-xs uppercase tracking-wider ${mutedTextColor}`}>
								{panel.label}
							</span>
						</div>

						{/* Heading */}
						<h3 className={`font-grotesk text-2xl md:text-3xl font-bold ${textColor} mb-4`}>
							{panel.heading}
						</h3>

						{/* Copy */}
						<p className={`${mutedTextColor} text-base leading-relaxed max-w-xl`}>
							{panel.copy}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

// Icons
function GamepadIcon() {
	return (
		<svg
			className="w-6 h-6"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
				d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a2 2 0 012 2v3a2 2 0 01-2 2h-1a1 1 0 00-1 1v1a2 2 0 01-2 2H9a2 2 0 01-2-2v-1a1 1 0 00-1-1H5a2 2 0 01-2-2V8a2 2 0 012-2h3a1 1 0 001-1V4z"
			/>
		</svg>
	);
}

function BuildingIcon() {
	return (
		<svg
			className="w-6 h-6"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
				d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
			/>
		</svg>
	);
}

function RefreshIcon() {
	return (
		<svg
			className="w-6 h-6"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
				d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
			/>
		</svg>
	);
}

function RocketIcon() {
	return (
		<svg
			className="w-6 h-6"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
				d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
			/>
		</svg>
	);
}
