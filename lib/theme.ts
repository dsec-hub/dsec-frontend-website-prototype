import type {
  BaseColor,
  ColorClasses,
  ProjectStatus,
  ThemeColor,
} from "@/types";

// Raw hex color values for SVG/canvas usage
export const themeColors: Record<ThemeColor, string> = {
  primary: "#e91e63",
  secondary: "#00bcd4",
  lime: "#c6ff00",
  accent: "#9c27b0",
  coral: "#ff6b6b",
  cyan: "#00e5ff",
};

// Bento card color classes
export const bentoColorClasses: Record<BaseColor, ColorClasses> = {
  primary: {
    bg: "bg-primary/10 hover:bg-primary/15",
    border: "border-primary/20 hover:border-primary/40",
    icon: "text-primary bg-primary/20",
    arrow: "bg-primary text-primary-foreground",
    glow: "group-hover:shadow-primary/20",
  },
  secondary: {
    bg: "bg-secondary/10 hover:bg-secondary/15",
    border: "border-secondary/20 hover:border-secondary/40",
    icon: "text-secondary bg-secondary/20",
    arrow: "bg-secondary text-secondary-foreground",
    glow: "group-hover:shadow-secondary/20",
  },
  lime: {
    bg: "bg-lime/10 hover:bg-lime/15",
    border: "border-lime/20 hover:border-lime/40",
    icon: "text-lime bg-lime/20",
    arrow: "bg-lime text-lime-foreground",
    glow: "group-hover:shadow-lime/20",
  },
  accent: {
    bg: "bg-accent/10 hover:bg-accent/15",
    border: "border-accent/20 hover:border-accent/40",
    icon: "text-accent bg-accent/20",
    arrow: "bg-accent text-accent-foreground",
    glow: "group-hover:shadow-accent/20",
  },
};

// Project status color classes
export const statusColorClasses: Record<
  ProjectStatus,
  { bg: string; text: string; dot: string }
> = {
  active: { bg: "bg-lime/20", text: "text-lime", dot: "bg-lime" },
  paused: { bg: "bg-coral/20", text: "text-coral", dot: "bg-coral" },
  archived: {
    bg: "bg-muted",
    text: "text-muted-foreground",
    dot: "bg-muted-foreground",
  },
};

// Accent color classes for project cards
export const accentColorClasses: Record<
  ThemeColor,
  { border: string; hover: string; icon: string; bg: string }
> = {
  primary: {
    border: "hover:border-primary/50",
    hover: "group-hover:bg-primary/10",
    icon: "text-primary",
    bg: "bg-primary/10",
  },
  secondary: {
    border: "hover:border-secondary/50",
    hover: "group-hover:bg-secondary/10",
    icon: "text-secondary",
    bg: "bg-secondary/10",
  },
  lime: {
    border: "hover:border-lime/50",
    hover: "group-hover:bg-lime/10",
    icon: "text-lime",
    bg: "bg-lime/10",
  },
  accent: {
    border: "hover:border-accent/50",
    hover: "group-hover:bg-accent/10",
    icon: "text-accent",
    bg: "bg-accent/10",
  },
  coral: {
    border: "hover:border-coral/50",
    hover: "group-hover:bg-coral/10",
    icon: "text-coral",
    bg: "bg-coral/10",
  },
  cyan: {
    border: "hover:border-cyan/50",
    hover: "group-hover:bg-cyan/10",
    icon: "text-cyan",
    bg: "bg-cyan/10",
  },
};

// Accent colors array for cycling through colors
export const accentColorsArray: ThemeColor[] = [
  "primary",
  "secondary",
  "lime",
  "accent",
  "coral",
  "cyan",
];

// Background color classes (for floating shapes etc.)
export const bgColorClasses: Record<ThemeColor, string> = {
  primary: "bg-primary",
  secondary: "bg-secondary",
  lime: "bg-lime",
  accent: "bg-accent",
  coral: "bg-coral",
  cyan: "bg-cyan",
};

// Fill classes for SVG elements
export const fillColorClasses: Record<ThemeColor, string> = {
  primary: "fill-primary",
  secondary: "fill-secondary",
  lime: "fill-lime",
  accent: "fill-accent",
  coral: "fill-coral",
  cyan: "fill-cyan",
};

// Text color classes
export const textColorClasses: Record<ThemeColor, string> = {
  primary: "text-primary",
  secondary: "text-secondary",
  lime: "text-lime",
  accent: "text-accent",
  coral: "text-coral",
  cyan: "text-cyan",
};

// Helper function to get color from index (cycles through accent colors)
export function getColorFromIndex(index: number): ThemeColor {
  return accentColorsArray[index % accentColorsArray.length];
}
