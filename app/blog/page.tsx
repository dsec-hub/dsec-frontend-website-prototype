"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, BookOpen, TrendingUp, ChevronLeft, ChevronRight } from "lucide-react";

import {
  BlogCard,
  BlogSearch,
  BlogCategories,
  BlogCTA,
} from "@/components/blog";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import type { BlogPost, BlogCategory, BlogCategoryInfo, BlogListResponse } from "@/types";

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [featuredPosts, setFeaturedPosts] = useState<BlogPost[]>([]);
  const [categories, setCategories] = useState<BlogCategoryInfo[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<BlogCategory | null>(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [total, setTotal] = useState(0);

  // Fetch categories and featured posts on mount
  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const [categoriesRes, featuredRes] = await Promise.all([
          fetch("/api/blogs?type=categories"),
          fetch("/api/blogs?type=featured"),
        ]);

        const categoriesData = await categoriesRes.json();
        const featuredData = await featuredRes.json();

        setCategories(categoriesData.categories || []);
        setFeaturedPosts(featuredData.posts || []);
      } catch (error) {
        console.error("Error fetching initial data:", error);
      }
    };

    fetchInitialData();
  }, []);

  // Fetch posts when filters change
  const fetchPosts = useCallback(async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (searchQuery) params.set("query", searchQuery);
      if (selectedCategory) params.set("category", selectedCategory);
      params.set("page", page.toString());
      params.set("pageSize", "9");

      const response = await fetch(`/api/blogs?${params.toString()}`);
      const data: BlogListResponse = await response.json();

      setPosts(data.posts || []);
      setTotalPages(data.totalPages || 1);
      setTotal(data.total || 0);
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      setLoading(false);
    }
  }, [searchQuery, selectedCategory, page]);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  // Reset page when filters change
  useEffect(() => {
    setPage(1);
  }, [searchQuery, selectedCategory]);

  const showFeatured = !searchQuery && !selectedCategory && page === 1;

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-primary/10 blur-[100px]" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-secondary/10 blur-[100px]" />

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5">
              <BookOpen className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">DSEC Blog</span>
            </div>

            <h1 className="mb-4 font-grotesk text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
              Insights &{" "}
              <span className="gradient-text">Tutorials</span>
            </h1>

            <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
              Explore articles on software engineering, career advice, and the
              latest in tech. Written by students, for students.
            </p>

            {/* Search */}
            <div className="mx-auto max-w-xl">
              <BlogSearch
                value={searchQuery}
                onChange={setSearchQuery}
                placeholder="Search articles, topics, or authors..."
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <BlogCategories
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
        </motion.div>

        {/* Featured Posts */}
        <AnimatePresence>
          {showFeatured && featuredPosts.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="mb-12"
            >
              <div className="mb-6 flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                <h2 className="font-grotesk text-xl font-bold text-foreground">
                  Featured Articles
                </h2>
              </div>

              <div className="space-y-6">
                {featuredPosts.slice(0, 2).map((post, index) => (
                  <BlogCard key={post.id} post={post} featured index={index} />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Results Header */}
        <div className="mb-6 flex items-center justify-between">
          <h2 className="font-grotesk text-xl font-bold text-foreground">
            {searchQuery
              ? `Search results for "${searchQuery}"`
              : selectedCategory
              ? categories.find((c) => c.id === selectedCategory)?.label || "Articles"
              : "All Articles"}
          </h2>
          {!loading && (
            <span className="text-sm text-muted-foreground">
              {total} {total === 1 ? "article" : "articles"}
            </span>
          )}
        </div>

        {/* Posts Grid */}
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        ) : posts.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="rounded-xl border border-border bg-card p-12 text-center"
          >
            <BookOpen className="mx-auto mb-4 h-12 w-12 text-muted-foreground" />
            <h3 className="mb-2 text-lg font-semibold text-foreground">
              No articles found
            </h3>
            <p className="text-muted-foreground">
              {searchQuery
                ? "Try adjusting your search terms"
                : "Check back soon for new content"}
            </p>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {posts.map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} />
            ))}
          </motion.div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-12 flex items-center justify-center gap-2"
          >
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-all hover:border-primary/50 hover:text-foreground disabled:opacity-50"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
              <button
                key={pageNum}
                onClick={() => setPage(pageNum)}
                className={`flex h-10 w-10 items-center justify-center rounded-lg text-sm font-medium transition-all ${
                  page === pageNum
                    ? "bg-primary text-primary-foreground"
                    : "border border-border bg-card text-muted-foreground hover:border-primary/50 hover:text-foreground"
                }`}
              >
                {pageNum}
              </button>
            ))}

            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-all hover:border-primary/50 hover:text-foreground disabled:opacity-50"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </motion.div>
        )}

        {/* CTA Section */}
        <div className="mt-16">
          <BlogCTA />
        </div>
      </section>

      <Footer />
    </main>
  );
}
