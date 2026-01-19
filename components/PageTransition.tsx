"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";

const GRID_BLOCK_SIZE = 60;

export default function PageTransition() {
  const gridRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const hasInitialized = useRef(false);

  // Create the grid of blocks
  const createTransitionGrid = () => {
    const container = gridRef.current;
    if (!container) return;

    container.innerHTML = "";

    const gridWidth = window.innerWidth;
    const gridHeight = window.innerHeight;
    const gridColumnCount = Math.ceil(gridWidth / GRID_BLOCK_SIZE);
    const gridRowCount = Math.ceil(gridHeight / GRID_BLOCK_SIZE) + 1;
    const gridOffsetX = (gridWidth - gridColumnCount * GRID_BLOCK_SIZE) / 2;
    const gridOffsetY = (gridHeight - gridRowCount * GRID_BLOCK_SIZE) / 2;

    for (let rowIndex = 0; rowIndex < gridRowCount; rowIndex++) {
      for (let colIndex = 0; colIndex < gridColumnCount; colIndex++) {
        const blockPosX = colIndex * GRID_BLOCK_SIZE + gridOffsetX;
        const blockPosY = rowIndex * GRID_BLOCK_SIZE + gridOffsetY;

        const block = document.createElement("div");
        block.classList.add("transition-block");
        block.style.width = `${GRID_BLOCK_SIZE}px`;
        block.style.height = `${GRID_BLOCK_SIZE}px`;
        block.style.left = `${blockPosX}px`;
        block.style.top = `${blockPosY}px`;
        container.appendChild(block);
      }
    }
  };

  // Reveal transition (animate blocks away to show page)
  const revealTransition = () => {
    const container = gridRef.current;
    if (!container) return;

    const blocks = Array.from(container.querySelectorAll(".transition-block")) as HTMLElement[];
    if (blocks.length === 0) return;

    // Clear the background color first
    container.style.backgroundColor = "";

    gsap.to(blocks, {
      opacity: 0,
      duration: 0.01,
      ease: "none",
      stagger: {
        each: 0.001,
        from: "random",
      },
      onComplete: () => {
        container.style.pointerEvents = "none";
      },
    });
  };

  // Initialize grid on mount
  useEffect(() => {
    createTransitionGrid();

    const handleResize = () => {
      createTransitionGrid();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Handle page transition reveal
  useEffect(() => {
    // Skip the very first render
    if (!hasInitialized.current) {
      hasInitialized.current = true;
      return;
    }

    const isPageNavigation = sessionStorage.getItem("pageTransition") === "true";

    if (isPageNavigation) {
      sessionStorage.removeItem("pageTransition");

      const container = gridRef.current;
      if (!container) return;

      // Recreate grid to ensure fresh state
      createTransitionGrid();

      const blocks = Array.from(container.querySelectorAll(".transition-block")) as HTMLElement[];

      // Set all blocks to visible immediately
      blocks.forEach(block => {
        block.style.opacity = "1";
      });
      container.style.backgroundColor = "#FF006B";
      container.style.pointerEvents = "auto";

      // Wait a moment then reveal
      setTimeout(() => {
        revealTransition();
      }, 50);
    }
  }, [pathname]);

  return <div ref={gridRef} className="transition-grid" />;
}
