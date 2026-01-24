"use client";

import { motion } from "framer-motion";
import { Clock, Eye, ArrowUpRight } from "lucide-react";

import TransitionLink from "@/components/TransitionLink";
import { formatDate, getCategoryInfo } from "@/lib/blog-data";
import type { BlogPost, ThemeColor } from "@/types";

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
  index?: number;
}

const colorClasses: Record<ThemeColor, { bg: string; text: string; border: string }> = {
  primary: {
    bg: "bg-primary/10",
    text: "text-primary",
    border: "border-primary/30",
  },
  secondary: {
    bg: "bg-secondary/10",
    text: "text-secondary",
    border: "border-secondary/30",
  },
  lime: {
    bg: "bg-lime/10",
    text: "text-lime",
    border: "border-lime/30",
  },
  accent: {
    bg: "bg-accent/10",
    text: "text-accent",
    border: "border-accent/30",
  },
  coral: {
    bg: "bg-coral/10",
    text: "text-coral",
    border: "border-coral/30",
  },
  cyan: {
    bg: "bg-cyan/10",
    text: "text-cyan",
    border: "border-cyan/30",
  },
};

export default function BlogCard({ post, featured = false, index = 0 }: BlogCardProps) {
  const categoryInfo = getCategoryInfo(post.category);
  const colors = colorClasses[categoryInfo.color];

  if (featured) {
    return (
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="group relative overflow-hidden rounded-2xl border border-border bg-card"
      >
        <TransitionLink href={`/blog/${post.slug}`} className="block">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Image */}
            <div className="relative h-64 md:h-full min-h-[300px] overflow-hidden bg-muted">
              {post.coverImage ? (
                <img
                  src={post.coverImage}
                  alt={post.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20">
                  <span className="text-6xl font-bold text-muted-foreground/20">
                    {post.title.charAt(0)}
                  </span>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent md:bg-gradient-to-r" />
            </div>

            {/* Content */}
            <div className="relative flex flex-col justify-center p-6 md:p-8">
              <div className="mb-4 flex flex-wrap items-center gap-2">
                <span
                  className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${colors.bg} ${colors.text}`}
                >
                  {categoryInfo.label}
                </span>
                {post.featured && (
                  <span className="inline-flex items-center rounded-full bg-primary/20 px-3 py-1 text-xs font-medium text-primary">
                    Featured
                  </span>
                )}
              </div>

              <h2 className="mb-3 font-grotesk text-2xl font-bold text-foreground transition-colors group-hover:text-primary md:text-3xl">
                {post.title}
              </h2>

              <p className="mb-4 line-clamp-3 text-muted-foreground">
                {post.excerpt}
              </p>

              {/* Authors */}
              <div className="mb-4 flex items-center gap-3">
                <div className="flex -space-x-2">
                  {post.authors.slice(0, 3).map((author) => (
                    <div
                      key={author.id}
                      className="relative h-8 w-8 overflow-hidden rounded-full border-2 border-card bg-muted"
                    >
                      {author.avatar ? (
                        <img
                          src={author.avatar}
                          alt={author.name}
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center bg-primary/20 text-xs font-medium text-primary">
                          {author.name.charAt(0)}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                <div className="text-sm">
                  <span className="text-foreground">
                    {post.authors.map((a) => a.name).join(", ")}
                  </span>
                </div>
              </div>

              {/* Meta */}
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span>{formatDate(post.publishedAt)}</span>
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {post.readingTime} min read
                </span>
                {post.views && (
                  <span className="flex items-center gap-1">
                    <Eye className="h-4 w-4" />
                    {post.views.toLocaleString()}
                  </span>
                )}
              </div>

              {/* Arrow */}
              <div className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background transition-all group-hover:border-primary group-hover:bg-primary md:right-8 md:top-8">
                <ArrowUpRight className="h-5 w-5 transition-colors group-hover:text-primary-foreground" />
              </div>
            </div>
          </div>
        </TransitionLink>
      </motion.article>
    );
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-primary/50"
    >
      <TransitionLink href={`/blog/${post.slug}`} className="block">
        {/* Image */}
        <div className="relative h-48 overflow-hidden bg-muted">
          {post.coverImage ? (
            <img
              src={post.coverImage}
              alt={post.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20">
              <span className="text-4xl font-bold text-muted-foreground/20">
                {post.title.charAt(0)}
              </span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />

          {/* Category badge */}
          <div className="absolute left-4 top-4">
            <span
              className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${colors.bg} ${colors.text} backdrop-blur-sm`}
            >
              {categoryInfo.label}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="mb-2 line-clamp-2 font-grotesk text-lg font-bold text-foreground transition-colors group-hover:text-primary">
            {post.title}
          </h3>

          <p className="mb-4 line-clamp-2 text-sm text-muted-foreground">
            {post.excerpt}
          </p>

          {/* Authors */}
          <div className="mb-3 flex items-center gap-2">
            <div className="flex -space-x-1.5">
              {post.authors.slice(0, 2).map((author) => (
                <div
                  key={author.id}
                  className="relative h-6 w-6 overflow-hidden rounded-full border-2 border-card bg-muted"
                >
                  {author.avatar ? (
                    <img
                      src={author.avatar}
                      alt={author.name}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-primary/20 text-[10px] font-medium text-primary">
                      {author.name.charAt(0)}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <span className="text-xs text-muted-foreground">
              {post.authors.length > 1
                ? `${post.authors[0].name} +${post.authors.length - 1}`
                : post.authors[0].name}
            </span>
          </div>

          {/* Meta */}
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>{formatDate(post.publishedAt)}</span>
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {post.readingTime} min
            </span>
          </div>
        </div>
      </TransitionLink>
    </motion.article>
  );
}
