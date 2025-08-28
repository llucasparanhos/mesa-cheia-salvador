import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import FeaturedONGs from "@/components/FeaturedONGs";
import Testimonials from "@/components/Testimonials";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <FeaturedONGs />
        <Testimonials />
      </main>
    </div>
  );
};

export default Index;
