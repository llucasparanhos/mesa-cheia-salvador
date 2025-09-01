import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, CreditCard, Shield, Users } from "lucide-react";

const steps = [
  {
    id: 1,
    icon: Heart,
    title: "Escolha o Valor",
    description: "Selecione um valor predefinido ou insira o valor que desejar doar"
  },
  {
    id: 2,
    icon: CreditCard,
    title: "Forma de Pagamento",
    description: "Pague com cartão de crédito ou PIX de forma rápida e segura"
  },
  {
    id: 3,
    icon: Shield,
    title: "Confirmação",
    description: "Receba a confirmação da doação e o comprovante por email"
  },
  {
    id: 4,
    icon: Users,
    title: "Impacto Gerado",
    description: "Acompanhe relatórios do impacto da sua doação na comunidade"
  }
];

const DonationSteps = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Como <span className="text-primary">Doar</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Um processo simples e transparente para sua doação
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card key={step.id} className="relative text-center p-6 hover:shadow-lg transition-all">
                <CardContent className="space-y-4">
                  {/* Step Number */}
                  <div className="absolute -top-3 -left-3 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                    {step.id}
                  </div>
                  
                  {/* Icon */}
                  <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  
                  {/* Content */}
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </CardContent>

                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-border transform -translate-y-1/2"></div>
                )}
              </Card>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button size="lg" className="text-lg px-8 py-3">
            <Heart className="h-5 w-5 mr-2" />
            Fazer Doação Agora
          </Button>
          <p className="text-sm text-muted-foreground mt-3">
            Sua doação faz a diferença na vida de quem mais precisa
          </p>
        </div>
      </div>
    </section>
  );
};

export default DonationSteps;