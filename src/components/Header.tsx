
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/5989655b-43e2-43a9-ac52-12cde6919822.png" 
              alt="soEventus Logo" 
              className="h-8 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-brand-orange transition-colors">
              Funcionalidades
            </a>
            <a href="#how-it-works" className="text-gray-600 hover:text-brand-orange transition-colors">
              Como Funciona
            </a>
            <a href="#pricing" className="text-gray-600 hover:text-brand-orange transition-colors">
              Preços
            </a>
            <a href="#blog" className="text-gray-600 hover:text-brand-orange transition-colors">
              Blog
            </a>
            <a href="#contact" className="text-gray-600 hover:text-brand-orange transition-colors">
              Contato
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-gray-600 hover:text-brand-orange">
              Entrar
            </Button>
            <Button className="bg-brand-orange hover:bg-brand-orange-dark text-white">
              Começar Grátis
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4 mt-4">
              <a href="#features" className="text-gray-600 hover:text-brand-orange transition-colors">
                Funcionalidades
              </a>
              <a href="#how-it-works" className="text-gray-600 hover:text-brand-orange transition-colors">
                Como Funciona
              </a>
              <a href="#pricing" className="text-gray-600 hover:text-brand-orange transition-colors">
                Preços
              </a>
              <a href="#blog" className="text-gray-600 hover:text-brand-orange transition-colors">
                Blog
              </a>
              <a href="#contact" className="text-gray-600 hover:text-brand-orange transition-colors">
                Contato
              </a>
              <div className="flex flex-col space-y-2 mt-4">
                <Button variant="ghost" className="text-gray-600 hover:text-brand-orange justify-start">
                  Entrar
                </Button>
                <Button className="bg-brand-orange hover:bg-brand-orange-dark text-white justify-start">
                  Começar Grátis
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
