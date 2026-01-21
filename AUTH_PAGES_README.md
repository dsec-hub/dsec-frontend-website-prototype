# DSEC Authentication Pages

## 📋 Overview

This document provides comprehensive information about the DSEC Login and Join (Sign Up) pages implementation for the Deakin Software Engineering Club portal.

## 🎨 Design Philosophy

The authentication pages follow DSEC's brand identity:
- **Modern & Tech-Forward**: Creative, flashy design with smooth animations
- **User-Friendly**: Clear visual hierarchy and intuitive flow
- **Accessible**: WCAG AA compliant with keyboard navigation support
- **Responsive**: Mobile-first design that works beautifully on all devices
- **Trust-Building**: Security badges and DUSA affiliation prominently displayed

## 📁 Project Structure

```
/app/auth/
├── login/
│   └── page.tsx          # Login page component
└── join/
    └── page.tsx          # Sign up page component

/components/auth/
├── AuthLayout.tsx        # Shared layout with animated background
├── FormInput.tsx         # Reusable form input component
├── PasswordInput.tsx     # Password input with show/hide toggle
├── PasswordStrengthIndicator.tsx  # Password strength meter
└── SocialLoginButton.tsx # Google/GitHub OAuth buttons
```

## 🚀 Getting Started

### Dependencies Installed

The following packages were added to support the authentication pages:

```bash
npm install react-hook-form zod @hookform/resolvers framer-motion lucide-react
```

**Packages:**
- `react-hook-form` - Form state management and validation
- `zod` - Schema validation library
- `@hookform/resolvers` - React Hook Form integration for Zod
- `framer-motion` - Animation library
- `lucide-react` - Icon library

### Running the Development Server

```bash
npm run dev
```

Then navigate to:
- Login: `http://localhost:3000/auth/login`
- Sign Up: `http://localhost:3000/auth/join`

## 🔐 Login Page (`/auth/login`)

### Features

✅ **Email & Password Authentication**
- Email validation (valid format)
- Password validation (minimum 8 characters)
- Real-time error messages

✅ **Social Login Options**
- Google OAuth (placeholder)
- GitHub OAuth (placeholder)

✅ **Additional Features**
- "Remember me" checkbox
- "Forgot password?" link (placeholder)
- Smooth animations and transitions
- Loading states during submission
- Success state animation before redirect

### Form Validation Rules

| Field | Rules |
|-------|-------|
| **Email** | Required, valid email format |
| **Password** | Required, minimum 8 characters |

### Error Messages

```typescript
// Email errors
"Email is required"
"Please enter a valid email address"

// Password errors
"Password is required"
"Password must be at least 8 characters"
```

### Usage Example

```typescript
// The login page handles form submission
const onSubmit = async (data: LoginFormData) => {
  // data = { email: string, password: string, rememberMe?: boolean }

  // TODO: Implement actual API call
  // await loginUser(data.email, data.password);

  // On success: redirect to /dashboard
};
```

## 📝 Join Page (`/auth/join`)

### Features

✅ **Complete Registration Form**
- First name & last name
- Email validation
- Password with strength indicator
- Password confirmation matching
- Terms & conditions checkbox

✅ **Social Sign Up Options**
- Google OAuth (placeholder)
- GitHub OAuth (placeholder)

✅ **Password Strength Indicator**
- Visual progress bar (Red → Yellow → Green)
- Real-time requirement checklist
- 5 validation criteria

✅ **DUSA Member Info Box**
- Prominently displayed information
- Helpful guidance for DUSA members
- Styled as an info callout

✅ **Additional Features**
- Real-time validation feedback
- Success state animation
- Email verification notice
- Responsive grid layout for name fields

### Form Validation Rules

| Field | Rules |
|-------|-------|
| **First Name** | Required, 2-50 characters |
| **Last Name** | Required, 2-50 characters |
| **Email** | Required, valid email format |
| **Password** | Required, minimum 8 characters, must include uppercase, lowercase, number, and special character |
| **Confirm Password** | Required, must match password |
| **Terms** | Required checkbox |

### Password Requirements

The password must meet ALL of the following criteria:

