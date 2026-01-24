import { betterAuth } from "better-auth";

/**
 * Better Auth Server Configuration
 *
 * This configuration sets up authentication with:
 * - Email/password authentication
 * - Google OAuth
 * - GitHub OAuth
 *
 * IMPORTANT: This setup is designed for frontend-only authentication.
 * The actual database/user storage is handled by an external API.
 * The `database` option uses a custom adapter pattern that should be
 * connected to your backend API.
 */
export const auth = betterAuth({
  /**
   * Base URL for auth endpoints
   * In production, this should be your actual domain
   */
  baseURL: process.env.BETTER_AUTH_URL || process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",

  /**
   * Secret for signing tokens - MUST be set in production
   */
  secret: process.env.BETTER_AUTH_SECRET,

  /**
   * Email and Password Authentication
   */
  emailAndPassword: {
    enabled: true,
    minPasswordLength: 8,
    maxPasswordLength: 128,
    // Password requirements enforced on client with Zod
    requireEmailVerification: false, // Set to true when email service is configured
  },

  /**
   * Social Authentication Providers
   *
   * Configure these with your OAuth app credentials
   */
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    },
    github: {
      clientId: process.env.GITHUB_CLIENT_ID || "",
      clientSecret: process.env.GITHUB_CLIENT_SECRET || "",
    },
  },

  /**
   * Session Configuration
   */
  session: {
    expiresIn: 60 * 60 * 24 * 7, // 7 days
    updateAge: 60 * 60 * 24, // Update session every 24 hours
    cookieCache: {
      enabled: true,
      maxAge: 60 * 5, // 5 minutes
    },
  },

  /**
   * User Configuration
   */
  user: {
    additionalFields: {
      studentStatus: {
        type: "string",
        required: false,
      },
      campus: {
        type: "string",
        required: false,
      },
      membershipType: {
        type: "string",
        required: false,
      },
      preferredName: {
        type: "string",
        required: false,
      },
      studentId: {
        type: "string",
        required: false,
      },
      degree: {
        type: "string",
        required: false,
      },
      yearLevel: {
        type: "string",
        required: false,
      },
      linkedinUrl: {
        type: "string",
        required: false,
      },
      githubUsername: {
        type: "string",
        required: false,
      },
      wantUpdates: {
        type: "boolean",
        required: false,
      },
      wantProjectTeam: {
        type: "boolean",
        required: false,
      },
    },
  },

  /**
   * Advanced Options
   */
  advanced: {
    // Cross-site cookie settings for OAuth
    crossSubDomainCookies: {
      enabled: false, // Enable if using subdomains
    },
    // Generate secure session tokens
    generateId: () => crypto.randomUUID(),
  },

  /**
   * Trusted Origins for CORS
   */
  trustedOrigins: [
    process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  ],

  /**
   * Rate Limiting
   */
  rateLimit: {
    window: 60, // 1 minute
    max: 100, // 100 requests per window
  },

  /**
   * Database Adapter Placeholder
   *
   * IMPORTANT: This is a placeholder. In production, you'll need to:
   * 1. Connect to your backend API
   * 2. Implement custom database adapter
   * 3. Or use Better Auth's built-in database adapters
   *
   * For now, we're using the memory adapter for development.
   * Replace this with your actual database configuration.
   */
  // database: yourDatabaseAdapter,
});

// Export auth types for use in other files
export type Session = typeof auth.$Infer.Session;
export type User = typeof auth.$Infer.Session.user;
