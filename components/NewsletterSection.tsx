'use client';

import { useState, FormEvent } from 'react';

interface FloatingShape {
  type: 'circle' | 'square' | 'triangle';
  size: number;
  x: string;
  y: string;
  color: 'primary' | 'secondary' | 'lime' | 'accent' | 'coral';
  delay: number;
}

const shapes: FloatingShape[] = [
  { type: 'circle', size: 8, x: '10%', y: '20%', color: 'primary', delay: 0 },
  { type: 'square', size: 6, x: '85%', y: '15%', color: 'secondary', delay: 1 },
  { type: 'triangle', size: 10, x: '15%', y: '70%', color: 'lime', delay: 2 },
  { type: 'circle', size: 5, x: '90%', y: '60%', color: 'accent', delay: 0.5 },
  { type: 'square', size: 7, x: '75%', y: '80%', color: 'primary', delay: 1.5 },
  { type: 'circle', size: 4, x: '50%', y: '10%', color: 'secondary', delay: 2.5 },
  { type: 'triangle', size: 6, x: '25%', y: '85%', color: 'coral', delay: 3 },
  { type: 'square', size: 5, x: '60%', y: '75%', color: 'lime', delay: 0.8 },
];

const colorClasses: Record<string, string> = {
  primary: 'bg-primary',
  secondary: 'bg-secondary',
  lime: 'bg-lime',
  accent: 'bg-accent',
  coral: 'bg-coral',
};

const fillClasses: Record<string, string> = {
  primary: 'fill-primary',
  secondary: 'fill-secondary',
  lime: 'fill-lime',
  accent: 'fill-accent',
  coral: 'fill-coral',
};

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <section className="relative bg-background py-20 md:py-32 overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <FloatingShapes />
      </div>

      {/* Gradient orbs */}
      <div
        className="absolute top-1/2 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
        style={{ animation: 'dsec-pulse-glow 3s ease-in-out infinite' }}
      />
      <div
        className="absolute top-1/2 right-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"
        style={{ animation: 'dsec-pulse-glow 3s ease-in-out infinite', animationDelay: '1.5s' }}
      />

      <div className="relative z-10 px-6 md:px-12 max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
          <MailIcon />
          <span className="font-mono text-sm text-primary">Stay in the loop</span>
        </div>

        <h2 className="font-grotesk text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground mb-6">
          Get DSEC news in your inbox
        </h2>

        <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
          Sign up to hear about upcoming events, new projects, and opportunities to get involved with the Deakin Software Engineering Club. We only send useful updates—no spam, no noise.
        </p>

        {isSubmitted ? (
          <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-lime/10 border border-lime/20">
            <SparklesIcon />
            <span className="text-foreground font-medium">You&apos;re on the list! Check your inbox soon.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full h-14 pl-5 pr-4 rounded-full bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary focus:outline-none transition-colors"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="h-14 px-8 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold group flex items-center justify-center gap-2 transition-all disabled:opacity-70"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Subscribing...
                  </>
                ) : (
                  <>
                    Get DSEC updates
                    <svg
                      className="w-4 h-4 transition-transform group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </>
                )}
              </button>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              By subscribing, you agree to receive club updates. Unsubscribe anytime.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}

function FloatingShapes() {
  return (
    <div className="absolute inset-0">
      {shapes.map((shape, i) => (
        <div
          key={i}
          className="absolute opacity-20"
          style={{
            left: shape.x,
            top: shape.y,
            animation: 'dsec-float 6s ease-in-out infinite',
            animationDelay: `${shape.delay}s`,
          }}
        >
          {shape.type === 'circle' && (
            <div
              className={`rounded-full ${colorClasses[shape.color]}`}
              style={{ width: shape.size * 4, height: shape.size * 4 }}
            />
          )}
          {shape.type === 'square' && (
            <div
              className={`rounded-sm rotate-45 ${colorClasses[shape.color]}`}
              style={{ width: shape.size * 4, height: shape.size * 4 }}
            />
          )}
          {shape.type === 'triangle' && (
            <svg width={shape.size * 4} height={shape.size * 4} viewBox="0 0 24 24">
              <polygon points="12,2 22,22 2,22" className={fillClasses[shape.color]} />
            </svg>
          )}
        </div>
      ))}
    </div>
  );
}

function MailIcon() {
  return (
    <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  );
}

function SparklesIcon() {
  return (
    <svg className="w-5 h-5 text-lime" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
      />
    </svg>
  );
}
