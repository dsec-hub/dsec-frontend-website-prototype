import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Launching Soon Section */}
      <div className="flex items-center justify-center min-h-[calc(100vh-80px)]">
        <div className="text-center px-4">
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">
            Launching Soon
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground">
            DSEC Member Portal - Login
          </p>
        </div>
      </div>

      <Footer />
    </main>
  );
}
