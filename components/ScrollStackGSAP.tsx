"use client";

import { useRef, ReactNode } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import "./ScrollStackGSAP.css";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

interface ScrollStackGSAPProps {
	children: ReactNode;
	className?: string;
	stackPosition?: string;
	cardOffset?: number;
	stackOffset?: number;
}

export const ScrollStackGSAPItem = ({
	children,
	className = "",
}: {
	children: ReactNode;
	className?: string;
}) => (
	<div className={`gsap-stack-card ${className}`.trim()}>{children}</div>
);

export default function ScrollStackGSAP({
	children,
	className = "",
	stackPosition = "30%",
	cardOffset = 14,
	stackOffset = 20,
}: ScrollStackGSAPProps) {
	const containerRef = useRef<HTMLDivElement>(null);

	useGSAP(
		() => {
			const cards = gsap.utils.toArray<HTMLElement>(".gsap-stack-card");
			if (cards.length === 0) return;

			cards.forEach((card, index) => {
				const isLastCard = index === cards.length - 1;
				const cardInner = card.querySelector(".gsap-stack-card-inner");

				if (!isLastCard) {
					ScrollTrigger.create({
						trigger: card,
						start: `top ${stackPosition}`,
						endTrigger: ".gsap-stack-end",
						end: "top 65%",
						pin: true,
						pinSpacing: false,
					});

					if (cardInner) {
						gsap.to(cardInner, {
							y: `-${(cards.length - index) * cardOffset}vh`,
							ease: "none",
							scrollTrigger: {
								trigger: card,
								start: `top ${stackPosition}`,
								endTrigger: ".gsap-stack-end",
								end: "top 65%",
								scrub: true,
							},
						});
					}

					gsap.to(card, {
						scale: 0.9 + index * 0.02,
						ease: "none",
						scrollTrigger: {
							trigger: card,
							start: `top ${stackPosition}`,
							endTrigger: ".gsap-stack-end",
							end: "top 65%",
							scrub: true,
						},
					});
				}

				// Apply stack offset - each card sits higher on the previous
				if (index > 0) {
					card.style.marginTop = `-${stackOffset}px`;
				}
			});

			return () => {
				ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
			};
		},
		{ scope: containerRef }
	);

	return (
		<div ref={containerRef} className={`gsap-stack-container ${className}`.trim()}>
			<div className="gsap-stack-inner">
				{children}
				<div className="gsap-stack-end h-1 w-full" />
			</div>
		</div>
	);
}
