import ComingSoon from '@/components/auth/ComingSoon';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <ComingSoon type="about" />
      <Footer />
    </main>
  );
}
