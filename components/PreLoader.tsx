"use client";

import { useLoader } from "@/app/loader-context";
import LoaderLogo from "./LoaderLogo";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";

function PreLoader() {
  const { setHasPreloaded } = useLoader();

  const preloaderContainerRef = useRef<HTMLDivElement>(null);
  const logoRefContainer = useRef<HTMLDivElement>(null);
  const logoRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svgElement = logoRef.current;
    if (!svgElement) return;

    const paths = svgElement.querySelectorAll("path");

    // Calculate and set stroke dash properties for each path
    paths.forEach((path) => {
      const length = path.getTotalLength();
      path.style.strokeDasharray = `${length}`;
      path.style.strokeDashoffset = `${length}`;
    });

    const tl = gsap.timeline();

    // Initialize clip paths
    tl.to(logoRefContainer.current, {
      clipPath: "inset(0% 0% 0% 0%)",
      duration: 0,
    });
    tl.to(preloaderContainerRef.current, {
      clipPath: "inset(0% 0% 0% 0%)",
      duration: 0,
    });

    // Draw SVG paths (animate strokeDashoffset to 0)
    tl.to(paths, {
      strokeDashoffset: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "power2.inOut",
    });

    // Fill paths with their stroke color
    tl.to(
      paths,
      {
        duration: 0.6,
        fill: (i, target) => {
          const stroke = (target as SVGPathElement).getAttribute("stroke");
          return stroke || "#000";
        },
        stagger: 0.08,
        ease: "power2.inOut",
      },
      "-=0.3"
    );

    // Animate logo container out
    tl.to(logoRefContainer.current, {
      clipPath: "inset(0% 0% 100% 0%)",
      duration: 0.8,
      ease: "power2.inOut",
      onComplete: () => {
        if (logoRefContainer.current)
          logoRefContainer.current.style.display = "none";
      },
    });

    // Animate preloader container out
    tl.to(
      preloaderContainerRef.current,
      {
        clipPath: "inset(0% 0% 100% 0%)",
        duration: 0.8,
        ease: "power2.inOut",
        onComplete: () => {
          setHasPreloaded(true);
          if (preloaderContainerRef.current) {
            preloaderContainerRef.current.style.display = "none";
          }
        },
      },
      "+=0.2"
    );
  }, [setHasPreloaded]);

  return (
    <div
      className="fixed h-svh w-screen overflow-hidden z-50 pointer-events-auto top-0 left-0"
      ref={preloaderContainerRef}
    >
      <div className="bg-neutral-900 w-full h-full top-0 absolute flex justify-center items-center">
        <div className="overflow-hidden" ref={logoRefContainer}>
          <LoaderLogo ref={logoRef} />
        </div>
      </div>
    </div>
  );
}

export default PreLoader;
