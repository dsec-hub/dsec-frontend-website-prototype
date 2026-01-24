import { NextResponse, type NextRequest } from "next/server";

/**
 * Authentication Middleware
 *
 * This middleware protects routes and handles authentication redirects.
 *
 * Protected Routes:
 * - /dashboard/* - Requires authentication
 * - /profile/* - Requires authentication
 * - /settings/* - Requires authentication
 *
 * Auth Routes (redirect if authenticated):
 * - /auth/login - Redirect to dashboard if logged in
 * - /auth/join - Redirect to dashboard if logged in
 */

// Routes that require authentication
const protectedRoutes = ["/dashboard", "/profile", "/settings"];

// Auth routes that should redirect to dashboard if already logged in
const authRoutes = ["/auth/login", "/auth/join"];

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

  // Redirect unauthenticated users from protected routes to login
  if (isProtectedRoute && !isAuthenticated) {
    const loginUrl = new URL("/auth/login", request.url);
    loginUrl.searchParams.set("callbackUrl", pathname);
    return NextResponse.redirect(loginUrl);
  }

  // Redirect authenticated users from auth routes to dashboard
  if (isAuthRoute && isAuthenticated) {
    const callbackUrl = request.nextUrl.searchParams.get("callbackUrl");
    const redirectUrl = new URL(callbackUrl || "/dashboard", request.url);
    return NextResponse.redirect(redirectUrl);
  }

  return NextResponse.next();
}

/**
 * Middleware Configuration
 *
 * Define which routes the middleware should run on.
 * Excludes API routes, static files, and images.
 */
export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder files (images, etc.)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
