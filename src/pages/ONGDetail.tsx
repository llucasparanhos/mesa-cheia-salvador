import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getOngById } from "@/data/ongs";
import { useParams, Link } from "react-router-dom";
import { MapPin, Phone, Mail, Globe, ArrowLeft, Heart, CheckCircle } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const ONGDetail = () => {
  const { id } = useParams<{ id: string }>();
  const ong = id ? getOngById(id) : null;

  if (!ong) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl font-bold text-muted-foreground mb-4">ONG não encontrada</h1>
            <Button asChild>
              <Link to="/ongs">Voltar para ONGs</Link>
            </Button>
          </div>
        </main>
      </div>
    );
  }

  const handleDonate = () => {
    toast({
      title: "Redirecionando para doação",
      description: `Você será direcionado para doar para ${ong.name}`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="py-8">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <Button variant="ghost" asChild className="mb-6">
            <Link to="/ongs">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Voltar para ONGs
            </Link>
          </Button>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Header */}
              <div className="space-y-6">
                <div className="relative rounded-xl overflow-hidden">
                  <img 
                    src={ong.image} 
                    alt={`Imagem da ${ong.name}`}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                      {ong.name}
                    </h1>
                    <div className="flex items-center text-white/90">
                      <MapPin className="h-4 w-4 mr-2" />
                      {ong.location}
                    </div>
                  </div>
                  {ong.featured && (
                    <Badge className="absolute top-4 right-4 bg-secondary text-secondary-foreground">
                      Destaque
                    </Badge>
                  )}
                </div>
              </div>

              {/* Description */}
              <Card>
                <CardHeader>
                  <CardTitle>Sobre a Organização</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{ong.description}</p>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Missão</h4>
                      <p className="text-muted-foreground">{ong.mission}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Transparency */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2 text-primary" />
                    Transparência
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{ong.transparency}</p>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Donation Card */}
              <Card className="shadow-warm">
                <CardHeader>
                  <CardTitle className="text-center text-2xl text-primary">
                    Faça sua doação
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-center text-muted-foreground">
                    Sua contribuição faz a diferença na vida de muitas famílias
                  </p>
                  <Button 
                    variant="hero" 
                    size="lg" 
                    className="w-full"
                    onClick={handleDonate}
                  >
                    <Heart className="h-5 w-5 mr-2" />
                    Doar Agora
                  </Button>
                  <div className="text-center">
                    <p className="text-xs text-muted-foreground">
                      Doação segura e protegida
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <Card>
                <CardHeader>
                  <CardTitle>Contato</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {ong.contact.phone && (
                    <div className="flex items-center">
                      <Phone className="h-4 w-4 mr-3 text-muted-foreground" />
                      <span className="text-sm">{ong.contact.phone}</span>
                    </div>
                  )}
                  {ong.contact.email && (
                    <div className="flex items-center">
                      <Mail className="h-4 w-4 mr-3 text-muted-foreground" />
                      <span className="text-sm">{ong.contact.email}</span>
                    </div>
                  )}
                  {ong.contact.website && (
                    <div className="flex items-center">
                      <Globe className="h-4 w-4 mr-3 text-muted-foreground" />
                      <a 
                        href={ong.contact.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm text-primary hover:underline"
                      >
                        Visitar site
                      </a>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ONGDetail;