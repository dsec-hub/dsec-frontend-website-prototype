'use client';

import { useState } from 'react';

type StatusType = 'active' | 'paused' | 'archived';
type ColorType = 'primary' | 'secondary' | 'lime' | 'accent' | 'coral' | 'cyan';

interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  techStack: string[];
  contributors: string;
  githubUrl: string;
  status: StatusType;
  topic: string;
  category: string;
}

interface FilterState {
  techStack: string[];
  topic: string[];
  status: string[];
}

const projects: Project[] = [
  {
    id: '1',
    name: 'DSEC Project Hub',
    tagline: 'Track club projects and contributors in one place.',
    description:
      'A web app for DSEC that lists club projects, contributors, and tech stacks in one dashboard. Built to make it easier for new members to find a team, and for execs to see which projects are active during each trimester.',
    techStack: ['Next.js', 'TypeScript', 'Supabase', 'GitHub API'],
    contributors: 'Built by a DSEC project team of Deakin software engineering students.',
    githubUrl: '#',
    status: 'active',
    topic: 'club',
    category: 'web',
  },
  {
    id: '2',
    name: 'StudyBuddy Schedule',
    tagline: 'Simple timetable generator for Deakin students.',
    description:
      'A small web tool that helps Deakin students combine their Uni timetable with club events and study blocks. Created during a DSEC coding night and refined in development sessions.',
    techStack: ['React', 'Node.js', 'Tailwind CSS'],
    contributors: 'Built by a mixed year group from Deakin software engineering and IT.',
    githubUrl: '#',
    status: 'active',
    topic: 'utilities',
    category: 'web',
  },
  {
    id: '3',
    name: 'O-Fest Stall Tracker',
    tagline: 'Track sign ups and interest at O-Fest.',
    description:
      'An internal tool used by DSEC to record sign ups, interest levels, and follow up actions at Deakin O-Fest stalls and T-stalls. Helps the club understand which events and messages attract more members.',
    techStack: ['Svelte', 'Firebase', 'Cloud Functions'],
    contributors: 'Built by DSEC members as a real club operations project.',
    githubUrl: '#',
    status: 'paused',
    topic: 'club',
    category: 'web',
  },
  {
    id: '4',
    name: 'CodeReview Bot',
    tagline: 'AI-powered code review assistant for student projects.',
    description:
      'A Discord bot that provides automated code review suggestions for pull requests in DSEC project repositories. Uses OpenAI to analyze code and provide constructive feedback to help students learn best practices.',
    techStack: ['Python', 'Discord.py', 'OpenAI API', 'GitHub Webhooks'],
    contributors: 'Built during DSEC Hackathon 2024 by a team of 4 students.',
    githubUrl: '#',
    status: 'active',
    topic: 'learning',
    category: 'ai',
  },
  {
    id: '5',
    name: 'Campus Nav AR',
    tagline: 'AR navigation for Deakin Burwood campus.',
    description:
      'An experimental mobile app that uses augmented reality to help new students navigate the Burwood campus. Point your phone and see directions overlaid on the real world.',
    techStack: ['React Native', 'ARKit', 'ARCore', 'Firebase'],
    contributors: 'A cross-disciplinary team from software engineering and design.',
    githubUrl: '#',
    status: 'archived',
    topic: 'experiments',
    category: 'mobile',
  },
  {
    id: '6',
    name: 'DSEC Analytics Dashboard',
    tagline: 'Visualize club engagement and growth metrics.',
    description:
      'A data visualization dashboard that helps the exec team track membership growth, event attendance, and project participation over time. Built to support data-driven decisions for the club.',
    techStack: ['Next.js', 'D3.js', 'PostgreSQL', 'Vercel'],
    contributors: 'Built by the DSEC data team with support from IT students.',
    githubUrl: '#',
    status: 'active',
    topic: 'club',
    category: 'data',
  },
];

const techStackOptions = [
  { value: 'web', label: 'Web' },
  { value: 'mobile', label: 'Mobile' },
  { value: 'backend', label: 'Backend' },
  { value: 'data', label: 'Data' },
  { value: 'ai', label: 'AI' },
  { value: 'games', label: 'Games' },
];

