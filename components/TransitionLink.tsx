"use client";

import { useRouter } from "next/navigation";
import gsap from "gsap";
import { ReactNode, useRef } from "react";

interface TransitionLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function TransitionLink({ href, children, className, onClick }: TransitionLinkProps) {
  const router = useRouter();
  const isTransitioning = useRef(false);

  const animateTransition = (): Promise<void> => {
    return new Promise((resolve) => {
      const transitionGrid = document.querySelector(".transition-grid") as HTMLElement;
      const blocks = Array.from(transitionGrid?.querySelectorAll(".transition-block") || []) as HTMLElement[];

      if (blocks.length === 0 || !transitionGrid) {
        resolve();
        return;
      }

      transitionGrid.style.pointerEvents = "auto";
      transitionGrid.style.zIndex = "1000";

      // Kill any existing animations
      gsap.killTweensOf(blocks);

      // Set all blocks to invisible first
      gsap.set(blocks, { opacity: 0 });

      // Animate blocks to visible (cover the screen)
      gsap.to(blocks, {
        opacity: 1,
        duration: 0.01,
        ease: "none",
        stagger: {
          each: 0.001,
          from: "random",
        },
        onComplete: () => {
          // Solid background as safety net
          transitionGrid.style.backgroundColor = "#FF006B";
          resolve();
        },
      });
    });
  };

  const handleClick = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    if (isTransitioning.current) return;

    // Check if it's the same page
    if (window.location.pathname === href) return;

    // Check if external link
    if (href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:")) {
      window.location.href = href;
      return;
    }

    isTransitioning.current = true;

    // Set flag for the next page
    sessionStorage.setItem("pageTransition", "true");

    // Animate cover transition
    await animateTransition();

    // Small delay to ensure animation is visible
    await new Promise(r => setTimeout(r, 50));

    // Call optional onClick callback
    onClick?.();

    // Navigate
    router.push(href);

    // Reset after navigation
    setTimeout(() => {
      isTransitioning.current = false;
    }, 1000);
  };

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
