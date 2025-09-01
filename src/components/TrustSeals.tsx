import { Shield, Star, Award, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const TrustSeals = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Selos de <span className="text-primary">Confiança</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Reconhecimento e validação da nossa transparência
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Reclame Aqui */}
          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="space-y-4">
              <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Reclame Aqui</h3>
                <div className="flex items-center justify-center gap-1 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mt-1">Nota 9.8/10</p>
                <p className="text-xs text-green-600 font-medium">Empresa Confiável</p>
              </div>
            </CardContent>
          </Card>

          {/* Google Meu Negócio */}
          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="space-y-4">
              <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center">
                <Star className="h-8 w-8 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Google</h3>
                <div className="flex items-center justify-center gap-1 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mt-1">4.9 estrelas</p>
                <p className="text-xs text-blue-600 font-medium">+1.200 avaliações</p>
              </div>
            </CardContent>
          </Card>

          {/* Certificação ONG */}
          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="space-y-4">
              <div className="w-16 h-16 mx-auto bg-purple-100 rounded-full flex items-center justify-center">
                <Award className="h-8 w-8 text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Certificado</h3>
                <p className="text-sm text-muted-foreground mt-2">OSCIP</p>
                <p className="text-xs text-purple-600 font-medium">Org. Civil de Interesse Público</p>
              </div>
            </CardContent>
          </Card>

          {/* Transparência */}
          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="space-y-4">
              <div className="w-16 h-16 mx-auto bg-emerald-100 rounded-full flex items-center justify-center">
                <CheckCircle className="h-8 w-8 text-emerald-600" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Transparência</h3>
                <p className="text-sm text-muted-foreground mt-2">100%</p>
                <p className="text-xs text-emerald-600 font-medium">Prestação de Contas</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TrustSeals;