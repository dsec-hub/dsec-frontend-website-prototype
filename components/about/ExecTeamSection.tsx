'use client';

import GradientText from '@/components/GradientText';
import SectionLabel from '../SectionLabel';
import Image from 'next/image';
import Link from 'next/link';

type ColorType = 'primary' | 'secondary' | 'lime' | 'accent' | 'coral';

interface ExecRole {
  id: number;
  title: string;
  description: string;
  color: ColorType;
  filled: boolean;
  personName?: string;
  personImage?: string;
  instagram?: string;
  linkedin?: string;
}

const colorClasses: Record<ColorType, {
  bg: string;
  border: string;
  icon: string;
  accent: string;
}> = {
  primary: {
    bg: 'hover:bg-primary/10',
    border: 'border-primary/20 hover:border-primary/40',
    icon: 'bg-primary/20 text-primary',
    accent: 'group-hover:bg-primary',
  },
  secondary: {
    bg: 'hover:bg-secondary/10',
    border: 'border-secondary/20 hover:border-secondary/40',
    icon: 'bg-secondary/20 text-secondary',
    accent: 'group-hover:bg-secondary',
  },
  lime: {
    bg: 'hover:bg-lime/10',
    border: 'border-lime/20 hover:border-lime/40',
    icon: 'bg-lime/20 text-lime',
    accent: 'group-hover:bg-lime',
  },
  accent: {
    bg: 'hover:bg-accent/10',
    border: 'border-accent/20 hover:border-accent/40',
    icon: 'bg-accent/20 text-accent',
    accent: 'group-hover:bg-accent',
  },
  coral: {
    bg: 'hover:bg-coral/10',
    border: 'border-coral/20 hover:border-coral/40',
    icon: 'bg-coral/20 text-coral',
    accent: 'group-hover:bg-coral',
  },
};

const execRoles: ExecRole[] = [
	{
		id: 1,
		title: "President",
		description:
			"Sets club vision, manages external partnerships, and ensures portfolio-driven outcomes for members",
		color: "primary",
		filled: true,
		personName: "Samridh Limbu",
		personImage: "/team/sam.jpg",
		instagram: "@clupai8o0",
		linkedin: "/in/samridh-limbu",
	},
	{
		id: 2,
		title: "Vice-President",
		description:
			"Executes internal operations, coordinates committee heads, and keeps projects on track",
		color: "secondary",
		filled: true,
		personName: "Tarun Rutvik Gandeti",
		personImage: "/team/tarun.jpg",
		// instagram: "@tarunrutvik",
		// linkedin: "/in/tarunrutvik",
	},
	{
		id: 3,
		title: "Brand Executive",
		description:
			"Builds visual identity, creates marketing assets, and manages social media presence",
		color: "coral",
		filled: true,
		personName: "Aarav Verma",
		personImage: "/team/aarav.jpg",
		// instagram: "@aaravverma",
		// linkedin: "/in/aaravverma",
	},
	// {
	// 	id: 4,
	// 	title: "Head of Community and Engagement",
	// 	description:
	// 		"Moderates Discord, onboards new members, and drives engagement through events and culture",
	// 	color: "accent",
	// 	filled: true,
	// 	personName: "Samarpan Gupta Kanu",
	// 	personImage: "/team/samarpan.jpg",
	// 	instagram: "@samarpangupta",
	// 	linkedin: "/in/samarpangupta",
	// },
	{
		id: 5,
		title: "Head of Marketing",
		description:
			"Plans content strategy, manages outreach campaigns, and grows club visibility",
		color: "lime",
		filled: true,
		personName: "Reza Bilal",
		personImage: "/team/reza.jpg",
		// instagram: "@rezabilal",
		// linkedin: "/in/rezabilal",
	},
	{
		id: 6,
		title: "Head of External Affairs",
		description:
			"Secures sponsorships, coordinates industry panels, and builds corporate partnerships",
		color: "primary",
		filled: true,
		personName: "Ranveer Bhasin",
		personImage: "/team/ranveer.jpg",
		instagram: "@platypus_mann",
		linkedin: "/in/ranveer-bhasin",
	},
	{
		id: 7,
		title: "Head of Development",
		description:
			"Oversees all technical teams, sets project standards, and coordinates cross-team initiatives",
		color: "secondary",
		filled: true,
		personName: "Shalok Sharma",
		personImage: "/team/shalok.jpg",
		// instagram: "@shaloksharma",
		// linkedin: "/in/shaloksharma",
	},
	{
		id: 8,
		title: "Web Development Lead",
		description:
			"Leads web projects, runs workshops on React/Next.js, and reviews frontend code",
		color: "coral",
		filled: true,
		personName: "Ryan Lee",
		personImage: "/team/ryan.jpg",
		// instagram: "@ryanlee",
		// linkedin: "/in/ryanlee",
	},
	{
		id: 9,
		title: "App Development Lead",
		description:
			"Leads mobile and desktop app development projects and workshops",
		color: "accent",
		filled: true,
		personName: "Yordan Simeonov",
		personImage: "/team/yordan.jpg",
		// instagram: "@samarpangupta",
		// linkedin: "/in/samarpangupta",
	},
	{
		id: 11,
		title: "AI Lead",
		description:
			"Builds automation tools, Discord bots, and runs scripting workshops for workflow optimization",
		color: "primary",
		filled: true,
		personName: "Samarpan Gupta Kanu",
		personImage: "/team/samarpan.jpg",
		// instagram: "@samarpangupta",
		// linkedin: "/in/samarpangupta",
	},
	{
		id: 12,
		title: "Robotics Lead",
		description:
			"Runs hardware projects, embedded systems workshops, and robotics showcases",
		color: "secondary",
		filled: true,
		personName: "Nikhil Gupta",
		personImage: "/team/nikhil.jpg",
		// instagram: "@nikhilgupta",
		// linkedin: "/in/nikhilgupta",
	},
];

