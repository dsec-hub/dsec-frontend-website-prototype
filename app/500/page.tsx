'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FaultyTerminal from '@/components/FaultyTerminal';
import FuzzyText from '@/components/FuzzyText';
import TransitionLink from '@/components/TransitionLink';

export default function ServerErrorPage() {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Navbar />

      {/* 500 Content Section */}
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
            glitchAmount={1.5}
            flickerAmount={1.0}
            noiseAmp={1.2}
            chromaticAberration={0}
            dither={0}
            curvature={0.08}
            tint="#ff6b6b"
            mouseReact
            mouseStrength={0.4}
            pageLoadAnimation
            brightness={0.35}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center py-20 px-4">
          {/* 500 Header with FuzzyText */}
          <div className="flex justify-center mb-6">
            <FuzzyText
              fontSize={100}
              fontWeight={900}
              color="#ff6b6b"
              baseIntensity={0.15}
              hoverIntensity={0.4}
              enableHover
              fuzzRange={40}
            >
              500
            </FuzzyText>
          </div>

          {/* Title */}
          <h1 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
            Internal Server Error
          </h1>

          {/* Description */}
          <p className="max-w-md mx-auto text-muted-foreground text-base md:text-lg mb-8 leading-relaxed">
            Something went wrong on our end. Our team has been notified and
            we&apos;re working on fixing this issue.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <TransitionLink
              href="/"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full font-semibold transition-all hover:scale-105"
            >
              Return Home
            </TransitionLink>
            <button
              onClick={() => window.location.reload()}
              className="inline-flex items-center gap-2 px-8 py-3 bg-card hover:bg-card/80 text-foreground border border-border rounded-full font-semibold transition-all hover:scale-105"
            >
              Try Again
            </button>
          </div>

          {/* Decorative code-like element */}
          <p className="mt-12 font-mono text-xs text-muted-foreground/60">
            error_code: INTERNAL_SERVER_ERROR | status: 500
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
