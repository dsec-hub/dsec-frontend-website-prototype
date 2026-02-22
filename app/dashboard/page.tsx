"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  LogOut,
  Rocket,
  CheckCircle2,
  Mail,
  Calendar,
  Code,
  Users,
} from "lucide-react";
import Link from "next/link";

import { useAuth } from "@/context/auth-context";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/**
 * Dashboard Page (Temporary)
 *
 * Protected route — requires authentication.
 * Shows a "coming soon" message while the full dashboard is being built.
 */
export default function DashboardPage() {
  const { user, isLoading, isAuthenticated, signOut } = useAuth();
  const [isSigningOut, setIsSigningOut] = useState(false);

  const handleSignOut = async () => {
    setIsSigningOut(true);
    await signOut();
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
          <p className="text-muted-foreground">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated || !user) {
    return null;
  }

  const displayName =
    user?.preferredName || user?.name?.split(" ")[0] || "Member";

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Welcome header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-10"
          >
            {/* Avatar */}
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-2xl font-bold font-[family-name:var(--font-space-grotesk)] mx-auto mb-6">
              {displayName.charAt(0).toUpperCase()}
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-space-grotesk)] mb-2">
              Welcome, <span className="gradient-text">{displayName}</span>
            </h1>
            <p className="text-muted-foreground">
              {user?.email}
            </p>
          </motion.div>

          {/* Account confirmed card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-green-500/10 border border-green-500/20 rounded-xl p-6 mb-8 flex items-start gap-4"
          >
            <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
            <div>
              <h2 className="font-semibold text-green-400 mb-1">
                Account created successfully
              </h2>
              <p className="text-sm text-muted-foreground">
                Your DSEC account is active. You&apos;re all set for when the
                full portal launches.
              </p>
            </div>
          </motion.div>

          {/* Coming soon card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-card border border-border rounded-xl p-8 sm:p-10 text-center mb-8"
          >
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Rocket className="w-8 h-8 text-primary" />
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold font-[family-name:var(--font-space-grotesk)] mb-4">
              The full portal will officially open with{" "}
              <span className="gradient-text">all access</span> soon
            </h2>

            <p className="text-muted-foreground max-w-lg mx-auto mb-8">
              We&apos;re putting the finishing touches on your member dashboard
              &mdash; events, projects, workshop recordings, DSEC coins, and
              more. Stay tuned.
            </p>

            {/* What's coming */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-lg mx-auto">
              {[
                { icon: Calendar, label: "Events" },
                { icon: Code, label: "Projects" },
                { icon: Users, label: "Teams" },
                { icon: Mail, label: "Updates" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col items-center gap-2 p-4 rounded-lg bg-muted/30"
                >
                  <item.icon className="w-5 h-5 text-muted-foreground" />
                  <span className="text-xs text-muted-foreground">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/"
              className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
            >
              Back to Home
            </Link>

            <button
              onClick={handleSignOut}
              disabled={isSigningOut}
              className="flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-muted-foreground hover:text-red-500 hover:border-red-500/50 transition-colors disabled:opacity-50"
            >
              <LogOut className="w-4 h-4" />
              {isSigningOut ? "Signing out..." : "Sign out"}
            </button>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
