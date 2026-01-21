import type { ReactNode } from "react";

// Theme color types
export type ThemeColor =
  | "primary"
  | "secondary"
  | "lime"
  | "accent"
  | "coral"
  | "cyan";
export type BaseColor = "primary" | "secondary" | "lime" | "accent";

// Status types for projects
export type ProjectStatus = "active" | "paused" | "archived";

// Contact form types
export type ContactTopic =
  | "events"
  | "projects"
  | "membership"
  | "volunteering"
  | "other";

// Social platform types
export type SocialPlatform = "Discord" | "Instagram" | "LinkedIn" | "GitHub";

// Shape types for decorative elements
export type ShapeType = "circle" | "square" | "triangle";

// Form state interfaces
export interface FormState {
  isSubmitting: boolean;
  isSubmitted: boolean;
}

export interface ContactFormData {
  name: string;
  email: string;
  topic: ContactTopic | "";
  message: string;
}

export interface SuggestionFormData {
  category: string;
  suggestion: string;
}

// Link interfaces
export interface NavLink {
  href: string;
  label: string;
}

export interface SocialLink {
  name: SocialPlatform;
  href: string;
}

export interface ResourceLink {
  name: string;
  href: string;
  external?: boolean;
}

// Card interfaces
export interface BentoCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  href: string;
  color: BaseColor;
  className?: string;
  large?: boolean;
  backgroundComponent?: ReactNode;
}

// Project interfaces
export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  techStack: string[];
  contributors: string;
  githubUrl: string;
  status: ProjectStatus;
  topic: string;
  category: string;
}

export interface ProjectFilterState {
  techStack: string[];
  topic: string[];
  status: string[];
}

export interface FilterOption {
  value: string;
  label: string;
  color?: string;
}

// Partner interfaces
export interface PartnerBenefit {
  number: string;
  title: string;
  description: string;
}

export interface Partner {
  name: string;
  subtitle: string;
}

// Newsletter/Floating shapes
export interface FloatingShape {
  type: ShapeType;
  size: number;
  x: string;
  y: string;
  color: ThemeColor;
  delay: number;
}

// Team member interface
export interface TeamMember {
  name: string;
  role: string;
  image?: string;
  bio?: string;
  socials?: {
    linkedin?: string;
    github?: string;
  };
}

// Event interface
export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  category: string;
  registrationUrl?: string;
  image?: string;
}

// Timeline item for about page
export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

// Color class mappings
export interface ColorClasses {
  bg: string;
  border: string;
  icon: string;
  arrow?: string;
  glow?: string;
  text?: string;
  dot?: string;
  hover?: string;
}

// Component prop types with children
export interface WithChildren {
  children: ReactNode;
}

export interface WithClassName {
  className?: string;
}

export interface WithChildrenAndClassName extends WithChildren, WithClassName {}

// Transition link props
export interface TransitionLinkProps extends WithChildrenAndClassName {
  href: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}