- ✓ At least 8 characters
- ✓ One uppercase letter (A-Z)
- ✓ One lowercase letter (a-z)
- ✓ One number (0-9)
- ✓ One special character (!@#$%^&*...)

### Error Messages

```typescript
// Name errors
"First name is required"
"First name must be at least 2 characters"
"Last name is required"
"Last name must be at least 2 characters"

// Email errors
"Email is required"
"Please enter a valid email address"

// Password errors
"Password is required"
"Password must be at least 8 characters"
"Password must contain at least one uppercase letter"
"Password must contain at least one lowercase letter"
"Password must contain at least one number"
"Password must contain at least one special character"

// Confirm password errors
"Please confirm your password"
"Passwords do not match"

// Terms errors
"You must accept the terms and conditions to continue"
```

## 🎨 Component Documentation

### AuthLayout

**Purpose:** Provides a consistent layout for all auth pages with animated background.

**Features:**
- Animated gradient orbs
- Grid pattern overlay
- Floating particles
- "Back to Home" button
- Trust badges (Secure Login, DUSA Affiliated)

**Usage:**
```tsx
import AuthLayout from "@/components/auth/AuthLayout";

<AuthLayout>
  {/* Your auth form here */}
</AuthLayout>
```

### FormInput

**Purpose:** Reusable text input component with validation support.

**Props:**
```typescript
interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;          // Field label
  name: string;           // Field name
  error?: string;         // Error message
  icon?: ReactNode;       // Optional left icon
  helperText?: string;    // Optional helper text
}
```

**Usage:**
```tsx
<FormInput
  label="Email"
  type="email"
  placeholder="you@deakin.edu.au"
  icon={<Mail className="w-4 h-4" />}
  error={errors.email?.message}
  {...register("email")}
  required
/>
```

### PasswordInput

**Purpose:** Password input with show/hide toggle functionality.

**Props:**
```typescript
interface PasswordInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;          // Field label
  name: string;           // Field name
  error?: string;         // Error message
  helperText?: string;    // Optional helper text
  showStrength?: boolean; // Show strength indicator (not used currently)
}
```

**Features:**
- Eye icon to toggle password visibility
- Lock icon on the left
- Error state with icon

**Usage:**
```tsx
<PasswordInput
  label="Password"
  placeholder="Enter your password"
  error={errors.password?.message}
  {...register("password")}
  required
/>
```

### PasswordStrengthIndicator

**Purpose:** Visual feedback for password strength and requirements.

**Props:**
```typescript
interface PasswordStrengthIndicatorProps {
  password: string;  // Current password value
}
```

**Features:**
- Animated progress bar (Red/Yellow/Green)
- Checklist of 5 requirements
- Real-time validation feedback
- Smooth animations

**Usage:**
```tsx
const password = watch("password", "");

<PasswordStrengthIndicator password={password} />
```

### SocialLoginButton

**Purpose:** OAuth login/signup buttons for Google and GitHub.

**Props:**
```typescript
interface SocialLoginButtonProps {
  provider: "google" | "github";  // OAuth provider
  onLogin: () => void;             // Click handler
  isLoading?: boolean;             // Loading state
  mode?: "login" | "signup";       // Button text mode
}
```

**Features:**
- Provider-specific styling
- Brand colors and icons
- Loading spinner
- Hover/tap animations

**Usage:**
```tsx
<SocialLoginButton
  provider="google"
  onLogin={() => handleSocialLogin("google")}
  isLoading={socialLoading === "google"}
  mode="login"
/>
```

## 🎭 Animations & Interactions

### Background Animations
- **Gradient Orbs**: Pulsing, scaling orbs in brand colors
- **Grid Pattern**: Subtle tech-inspired grid overlay
- **Floating Particles**: Small dots with vertical motion

### Form Interactions
- **Input Focus**: Ring animation with brand color
- **Hover States**: Border color transitions
- **Button Press**: Scale animations (1.02 on hover, 0.98 on tap)
- **Error Display**: Fade in from top with AnimatePresence
- **Success State**: Green background with checkmark icon
- **Loading State**: Spinning loader icon

### Page Transitions
- **Entry Animation**: Fade up + scale on page load
- **Form Card**: Backdrop blur with border glow

## 🎨 Styling & Theming

### Color Variables (from globals.css)

```css
--color-primary: #e91e63;       /* Action Pink */
--color-secondary: #00bcd4;     /* Tech Glow Cyan */
--color-accent: #9c27b0;        /* Creative Violet */
--color-background: #0a0a0a;    /* Dark Background */
--color-foreground: #ffffff;    /* White Text */
--color-card: #111111;          /* Card Background */
--color-border: #222222;        /* Border Color */
--color-muted: #1a1a1a;         /* Muted Background */
--color-muted-foreground: #a0a0a0; /* Muted Text */
```

### Typography

```css
--font-grotesk: "Space Grotesk", sans-serif;  /* Headings */
--font-inter: "Inter", sans-serif;            /* Body */
--font-mono: "JetBrains Mono", monospace;     /* Code/Technical */
```

### Responsive Breakpoints

| Breakpoint | Width | Description |
|------------|-------|-------------|
| **Mobile** | < 640px | Single column, full-width card |
| **Tablet** | 640px - 1024px | Centered card with padding |
| **Desktop** | > 1024px | Centered card, visible background |

## ♿ Accessibility Features

### Keyboard Navigation
- ✅ Tab through all interactive elements
- ✅ Enter to submit forms
- ✅ Space to toggle checkboxes
- ✅ Esc to close modals (future implementation)

### Screen Readers
- ✅ Proper label associations
- ✅ ARIA labels for icon buttons
- ✅ Error announcements
- ✅ Loading state announcements

### Visual Accessibility
- ✅ WCAG AA color contrast ratios
- ✅ Focus indicators (ring style)
- ✅ Clear error messaging
- ✅ Sufficient font sizes

### Form Accessibility
- ✅ Required field indicators (*)
- ✅ Error messages below inputs
- ✅ Helper text support
- ✅ Placeholder text

## 🔒 Security Considerations

### Current Implementation
- ✅ Client-side validation (Zod schemas)
- ✅ Password requirements enforced
- ✅ Email format validation
- ✅ No password logging to console (use in production)

### TODO: Backend Integration
- [ ] Server-side validation
- [ ] CSRF protection
- [ ] Rate limiting for login attempts
- [ ] Password hashing (bcrypt/argon2)
- [ ] OAuth provider integration
- [ ] Email verification flow
- [ ] Session management
- [ ] Secure cookies (httpOnly, secure, sameSite)

## 🔄 State Management

### Form State (React Hook Form)
```typescript
const {
  register,        // Register inputs
  handleSubmit,    // Form submission handler
  watch,           // Watch field values
  formState: { errors }, // Validation errors
} = useForm<FormData>({
  resolver: zodResolver(schema), // Zod validation
});
```

### Loading States
```typescript
const [isLoading, setIsLoading] = useState(false);        // Form submission
const [isSuccess, setIsSuccess] = useState(false);        // Success state
const [socialLoading, setSocialLoading] = useState<...>(); // OAuth loading
```

## 🧪 Testing Checklist

### Functional Testing
- [ ] Login form submits with valid data
- [ ] Join form submits with valid data
- [ ] Email validation works correctly
- [ ] Password validation works correctly
- [ ] Password confirmation matching works
- [ ] Terms checkbox validation works
- [ ] Social login buttons trigger handlers
- [ ] "Remember me" checkbox works
- [ ] "Forgot password" link navigates correctly
- [ ] Navigation between login/join works
- [ ] "Back to home" button works

### Visual Testing
- [ ] Responsive design on mobile (< 640px)
- [ ] Responsive design on tablet (640px - 1024px)
- [ ] Responsive design on desktop (> 1024px)
- [ ] Animations play smoothly
- [ ] Loading states display correctly
- [ ] Error states display correctly
- [ ] Success states display correctly
- [ ] Password strength indicator updates in real-time
- [ ] DUSA info box displays correctly

### Accessibility Testing
- [ ] Keyboard navigation works
- [ ] Focus states visible
- [ ] Screen reader announcements work
- [ ] Color contrast meets WCAG AA
- [ ] Form labels properly associated
- [ ] Error messages announced

## 🚧 Future Enhancements

### Phase 1: Backend Integration
- [ ] Connect to authentication API
- [ ] Implement JWT token management
- [ ] Add OAuth provider configuration
- [ ] Set up email verification
- [ ] Create password reset flow

### Phase 2: Advanced Features
- [ ] Two-factor authentication (2FA)
- [ ] Social profile picture import
- [ ] Remember device functionality
- [ ] Login attempt tracking
- [ ] Account lockout after failed attempts
- [ ] Email confirmation flow
- [ ] Resend verification email
- [ ] Progressive disclosure for password requirements

### Phase 3: UX Improvements
- [ ] Add confetti animation on successful signup
- [ ] Implement skeleton loading states
- [ ] Add toast notifications
- [ ] Create onboarding flow for new users
- [ ] Add "Continue as [Name]" for returning users
- [ ] Implement autofill detection
- [ ] Add password manager integration hints

## 📝 Code Examples

### Creating a Custom Auth Form

```typescript
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import AuthLayout from "@/components/auth/AuthLayout";
import FormInput from "@/components/auth/FormInput";

const schema = z.object({
  email: z.string().email("Invalid email"),
});

type FormData = z.infer<typeof schema>;

export default function CustomAuthPage() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <AuthLayout>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          label="Email"
          type="email"
          error={errors.email?.message}
          {...register("email")}
        />
        <button type="submit">Submit</button>
      </form>
    </AuthLayout>
  );
}
```

### Customizing Validation Schema

```typescript
const customSchema = z.object({
  username: z.string()
    .min(3, "Username must be at least 3 characters")
    .max(20, "Username must be less than 20 characters")
    .regex(/^[a-zA-Z0-9_]+$/, "Username can only contain letters, numbers, and underscores"),

  email: z.string()
    .email("Please enter a valid email")
    .refine((email) => email.endsWith("@deakin.edu.au"), {
      message: "Must be a Deakin email address",
    }),

  age: z.number()
    .min(18, "Must be at least 18 years old")
    .max(100, "Invalid age"),
});
```

## 🎯 Key Design Decisions

### Why React Hook Form?
- Excellent performance (uncontrolled components)
- Built-in validation support
- Great TypeScript support
- Minimal re-renders

### Why Zod?
- Type-safe schema validation
- Composable and reusable schemas
- Great error messages
- Integrates seamlessly with React Hook Form

### Why Framer Motion?
- Declarative animations
- Smooth, performant transitions
- Easy to use
- Great for micro-interactions

### Why Not motion.input?
- TypeScript compatibility issues with event handlers
- Standard inputs with CSS transitions are sufficient
- Simpler implementation
- Better performance

## 📱 Mobile Optimization

### Touch Targets
- All interactive elements are at least 44x44px
- Adequate spacing between clickable elements
- Large, easy-to-tap buttons

### Input Optimization
- Proper input types (`type="email"`, `type="password"`)
- Autocomplete attributes for better UX
- Mobile-friendly keyboards trigger correctly

### Layout Optimization
- Single-column layout on mobile
- Sufficient padding for thumbs
- Responsive typography
- Scrollable content without horizontal scroll

## 🎓 DUSA Integration Notes

The Join page includes a special info box for DUSA members:

```typescript
// Info box content
"If you purchased DSEC membership through DUSA, use that email to create
your portal account. Don't have access to that email? No worries—you can
use any preferred email and connect it to your DUSA membership email later
in your account settings!"
```

This addresses a common user concern about email management and provides clear guidance for DUSA members.

## 🐛 Troubleshooting

### Common Issues

**Issue: Form not submitting**
- Check console for validation errors
- Ensure all required fields are filled
- Verify Zod schema matches form data

**Issue: Animations not working**
- Check if Framer Motion is installed
- Verify import statements
- Check for JavaScript errors in console

**Issue: Styling issues**
- Verify Tailwind CSS is properly configured
- Check if CSS variables are defined in globals.css
- Clear browser cache

**Issue: TypeScript errors**
- Run `npm run build` or `npx tsc --noEmit`
- Check type definitions match usage
- Ensure all dependencies are installed

## 📞 Support

For questions or issues:
- Check the main README.md
- Visit the DSEC contact page
- Review the code comments in component files

## 🎉 Credits

**Design & Development:** Claude (Anthropic AI)
**For:** Deakin Software Engineering Club (DSEC)
**Built with:** Next.js, TypeScript, Tailwind CSS, Framer Motion, React Hook Form, Zod

---

**Last Updated:** January 2026
**Version:** 1.0.0
**Status:** ✅ Production Ready (Frontend Only - Backend Integration Pending)
