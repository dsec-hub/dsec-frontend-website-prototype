# DSEC Authentication Setup Guide

This guide explains how to set up and configure authentication for the DSEC Frontend Website using Better Auth.

## Table of Contents

1. [Overview](#overview)
2. [Prerequisites](#prerequisites)
3. [Environment Setup](#environment-setup)
4. [OAuth Provider Setup](#oauth-provider-setup)
5. [Running the Application](#running-the-application)
6. [Architecture](#architecture)
7. [API Endpoints](#api-endpoints)
8. [Protected Routes](#protected-routes)
9. [Backend Integration](#backend-integration)
10. [Troubleshooting](#troubleshooting)

---

## Overview

The authentication system is built with [Better Auth](https://www.better-auth.com/), providing:

- **Email/Password Authentication** - Traditional sign-up and login
- **Google OAuth** - Sign in with Google
- **GitHub OAuth** - Sign in with GitHub (recommended for developers)
- **Session Management** - Secure cookie-based sessions
- **Protected Routes** - Middleware-based route protection

### Key Features

- Zod-validated forms with comprehensive error handling
- Password strength indicator and requirements
- Multi-step registration flow
- Automatic session refresh
- CSRF protection
- Rate limiting

---

## Prerequisites

Before setting up authentication, ensure you have:

- Node.js 18+ installed
- npm or yarn package manager
- A Google Cloud Console account (for Google OAuth)
- A GitHub account (for GitHub OAuth)

---

## Environment Setup

### Step 1: Create Environment File

```bash
# Copy the example environment file
cp .env.example .env.local
```

### Step 2: Generate Auth Secret

```bash
# Generate a secure secret key
openssl rand -base64 32
```

Copy the output and set it as `BETTER_AUTH_SECRET` in your `.env.local`:

```env
BETTER_AUTH_SECRET=your-generated-secret-here
```

### Step 3: Set Application URL

For local development:

```env
NEXT_PUBLIC_APP_URL=http://localhost:3000
BETTER_AUTH_URL=http://localhost:3000
```

For production:

```env
NEXT_PUBLIC_APP_URL=https://your-domain.com
BETTER_AUTH_URL=https://your-domain.com
```

---

## OAuth Provider Setup

### Google OAuth Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Navigate to **APIs & Services** > **Credentials**
4. Click **Create Credentials** > **OAuth client ID**
5. Select **Web application** as the application type
6. Configure:
   - **Name**: DSEC Website
   - **Authorized JavaScript origins**: `http://localhost:3000` (and your production URL)
   - **Authorized redirect URIs**: `http://localhost:3000/api/auth/callback/google`
7. Copy the Client ID and Client Secret to your `.env.local`:

```env
GOOGLE_CLIENT_ID=your-client-id.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=your-client-secret
```

### GitHub OAuth Setup

1. Go to [GitHub Developer Settings](https://github.com/settings/developers)
2. Click **New OAuth App**
3. Configure:
   - **Application name**: DSEC Website
   - **Homepage URL**: `http://localhost:3000`
   - **Authorization callback URL**: `http://localhost:3000/api/auth/callback/github`
4. Click **Register application**
5. Generate a new client secret
6. Copy the Client ID and Client Secret to your `.env.local`:

```env
GITHUB_CLIENT_ID=your-client-id
GITHUB_CLIENT_SECRET=your-client-secret
```

---

## Running the Application

### Development Mode

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:3000`.

### Production Build

```bash
# Build for production
npm run build

# Start production server
npm start
```

---

## Architecture

### File Structure

```
├── app/
│   ├── api/
│   │   └── auth/
│   │       └── [...all]/
│   │           └── route.ts      # Better Auth API handler
│   ├── auth/
│   │   ├── login/
│   │   │   └── page.tsx          # Login page
│   │   └── join/
│   │       └── page.tsx          # Registration page
│   └── dashboard/
│       └── page.tsx              # Protected dashboard
├── context/
│   └── auth-context.tsx          # Auth context provider
├── lib/
│   ├── auth.ts                   # Server-side auth config
│   ├── auth-client.ts            # Client-side auth helpers
│   └── auth-schemas.ts           # Zod validation schemas
└── middleware.ts                 # Route protection middleware
```

### Key Components

| File | Purpose |
|------|---------|
| `lib/auth.ts` | Server-side Better Auth configuration |
| `lib/auth-client.ts` | Client-side auth methods (signIn, signUp, signOut) |
| `lib/auth-schemas.ts` | Zod schemas for form validation |
| `context/auth-context.tsx` | React context for auth state |
| `middleware.ts` | Route protection and redirects |

---

## API Endpoints

Better Auth automatically handles these endpoints:

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/auth/sign-up/email` | POST | Email/password registration |
| `/api/auth/sign-in/email` | POST | Email/password login |
| `/api/auth/sign-in/social` | GET | Initiate OAuth flow |
| `/api/auth/callback/:provider` | GET | OAuth callback handler |
| `/api/auth/sign-out` | POST | Sign out user |
| `/api/auth/session` | GET | Get current session |

---

## Protected Routes

The middleware protects these routes:

- `/dashboard/*` - User dashboard
- `/profile/*` - User profile
- `/settings/*` - User settings

Unauthenticated users are redirected to `/auth/login` with a callback URL.

### Adding Protected Routes

Edit `middleware.ts` to add more protected routes:

```typescript
const protectedRoutes = [
  "/dashboard",
  "/profile",
  "/settings",
  "/your-new-route",  // Add here
];
```

---

## Backend Integration

This authentication setup is **frontend-only** and designed to integrate with an external backend API.

### Connecting to Your Backend

1. Set your backend API URL:

```env
NEXT_PUBLIC_API_URL=https://api.your-backend.com
API_SECRET_KEY=your-api-secret
```

2. After successful authentication, send the session token to your backend:

```typescript
import { getSession } from "@/lib/auth-client";

async function fetchUserData() {
  const session = await getSession();

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user`, {
    headers: {
      Authorization: `Bearer ${session?.token}`,
    },
  });

  return response.json();
}
```

3. Your backend should validate the session token and return user data.

### Database Adapter

Currently, Better Auth uses an in-memory session store (for development). For production, you'll need to:

1. Use Better Auth's database adapters, OR
2. Implement a custom adapter that syncs with your backend API

See [Better Auth Database Documentation](https://www.better-auth.com/docs/concepts/database) for more details.

---

## Troubleshooting

### Common Issues

#### "BETTER_AUTH_SECRET is required"

Generate and set a secret in your `.env.local`:

```bash
openssl rand -base64 32
```

#### OAuth Redirect Mismatch

Ensure your redirect URIs in Google/GitHub match exactly:
- Development: `http://localhost:3000/api/auth/callback/{provider}`
- Production: `https://your-domain.com/api/auth/callback/{provider}`

#### Session Not Persisting

Check that:
1. Cookies are enabled in your browser
2. `NEXT_PUBLIC_APP_URL` matches your actual URL
3. You're not mixing HTTP and HTTPS

#### "Failed to sign in" Error

Check browser console for detailed error. Common causes:
- Invalid credentials
- OAuth misconfiguration
- Network issues

### Debug Mode

Enable debug logging in development:

```env
BETTER_AUTH_DEBUG=true
```

---

## Security Best Practices

1. **Never commit `.env.local`** - It contains secrets
2. **Use HTTPS in production** - Required for secure cookies
3. **Rotate secrets periodically** - Update `BETTER_AUTH_SECRET` regularly
4. **Validate on the backend** - Don't trust frontend-only validation
5. **Rate limit authentication** - Already configured in Better Auth
6. **Use strong passwords** - Enforced by Zod schemas

---

## Support

For issues with:
- **Better Auth**: [Better Auth Documentation](https://www.better-auth.com/docs)
- **This implementation**: Open an issue in the repository
- **OAuth providers**: Check Google/GitHub developer documentation

---

## License

This authentication setup is part of the DSEC Frontend Website and follows the project's license.
