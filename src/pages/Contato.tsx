import Navigation from "@/components/Navigation";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import TrustSeals from "@/components/TrustSeals";
import DonationSteps from "@/components/DonationSteps";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const Contato = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive",
      });
      return;
    }

    // Simular envio do formulário
    toast({
      title: "Mensagem enviada!",
      description: "Obrigado pelo contato. Responderemos em breve.",
    });
    
    // Limpar formulário
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="py-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center space-y-4 mb-16">
            <h1 className="text-4xl md:text-5xl font-bold">
              Entre em <span className="text-primary">Contato</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Tem dúvidas, sugestões ou quer se tornar uma ONG parceira? 
              Estamos aqui para ajudar!
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-12">
            {/* Formulário de Contato */}
            <Card className="shadow-red">
              <CardHeader>
                <CardTitle className="text-2xl">Envie sua Mensagem</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="Seu nome completo"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="seu@email.com"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Assunto</Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      placeholder="Assunto da sua mensagem"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Mensagem *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Escreva sua mensagem aqui..."
                      rows={6}
                      required
                    />
                  </div>

                  <Button type="submit" variant="hero" size="lg" className="w-full">
                    <Send className="h-4 w-4 mr-2" />
                    Enviar Mensagem
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Informações de Contato */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">Informações de Contato</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="bg-primary/10 p-3 rounded-lg">
                          <Mail className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold">E-mail</h3>
                          <p className="text-muted-foreground">contato@mesacheia.org.br</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="bg-primary/10 p-3 rounded-lg">
                          <Phone className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold">Telefone</h3>
                          <p className="text-muted-foreground">(71) 9999-0000</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="bg-primary/10 p-3 rounded-lg">
                          <MapPin className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold">Localização</h3>
                          <p className="text-muted-foreground">Salvador, Bahia - Brasil</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Para ONGs */}
              <Card className="bg-gradient-to-r from-primary/5 to-secondary/5">
                <CardHeader>
                  <CardTitle className="text-xl">Para ONGs</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    É uma ONG que atua no combate à fome em Salvador? 
                    Entre em contato conosco para se tornar uma parceira!
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Cadastro gratuito na plataforma</li>
                    <li>• Visibilidade para seus projetos</li>
                    <li>• Ferramentas de transparência</li>
                    <li>• Suporte técnico especializado</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* FAQ Rápido */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-center mb-8">
              Perguntas <span className="text-primary">Frequentes</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Como posso confiar nas ONGs?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    Todas as ONGs parceiras são verificadas e devem fornecer relatórios 
                    de transparência regulares sobre o uso das doações.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Posso fazer doações recorrentes?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    Sim! Você pode configurar doações mensais automáticas para 
                    ter um impacto contínuo no combate à fome.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Como minha ONG pode participar?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    Entre em contato conosco através do formulário ou e-mail. 
                    Avaliaremos sua organização e ajudaremos no cadastro.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">As doações são seguras?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    Sim! Utilizamos gateways de pagamento seguros e criptografia 
                    para proteger todas as informações e transações.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
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

export default Contato;