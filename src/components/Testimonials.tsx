import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Maria Silva",
    role: "Doadora há 2 anos",
    content: "Ver o impacto direto das minhas doações nas famílias de Salvador me emociona. A plataforma Mesa Cheia me dá a confiança de que cada real está chegando onde precisa.",
    rating: 5,
    image: "👩🏽‍🦱"
  },
  {
    id: 2,
    name: "João Santos",
    role: "Voluntário e doador",
    content: "Incrível como é fácil fazer a diferença! Em poucos cliques consigo ajudar ONGs sérias que realmente estão transformando vidas. Recomendo a todos!",
    rating: 5,
    image: "👨🏾"
  },
  {
    id: 3,
    name: "Ana Costa",
    role: "Doadora mensal",
    content: "Minha doação recorrente me permite contribuir continuamente. É gratificante saber que estou ajudando a construir um futuro sem fome em Salvador.",
    rating: 5,
    image: "👩🏻"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            O que nossos <span className="text-primary">doadores</span> dizem
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Histórias reais de pessoas que fazem parte da nossa corrente do bem
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="relative border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <Quote className="h-8 w-8 text-primary/30" />
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center space-x-3 pt-4 border-t">
                  <div className="text-3xl">{testimonial.image}</div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground">
            <span className="text-primary font-semibold">+500</span> pessoas já fazem parte dessa corrente
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;