'use client';

import { useState, useEffect } from 'react';
import { ArrowRightIcon, CalendarIcon } from '@/components/icons';
import TransitionLink from '@/components/TransitionLink';
import SectionLabel from './SectionLabel';
import GradientText from './GradientText';
import { themeColors } from '@/lib/theme';
import type { BaseColor } from '@/types';

// Countdown target: March 28, 2026 9:00 AM AEDT
const HACKATHON_DATE = new Date('2026-03-28T09:00:00+11:00').getTime();

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

export default function FeaturedEventsSection(): React.ReactElement {
  return (
    <section className="relative overflow-hidden bg-background py-20">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute right-0 top-1/4 h-96 w-96 rounded-full bg-secondary/5 blur-3xl" />
        <div className="absolute bottom-1/4 left-0 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
        <div className="mb-12 md:mb-16">
          <SectionLabel>What&apos;s Happening</SectionLabel>
          <h2 className="mb-6 font-grotesk text-4xl leading-tight text-foreground md:text-5xl lg:text-6xl flex flex-wrap gap-4">
            Featured
            <GradientText
              colors={['#e91e63', '#ff6b6b', '#9c27b0', '#00bcd4']}
              animationSpeed={8}
              showBorder={false}
            >
              Events
            </GradientText>
          </h2>
          <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Join us at our upcoming events. Connect with fellow students, learn new skills,
            and be part of the Deakin software engineering community.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <T1StallCard />
          <HackathonCard />
        </div>
      </div>
    </section>
  );
}

function T1StallCard(): React.ReactElement {
  return (
    <TransitionLink
      href="/events"
      className="group relative flex flex-col justify-between rounded-2xl border p-6 transition-all duration-300 md:p-8 bg-secondary/10 hover:bg-secondary/15 border-secondary/20 hover:border-secondary/40 hover:shadow-lg hover:shadow-secondary/10 min-h-[320px]"
    >
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 overflow-hidden rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <GridPattern color="secondary" />
      </div>

      {/* Decorative Element */}
      <div className="absolute top-6 right-6 md:top-8 md:right-8">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/20 text-secondary text-xs font-mono uppercase tracking-wider">
          <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
          Coming Up
        </div>
      </div>

      <div className="relative z-10">
        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl text-secondary bg-secondary/20">
          <StallIcon />
        </div>
        <h3 className="mb-3 font-grotesk text-2xl font-bold text-foreground md:text-3xl">
          T1 Stall Day
        </h3>
        <p className="leading-relaxed text-muted-foreground text-base md:text-lg max-w-md">
          Kick off the trimester with DSEC! Visit our stall to learn about upcoming events,
          meet the team, grab some freebies, and sign up for the Hackathon.
        </p>

        {/* Event Details */}
        <div className="mt-6 flex flex-wrap gap-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <CalendarIcon className="w-4 h-4 text-secondary" />
            <span>Week 1, T1 2026</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <LocationIcon className="w-4 h-4 text-secondary" />
            <span>Burwood Campus</span>
          </div>
        </div>
      </div>

      <div className="relative z-10 mt-6">
        <div className="inline-flex h-10 w-10 translate-x-0 transform items-center justify-center rounded-full opacity-0 transition-all duration-300 group-hover:translate-x-2 group-hover:opacity-100 bg-secondary text-secondary-foreground">
          <ArrowRightIcon />
        </div>
      </div>
    </TransitionLink>
  );
}

