import Navigation from "@/components/Navigation";
import Testimonials from "@/components/Testimonials";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Users, Target, Award } from "lucide-react";
import { Link } from "react-router-dom";

const Sobre = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="py-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center space-y-4 mb-16">
            <h1 className="text-4xl md:text-5xl font-bold">
              Sobre o <span className="text-primary">Mesa Cheia</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Conectamos doadores a ONGs que combatem a fome em Salvador, 
              facilitando doações transparentes e eficazes para quem mais precisa.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Nossa Missão */}
            <Card className="shadow-red">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Heart className="h-6 w-6 text-primary" />
                  Nossa Missão
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  O Mesa Cheia nasceu da necessidade de conectar pessoas que querem ajudar 
                  com organizações que realmente fazem a diferença no combate à fome em Salvador.
                </p>
                <p className="text-muted-foreground">
                  Acreditamos que a transparência e a facilidade são fundamentais para 
                  aumentar o engajamento social e garantir que cada doação chegue onde é mais necessária.
                </p>
              </CardContent>
            </Card>

            {/* Como Funciona */}
            <Card className="shadow-warm">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Users className="h-6 w-6 text-primary" />
                  Como Funciona
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 rounded-full p-1">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                    </div>
                    <p className="text-sm">Você escolhe uma ONG cadastrada em nossa plataforma</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 rounded-full p-1">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                    </div>
                    <p className="text-sm">Define o valor e a frequência da sua doação</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 rounded-full p-1">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                    </div>
                    <p className="text-sm">Realiza o pagamento de forma segura</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 rounded-full p-1">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                    </div>
                    <p className="text-sm">Acompanha o impacto da sua contribuição</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* ODS 2 - Fome Zero */}
          <Card className="mb-16 bg-gradient-to-r from-primary/5 to-secondary/5">
            <CardContent className="p-8">
              <div className="text-center space-y-6">
                <div className="flex items-center justify-center gap-4">
                  <Target className="h-12 w-12 text-primary" />
                  <div>
                    <h2 className="text-3xl font-bold">ODS 2 - Fome Zero</h2>
                    <p className="text-lg text-muted-foreground">
                      Acabar com a fome, alcançar a segurança alimentar
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground max-w-3xl mx-auto">
                  O Mesa Cheia está alinhado com o Objetivo de Desenvolvimento Sustentável 2 da ONU, 
                  que visa acabar com a fome, alcançar a segurança alimentar e melhoria da nutrição, 
                  e promover a agricultura sustentável até 2030.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Estatísticas */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">12+</div>
                <div className="text-muted-foreground">ONGs Parceiras</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-muted-foreground">Famílias Atendidas</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">1000+</div>
                <div className="text-muted-foreground">Refeições/Mês</div>
              </CardContent>
            </Card>
          </div>

          {/* Nossa Equipe */}
          <Card className="mb-16">
            <CardHeader>
              <CardTitle className="flex items-center justify-center gap-3 text-2xl">
                <Award className="h-6 w-6 text-primary" />
                Nossa Equipe
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Somos um time de voluntários apaixonados por tecnologia e impacto social, 
                dedicados a criar soluções que conectem pessoas e transformem vidas.
              </p>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Trabalhamos em parceria com ONGs locais, garantindo que nossa plataforma 
                seja uma ferramenta eficaz para amplificar o impacto social em Salvador.
              </p>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">
              Faça parte desta <span className="text-primary">transformação</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Cada doação, por menor que seja, pode fazer a diferença na vida de uma família.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/ongs">
                  Conhecer ONGs
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/contato">
                  Entrar em Contato
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Testimonials />
    </div>
  );
};

export default Sobre;