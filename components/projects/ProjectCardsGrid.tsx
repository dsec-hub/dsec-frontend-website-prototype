"use client";

import { ExternalLinkIcon, ShieldIcon } from "@/components/icons";
import SectionLabel from "@/components/SectionLabel";
import { AnimatedSpan, Terminal, TypingAnimation } from "@/components/ui/terminal";

export default function ProjectCardsGrid(): React.ReactElement {
  return (
		<section className="relative bg-background py-16 md:py-24">
			<div className="mx-auto max-w-7xl px-6 md:px-12">
				<div className="mb-12">
					<SectionLabel>Explore DSEC Projects</SectionLabel>
					<p className="max-w-3xl text-lg leading-relaxed text-muted-foreground">
						These projects are built by Deakin students from software
						engineering, computer science, IT, and related courses. Most were
						created in small teams during DSEC development sessions, hackathons,
						or self directed sprints. Our full project catalog and contribution
						tools are available on our member portal.
					</p>
				</div>

				<div className="grid gap-8 lg:grid-cols-2">
					<div className="flex flex-col justify-center space-y-6">
						<div className="rounded-2xl border border-border bg-card p-6">
							<div className="mb-4 flex items-center gap-3">
								<div className="rounded-lg bg-primary/20 p-2 text-primary">
									<ShieldIcon />
								</div>
								<h3 className="font-grotesk text-xl font-bold text-foreground">
									Member Only Portal
								</h3>
							</div>
							<p className="mb-6 text-muted-foreground">
								Our project hub is exclusively available to DSEC members. Browse
								active projects, join teams, track contributions, and
								collaborate with fellow Deakin students on real software.
							</p>
							<ul className="mb-6 space-y-2 text-sm text-muted-foreground">
								<li className="flex items-center gap-2">
									<span className="h-1.5 w-1.5 rounded-full bg-lime" />
									View all active and archived projects
								</li>
								<li className="flex items-center gap-2">
									<span className="h-1.5 w-1.5 rounded-full bg-sky-300" />
									Join project teams and claim tasks
								</li>
								<li className="flex items-center gap-2">
									<span className="h-1.5 w-1.5 rounded-full bg-coral" />
									Track your contributions and stats
								</li>
								<li className="flex items-center gap-2">
									<span className="h-1.5 w-1.5 rounded-full bg-secondary" />
									Propose new project ideas
								</li>
							</ul>
							<a
								href="#"
								target="_blank"
								rel="noopener noreferrer"
								className="group/btn inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 font-medium text-primary-foreground transition-all hover:bg-primary/90"
							>
								Access Member Portal
								<ExternalLinkIcon className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5" />
							</a>
						</div>

						<p className="text-center text-sm text-muted-foreground">
							Not a member yet?{" "}
							<a
								href="/join"
								className="text-primary underline-offset-4 hover:underline"
							>
								Join DSEC
							</a>{" "}
							to get access.
						</p>
					</div>

					<div className="flex flex-col justify-center">
						<Terminal className="max-w-full" startOnView>
							<TypingAnimation className="text-lime">
								$ dsec projects --list
							</TypingAnimation>

							<AnimatedSpan className="text-muted-foreground">
								Fetching active projects...
							</AnimatedSpan>

							<AnimatedSpan className="text-primary">
								12 active projects found
							</AnimatedSpan>

							<AnimatedSpan className="text-accent">
								3 looking for contributors
							</AnimatedSpan>

							<TypingAnimation className="mt-2 text-lime">
								$ npm run contribute --project=web-app
							</TypingAnimation>

							<AnimatedSpan className="text-muted-foreground">
								Checking member status...
							</AnimatedSpan>

							<AnimatedSpan className="text-coral">
								Access denied. Member login required.
							</AnimatedSpan>

							<TypingAnimation className="mt-2 text-lime">
								$ dsec login --portal
							</TypingAnimation>

							<AnimatedSpan className="text-sky">
								Redirecting to member portal...
							</AnimatedSpan>
						</Terminal>
					</div>
				</div>
			</div>
		</section>
	);
}
