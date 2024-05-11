import HeroSection from "@/components/HeroSection";
import SecondPage from "@/components/SecondPage";


export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.93] antialiased
        bg-grid-white/[0.02]">
      <HeroSection />
      <SecondPage />
    </main>

  );
}
