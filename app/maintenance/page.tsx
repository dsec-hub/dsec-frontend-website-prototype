'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DarkVeil from '@/components/DarkVeil';
import { useEffect, useState } from 'react';

export default function MaintenancePage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Example maintenance window (can be configured)
  const maintenanceEnd = 'January 25, 2026 06:00:00 GMT+1100';

  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Navbar />

      {/* Maintenance Content Section */}
      <section className="relative flex-1 flex items-center justify-center overflow-hidden">
        {/* DarkVeil Background */}
        <div className="absolute inset-0">
          <DarkVeil
            hueShift={280}
            noiseIntensity={0.02}
            scanlineIntensity={0.1}
            speed={0.3}
            scanlineFrequency={0.5}
            warpAmount={0.5}
            resolutionScale={1}
          />
        </div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background/60" />

        {/* Content */}
        <div className="relative z-10 text-center py-20 px-4 max-w-2xl mx-auto">
          {/* Icon */}
          <div className="flex justify-center mb-6">
            {mounted && (
              <div className="relative">
                <div className="absolute inset-0 blur-2xl bg-accent/30 rounded-full" />
                <svg
                  className="w-24 h-24 text-accent relative"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
            )}
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
            Scheduled Maintenance
          </h1>

          {/* Description */}
          <p className="text-muted-foreground text-base md:text-lg mb-8 leading-relaxed">
            We&apos;re currently performing scheduled maintenance to improve
            your experience. We&apos;ll be back online shortly.
          </p>

          {/* Status Box */}
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-3 h-3 bg-accent rounded-full animate-pulse" />
              <span className="font-semibold text-foreground">
                Maintenance in Progress
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Expected completion: <span className="text-accent font-mono">{maintenanceEnd}</span>
            </p>
          </div>

          {/* Updates */}
          <div className="text-left bg-muted/30 backdrop-blur-sm border border-border rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-3 text-foreground">
              What&apos;s Being Updated
            </h2>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <svg
                  className="w-5 h-5 text-accent mt-0.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Database optimization and security updates</span>
              </li>
              <li className="flex items-start gap-2">
                <svg
                  className="w-5 h-5 text-accent mt-0.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Performance improvements and bug fixes</span>
              </li>
              <li className="flex items-start gap-2">
                <svg
                  className="w-5 h-5 text-accent mt-0.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Infrastructure upgrades</span>
              </li>
            </ul>
          </div>

          {/* Decorative code-like element */}
          <p className="mt-12 font-mono text-xs text-muted-foreground/60">
            status: MAINTENANCE_MODE | code: 503
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