export default function ExecTeamSection() {
  return (
		<section className="relative bg-card py-20 md:py-32 overflow-hidden" id="exec-team">
			{/* Background grid pattern */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
				<svg className="absolute inset-0 w-full h-full">
					<defs>
						<pattern
							id="execGrid"
							width="40"
							height="40"
							patternUnits="userSpaceOnUse"
						>
							<path
								d="M 40 0 L 0 0 0 40"
								fill="none"
								stroke="currentColor"
								strokeWidth="1"
								className="text-foreground"
							/>
						</pattern>
					</defs>
					<rect width="100%" height="100%" fill="url(#execGrid)" />
				</svg>
			</div>

			<div className="relative z-10 px-6 md:px-12 max-w-7xl mx-auto">
				<div className="mb-12 md:mb-16">
					<SectionLabel>Who runs DSEC</SectionLabel>
					<h2 className="font-grotesk text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground mb-6">
						Meet the DSEC executive team
					</h2>
					<div className="max-w-3xl space-y-4">
						<p className="text-muted-foreground text-lg leading-relaxed">
							DSEC is led by a volunteer executive committee of Deakin students
							who handle everything from event planning and sponsorship to
							Discord moderation and code review nights. Executives are elected
							at our Annual General Meeting each year, following DUSA club rules
							and requirements.
						</p>
						<p className="text-muted-foreground leading-relaxed">
							Below you&apos;ll find our executive roles. The exact people
							change every year, but the responsibilities stay consistent so the
							club can grow sustainably.
						</p>
					</div>
				</div>

				{/* Role cards grid */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
					{execRoles.map((role) => (
						<RoleCard key={role.id} role={role} />
					))}
				</div>

				{/* Closing CTA */}
				<div className="mt-16 text-center">
					<p className="text-muted-foreground text-lg mb-6 max-w-2xl mx-auto">
						If you are a Deakin student who cares about building communities,
						this is one of the best ways to grow your leadership and project
						skills while you study.
					</p>
					<Link
						href="https://dsec.notion.site/dsec-committee-hiring-2026?source=copy_link"
						className="px-8 py-3 border border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full font-semibold transition-all"
					>
						See open volunteer roles
					</Link>
				</div>
			</div>
		</section>
	);
}

function RoleCard({ role }: { role: ExecRole }) {
  const styles = colorClasses[role.color];

  return (
    <div className={`group relative rounded-xl border bg-background/50 ${styles.bg} ${styles.border} transition-all duration-300 overflow-hidden`}>
      {/* Image section */}
      <div className="relative w-full aspect-square bg-muted">
        {role.filled && role.personImage ? (
          <Image
            src={role.personImage}
            alt={role.personName || role.title}
            fill
            className="object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center p-6">
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${styles.icon} mb-3`}>
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <p className="text-sm font-semibold text-muted-foreground">Position Open</p>
            </div>
          </div>
        )}
      </div>

      {/* Content section */}
      <div className="p-6">
        {/* Name if filled */}
        {role.filled && role.personName && (
          <p className="text-sm font-semibold text-foreground mb-1">{role.personName}</p>
        )}

        {/* Title */}
        <h3 className="font-grotesk text-lg font-bold text-foreground mb-2">{role.title}</h3>

        {/* Description */}
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">{role.description}</p>

        {/* Social Links */}
        {role.filled && (role.linkedin || role.instagram) && (
          <div className="flex gap-2">
            {role.linkedin && (
              <Link
                href={`https://linkedin.com${role.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center w-8 h-8 rounded-full ${styles.icon} hover:opacity-80 transition-opacity`}
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                </svg>
              </Link>
            )}
            {role.instagram && (
              <Link
                href={`https://instagram.com/${role.instagram.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center w-8 h-8 rounded-full ${styles.icon} hover:opacity-80 transition-opacity`}
                aria-label="Instagram"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                </svg>
              </Link>
            )}
          </div>
        )}
      </div>

      {/* Bottom accent line */}
      <div className={`absolute bottom-0 left-4 right-4 h-0.5 bg-border ${styles.accent} transition-colors duration-300 rounded-full`} />
    </div>
  );
}

