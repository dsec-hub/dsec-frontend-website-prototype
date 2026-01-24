'use client';

import { useState, useEffect } from 'react';
import SectionLabel from '@/components/SectionLabel';
import GradientText from '@/components/GradientText';

// Countdown target: March 28, 2026 9:00 AM AEDT
const TARGET_DATE = new Date('2026-03-28T09:00:00+11:00').getTime();

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function useCountdown(targetDate: number): TimeLeft {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return timeLeft;
}

export default function HackathonHero() {
  const timeLeft = useCountdown(TARGET_DATE);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-background">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(233,30,99,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(233,30,99,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      {/* Floating Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-[100px] animate-pulse-glow" />
      <div className="absolute top-40 right-20 w-96 h-96 bg-secondary/15 rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-coral/10 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: '2s' }} />

      {/* Binary Rain Effect */}
      <div className="absolute inset-0 overflow-hidden opacity-[0.03] pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-primary font-mono text-xs whitespace-nowrap animate-float"
            style={{
              left: `${(i * 5) + Math.random() * 3}%`,
              top: `-${Math.random() * 100}px`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
            }}
          >
            {[...Array(30)].map((_, j) => (
              <div key={j}>{Math.random() > 0.5 ? '1' : '0'}</div>
            ))}
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 md:px-12 pt-32 pb-20 max-w-6xl mx-auto min-h-screen flex flex-col items-center justify-center">
        {/* Event Badge */}
        <div className="mb-6">
          <SectionLabel>ACUSYS x DSEC Hackathon 2026</SectionLabel>
        </div>

        {/* Main Headline with Glitch Effect */}
        <div className="relative mb-6">
          <h1 className="font-grotesk text-5xl md:text-7xl lg:text-8xl font-bold text-center leading-tight tracking-tight">
            <span className="block text-foreground">36 Hours.</span>
            <span className="block text-foreground">One Challenge.</span>
            <GradientText
              colors={['#e91e63', '#ff6b6b', '#00bcd4', '#e91e63']}
              animationSpeed={4}
              className="font-grotesk text-5xl md:text-7xl lg:text-8xl font-bold"
            >
              Build Something Real.
            </GradientText>
          </h1>
        </div>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-muted-foreground text-center max-w-2xl mb-8 leading-relaxed">
          Australia&apos;s cross-university hackathon bridging software engineering and cybersecurity.
          <span className="block mt-2 text-foreground font-semibold">March 28-29, 2026</span>
        </p>

        {/* Countdown Timer */}
        <div className="mb-12">
          <div className="flex items-center justify-center gap-3 md:gap-6">
            <CountdownUnit value={mounted ? timeLeft.days : 0} label="DAYS" />
            <CountdownSeparator />
            <CountdownUnit value={mounted ? timeLeft.hours : 0} label="HOURS" />
            <CountdownSeparator />
            <CountdownUnit value={mounted ? timeLeft.minutes : 0} label="MINUTES" />
            <CountdownSeparator />
            <CountdownUnit value={mounted ? timeLeft.seconds : 0} label="SECONDS" />
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <a
            href="#register"
            className="group relative px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full font-semibold transition-all flex items-center gap-2 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              <RocketIcon />
              Register Now
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-coral to-primary bg-[length:200%_100%] opacity-0 group-hover:opacity-100 transition-opacity animate-[gradient-shift_2s_ease-in-out_infinite]" />
          </a>
          <a
            href="#partner"
            className="px-8 py-4 border border-foreground/20 text-foreground hover:bg-foreground/10 rounded-full font-semibold transition-all flex items-center gap-2"
          >
            <HandshakeIcon />
            Become a Partner
          </a>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 w-full max-w-3xl">
          <QuickStat icon={<ClockIcon />} value="36h" label="Non-Stop Hacking" />
          <QuickStat icon={<LocationIcon />} value="Hybrid" label="Melbourne + Online" />
          <QuickStat icon={<TeamIcon />} value="4" label="Max Team Size" />
          <QuickStat icon={<PrizeIcon />} value="$$$" label="Cash Prizes" />
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce">
          <span className="text-xs text-muted-foreground mb-2 font-mono">SCROLL</span>
          <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex items-start justify-center p-1">
            <div className="w-1.5 h-3 bg-primary rounded-full animate-[scroll-indicator_2s_ease-in-out_infinite]" />
          </div>
        </div>
      </div>

      {/* Gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />

      <style jsx>{`
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes scroll-indicator {
          0%, 100% { transform: translateY(0); opacity: 1; }
          50% { transform: translateY(8px); opacity: 0.5; }
        }
      `}</style>
    </section>
  );
}

interface CountdownUnitProps {
  value: number;
  label: string;
}

function CountdownUnit({ value, label }: CountdownUnitProps) {
  const displayValue = value.toString().padStart(2, '0');

  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <div className="bg-card border border-border rounded-xl px-4 py-3 md:px-6 md:py-4 min-w-[60px] md:min-w-[80px]">
          <span className="font-mono text-3xl md:text-5xl font-bold text-foreground tabular-nums">
            {displayValue}
          </span>
        </div>
        {/* Glowing border effect */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 blur-sm -z-10" />
      </div>
      <span className="mt-2 text-xs md:text-sm font-mono text-muted-foreground tracking-widest">
        {label}
      </span>
    </div>
  );
}

function CountdownSeparator() {
  return (
    <div className="flex flex-col gap-2 pb-6">
      <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
      <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
    </div>
  );
}

interface QuickStatProps {
  icon: React.ReactNode;
  value: string;
  label: string;
}

function QuickStat({ icon, value, label }: QuickStatProps) {
  return (
    <div className="text-center group">
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-muted text-primary mb-3 group-hover:bg-primary/20 transition-colors">
        {icon}
      </div>
      <div className="font-grotesk text-2xl md:text-3xl font-bold text-foreground">{value}</div>
      <div className="text-xs text-muted-foreground mt-1">{label}</div>
    </div>
  );
}

// Icons
function RocketIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  );
}

function HandshakeIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function TeamIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  );
}

function PrizeIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  );
}
