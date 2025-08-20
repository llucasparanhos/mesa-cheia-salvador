import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ONGCard from "./ONGCard";
import { getFeaturedOngs } from "@/data/ongs";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const FeaturedONGs = () => {
  const featuredOngs = getFeaturedOngs();

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            ONGs em <span className="text-primary">Destaque</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Conheça algumas das organizações que estão fazendo a diferença no combate à fome em Salvador
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredOngs.map((ong) => (
            <ONGCard key={ong.id} ong={ong} variant="featured" />
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" asChild>
            <Link to="/ongs">
              Ver todas as ONGs
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedONGs;