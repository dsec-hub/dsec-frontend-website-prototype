'use client';

import GradientText from '@/components/GradientText';
import SectionLabel from '../SectionLabel';

interface ExpectationItemProps {
  icon: React.ReactNode;
  text: string;
}

export default function CultureSection() {
  return (
		<section className="relative bg-background py-20 md:py-32 overflow-hidden">
			<div className="relative z-10 px-6 md:px-12 max-w-7xl mx-auto">
				<div className="max-w-4xl mx-auto">
					{/* Header */}
					<div className="mb-12">
						<SectionLabel>How we behave as a community</SectionLabel>
						<h2 className="font-grotesk text-4xl md:text-5xl font-bold leading-tight text-foreground mb-6">
							Safe, inclusive, and DUSA-affiliated
						</h2>
						<p className="text-muted-foreground text-lg leading-relaxed">
							DSEC is a DUSA-affiliated club. That means we follow Deakin and
							DUSA guidelines for student conduct, incident management, and safe
							events on campus and online. We are committed to keeping our
							Discord, events, and projects welcoming for students of all
							backgrounds, identities, and experience levels.
						</p>
					</div>

					{/* Expectations card */}
					<div className="relative p-8 md:p-10 rounded-2xl border border-border bg-card mb-12">
						{/* Shield icon decoration */}
						<div className="absolute -top-6 left-8">
							<div className="p-4 rounded-xl bg-[#3d1422] text-primary border-4 border-background">
								<ShieldIcon />
							</div>
						</div>

						<div className="pt-6">
							<h3 className="font-grotesk text-2xl font-bold text-foreground mb-6">
								We expect members to
							</h3>

							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								<ExpectationItem
									icon={<HeartIcon />}
									text="Treat others with respect, both online and in person"
								/>
								<ExpectationItem
									icon={<MessageIcon />}
									text="Give constructive feedback on code and ideas, never personal attacks"
								/>
								<ExpectationItem
									icon={<UsersIcon />}
									text="Help create spaces where women, non-binary students, international students, and other under-represented groups in tech can participate fully"
								/>
								<ExpectationItem
									icon={<ShieldIconSmall />}
									text="Follow DUSA and Deakin policies on harassment, discrimination, alcohol, and safety at events"
								/>
							</div>
						</div>
					</div>

					{/* Note */}
					<div className="p-6 rounded-xl bg-muted/30 border border-border/50">
						<p className="text-muted-foreground leading-relaxed">
							<span className="font-semibold text-foreground">
								If something doesn&apos;t feel right
							</span>{" "}
							at a DSEC event or in our online spaces, talk to an exec or
							contact DUSA directly. We take concerns seriously and will act in
							line with DUSA&apos;s incident management processes.
						</p>
						<a
							href="https://dusa-website-app-bucket.s3-ap-southeast-2.amazonaws.com/prod/Club-Resources/Helpful-resources/Student-Guide-to-Misconduct.pdf"
							className="inline-flex items-center gap-2 mt-4 text-primary hover:text-primary/80 font-medium transition-colors"
						>
							Read our conduct summary
							<svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
								<path
									d="M6 12L10 8L6 4"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}

function ExpectationItem({ icon, text }: ExpectationItemProps) {
  return (
    <div className="flex items-start gap-4">
      <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0">{icon}</div>
      <p className="text-muted-foreground leading-relaxed">{text}</p>
    </div>
  );
}

// Icons
function ShieldIcon() {
  return (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
      />
    </svg>
  );
}

function ShieldIconSmall() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
      />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
      />
    </svg>
  );
}

function MessageIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
      />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
      />
    </svg>
  );
}
