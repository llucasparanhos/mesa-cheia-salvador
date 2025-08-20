import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import FeaturedONGs from "@/components/FeaturedONGs";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <FeaturedONGs />
      </main>
    </div>
  );
};

export default Index;
