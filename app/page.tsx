import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AnimatedMarquee from '@/components/AnimatedMarquee';
import AboutSection from '@/components/AboutSection';
import BentoGrid from '@/components/BentoGrid';
import PartnersSection from '@/components/PartnersSection';
import NewsletterSection from '@/components/NewsletterSection';
import Footer from '@/components/Footer';

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
