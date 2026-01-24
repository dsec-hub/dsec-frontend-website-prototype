import { createAuthClient } from "better-auth/react";

/**
 * Better Auth Client Configuration
 *
 * This creates a client-side auth instance that can be used
 * throughout the application for authentication operations.
 */
export const authClient = createAuthClient({
  /**
   * Base URL for auth API endpoints
   * In development, this points to localhost
   * In production, this should be your actual domain
   */
  baseURL: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
});

/**
 * Export commonly used auth methods for convenience
 */
export const {
  signIn,
  signUp,
  signOut,
  useSession,
  getSession,
} = authClient;

/**
 * Social Sign In Helpers
 */
export const signInWithGoogle = () => {
  return authClient.signIn.social({
    provider: "google",
    callbackURL: "/dashboard",
  });
};

export const signInWithGitHub = () => {
  return authClient.signIn.social({
    provider: "github",
    callbackURL: "/dashboard",
  });
};

/**
 * Email/Password Sign In
 */
export const signInWithEmail = async (email: string, password: string, rememberMe?: boolean) => {
  return authClient.signIn.email({
    email,
    password,
    callbackURL: "/dashboard",
    rememberMe,
  });
};

/**
 * Email/Password Sign Up
 */
export const signUpWithEmail = async (
  email: string,
  password: string,
  name: string,
  additionalData?: {
    studentStatus?: string;
    campus?: string;
    membershipType?: string;
    preferredName?: string;
    studentId?: string;
    degree?: string;
    yearLevel?: string;
    linkedinUrl?: string;
    githubUsername?: string;
    wantUpdates?: boolean;
    wantProjectTeam?: boolean;
  }
) => {
  return authClient.signUp.email({
    email,
    password,
    name,
    callbackURL: "/dashboard",
    ...additionalData,
  });
};

/**
 * Sign Out
 */
export const handleSignOut = async () => {
  return authClient.signOut({
    fetchOptions: {
      onSuccess: () => {
        window.location.href = "/";
      },
    },
  });
};
