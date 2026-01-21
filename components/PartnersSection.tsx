'use client';

import GradientText from '@/components/GradientText';
import SectionLabel from './SectionLabel';
import TransitionLink from './TransitionLink';

interface PartnerBenefitProps {
  number: string;
  title: string;
  description: string;
}

const partnerBenefits: PartnerBenefitProps[] = [
  {
    number: '01',
    title: 'Guest talks and workshops',
    description: 'Share your expertise with motivated students eager to learn from industry professionals.',
  },
  {
    number: '02',
    title: 'Portfolio reviews',
    description: 'Help students refine their work while identifying promising talent for your team.',
  },
  {
    number: '03',
    title: 'Hackathons and challenges',
    description: 'Sponsor events where students solve real problems using your tools or APIs.',
  },
  {
    number: '04',
    title: 'Talent pipeline',
    description: 'Build relationships with students before they graduate and enter the job market.',
  },
];

const partners = [
  { name: 'DEAKIN', subtitle: 'UNIVERSITY' },
  { name: 'DUSA', subtitle: 'STUDENT ASSOCIATION' },
  { name: 'TECH', subtitle: 'MELBOURNE' },
  { name: 'STARTUP', subtitle: 'VIC' },
];

export default function PartnersSection() {
  return (
		<section className="relative bg-card py-20 md:py-32 overflow-hidden">
			{/* Decorative top border */}
			<div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

			{/* Background grid pattern */}
			<div className="absolute inset-0 opacity-5">
				<svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
					<defs>
						<pattern
							id="partner-grid"
							width="40"
							height="40"
							patternUnits="userSpaceOnUse"
						>
							<path
								d="M 40 0 L 0 0 0 40"
								fill="none"
								stroke="currentColor"
								strokeWidth="1"
							/>
						</pattern>
					</defs>
					<rect width="100%" height="100%" fill="url(#partner-grid)" />
				</svg>
			</div>

			<div className="relative z-10 px-6 md:px-12 max-w-7xl mx-auto">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
					{/* Left Content */}
					<div>
						<SectionLabel>Work with DSEC and Deakin students</SectionLabel>
						<h2 className="font-grotesk text-4xl md:text-5xl leading-tight text-foreground mb-6">
							Partner with DSEC&apos;s community
						</h2>
						<p className="text-muted-foreground text-lg leading-relaxed mb-8">
							DSEC partners with companies and teams across Melbourne to support
							and learn from Deakin students. We collaborate on guest talks,
							portfolio reviews, hackathons, and sponsored projects.{" "}
						</p>
						<TransitionLink href="/partnership" className="px-8 py-3 bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-full font-semibold transition-all group flex items-center gap-2 w-fit">
							Talk to us about partnerships
							<svg
								className="w-4 h-4 transition-transform group-hover:translate-x-1"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M14 5l7 7m0 0l-7 7m7-7H3"
								/>
							</svg>
						</TransitionLink>
					</div>

					{/* Right - Partner Benefits */}
					<div className="space-y-4">
						{partnerBenefits.map((benefit) => (
							<PartnerBenefit key={benefit.number} {...benefit} />
						))}
					</div>
				</div>

				{/* Partner Logos */}
				{/* <div className="mt-20 pt-12 border-t border-border">
					<p className="text-center text-muted-foreground text-sm mb-8">
						Interested in hiring or collaborating with Deakin student
						developers—start a conversation with the DSEC executive team.
					</p>
					<PartnerLogosAnimated />
				</div> */}
			</div>

			{/* Decorative bottom border */}
			{/* <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" /> */}
		</section>
	);
}

function PartnerBenefit({ number, title, description }: PartnerBenefitProps) {
  return (
    <div className="group flex gap-4 p-4 rounded-xl hover:bg-muted/50 transition-colors">
      <div className="flex-shrink-0">
        <span className="font-mono text-xs text-secondary">{number}</span>
      </div>
      <div>
        <h3 className="font-grotesk font-semibold text-foreground mb-1 group-hover:text-secondary transition-colors">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

function PartnerLogosAnimated() {
  return (
    <div className="overflow-hidden relative">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-card to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-card to-transparent z-10" />

      <div className="flex animate-marquee">
        {Array.from({ length: 4 }).map((_, setIndex) => (
          <div key={setIndex} className="flex items-center">
            {partners.map((partner, index) => (
              <div
                key={`${setIndex}-${index}`}
                className="flex flex-col items-center mx-12 opacity-40 hover:opacity-100 transition-opacity"
              >
                <div className="w-16 h-16 rounded-xl bg-muted flex items-center justify-center mb-2">
                  <span className="font-grotesk font-bold text-xl text-foreground">
                    {partner.name[0]}
                  </span>
                </div>
                <span className="font-grotesk font-bold text-sm text-foreground">{partner.name}</span>
                <span className="text-xs text-muted-foreground">{partner.subtitle}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
