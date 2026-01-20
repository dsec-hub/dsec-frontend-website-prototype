'use client';

const words = [
  { text: 'LEARN', color: 'text-primary' },
  { text: 'BUILD', color: 'text-cyan' },
  { text: 'SHIP', color: 'text-lime' },
];

export default function AnimatedMarquee() {
  return (
    <div className="relative overflow-hidden bg-background py-4">
      {/* First marquee row - angled upward */}
      <div
        className="relative -rotate-2 origin-center mb-2"
        style={{
          background: 'linear-gradient(90deg, rgba(233, 30, 99, 0.1) 0%, rgba(0, 188, 212, 0.1) 50%, rgba(198, 255, 0, 0.1) 100%)',
        }}
      >
        <div className="py-4 overflow-hidden">
          <MarqueeContent />
        </div>
      </div>

      {/* Second marquee row - angled downward */}
      <div
        className="relative rotate-2 origin-center -mt-4"
        style={{
          background: 'linear-gradient(90deg, rgba(198, 255, 0, 0.15) 0%, rgba(0, 188, 212, 0.15) 50%, rgba(233, 30, 99, 0.15) 100%)',
        }}
      >
        <div className="py-4 overflow-hidden">
          <MarqueeContent reverse />
        </div>
      </div>

      {/* Overlay gradients for fade effect */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />
    </div>
  );
}

function MarqueeContent({ reverse = false }: { reverse?: boolean }) {
  return (
    <div
      className="flex items-center whitespace-nowrap"
      style={{ animation: reverse ? 'dsec-marquee-reverse 30s linear infinite' : 'dsec-marquee 30s linear infinite' }}
    >
      {Array.from({ length: 8 }).map((_, setIndex) => (
        <div key={setIndex} className="flex items-center">
          {words.map((word, wordIndex) => (
            <span key={`${setIndex}-${wordIndex}`} className="flex items-center">
              <span
                className={`font-grotesk text-4xl md:text-5xl lg:text-6xl font-bold ${word.color} mx-4 tracking-wide`}
                style={{
                  textShadow:
                    word.color === 'text-lime'
                      ? '0 0 20px rgba(198, 255, 0, 0.5)'
                      : word.color === 'text-cyan'
                        ? '0 0 20px rgba(0, 188, 212, 0.5)'
                        : '0 0 20px rgba(233, 30, 99, 0.5)',
                }}
              >
                {word.text}
              </span>
              <span className={word.color}>
                <CodeIcon />
              </span>
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}

function CodeIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="inline-block mx-2">
      <path d="M8 6L3 12L8 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 6L21 12L16 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
