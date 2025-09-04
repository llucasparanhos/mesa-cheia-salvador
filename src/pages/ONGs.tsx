import Navigation from "@/components/Navigation";
import ONGCard from "@/components/ONGCard";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import TrustSeals from "@/components/TrustSeals";
import DonationSteps from "@/components/DonationSteps";
import Footer from "@/components/Footer";
import { ongs } from "@/data/ongs";
import { Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const ONGs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredOngs = ongs.filter(ong => 
    ong.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    ong.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    ong.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <a href="#main-content" className="skip-link">
        Pular para o conteúdo principal
      </a>
      <Navigation />
      
      <main id="main-content" className="py-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center space-y-4 mb-12">
            <h1 className="text-4xl md:text-5xl font-bold">
              <span className="text-primary">ONGs Parceiras</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Todas as organizações cadastradas que atuam no combate à fome em Salvador
            </p>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 max-w-2xl mx-auto">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Buscar ONGs por nome, descrição ou localização..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline" size="default">
              <Filter className="h-4 w-4 mr-2" />
              Filtros
            </Button>
          </div>

          {/* Results Count */}
          <div className="mb-8">
            <p className="text-muted-foreground">
              {filteredOngs.length} ONG{filteredOngs.length !== 1 ? 's' : ''} encontrada{filteredOngs.length !== 1 ? 's' : ''}
            </p>
          </div>

          {/* ONGs Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredOngs.map((ong) => (
              <ONGCard key={ong.id} ong={ong} />
            ))}
          </div>

          {/* No Results */}
          {filteredOngs.length === 0 && (
            <div className="text-center py-16">
              <h3 className="text-2xl font-semibold text-muted-foreground mb-2">
                Nenhuma ONG encontrada
              </h3>
              <p className="text-muted-foreground">
                Tente ajustar os termos de busca ou remover os filtros
              </p>
            </div>
          )}
        </div>
      </main>
      <Testimonials />
      <FAQ />
      <TrustSeals />
      <DonationSteps />
      <Footer />
    </div>
  );
};

export default ONGs;