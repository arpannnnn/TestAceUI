import HeroSection from "@/components/HeroSection";
import { TextRevealCardPreview } from "@/components/HiddenText";
import { LampSection } from "@/components/LampSection";
import { LastSection } from "@/components/LastSection";
import MyProjects from "@/components/MyProjects";
import { HeroNew } from "@/components/NewHero";
import SecondPage from "@/components/SecondPage";
import SlideCard from "@/components/SlideCard";





export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.93] antialiased
        bg-grid-white/[0.02]">
          <HeroNew />
      <HeroSection />
      <LampSection />
      <SecondPage />
      <MyProjects />
      <SlideCard />
      <LastSection />
      < TextRevealCardPreview />
      
    </main>

  );
}
