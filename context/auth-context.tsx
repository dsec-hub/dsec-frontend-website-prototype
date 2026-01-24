"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  type ReactNode,
} from "react";
import { useSession, handleSignOut } from "@/lib/auth-client";
import { useRouter, usePathname } from "next/navigation";

/**
 * User type from Better Auth session
 */
export interface AuthUser {
  id: string;
  name: string;
  email: string;
  emailVerified: boolean;
  image?: string;
  createdAt: Date;
  updatedAt: Date;
  // Custom fields
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

/**
 * Auth Context Type
 */
interface AuthContextType {
  user: AuthUser | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  error: Error | null;
  signOut: () => Promise<void>;
  refreshSession: () => Promise<void>;
}

/**
 * Auth Context
 */
const AuthContext = createContext<AuthContextType | undefined>(undefined);

/**
 * Auth Provider Props
 */
interface AuthProviderProps {
  children: ReactNode;
}

/**
 * Auth Provider Component
 *
 * Wraps the application and provides authentication state
 * to all child components.
 */
export function AuthProvider({ children }: AuthProviderProps) {
  const { data: session, isPending, error: sessionError } = useSession();
  const [error, setError] = useState<Error | null>(null);
  const router = useRouter();
  const pathname = usePathname();

  // Derive authentication state from session
  const user = session?.user as AuthUser | null;
  const isAuthenticated = !!user;
  const isLoading = isPending;

  // Handle session errors
  useEffect(() => {
    if (sessionError) {
      setError(sessionError instanceof Error ? sessionError : new Error("Session error"));
    } else {
      setError(null);
    }
  }, [sessionError]);

  /**
   * Sign out and redirect to home
   */
  const signOut = useCallback(async () => {
    try {
      await handleSignOut();
      router.push("/");
    } catch (err) {
      setError(err instanceof Error ? err : new Error("Failed to sign out"));
    }
  }, [router]);

  /**
   * Refresh the session
   */
  const refreshSession = useCallback(async () => {
    // The session will automatically refresh via useSession
    router.refresh();
  }, [router]);

  const value: AuthContextType = {
    user,
    isLoading,
    isAuthenticated,
    error,
    signOut,
    refreshSession,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

/**
 * Hook to access auth context
 *
 * @throws Error if used outside of AuthProvider
 */
export function useAuth() {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
}

/**
 * Hook for protected pages
 *
 * Automatically redirects to login if not authenticated
 */
export function useRequireAuth(redirectTo = "/auth/login") {
  const { user, isLoading, isAuthenticated } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      const callbackUrl = encodeURIComponent(pathname);
      router.push(`${redirectTo}?callbackUrl=${callbackUrl}`);
    }
  }, [isLoading, isAuthenticated, router, redirectTo, pathname]);

  return { user, isLoading, isAuthenticated };
}

/**
 * Hook for guest-only pages (login, signup)
 *
 * Automatically redirects to dashboard if authenticated
 */
export function useRequireGuest(redirectTo = "/dashboard") {
  const { user, isLoading, isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && isAuthenticated) {
      router.push(redirectTo);
    }
  }, [isLoading, isAuthenticated, router, redirectTo]);

  return { user, isLoading, isAuthenticated };
}
