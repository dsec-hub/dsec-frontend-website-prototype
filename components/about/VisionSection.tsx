'use client';

import GradientText from '@/components/GradientText';
import SectionLabel from '../SectionLabel';
import { Highlighter } from '../ui/highlighter';

interface ObjectiveItemProps {
  icon: React.ReactNode;
  text: string;
  color: 'primary' | 'secondary';
}

const colorClasses: Record<string, string> = {
  primary: 'text-primary',
  secondary: 'text-secondary',
};

export default function VisionSection() {
  return (
		<section className="relative bg-background py-20 md:py-32 overflow-hidden">
			{/* Background decoration */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
				<div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl" />
			</div>

			<div className="relative z-10 px-6 md:px-12 max-w-7xl mx-auto">
				<div className="mb-16">
					<SectionLabel>Where we&apos;re going next</SectionLabel>
					<h2 className="font-grotesk text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground mb-6">
						Our vision for DSEC at Deakin
					</h2>
					<p className="text-muted-foreground text-lg leading-relaxed max-w-3xl">
						Our vision is for every Deakin student who is serious about software
						engineering to have a clear path from first-year curiosity to
						job-ready confidence, supported by a club that feels like a real dev
						team and a real community.
					</p>
				</div>

				{/* Two column objectives */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
					{/* For Members */}
					<div className="relative p-8 md:p-10 rounded-2xl border border-primary/20 bg-primary/5">
						{/* Decorative corner */}
						<div className="absolute top-0 right-0 w-32 h-32 overflow-hidden rounded-tr-2xl">
							<svg viewBox="0 0 100 100" className="w-full h-full">
								<circle
									cx="100"
									cy="0"
									r="80"
									fill="none"
									stroke="var(--color-primary)"
									strokeWidth="1"
									opacity="0.2"
								/>
								<circle
									cx="100"
									cy="0"
									r="60"
									fill="none"
									stroke="var(--color-primary)"
									strokeWidth="1"
									opacity="0.15"
								/>
								<circle
									cx="100"
									cy="0"
									r="40"
									fill="none"
									stroke="var(--color-primary)"
									strokeWidth="1"
									opacity="0.1"
								/>
							</svg>
						</div>

						<div className="flex items-center gap-3 mb-6">
							<div className="p-3 rounded-xl bg-primary/20 text-primary">
								<UsersIcon />
							</div>
							<h3 className="font-grotesk text-2xl font-bold text-foreground">
								Core objectives for members
							</h3>
						</div>

						<ul className="space-y-4">
							<ObjectiveItem
								icon={<TargetIcon />}
								text="Help students ship at least one hackathon-level project before graduation"
								color="primary"
							/>
							<ObjectiveItem
								icon={<TargetIcon />}
								text="Teach modern software practices — Git, agile, reviews, collaboration — alongside technical skills"
								color="primary"
							/>
							<ObjectiveItem
								icon={<TargetIcon />}
								text="Make it easier to meet peers, mentors, and industry contacts at Deakin"
								color="primary"
							/>
							<ObjectiveItem
								icon={<HeartIcon />}
								text="Support students from all backgrounds to feel welcome in tech and stay in the pipeline"
								color="primary"
							/>
						</ul>
					</div>

					{/* For Partners and Deakin */}
					<div className="relative p-8 md:p-10 rounded-2xl border border-secondary/20 bg-secondary/5">
						{/* Decorative corner */}
						<div className="absolute top-0 right-0 w-32 h-32 overflow-hidden rounded-tr-2xl">
							<svg viewBox="0 0 100 100" className="w-full h-full">
								<circle
									cx="100"
									cy="0"
									r="80"
									fill="none"
									stroke="var(--color-secondary)"
									strokeWidth="1"
									opacity="0.2"
								/>
								<circle
									cx="100"
									cy="0"
									r="60"
									fill="none"
									stroke="var(--color-secondary)"
									strokeWidth="1"
									opacity="0.15"
								/>
								<circle
									cx="100"
									cy="0"
									r="40"
									fill="none"
									stroke="var(--color-secondary)"
									strokeWidth="1"
									opacity="0.1"
								/>
							</svg>
						</div>

						<div className="flex items-center gap-3 mb-6">
							<div className="p-3 rounded-xl bg-secondary/20 text-secondary">
								<BriefcaseIcon />
							</div>
							<h3 className="font-grotesk text-2xl font-bold text-foreground">
								Core objectives for partners
							</h3>
						</div>

						<ul className="space-y-4">
							<ObjectiveItem
								icon={<TargetIcon />}
								text="Offer a simple way for companies and staff to meet motivated student developers"
								color="secondary"
							/>
							<ObjectiveItem
								icon={<TargetIcon />}
								text="Co-create events that are genuinely useful for both student learning and recruitment"
								color="secondary"
							/>
							<ObjectiveItem
								icon={<TargetIcon />}
								text="Showcase student projects and success stories to highlight Deakin's software talent"
								color="secondary"
							/>
						</ul>
					</div>
				</div>

				{/* Bottom tagline */}
				<div className="mt-16 text-center">
					<p className="font-grotesk text-xl md:text-2xl text-foreground font-medium max-w-2xl mx-auto">
						We want DSEC to be known as the place where Deakin students{" "}
						<Highlighter action="underline" isView={true} color="#e91e63">
							actually build things
						</Highlighter>
						, not just talk about them.
					</p>
				</div>
			</div>
		</section>
	);
}

function ObjectiveItem({ icon, text, color }: ObjectiveItemProps) {
  return (
    <li className="flex items-start gap-3">
      <span className={`mt-1 ${colorClasses[color]}`}>{icon}</span>
      <span className="text-muted-foreground leading-relaxed">{text}</span>
    </li>
  );
}

// Icons
function UsersIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
      />
    </svg>
  );
}

function BriefcaseIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  );
}

function TargetIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <circle cx="12" cy="12" r="10" strokeWidth={2} />
      <circle cx="12" cy="12" r="6" strokeWidth={2} />
      <circle cx="12" cy="12" r="2" strokeWidth={2} />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
      />
    </svg>
  );
}
