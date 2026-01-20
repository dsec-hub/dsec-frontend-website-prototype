import AboutSection from '@/components/AboutSection';
import AnimatedMarquee from '@/components/AnimatedMarquee';
import BentoGrid from '@/components/BentoGrid';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import NewsletterSection from '@/components/NewsletterSection';
import PartnersSection from '@/components/PartnersSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <AnimatedMarquee />
      <AboutSection />
      <BentoGrid />
      <PartnersSection />
      <NewsletterSection />
      <Footer />
    </main>
  );
}
