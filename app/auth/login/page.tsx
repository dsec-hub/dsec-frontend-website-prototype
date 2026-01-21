"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Mail, Loader2, CheckCircle2 } from "lucide-react";
import Link from "next/link";

import AuthLayout from "@/components/auth/AuthLayout";
import FormInput from "@/components/auth/FormInput";
import PasswordInput from "@/components/auth/PasswordInput";
import SocialLoginButton from "@/components/auth/SocialLoginButton";

// Validation Schema
const loginSchema = z.object({
  email: z.string().min(1, "Email is required").email("Please enter a valid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  rememberMe: z.boolean().optional(),
});

type LoginFormData = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [socialLoading, setSocialLoading] = useState<"google" | "github" | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log("Login data:", data);

    // Show success state
    setIsSuccess(true);

    // Simulate redirect
    setTimeout(() => {
      // In a real app: router.push('/dashboard')
      setIsLoading(false);
      setIsSuccess(false);
    }, 1500);
  };

  const handleSocialLogin = async (provider: "google" | "github") => {
    setSocialLoading(provider);

    // Simulate OAuth flow
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log(`${provider} login initiated`);
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
            Welcome back to <span className="gradient-text">DSEC</span>
          </h1>
          <p className="text-muted-foreground text-sm">
            Sign in to access your portal and continue building
          </p>
        </div>

        {/* Social Login */}
        <div className="space-y-3 mb-6">
          <SocialLoginButton
            provider="google"
            onLogin={() => handleSocialLogin("google")}
            isLoading={socialLoading === "google"}
            mode="login"
          />
          <SocialLoginButton
            provider="github"
            onLogin={() => handleSocialLogin("github")}
            isLoading={socialLoading === "github"}
            mode="login"
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

        {/* Login Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <FormInput
            label="Email"
            type="email"
            placeholder="you@deakin.edu.au"
            icon={<Mail className="w-4 h-4" />}
            error={errors.email?.message}
            {...register("email")}
            required
          />

          <PasswordInput
            label="Password"
            placeholder="Enter your password"
            error={errors.password?.message}
            {...register("password")}
            required
          />

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                {...register("rememberMe")}
                className="w-4 h-4 rounded border-border bg-card text-primary focus:ring-2 focus:ring-primary focus:ring-offset-0 transition-colors cursor-pointer"
              />
              <span className="text-muted-foreground">Remember me</span>
            </label>

            <Link
              href="/auth/forgot-password"
              className="text-primary hover:text-primary/80 transition-colors"
            >
              Forgot password?
            </Link>
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
                <span>Signing in...</span>
              </>
            ) : isSuccess ? (
              <>
                <CheckCircle2 className="w-5 h-5" />
                <span>Success!</span>
              </>
            ) : (
              "Sign in"
            )}
          </motion.button>
        </form>

        {/* Sign Up Link */}
        <div className="mt-6 text-center text-sm">
          <span className="text-muted-foreground">Don&apos;t have an account? </span>
          <Link
            href="/auth/join"
            className="text-primary hover:text-primary/80 transition-colors font-medium"
          >
            Join DSEC →
          </Link>
        </div>

        {/* Help Link */}
        <div className="mt-4 text-center">
          <Link
            href="/contact"
            className="text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            Need help signing in?
          </Link>
        </div>
      </motion.div>
    </AuthLayout>
  );
}
