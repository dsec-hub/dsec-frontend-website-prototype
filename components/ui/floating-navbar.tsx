"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { cn } from "@/lib/utils";
import TransitionLink from "@/components/TransitionLink";
import { MenuIcon } from "@/components/icons";

export const FloatingNav = ({
  navItems,
  className,
  onMenuClick,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
  onMenuClick?: () => void;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      const direction = current - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "fixed inset-x-4 top-4 z-[5000] flex items-center justify-between rounded-full border border-border bg-background/80 px-4 py-2 shadow-lg backdrop-blur-md md:inset-x-0 md:mx-auto md:w-auto md:max-w-fit md:gap-4 md:px-2 ",
          className
        )}
      >
        {/* Logo */}
        <TransitionLink href="/" className="flex items-center md:hidden">
          <img src="/logo.svg" alt="DSEC" width={40} height={38} />
        </TransitionLink>

        {/* Desktop nav links */}
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((navItem, idx: number) => (
            <TransitionLink
              key={`link-${idx}`}
              href={navItem.link}
              className="relative flex items-center px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {navItem.name}
            </TransitionLink>
          ))}
        </div>

        {/* Right side: Join button + mobile menu */}
        <div className="flex items-center gap-2">
          <TransitionLink
            href="/auth/join"
            className="rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90"
          >
            Join
          </TransitionLink>
          {onMenuClick && (
            <button
              onClick={onMenuClick}
              className="rounded-md p-2 text-foreground transition-colors hover:bg-muted md:hidden"
              aria-label="Open menu"
            >
              <MenuIcon />
            </button>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
