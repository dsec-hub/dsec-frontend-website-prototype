"use client";

import { useRef } from "react";

import { useRouter } from "next/navigation";

import gsap from "gsap";

import type { TransitionLinkProps } from "@/types";

export default function TransitionLink({
  href,
  children,
  className,
  onClick,
}: TransitionLinkProps): React.ReactElement {
  const router = useRouter();
  const isTransitioning = useRef(false);

  const animateTransition = (): Promise<void> => {
    return new Promise((resolve) => {
      const transitionGrid = document.querySelector(
        ".transition-grid"
      ) as HTMLElement | null;
      const blocks = Array.from(
        transitionGrid?.querySelectorAll(".transition-block") ?? []
      ) as HTMLElement[];

      if (blocks.length === 0 || !transitionGrid) {
        resolve();
        return;
      }

      transitionGrid.style.pointerEvents = "auto";
      transitionGrid.style.zIndex = "10000";

      gsap.killTweensOf(blocks);
      gsap.set(blocks, { opacity: 0 });

      gsap.to(blocks, {
        opacity: 1,
        duration: 0.01,
        ease: "none",
        stagger: {
          each: 0.001,
          from: "random",
        },
        onComplete: () => {
          transitionGrid.style.backgroundColor = "#FF006B";
          resolve();
        },
      });
    });
  };

  const handleClick = async (
    e: React.MouseEvent<HTMLAnchorElement>
  ): Promise<void> => {
    e.preventDefault();

    if (isTransitioning.current) return;

    if (window.location.pathname === href) return;

    if (
      href.startsWith("http") ||
      href.startsWith("mailto:") ||
      href.startsWith("tel:")
    ) {
      window.location.href = href;
      return;
    }

    isTransitioning.current = true;

    sessionStorage.setItem("pageTransition", "true");

    await animateTransition();

    await new Promise((r) => setTimeout(r, 50));

    onClick?.(e);

    router.push(href);

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
