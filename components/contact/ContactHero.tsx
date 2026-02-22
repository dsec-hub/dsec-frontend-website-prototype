'use client';

import SectionLabel from '@/components/SectionLabel';
import Aurora from '@/components/Aurora';
import ScrollReveal from '@/components/ScrollReveal';
import { Highlighter } from '@/components/ui/highlighter';
import Link from 'next/link';
import TransitionLink from '../TransitionLink';

interface AudienceItemProps {
	icon: React.ReactNode;
	text: string;
	color: 'primary' | 'secondary' | 'lime' | 'accent';
}

const colorClasses: Record<string, string> = {
	primary: 'bg-primary/20 text-primary',
	secondary: 'bg-secondary/20 text-secondary',
	lime: 'bg-lime/20 text-lime',
	accent: 'bg-accent/20 text-accent',
};

export default function ContactHero() {
	return (
		<>
			{/* Hero Section with Aurora */}
			<section className="relative min-h-screen overflow-hidden bg-background">
				{/* Aurora Background - Extended down */}
				<div className="absolute inset-0 w-full h-[60vh] opacity-60">
					<Aurora
						colorStops={['#9c27b0', '#e91e63', '#9c27b0']}
						amplitude={1.0}
						blend={0.5}
						speed={0.5}
					/>
				</div>

				{/* Hero Content */}
				<div className="relative z-10 px-6 md:px-12 pt-20 pb-20 max-w-4xl mx-auto min-h-screen flex flex-col items-center justify-start">
					<div className="mt-32 flex flex-col items-center">
						<SectionLabel>Contact DSEC</SectionLabel>
						<h1 className="font-grotesk text-4xl md:text-6xl lg:text-7xl leading-tight text-foreground mb-8 text-center">
							Contact DSEC
						</h1>

						{/* CTA Buttons */}
						<div className="flex flex-wrap items-center justify-center gap-4">
							<a
								href="#contact-form"
								className="px-8 py-3 bg-accent hover:bg-accent/90 text-accent-foreground rounded-full font-semibold transition-all flex items-center gap-2"
							>
								<MessageIcon />
								Send a message
							</a>
							<TransitionLink
								href="/about"
								className="px-8 py-3 border border-foreground/20 text-foreground hover:bg-foreground/10 rounded-full font-semibold transition-all"
							>
								Learn about DSEC
							</TransitionLink>
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
									containerClassName="text-white text-5xl lg:text-7xl font-grotesk text-left"
								>
									Use this page to contact the Deakin software engineering community, ask questions, share ideas, or explore partnerships.
								</ScrollReveal>
							</div>

							<div className="space-y-4 text-muted-foreground text-lg leading-relaxed mb-8">
								<p>
									The Deakin Software Engineering Club (DSEC) is a DUSA affiliated student club for anyone at Deakin who cares about coding, software engineering, and building real projects. We use this contact page for three main things:
								</p>
								<p>
									Whether you&apos;re a student with a question, a member with an idea, or a company looking to connect with emerging talent at the Melbourne Burwood campus, you&apos;re in the right place.
								</p>
							</div>

							{/* What this page is for list */}
							<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 w-full">
								<AudienceItem
									icon={<StudentIcon />}
									text="General questions from students and staff"
									color="primary"
								/>
								<AudienceItem
									icon={<LightbulbIcon />}
									text="Anonymous ideas and suggestions from members"
									color="secondary"
								/>
								<AudienceItem
									icon={<BriefcaseIcon />}
									text="Partnership and recruiter enquiries from companies"
									color="lime"
								/>
								<AudienceItem
									icon={<MessageLargeIcon />}
									text="Membership and joining through DUSA"
									color="accent"
								/>
							</div>

							<p className="text-foreground font-medium mb-8 text-xl lg:text-2xl text-center leading-loose">
								If you want to{' '}
								<Highlighter action="box" color="#00bcd4" isView={true}>
									ask questions
								</Highlighter>
								,{' '}
								<Highlighter action="circle" color="#00bcd4" isView={true}>
									share ideas
								</Highlighter>
								, or explore{' '}
								<Highlighter action="underline" color="#00bcd4" isView={true}>
									partnerships
								</Highlighter>
								,{' '}
								<Highlighter action="highlight" color="#e91e63" isView={true}>
									reach out below.
								</Highlighter>
							</p>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

function AudienceItem({ icon, text, color }: AudienceItemProps) {
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
function MessageIcon() {
	return (
		<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
			<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
		</svg>
	);
}

function MessageLargeIcon() {
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
				d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
			/>
		</svg>
	);
}

function StudentIcon() {
	return (
		<svg
			className="w-5 h-5"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
		>
			<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
			<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
			<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
		</svg>
	);
}

function LightbulbIcon() {
	return (
		<svg
			className="w-5 h-5"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
		>
			<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
		</svg>
	);
}

function BriefcaseIcon() {
	return (
		<svg
			className="w-5 h-5"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
		>
			<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
		</svg>
	);
}
