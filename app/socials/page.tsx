import type { Metadata } from "next";
import Link from "next/link";
import {
  DiscordIcon,
  LinkedInIcon,
  InstagramIcon,
  FacebookIcon,
  GitHubIcon,
  MailIcon,
  ArrowRightIcon,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Connect With Us | DSEC",
  description:
    "Find all DSEC social media links, contact emails, and explore our website. Join our community on Discord, follow us on Instagram, LinkedIn, and more.",
  openGraph: {
    title: "Connect With Us | DSEC",
    description:
      "Find all DSEC social media links, contact emails, and explore our website.",
    type: "website",
  },
};

interface SocialLinkItem {
  name: string;
  href: string;
  icon: React.ReactNode;
  color: string;
  hoverBg: string;
  description: string;
}

interface EmailItem {
  email: string;
  label: string;
  description: string;
}

interface SitemapSection {
  title: string;
  links: { name: string; href: string }[];
}

const socialLinks: SocialLinkItem[] = [
  {
    name: "Discord",
    href: "https://discord.gg/dsec",
    icon: <DiscordIcon className="w-8 h-8" />,
    color: "from-[#5865F2] to-[#7289DA]",
    hoverBg: "hover:bg-[#5865F2]/20",
    description: "Join our community server",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/company/dsec",
    icon: <LinkedInIcon className="w-8 h-8" />,
    color: "from-[#0A66C2] to-[#0077B5]",
    hoverBg: "hover:bg-[#0A66C2]/20",
    description: "Connect professionally",
  },
  {
    name: "Instagram",
    href: "https://instagram.com/dsec.deakin",
    icon: <InstagramIcon className="w-8 h-8" />,
    color: "from-[#F58529] via-[#DD2A7B] to-[#8134AF]",
    hoverBg: "hover:bg-[#DD2A7B]/20",
    description: "Follow our journey",
  },
  {
    name: "Facebook",
    href: "https://facebook.com/dsec.deakin",
    icon: <FacebookIcon className="w-8 h-8" />,
    color: "from-[#1877F2] to-[#4267B2]",
    hoverBg: "hover:bg-[#1877F2]/20",
    description: "Like our page",
  },
  {
    name: "GitHub",
    href: "https://github.com/dsec-deakin",
    icon: <GitHubIcon className="w-8 h-8" />,
    color: "from-[#6e5494] to-[#24292e]",
    hoverBg: "hover:bg-[#6e5494]/20",
    description: "Explore our projects",
  },
];

const emails: EmailItem[] = [
  {
    email: "deakinsec@gmail.com",
    label: "General",
    description: "General inquiries & questions",
  },
  {
    email: "help@dsec.club",
    label: "Support",
    description: "Get help with memberships",
  },
  {
    email: "contact@dsec.club",
    label: "Contact",
    description: "Business & partnerships",
  },
];

