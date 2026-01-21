"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import Image from "next/image";

import GradientText from "@/components/GradientText";
import {
  ArrowRightIcon,
  LoadingSpinner,
  MailSmallIcon,
  SparklesIcon,
} from "@/components/icons";
import { SparklesText } from "./ui/sparkles-text";

interface FloatingImage {
  x: string;
  y: string;
  size: number;
  delay: number;
  rotation: number;
  shapeIndex: number;
}

const getRandomInt = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const floatingImages: FloatingImage[] = [
  { x: "10%", y: "20%", size: getRandomInt(40, 100), delay: 0, rotation: getRandomInt(-45, 45), shapeIndex: getRandomInt(1, 114) },
  { x: "85%", y: "15%", size: getRandomInt(40, 100), delay: 1, rotation: getRandomInt(-45, 45), shapeIndex: getRandomInt(1, 114) },
  { x: "15%", y: "70%", size: getRandomInt(40, 100), delay: 2, rotation: getRandomInt(-45, 45), shapeIndex: getRandomInt(1, 114) },
  { x: "90%", y: "60%", size: getRandomInt(40, 100), delay: 0.5, rotation: getRandomInt(-45, 45), shapeIndex: getRandomInt(1, 114) },
  { x: "75%", y: "80%", size: getRandomInt(40, 100), delay: 1.5, rotation: getRandomInt(-45, 45), shapeIndex: getRandomInt(1, 114) },
  { x: "50%", y: "10%", size: getRandomInt(40, 100), delay: 2.5, rotation: getRandomInt(-45, 45), shapeIndex: getRandomInt(1, 114) },
];

export default function NewsletterSection(): React.ReactElement {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent): Promise<void> => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
		<section className="relative overflow-hidden bg-background py-20 md:py-32">
			<div className="pointer-events-none absolute inset-0 overflow-hidden">
				<FloatingShapes />
			</div>

			<div
				className="absolute left-1/4 top-1/2 h-64 w-64 rounded-full bg-primary/10 blur-3xl"
				style={{ animation: "dsec-pulse-glow 3s ease-in-out infinite" }}
			/>
			<div
				className="absolute right-1/4 top-1/2 h-64 w-64 rounded-full bg-secondary/10 blur-3xl"
				style={{
					animation: "dsec-pulse-glow 3s ease-in-out infinite",
					animationDelay: "1.5s",
				}}
			/>

			<div className="relative z-10 mx-auto max-w-4xl px-6 text-center md:px-12">
				<div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2">
					<MailSmallIcon className="text-primary w-4 h-4" />
					<p className="font-mono text-sm text-nowrap text-primary">
						Stay in the loop
					</p>
				</div>

				<h2 className="mb-6 font-grotesk text-4xl leading-tight text-foreground md:text-5xl lg:text-6xl">
					Get DSEC news in your <SparklesText>inbox</SparklesText>
				</h2>

				<p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
					Sign up to hear about upcoming events, new projects, and opportunities
					to get involved with the Deakin Software Engineering Club. We only
					send useful updates—no spam, no noise.
				</p>

				{isSubmitted ? (
					<div className="inline-flex items-center gap-3 rounded-2xl border border-lime/20 bg-lime/10 px-6 py-4">
						<SparklesIcon className="text-lime" />
						<span className="font-medium text-foreground">
							You&apos;re on the list! Check your inbox soon.
						</span>
					</div>
				) : (
					<form onSubmit={handleSubmit} className="mx-auto max-w-md">
						<div className="flex flex-col gap-3 sm:flex-row">
							<div className="relative flex-1">
								<input
									type="email"
									placeholder="Enter your email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									required
									className="h-14 w-full rounded-full border border-border bg-muted pl-5 pr-4 text-foreground transition-colors placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-primary"
								/>
							</div>
							<button
								type="submit"
								disabled={isSubmitting}
								className="group flex h-14 items-center justify-center gap-2 rounded-full bg-primary px-8 font-semibold text-primary-foreground transition-all hover:bg-primary/90 disabled:opacity-70"
							>
								{isSubmitting ? (
									<>
										<LoadingSpinner className="h-4 w-4" />
										Subscribing...
									</>
								) : (
									<>
										Get Updates
										<ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
									</>
								)}
							</button>
						</div>
						<p className="mt-4 text-sm text-muted-foreground">
							By subscribing, you agree to receive club updates. Unsubscribe
							anytime.
						</p>
					</form>
				)}
			</div>
		</section>
	);
}

function FloatingShapes(): React.ReactElement {
  return (
    <div className="absolute inset-0">
      {floatingImages.map((img, i) => (
        <div
          key={i}
          className="absolute opacity-20"
          style={{
            left: img.x,
            top: img.y,
            animation: "dsec-float 6s ease-in-out infinite",
            animationDelay: `${img.delay}s`,
            transform: `rotate(${img.rotation}deg)`,
          }}
        >
          <Image
            src={`/shapes/Cool Shape-${img.shapeIndex}.png`}
            alt=""
            width={img.size}
            height={img.size}
            className="pointer-events-none"
          />
        </div>
      ))}
    </div>
  );
}
