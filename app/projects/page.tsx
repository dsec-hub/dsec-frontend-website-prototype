import Navbar from '@/components/Navbar';
import ProjectsHero from '@/components/projects/ProjectsHero';
import ProjectCardsGrid from '@/components/projects/ProjectCardsGrid';
import ExplainerSection from '@/components/projects/ExplainerSection';
import ProjectsCTA from '@/components/projects/ProjectsCTA';
import Footer from '@/components/Footer';

export default function ProjectsPage() {
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
