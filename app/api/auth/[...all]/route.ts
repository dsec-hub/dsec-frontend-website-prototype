import { auth } from "@/lib/auth";
import { toNextJsHandler } from "better-auth/next-js";

/**
 * Better Auth API Route Handler
 *
 * This catch-all route handles all authentication endpoints:
 * - POST /api/auth/sign-in/email - Email sign in
 * - POST /api/auth/sign-up/email - Email sign up
 * - GET /api/auth/sign-in/social - Social OAuth initiation
 * - GET /api/auth/callback/:provider - OAuth callbacks
 * - POST /api/auth/sign-out - Sign out
 * - GET /api/auth/session - Get current session
 * - And more...
 *
 * All routes are automatically handled by Better Auth.
 */
export const { GET, POST } = toNextJsHandler(auth);
