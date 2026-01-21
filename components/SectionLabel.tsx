'use client';

import GradientText from '@/components/GradientText';

interface SectionLabelProps {
  children: React.ReactNode;
}

export default function SectionLabel({ children }: SectionLabelProps) {
  return (
    <GradientText
      colors={["#e91e63", "#ff6b6b", "#9c27b0", "#00bcd4"]}
      animationSpeed={8}
      showBorder={false}
      className="mb-4 font-medium font-mono text-sm tracking-wider uppercase "
    >
      {children}
    </GradientText>
  );
}
