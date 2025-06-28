
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-brand-orange-light/10 border border-brand-orange-light/20 rounded-full text-brand-orange text-sm font-medium mb-6 animate-fade-in">
            <span className="w-2 h-2 bg-brand-orange rounded-full mr-2"></span>
            Plataforma de Gestão de Eventos com IA
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight animate-slide-up">
            Transforme a gestão dos seus eventos com{" "}
            <span className="text-brand-orange">Inteligência Artificial</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in delay-200">
            Organize, execute e analise eventos de forma inteligente. Conecte-se com fornecedores e profissionais em uma plataforma completa.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-scale-in delay-400">
            <Button className="bg-brand-orange hover:bg-brand-orange-dark text-white px-8 py-6 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              Começar Grátis
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="px-8 py-6 text-lg rounded-lg border-2 hover:bg-gray-50">
              <Play className="mr-2 h-5 w-5" />
              Ver Demo
            </Button>
          </div>

          {/* Social Proof */}
          <div className="text-gray-500 text-sm animate-fade-in delay-600">
            <p className="mb-4">Confiado por organizadores de eventos em todo o Brasil</p>
            <div className="flex items-center justify-center space-x-8 opacity-60">
              <div className="text-2xl font-bold">+500</div>
              <div className="w-px h-8 bg-gray-300"></div>
              <div className="text-2xl font-bold">+1.2k</div>
              <div className="w-px h-8 bg-gray-300"></div>
              <div className="text-2xl font-bold">98%</div>
            </div>
            <div className="flex items-center justify-center space-x-8 text-xs mt-1">
              <span>Eventos Organizados</span>
              <span>Usuários Ativos</span>
              <span>Satisfação</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
