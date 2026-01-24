"use client";

import { Github, Linkedin, Twitter, Globe } from "lucide-react";
import type { BlogAuthor as BlogAuthorType } from "@/types";

interface BlogAuthorProps {
  author: BlogAuthorType;
  size?: "sm" | "md" | "lg";
  showBio?: boolean;
}

export default function BlogAuthor({
  author,
  size = "md",
  showBio = false,
}: BlogAuthorProps) {
  const sizeClasses = {
    sm: {
      avatar: "h-8 w-8",
      name: "text-sm",
      role: "text-xs",
      bio: "text-xs",
      icon: "h-3.5 w-3.5",
    },
    md: {
      avatar: "h-12 w-12",
      name: "text-base",
      role: "text-sm",
      bio: "text-sm",
      icon: "h-4 w-4",
    },
    lg: {
      avatar: "h-16 w-16",
      name: "text-lg",
      role: "text-base",
      bio: "text-base",
      icon: "h-5 w-5",
    },
  };

  const classes = sizeClasses[size];

  return (
    <div className="flex items-start gap-4">
      {/* Avatar */}
      <div
        className={`relative overflow-hidden rounded-full bg-muted ${classes.avatar}`}
      >
        {author.avatar ? (
          <img
            src={author.avatar}
            alt={author.name}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/30 to-secondary/30">
            <span className={`font-bold text-foreground ${classes.name}`}>
              {author.name.charAt(0)}
            </span>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="flex-1">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <h4 className={`font-semibold text-foreground ${classes.name}`}>
            {author.name}
          </h4>
          {author.role && (
            <span className={`text-muted-foreground ${classes.role}`}>
              {author.role}
            </span>
          )}
        </div>

        {showBio && author.bio && (
          <p className={`mt-1 text-muted-foreground ${classes.bio}`}>
            {author.bio}
          </p>
        )}

        {/* Social links */}
        {author.socials && (
          <div className="mt-2 flex items-center gap-2">
            {author.socials.github && (
              <a
                href={`https://github.com/${author.socials.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-foreground"
                aria-label={`${author.name}'s GitHub`}
              >
                <Github className={classes.icon} />
              </a>
            )}
            {author.socials.linkedin && (
              <a
                href={`https://linkedin.com/in/${author.socials.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-foreground"
                aria-label={`${author.name}'s LinkedIn`}
              >
                <Linkedin className={classes.icon} />
              </a>
            )}
            {author.socials.twitter && (
              <a
                href={`https://twitter.com/${author.socials.twitter}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-foreground"
                aria-label={`${author.name}'s Twitter`}
              >
                <Twitter className={classes.icon} />
              </a>
            )}
            {author.socials.website && (
              <a
                href={author.socials.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-foreground"
                aria-label={`${author.name}'s website`}
              >
                <Globe className={classes.icon} />
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

interface BlogAuthorsListProps {
  authors: BlogAuthorType[];
  showBio?: boolean;
}

export function BlogAuthorsList({ authors, showBio = true }: BlogAuthorsListProps) {
  return (
    <div className="space-y-6">
      <h3 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
        {authors.length > 1 ? "Written by" : "Author"}
      </h3>
      <div className="space-y-4">
        {authors.map((author) => (
          <BlogAuthor key={author.id} author={author} size="lg" showBio={showBio} />
        ))}
      </div>
    </div>
  );
}
