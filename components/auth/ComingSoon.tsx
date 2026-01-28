"use client";

import { motion } from "framer-motion";
import { Rocket, Clock, Bell, ArrowRight, Sparkles, Zap, Code2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface ComingSoonProps {
  type: "login" | "join";
}

export default function ComingSoon({ type }: ComingSoonProps) {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNotify = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
    }
  };

  return (
    <div className="relative min-h-[80vh] flex items-center justify-center px-4">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating code symbols */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-primary/10 font-mono text-2xl font-bold"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.1, 0.3, 0.1],
              rotate: [0, 10, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          >
            {["</>", "{}", "[]", "//", "=>", "&&"][i % 6]}
          </motion.div>
        ))}

        {/* Glowing orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-secondary/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-2xl mx-auto text-center"
      >
        {/* Animated Icon */}
        <motion.div
          className="relative inline-block mb-8"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
        >
          {/* Outer ring */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-dashed border-primary/30"
            style={{ width: 140, height: 140, left: -10, top: -10 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />

          {/* Inner glow */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-xl"
            style={{ width: 120, height: 120 }}
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />

          {/* Main icon container */}
          <div className="relative w-[120px] h-[120px] bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-2xl">
            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Rocket className="w-14 h-14 text-white transform -rotate-45" />
            </motion.div>

            {/* Particle effects */}
            <motion.div
              className="absolute -bottom-2 left-1/2 w-2 h-2 bg-orange-400 rounded-full"
              animate={{
                y: [0, 20, 40],
                opacity: [1, 0.5, 0],
                scale: [1, 0.5, 0],
              }}
              transition={{ duration: 1, repeat: Infinity }}
            />
            <motion.div
              className="absolute -bottom-2 left-1/3 w-1.5 h-1.5 bg-yellow-400 rounded-full"
              animate={{
                y: [0, 25, 50],
                opacity: [1, 0.5, 0],
                scale: [1, 0.5, 0],
              }}
              transition={{ duration: 1.2, repeat: Infinity, delay: 0.2 }}
            />
            <motion.div
              className="absolute -bottom-2 left-2/3 w-1.5 h-1.5 bg-red-400 rounded-full"
              animate={{
                y: [0, 22, 44],
                opacity: [1, 0.5, 0],
                scale: [1, 0.5, 0],
              }}
              transition={{ duration: 1.1, repeat: Infinity, delay: 0.4 }}
            />
          </div>

          {/* Orbiting elements */}
          <motion.div
            className="absolute"
            style={{ width: 160, height: 160, left: -20, top: -20 }}
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          >
            <Sparkles className="absolute top-0 left-1/2 w-5 h-5 text-yellow-400 transform -translate-x-1/2" />
            <Zap className="absolute bottom-0 left-1/2 w-5 h-5 text-primary transform -translate-x-1/2" />
            <Code2 className="absolute top-1/2 left-0 w-5 h-5 text-secondary transform -translate-y-1/2" />
          </motion.div>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 font-[family-name:var(--font-space-grotesk)]"
        >
          <span className="gradient-text">Launching Soon</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-xl text-muted-foreground mb-4"
        >
          {type === "login"
            ? "Member portal is getting ready for liftoff"
            : "Registration is preparing for launch"
          }
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-muted-foreground mb-8 max-w-md mx-auto"
        >
          {type === "login"
            ? "We're building something amazing for DSEC members. The login feature will be available soon."
            : "We're putting the finishing touches on our membership system. Join the waitlist to be the first to know when we launch."
          }
        </motion.p>

        {/* Feature badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {[
            { icon: Clock, text: "Coming Soon" },
            { icon: Sparkles, text: "New Features" },
            { icon: Zap, text: "Better Experience" },
          ].map((badge, i) => (
            <div
              key={i}
              className="flex items-center gap-2 px-4 py-2 bg-card/50 backdrop-blur-sm border border-border rounded-full text-sm"
            >
              <badge.icon className="w-4 h-4 text-primary" />
              <span className="text-muted-foreground">{badge.text}</span>
            </div>
          ))}
        </motion.div>

        {/* Notification Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="max-w-md mx-auto"
        >
          {!isSubscribed ? (
            <form onSubmit={handleNotify} className="relative">
              <div className="flex gap-3">
                <div className="relative flex-1">
                  <Bell className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email for updates"
                    className="w-full pl-12 pr-4 py-4 bg-card/80 backdrop-blur-sm border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-foreground placeholder:text-muted-foreground"
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 py-4 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary/90 transition-colors flex items-center gap-2"
                >
                  Notify Me
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-6 bg-green-500/10 border border-green-500/20 rounded-xl"
            >
              <div className="flex items-center justify-center gap-3 text-green-500">
                <Sparkles className="w-5 h-5" />
                <span className="font-medium">You&apos;re on the list! We&apos;ll notify you when we launch.</span>
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Back to home link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-8"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowRight className="w-4 h-4 rotate-180" />
            Back to Home
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