const topicOptions = [
  { value: 'learning', label: 'Learning Tools' },
  { value: 'club', label: 'Club Tools' },
  { value: 'utilities', label: 'Utilities' },
  { value: 'hackathon', label: 'Hackathon Builds' },
  { value: 'experiments', label: 'Experiments' },
];

const statusOptions = [
  { value: 'active', label: 'Active', color: 'bg-lime text-lime-foreground' },
  { value: 'paused', label: 'Paused', color: 'bg-coral text-coral-foreground' },
  { value: 'archived', label: 'Archived', color: 'bg-muted text-muted-foreground' },
];

const statusColors: Record<StatusType, { bg: string; text: string; dot: string }> = {
  active: { bg: 'bg-lime/20', text: 'text-lime', dot: 'bg-lime' },
  paused: { bg: 'bg-coral/20', text: 'text-coral', dot: 'bg-coral' },
  archived: { bg: 'bg-muted', text: 'text-muted-foreground', dot: 'bg-muted-foreground' },
};

const accentColors: ColorType[] = ['primary', 'secondary', 'lime', 'accent', 'coral', 'cyan'];

const accentClasses: Record<ColorType, { border: string; hover: string; icon: string; bg: string }> = {
  primary: { border: 'hover:border-primary/50', hover: 'group-hover:bg-primary/10', icon: 'text-primary', bg: 'bg-primary/10' },
  secondary: { border: 'hover:border-secondary/50', hover: 'group-hover:bg-secondary/10', icon: 'text-secondary', bg: 'bg-secondary/10' },
  lime: { border: 'hover:border-lime/50', hover: 'group-hover:bg-lime/10', icon: 'text-lime', bg: 'bg-lime/10' },
  accent: { border: 'hover:border-accent/50', hover: 'group-hover:bg-accent/10', icon: 'text-accent', bg: 'bg-accent/10' },
  coral: { border: 'hover:border-coral/50', hover: 'group-hover:bg-coral/10', icon: 'text-coral', bg: 'bg-coral/10' },
  cyan: { border: 'hover:border-cyan/50', hover: 'group-hover:bg-cyan/10', icon: 'text-cyan', bg: 'bg-cyan/10' },
};

