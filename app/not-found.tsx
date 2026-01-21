'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FaultyTerminal from '@/components/FaultyTerminal';
import FuzzyText from '@/components/FuzzyText';
import TransitionLink from '@/components/TransitionLink';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Navbar />

      {/* 404 Content Section */}
      <section className="relative flex-1 flex items-center justify-center overflow-hidden">
        {/* FaultyTerminal Background */}
        <div className="absolute inset-0">
          <FaultyTerminal
            scale={1.5}
            gridMul={[2, 1]}
            digitSize={1.2}
            timeScale={0.4}
            pause={false}
            scanlineIntensity={0.4}
            glitchAmount={1.2}
            flickerAmount={0.8}
            noiseAmp={1}
            chromaticAberration={0}
            dither={0}
            curvature={0.08}
            tint="#c6ff00"
            mouseReact
            mouseStrength={0.4}
            pageLoadAnimation
            brightness={0.35}
          />
        </div>

        {/* Dark overlay for better text contrast */}
        {/* <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background/70" /> */}

        {/* Content */}
        <div className="relative z-10 text-center py-20">
          {/* 404 Header with FuzzyText */}
          <div className="flex justify-center mb-6">
            <FuzzyText
              fontSize={100}
              fontWeight={900}
              color="#c6ff00"
              baseIntensity={0.15}
              hoverIntensity={0.4}
              enableHover
              fuzzRange={40}
            >
              404
            </FuzzyText>
          </div>

          {/* Description */}
          <p className="max-w-md mx-auto text-muted-foreground text-base md:text-lg mb-8 leading-relaxed">
            Looks like you&apos;ve wandered into uncharted territory.
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>

          {/* CTA Button */}
          <TransitionLink
            href="/"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full font-semibold transition-all hover:scale-105"
          >
            Return Home
          </TransitionLink>

          {/* Decorative code-like element */}
          <p className="mt-12 font-mono text-xs text-muted-foreground/60">
            error_code: PAGE_NOT_FOUND | status: 404
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
