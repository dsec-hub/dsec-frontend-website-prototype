import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import ExplainerSection from '@/components/projects/ExplainerSection';
import ProjectCardsGrid from '@/components/projects/ProjectCardsGrid';
import ProjectsCTA from '@/components/projects/ProjectsCTA';
import ProjectsHero from '@/components/projects/ProjectsHero';
import SmoothScroll from '@/components/SmoothScroll';

export default function ProjectsPage() {
  return (
    <SmoothScroll>
      <main className="min-h-screen bg-background">
        <Navbar />
        <ProjectsHero />
        <ProjectCardsGrid />
        <ExplainerSection />
        <ProjectsCTA />
        <Footer />
      </main>
    </SmoothScroll>
  );
}
