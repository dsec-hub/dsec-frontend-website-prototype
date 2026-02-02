import ComingSoon from '@/components/auth/ComingSoon';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import ExplainerSection from '@/components/projects/ExplainerSection';
import ProjectCardsGrid from '@/components/projects/ProjectCardsGrid';
import ProjectsCTA from '@/components/projects/ProjectsCTA';
import ProjectsHero from '@/components/projects/ProjectsHero';
import { featureFlags } from '@/lib/feature-flags';

export default function ProjectsPage() {
  // Show coming soon page if content pages are disabled
  if (featureFlags.CONTENT_PAGES_DISABLED) {
    return (
      <main className="min-h-screen bg-background">
        <Navbar />
        <ComingSoon type="projects" />
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <ProjectsHero />
      <ProjectCardsGrid />
      <ExplainerSection />
      <ProjectsCTA />
      <Footer />
    </main>
  );
}
