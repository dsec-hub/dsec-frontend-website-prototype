"use client";

import { useState, Suspense } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Mail, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

import AuthLayout from "@/components/auth/AuthLayout";
import FormInput from "@/components/auth/FormInput";
import PasswordInput from "@/components/auth/PasswordInput";
import SocialLoginButton from "@/components/auth/SocialLoginButton";
import ComingSoon from "@/components/auth/ComingSoon";
import {
  signInWithEmail,
  signInWithGoogle,
  signInWithGitHub,
} from "@/lib/auth-client";
import { loginSchema, type LoginFormData } from "@/lib/auth-schemas";
import { featureFlags } from "@/lib/feature-flags";

function LoginForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [socialLoading, setSocialLoading] = useState<"google" | "github" | null>(null);

  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/dashboard";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      rememberMe: false,
    },
  });

  const onSubmit = async (data: LoginFormData) => {
    setIsLoading(true);
    setError(null);

    try {
      const result = await signInWithEmail(data.email, data.password, data.rememberMe);

      if (result.error) {
        setError(result.error.message || "Failed to sign in. Please check your credentials.");
        setIsLoading(false);
        return;
      }

      // Show success state
      setIsSuccess(true);

      // Redirect after success
      setTimeout(() => {
        router.push(callbackUrl);
      }, 1000);
    } catch (err) {
      setError("An unexpected error occurred. Please try again.");
      setIsLoading(false);
    }
  };

  const handleSocialLogin = async (provider: "google" | "github") => {
    setSocialLoading(provider);
    setError(null);

    try {
      if (provider === "google") {
        await signInWithGoogle();
      } else {
        await signInWithGitHub();
      }
    } catch (err) {
      setError(`Failed to sign in with ${provider}. Please try again.`);
      setSocialLoading(null);
    }
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

        {/* Error Alert */}
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 p-4 rounded-lg bg-red-500/10 border border-red-500/20 flex items-start gap-3"
          >
            <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-red-500">{error}</p>
          </motion.div>
        )}

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
            autoComplete="email"
          />

          <PasswordInput
            label="Password"
            placeholder="Enter your password"
            error={errors.password?.message}
            {...register("password")}
            required
            autoComplete="current-password"
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
            disabled={isLoading || isSuccess || socialLoading !== null}
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
            Join DSEC &rarr;
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

export default function LoginPage() {
  // Show coming soon page if auth is disabled
  if (featureFlags.AUTH_DISABLED) {
    return (
      <AuthLayout>
        <ComingSoon type="login" />
      </AuthLayout>
    );
  }

  return (
    <Suspense fallback={
      <AuthLayout>
        <div className="bg-card/80 backdrop-blur-md border border-border rounded-2xl shadow-2xl p-8 flex items-center justify-center min-h-[400px]">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
        </div>
      </AuthLayout>
    }>
      <LoginForm />
    </Suspense>
  );
}