function HackathonCard(): React.ReactElement {
  const timeLeft = useCountdown(HACKATHON_DATE);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <TransitionLink
      href="/hackathon"
      className="group relative flex flex-col justify-between rounded-2xl border p-6 transition-all duration-300 md:p-8 bg-primary/10 hover:bg-primary/15 border-primary/20 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 min-h-[320px] overflow-hidden"
    >
      {/* Animated Grid Background - Hackathon Style */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(233,30,99,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(233,30,99,0.05)_1px,transparent_1px)] bg-[size:30px_30px] opacity-50" />

      {/* Floating Orbs - Hackathon Style */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-[60px] animate-pulse-glow" />
      <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-accent/15 rounded-full blur-[50px] animate-pulse-glow" style={{ animationDelay: '1s' }} />

      {/* Binary Rain Effect */}
      <div className="absolute inset-0 overflow-hidden opacity-[0.03] pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute text-primary font-mono text-xs whitespace-nowrap animate-float"
            style={{
              left: `${(i * 12) + 5}%`,
              top: `-${20 + i * 5}px`,
              animationDelay: `${i * 0.4}s`,
              animationDuration: `${6 + i * 0.5}s`,
            }}
          >
            {[...Array(15)].map((_, j) => (
              <div key={j}>{Math.random() > 0.5 ? '1' : '0'}</div>
            ))}
          </div>
        ))}
      </div>

      {/* Event Badge */}
      <div className="absolute top-6 right-6 md:top-8 md:right-8 z-10">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/20 text-primary text-xs font-mono uppercase tracking-wider">
          <RocketIcon className="w-3 h-3" />
          36 Hours
        </div>
      </div>

      <div className="relative z-10">
        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl text-primary bg-primary/20">
          <HackathonIcon />
        </div>
        <h3 className="mb-2 font-grotesk text-2xl font-bold text-foreground md:text-3xl">
          ACUSYS x DSEC
        </h3>
        <GradientText
          colors={['#e91e63', '#ff6b6b', '#9c27b0', '#00bcd4']}
          animationSpeed={4}
          showBorder={false}
          className="font-grotesk text-xl font-bold md:text-2xl mb-3"
        >
          Hackathon 2026
        </GradientText>
        <p className="leading-relaxed text-muted-foreground text-base max-w-md">
          Australia&apos;s cross-university hackathon bridging software engineering and cybersecurity.
        </p>

        {/* Countdown Timer */}
        <div className="mt-6">
          <div className="flex items-center gap-2 md:gap-3">
            <CountdownUnit value={mounted ? timeLeft.days : 0} label="D" />
            <span className="text-primary font-bold">:</span>
            <CountdownUnit value={mounted ? timeLeft.hours : 0} label="H" />
            <span className="text-primary font-bold">:</span>
            <CountdownUnit value={mounted ? timeLeft.minutes : 0} label="M" />
            <span className="text-primary font-bold">:</span>
            <CountdownUnit value={mounted ? timeLeft.seconds : 0} label="S" />
          </div>
        </div>

        {/* Quick Info */}
        <div className="mt-4 flex flex-wrap gap-3">
          <div className="flex items-center gap-2 text-xs text-muted-foreground bg-muted/50 px-2 py-1 rounded-full">
            <CalendarIcon className="w-3 h-3 text-primary" />
            <span>March 28-29</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground bg-muted/50 px-2 py-1 rounded-full">
            <LocationIcon className="w-3 h-3 text-primary" />
            <span>Hybrid</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground bg-muted/50 px-2 py-1 rounded-full">
            <TeamIcon className="w-3 h-3 text-primary" />
            <span>Teams of 4</span>
          </div>
        </div>
      </div>

      <div className="relative z-10 mt-6">
        <div className="inline-flex h-10 w-10 translate-x-0 transform items-center justify-center rounded-full opacity-0 transition-all duration-300 group-hover:translate-x-2 group-hover:opacity-100 bg-primary text-primary-foreground">
          <ArrowRightIcon />
        </div>
      </div>
    </TransitionLink>
  );
}

interface CountdownUnitProps {
  value: number;
  label: string;
}

function CountdownUnit({ value, label }: CountdownUnitProps) {
  const displayValue = value.toString().padStart(2, '0');

  return (
    <div className="flex items-center gap-1">
      <div className="bg-card/80 border border-border rounded-lg px-2 py-1 min-w-[36px] text-center">
        <span className="font-mono text-lg md:text-xl font-bold text-foreground tabular-nums">
          {displayValue}
        </span>
      </div>
      <span className="text-xs font-mono text-muted-foreground">{label}</span>
    </div>
  );
}

function GridPattern({ color }: { color: BaseColor }): React.ReactElement {
  return (
    <svg
      className="absolute inset-0 h-full w-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id={`featured-grid-${color}`}
          width="20"
          height="20"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="1" cy="1" r="1" fill={themeColors[color]} opacity="0.3" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#featured-grid-${color})`} />
    </svg>
  );
}

// Icons
function StallIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  );
}

function HackathonIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  );
}

function LocationIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function TeamIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  );
}

function RocketIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  );
}
