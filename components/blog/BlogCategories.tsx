"use client";

import { motion } from "framer-motion";
import type { BlogCategory, BlogCategoryInfo, ThemeColor } from "@/types";

interface BlogCategoriesProps {
  categories: BlogCategoryInfo[];
  selectedCategory: BlogCategory | null;
  onSelectCategory: (category: BlogCategory | null) => void;
}

const colorClasses: Record<ThemeColor, { active: string; inactive: string }> = {
  primary: {
    active: "bg-primary text-primary-foreground",
    inactive: "text-primary hover:bg-primary/20",
  },
  secondary: {
    active: "bg-secondary text-secondary-foreground",
    inactive: "text-secondary hover:bg-secondary/20",
  },
  lime: {
    active: "bg-lime text-lime-foreground",
    inactive: "text-lime hover:bg-lime/20",
  },
  accent: {
    active: "bg-accent text-accent-foreground",
    inactive: "text-accent hover:bg-accent/20",
  },
  coral: {
    active: "bg-coral text-coral-foreground",
    inactive: "text-coral hover:bg-coral/20",
  },
  cyan: {
    active: "bg-cyan text-cyan-foreground",
    inactive: "text-cyan hover:bg-cyan/20",
  },
};

export default function BlogCategories({
  categories,
  selectedCategory,
  onSelectCategory,
}: BlogCategoriesProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {/* All button */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => onSelectCategory(null)}
        className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
          selectedCategory === null
            ? "bg-foreground text-background"
            : "text-muted-foreground hover:bg-muted hover:text-foreground"
        }`}
      >
        All Posts
        {selectedCategory === null && (
          <motion.div
            layoutId="categoryIndicator"
            className="absolute inset-0 rounded-full bg-foreground"
            style={{ zIndex: -1 }}
          />
        )}
      </motion.button>

      {/* Category buttons */}
      {categories.map((category) => {
        const isSelected = selectedCategory === category.id;
        const colors = colorClasses[category.color];

        return (
          <motion.button
            key={category.id}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onSelectCategory(category.id)}
            className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              isSelected ? colors.active : colors.inactive
            }`}
          >
            {category.label}
          </motion.button>
        );
      })}
    </div>
  );
}
