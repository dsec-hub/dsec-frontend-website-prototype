"use client";

import { Rocket, Sparkles } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function LaunchingSoon() {
	return (
		<section className="relative py-24 overflow-hidden bg-background">
			{/* Background gradient effects */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
				<div className="absolute top-1/4 right-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
			</div>

			{/* Main Content */}
			<div className="relative z-10 px-6 md:px-12 max-w-5xl mx-auto">
				<div className="text-center">
					{/* Icon */}
					<div className="inline-block mb-8">
						<div className="relative w-24 h-24 bg-gradient-to-br from-primary via-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-2xl mx-auto animate-pulse">
							<Rocket className="w-12 h-12 text-white transform -rotate-45" />
						</div>
					</div>

					{/* Title with ScrollReveal */}
					<div className="mb-6">
						<ScrollReveal
							baseOpacity={0.2}
							enableBlur
							baseRotation={2}
							blurStrength={3}
							containerClassName="text-4xl md:text-6xl lg:text-7xl font-bold font-grotesk"
						>
							<span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
								Launching Soon
							</span>
						</ScrollReveal>
					</div>

					{/* Description */}
					<p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
						We're building something amazing for the DSEC community.
						Stay tuned for exciting updates and new features coming your way.
					</p>

					{/* Feature badges */}
					<div className="flex flex-wrap justify-center gap-3">
						{[
							{ icon: Sparkles, text: "New Features" },
							{ icon: Rocket, text: "Coming Soon" },
						].map((badge, i) => (
							<div
								key={i}
								className="flex items-center gap-2 px-5 py-3 bg-card/50 backdrop-blur-sm border border-border rounded-full text-sm hover:bg-card/80 transition-colors"
							>
								<badge.icon className="w-4 h-4 text-primary" />
								<span className="text-muted-foreground font-medium">{badge.text}</span>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
