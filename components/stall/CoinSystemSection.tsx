'use client';

import { useRef, useEffect, useState } from 'react';
import SectionLabel from '@/components/SectionLabel';
import GradientText from '@/components/GradientText';
import { Canvas, useFrame } from '@react-three/fiber';
import { RoundedBox, Text, MeshTransmissionMaterial } from '@react-three/drei';
import * as THREE from 'three';

function DSECCoin({ mousePosition }: { mousePosition: { x: number; y: number } }) {
  const coinRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state, delta) => {
    if (coinRef.current) {
      // Base rotation
      coinRef.current.rotation.y += delta * 0.5;

      // Add subtle mouse-following tilt
      const targetRotationX = mousePosition.y * 0.3;
      const targetRotationZ = -mousePosition.x * 0.3;

      coinRef.current.rotation.x = THREE.MathUtils.lerp(
        coinRef.current.rotation.x,
        targetRotationX,
        0.05
      );
      coinRef.current.rotation.z = THREE.MathUtils.lerp(
        coinRef.current.rotation.z,
        targetRotationZ,
        0.05
      );

      // Subtle floating animation
      coinRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.1;
    }
  });

  return (
    <group
      ref={coinRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      scale={hovered ? 1.1 : 1}
    >
      {/* Main coin body */}
      <mesh castShadow receiveShadow>
        <cylinderGeometry args={[1.5, 1.5, 0.2, 64]} />
        <meshStandardMaterial
          color="#c6ff00"
          metalness={0.9}
          roughness={0.1}
          envMapIntensity={1}
        />
      </mesh>

      {/* Coin edge detail */}
      <mesh position={[0, 0, 0]}>
        <torusGeometry args={[1.5, 0.1, 16, 64]} />
        <meshStandardMaterial
          color="#00bcd4"
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>

      {/* Inner ring decoration */}
      <mesh position={[0, 0.11, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.8, 1.2, 64]} />
        <meshStandardMaterial
          color="#00bcd4"
          metalness={0.7}
          roughness={0.3}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* DSEC Text on front */}
      <Text
        position={[0, 0.12, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        fontSize={0.5}
        color="#0a0a0a"
        font="/fonts/SpaceGrotesk-Bold.ttf"
        anchorX="center"
        anchorY="middle"
      >
        DSEC
      </Text>

      {/* Coin symbol on back */}
      <Text
        position={[0, -0.12, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        fontSize={0.6}
        color="#0a0a0a"
        anchorX="center"
        anchorY="middle"
      >
        $
      </Text>

      {/* Glow effect */}
      <pointLight position={[0, 1, 0]} intensity={0.5} color="#c6ff00" />
    </group>
  );
}

function CoinScene() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    const y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    setMousePosition({ x, y });
  };

  return (
    <div
      className="w-full h-[400px] md:h-[500px] cursor-grab active:cursor-grabbing"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setMousePosition({ x: 0, y: 0 })}
    >
      <Canvas
        camera={{ position: [0, 2, 5], fov: 45 }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <directionalLight position={[-5, 5, -5]} intensity={0.5} color="#00bcd4" />
        <spotLight position={[0, 10, 0]} intensity={0.5} color="#c6ff00" angle={0.3} penumbra={1} />

        <DSECCoin mousePosition={mousePosition} />

        {/* Environment reflection */}
        <mesh position={[0, -2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[20, 20]} />
          <meshStandardMaterial color="#0a0a0a" metalness={0.9} roughness={0.1} />
        </mesh>
      </Canvas>
    </div>
  );
}

export default function CoinSystemSection() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section id="coin-system" className="relative py-24 md:py-32 bg-muted/30 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(198,255,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(198,255,0,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Decorative Orbs */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-lime/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <SectionLabel>New This Trimester</SectionLabel>
            <h2 className="font-grotesk text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight flex flex-wrap gap-3">
              Earn Coins for
              <GradientText
                colors={['#c6ff00', '#00bcd4', '#c6ff00']}
                animationSpeed={5}
                showBorder={false}
              >
                Building Stuff
              </GradientText>
            </h2>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                We&apos;re launching a <span className="text-lime font-semibold">coin-based reward system</span> this trimester. Attend workshops, contribute to projects, help with events—earn coins.
              </p>
              <p>
                Redeem them for <span className="text-foreground">merch, event perks, or priority spots</span> in high-demand sessions.
              </p>
            </div>

            {/* Ways to Earn */}
            <div className="mt-8 space-y-4">
              <h3 className="font-grotesk text-lg font-semibold text-foreground mb-4">Ways to Earn:</h3>
              <div className="grid grid-cols-2 gap-3">
                <EarnItem icon={<WorkshopIcon />} text="Attend workshops" coins="+10" />
                <EarnItem icon={<CodeIcon />} text="Contribute code" coins="+25" />
                <EarnItem icon={<HelpIcon />} text="Help at events" coins="+50" />
                <EarnItem icon={<IdeaIcon />} text="Lead a project" coins="+100" />
              </div>
            </div>

            <p className="mt-8 text-sm text-muted-foreground italic">
              Explore the interactive 3D coin—it&apos;s built with Three.js, just like the stuff you&apos;ll learn to make.
            </p>
          </div>

          {/* Right Visual - 3D Coin */}
          <div className="relative">
            {isClient ? (
              <CoinScene />
            ) : (
              <div className="w-full h-[400px] md:h-[500px] flex items-center justify-center bg-card rounded-2xl">
                <div className="text-muted-foreground">Loading 3D Coin...</div>
              </div>
            )}

            {/* Floating badge */}
            <div className="absolute -top-3 -right-3 bg-lime text-lime-foreground px-4 py-2 rounded-full text-sm font-bold rotate-12 shadow-lg shadow-lime/25 z-10">
              NEW
            </div>

            {/* Decorative floating elements */}
            <div className="absolute -top-6 -left-6 w-12 h-12 bg-secondary/20 rounded-lg rotate-12 animate-float" />
            <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-lime/20 rounded-full animate-float" style={{ animationDelay: '1s' }} />
          </div>
        </div>
      </div>
    </section>
  );
}

interface EarnItemProps {
  icon: React.ReactNode;
  text: string;
  coins: string;
}

function EarnItem({ icon, text, coins }: EarnItemProps) {
  return (
    <div className="flex items-center gap-3 bg-card border border-border rounded-lg px-4 py-3 group hover:border-lime/30 transition-colors">
      <div className="text-lime">{icon}</div>
      <div className="flex-1">
        <span className="text-sm text-muted-foreground">{text}</span>
      </div>
      <span className="font-mono text-lime text-sm font-bold">{coins}</span>
    </div>
  );
}

// Icons
function WorkshopIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  );
}

function CodeIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  );
}

function HelpIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  );
}

function IdeaIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  );
}
