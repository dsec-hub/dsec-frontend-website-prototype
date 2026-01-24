"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  Code,
  Trophy,
  Users,
  Clock,
  ArrowRight,
  Bell,
  Settings,
  LogOut,
  ChevronRight,
  Star,
  Zap,
  Target,
  BookOpen,
  Github,
  ExternalLink,
  Coins,
  Video,
  FileText,
  Newspaper,
  Image,
  MapPin,
  GraduationCap,
  Lightbulb,
  HandHelping,
  FolderOpen,
  PlayCircle,
  Lock,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

import { useAuth } from "@/context/auth-context";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/**
 * Dashboard Page
 *
 * Protected route that displays user's dashboard with:
 * - Welcome message and quick stats
 * - Upcoming events
 * - Active projects
 * - Recent activity
 * - Quick actions
 */
export default function DashboardPage() {
  // TEMPORARILY DISABLED - Authentication check removed
  const { user, isLoading, isAuthenticated, signOut } = useAuth();
  const [isSigningOut, setIsSigningOut] = useState(false);

  const handleSignOut = async () => {
    setIsSigningOut(true);
    await signOut();
  };

  // TEMPORARILY DISABLED - Loading and authentication checks removed
  // if (isLoading) {
  //   return (
  //     <div className="min-h-screen bg-background flex items-center justify-center">
  //       <div className="flex flex-col items-center gap-4">
  //         <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
  //         <p className="text-muted-foreground">Loading your dashboard...</p>
  //       </div>
  //     </div>
  //   );
  // }

  // if (!isAuthenticated || !user) {
  //   return null;
  // }

  // Mock data for dashboard (replace with actual API calls)
  const stats = [
    {
      label: "Events Attended",
      value: "12",
      icon: Calendar,
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      label: "Projects Joined",
      value: "3",
      icon: Code,
      color: "text-secondary",
      bgColor: "bg-secondary/10",
    },
    {
      label: "DSEC Coins",
      value: "450",
      icon: Coins,
      color: "text-lime",
      bgColor: "bg-lime/10",
    },
    {
      label: "Contributions",
      value: "28",
      icon: Github,
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
  ];

  const upcomingEvents = [
    {
      id: "1",
      title: "Web Development Workshop",
      date: "Jan 28, 2025",
      time: "6:00 PM",
      location: "Burwood Campus",
      type: "Workshop",
    },
    {
      id: "2",
      title: "Industry Panel: Career in Tech",
      date: "Feb 2, 2025",
      time: "5:30 PM",
      location: "Online",
      type: "Panel",
    },
    {
      id: "3",
      title: "Hackathon Kickoff",
      date: "Feb 15, 2025",
      time: "9:00 AM",
      location: "Burwood Campus",
      type: "Hackathon",
    },
  ];

  const activeProjects = [
    {
      id: "1",
      name: "DSEC Website",
      description: "Club website redesign",
      role: "Frontend Developer",
      progress: 75,
      contributors: 8,
    },
    {
      id: "2",
      name: "Event Manager",
      description: "Internal event management tool",
      role: "Backend Developer",
      progress: 45,
      contributors: 5,
    },
  ];

  const recentActivity = [
    {
      type: "event",
      message: "Registered for Web Development Workshop",
      time: "2 hours ago",
    },
    {
      type: "project",
      message: "Merged PR #42 in DSEC Website",
      time: "1 day ago",
    },
    {
      type: "coins",
      message: "Earned 50 coins for event attendance",
      time: "3 days ago",
    },
    {
      type: "badge",
      message: "Unlocked 'First Contribution' badge",
      time: "1 week ago",
    },
  ];

  // Request Services options (member-only)
  const requestServices = [
    {
      id: "workshop",
      title: "Request a Workshop",
      description: "Request a specific topic for our next workshop",
      icon: GraduationCap,
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      id: "guide",
      title: "Request a Guide",
      description: "Ask for a detailed guide on a technical topic",
      icon: BookOpen,
      color: "text-secondary",
      bgColor: "bg-secondary/10",
    },
    {
      id: "sponsorship",
      title: "Project Sponsorship",
      description: "Get support for your project from DSEC",
      icon: HandHelping,
      color: "text-lime",
      bgColor: "bg-lime/10",
    },
    {
      id: "course-help",
      title: "Course Help",
      description: "Get assistance with your university courses",
      icon: Lightbulb,
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
  ];

  // Workshop Recordings / Courses (member-only)
  const workshopRecordings = [
    {
      id: "1",
      title: "Introduction to React",
      committee: "Web Development",
      duration: "2h 15m",
      thumbnail: "/workshops/react-intro.jpg",
      date: "Jan 15, 2025",
    },
    {
      id: "2",
      title: "Python for Data Science",
      committee: "Data Science",
      duration: "1h 45m",
      thumbnail: "/workshops/python-ds.jpg",
      date: "Jan 10, 2025",
    },
    {
      id: "3",
      title: "Cybersecurity Fundamentals",
      committee: "Cybersecurity",
      duration: "2h 30m",
      thumbnail: "/workshops/cybersec.jpg",
      date: "Jan 5, 2025",
    },
  ];

  // Resources
  const resources = [
    {
      id: "1",
      title: "Git & GitHub Cheat Sheet",
      type: "PDF",
      category: "Development",
      downloads: 234,
    },
    {
      id: "2",
      title: "Interview Prep Guide",
      type: "Document",
      category: "Career",
      downloads: 189,
    },
    {
      id: "3",
      title: "AWS Cloud Basics Slides",
      type: "Slides",
      category: "Cloud",
      downloads: 156,
    },
    {
      id: "4",
      title: "Design Patterns in JavaScript",
      type: "Code",
      category: "Development",
      downloads: 142,
    },
  ];

  // Recommended News Articles
  const newsArticles = [
    {
      id: "1",
      title: "The Rise of AI in Software Development",
      source: "TechCrunch",
      readTime: "5 min read",
      category: "AI",
    },
    {
      id: "2",
      title: "Understanding Zero-Trust Security",
      source: "Wired",
      readTime: "8 min read",
      category: "Security",
    },
    {
      id: "3",
      title: "Web Development Trends for 2025",
      source: "Dev.to",
      readTime: "6 min read",
      category: "Web Dev",
    },
  ];

  // Gallery Images
  const galleryImages = [
    { id: "1", title: "Hackathon 2024", thumbnail: "/gallery/hackathon.jpg" },
    { id: "2", title: "Workshop Night", thumbnail: "/gallery/workshop.jpg" },
    { id: "3", title: "Industry Panel", thumbnail: "/gallery/panel.jpg" },
    { id: "4", title: "Team Building", thumbnail: "/gallery/team.jpg" },
    { id: "5", title: "Awards Night", thumbnail: "/gallery/awards.jpg" },
    { id: "6", title: "Networking Event", thumbnail: "/gallery/networking.jpg" },
  ];

  // Melbourne Tech Events
  const melbourneEvents = [
    {
      id: "1",
      title: "Melbourne Tech Meetup",
      date: "Feb 5, 2025",
      location: "Federation Square",
      organizer: "Tech Melbourne",
    },
    {
      id: "2",
      title: "AWS User Group Melbourne",
      date: "Feb 12, 2025",
      location: "Docklands",
      organizer: "AWS Community",
    },
    {
      id: "3",
      title: "StartupVic Pitch Night",
      date: "Feb 20, 2025",
      location: "CBD",
      organizer: "StartupVic",
    },
  ];

  const isMember = user?.membershipType === "member";
  const displayName = user?.preferredName || user?.name?.split(" ")[0] || "Guest";

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8"
          >
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-space-grotesk)]">
                Welcome back, <span className="gradient-text">{displayName}</span>
              </h1>
              <p className="text-muted-foreground mt-2">
                Here&apos;s what&apos;s happening with your DSEC journey
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Link
                href="/dashboard/notifications"
                className="p-2 rounded-lg bg-card border border-border hover:bg-muted/50 transition-colors relative"
              >
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-primary text-[10px] text-white rounded-full flex items-center justify-center">
                  3
                </span>
              </Link>
              <Link
                href="/dashboard/settings"
                className="p-2 rounded-lg bg-card border border-border hover:bg-muted/50 transition-colors"
              >
                <Settings className="w-5 h-5" />
              </Link>
              <button
                onClick={handleSignOut}
                disabled={isSigningOut}
                className="p-2 rounded-lg bg-card border border-border hover:bg-red-500/10 hover:border-red-500/50 hover:text-red-500 transition-colors disabled:opacity-50"
              >
                <LogOut className="w-5 h-5" />
              </button>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
          >
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="bg-card border border-border rounded-xl p-4 sm:p-6"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                    <stat.icon className={`w-5 h-5 ${stat.color}`} />
                  </div>
                </div>
                <p className="text-2xl sm:text-3xl font-bold font-[family-name:var(--font-space-grotesk)]">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Upcoming Events */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-2 bg-card border border-border rounded-xl p-6"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold font-[family-name:var(--font-space-grotesk)]">
                  Upcoming Events
                </h2>
                <Link
                  href="/events"
                  className="text-sm text-primary hover:text-primary/80 flex items-center gap-1 transition-colors"
                >
                  View all <ChevronRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="space-y-4">
                {upcomingEvents.map((event) => (
                  <div
                    key={event.id}
                    className="flex items-center gap-4 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium truncate">{event.title}</h3>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {event.date} at {event.time}
                        </span>
                        <span className="hidden sm:inline">{event.location}</span>
                      </div>
                    </div>
                    <span className="hidden sm:inline-flex px-3 py-1 text-xs rounded-full bg-secondary/10 text-secondary">
                      {event.type}
                    </span>
                    <Link
                      href={`/events/${event.id}`}
                      className="p-2 rounded-lg hover:bg-muted transition-colors"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-card border border-border rounded-xl p-6"
            >
              <h2 className="text-xl font-semibold mb-6 font-[family-name:var(--font-space-grotesk)]">
                Quick Actions
              </h2>

              <div className="space-y-3">
                <Link
                  href="/projects"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Target className="w-5 h-5 text-primary" />
                  </div>
                  <span className="flex-1">Browse Projects</span>
                  <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                </Link>

                <Link
                  href="/events"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-secondary/10">
                    <Calendar className="w-5 h-5 text-secondary" />
                  </div>
                  <span className="flex-1">Register for Events</span>
                  <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                </Link>

                <Link
                  href="/dashboard/profile"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-lime/10">
                    <Users className="w-5 h-5 text-lime" />
                  </div>
                  <span className="flex-1">Edit Profile</span>
                  <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                </Link>

                <Link
                  href="/dashboard/rewards"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-accent/10">
                    <Coins className="w-5 h-5 text-accent" />
                  </div>
                  <span className="flex-1">View Rewards</span>
                  <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                </Link>
              </div>
            </motion.div>

            {/* Active Projects */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="lg:col-span-2 bg-card border border-border rounded-xl p-6"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold font-[family-name:var(--font-space-grotesk)]">
                  Your Projects
                </h2>
                <Link
                  href="/projects"
                  className="text-sm text-primary hover:text-primary/80 flex items-center gap-1 transition-colors"
                >
                  View all <ChevronRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="space-y-4">
                {activeProjects.map((project) => (
                  <div
                    key={project.id}
                    className="p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-medium">{project.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {project.description}
                        </p>
                      </div>
                      <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                        {project.role}
                      </span>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="flex-1">
                        <div className="flex items-center justify-between text-sm mb-1">
                          <span className="text-muted-foreground">Progress</span>
                          <span className="font-medium">{project.progress}%</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <div
                            className="h-full bg-primary rounded-full transition-all"
                            style={{ width: `${project.progress}%` }}
                          />
                        </div>
                      </div>

                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Users className="w-4 h-4" />
                        <span>{project.contributors}</span>
                      </div>

                      <Link
                        href={`/projects/${project.id}`}
                        className="p-2 rounded-lg hover:bg-muted transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                ))}

                {activeProjects.length === 0 && (
                  <div className="text-center py-8">
                    <Code className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground mb-4">
                      You haven&apos;t joined any projects yet
                    </p>
                    <Link
                      href="/projects"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                    >
                      Browse Projects <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                )}
              </div>
            </motion.div>

            {/* Recent Activity */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-card border border-border rounded-xl p-6"
            >
              <h2 className="text-xl font-semibold mb-6 font-[family-name:var(--font-space-grotesk)]">
                Recent Activity
              </h2>

              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 pb-4 border-b border-border last:border-0 last:pb-0"
                  >
                    <div
                      className={`p-2 rounded-lg ${
                        activity.type === "event"
                          ? "bg-primary/10"
                          : activity.type === "project"
                          ? "bg-secondary/10"
                          : activity.type === "coins"
                          ? "bg-lime/10"
                          : "bg-accent/10"
                      }`}
                    >
                      {activity.type === "event" ? (
                        <Calendar className="w-4 h-4 text-primary" />
                      ) : activity.type === "project" ? (
                        <Github className="w-4 h-4 text-secondary" />
                      ) : activity.type === "coins" ? (
                        <Coins className="w-4 h-4 text-lime" />
                      ) : (
                        <Star className="w-4 h-4 text-accent" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm">{activity.message}</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {activity.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Member Card Preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-8 bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20 border border-border rounded-xl p-6 sm:p-8"
          >
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-2xl font-bold font-[family-name:var(--font-space-grotesk)]">
                {displayName.charAt(0).toUpperCase()}
              </div>

              <div className="text-center sm:text-left flex-1">
                <h3 className="text-xl font-semibold font-[family-name:var(--font-space-grotesk)]">
                  {user?.name || "Guest User"}
                </h3>
                <p className="text-muted-foreground">{user?.email || "Not logged in"}</p>
                <div className="flex items-center justify-center sm:justify-start gap-4 mt-2">
                  <span className="text-sm px-3 py-1 rounded-full bg-secondary/20 text-secondary">
                    {user?.membershipType === "member" ? "Club Member" : "Browser"}
                  </span>
                  {user?.studentStatus === "deakin" && (
                    <span className="text-sm px-3 py-1 rounded-full bg-primary/20 text-primary">
                      Deakin Student
                    </span>
                  )}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/dashboard/profile"
                  className="px-4 py-2 bg-card border border-border rounded-lg hover:bg-muted/50 transition-colors text-center"
                >
                  Edit Profile
                </Link>
                <Link
                  href="/dashboard/card"
                  className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-center"
                >
                  View Member Card
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Request Services Section - Member Only */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-8 bg-card border border-border rounded-xl p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <h2 className="text-xl font-semibold font-[family-name:var(--font-space-grotesk)]">
                  Request Services
                </h2>
                <span className="flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-accent/20 text-accent">
                  <Lock className="w-3 h-3" />
                  Members Only
                </span>
              </div>
            </div>

            {isMember ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {requestServices.map((service) => (
                  <Link
                    key={service.id}
                    href={`/dashboard/request/${service.id}`}
                    className="p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors group"
                  >
                    <div className={`p-3 rounded-lg ${service.bgColor} w-fit mb-3`}>
                      <service.icon className={`w-6 h-6 ${service.color}`} />
                    </div>
                    <h3 className="font-medium mb-1 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {service.description}
                    </p>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 bg-muted/20 rounded-lg border border-dashed border-border">
                <Lock className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground mb-4">
                  Become a member to request workshops, guides, sponsorships, and course help
                </p>
                <Link
                  href="/join"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                >
                  <Sparkles className="w-4 h-4" />
                  Become a Member
                </Link>
              </div>
            )}
          </motion.div>

          {/* Workshop Recordings & Courses - Member Only */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-8 bg-card border border-border rounded-xl p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <h2 className="text-xl font-semibold font-[family-name:var(--font-space-grotesk)]">
                  Workshop Recordings & Courses
                </h2>
                <span className="flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-accent/20 text-accent">
                  <Lock className="w-3 h-3" />
                  Members Only
                </span>
              </div>
              {isMember && (
                <Link
                  href="/dashboard/recordings"
                  className="text-sm text-primary hover:text-primary/80 flex items-center gap-1 transition-colors"
                >
                  View all <ChevronRight className="w-4 h-4" />
                </Link>
              )}
            </div>

            {isMember ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {workshopRecordings.map((recording) => (
                  <Link
                    key={recording.id}
                    href={`/dashboard/recordings/${recording.id}`}
                    className="group rounded-lg overflow-hidden bg-muted/30 hover:bg-muted/50 transition-colors"
                  >
                    <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center relative">
                      <PlayCircle className="w-12 h-12 text-white/80 group-hover:text-white group-hover:scale-110 transition-all" />
                      <span className="absolute bottom-2 right-2 text-xs bg-black/70 text-white px-2 py-1 rounded">
                        {recording.duration}
                      </span>
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium mb-1 group-hover:text-primary transition-colors">
                        {recording.title}
                      </h3>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <span>{recording.committee}</span>
                        <span>{recording.date}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 bg-muted/20 rounded-lg border border-dashed border-border">
                <Video className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground mb-4">
                  Access workshop recordings from all our committees as a member
                </p>
                <Link
                  href="/join"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                >
                  <Sparkles className="w-4 h-4" />
                  Become a Member
                </Link>
              </div>
            )}
          </motion.div>

          {/* Resources Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="mt-8 bg-card border border-border rounded-xl p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold font-[family-name:var(--font-space-grotesk)]">
                Resources
              </h2>
              <Link
                href="/resources"
                className="text-sm text-primary hover:text-primary/80 flex items-center gap-1 transition-colors"
              >
                Browse all <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {resources.map((resource) => (
                <Link
                  key={resource.id}
                  href={`/resources/${resource.id}`}
                  className="flex items-start gap-3 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-secondary/10 flex-shrink-0">
                    <FolderOpen className="w-5 h-5 text-secondary" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-medium text-sm mb-1 truncate group-hover:text-primary transition-colors">
                      {resource.title}
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span className="px-2 py-0.5 rounded bg-muted">
                        {resource.type}
                      </span>
                      <span>{resource.downloads} downloads</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Two Column Section: News Articles & Melbourne Events */}
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Recommended News Articles */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
              className="bg-card border border-border rounded-xl p-6"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold font-[family-name:var(--font-space-grotesk)]">
                  Recommended Reading
                </h2>
                <Link
                  href="/news"
                  className="text-sm text-primary hover:text-primary/80 flex items-center gap-1 transition-colors"
                >
                  More articles <ChevronRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="space-y-4">
                {newsArticles.map((article) => (
                  <Link
                    key={article.id}
                    href={`/news/${article.id}`}
                    className="flex items-start gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-coral/10 flex-shrink-0">
                      <Newspaper className="w-5 h-5 text-coral" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-sm mb-1 group-hover:text-primary transition-colors">
                        {article.title}
                      </h3>
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <span>{article.source}</span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {article.readTime}
                        </span>
                        <span className="px-2 py-0.5 rounded bg-muted">
                          {article.category}
                        </span>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors flex-shrink-0" />
                  </Link>
                ))}
              </div>
            </motion.div>

            {/* Melbourne Events */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="bg-card border border-border rounded-xl p-6"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <h2 className="text-xl font-semibold font-[family-name:var(--font-space-grotesk)]">
                    Events in Melbourne
                  </h2>
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <Link
                  href="/melbourne-events"
                  className="text-sm text-primary hover:text-primary/80 flex items-center gap-1 transition-colors"
                >
                  View all <ChevronRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="space-y-4">
                {melbourneEvents.map((event) => (
                  <div
                    key={event.id}
                    className="flex items-start gap-4 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
                  >
                    <div className="p-2 rounded-lg bg-lime/10 flex-shrink-0">
                      <Calendar className="w-5 h-5 text-lime" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-sm mb-1">{event.title}</h3>
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {event.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {event.location}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">
                        by {event.organizer}
                      </p>
                    </div>
                    <Link
                      href={`/melbourne-events/${event.id}`}
                      className="p-2 rounded-lg hover:bg-muted transition-colors flex-shrink-0"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Link>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Gallery Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="mt-8 bg-card border border-border rounded-xl p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-semibold font-[family-name:var(--font-space-grotesk)]">
                  Gallery
                </h2>
                <Image className="w-5 h-5 text-secondary" />
              </div>
              <Link
                href="/gallery"
                className="text-sm text-primary hover:text-primary/80 flex items-center gap-1 transition-colors"
              >
                View all photos <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {galleryImages.map((image) => (
                <Link
                  key={image.id}
                  href={`/gallery/${image.id}`}
                  className="group relative aspect-square rounded-lg overflow-hidden bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20"
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Image className="w-8 h-8 text-white/50" />
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors flex items-end justify-center">
                    <span className="text-white text-xs font-medium p-2 opacity-0 group-hover:opacity-100 transition-opacity text-center">
                      {image.title}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
