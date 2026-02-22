import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { db, client } from "@/lib/mongodb";

/**
 * Better Auth Server Configuration
 *
 * This configuration sets up authentication with:
 * - Email/password authentication
 * - Google OAuth
 * - GitHub OAuth
 * - MongoDB for user/session storage
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
   * MongoDB Database Adapter
   *
   * Stores users, sessions, accounts, and verification tokens.
   * Collections are created automatically on first use.
   *
   * Set `transaction: false` if your MongoDB instance is a standalone
   * server without a replica set (e.g. local dev with plain `mongod`).
   */
  database: mongodbAdapter(db, {
    client,
    transaction: false,
  }),

  /**
   * Email and Password Authentication
   */
  emailAndPassword: {
    enabled: true,
    minPasswordLength: 8,
    maxPasswordLength: 128,
    requireEmailVerification: false,
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
    crossSubDomainCookies: {
      enabled: false,
    },
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
    window: 60,
    max: 100,
  },
});

// Export auth types for use in other files
export type Session = typeof auth.$Infer.Session;
export type User = typeof auth.$Infer.Session.user;
