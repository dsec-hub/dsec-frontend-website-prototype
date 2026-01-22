import type { ReactNode } from "react";

import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";

import PageTransition from "@/components/PageTransition";
import ClickSpark from "@/components/ClickSpark";
import PreLoader from "@/components/PreLoader";
import { LoaderProvider } from "@/app/loader-context";

import type { Metadata } from "next";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "DSEC - Deakin Software Engineering Club",
  description:
    "Deakin's Home for Software Engineers. Join the Deakin Software Engineering Club to design, build, and ship real projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>): React.ReactElement {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} ${spaceGrotesk.variable} antialiased`}
      >
        <LoaderProvider>
          <PreLoader />
          <PageTransition />
          <ClickSpark 
            sparkColor="#fff" 
            sparkSize={10}
            sparkRadius={15}
            sparkCount={8}
            duration={400}
          >
            {children}
          </ClickSpark>
        </LoaderProvider>
      </body>
    </html>
  );
}
