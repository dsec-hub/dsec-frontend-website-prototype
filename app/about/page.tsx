import Navbar from '@/components/Navbar';
import AboutIntro from '@/components/about/AboutIntro';
import StoryTimeline from '@/components/about/StoryTimeline';
import VisionSection from '@/components/about/VisionSection';
import ExecTeamSection from '@/components/about/ExecTeamSection';
import CultureSection from '@/components/about/CultureSection';
import AboutCTA from '@/components/about/AboutCTA';
import Footer from '@/components/Footer';

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
