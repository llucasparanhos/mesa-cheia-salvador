import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, ExternalLink } from "lucide-react";
import { ONG } from "@/data/ongs";
import { Link } from "react-router-dom";

interface ONGCardProps {
  ong: ONG;
  variant?: "default" | "featured";
}

const ONGCard = ({ ong, variant = "default" }: ONGCardProps) => {
  return (
    <Card className={`group hover:shadow-lg transition-all duration-300 ${
      variant === "featured" ? "ring-2 ring-primary/20 shadow-green" : ""
    }`}>
      <CardHeader className="p-0">
        <div className="relative overflow-hidden rounded-t-lg">
          <img 
            src={ong.image} 
            alt={`Logo da ${ong.name}`}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {variant === "featured" && (
            <Badge className="absolute top-3 left-3 bg-secondary text-secondary-foreground">
              Destaque
            </Badge>
          )}
        </div>
      </CardHeader>
      
      <CardContent className="p-6 space-y-4">
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
            {ong.name}
          </h3>
          <p className="text-muted-foreground text-sm line-clamp-3">
            {ong.description}
          </p>
        </div>
        
        <div className="flex items-center text-sm text-muted-foreground">
          <MapPin className="h-4 w-4 mr-1 text-primary" />
          {ong.location}
        </div>
      </CardContent>
      
      <CardFooter className="p-6 pt-0 flex gap-3">
        <Button variant="default" size="sm" className="flex-1">
          Doar Agora
        </Button>
        <Button variant="outline" size="sm" asChild>
          <Link to={`/ong/${ong.id}`}>
            Ver mais
            <ExternalLink className="ml-1 h-3 w-3" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ONGCard;