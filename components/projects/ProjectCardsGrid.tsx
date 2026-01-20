"use client";

import { useState } from "react";

import {
  ChevronDownIcon,
  ExternalLinkIcon,
  FilterIcon,
  GitHubIcon,
  UsersIcon,
  XIcon,
} from "@/components/icons";
import {
  accentColorClasses,
  getColorFromIndex,
  statusColorClasses,
} from "@/lib/theme";
import type { Project, ProjectFilterState, ProjectStatus } from "@/types";

const projects: Project[] = [
  {
    id: "1",
    name: "DSEC Project Hub",
    tagline: "Track club projects and contributors in one place.",
    description:
      "A web app for DSEC that lists club projects, contributors, and tech stacks in one dashboard. Built to make it easier for new members to find a team, and for execs to see which projects are active during each trimester.",
    techStack: ["Next.js", "TypeScript", "Supabase", "GitHub API"],
    contributors:
      "Built by a DSEC project team of Deakin software engineering students.",
    githubUrl: "#",
    status: "active",
    topic: "club",
    category: "web",
  },
  {
    id: "2",
    name: "StudyBuddy Schedule",
    tagline: "Simple timetable generator for Deakin students.",
    description:
      "A small web tool that helps Deakin students combine their Uni timetable with club events and study blocks. Created during a DSEC coding night and refined in development sessions.",
    techStack: ["React", "Node.js", "Tailwind CSS"],
    contributors:
      "Built by a mixed year group from Deakin software engineering and IT.",
    githubUrl: "#",
    status: "active",
    topic: "utilities",
    category: "web",
  },
  {
    id: "3",
    name: "O-Fest Stall Tracker",
    tagline: "Track sign ups and interest at O-Fest.",
    description:
      "An internal tool used by DSEC to record sign ups, interest levels, and follow up actions at Deakin O-Fest stalls and T-stalls. Helps the club understand which events and messages attract more members.",
    techStack: ["Svelte", "Firebase", "Cloud Functions"],
    contributors: "Built by DSEC members as a real club operations project.",
    githubUrl: "#",
    status: "paused",
    topic: "club",
    category: "web",
  },
  {
    id: "4",
    name: "CodeReview Bot",
    tagline: "AI-powered code review assistant for student projects.",
    description:
      "A Discord bot that provides automated code review suggestions for pull requests in DSEC project repositories. Uses OpenAI to analyze code and provide constructive feedback to help students learn best practices.",
    techStack: ["Python", "Discord.py", "OpenAI API", "GitHub Webhooks"],
    contributors: "Built during DSEC Hackathon 2024 by a team of 4 students.",
    githubUrl: "#",
    status: "active",
    topic: "learning",
    category: "ai",
  },
  {
    id: "5",
    name: "Campus Nav AR",
    tagline: "AR navigation for Deakin Burwood campus.",
    description:
      "An experimental mobile app that uses augmented reality to help new students navigate the Burwood campus. Point your phone and see directions overlaid on the real world.",
    techStack: ["React Native", "ARKit", "ARCore", "Firebase"],
    contributors:
      "A cross-disciplinary team from software engineering and design.",
    githubUrl: "#",
    status: "archived",
    topic: "experiments",
    category: "mobile",
  },
  {
    id: "6",
    name: "DSEC Analytics Dashboard",
    tagline: "Visualize club engagement and growth metrics.",
    description:
      "A data visualization dashboard that helps the exec team track membership growth, event attendance, and project participation over time. Built to support data-driven decisions for the club.",
    techStack: ["Next.js", "D3.js", "PostgreSQL", "Vercel"],
    contributors: "Built by the DSEC data team with support from IT students.",
    githubUrl: "#",
    status: "active",
    topic: "club",
    category: "data",
  },
];

const techStackOptions = [
  { value: "web", label: "Web" },
  { value: "mobile", label: "Mobile" },
  { value: "backend", label: "Backend" },
  { value: "data", label: "Data" },
  { value: "ai", label: "AI" },
  { value: "games", label: "Games" },
];

const topicOptions = [
  { value: "learning", label: "Learning Tools" },
  { value: "club", label: "Club Tools" },
  { value: "utilities", label: "Utilities" },
  { value: "hackathon", label: "Hackathon Builds" },
  { value: "experiments", label: "Experiments" },
];

const statusOptions = [
  { value: "active", label: "Active", color: "bg-lime text-lime-foreground" },
  { value: "paused", label: "Paused", color: "bg-coral text-coral-foreground" },
  {
    value: "archived",
    label: "Archived",
    color: "bg-muted text-muted-foreground",
  },
];

