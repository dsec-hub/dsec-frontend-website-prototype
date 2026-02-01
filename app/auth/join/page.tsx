"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  User,
  Loader2,
  CheckCircle2,
  GraduationCap,
  Users,
  Target,
  Eye,
  Github,
  Linkedin,
  ArrowRight,
  Check,
  ChevronDown,
  Sparkles,
  AlertCircle,
} from "lucide-react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";

import Stepper, { Step } from "@/components/ui/Stepper/Stepper";
import FormInput from "@/components/auth/FormInput";
import PasswordInput from "@/components/auth/PasswordInput";
import PasswordStrengthIndicator from "@/components/auth/PasswordStrengthIndicator";
import SocialLoginButton from "@/components/auth/SocialLoginButton";
import ComingSoon from "@/components/auth/ComingSoon";
import AuthLayout from "@/components/auth/AuthLayout";
import {
  signUpWithEmail,
  signInWithGoogle,
  signInWithGitHub,
} from "@/lib/auth-client";
import {
  profileSchema,
  type ProfileFormData,
} from "@/lib/auth-schemas";
import { featureFlags } from "@/lib/feature-flags";

// Dynamically import Lanyard to avoid SSR issues with Three.js
const Lanyard = dynamic(() => import("@/components/ui/Lanyard/Lanyard"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
    </div>
  ),
});

type StudentStatus = "deakin" | "external" | null;
type Campus = "burwood" | "waurn-ponds" | "waterfront" | "online" | null;
type MembershipType = "member" | "browsing" | null;
type SignUpMethod = "google" | "github" | "email" | null;

export default function JoinPage() {
  // Show coming soon page if auth is disabled
  if (featureFlags.AUTH_DISABLED) {
    return (
      <AuthLayout>
        <ComingSoon type="join" />
      </AuthLayout>
    );
  }

  return <JoinForm />;
}

function JoinForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [studentStatus, setStudentStatus] = useState<StudentStatus>(null);
  const [campus, setCampus] = useState<Campus>(null);
  const [membershipType, setMembershipType] = useState<MembershipType>(null);
  const [signUpMethod, setSignUpMethod] = useState<SignUpMethod>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [socialLoading, setSocialLoading] = useState<"google" | "github" | null>(null);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState<string | null>(null);

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      wantUpdates: true,
      wantProjectTeam: false,
    },
  });

  const handleNextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSocialAuth = async (provider: "google" | "github") => {
    setSocialLoading(provider);
    setError(null);
    setSignUpMethod(provider);

    try {
      if (provider === "google") {
        await signInWithGoogle();
      } else {
        await signInWithGitHub();
      }
    } catch (err) {
      setError(`Failed to sign up with ${provider}. Please try again.`);
      setSocialLoading(null);
    }
  };

  const validatePassword = () => {
    if (signUpMethod !== "email") return true;

    if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters");
      return false;
    }
    if (!/[A-Z]/.test(password)) {
      setPasswordError("Password must contain at least one uppercase letter");
      return false;
    }
    if (!/[a-z]/.test(password)) {
      setPasswordError("Password must contain at least one lowercase letter");
      return false;
    }
    if (!/[0-9]/.test(password)) {
      setPasswordError("Password must contain at least one number");
      return false;
    }
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      setPasswordError("Password must contain at least one special character");
      return false;
    }
    if (password !== confirmPassword) {
      setPasswordError("Passwords don't match");
      return false;
    }

    setPasswordError(null);
    return true;
  };

  const onSubmit = async (data: ProfileFormData) => {
    // Validate password for email signup
    if (signUpMethod === "email" && !validatePassword()) {
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const result = await signUpWithEmail(
        data.email,
        password,
        data.fullName,
        {
          studentStatus: studentStatus || undefined,
          campus: campus || undefined,
          membershipType: membershipType || undefined,
          preferredName: data.preferredName || undefined,
          studentId: data.studentId || undefined,
          degree: data.degree || undefined,
          yearLevel: data.yearLevel || undefined,
          linkedinUrl: data.linkedinUrl || undefined,
          githubUsername: data.githubUsername || undefined,
          wantUpdates: data.wantUpdates,
          wantProjectTeam: data.wantProjectTeam,
        }
      );

      if (result.error) {
        setError(result.error.message || "Failed to create account. Please try again.");
        setIsLoading(false);
        return;
      }

      setIsSuccess(true);

      // Redirect after success
      setTimeout(() => {
        router.push("/dashboard");
      }, 1500);
    } catch (err) {
      setError("An unexpected error occurred. Please try again.");
      setIsLoading(false);
    }
  };

  const canProceedStep1 = studentStatus !== null && (studentStatus === "external" || campus !== null);
  const canProceedStep2 = membershipType !== null;

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-20 pb-8 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 font-[family-name:var(--font-space-grotesk)]"
          >
            <span className="gradient-text">Ship Real Projects.</span>{" "}
            <span className="text-foreground">Build Your Portfolio.</span>{" "}
            <span className="text-foreground">Join DSEC.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
          >
            Open to Deakin students and anyone passionate about software engineering.
            Free to join, no experience required.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <a
              href="#join-form"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
            >
              Get Started <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Main Content - 2 Column Layout */}
      <section id="join-form" className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left Column - Form */}
            <div className="order-2 lg:order-1">
              {/* Who Can Join */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mb-8 bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6"
              >
                <h2 className="text-lg font-semibold mb-4 font-[family-name:var(--font-space-grotesk)]">
                  Who can join?
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "Deakin students (any campus, any degree)",
                    "External members (other universities, self-taught devs, bootcamp grads)",
                    "Beginners and experienced developers",
                    "Anyone who wants to build real software projects",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* What You Get */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mb-8 bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6"
              >
                <h2 className="text-lg font-semibold mb-4 font-[family-name:var(--font-space-grotesk)]">
                  What you get
                </h2>
                <div className="space-y-3">
                  {[
                    "Access to hands-on workshops (web dev, app dev, robotics, game dev)",
                    "Real projects for your GitHub portfolio",
                    "Industry panels and career events",
                    "Exclusive member rewards system (coin-based perks)",
                    "Collaboration with other tech clubs (DUCA, ACUSYS network)",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <Sparkles className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

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

              {/* Multi-Step Form */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-card/80 backdrop-blur-md border border-border rounded-2xl shadow-2xl overflow-hidden"
              >
                <Stepper
                  currentStep={currentStep}
                  onStepChange={setCurrentStep}
                  hideNavigation
                  disableStepIndicators
                  stepContainerClassName="bg-card/50 border-b border-border"
                >
                  {/* Step 1: Your Status */}
                  <Step>
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-semibold mb-2 font-[family-name:var(--font-space-grotesk)]">
                          First, tell us about yourself
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Both Deakin students and external members get full access to workshops, projects, and events.
                        </p>
                      </div>

                      <div className="space-y-3">
                        <button
                          type="button"
                          onClick={() => setStudentStatus("deakin")}
                          className={`w-full p-4 rounded-xl border-2 transition-all text-left flex items-center gap-4 ${
                            studentStatus === "deakin"
                              ? "border-primary bg-primary/10"
                              : "border-border hover:border-primary/50"
                          }`}
                        >
                          <div
                            className={`w-10 h-10 rounded-full flex items-center justify-center ${
                              studentStatus === "deakin" ? "bg-primary text-white" : "bg-muted"
                            }`}
                          >
                            <GraduationCap className="w-5 h-5" />
                          </div>
                          <div>
                            <div className="font-medium">I&apos;m a Deakin University student</div>
                            <div className="text-sm text-muted-foreground">Any campus, any degree</div>
                          </div>
                          {studentStatus === "deakin" && (
                            <Check className="w-5 h-5 text-primary ml-auto" />
                          )}
                        </button>

                        <button
                          type="button"
                          onClick={() => {
                            setStudentStatus("external");
                            setCampus(null);
                          }}
                          className={`w-full p-4 rounded-xl border-2 transition-all text-left flex items-center gap-4 ${
                            studentStatus === "external"
                              ? "border-primary bg-primary/10"
                              : "border-border hover:border-primary/50"
                          }`}
                        >
                          <div
                            className={`w-10 h-10 rounded-full flex items-center justify-center ${
                              studentStatus === "external" ? "bg-primary text-white" : "bg-muted"
                            }`}
                          >
                            <Users className="w-5 h-5" />
                          </div>
                          <div>
                            <div className="font-medium">I&apos;m not a Deakin student</div>
                            <div className="text-sm text-muted-foreground">External member</div>
                          </div>
                          {studentStatus === "external" && (
                            <Check className="w-5 h-5 text-primary ml-auto" />
                          )}
                        </button>
                      </div>

                      {/* Campus Selection */}
                      <AnimatePresence>
                        {studentStatus === "deakin" && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="space-y-3"
                          >
                            <label className="text-sm font-medium">Which campus?</label>
                            <div className="grid grid-cols-2 gap-3">
                              {[
                                { id: "burwood", label: "Burwood" },
                                { id: "waurn-ponds", label: "Waurn Ponds (Geelong)" },
                                { id: "waterfront", label: "Waterfront (Geelong)" },
                                { id: "online", label: "Online/Cloud" },
                              ].map((c) => (
                                <button
                                  key={c.id}
                                  type="button"
                                  onClick={() => setCampus(c.id as Campus)}
                                  className={`p-3 rounded-lg border-2 transition-all text-sm ${
                                    campus === c.id
                                      ? "border-primary bg-primary/10"
                                      : "border-border hover:border-primary/50"
                                  }`}
                                >
                                  {c.label}
                                </button>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      <button
                        type="button"
                        onClick={handleNextStep}
                        disabled={!canProceedStep1}
                        className="w-full py-3 rounded-lg font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                      >
                        Continue <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </Step>

                  {/* Step 2: Membership Type */}
                  <Step>
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-semibold mb-2 font-[family-name:var(--font-space-grotesk)]">
                          How do you want to participate?
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Everyone starts here. Membership is free and gets you access to real-world projects, GitHub collab, and industry connections.
                        </p>
                      </div>

                      <div className="space-y-3">
                        <button
                          type="button"
                          onClick={() => setMembershipType("member")}
                          className={`w-full p-4 rounded-xl border-2 transition-all text-left flex items-center gap-4 ${
                            membershipType === "member"
                              ? "border-primary bg-primary/10"
                              : "border-border hover:border-primary/50"
                          }`}
                        >
                          <div
                            className={`w-10 h-10 rounded-full flex items-center justify-center ${
                              membershipType === "member" ? "bg-primary text-white" : "bg-muted"
                            }`}
                          >
                            <Target className="w-5 h-5" />
                          </div>
                          <div className="flex-1">
                            <div className="font-medium">Club Member</div>
                            <div className="text-sm text-muted-foreground">
                              Full access to all events, workshops, and projects
                            </div>
                          </div>
                          {membershipType === "member" && (
                            <Check className="w-5 h-5 text-primary" />
                          )}
                        </button>

                        <button
                          type="button"
                          onClick={() => setMembershipType("browsing")}
                          className={`w-full p-4 rounded-xl border-2 transition-all text-left flex items-center gap-4 ${
                            membershipType === "browsing"
                              ? "border-primary bg-primary/10"
                              : "border-border hover:border-primary/50"
                          }`}
                        >
                          <div
                            className={`w-10 h-10 rounded-full flex items-center justify-center ${
                              membershipType === "browsing" ? "bg-primary text-white" : "bg-muted"
                            }`}
                          >
                            <Eye className="w-5 h-5" />
                          </div>
                          <div className="flex-1">
                            <div className="font-medium">Just browsing</div>
                            <div className="text-sm text-muted-foreground">
                              Create an account to stay updated (you can upgrade anytime)
                            </div>
                          </div>
                          {membershipType === "browsing" && (
                            <Check className="w-5 h-5 text-primary" />
                          )}
                        </button>
                      </div>

                      <div className="flex gap-3">
                        <button
                          type="button"
                          onClick={handlePrevStep}
                          className="px-4 py-3 rounded-lg font-medium text-muted-foreground hover:text-foreground transition-colors"
                        >
                          Back
                        </button>
                        <button
                          type="button"
                          onClick={handleNextStep}
                          disabled={!canProceedStep2}
                          className="flex-1 py-3 rounded-lg font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                          Continue <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </Step>

                  {/* Step 3: Sign Up Method */}
                  <Step>
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-semibold mb-2 font-[family-name:var(--font-space-grotesk)]">
                          Choose how to sign up
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          We recommend GitHub if you want your contributions automatically linked to your portfolio.
                        </p>
                      </div>

                      <div className="space-y-3">
                        <SocialLoginButton
                          provider="google"
                          onLogin={() => handleSocialAuth("google")}
                          isLoading={socialLoading === "google"}
                          mode="signup"
                        />
                        <SocialLoginButton
                          provider="github"
                          onLogin={() => handleSocialAuth("github")}
                          isLoading={socialLoading === "github"}
                          mode="signup"
                        />

                        <div className="relative my-4">
                          <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-border"></div>
                          </div>
                          <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-card px-3 text-muted-foreground">or</span>
                          </div>
                        </div>

                        <button
                          type="button"
                          onClick={() => {
                            setSignUpMethod("email");
                            setCurrentStep(4);
                          }}
                          className="w-full py-3 rounded-lg font-medium border border-border hover:bg-muted/50 transition-all flex items-center justify-center gap-2"
                        >
                          <Mail className="w-5 h-5" />
                          Continue with Email
                        </button>
                      </div>

                      <button
                        type="button"
                        onClick={handlePrevStep}
                        className="px-4 py-2 rounded-lg font-medium text-muted-foreground hover:text-foreground transition-colors"
                      >
                        Back
                      </button>
                    </div>
                  </Step>

                  {/* Step 4: Complete Profile */}
                  <Step>
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-semibold mb-2 font-[family-name:var(--font-space-grotesk)]">
                          Almost there! Complete your profile
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Just a few more details and you&apos;re all set.
                        </p>
                      </div>

                      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <FormInput
                          label="Full Name"
                          type="text"
                          placeholder="John Doe"
                          icon={<User className="w-4 h-4" />}
                          error={errors.fullName?.message}
                          {...register("fullName")}
                          required
                          autoComplete="name"
                        />

                        <FormInput
                          label="Preferred Name"
                          type="text"
                          placeholder="What should we call you?"
                          icon={<User className="w-4 h-4" />}
                          {...register("preferredName")}
                          autoComplete="nickname"
                        />

                        <FormInput
                          label="Email"
                          type="email"
                          placeholder="you@email.com"
                          icon={<Mail className="w-4 h-4" />}
                          error={errors.email?.message}
                          {...register("email")}
                          required
                          autoComplete="email"
                        />

                        {/* Password fields for email signup */}
                        {signUpMethod === "email" && (
                          <>
                            <div className="space-y-2">
                              <PasswordInput
                                label="Password"
                                placeholder="Create a strong password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                error={passwordError || undefined}
                                required
                                autoComplete="new-password"
                              />
                              <PasswordStrengthIndicator password={password} />
                            </div>

                            <PasswordInput
                              label="Confirm Password"
                              placeholder="Confirm your password"
                              value={confirmPassword}
                              onChange={(e) => setConfirmPassword(e.target.value)}
                              error={
                                confirmPassword && password !== confirmPassword
                                  ? "Passwords don't match"
                                  : undefined
                              }
                              required
                              autoComplete="new-password"
                            />
                          </>
                        )}

                        {studentStatus === "deakin" && (
                          <FormInput
                            label="Student ID"
                            type="text"
                            placeholder="Optional - for verification"
                            icon={<GraduationCap className="w-4 h-4" />}
                            error={errors.studentId?.message}
                            {...register("studentId")}
                          />
                        )}

                        <div className="grid grid-cols-2 gap-4">
                          <FormInput
                            label="Degree/Major"
                            type="text"
                            placeholder="e.g., Computer Science"
                            {...register("degree")}
                          />
                          <div>
                            <label className="block text-sm font-medium mb-2">Year Level</label>
                            <select
                              {...register("yearLevel")}
                              className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-foreground"
                            >
                              <option value="">Select year</option>
                              <option value="1">1st Year</option>
                              <option value="2">2nd Year</option>
                              <option value="3">3rd Year</option>
                              <option value="4">4th Year</option>
                              <option value="postgrad">Postgraduate</option>
                              <option value="other">Other</option>
                            </select>
                          </div>
                        </div>

                        <FormInput
                          label="LinkedIn URL"
                          type="url"
                          placeholder="https://linkedin.com/in/username"
                          icon={<Linkedin className="w-4 h-4" />}
                          error={errors.linkedinUrl?.message}
                          {...register("linkedinUrl")}
                        />

                        <FormInput
                          label="GitHub Username"
                          type="text"
                          placeholder="username (recommended)"
                          icon={<Github className="w-4 h-4" />}
                          error={errors.githubUsername?.message}
                          {...register("githubUsername")}
                        />

                        <div className="space-y-3 pt-2">
                          <label className="flex items-start gap-3 cursor-pointer group">
                            <input
                              type="checkbox"
                              {...register("wantUpdates")}
                              defaultChecked
                              className="w-4 h-4 mt-0.5 rounded border-border bg-card text-primary focus:ring-2 focus:ring-primary focus:ring-offset-0 transition-colors cursor-pointer"
                            />
                            <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                              I want to receive event updates and workshop notifications
                            </span>
                          </label>

                          <label className="flex items-start gap-3 cursor-pointer group">
                            <input
                              type="checkbox"
                              {...register("wantProjectTeam")}
                              className="w-4 h-4 mt-0.5 rounded border-border bg-card text-primary focus:ring-2 focus:ring-primary focus:ring-offset-0 transition-colors cursor-pointer"
                            />
                            <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                              I&apos;m interested in joining a project team
                            </span>
                          </label>
                        </div>

                        <div className="flex gap-3 pt-2">
                          <button
                            type="button"
                            onClick={handlePrevStep}
                            className="px-4 py-3 rounded-lg font-medium text-muted-foreground hover:text-foreground transition-colors"
                          >
                            Back
                          </button>
                          <motion.button
                            type="submit"
                            disabled={isLoading || isSuccess}
                            whileHover={{ scale: isLoading || isSuccess ? 1 : 1.02 }}
                            whileTap={{ scale: isLoading || isSuccess ? 1 : 0.98 }}
                            className={`
                              flex-1 py-3 rounded-lg font-medium
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
                                <span>Welcome to DSEC!</span>
                              </>
                            ) : (
                              <>
                                Create Account <ArrowRight className="w-4 h-4" />
                              </>
                            )}
                          </motion.button>
                        </div>
                      </form>
                    </div>
                  </Step>
                </Stepper>

                {/* Login Link */}
                <div className="p-6 border-t border-border text-center text-sm">
                  <span className="text-muted-foreground">Already have an account? </span>
                  <Link
                    href="/auth/login"
                    className="text-primary hover:text-primary/80 transition-colors font-medium"
                  >
                    Log in
                  </Link>
                </div>
              </motion.div>

              {/* Why Create Account */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-8 bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6"
              >
                <h2 className="text-lg font-semibold mb-4 font-[family-name:var(--font-space-grotesk)]">
                  Why create an account?
                </h2>
                <p className="text-sm text-muted-foreground mb-4">Creating an account lets you:</p>
                <div className="space-y-2">
                  {[
                    "Register for events and workshops",
                    "Track your project contributions",
                    "Earn coins for event attendance",
                    "Access member-only resources",
                    "Get featured in our showcase gallery",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-secondary" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* External Members Note */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="mt-6 bg-secondary/10 border border-secondary/20 rounded-2xl p-6"
              >
                <h2 className="text-lg font-semibold mb-2 font-[family-name:var(--font-space-grotesk)]">
                  Not a Deakin student? No problem.
                </h2>
                <p className="text-sm text-muted-foreground">
                  DSEC welcomes external members. You&apos;ll have the same access to workshops, projects, and events as Deakin students. Our goal is to help you ship real software—not gatekeep who gets to learn.
                </p>
              </motion.div>
            </div>

            {/* Right Column - Lanyard (Desktop Only) */}
            <div className="order-1 lg:order-2 hidden lg:block lg:sticky lg:top-24">
              <div className="h-[600px] w-full">
                <Lanyard />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-bold text-center mb-12 font-[family-name:var(--font-space-grotesk)]"
          >
            Frequently Asked Questions
          </motion.h2>

          <div className="space-y-4">
            {[
              {
                question: "Do I need to be a Deakin student?",
                answer: "No. We welcome anyone interested in software engineering.",
              },
              {
                question: "Is there a membership fee?",
                answer: "No. Membership is completely free.",
              },
              {
                question: "What if I'm a complete beginner?",
                answer:
                  "Perfect. Our workshops are designed for all skill levels, and you'll work on real projects with support from experienced members.",
              },
              {
                question: "Can I join mid-year?",
                answer: "Yes. You can join anytime and participate in ongoing projects and events.",
              },
            ].map((faq, i) => (
              <FAQItem key={i} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="border border-border rounded-xl overflow-hidden"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-muted/50 transition-colors"
      >
        <span className="font-medium">{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-muted-foreground transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="px-6 pb-4 text-muted-foreground">{answer}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
