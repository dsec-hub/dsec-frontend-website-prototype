'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useState } from 'react';

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSearching(true);
    // Simulate search delay
    setTimeout(() => {
      setIsSearching(false);
    }, 1000);
  };

  // Dummy search results
  const dummyResults = searchQuery
    ? [
        {
          title: 'About DSEC',
          description:
            'Learn about the Deakin Software Engineering Club and our mission to empower students.',
          url: '/about',
          category: 'Page',
        },
        {
          title: 'Events',
          description:
            'Discover upcoming workshops, hackathons, and networking events.',
          url: '/events',
          category: 'Page',
        },
        {
          title: 'Projects',
          description:
            'Explore the innovative projects built by DSEC members.',
          url: '/projects',
          category: 'Page',
        },
      ].filter(
        (result) =>
          result.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          result.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Navbar />

      {/* Search Content Section */}
      <section className="relative flex-1 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary via-secondary to-lime bg-clip-text text-transparent">
                Search
              </span>{' '}
              DSEC
            </h1>
            <p className="text-muted-foreground text-lg">
              Find content across our website
            </p>
          </div>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="mb-12">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg
                  className="w-5 h-5 text-muted-foreground"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for pages, events, projects..."
                className="w-full pl-12 pr-4 py-4 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute inset-y-0 right-20 flex items-center pr-4 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              )}
              <button
                type="submit"
                disabled={!searchQuery}
                className="absolute inset-y-0 right-0 px-6 bg-primary hover:bg-primary/90 disabled:bg-muted disabled:text-muted-foreground text-primary-foreground rounded-r-lg font-semibold transition-all disabled:cursor-not-allowed"
              >
                Search
              </button>
            </div>
          </form>

          {/* Search Status */}
          {isSearching && (
            <div className="flex items-center justify-center gap-2 py-8">
              <div className="w-5 h-5 border-2 border-primary border-t-transparent rounded-full animate-spin" />
              <span className="text-muted-foreground">Searching...</span>
            </div>
          )}

          {/* Results */}
          {!isSearching && searchQuery && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold">
                  {dummyResults.length} result{dummyResults.length !== 1 ? 's' : ''}{' '}
                  for &quot;{searchQuery}&quot;
                </h2>
              </div>

              {dummyResults.length > 0 ? (
                <div className="space-y-4">
                  {dummyResults.map((result, index) => (
                    <a
                      key={index}
                      href={result.url}
                      className="block bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all group"
                    >
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                          {result.title}
                        </h3>
                        <span className="px-2 py-1 bg-muted rounded text-xs text-muted-foreground shrink-0">
                          {result.category}
                        </span>
                      </div>
                      <p className="text-muted-foreground mb-3">
                        {result.description}
                      </p>
                      <p className="text-sm text-secondary font-mono">
                        dsec.club{result.url}
                      </p>
                    </a>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-muted-foreground"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    No results found
                  </h3>
                  <p className="text-muted-foreground">
                    Try different keywords or check your spelling
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Empty State */}
          {!searchQuery && !isSearching && (
            <div className="text-center py-12">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Start searching</h3>
              <p className="text-muted-foreground mb-8">
                Enter a search term to find content across DSEC
              </p>

              {/* Quick Links */}
              <div className="max-w-2xl mx-auto">
                <h4 className="text-sm font-semibold text-muted-foreground mb-4 uppercase tracking-wide">
                  Popular Pages
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {[
                    { name: 'About', url: '/about' },
                    { name: 'Events', url: '/events' },
                    { name: 'Projects', url: '/projects' },
                    { name: 'Contact', url: '/contact' },
                    { name: 'Hackathon', url: '/hackathon' },
                    { name: 'Status', url: '/status' },
                  ].map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      className="px-4 py-2 bg-card border border-border rounded-lg hover:border-primary/50 hover:bg-card/80 transition-all text-sm font-medium"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Note about functionality */}
          <div className="mt-12 p-4 bg-muted/30 border border-border rounded-lg">
            <div className="flex items-start gap-3">
              <svg
                className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd"
                />
              </svg>
              <div>
                <p className="text-sm font-semibold mb-1">
                  Search functionality coming soon
                </p>
                <p className="text-sm text-muted-foreground">
                  This is a basic implementation. Full-text search with advanced
                  filtering will be available in a future update.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
