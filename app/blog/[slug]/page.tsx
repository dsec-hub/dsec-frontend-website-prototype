"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Clock,
  Eye,
  Calendar,
  Tag,
  Loader2,
} from "lucide-react";

import {
  BlogMarkdown,
  BlogAuthorsList,
  BlogCard,
  BlogCTA,
  BlogTableOfContents,
  InlineShareButtons,
} from "@/components/blog";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import TransitionLink from "@/components/TransitionLink";
import { formatDate, getCategoryInfo } from "@/lib/blog-data";
import type { BlogPost, ThemeColor } from "@/types";

const colorClasses: Record<ThemeColor, { bg: string; text: string }> = {
  primary: { bg: "bg-primary/10", text: "text-primary" },
  secondary: { bg: "bg-secondary/10", text: "text-secondary" },
  lime: { bg: "bg-lime/10", text: "text-lime" },
  accent: { bg: "bg-accent/10", text: "text-accent" },
  coral: { bg: "bg-coral/10", text: "text-coral" },
  cyan: { bg: "bg-cyan/10", text: "text-cyan" },
};

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;

  const [post, setPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`/api/blogs/${slug}`);

        if (!response.ok) {
          if (response.status === 404) {
            setError("Article not found");
          } else {
            setError("Failed to load article");
          }
          return;
        }

        const data = await response.json();
        setPost(data.post);
        setRelatedPosts(data.relatedPosts || []);
      } catch (err) {
        console.error("Error fetching post:", err);
        setError("Failed to load article");
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchPost();
    }
  }, [slug]);

  // Loading state
  if (loading) {
    return (
      <main className="min-h-screen bg-background">
        <Navbar />
        <div className="flex min-h-[60vh] items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
        <Footer />
      </main>
    );
  }

  // Error state
  if (error || !post) {
    return (
      <main className="min-h-screen bg-background">
        <Navbar />
        <div className="mx-auto max-w-7xl px-4 py-24 text-center sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="mb-4 font-grotesk text-3xl font-bold text-foreground">
              {error || "Article not found"}
            </h1>
            <p className="mb-8 text-muted-foreground">
              The article you're looking for doesn't exist or has been removed.
            </p>
            <TransitionLink
              href="/blog"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground transition-all hover:bg-primary/90"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </TransitionLink>
          </motion.div>
        </div>
        <Footer />
      </main>
    );
  }

  const categoryInfo = getCategoryInfo(post.category);
  const colors = colorClasses[categoryInfo.color];
  const postUrl = typeof window !== "undefined" ? window.location.href : "";

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />

        <div className="relative mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          {/* Back button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <TransitionLink
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </TransitionLink>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {/* Category and featured badge */}
            <div className="mb-4 flex flex-wrap items-center gap-2">
              <span
                className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium ${colors.bg} ${colors.text}`}
              >
                {categoryInfo.label}
              </span>
              {post.featured && (
                <span className="inline-flex items-center rounded-full bg-primary/20 px-3 py-1 text-sm font-medium text-primary">
                  Featured
                </span>
              )}
            </div>

            {/* Title */}
            <h1 className="mb-6 font-grotesk text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
              {post.title}
            </h1>

            {/* Excerpt */}
            <p className="mb-6 text-lg text-muted-foreground">{post.excerpt}</p>

            {/* Meta info */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                {formatDate(post.publishedAt)}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                {post.readingTime} min read
              </span>
              {post.views && (
                <span className="flex items-center gap-1.5">
                  <Eye className="h-4 w-4" />
                  {post.views.toLocaleString()} views
                </span>
              )}
            </div>

            {/* Authors preview */}
            <div className="mt-6 flex items-center gap-3">
              <div className="flex -space-x-2">
                {post.authors.map((author) => (
                  <div
                    key={author.id}
                    className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-background bg-muted"
                  >
                    {author.avatar ? (
                      <img
                        src={author.avatar}
                        alt={author.name}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-primary/20 text-sm font-medium text-primary">
                        {author.name.charAt(0)}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">
                  {post.authors.map((a) => a.name).join(", ")}
                </p>
                <p className="text-xs text-muted-foreground">
                  {post.authors.map((a) => a.role).join(" & ")}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cover Image */}
      {post.coverImage && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8"
        >
          <div className="-mt-8 mb-12 overflow-hidden rounded-2xl border border-border shadow-xl">
            <img
              src={post.coverImage}
              alt={post.title}
              className="h-auto w-full object-cover"
            />
          </div>
        </motion.div>
      )}

      {/* Main Content */}
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_280px]">
          {/* Article Content */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="min-w-0"
          >
            <BlogMarkdown content={post.content} />

            {/* Tags */}
            {post.tags.length > 0 && (
              <div className="mt-8 border-t border-border pt-8">
                <div className="flex flex-wrap items-center gap-2">
                  <Tag className="h-4 w-4 text-muted-foreground" />
                  {post.tags.map((tag) => (
                    <TransitionLink
                      key={tag}
                      href={`/blog?tag=${tag}`}
                      className="rounded-full bg-muted px-3 py-1 text-sm text-muted-foreground transition-colors hover:bg-primary/20 hover:text-primary"
                    >
                      {tag}
                    </TransitionLink>
                  ))}
                </div>
              </div>
            )}

            {/* Share */}
            <div className="mt-8 flex items-center justify-between border-t border-border pt-8">
              <InlineShareButtons title={post.title} url={postUrl} />
            </div>

            {/* Authors section */}
            <div className="mt-8 rounded-xl border border-border bg-card p-6">
              <BlogAuthorsList authors={post.authors} />
            </div>

            {/* Inline CTA */}
            <BlogCTA variant="inline" />
          </motion.article>

          {/* Sidebar */}
          <motion.aside
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="sticky top-24 space-y-6">
              {/* Table of Contents */}
              <BlogTableOfContents content={post.content} />

              {/* Quick Share */}
              <div className="rounded-xl border border-border bg-card p-5">
                <h3 className="mb-4 text-sm font-medium text-foreground">
                  Share this article
                </h3>
                <InlineShareButtons title={post.title} url={postUrl} />
              </div>

              {/* Newsletter CTA */}
              <div className="rounded-xl border border-primary/30 bg-gradient-to-br from-primary/10 to-secondary/10 p-5">
                <h3 className="mb-2 font-semibold text-foreground">
                  Stay Updated
                </h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  Get the latest articles delivered to your inbox.
                </p>
                <TransitionLink
                  href="/contact"
                  className="inline-block w-full rounded-lg bg-primary py-2 text-center text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90"
                >
                  Subscribe
                </TransitionLink>
              </div>
            </div>
          </motion.aside>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="border-t border-border bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-8 font-grotesk text-2xl font-bold text-foreground">
                Related Articles
              </h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {relatedPosts.map((relatedPost, index) => (
                  <BlogCard key={relatedPost.id} post={relatedPost} index={index} />
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Full CTA */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <BlogCTA />
      </section>

      <Footer />
    </main>
  );
}