export default function ProjectCardsGrid() {
  const [filters, setFilters] = useState<FilterState>({
    techStack: [],
    topic: [],
    status: [],
  });
  const [isFilterExpanded, setIsFilterExpanded] = useState(false);

  const toggleFilter = (category: keyof FilterState, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [category]: prev[category].includes(value) ? prev[category].filter((v) => v !== value) : [...prev[category], value],
    }));
  };

  const clearAllFilters = () => {
    setFilters({ techStack: [], topic: [], status: [] });
  };

  const hasActiveFilters = filters.techStack.length > 0 || filters.topic.length > 0 || filters.status.length > 0;

  const filteredProjects = projects.filter((project) => {
    const matchesTech = filters.techStack.length === 0 || filters.techStack.includes(project.category);
    const matchesTopic = filters.topic.length === 0 || filters.topic.includes(project.topic);
    const matchesStatus = filters.status.length === 0 || filters.status.includes(project.status);
    return matchesTech && matchesTopic && matchesStatus;
  });

  return (
    <section className="relative bg-background py-16 md:py-24">
      <div className="px-6 md:px-12 max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-12">
          <p className="mb-4 font-mono text-sm tracking-wider text-secondary uppercase">Explore DSEC Projects</p>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl">
            These projects are built by Deakin students from software engineering, computer science, IT, and related courses. Most were created in small teams during DSEC development sessions, hackathons, or self directed sprints. Each card links out to a GitHub repository so you can inspect the code, see open issues, and explore how the team works.
          </p>
        </div>

        {/* Filter bar */}
        <div className="relative bg-card border border-border rounded-2xl overflow-hidden mb-10">
          {/* Header */}
          <button
            onClick={() => setIsFilterExpanded(!isFilterExpanded)}
            className="w-full flex items-center justify-between p-4 md:p-6 hover:bg-muted/30 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-secondary/20 text-secondary">
                <FilterIcon />
              </div>
              <div className="text-left">
                <h3 className="font-grotesk font-bold text-foreground">Filter projects</h3>
                <p className="text-sm text-muted-foreground">Pick the technologies, topics, or status that match what you are interested in</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              {hasActiveFilters && (
                <span className="px-2 py-1 bg-primary/20 text-primary text-xs font-medium rounded-full">
                  {filters.techStack.length + filters.topic.length + filters.status.length} active
                </span>
              )}
              <svg
                className={`w-5 h-5 text-muted-foreground transition-transform ${isFilterExpanded ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </button>

          {/* Expanded content */}
          <div className={`overflow-hidden transition-all duration-300 ${isFilterExpanded ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="px-4 md:px-6 pb-6 space-y-6 border-t border-border pt-6">
              {/* Tech Stack */}
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-3">Tech Stack</p>
                <div className="flex flex-wrap gap-2">
                  {techStackOptions.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => toggleFilter('techStack', option.value)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                        filters.techStack.includes(option.value) ? 'bg-primary text-primary-foreground' : 'bg-muted/50 text-muted-foreground hover:bg-muted'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Topic */}
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-3">Topic or Domain</p>
                <div className="flex flex-wrap gap-2">
                  {topicOptions.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => toggleFilter('topic', option.value)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                        filters.topic.includes(option.value) ? 'bg-secondary text-secondary-foreground' : 'bg-muted/50 text-muted-foreground hover:bg-muted'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Status */}
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-3">Status</p>
                <div className="flex flex-wrap gap-2">
                  {statusOptions.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => toggleFilter('status', option.value)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                        filters.status.includes(option.value) ? option.color : 'bg-muted/50 text-muted-foreground hover:bg-muted'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Clear all */}
              {hasActiveFilters && (
                <button onClick={clearAllFilters} className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                  <XIcon />
                  Clear all filters
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Projects grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        ) : (
          <EmptyState />
        )}
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const status = statusColors[project.status];
  const accentColor = accentColors[index % accentColors.length];
  const accent = accentClasses[accentColor];

  return (
    <div
      className={`group relative flex flex-col bg-card border border-border rounded-2xl overflow-hidden transition-all duration-300 ${accent.border} hover:shadow-xl hover:shadow-primary/5`}
    >
      {/* Animated background on hover */}
      <div className={`absolute inset-0 opacity-0 ${accent.hover} transition-opacity duration-300`} />

      {/* Corner decoration */}
      <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden pointer-events-none">
        <div className={`absolute -top-10 -right-10 w-20 h-20 ${accent.bg} rounded-full`} />
      </div>

      <div className="relative z-10 flex flex-col flex-1 p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className={`p-2.5 rounded-xl bg-muted ${accent.icon}`}>
            <GitHubIcon />
          </div>
          <div className={`flex items-center gap-2 px-3 py-1 rounded-full ${status.bg}`}>
            <span className={`w-2 h-2 rounded-full ${status.dot} animate-pulse`} />
            <span className={`text-xs font-medium capitalize ${status.text}`}>{project.status}</span>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1">
          <h3 className="font-grotesk text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">{project.name}</h3>
          <p className={`text-sm font-medium mb-3 ${accent.icon}`}>{project.tagline}</p>
          <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.description}</p>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.techStack.map((tech) => (
              <span key={tech} className="px-2 py-1 bg-muted text-muted-foreground text-xs font-mono rounded">
                {tech}
              </span>
            ))}
          </div>

          {/* Contributors */}
          <div className="flex items-center gap-2 text-muted-foreground text-xs mb-6">
            <UsersIcon />
            <span>{project.contributors}</span>
          </div>
        </div>

        {/* CTA */}
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2 px-4 py-3 border border-border hover:bg-foreground hover:text-background rounded-xl font-medium transition-all group/btn"
        >
          <GitHubIcon />
          View code on GitHub
          <ExternalLinkIcon />
        </a>
      </div>
    </div>
  );
}

function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-6 text-center">
      <div className="w-20 h-20 mb-6 rounded-full bg-muted flex items-center justify-center">
        <GitHubIcon />
      </div>
      <h3 className="font-grotesk text-xl font-bold text-foreground mb-2">No projects match these filters yet</h3>
      <p className="text-muted-foreground max-w-md">
        Try clearing a filter or choosing a different tech stack. You can also just scroll and explore all projects.
      </p>
    </div>
  );
}

// Icons
function FilterIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg className="w-3 h-3 opacity-0 group-hover/btn:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  );
}