export default function ProjectCardsGrid(): React.ReactElement {
  const [filters, setFilters] = useState<ProjectFilterState>({
    techStack: [],
    topic: [],
    status: [],
  });
  const [isFilterExpanded, setIsFilterExpanded] = useState(false);

  const toggleFilter = (
    category: keyof ProjectFilterState,
    value: string
  ): void => {
    setFilters((prev) => ({
      ...prev,
      [category]: prev[category].includes(value)
        ? prev[category].filter((v) => v !== value)
        : [...prev[category], value],
    }));
  };

  const clearAllFilters = (): void => {
    setFilters({ techStack: [], topic: [], status: [] });
  };

  const hasActiveFilters =
    filters.techStack.length > 0 ||
    filters.topic.length > 0 ||
    filters.status.length > 0;

  const filteredProjects = projects.filter((project) => {
    const matchesTech =
      filters.techStack.length === 0 ||
      filters.techStack.includes(project.category);
    const matchesTopic =
      filters.topic.length === 0 || filters.topic.includes(project.topic);
    const matchesStatus =
      filters.status.length === 0 || filters.status.includes(project.status);
    return matchesTech && matchesTopic && matchesStatus;
  });

  return (
    <section className="relative bg-background py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="mb-12">
          <p className="mb-4 font-mono text-sm uppercase tracking-wider text-secondary">
            Explore DSEC Projects
          </p>
          <p className="max-w-3xl text-lg leading-relaxed text-muted-foreground">
            These projects are built by Deakin students from software
            engineering, computer science, IT, and related courses. Most were
            created in small teams during DSEC development sessions, hackathons,
            or self directed sprints. Each card links out to a GitHub repository
            so you can inspect the code, see open issues, and explore how the
            team works.
          </p>
        </div>

        <div className="relative mb-10 overflow-hidden rounded-2xl border border-border bg-card">
          <button
            onClick={() => setIsFilterExpanded(!isFilterExpanded)}
            className="flex w-full items-center justify-between p-4 transition-colors hover:bg-muted/30 md:p-6"
          >
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-secondary/20 p-2 text-secondary">
                <FilterIcon />
              </div>
              <div className="text-left">
                <h3 className="font-grotesk font-bold text-foreground">
                  Filter projects
                </h3>
                <p className="text-sm text-muted-foreground">
                  Pick the technologies, topics, or status that match what you
                  are interested in
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              {hasActiveFilters && (
                <span className="rounded-full bg-primary/20 px-2 py-1 text-xs font-medium text-primary">
                  {filters.techStack.length +
                    filters.topic.length +
                    filters.status.length}{" "}
                  active
                </span>
              )}
              <ChevronDownIcon
                className={`h-5 w-5 text-muted-foreground transition-transform ${isFilterExpanded ? "rotate-180" : ""}`}
              />
            </div>
          </button>

          <div
            className={`overflow-hidden transition-all duration-300 ${isFilterExpanded ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
          >
            <div className="space-y-6 border-t border-border px-4 pb-6 pt-6 md:px-6">
              <div>
                <p className="mb-3 text-sm font-medium text-muted-foreground">
                  Tech Stack
                </p>
                <div className="flex flex-wrap gap-2">
                  {techStackOptions.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => toggleFilter("techStack", option.value)}
                      className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                        filters.techStack.includes(option.value)
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted/50 text-muted-foreground hover:bg-muted"
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className="mb-3 text-sm font-medium text-muted-foreground">
                  Topic or Domain
                </p>
                <div className="flex flex-wrap gap-2">
                  {topicOptions.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => toggleFilter("topic", option.value)}
                      className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                        filters.topic.includes(option.value)
                          ? "bg-secondary text-secondary-foreground"
                          : "bg-muted/50 text-muted-foreground hover:bg-muted"
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className="mb-3 text-sm font-medium text-muted-foreground">
                  Status
                </p>
                <div className="flex flex-wrap gap-2">
                  {statusOptions.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => toggleFilter("status", option.value)}
                      className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                        filters.status.includes(option.value)
                          ? option.color
                          : "bg-muted/50 text-muted-foreground hover:bg-muted"
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              {hasActiveFilters && (
                <button
                  onClick={clearAllFilters}
                  className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
                >
                  <XIcon />
                  Clear all filters
                </button>
              )}
            </div>
          </div>
        </div>

        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
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

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}): React.ReactElement {
  const status = statusColorClasses[project.status as ProjectStatus];
  const accentColor = getColorFromIndex(index);
  const accent = accentColorClasses[accentColor];

  return (
    <div
      className={`group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 ${accent.border} hover:shadow-xl hover:shadow-primary/5`}
    >
      <div
        className={`absolute inset-0 opacity-0 ${accent.hover} transition-opacity duration-300`}
      />

      <div className="pointer-events-none absolute right-0 top-0 h-20 w-20 overflow-hidden">
        <div
          className={`absolute -right-10 -top-10 h-20 w-20 ${accent.bg} rounded-full`}
        />
      </div>

      <div className="relative z-10 flex flex-1 flex-col p-6">
        <div className="mb-4 flex items-start justify-between">
          <div className={`rounded-xl bg-muted p-2.5 ${accent.icon}`}>
            <GitHubIcon />
          </div>
          <div
            className={`flex items-center gap-2 rounded-full px-3 py-1 ${status.bg}`}
          >
            <span
              className={`h-2 w-2 animate-pulse rounded-full ${status.dot}`}
            />
            <span className={`text-xs font-medium capitalize ${status.text}`}>
              {project.status}
            </span>
          </div>
        </div>

        <div className="flex-1">
          <h3 className="mb-1 font-grotesk text-xl font-bold text-foreground transition-colors group-hover:text-primary">
            {project.name}
          </h3>
          <p className={`mb-3 text-sm font-medium ${accent.icon}`}>
            {project.tagline}
          </p>
          <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
            {project.description}
          </p>

          <div className="mb-4 flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded bg-muted px-2 py-1 font-mono text-xs text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mb-6 flex items-center gap-2 text-xs text-muted-foreground">
            <UsersIcon />
            <span>{project.contributors}</span>
          </div>
        </div>

        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group/btn flex w-full items-center justify-center gap-2 rounded-xl border border-border px-4 py-3 font-medium transition-all hover:bg-foreground hover:text-background"
        >
          <GitHubIcon />
          View code on GitHub
          <ExternalLinkIcon className="opacity-0 transition-opacity group-hover/btn:opacity-100" />
        </a>
      </div>
    </div>
  );
}

function EmptyState(): React.ReactElement {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-20 text-center">
      <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-muted">
        <GitHubIcon />
      </div>
      <h3 className="mb-2 font-grotesk text-xl font-bold text-foreground">
        No projects match these filters yet
      </h3>
      <p className="max-w-md text-muted-foreground">
        Try clearing a filter or choosing a different tech stack. You can also
        just scroll and explore all projects.
      </p>
    </div>
  );
}
