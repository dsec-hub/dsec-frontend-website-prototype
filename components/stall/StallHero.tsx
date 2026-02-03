'use client';

import { useState, useEffect } from 'react';
import SectionLabel from '@/components/SectionLabel';
import GradientText from '@/components/GradientText';
import CountUp from '@/components/CountUp';
import DecryptedText from '@/components/DecryptedText';

// Event dates: Feb 23-24, 2026
const EVENT_DATE = new Date('2026-02-23T11:30:00+11:00').getTime();

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

export default function StallHero() {
  const timeLeft = useCountdown(EVENT_DATE);
  const [mounted, setMounted] = useState(false);
  const [animationsReady, setAnimationsReady] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => {
      setAnimationsReady(true);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-background">
      {/* Animated Circuit Board Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,188,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,188,212,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      {/* Floating Orbs - Cyan Theme */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-secondary/20 rounded-full blur-[100px] animate-pulse-glow" />
      <div className="absolute top-40 left-20 w-96 h-96 bg-lime/10 rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-20 right-1/3 w-80 h-80 bg-secondary/15 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: '2s' }} />

      {/* Tech Pattern Rain Effect */}
      <div className="absolute inset-0 overflow-hidden opacity-[0.04] pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute text-secondary font-mono text-xs whitespace-nowrap animate-float"
            style={{
              left: `${(i * 7) + Math.random() * 3}%`,
              top: `-${Math.random() * 100}px`,
              animationDelay: `${i * 0.4}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
            }}
          >
            {[...Array(20)].map((_, j) => (
              <div key={j} className="opacity-50">{['<>', '/>', '{}', '[]', '()', '::'][j % 6]}</div>
            ))}
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 md:px-12 pt-32 pb-20 max-w-6xl mx-auto min-h-screen flex flex-col items-center justify-center">
        {/* Event Badge */}
        <div className="mb-6">
          <SectionLabel>T1 Market Day 2026</SectionLabel>
        </div>

        {/* Main Headline */}
        <div className="relative mb-6">
          <h1 className="flex flex-col items-center font-grotesk text-5xl md:text-7xl lg:text-8xl font-bold text-center leading-tight tracking-tight">
            <span className="block text-foreground">
              {animationsReady ? (
                <DecryptedText
                  text="DSEC at"
                  speed={80}
                  sequential={true}
                  revealDirection="start"
                  animateOn="both"
                  className="text-foreground"
                  encryptedClassName="text-foreground/50"
                />
              ) : (
                <span className="text-foreground">DSEC at</span>
              )}
            </span>
            <GradientText
              colors={['#00bcd4', '#c6ff00', '#00e5ff', '#00bcd4']}
              animationSpeed={4}
              className="font-grotesk text-5xl md:text-7xl lg:text-8xl font-bold"
            >
              T1 Market Day
            </GradientText>
          </h1>
        </div>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-muted-foreground text-center max-w-2xl mb-8 leading-relaxed">
          Meet us at Burwood Sports Hall — <span className="text-foreground font-semibold">Feb 23-24, 11:30am-2:30pm</span>
        </p>

        {/* Intro Text */}
        <p className="text-base md:text-lg text-muted-foreground text-center max-w-3xl mb-10 leading-relaxed">
          The Deakin Software Engineering Club is back for Trimester 1 with live demos, exclusive merch, and a new rewards system that actually pays you to build real projects.
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
            href="https://instagram.com/deakin.sec"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-4 bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-full font-semibold transition-all flex items-center gap-2 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              <InstagramIcon />
              Follow @deakin.sec
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-secondary via-lime to-secondary bg-[length:200%_100%] opacity-0 group-hover:opacity-100 transition-opacity animate-[gradient-shift_2s_ease-in-out_infinite]" />
          </a>
          <a
            href="/events"
            className="px-8 py-4 border border-foreground/20 text-foreground hover:bg-foreground/10 rounded-full font-semibold transition-all flex items-center gap-2"
          >
            <CalendarIcon />
            View T1 Events
          </a>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 w-full max-w-3xl">
          <QuickStat icon={<LocationIcon />} value="Burwood" label="Sports Hall" />
          <QuickStat icon={<CalendarIcon />} value="Feb 23-24" label="Two Days" />
          <QuickStat icon={<ClockIcon />} value="3hrs" label="Each Day" />
          <QuickStat icon={<GiftIcon />} value="FREE" label="Giveaways" />
        </div>
      </div>

      {/* Gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />

      <style jsx>{`
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
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
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-secondary/20 via-lime/20 to-secondary/20 blur-sm -z-10" />
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
      <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
      <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
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
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-muted text-secondary mb-3 group-hover:bg-secondary/20 transition-colors">
        {icon}
      </div>
      <div className="font-grotesk text-2xl md:text-3xl font-bold text-foreground">{value}</div>
      <div className="text-xs text-muted-foreground mt-1">{label}</div>
    </div>
  );
}

// Icons
function InstagramIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
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

function ClockIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function GiftIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
    </svg>
  );
}
