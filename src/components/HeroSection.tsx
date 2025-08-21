import { Button } from "@/components/ui/button";
import { useState } from "react";
import DonationModal from "@/components/DonationModal";

import { Card } from "@/components/ui/card";
import { Users, Heart, Target } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);
  return (
    <section className="relative bg-gradient-to-b from-primary/5 to-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                <span className="text-primary">Mesa Cheia</span>
                <br />
                <span className="text-primary">Conectando</span> corações
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Facilitamos doações para ONGs que combatem a fome em Salvador. 
                Juntos, podemos garantir que nenhuma mesa fique vazia.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" className="group" onClick={() => setIsDonationModalOpen(true)}>
                Doe Agora
                <Heart className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              </Button>
              <Button variant="outline" size="xl">
                Conhecer ONGs
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">12+</div>
                <div className="text-sm text-muted-foreground">ONGs Parceiras</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Famílias Atendidas</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-accent">1000+</div>
                <div className="text-sm text-muted-foreground">Refeições/Mês</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={heroImage} 
                alt="Voluntários distribuindo alimentos em Salvador"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
            
            {/* Floating Cards */}
            <Card className="absolute -bottom-6 -left-6 p-4 bg-white shadow-warm">
              <div className="flex items-center space-x-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Target className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm font-semibold">ODS 2</div>
                  <div className="text-xs text-muted-foreground">Fome Zero</div>
                </div>
              </div>
            </Card>
            
            <Card className="absolute -top-6 -right-6 p-4 bg-white shadow-red">
              <div className="flex items-center space-x-3">
                <div className="bg-secondary/10 p-2 rounded-lg">
                  <Users className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <div className="text-sm font-semibold">100%</div>
                  <div className="text-xs text-muted-foreground">Transparente</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      <DonationModal 
        open={isDonationModalOpen} 
        onOpenChange={setIsDonationModalOpen} 
      />
    </section>
  );
};

export default HeroSection;