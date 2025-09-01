import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import FeaturedONGs from "@/components/FeaturedONGs";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import TrustSeals from "@/components/TrustSeals";
import DonationSteps from "@/components/DonationSteps";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <FeaturedONGs />
        <Testimonials />
        <FAQ />
        <TrustSeals />
        <DonationSteps />
      </main>
    </div>
  );
};

export default Index;
