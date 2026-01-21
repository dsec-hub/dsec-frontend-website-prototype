'use client';

import SectionLabel from "./SectionLabel";
import Folder from "./Folder";
import Image from "next/image";
import { SparklesText } from "./ui/sparkles-text";
import TransitionLink from "./TransitionLink";

export default function AboutSection() {
  return (
		<section className="relative bg-background py-20 md:py-32 overflow-hidden">
			<div className="relative z-10 px-6 md:px-12 max-w-7xl mx-auto">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
					{/* Left Content */}
					<div>
						<SectionLabel>Why DSEC Exists</SectionLabel>
						<h2 className="font-grotesk text-4xl md:text-5xl lg:text-6xl leading-tight text-foreground mb-8">
							More Than a <SparklesText>Coding Club</SparklesText>
						</h2>
						<p className="text-muted-foreground text-lg leading-relaxed mb-12 max-w-lg">
							DSEC brings together Deakin students at Burwood to build real
							software, share knowledge, and grow their careers through hands-on
							projects and industry collaboration.
						</p>

						{/* Two columns for benefits */}
						<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
							{/* For Students */}
							<div>
								<div className="flex items-baseline gap-4 mb-4">
									<span className="font-mono text-5xl font-bold text-foreground">
										01
									</span>
									<div className="h-px flex-1 bg-border" />
								</div>
								<h3 className="font-grotesk text-xl font-semibold text-foreground mb-3">
									For Students
								</h3>
								<p className="text-muted-foreground text-sm leading-relaxed">
									Build portfolio software in teams. Learn Git, code reviews,
									and agile workflows. Join coding nights, workshops, and guest
									talks. Prepare for internships with practical experience.
								</p>

                <div className="mt-10"></div>

								<TransitionLink href="/auth/join" className="px-8 py-3 border border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full font-semibold transition-all">
									Become a Member
								</TransitionLink>
							</div>

							{/* For Industry & Deakin Staff */}
							<div>
								<div className="flex items-baseline gap-4 mb-4">
									<span className="text-5xl font-bold text-foreground font-mono">
										02
									</span>
									<div className="h-px flex-1 bg-border" />
								</div>
								<h3 className="font-grotesk text-xl font-semibold text-foreground mb-3">
									For Industry & Deakin Staff
								</h3>
								<p className="text-muted-foreground text-sm leading-relaxed">
									Connect with motivated Deakin students in project teams.
									Partner on hackathons and sponsored challenges. Share tools
									and problem statements for student projects.
								</p>

                <div className="mt-10"></div>

								<TransitionLink href="/partner" className="px-8 py-3 border border-lime text-lime hover:bg-lime hover:text-black rounded-full font-semibold transition-all">
									Become a Partner
								</TransitionLink>
							</div>
						</div>
					</div>

					{/* Right Side - Interactive Folder */}
					<div className="relative flex flex-col items-center justify-center md:pt-36 gap-4">
						<Folder
							color="#e91e63"
							size={3}
							items={
								[
									<Image
										key="preview-1"
										src="/preview-1.jpg"
										alt="DSEC Event 1"
										width={300}
										height={200}
										className="w-full h-full object-cover rounded"
									/>,
									<Image
										key="preview-2"
										src="/preview-2.jpg"
										alt="DSEC Event 2"
										width={300}
										height={200}
										className="w-full h-full object-cover rounded"
									/>,
									<Image
										key="preview-3"
										src="/preview-3.jpg"
										alt="DSEC Event 3"
										width={300}
										height={200}
										className="w-full h-full object-cover rounded"
									/>,
								] as any
							}
						/>
						<p className="text-xs text-muted-foreground font-mono mt-20">
							Click to interact with the folder
						</p>
					</div>
				</div>
			</div>

			{/* Partner Logos Marquee */}
			<div className="mt-20 border-t border-border pt-8">
				<PartnerMarquee />
			</div>
		</section>
	);
}


function PartnerMarquee() {
  const partners = [
    { name: 'DEAKIN', subtitle: 'UNIVERSITY', hasIcon: true },
    { name: 'DUSA', subtitle: null, hasIcon: false },
  ];

  return (
    <div className="overflow-hidden">
      <div className="flex animate-marquee">
        {Array.from({ length: 8 }).map((_, setIndex) => (
          <div key={setIndex} className="flex items-center">
            {partners.map((partner, index) => (
              <div
                key={`${setIndex}-${index}`}
                className="flex items-center gap-2 mx-8 opacity-60 hover:opacity-100 transition-opacity"
              >
                {partner.hasIcon && (
                  <div className="w-8 h-8 rounded bg-muted flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <rect x="2" y="2" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
                      <path d="M6 10h8M10 6v8" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                  </div>
                )}
                <div className="flex flex-col">
                  <span className="font-grotesk font-bold text-lg text-foreground tracking-wide">{partner.name}</span>
                  {partner.subtitle && (
                    <span className="text-xs text-muted-foreground tracking-wider">{partner.subtitle}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
