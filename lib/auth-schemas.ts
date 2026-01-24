import { z } from "zod";

/**
 * Authentication Validation Schemas
 *
 * These schemas are used for form validation with react-hook-form
 * and provide comprehensive validation for all auth forms.
 */

/**
 * Password validation schema with strength requirements
 */
const passwordSchema = z
  .string()
  .min(8, "Password must be at least 8 characters")
  .max(128, "Password must be less than 128 characters")
  .refine(
    (password) => /[A-Z]/.test(password),
    "Password must contain at least one uppercase letter"
  )
  .refine(
    (password) => /[a-z]/.test(password),
    "Password must contain at least one lowercase letter"
  )
  .refine(
    (password) => /[0-9]/.test(password),
    "Password must contain at least one number"
  )
  .refine(
    (password) => /[!@#$%^&*(),.?":{}|<>]/.test(password),
    "Password must contain at least one special character"
  );

/**
 * Simple password schema for login (just length check)
 */
const simplePasswordSchema = z
  .string()
  .min(8, "Password must be at least 8 characters");

/**
 * Email validation schema
 */
const emailSchema = z
  .string()
  .min(1, "Email is required")
  .email("Please enter a valid email address")
  .max(255, "Email must be less than 255 characters");

/**
 * Login Form Schema
 */
export const loginSchema = z.object({
  email: emailSchema,
  password: simplePasswordSchema,
  rememberMe: z.boolean().optional(),
});

export type LoginFormData = z.infer<typeof loginSchema>;

/**
 * Sign Up Form Schema (Step 1 - Email/Password)
 */
export const signUpCredentialsSchema = z
  .object({
    email: emailSchema,
    password: passwordSchema,
    confirmPassword: z.string().min(1, "Please confirm your password"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export type SignUpCredentialsData = z.infer<typeof signUpCredentialsSchema>;

/**
 * Profile Completion Schema (Join Page Step 4)
 */
export const profileSchema = z.object({
  fullName: z
    .string()
    .min(2, "Full name must be at least 2 characters")
    .max(100, "Full name must be less than 100 characters")
    .regex(
      /^[a-zA-Z\s'-]+$/,
      "Name can only contain letters, spaces, hyphens, and apostrophes"
    ),
  preferredName: z
    .string()
    .max(50, "Preferred name must be less than 50 characters")
    .optional()
    .or(z.literal("")),
  email: emailSchema,
  password: passwordSchema.optional(),
  confirmPassword: z.string().optional(),
  studentId: z
    .string()
    .regex(/^\d{8,10}$/, "Student ID must be 8-10 digits")
    .optional()
    .or(z.literal("")),
  degree: z
    .string()
    .max(100, "Degree must be less than 100 characters")
    .optional()
    .or(z.literal("")),
  yearLevel: z
    .enum(["1", "2", "3", "4", "postgrad", "other", ""])
    .optional(),
  linkedinUrl: z
    .string()
    .url("Please enter a valid URL")
    .regex(
      /^https?:\/\/(www\.)?linkedin\.com\/in\/.+$/,
      "Please enter a valid LinkedIn profile URL"
    )
    .optional()
    .or(z.literal("")),
  githubUsername: z
    .string()
    .regex(
      /^[a-zA-Z0-9](?:[a-zA-Z0-9]|-(?=[a-zA-Z0-9])){0,38}$/,
      "Please enter a valid GitHub username"
    )
    .optional()
    .or(z.literal("")),
  wantUpdates: z.boolean().optional(),
  wantProjectTeam: z.boolean().optional(),
});

export type ProfileFormData = z.infer<typeof profileSchema>;

/**
 * Full Sign Up Schema (combines credentials and profile)
 */
export const fullSignUpSchema = profileSchema
  .extend({
    password: passwordSchema,
    confirmPassword: z.string().min(1, "Please confirm your password"),
    studentStatus: z.enum(["deakin", "external"]),
    campus: z.enum(["burwood", "waurn-ponds", "waterfront", "online"]).optional(),
    membershipType: z.enum(["member", "browsing"]),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  })
  .refine(
    (data) => {
      // If Deakin student, campus is required
      if (data.studentStatus === "deakin" && !data.campus) {
        return false;
      }
      return true;
    },
    {
      message: "Please select your campus",
      path: ["campus"],
    }
  );

export type FullSignUpData = z.infer<typeof fullSignUpSchema>;

/**
 * Forgot Password Schema
 */
export const forgotPasswordSchema = z.object({
  email: emailSchema,
});

export type ForgotPasswordData = z.infer<typeof forgotPasswordSchema>;

/**
 * Reset Password Schema
 */
export const resetPasswordSchema = z
  .object({
    password: passwordSchema,
    confirmPassword: z.string().min(1, "Please confirm your password"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export type ResetPasswordData = z.infer<typeof resetPasswordSchema>;

/**
 * Update Profile Schema
 */
export const updateProfileSchema = z.object({
  fullName: z
    .string()
    .min(2, "Full name must be at least 2 characters")
    .max(100, "Full name must be less than 100 characters")
    .optional(),
  preferredName: z
    .string()
    .max(50, "Preferred name must be less than 50 characters")
    .optional()
    .or(z.literal("")),
  degree: z
    .string()
    .max(100, "Degree must be less than 100 characters")
    .optional()
    .or(z.literal("")),
  yearLevel: z
    .enum(["1", "2", "3", "4", "postgrad", "other", ""])
    .optional(),
  linkedinUrl: z
    .string()
    .url("Please enter a valid URL")
    .optional()
    .or(z.literal("")),
  githubUsername: z
    .string()
    .regex(
      /^[a-zA-Z0-9](?:[a-zA-Z0-9]|-(?=[a-zA-Z0-9])){0,38}$/,
      "Please enter a valid GitHub username"
    )
    .optional()
    .or(z.literal("")),
  wantUpdates: z.boolean().optional(),
  wantProjectTeam: z.boolean().optional(),
});

export type UpdateProfileData = z.infer<typeof updateProfileSchema>;

/**
 * Change Password Schema
 */
export const changePasswordSchema = z
  .object({
    currentPassword: z.string().min(1, "Current password is required"),
    newPassword: passwordSchema,
    confirmNewPassword: z.string().min(1, "Please confirm your new password"),
  })
  .refine((data) => data.newPassword === data.confirmNewPassword, {
    message: "Passwords don't match",
    path: ["confirmNewPassword"],
  })
  .refine((data) => data.currentPassword !== data.newPassword, {
    message: "New password must be different from current password",
    path: ["newPassword"],
  });

export type ChangePasswordData = z.infer<typeof changePasswordSchema>;

/**
 * Helper function to get password strength
 */
export function getPasswordStrength(password: string): {
  score: number;
  label: string;
  color: string;
} {
  let score = 0;

  if (password.length >= 8) score++;
  if (password.length >= 12) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[a-z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) score++;

  if (score <= 2) {
    return { score, label: "Weak", color: "text-red-500" };
  } else if (score <= 4) {
    return { score, label: "Medium", color: "text-yellow-500" };
  } else {
    return { score, label: "Strong", color: "text-green-500" };
  }
}

/**
 * Password requirements for display
 */
export const passwordRequirements = [
  { regex: /.{8,}/, label: "At least 8 characters" },
  { regex: /[A-Z]/, label: "One uppercase letter" },
  { regex: /[a-z]/, label: "One lowercase letter" },
  { regex: /[0-9]/, label: "One number" },
  { regex: /[!@#$%^&*(),.?":{}|<>]/, label: "One special character" },
];
