import { Button } from "@/components/ui/button";
import { Heart, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="bg-gradient-hero p-2 rounded-lg group-hover:scale-105 transition-transform">
              <Heart className="h-6 w-6 text-white fill-current" />
            </div>
            <span className="text-xl font-bold text-primary">Mesa Cheia</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-foreground hover:text-primary transition-colors">
              Início
            </Link>
            <Link to="/ongs" className="text-foreground hover:text-primary transition-colors">
              ONGs
            </Link>
            <Link to="/sobre" className="text-foreground hover:text-primary transition-colors">
              Sobre
            </Link>
            <Link to="/contato" className="text-foreground hover:text-primary transition-colors">
              Contato
            </Link>
            <Button variant="donate" size="sm">
              Doe Agora
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Início
              </Link>
              <Link 
                to="/ongs" 
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                ONGs
              </Link>
              <Link 
                to="/sobre" 
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre
              </Link>
              <Link 
                to="/contato" 
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </Link>
              <Button variant="donate" size="sm" className="self-start">
                Doe Agora
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;