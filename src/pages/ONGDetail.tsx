import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { getOngById } from "@/data/ongs";
import { useParams, Link } from "react-router-dom";
import { 
  MapPin, Phone, Mail, Globe, ArrowLeft, Heart, CheckCircle,
  Users, Utensils, Calendar, Award, DollarSign, FileText,
  Shield, TrendingUp, Instagram
} from "lucide-react";
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
              {/* Header with Gallery */}
              <div className="space-y-6">
                <div className="relative rounded-xl overflow-hidden">
                  <Carousel className="w-full">
                    <CarouselContent>
                      {ong.gallery.map((image, index) => (
                        <CarouselItem key={index}>
                           <img 
                             src={image} 
                             alt={`Atividades da ${ong.name}: ${index === 0 ? 'distribuição de alimentos e atendimento às famílias' : index === 1 ? 'voluntários preparando refeições e organizando doações' : index === 2 ? 'comunidade sendo atendida e recebendo alimentos' : 'ações sociais e trabalho comunitário da organização'}`}
                            className="w-full h-80 object-cover"
                          />
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-4" />
                    <CarouselNext className="right-4" />
                  </Carousel>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                  <div className="absolute bottom-6 left-6 pointer-events-none">
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                      {ong.name}
                    </h1>
                    <div className="flex items-center text-white/90 mb-2">
                      <MapPin className="h-4 w-4 mr-2" />
                      {ong.location}
                    </div>
                    <div className="flex items-center text-white/90">
                      <Calendar className="h-4 w-4 mr-2" />
                      Fundada em {ong.foundedYear}
                    </div>
                  </div>
                  {ong.featured && (
                    <Badge className="absolute top-4 right-4 bg-secondary text-secondary-foreground">
                      Destaque
                    </Badge>
                  )}
                </div>
              </div>

              {/* Impact Metrics */}
              <div className="grid md:grid-cols-3 gap-6">
                <Card>
                  <CardContent className="p-6 text-center">
                    <Users className="h-8 w-8 mx-auto mb-2 text-primary" />
                    <div className="text-2xl font-bold text-primary">{ong.impact.familiesHelped.toLocaleString()}</div>
                    <div className="text-sm text-muted-foreground">Famílias Atendidas</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <Utensils className="h-8 w-8 mx-auto mb-2 text-primary" />
                    <div className="text-2xl font-bold text-primary">{ong.impact.mealsServed.toLocaleString()}</div>
                    <div className="text-sm text-muted-foreground">Refeições Servidas</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <TrendingUp className="h-8 w-8 mx-auto mb-2 text-primary" />
                    <div className="text-2xl font-bold text-primary">{ong.impact.monthlyBudget}</div>
                    <div className="text-sm text-muted-foreground">Orçamento Mensal</div>
                  </CardContent>
                </Card>
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

              {/* Financial Transparency */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <DollarSign className="h-5 w-5 mr-2 text-primary" />
                    Transparência Financeira
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center">
                      <FileText className="h-4 w-4 mr-2" />
                      Uso das Doações
                    </h4>
                    <p className="text-muted-foreground">{ong.financialInfo.donationUsage}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Custos Administrativos
                    </h4>
                    <p className="text-muted-foreground">{ong.financialInfo.adminCosts}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center">
                      <Shield className="h-4 w-4 mr-2" />
                      Prestação de Contas
                    </h4>
                    <p className="text-muted-foreground">{ong.financialInfo.transparency}</p>
                  </div>
                </CardContent>
              </Card>

              {/* Certifications */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Award className="h-5 w-5 mr-2 text-primary" />
                    Certificações e Selos
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {ong.certifications.map((cert, index) => (
                      <Badge key={index} variant="secondary" className="text-sm">
                        {cert}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* General Transparency */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2 text-primary" />
                    Compromisso com a Transparência
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
              <Card className="shadow-warm border-primary/20">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-primary">
                    Faça sua doação
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Sua contribuição faz a diferença na vida de muitas famílias
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-muted/50 rounded-lg p-4 text-center">
                    <p className="text-sm font-medium text-primary mb-2">
                      Transparência Garantida
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {ong.financialInfo.donationUsage}
                    </p>
                  </div>
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
                      Doação segura e protegida • Recibo fiscal disponível
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
                  {ong.contact.instagram && (
                    <div className="flex items-center">
                      <Instagram className="h-4 w-4 mr-3 text-muted-foreground" />
                      <a 
                        href={`https://instagram.com/${ong.contact.instagram.replace('@', '')}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm text-primary hover:underline"
                      >
                        {ong.contact.instagram}
                      </a>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Trust Indicators */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-center">Selos de Confiança</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="text-center">
                    <div className="bg-green-100 dark:bg-green-900/20 rounded-lg p-3 mb-2">
                      <Shield className="h-8 w-8 mx-auto text-green-600" />
                    </div>
                    <p className="text-sm font-medium">Organização Verificada</p>
                    <p className="text-xs text-muted-foreground">CNPJ regularizado e auditado</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-blue-100 dark:bg-blue-900/20 rounded-lg p-3 mb-2">
                      <Award className="h-8 w-8 mx-auto text-blue-600" />
                    </div>
                    <p className="text-sm font-medium">Certificação Ativa</p>
                    <p className="text-xs text-muted-foreground">Selos e certificações válidas</p>
                  </div>
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