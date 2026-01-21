"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Mail, User, Loader2, CheckCircle2, Info } from "lucide-react";
import Link from "next/link";

import AuthLayout from "@/components/auth/AuthLayout";
import FormInput from "@/components/auth/FormInput";
import PasswordInput from "@/components/auth/PasswordInput";
import SocialLoginButton from "@/components/auth/SocialLoginButton";
import PasswordStrengthIndicator from "@/components/auth/PasswordStrengthIndicator";

// Validation Schema
const signupSchema = z
  .object({
    firstName: z
      .string()
      .min(2, "First name must be at least 2 characters")
      .max(50, "First name must be less than 50 characters"),
    lastName: z
      .string()
      .min(2, "Last name must be at least 2 characters")
      .max(50, "Last name must be less than 50 characters"),
    email: z.string().min(1, "Email is required").email("Please enter a valid email address"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
      .regex(/[a-z]/, "Password must contain at least one lowercase letter")
      .regex(/\d/, "Password must contain at least one number")
      .regex(
        /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/,
        "Password must contain at least one special character"
      ),
    confirmPassword: z.string().min(1, "Please confirm your password"),
    agreeToTerms: z.boolean().refine((val) => val === true, {
      message: "You must accept the terms and conditions to continue",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type SignupFormData = z.infer<typeof signupSchema>;

export default function JoinPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [socialLoading, setSocialLoading] = useState<"google" | "github" | null>(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
  });

  const password = watch("password", "");

  const onSubmit = async (data: SignupFormData) => {
    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log("Signup data:", data);

    // Show success state
    setIsSuccess(true);

    // Simulate redirect to verification page
    setTimeout(() => {
      // In a real app: router.push('/auth/verify-email')
      setIsLoading(false);
      setIsSuccess(false);
    }, 1500);
  };

  const handleSocialSignup = async (provider: "google" | "github") => {
    setSocialLoading(provider);

    // Simulate OAuth flow
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log(`${provider} signup initiated`);
    setSocialLoading(null);
  };

  return (
    <AuthLayout>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="bg-card/80 backdrop-blur-md border border-border rounded-2xl shadow-2xl p-8"
      >
        {/* Logo/Brand */}
        <div className="text-center mb-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-block mb-4"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto">
              <span className="text-2xl font-bold text-white font-[family-name:var(--font-space-grotesk)]">
                DS
              </span>
            </div>
          </motion.div>

          <h1 className="text-3xl font-bold mb-2 font-[family-name:var(--font-space-grotesk)]">
            Join the <span className="gradient-text">DSEC</span> community
          </h1>
          <p className="text-muted-foreground text-sm">
            Access projects, events, and connect with Deakin&apos;s software engineering community
          </p>
        </div>

        {/* Social Signup */}
        <div className="space-y-3 mb-6">
          <SocialLoginButton
            provider="google"
            onLogin={() => handleSocialSignup("google")}
            isLoading={socialLoading === "google"}
            mode="signup"
          />
          <SocialLoginButton
            provider="github"
            onLogin={() => handleSocialSignup("github")}
            isLoading={socialLoading === "github"}
            mode="signup"
          />
        </div>

        {/* Divider */}
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-border"></div>
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-card px-3 text-muted-foreground">or</span>
          </div>
        </div>

        {/* Signup Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Name Fields */}
          <div className="grid grid-cols-2 gap-4">
            <FormInput
              label="First Name"
              type="text"
              placeholder="John"
              icon={<User className="w-4 h-4" />}
              error={errors.firstName?.message}
              {...register("firstName")}
              required
            />

            <FormInput
              label="Last Name"
              type="text"
              placeholder="Doe"
              icon={<User className="w-4 h-4" />}
              error={errors.lastName?.message}
              {...register("lastName")}
              required
            />
          </div>

          <FormInput
            label="Email"
            type="email"
            placeholder="you@deakin.edu.au"
            icon={<Mail className="w-4 h-4" />}
            error={errors.email?.message}
            {...register("email")}
            required
          />

          <div>
            <PasswordInput
              label="Password"
              placeholder="Create a strong password"
              error={errors.password?.message}
              {...register("password")}
              required
            />
            <PasswordStrengthIndicator password={password} />
          </div>

          <PasswordInput
            label="Confirm Password"
            placeholder="Re-enter your password"
            error={errors.confirmPassword?.message}
            {...register("confirmPassword")}
            required
          />

          {/* DUSA Member Info Box */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-secondary/10 border border-secondary/20 rounded-lg p-4"
          >
            <div className="flex gap-3">
              <div className="flex-shrink-0">
                <Info className="w-5 h-5 text-secondary" />
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-foreground mb-1">DUSA Members</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  If you purchased DSEC membership through DUSA, use that email to create your
                  portal account. Don&apos;t have access to that email? No worries—you can use any
                  preferred email and connect it to your DUSA membership email later in your
                  account settings!
                </p>
              </div>
            </div>
          </motion.div>

          {/* Terms Checkbox */}
          <div>
            <label className="flex items-start gap-3 cursor-pointer group">
              <input
                type="checkbox"
                {...register("agreeToTerms")}
                className="w-4 h-4 mt-0.5 rounded border-border bg-card text-primary focus:ring-2 focus:ring-primary focus:ring-offset-0 transition-colors cursor-pointer"
              />
              <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                I agree to the{" "}
                <Link href="/terms" className="text-primary hover:underline">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="/privacy" className="text-primary hover:underline">
                  Privacy Policy
                </Link>
              </span>
            </label>
            {errors.agreeToTerms && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-sm text-red-500 mt-1.5"
              >
                {errors.agreeToTerms.message}
              </motion.p>
            )}
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={isLoading || isSuccess}
            whileHover={{ scale: isLoading || isSuccess ? 1 : 1.02 }}
            whileTap={{ scale: isLoading || isSuccess ? 1 : 0.98 }}
            className={`
              w-full py-3 rounded-lg font-medium
              transition-all duration-200
              ${
                isSuccess
                  ? "bg-green-500 text-white"
                  : "bg-primary text-primary-foreground hover:bg-primary/90"
              }
              disabled:opacity-50 disabled:cursor-not-allowed
              flex items-center justify-center gap-2
            `}
          >
            {isLoading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Creating account...</span>
              </>
            ) : isSuccess ? (
              <>
                <CheckCircle2 className="w-5 h-5" />
                <span>Account created!</span>
              </>
            ) : (
              "Create Account"
            )}
          </motion.button>

          {/* Email Verification Note */}
          <p className="text-xs text-center text-muted-foreground">
            We&apos;ll send a verification email after signup
          </p>
        </form>

        {/* Login Link */}
        <div className="mt-6 text-center text-sm">
          <span className="text-muted-foreground">Already have an account? </span>
          <Link
            href="/auth/login"
            className="text-primary hover:text-primary/80 transition-colors font-medium"
          >
            Log in →
          </Link>
        </div>

        {/* Help Link */}
        <div className="mt-4 text-center">
          <Link
            href="/contact"
            className="text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            Need help creating an account?
          </Link>
        </div>
      </motion.div>
    </AuthLayout>
  );
}
