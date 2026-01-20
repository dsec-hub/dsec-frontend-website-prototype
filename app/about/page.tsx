import AboutCTA from '@/components/about/AboutCTA';
import AboutIntro from '@/components/about/AboutIntro';
import CultureSection from '@/components/about/CultureSection';
import ExecTeamSection from '@/components/about/ExecTeamSection';
import StoryTimeline from '@/components/about/StoryTimeline';
import VisionSection from '@/components/about/VisionSection';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <AboutIntro />
      <StoryTimeline />
      <VisionSection />
      <ExecTeamSection />
      <CultureSection />
      <AboutCTA />
      <Footer />
    </main>
  );
}
