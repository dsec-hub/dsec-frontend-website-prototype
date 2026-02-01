'use client';

import SectionLabel from '@/components/SectionLabel';
import ScrollReveal from '@/components/ScrollReveal';
import CardSwap, { Card } from '@/components/CardSwap';
import TransitionLink from '../TransitionLink';
import Link from 'next/link';
import LightRays from '@/components/LightRays';

export default function ProjectsHero() {
  return (
		<div className="relative">
			{/* LightRays Background */}
			<div className="absolute inset-0 w-full min-h-[70vh] opacity-50">
				<LightRays
					raysOrigin="top-center"
					raysColor="#8b5cf6"
					raysSpeed={0.8}
					lightSpread={1.2}
					rayLength={2.5}
					pulsating={false}
					fadeDistance={1.2}
					saturation={0.8}
					followMouse={true}
					mouseInfluence={0.15}
				/>
			</div>

			{/* Hero Section - 2 Column Layout */}
			<section className="relative min-h-[50vh] overflow-hidden">
				{/* Two Column Hero Content */}
				<div className="relative z-10 w-full px-6 md:px-12 pb-20">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-8 items-center min-h-[70vh] max-w-7xl mx-auto">
						{/* Right Column - CardSwap (appears first on mobile) */}
						<div className="relative h-[300px] sm:h-[380px] md:h-[450px] lg:h-[500px] flex items-center justify-center lg:order-2 pt-20 lg:pt-0">
							<div className="w-full max-w-[320px] sm:max-w-[400px] md:max-w-[480px] mx-auto scale-[0.65] sm:scale-[0.8] md:scale-95 lg:scale-100">
								<CardSwap
									width={480}
									height={320}
									cardDistance={50}
									verticalDistance={50}
									delay={4000}
									pauseOnHover={true}
									easing="elastic"
								>
								{/* Desktop Card 1 - Code Editor */}
								<Card className="flex flex-col overflow-hidden !p-0 !bg-[#1e1e1e] !border-[#3c3c3c] !rounded-lg shadow-2xl">
									{/* macOS-style title bar */}
									<div className="flex items-center gap-2 px-4 py-2.5 bg-[#323233] border-b border-[#3c3c3c]">
										<div className="flex items-center gap-1.5">
											<span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
											<span className="w-3 h-3 rounded-full bg-[#febc2e]" />
											<span className="w-3 h-3 rounded-full bg-[#28c840]" />
										</div>
										<span className="text-[#9d9d9d] text-xs ml-2 font-mono">
											main.py — DSEC Project
										</span>
									</div>
									{/* Code content */}
									<div className="flex-1 p-4 font-mono text-xs leading-relaxed overflow-hidden">
										<div className="flex">
											<div className="text-[#6e7681] pr-4 select-none">
												1<br />2<br />3<br />4<br />5<br />6<br />7<br />8
											</div>
											<div>
												<span className="text-[#ff79c6]">def</span>{" "}
												<span className="text-[#50fa7b]">build_project</span>
												<span className="text-white">(</span>
												<span className="text-[#ffb86c]">config</span>
												<span className="text-white">):</span>
												<br />
												<span className="text-[#6272a4]">
													{" "}
													&quot;&quot;&quot;Initialize DSEC
													project&quot;&quot;&quot;
												</span>
												<br />
												<span className="text-white"> app = </span>
												<span className="text-[#8be9fd]">Application</span>
												<span className="text-white">()</span>
												<br />
												<span className="text-white"> app.</span>
												<span className="text-[#50fa7b]">setup</span>
												<span className="text-white">(config)</span>
												<br />
												<span className="text-white"> </span>
												<span className="text-[#ff79c6]">return</span>
												<span className="text-white"> app.</span>
												<span className="text-[#50fa7b]">run</span>
												<span className="text-white">()</span>
												<br />
												<br />
												<span className="text-[#ff79c6]">if</span>{" "}
												<span className="text-white">__name__ == </span>
												<span className="text-[#f1fa8c]">
													&quot;__main__&quot;
												</span>
												<span className="text-white">:</span>
												<br />
												<span className="text-white"> </span>
												<span className="text-[#50fa7b]">build_project</span>
												<span className="text-white">(</span>
												<span className="text-[#f1fa8c]">&quot;prod&quot;</span>
												<span className="text-white">)</span>
											</div>
										</div>
									</div>
								</Card>

								{/* Desktop Card 2 - Terminal */}
								<Card className="flex flex-col overflow-hidden !p-0 !bg-[#0d1117] !border-[#30363d] !rounded-lg shadow-2xl">
									{/* macOS-style title bar */}
									<div className="flex items-center gap-2 px-4 py-2.5 bg-[#161b22] border-b border-[#30363d]">
										<div className="flex items-center gap-1.5">
											<span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
											<span className="w-3 h-3 rounded-full bg-[#febc2e]" />
											<span className="w-3 h-3 rounded-full bg-[#28c840]" />
										</div>
										<span className="text-[#7d8590] text-xs ml-2 font-mono">
											Terminal — dsec-project
										</span>
									</div>
									{/* Terminal content */}
									<div className="flex-1 p-4 font-mono text-xs leading-relaxed">
										<div className="text-[#7d8590]">~/dsec-project</div>
										<div className="mt-2">
											<span className="text-[#3fb950]">➜</span>{" "}
											<span className="text-[#58a6ff]">git</span>{" "}
											<span className="text-[#c9d1d9]">
												clone https://github.com/dsec/project
											</span>
										</div>
										<div className="text-[#c9d1d9] mt-1">
											Cloning into &apos;project&apos;...
										</div>
										<div className="text-[#c9d1d9]">
											remote: Enumerating objects: 247, done.
										</div>
										<div className="text-[#3fb950] mt-1">
											✓ Repository cloned successfully
										</div>
										<div className="mt-2">
											<span className="text-[#3fb950]">➜</span>{" "}
											<span className="text-[#58a6ff]">npm</span>{" "}
											<span className="text-[#c9d1d9]">run dev</span>
										</div>
										<div className="text-[#3fb950] mt-1">
											▸ Server running on localhost:3000
										</div>
									</div>
								</Card>

								{/* Desktop Card 3 - GitHub */}
								<Card className="flex flex-col overflow-hidden !p-0 !bg-[#0d1117] !border-[#30363d] !rounded-lg shadow-2xl">
									{/* macOS-style title bar */}
									<div className="flex items-center gap-2 px-4 py-2.5 bg-[#161b22] border-b border-[#30363d]">
										<div className="flex items-center gap-1.5">
											<span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
											<span className="w-3 h-3 rounded-full bg-[#febc2e]" />
											<span className="w-3 h-3 rounded-full bg-[#28c840]" />
										</div>
										<span className="text-[#7d8590] text-xs ml-2 font-mono">
											GitHub — DSEC Projects
										</span>
									</div>
									{/* GitHub-style content */}
									<div className="flex-1 p-4">
										<div className="flex items-center gap-3 mb-4">
											<div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-blue-500" />
											<div>
												<div className="text-[#c9d1d9] text-sm font-semibold">
													dsec-club/awesome-project
												</div>
												<div className="text-[#7d8590] text-xs">
													Public repository
												</div>
											</div>
										</div>
										<div className="flex items-center gap-4 text-xs mb-4">
											<div className="flex items-center gap-1">
												<span className="w-2.5 h-2.5 rounded-full bg-[#3178c6]" />
												<span className="text-[#7d8590]">TypeScript</span>
											</div>
											<div className="flex items-center gap-1 text-[#7d8590]">
												<StarIcon />
												<span>128</span>
											</div>
											<div className="flex items-center gap-1 text-[#7d8590]">
												<ForkIcon />
												<span>34</span>
											</div>
										</div>
										<div className="text-[#7d8590] text-xs leading-relaxed">
											A full-stack web application built by DSEC members
											featuring real-time collaboration, modern UI, and cloud
											deployment.
										</div>
										<div className="flex gap-2 mt-4">
											<span className="px-2 py-1 bg-[#388bfd1a] text-[#58a6ff] text-xs rounded-full">
												react
											</span>
											<span className="px-2 py-1 bg-[#388bfd1a] text-[#58a6ff] text-xs rounded-full">
												nextjs
											</span>
											<span className="px-2 py-1 bg-[#388bfd1a] text-[#58a6ff] text-xs rounded-full">
												prisma
											</span>
										</div>
									</div>
								</Card>
							</CardSwap>
							</div>
						</div>

						{/* Left Column - Title and Labels (appears second on mobile) */}
						<div className="flex flex-col justify-center max-w-xl lg:order-1 pt-4 lg:pt-24">
							{/* Small note */}
							<div className="inline-flex items-center gap-2 bg-muted/50 border border-border/50 rounded-full px-4 py-2 mb-8 w-fit">
								<GitHubIcon />
								<span className="text-sm text-muted-foreground">
									All projects shown here link directly to GitHub
								</span>
							</div>

							<SectionLabel>Student Software Projects</SectionLabel>

							<h1 className="font-grotesk text-4xl md:text-5xl lg:text-6xl leading-tight text-foreground mb-6">
								Student software projects from DSEC
							</h1>

							<div className="flex flex-wrap items-center gap-4">
								<Link
									href="https://basecamp.dsec.club/"
									className="px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full font-semibold gap-2 flex items-center transition-all"
								>
									<SparklesIcon />
									Join a project
								</Link>
								<TransitionLink
									href="/partnership"
									className="px-8 py-3 border border-foreground/20 text-foreground hover:bg-foreground/10 rounded-full font-semibold gap-2 flex items-center transition-all"
								>
									<CodeIcon />
									Talk to us about student projects
								</TransitionLink>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Content Section - Centered with ScrollReveal */}
			<section className="relative pt-10 pb-20">
				<div className="relative z-10 px-6 md:px-12 max-w-4xl mx-auto flex flex-col items-center">
					{/* Scroll Down Indicator */}
					<div className="mb-12 flex flex-col items-center animate-bounce bg-white/10 rounded-full p-2 text-left">
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

					<div className="mb-10 text-center">
						<ScrollReveal
							baseOpacity={0.1}
							enableBlur
							baseRotation={3}
							blurStrength={4}
							containerClassName="text-white text-5xl lg:text-7xl font-grotesk text-center text-left"
						>
							Real software engineering projects built by Deakin students at the
							Melbourne Burwood campus, with links to the GitHub repos behind
							the code.
						</ScrollReveal>
					</div>

					<div className="space-y-4 text-muted-foreground text-lg leading-relaxed text-left mb-10">
						<p>
							This page showcases projects created by members of the Deakin
							Software Engineering Club (DSEC). Every project started as an idea
							in a workshop, hackathon, development session, or late night
							Discord chat. Here you can see what Deakin students are building,
							what technologies they use, and how they collaborate in real
							software teams.
						</p>
						<p>
							Whether you are a first year student looking for inspiration, a
							current member choosing your next team, or a recruiter curious
							about what Deakin students can actually ship, this is the best
							place to start.
						</p>
					</div>
				</div>
			</section>
		</div>
	);
}

// Icons
function GitHubIcon() {
  return (
    <svg className="w-4 h-4 text-secondary" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function SparklesIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
      />
    </svg>
  );
}

function CodeIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
      <path d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25z" />
    </svg>
  );
}

function ForkIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
      <path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75v-.878a2.25 2.25 0 111.5 0v.878a2.25 2.25 0 01-2.25 2.25h-1.5v2.128a2.251 2.251 0 11-1.5 0V8.5h-1.5A2.25 2.25 0 013.5 6.25v-.878a2.25 2.25 0 111.5 0zM5 3.25a.75.75 0 10-1.5 0 .75.75 0 001.5 0zm6.75.75a.75.75 0 100-1.5.75.75 0 000 1.5zm-3 8.75a.75.75 0 10-1.5 0 .75.75 0 001.5 0z" />
    </svg>
  );
}