const sitemapSections: SitemapSection[] = [
  {
    title: "Main",
    links: [
      { name: "Home", href: "/" },
      { name: "About Us", href: "/about" },
      { name: "Events", href: "/events" },
      { name: "Projects", href: "/projects" },
    ],
  },
  {
    title: "Get Involved",
    links: [
      { name: "Contact", href: "/contact" },
      { name: "Partnership", href: "/partnership" },
      { name: "Hackathon", href: "/hackathon" },
      { name: "T1 Stall", href: "/stall" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Blog", href: "/blog" },
      { name: "FAQ", href: "/faq" },
      { name: "Search", href: "/search" },
      { name: "Status", href: "/status" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Accessibility", href: "/accessibility" },
    ],
  },
];

export default function SocialsPage(): React.ReactElement {
  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient orbs */}
        <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-20 right-1/4 w-[400px] h-[400px] bg-secondary/20 rounded-full blur-[100px] animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[150px] animate-pulse delay-500" />

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Floating geometric shapes */}
        <div className="absolute top-[15%] left-[10%] w-4 h-4 bg-primary/40 rotate-45 animate-float" />
        <div className="absolute top-[25%] right-[15%] w-6 h-6 border-2 border-secondary/40 rounded-full animate-float delay-300" />
        <div className="absolute bottom-[30%] left-[20%] w-3 h-3 bg-lime/40 animate-float delay-700" />
        <div className="absolute bottom-[20%] right-[10%] w-5 h-5 border-2 border-accent/40 rotate-12 animate-float delay-500" />
        <div className="absolute top-[60%] left-[5%] w-4 h-4 border-2 border-coral/40 rounded-full animate-float delay-200" />
        <div className="absolute top-[40%] right-[8%] w-3 h-3 bg-cyan/40 rotate-45 animate-float delay-600" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 md:py-32">
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Connect With Us
          </div>
          <h1 className="text-5xl md:text-7xl font-grotesk font-bold mb-6">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Let&apos;s Stay
            </span>
            <br />
            <span className="text-foreground">Connected</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
            Find us across the web. Join our community, follow our updates, or
            reach out directly.
          </p>
        </div>

        {/* Social Links Grid */}
        <section className="mb-20">
          <h2 className="text-2xl font-grotesk font-semibold text-foreground mb-8 flex items-center gap-3">
            <span className="w-8 h-[2px] bg-gradient-to-r from-primary to-transparent" />
            Social Platforms
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative p-6 rounded-2xl border border-white/5 bg-card/50 backdrop-blur-sm ${social.hoverBg} transition-all duration-300 hover:border-white/10 hover:scale-[1.02] hover:-translate-y-1`}
              >
                {/* Gradient glow on hover */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${social.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />

                <div className="relative flex items-start gap-4">
                  {/* Icon container with gradient */}
                  <div
                    className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${social.color} flex items-center justify-center text-white shadow-lg`}
                  >
                    {social.icon}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-white transition-colors">
                        {social.name}
                      </h3>
                      <ArrowRightIcon className="w-4 h-4 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {social.description}
                    </p>
                  </div>
                </div>

                {/* Decorative corner */}
                <div
                  className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${social.color} opacity-5 rounded-tr-2xl rounded-bl-[60px]`}
                />
              </a>
            ))}
          </div>
        </section>

        {/* Email Section */}
        <section className="mb-20">
          <h2 className="text-2xl font-grotesk font-semibold text-foreground mb-8 flex items-center gap-3">
            <span className="w-8 h-[2px] bg-gradient-to-r from-secondary to-transparent" />
            Email Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {emails.map((item) => (
              <a
                key={item.email}
                href={`mailto:${item.email}`}
                className="group relative p-6 rounded-2xl border border-white/5 bg-card/50 backdrop-blur-sm hover:bg-secondary/10 transition-all duration-300 hover:border-secondary/30 hover:scale-[1.02]"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center text-secondary mb-4 group-hover:bg-secondary/30 transition-colors">
                  <MailIcon className="w-6 h-6" />
                </div>

                {/* Label badge */}
                <span className="inline-block px-2 py-0.5 rounded-md bg-secondary/10 text-secondary text-xs font-medium mb-2">
                  {item.label}
                </span>

                {/* Email */}
                <h3 className="text-foreground font-mono text-sm md:text-base break-all group-hover:text-secondary transition-colors">
                  {item.email}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm mt-2">
                  {item.description}
                </p>

                {/* Arrow indicator */}
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRightIcon className="w-5 h-5 text-secondary" />
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Sitemap Section */}
        <section>
          <h2 className="text-2xl font-grotesk font-semibold text-foreground mb-8 flex items-center gap-3">
            <span className="w-8 h-[2px] bg-gradient-to-r from-lime to-transparent" />
            Explore Our Site
          </h2>

          {/* Sitemap container with creative design */}
          <div className="relative p-8 rounded-3xl border border-white/5 bg-card/30 backdrop-blur-sm overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-lime/5 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-primary/5 rounded-full blur-[60px] pointer-events-none" />

            <div className="relative grid grid-cols-2 md:grid-cols-4 gap-8">
              {sitemapSections.map((section, sectionIndex) => (
                <div key={section.title} className="space-y-4">
                  {/* Section header */}
                  <div className="flex items-center gap-2">
                    <span
                      className={`w-2 h-2 rounded-full ${
                        sectionIndex === 0
                          ? "bg-primary"
                          : sectionIndex === 1
                            ? "bg-secondary"
                            : sectionIndex === 2
                              ? "bg-lime"
                              : "bg-accent"
                      }`}
                    />
                    <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
                      {section.title}
                    </h3>
                  </div>

                  {/* Links */}
                  <ul className="space-y-2">
                    {section.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="group flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <span className="w-1 h-1 rounded-full bg-muted-foreground/50 group-hover:bg-primary transition-colors" />
                          <span className="text-sm">{link.name}</span>
                          <ArrowRightIcon className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-50 group-hover:translate-x-0 transition-all" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Bottom decoration line */}
            <div className="mt-8 pt-6 border-t border-white/5">
              <div className="flex flex-wrap items-center justify-between gap-4 text-sm text-muted-foreground">
                <p>
                  <span className="text-foreground font-medium">DSEC</span>{" "}
                  &mdash; Deakin Security Club
                </p>
                <p className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-lime animate-pulse" />
                  All systems operational
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">
            Can&apos;t find what you&apos;re looking for?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-white font-medium hover:bg-primary/90 transition-colors"
          >
            Get in Touch
            <ArrowRightIcon className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </main>
  );
}
