import { NextResponse, type NextRequest } from "next/server";

/**
 * Authentication & Security Middleware
 *
 * This middleware handles:
 * 1. Protected route enforcement (redirects unauthenticated users)
 * 2. Auth route guards (redirects authenticated users away from login/join)
 * 3. Open-redirect prevention on callbackUrl parameters
 * 4. Auth endpoint rate-limit signaling headers
 */

// Routes that require authentication
const protectedRoutes = ["/dashboard", "/profile", "/settings"];

// Auth routes that should redirect to dashboard if already logged in
const authRoutes = ["/auth/login", "/auth/join"];

// Auth API paths that get stricter rate-limit headers
const authApiPaths = [
  "/api/auth/sign-in",
  "/api/auth/sign-up",
  "/api/auth/sign-out",
  "/api/auth/forgot-password",
  "/api/auth/reset-password",
];

/**
 * Validate that a callback URL is safe (same-origin only).
 * Prevents open-redirect attacks by ensuring the URL is a relative path
 * on the same origin.
 */
function isSafeCallbackUrl(url: string, requestUrl: string): boolean {
  // Must start with / and must not start with // (protocol-relative URL)
  if (!url.startsWith("/") || url.startsWith("//")) {
    return false;
  }

  try {
    const resolved = new URL(url, requestUrl);
    const origin = new URL(requestUrl);
    return resolved.origin === origin.origin;
  } catch {
    return false;
  }
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Get session from cookie
  const sessionCookie = request.cookies.get("better-auth.session_token");
  const isAuthenticated = !!sessionCookie?.value;

  // Check if the current path is a protected route
  const isProtectedRoute = protectedRoutes.some((route) =>
    pathname.startsWith(route)
  );

  // Check if the current path is an auth route
  const isAuthRoute = authRoutes.some((route) => pathname.startsWith(route));

  // Check if this is an auth API endpoint (for rate-limit headers)
  const isAuthApi = authApiPaths.some((p) => pathname.startsWith(p));

  // --- Protected route enforcement ---
  if (isProtectedRoute && !isAuthenticated) {
    const loginUrl = new URL("/auth/login", request.url);
    loginUrl.searchParams.set("callbackUrl", pathname);
    return NextResponse.redirect(loginUrl);
  }

  // --- Auth route guard (redirect logged-in users away) ---
  if (isAuthRoute && isAuthenticated) {
    const rawCallback = request.nextUrl.searchParams.get("callbackUrl");
    let redirectPath = "/dashboard";

    if (rawCallback && isSafeCallbackUrl(rawCallback, request.url)) {
      redirectPath = rawCallback;
    }

    const redirectUrl = new URL(redirectPath, request.url);
    return NextResponse.redirect(redirectUrl);
  }

  const response = NextResponse.next();

  // --- Auth-specific rate-limit signaling ---
  if (isAuthApi) {
    response.headers.set("X-RateLimit-Policy", "auth-strict");
  }

  return response;
}

/**
 * Middleware Configuration
 *
 * Define which routes the middleware should run on.
 * Excludes static files and images for performance.
 */
export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder files (images, etc.)
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
